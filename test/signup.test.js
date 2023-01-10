// const {Builder, By, Key, until} = require('selenium-webdriver');
// const assert = require('assert');
//
// describe('SignUpPage', function() {
// 	let driver;
//
// 	before(async function() {
// 		driver = await new Builder().forBrowser('chrome').build();
// 	});
//
// 	after(() => {
// 		driver.quit()
// 	});
//
// 	it('Successful signup', async function () {
//
// 		await driver.get('http://localhost:3000/user');
//
// 		await driver.findElement(By.id('signupContainer')).click();
// 		await driver.findElement(By.id('signup-name')).click();
// 		await driver.findElement(By.id('signup-name')).sendKeys('John');
// 		await driver.findElement(By.id('signup-lastName')).click();
// 		await driver.findElement(By.id('signup-lastName')).sendKeys('Doe');
// 		await driver.findElement(By.id('signup-username')).click();
// 		await driver.findElement(By.id('signup-username')).sendKeys('johndoe');
// 		await driver.findElement(By.id('signup-email')).click();
// 		await driver.findElement(By.id('signup-email')).sendKeys('john.doe@example.com');
// 		await driver.findElement(By.id('signup-password')).click();
// 		await driver.findElement(By.id('signup-password')).sendKeys('password', Key.RETURN);
//
//
// 	});
//
// 	it('should show an error message if an invalid email is entered', async function () {
// 		await driver.get('http://localhost:3000/user');
//
// 		await driver.findElement(By.id('signupContainer')).click();
// 		await driver.findElement(By.id('signup-name')).click();
// 		await driver.findElement(By.id('signup-name')).sendKeys('John');
// 		await driver.findElement(By.id('signup-lastName')).click();
// 		await driver.findElement(By.id('signup-lastName')).sendKeys('Doe');
// 		await driver.findElement(By.id('signup-username')).click();
// 		await driver.findElement(By.id('signup-username')).sendKeys('johndoe');
// 		await driver.findElement(By.id('signup-email')).click();
// 		await driver.findElement(By.id('signup-email')).sendKeys('invalid-email');
// 		await driver.findElement(By.id('signup-password')).click();
// 		await driver.findElement(By.id('signup-password')).sendKeys('password', Key.RETURN);
// 		await driver.wait(until.elementLocated(By.className('signup-error')));
//
// 		const error = await driver.findElement(By.className('signup-error'));
// 		assert.equal(error.getText(), 'Please enter a valid email.');
// 	});
// })