import { browser, element, by } from 'protractor';

export class AngularMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mg-root h2')).getText();
  }
}
