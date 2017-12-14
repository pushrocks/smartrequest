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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRyZXF1ZXN0LnJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHJlcXVlc3QucmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esa0RBQWlEO0FBR2pELElBQUksYUFBYSxHQUFHLENBQUMsV0FBVyxFQUFnQixFQUFFO0lBQ2hELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsdUNBQXVDO0lBQ3ZDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNiLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsUUFBUTtRQUN2QyxJQUFJLElBQUksUUFBUSxDQUFBO0lBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDcEIsSUFBSSxDQUFDO1lBQ0gsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2IsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUNyQixDQUFDLENBQUE7QUFFVSxRQUFBLE9BQU8sR0FBRyxDQUFPLFNBQWlCLEVBQUUsYUFBOEMsRUFBRSxFQUFFLFlBQXFCLEtBQUssRUFBcUIsRUFBRTtJQUNoSixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBTyxDQUFBO0lBQ2pDLElBQUksU0FBMEIsQ0FBQTtJQUM5QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2QsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3hDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQTtRQUN4QyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUFDLENBQUM7UUFDbEUsVUFBVSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFBO0lBQ2xDLENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQ3pELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN4QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDNUMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDakUsQ0FBQztZQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFDRCxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDZixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDeEQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3hCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM1QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0MsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNqRSxDQUFDO1lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdkMsQ0FBQztRQUNELE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNmLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUNyQixDQUFDLENBQUEsQ0FBQSJ9