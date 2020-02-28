"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    // directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: [
        "spec/*.spec.js"
    ],
    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        //hacer captura en un paso concreto
        var screenshots = require('protractor-take-screenshots-on-demand');
        //joiner between browser name and file name
        screenshots.browserNameJoiner = ' - '; //this is the default
        //folder of screenshots
        screenshots.screenShotDirectory = 'screenshots';
        //creates folder of screenshots
        screenshots.createDirectory();
    }
};
