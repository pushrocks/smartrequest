# @pushrocks/smartrequest
dropin replacement for request

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartrequest)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartrequest)
* [github.com (source mirror)](https://github.com/pushrocks/smartrequest)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartrequest/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/smartrequest/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/smartrequest/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/smartrequest)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/smartrequest)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/smartrequest)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/smartrequest)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/smartrequest)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

## Usage

Use TypeScript for best in class instellisense.

### Features

- supports http
- supports https
- supports unix socks
- supports formData
- supports file uploads
- supports best practice keepAlive
- dedicated functions for working with JSON request/response cycles
- written in TypeScript
- continuously updated
- uses node native http and https modules
- used in modules like @pushrocks/smartproxy and @apiglobal/typedrequest
- commercial support available at [https://lossless.support](https://lossless.support)

> note: smartrequest uses the **native** node http/https modules under the hood (not the bloated one from npm)

```javascript
import * as smartrequest from 'smartrequest'

// simple post
const options: smartrequest.ISmartRequestOptions = { // typed options
    headers: {
        "Content-Type": "application/json"
        "Authorization": "Bearer token"
    },
    requestBody: JSON.stringify({
        key1: 'value1',
        key2: 3
    })
}

smartrequest.request('https://example.com', options).then(res => {
    console.log(res.status)
    console.log(res.body) // if json, body will be parsed automatically
}).catch(err => {
    console.log(err)
})

// dedicated JSON methods are available:
smartrequest.getJson(...)
smartrequest.postJson(...)
smartrequest.putJson(...)
smartrequest.delJson(...)

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

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
