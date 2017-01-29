import * as https from 'https'
import * as plugins from './smartrequest.plugins'
import * as interfaces from './smartrequest.interfaces'

let buildResponse = (responseArg): Promise<any> => {
    let done = plugins.q.defer()
    // Continuously update stream with data
    let body = '';
    responseArg.on('data', function (chunkArg) {
        body += chunkArg;
    });
    responseArg.on('end', function () {
        try {
            responseArg.body = JSON.parse(body);
        } catch(err) {
            responseArg.body = body
        }
        done.resolve(responseArg)
    });
    return done.promise
}

export let request = async (domainArg: string, optionsArg: interfaces.ISmartRequestOptions = {}, streamArg: boolean = false) => {
    let done = plugins.q.defer()
    let parsedUrl: plugins.url.Url
    if (domainArg) {
        parsedUrl = plugins.url.parse(domainArg)
        optionsArg.hostname = parsedUrl.hostname
        if(parsedUrl.port) { optionsArg.port = parseInt(parsedUrl.port) }
        optionsArg.path = parsedUrl.path
    }
    if (!parsedUrl || parsedUrl.protocol === 'https:') {
        let request = plugins.https.request(optionsArg, response => {
            if (streamArg) {
                done.resolve(response)
            } else {
                buildResponse(response).then(done.resolve)
            }
        })
        if (optionsArg.requestBody) {
            if(typeof optionsArg.requestBody !== 'string') {
                optionsArg.requestBody = JSON.stringify(optionsArg.requestBody)
            }
            request.write(optionsArg.requestBody)
        }
        request.on('error', (e) => {
            console.error(e);
        })
        request.end()
    } else if (parsedUrl.protocol === 'http:') {
        let request = plugins.http.request(optionsArg, response => {
            if (streamArg) {
                done.resolve(response)
            } else {
                buildResponse(response).then(done.resolve)
            }
        })
        if (optionsArg.requestBody) {
            if(typeof optionsArg.requestBody !== 'string') {
                optionsArg.requestBody = JSON.stringify(optionsArg.requestBody)
            }
            request.write(optionsArg.requestBody)
        }
        request.on('error', (e) => {
            console.error(e);
        })
        request.end()
    } else {
        throw new Error(`unsupported protocol: ${parsedUrl.protocol}`)
    }
    return done.promise
}