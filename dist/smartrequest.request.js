"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRyZXF1ZXN0LnJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHJlcXVlc3QucmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxrREFBaUQ7QUFHakQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxXQUFXO0lBQzVCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsdUNBQXVDO0lBQ3ZDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNkLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsUUFBUTtRQUNyQyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDbEIsSUFBSSxDQUFDO1lBQ0QsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFBQyxLQUFLLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1YsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUE7QUFFVSxRQUFBLE9BQU8sR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBNkMsRUFBRSxFQUFFLFlBQXFCLEtBQUs7SUFDdEgsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixJQUFJLFNBQTBCLENBQUE7SUFDOUIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNaLFNBQVMsR0FBRyxPQUFPLENBQUMs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