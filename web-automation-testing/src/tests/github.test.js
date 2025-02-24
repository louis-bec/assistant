const puppeteer = require('puppeteer');

describe('Test example', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://github.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Check if GitHub Copilot section is present', async () => {
    const copilotSection = await page.$('svg.octicon-copilot');
    expect(copilotSection).not.toBeNull();
  });

  test('Check if Sign In link is present', async () => {
    const signInLink = await page.$('a.HeaderMenu-link--sign-in');
    expect(signInLink).not.toBeNull();
  });
});