const MainPage = require('../pageobjects/MainPage');

describe('Main Page', () => {
    it('check phone number', () => {
        browser.url('http://a.testaddressbook.com/')
        expect($(`//h1`).getText()).toEqual("24545")
    });
});