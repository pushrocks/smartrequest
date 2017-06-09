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
const plugins = require("./smartrequest.plugins");
let buildResponse = (responseArg) => {
    let done = plugins.q.defer();
    // Continuously update stream with data
    let body = '';
    responseArg.on('data', function (chunkArg) {
        body += chunkArg;
    });
    responseArg.on('end', function () {
        try {
            responseArg.body = JSON.parse(body);
        }
        catch (err) {
            responseArg.body = body;
        }
        done.resolve(responseArg);
    });
    return done.promise;
};
exports.request = (domainArg, optionsArg = {}, streamArg = false) => __awaiter(this, void 0, void 0, function* () {
    let done = plugins.q.defer();
    let parsedUrl;
    if (domainArg) {
        parsedUrl = plugins.url.parse(domainArg);
        optionsArg.hostname = parsedUrl.hostname;
        if (parsedUrl.port) {
            optionsArg.port = parseInt(parsedUrl.port);
        }
        optionsArg.path = parsedUrl.path;
    }
    if (!parsedUrl || parsedUrl.protocol === 'https:') {
        let request = plugins.https.request(optionsArg, response => {
            if (streamArg) {
                done.resolve(response);
            }
            else {
                buildResponse(response).then(done.resolve);
            }
        });
        if (optionsArg.requestBody) {
            if (typeof optionsArg.requestBody !== 'string') {
                optionsArg.requestBody = JSON.stringify(optionsArg.requestBody);
            }
            request.write(optionsArg.requestBody);
        }
        request.on('error', (e) => {
            console.error(e);
        });
        request.end();
    }
    else if (parsedUrl.protocol === 'http:') {
        let request = plugins.http.request(optionsArg, response => {
            if (streamArg) {
                done.resolve(response);
            }
            else {
                buildResponse(response).then(done.resolve);
            }
        });
        if (optionsArg.requestBody) {
            if (typeof optionsArg.requestBody !== 'string') {
                optionsArg.requestBody = JSON.stringify(optionsArg.requestBody);
            }
            request.write(optionsArg.requestBody);
        }
        request.on('error', (e) => {
            console.error(e);
        });
        request.end();
    }
    else {
        throw new Error(`unsupported protocol: ${parsedUrl.protocol}`);
    }
    return done.promise;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRyZXF1ZXN0LnJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHJlcXVlc3QucmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esa0RBQWlEO0FBR2pELElBQUksYUFBYSxHQUFHLENBQUMsV0FBVztJQUM5QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVCLHVDQUF1QztJQUN2QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7SUFDYixXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLFFBQVE7UUFDdkMsSUFBSSxJQUFJLFFBQVEsQ0FBQTtJQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNGLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQ3BCLElBQUksQ0FBQztZQUNILFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBRVUsUUFBQSxPQUFPLEdBQUcsQ0FBTyxTQUFpQixFQUFFLGFBQThDLEVBQUUsRUFBRSxZQUFxQixLQUFLO0lBQ3pILElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFPLENBQUE7SUFDakMsSUFBSSxTQUEwQixDQUFBO0lBQzlCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDZCxTQUFTLEdBQUcsT0FBTyxDQUFD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