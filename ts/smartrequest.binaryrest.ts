// this file implements methods to get and post binary data.
import * as interfaces from './smartrequest.interfaces';
import { request } from './smartrequest.request';

import * as plugins from './smartrequest.plugins';

export const getBinary = async (
  domainArg: string,
  optionsArg: interfaces.ISmartRequestOptions = {}
) => {
  const done = plugins.smartpromise.defer();
  const response = await request(domainArg, optionsArg, true);
  const data = [];

  response
    .on('data', function(chunk) {
      data.push(chunk);
    })
    .on('end', function() {
      //at this point data is an array of Buffers
      //so Buffer.concat() can make us a new Buffer
      //of all of them together
      const buffer = Buffer.concat(data);
      response.body = buffer;
      done.resolve();
    });
  await done.promise;
  return response;
};
