import * as https from 'https';

import * as plugins from './smartrequest.plugins';
import * as interfaces from './smartrequest.interfaces';

import { request } from './smartrequest.request';

export { request } from './smartrequest.request';
export { ISmartRequestOptions } from './smartrequest.interfaces';

export let get = async (domainArg: string, optionsArg: interfaces.ISmartRequestOptions = {}) => {
  optionsArg.method = 'GET';
  let response = await request(domainArg, optionsArg);
  return response;
};

export let post = async (domainArg: string, optionsArg: interfaces.ISmartRequestOptions = {}) => {
  optionsArg.method = 'POST';
  if (
    typeof optionsArg.requestBody === 'object' &&
    (!optionsArg.headers || !optionsArg.headers['Content-Type'])
  ) {
    // make sure headers exist
    if (!optionsArg.headers) {
      optionsArg.headers = {};
    }

    // assign the right Content-Type, leaving all other headers in place
    Object.assign(optionsArg.headers, {
      'Content-Type': 'application/json'
    });
  }
  let response = await request(domainArg, optionsArg);
  return response;
};

export let put = async (domainArg: string, optionsArg: interfaces.ISmartRequestOptions = {}) => {
  optionsArg.method = 'PUT';
  let response = await request(domainArg, optionsArg);
  return response;
};

export let del = async (domainArg: string, optionsArg: interfaces.ISmartRequestOptions = {}) => {
  optionsArg.method = 'DELETE';
  let response = await request(domainArg, optionsArg);
  return response;
};
