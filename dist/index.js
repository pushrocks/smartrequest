"use strict";
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
var smartrequest_request_2 = require("./smartrequest.request");
exports.request = smartrequest_request_2.request;
exports.get = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'GET';
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.post = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'POST';
    if (typeof optionsArg.requestBody === 'object' &&
        (!optionsArg.headers || !optionsArg.headers['Content-Type'])) {
        // make sure headers exist
        if (!optionsArg.headers) {
            optionsArg.headers = {};
        }
        // assign the right Content-Type, leaving all other headers in place
        Object.assign(optionsArg.headers, {
            'Content-Type': 'application/json'
        });
    }
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.put = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'PUT';
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
exports.del = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    optionsArg.method = 'DELETE';
    let response = yield smartrequest_request_1.request(domainArg, optionsArg);
    return response;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsaUVBQWlEO0FBRWpELCtEQUFpRDtBQUF4Qyx5Q0FBQSxPQUFPLENBQUE7QUFHTCxRQUFBLEdBQUcsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDN0YsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUIsSUFBSSxRQUFRLEdBQUcsTUFBTSw4QkFBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUEsQ0FBQztBQUVTLFFBQUEsSUFBSSxHQUFHLENBQU8sU0FBaUIsRUFBRSxhQUE4QyxFQUFFLEVBQUUsRUFBRTtJQUM5RixVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUMzQixJQUNFLE9BQU8sVUFBVSxDQUFDLFdBQVcsS0FBSyxRQUFRO1FBQzFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUM1RDtRQUNBLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2QixVQUFVLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELG9FQUFvRTtRQUNwRSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDLENBQUM7S0FDSjtJQUNELElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFBLENBQUM7QUFFUyxRQUFBLEdBQUcsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDN0YsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUIsSUFBSSxRQUFRLEdBQUcsTUFBTSw4QkFBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUEsQ0FBQztBQUVTLFFBQUEsR0FBRyxHQUFHLENBQU8sU0FBaUIsRUFBRSxhQUE4QyxFQUFFLEVBQUUsRUFBRTtJQUM3RixVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUM3QixJQUFJLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQSxDQUFDIn0=