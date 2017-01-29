import * as interfaces from './smartrequest.interfaces';
export { request } from './smartrequest.request';
export { ISmartRequestOptions } from './smartrequest.interfaces';
export declare let get: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<{}>;
export declare let post: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<{}>;
export declare let put: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<{}>;
export declare let del: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<{}>;
