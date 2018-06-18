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
const plugins = require("./smartrequest.plugins");
exports.getBinary = (domainArg, optionsArg = {}) => __awaiter(this, void 0, void 0, function* () {
    const done = plugins.smartq.defer();
    const response = yield smartrequest_request_1.request(domainArg, optionsArg, true);
    const data = [];
    response.on('data', function (chunk) {
        data.push(chunk);
    }).on('end', function () {
        //at this point data is an array of Buffers
        //so Buffer.concat() can make us a new Buffer
        //of all of them together
        const buffer = Buffer.concat(data);
        response.body = buffer.toString('binary');
        done.resolve();
    });
    yield done.promise;
    return response;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRyZXF1ZXN0LmJpbmFyeXJlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHJlcXVlc3QuYmluYXJ5cmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsaUVBQWlEO0FBRWpELGtEQUFrRDtBQUVyQyxRQUFBLFNBQVMsR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLEVBQUU7SUFDckcsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxNQUFNLFFBQVEsR0FBRyxNQUFNLDhCQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFFaEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBUyxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUNULDJDQUEyQztRQUMzQyw2Q0FBNkM7UUFDN0MseUJBQXlCO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNuQixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUEsQ0FBQSJ9