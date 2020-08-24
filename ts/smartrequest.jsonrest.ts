// This file implements methods to get and post JSON in a simple manner.

import * as interfaces from './smartrequest.interfaces';
import { request } from './smartrequest.request';

/**
 * gets Json and puts the right headers + handles response aggregation
 * @param domainArg
 * @param optionsArg
 */
export const getJson = async (
  domainArg: string,
  optionsArg: interfaces.ISmartRequestOptions = {}
) => {
  optionsArg.method = 'GET';
  optionsArg.headers = {
    ...optionsArg.headers,
  };
  let response = await request(domainArg, optionsArg);
  return response;
};

export const postJson = async (
  domainArg: string,
  optionsArg: interfaces.ISmartRequestOptions = {}
) => {
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
    optionsArg.headers = {
      ...optionsArg.headers,
      'Content-Type': 'application/json',
    };
  }
  let response = await request(domainArg, optionsArg);
  return response;
};

export const putJson = async (
  domainArg: string,
  optionsArg: interfaces.ISmartRequestOptions = {}
) => {
  optionsArg.method = 'PUT';
  let response = await request(domainArg, optionsArg);
  return response;
};

export const delJson = async (
  domainArg: string,
  optionsArg: interfaces.ISmartRequestOptions = {}
) => {
  optionsArg.method = 'DELETE';
  let response = await request(domainArg, optionsArg);
  return response;
};
