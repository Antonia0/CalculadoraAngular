"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let fs = require('fs'); 
let homepage = require('../../pages/homepage');
const step1 = allure.createStep("#1 Inserte el primer número", ()=>{});
const step2 = allure.createStep("#2 Inserte el segundo número", ()=>{});
const step3 = allure.createStep("#3 Click", ()=>{});
var screenshots = require('protractor-take-screenshots-on-demand');

describe('Demo calculator tests', function () {
    it('addition test', function () {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
        screenshots.takeScreenshot('Captura1');  
        step1();
        homepage.enterFirstNumber('4');
        screenshots.takeScreenshot('Captura2');  
        //element(by.xpath("//*[@ng-model='first']")).sendKeys('2');
        //element(by.model('first')).sendKeys('2');
        //element(by.model('second')).sendKeys('3');
        allure.createStep('Paso1', function () {
            browser.takeScreenshot().then(function (png) {
              allure.createAttachment('Paso2', function () {return new Buffer(png, 'base64')}, 'image/png')();
            });
          })();
        //step2();
        homepage.enterSecondNumber('3');
        
        //element(by.css('[ng-click="doAddition()"]')).click();
        step3();
        homepage.clickGo();
        //let result= element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('7');
        protractor_1.browser.sleep(3000);
    });
});
