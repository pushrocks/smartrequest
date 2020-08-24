import * as plugins from './smartrequest.plugins';
import * as interfaces from './smartrequest.interfaces';

import { IncomingMessage } from 'http';

export interface IExtendedIncomingMessage extends IncomingMessage {
  body: any;
}

const buildUtf8Response = (
  incomingMessageArg: IncomingMessage,
  autoJsonParse = true
): Promise<IExtendedIncomingMessage> => {
  const done = plugins.smartpromise.defer<IExtendedIncomingMessage>();
  // Continuously update stream with data
  let body = '';
  incomingMessageArg.on('data', (chunkArg) => {
    body += chunkArg;
  });

  incomingMessageArg.on('end', () => {
    if (autoJsonParse) {
      try {
        (incomingMessageArg as IExtendedIncomingMessage).body = JSON.parse(body);
      } catch (err) {
        (incomingMessageArg as IExtendedIncomingMessage).body = body;
      }
    } else {
      (incomingMessageArg as IExtendedIncomingMessage).body = body;
    }
    done.resolve(incomingMessageArg as IExtendedIncomingMessage);
  });
  return done.promise;
};

/**
 * determine wether a url is a unix sock
 * @param urlArg
 */
const testForUnixSock = (urlArg: string): boolean => {
  const unixRegex = /^(http:\/\/|https:\/\/|)unix:/;
  return unixRegex.test(urlArg);
};

/**
 * determine socketPath and path for unixsock
 */
const parseSocketPathAndRoute = (stringToParseArg: string) => {
  const parseRegex = /(.*):(.*)/;
  const result = parseRegex.exec(stringToParseArg);
  return {
    socketPath: result[1],
    path: result[2],
  };
};

/**
 * a custom http agent to make sure we can set custom keepAlive options for speedy subsequent calls
 */
const httpAgent = new plugins.agentkeepalive.default();

/**
 * a custom http agent to make sure we can set custom keepAlive options for speedy subsequent calls
 */
const httpAgentKeepAliveFalse = new plugins.http.Agent({
  maxFreeSockets: 0,
  keepAlive: false,
  keepAliveMsecs: 0,
});

/**
 * a custom https agent to make sure we can set custom keepAlive options for speedy subsequent calls
 */
const httpsAgent = new plugins.agentkeepalive.HttpsAgent();

/**
 * a custom https agent to make sure we can set custom keepAlive options for speedy subsequent calls
 */
const httpsAgentKeepAliveFalse = new plugins.https.Agent({
  maxFreeSockets: 0,
  keepAlive: false,
  keepAliveMsecs: 0,
});

export let request = async (
  domainArg: string,
  optionsArg: interfaces.ISmartRequestOptions = {},
  responseStreamArg: boolean = false,
  requestDataFunc: (req: plugins.http.ClientRequest) => void = null
): Promise<IExtendedIncomingMessage> => {
  const done = plugins.smartpromise.defer<any>();

  // merge options
  const defaultOptions: interfaces.ISmartRequestOptions = {
    // agent: agent,
    autoJsonParse: true,
    keepAlive: true,
  };

  optionsArg = {
    ...defaultOptions,
    ...optionsArg,
  };

  // parse url
  const parsedUrl = plugins.url.parse(domainArg);
  optionsArg.hostname = parsedUrl.hostname;
  if (parsedUrl.port) {
    optionsArg.port = parseInt(parsedUrl.port, 10);
  }
  optionsArg.path = parsedUrl.path;

  // determine if unixsock
  if (testForUnixSock(domainArg)) {
    const detailedUnixPath = parseSocketPathAndRoute(optionsArg.path);
    optionsArg.socketPath = detailedUnixPath.socketPath;
    optionsArg.path = detailedUnixPath.path;
  }

  // TODO: support tcp sockets

  // lets determine the request module to use
  const requestModule = (() => {
    switch (true) {
      case parsedUrl.protocol === 'https:' && optionsArg.keepAlive:
        optionsArg.agent = httpsAgent;
        return plugins.https;
      case parsedUrl.protocol === 'https:' && !optionsArg.keepAlive:
        optionsArg.agent = httpsAgentKeepAliveFalse;
        return plugins.https;
      case parsedUrl.protocol === 'http:' && optionsArg.keepAlive:
        optionsArg.agent = httpAgent;
        return plugins.http;
      case parsedUrl.protocol === 'http:' && !optionsArg.keepAlive:
        optionsArg.agent = httpAgentKeepAliveFalse;
        return plugins.http;
    }
  })() as typeof plugins.https;

  // lets perform the actual request
  const requestToFire = requestModule.request(optionsArg, async (response) => {
    if (responseStreamArg) {
      done.resolve(response);
    } else {
      const builtResponse = await buildUtf8Response(response, optionsArg.autoJsonParse);
      done.resolve(builtResponse);
    }
  });

  // lets write the requestBody
  if (optionsArg.requestBody) {
    if (optionsArg.requestBody instanceof plugins.formData) {
      optionsArg.requestBody.pipe(requestToFire).on('finish', (event) => {
        requestToFire.end();
      });
    } else {
      if (typeof optionsArg.requestBody !== 'string') {
        optionsArg.requestBody = JSON.stringify(optionsArg.requestBody);
      }
      requestToFire.write(optionsArg.requestBody);
      requestToFire.end();
    }
  } else if (requestDataFunc) {
    requestDataFunc(requestToFire);
  } else {
    requestToFire.end();
  }

  // lets handle an error
  requestToFire.on('error', (e) => {
    console.error(e);
  });

  const result = await done.promise;
  return result;
};
