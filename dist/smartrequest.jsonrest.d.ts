import * as interfaces from './smartrequest.interfaces';
/**
 * gets Json and puts the right headers + handles response aggregation
 * @param domainArg
 * @param optionsArg
 */
export declare const getJson: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<import("./smartrequest.request").extendedIncomingMessage>;
export declare const postJson: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<import("./smartrequest.request").extendedIncomingMessage>;
export declare const putJson: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<import("./smartrequest.request").extendedIncomingMessage>;
export declare const delJson: (domainArg: string, optionsArg?: interfaces.ISmartRequestOptions) => Promise<import("./smartrequest.request").extendedIncomingMessage>;
