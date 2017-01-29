"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxpRUFBZ0Q7QUFHaEQsK0RBQWdEO0FBQXZDLHlDQUFBLE9BQU8sQ0FBQTtBQUdMLFFBQUEsR0FBRyxHQUFHLENBQU8sU0FBaUIsRUFBRSxhQUE4QyxFQUFFO0lBQ3ZGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3pCLElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUNuQixDQUFDLENBQUEsQ0FBQTtBQUVVLFFBQUEsSUFBSSxHQUFHLENBQU8sU0FBaUIsRUFBRSxhQUE4QyxFQUFFO0lBQ3hGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQzFCLElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUNuQixDQUFDLENBQUEsQ0FBQTtBQUVVLFFBQUEsR0FBRyxHQUFHLENBQU8sU0FBaUIsRUFBRSxhQUE4QyxFQUFFO0lBQ3ZGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3pCLElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUNuQixDQUFDLENBQUEsQ0FBQTtBQUVVLFFBQUEsR0FBRyxHQUFHLENBQU8sU0FBaUIsRUFBRSxhQUE4QyxFQUFFO0lBQ3ZGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFBO0lBQzVCLElBQUksUUFBUSxHQUFHLE1BQU0sOEJBQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUNuQixDQUFDLENBQUEsQ0FBQSJ9