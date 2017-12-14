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
    if (typeof optionsArg.requestBody === 'object'
        && (!optionsArg.headers || (!optionsArg.headers['Content-Type']))) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsaUVBQWdEO0FBRWhELCtEQUFnRDtBQUF2Qyx5Q0FBQSxPQUFPLENBQUE7QUFHTCxRQUFBLEdBQUcsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDN0YsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDekIsSUFBSSxRQUFRLEdBQUcsTUFBTSw4QkFBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUNuRCxNQUFNLENBQUMsUUFBUSxDQUFBO0FBQ2pCLENBQUMsQ0FBQSxDQUFBO0FBRVUsUUFBQSxJQUFJLEdBQUcsQ0FBTyxTQUFpQixFQUFFLGFBQThDLEVBQUUsRUFBRSxFQUFFO0lBQzlGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQzFCLEVBQUUsQ0FBQyxDQUNELE9BQU8sVUFBVSxDQUFDLFdBQVcsS0FBSyxRQUFRO1dBQ3ZDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQ2xFLENBQUMsQ0FBQSxDQUFDO1FBQ0EsMEJBQTBCO1FBQzFCLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQTtRQUFDLENBQUM7UUFFbkQsb0VBQW9FO1FBQ3BFLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxJQUFJLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ25ELE1BQU0sQ0FBQyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBLENBQUE7QUFFVSxRQUFBLEdBQUcsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDN0YsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDekIsSUFBSSxRQUFRLEdBQUcsTUFBTSw4QkFBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUNuRCxNQUFNLENBQUMsUUFBUSxDQUFBO0FBQ2pCLENBQUMsQ0FBQSxDQUFBO0FBRVUsUUFBQSxHQUFHLEdBQUcsQ0FBTyxTQUFpQixFQUFFLGFBQThDLEVBQUUsRUFBRSxFQUFFO0lBQzdGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFBO0lBQzVCLElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUNqQixDQUFDLENBQUEsQ0FBQSJ9