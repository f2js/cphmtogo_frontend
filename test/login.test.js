const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');


describe('LoginPage', function() {
	let driver;

	before(async function() {
		driver = await new Builder().forBrowser('chrome').build();
	});

	it('login successfully with correct credentials', async function() {
		await driver.get('http://localhost:3000/user');

		await driver.findElement(By.id('username')).sendKeys('testuser');
		await driver.findElement(By.id('password')).sendKeys('testpassword');

		await driver.findElement(By.id('login-submit-button')).click();

		await driver.wait(until.elementLocated(By.id('logged-in-message')), 5000);

		const loggedInMessage = await driver.findElement(By.id('logged-in-message')).getText();

		assert.equal(loggedInMessage, 'Logged in as: testuser');

	});

	after(() => {
		driver.quit()
	});
});
