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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsaUVBQWdEO0FBRWhELCtEQUFnRDtBQUF2Qyx5Q0FBQSxPQUFPLENBQUE7QUFHTCxRQUFBLEdBQUcsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRTtJQUN6RixVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUN6QixJQUFJLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ25ELE1BQU0sQ0FBQyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBLENBQUE7QUFFVSxRQUFBLElBQUksR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRTtJQUMxRixVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUMxQixJQUFJLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ25ELE1BQU0sQ0FBQyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBLENBQUE7QUFFVSxRQUFBLEdBQUcsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRTtJQUN6RixVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUN6QixJQUFJLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ25ELE1BQU0sQ0FBQyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBLENBQUE7QUFFVSxRQUFBLEdBQUcsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRTtJQUN6RixVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtJQUM1QixJQUFJLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ25ELE1BQU0sQ0FBQyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBLENBQUEifQ==