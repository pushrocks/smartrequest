import * as https from "https";
import * as plugins from "./smartrequest.plugins";
import * as interfaces from "./smartrequest.interfaces";

import { IncomingMessage } from "http";

export interface IExtendedIncomingMessage extends IncomingMessage {
  body: any;
}

const buildUtf8Response = (
  incomingMessageArg: IncomingMessage
): Promise<IExtendedIncomingMessage> => {
  let done = plugins.smartpromise.defer<IExtendedIncomingMessage>();
  // Continuously update stream with data
  let body = "";
  incomingMessageArg.on("data", function(chunkArg) {
    body += chunkArg;
  });

  incomingMessageArg.on("end", function() {
    try {
      (incomingMessageArg as IExtendedIncomingMessage).body = JSON.parse(body);
    } catch (err) {
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
    path: result[2]
  }
}

export let request = async (
  domainArg: string,
  optionsArg: interfaces.ISmartRequestOptions = {},
  streamArg: boolean = false
): Promise<IExtendedIncomingMessage> => {
  let done = plugins.smartpromise.defer<any>();

  // parse url
  let parsedUrl: plugins.url.Url;
  parsedUrl = plugins.url.parse(domainArg);
  optionsArg.hostname = parsedUrl.hostname;
  if (parsedUrl.port) {
    optionsArg.port = parseInt(parsedUrl.port);
  }
  optionsArg.path = parsedUrl.path;

  // determine if unixsock
  if(testForUnixSock(domainArg)) {
    const detailedUnixPath = parseSocketPathAndRoute(optionsArg.path)
    optionsArg.socketPath = detailedUnixPath.socketPath;
    optionsArg.path = detailedUnixPath.path;
  }
  
  // lets determine the request module to use
  const requestModule = (() => {
    if (parsedUrl.protocol === "https:") {
      return plugins.https;
    } else if (parsedUrl.protocol === "http:") {
      return plugins.http;
    } else {
      throw new Error(`unsupported protocol: ${parsedUrl.protocol}`);
    }
  })() as typeof plugins.https;


  // lets perform the actual request
  let request = requestModule.request(optionsArg);

  // lets write the requestBody
  if (optionsArg.requestBody) {
    if (
      typeof optionsArg.requestBody !== "string"
      && !(optionsArg.requestBody instanceof plugins.formData)
    ) {
      optionsArg.requestBody = JSON.stringify(optionsArg.requestBody);
      request.write(optionsArg.requestBody);
      request.end();
    } else if (optionsArg.requestBody instanceof plugins.formData) {
      optionsArg.requestBody.pipe(request);
    }
  } else {
    request.end();
  }

  // lets handle an error
  request.on("error", e => {
    console.error(e);
  });

  // lets handle the response
  request.on("response", async response => {
    if (streamArg) {
      done.resolve(response);
    } else {
      const builtResponse = await buildUtf8Response(response)
      done.resolve(builtResponse);
    }
  });

  const result = await done.promise;
  return result;
};
