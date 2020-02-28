"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let homepage = function () {
    let firstNumber_input = protractor_1.element(protractor_1.by.model('first'));
    let secondNumber_input = protractor_1.element(protractor_1.by.model('second'));
    let goButton = protractor_1.element(protractor_1.by.css('[ng-click="doAddition()"]'));
    this.get = function (url) {
        protractor_1.browser.get(url);
    };
    this.enterFirstNumber = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    };
    this.enterSecondNumber = function (secondNo) {
        secondNumber_input.sendKeys(secondNo);
    };
    this.clickGo = function () {
        goButton.click();
    };
    this.verifyResult = function (result) {
        let output = protractor_1.element(protractor_1.by.cssContainingText('.ng-binding', '7'));
        expect(output.getText()).toEqual(result);
    };

};
module.exports = new homepage();
