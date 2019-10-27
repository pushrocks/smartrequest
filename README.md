# @pushrocks/smartrequest
dropin replacement for request

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartrequest)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartrequest)
* [github.com (source mirror)](https://github.com/pushrocks/smartrequest)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartrequest/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartrequest/badges/master/build.svg)](https://gitlab.com/pushrocks/smartrequest/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartrequest/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartrequest/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartrequest.svg)](https://www.npmjs.com/package/@pushrocks/smartrequest)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartrequest/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartrequest)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

### Features

* supports http
* supports https
* supports unix socks
* supports formData
* supports file uploads
* supports best practice keepAlive
* dedicated functions for working with JSON request/response cycles
* written in TypeScript
* continuously updated
* uses node native http and https modules
* used in modules like @pushrocks/smartproxy and @apiglobal/typedrequest
* commercial support available at [https://lossless.support](https://lossless.support)

> note: smartrequest uses the **native** node request module under the hood (not the one from npm)

```javascript
import * as smartrequest from 'smartrequest'

// simple post
let options: smartrequest.ISmartRequestOptions = { // typed options
    headers: {
        "Content-Type": "application/json"
        "Authorization": "Bearer token"
    },
    requestBody: {
        key1: 'value1',
        key2: 3
    }
}

smartrequest.post('https://example.com', options).then(res => {
    console.log(res.status)
    console.log(res.body) // if json, body will be parsed automatically
}).catch(err => {
    console.log(err)
})

// also available
smartrequest.get(...)
smartrequest.put(...)
smartrequest.del(...)

// streaming
smartrequest.get('https://example.com/bigfile.mp4', optionsArg, true).then(res => { // third arg = true signals streaming
    console.log(res.status)
    res.on('data', data => {
        // do something with the data chunk here
    }
    res.on('end', () => {
        // do something when things have ended
    })
})
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
