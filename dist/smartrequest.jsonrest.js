"use strict";
// This file implements methods to get and post JSON in a simple manner.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const smartrequest_request_1 = require("./smartrequest.request");
/**
 * gets Json and puts the right headers + handles response aggregation
 * @param domainArg
 * @param optionsArg
 */
exports.getJson = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'GET';
    optionsArg.headers = Object.assign({}, optionsArg.headers);
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.postJson = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'POST';
    if (typeof optionsArg.requestBody === 'object' &&
        (!optionsArg.headers || !optionsArg.headers['Content-Type'])) {
        // make sure headers exist
        if (!optionsArg.headers) {
            optionsArg.headers = {};
        }
        // assign the right Content-Type, leaving all other headers in place
        optionsArg.headers = Object.assign({}, optionsArg.headers, { 'Content-Type': 'application/json' });
    }
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.putJson = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'PUT';
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.delJson = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'DELETE';
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRyZXF1ZXN0Lmpzb25yZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRyZXF1ZXN0Lmpzb25yZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3RUFBd0U7Ozs7Ozs7Ozs7QUFHeEUsaUVBQWlEO0FBRWpEOzs7O0dBSUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDbkcsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUIsVUFBVSxDQUFDLE9BQU8scUJBQ2IsVUFBVSxDQUFDLE9BQU8sQ0FFdEIsQ0FBQTtJQUNELElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDcEcsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDM0IsSUFDRSxPQUFPLFVBQVUsQ0FBQyxXQUFXLEtBQUssUUFBUTtRQUMxQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsRUFDNUQ7UUFDQSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDekI7UUFFRCxvRUFBb0U7UUFDcEUsVUFBVSxDQUFDLE9BQU8scUJBQ2IsVUFBVSxDQUFDLE9BQU8sSUFDckIsY0FBYyxFQUFFLGtCQUFrQixHQUNuQyxDQUFDO0tBQ0g7SUFDRCxJQUFJLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBTyxTQUFpQixFQUFFLGFBQThDLEVBQUUsRUFBRSxFQUFFO0lBQ25HLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzFCLElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDbkcsVUFBVSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDN0IsSUFBSSxRQUFRLEdBQUcsTUFBTSw4QkFBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUEsQ0FBQyJ9