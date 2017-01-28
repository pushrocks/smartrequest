import 'typings-test'

import { expect } from 'smartchai'

import * as smartrequest from '../dist/index'

describe('smartrequest', function() {
    it('should request a html document over https', function() {
        this.timeout(10000)
        return expect(smartrequest.get('https://encrypted.google.com/')).to.eventually.property('body').be.a('string')
    })

    it('should request a JSON document over https', function(){
        return expect(smartrequest.get('https://jsonplaceholder.typicode.com/posts/1')).to.eventually.property('body').property('id').equal(1)
    })

    it('should post a JSON document over http', function() {
        this.timeout(5000)
        return expect(smartrequest.post('http://md5.jsontest.com/?text=example_text')).to.eventually.property('body').property('md5').equal('fa4c6baa0812e5b5c80ed8885e55a8a6')
    })
})