const { browser, element, by } = require("protractor");

describe('Opening the google search page', function() {
    it('should open the calculator', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://www.google.com.br');
  
      var pageTitle = element(by.name('q'));

      expect(pageTitle.isDisplayed()).toBe(true);
    });

    it('tapping on search button', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://www.google.com.br');
  
      var pageTitle = element(by.name('q'));
      pageTitle.sendKeys("nba news today");

      browser.sleep(3000);
  
      var googleSearchBtn = element(by.name('btnK'));
      googleSearchBtn.click();
  
      browser.sleep(3000);
      var h1 = element(by.tagName("h1"));
  
      expect(h1.getText()).toBe("Links de acessibilidade");
    });

    it('tapping on search button', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://www.google.com.br');
  
      var imagesLink = element.all(by.className('gb_f')).get(1);
      imagesLink.click();

      browser.sleep(3000);

      var pageTitle = element(by.name('q'));
      pageTitle.sendKeys("nba best pictures");
      
      browser.sleep(3000);
      var googleSearchBtn = element(by.className('Tg7LZd'));
      googleSearchBtn.click();

      browser.sleep(3000);

      var images = element(by.tagName('img'));

      expect(images.isDisplayed()).toBe(true);

    });
});