import { tap, expect } from '@pushrocks/tapbundle';

import * as smartrequest from '../ts/index';

tap.test('should request a html document over https', async () => {
  await expect(smartrequest.getJson('https://encrypted.google.com/'))
    .to.eventually.property('body')
    .be.a('string');
  await expect(smartrequest.getJson('https://encrypted.google.com/'))
    .to.eventually.property('body')
    .be.a('string');
  await expect(smartrequest.getJson('https://encrypted.google.com/'))
    .to.eventually.property('body')
    .be.a('string');
});

tap.test('should request a JSON document over https', async () => {
  await expect(smartrequest.getJson('https://jsonplaceholder.typicode.com/posts/1'))
    .to.eventually.property('body')
    .property('id')
    .equal(1);
});

tap.skip.test('should post a JSON document over http', async () => {
  await expect(smartrequest.postJson('http://md5.jsontest.com/?text=example_text'))
    .to.eventually.property('body')
    .property('md5')
    .equal('fa4c6baa0812e5b5c80ed8885e55a8a6');
});

tap.skip.test('should deal with unix socks', async () => {
  const socketResponse = await smartrequest.request(
    'http://unix:/var/run/docker.sock:/containers/json',
    {
      headers: {
        'Content-Type': 'application/json',
        Host: 'docker.sock'
      }
    }
  );
  console.log(socketResponse.body);
});

tap.skip.test('should correctly upload a file using formData', async () => {});

tap.start();
