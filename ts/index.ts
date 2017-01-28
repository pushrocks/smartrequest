import * as https from 'https'

import * as plugins from './smartrequest.plugins'
import * as interfaces from './smartrequest.interfaces'

import { request } from './smartrequest.request'


export {
    request
}

export let get = async (domainArg: string, optionsArg: interfaces.SmartRequestOptions = {}) => {
    optionsArg.method = 'GET'
    let response = await request(domainArg, optionsArg)
    return response
}

export let post = async (domainArg: string, optionsArg: interfaces.SmartRequestOptions = {}) => {
    optionsArg.method = 'POST'
    let response = await request(domainArg, optionsArg)
    return response
}

export let put = async (domainArg: string, optionsArg: interfaces.SmartRequestOptions = {}) => {
    optionsArg.method = 'PUT'
    let response = await request(domainArg, optionsArg)
    return response
}

export let del = async (domainArg: string, optionsArg: interfaces.SmartRequestOptions = {}) => {
    optionsArg.method = 'DELETE'
    let response = await request(domainArg, optionsArg)
    return response
}
