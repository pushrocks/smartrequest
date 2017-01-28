"use strict";
require("typings-test");
const smartchai_1 = require("smartchai");
const smartrequest = require("../dist/index");
describe('smartrequest', function () {
    it('should request a html document over https', function () {
        this.timeout(10000);
        return smartchai_1.expect(smartrequest.get('https://encrypted.google.com/')).to.eventually.property('body').be.a('string');
    });
    it('should request a JSON document over https', function () {
        return smartchai_1.expect(smartrequest.get('https://jsonplaceholder.typicode.com/posts/1')).to.eventually.property('body').property('id').equal(1);
    });
    it('should post a JSON document over http', function () {
        this.timeout(5000);
        return smartchai_1.expect(smartrequest.post('http://md5.jsontest.com/?text=example_text')).to.eventually.property('body').property('md5').equal('fa4c6baa0812e5b5c80ed8885e55a8a6');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQix5Q0FBa0M7QUFFbEMsOENBQTZDO0FBRTdDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDckIsRUFBRSxDQUFDLDJDQUEyQyxFQUFFO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsTUFBTSxDQUFDLGtCQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsSCxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywyQ0FBMkMsRUFBRTtRQUM1QyxNQUFNLENBQUMsa0JBQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFJLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEIsTUFBTSxDQUFDLGtCQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO0lBQzNLLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==