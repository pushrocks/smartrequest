# smartrequest
dropin replacement for request

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartrequest)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartrequest)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartrequest)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartrequest/)

## Status for master
[![build status](https://GitLab.com/pushrocks/smartrequest/badges/master/build.svg)](https://GitLab.com/pushrocks/smartrequest/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartrequest/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartrequest/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartrequest.svg)](https://www.npmjs.com/package/smartrequest)
[![Dependency Status](https://david-dm.org/pushrocks/smartrequest.svg)](https://david-dm.org/pushrocks/smartrequest)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartrequest/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartrequest/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartrequest/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartrequest)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

```javascript
import * as smartrequest from 'smartrequest'

// simple post
let options: smartreqest.ISmartRequestOptions = { // typed options
    headers: {
        "Content-Type": "application/json"
        "Authorization": "Bearer token"
    },
    requestBody: {
        key1: 'value1',
        key2: 3
    }
}

smartrequest.post('https://example.com', options)

```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
