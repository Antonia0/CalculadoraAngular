"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('TODO', () => {
    const URL = "http://juliemr.github.io/protractor-demo/";
    
    it('should go to a valid URL', () => {
        protractor_1.browser.get(URL);
        // homepage.get(URL);
        // browser.sleep(3000);
        // element(by.model('first')).sendKeys('2');
        // homepage.enterFirstNumber('4');
        protractor_1.browser.sleep(3000);
        expect(protractor_1.browser.getCurrentUrl()).toContain(URL);
    });
});
