import * as interfaces from './smartrequest.interfaces';
import { request } from './smartrequest.request';
export { request };
export declare let get: (domainArg: string, optionsArg?: interfaces.SmartRequestOptions) => Promise<{}>;
export declare let post: (domainArg: string, optionsArg?: interfaces.SmartRequestOptions) => Promise<{}>;
export declare let put: (domainArg: string, optionsArg?: interfaces.SmartRequestOptions) => Promise<{}>;
export declare let del: (domainArg: string, optionsArg?: interfaces.SmartRequestOptions) => Promise<{}>;
