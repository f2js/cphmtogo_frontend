let assertStrict = require("assert").strict;
let {expect, assert} = require('chai');
let webdriver = require("selenium-webdriver");
const {By} = require('selenium-webdriver');
const {WebDriverWait} = require("selenium-webdriver");
const {until} = require("selenium-webdriver");
require("geckodriver");
const sinon = require('sinon');


// Application Server
const serverUri = "http://localhost:3000/menu";
const menuHeaderContent = "Menu";


let browser = new webdriver.Builder()
	.usingServer()
	.withCapabilities({browserName: "chrome"})
	.build();


describe("Menu", async function () {
	it("Should load page and fetch the menu header", async function () {
		try {
			await browser.get(serverUri);
			const header = await browser.findElement(By.id('menuHeader')).getText();
			assertStrict.strictEqual(header, menuHeaderContent);
		} catch (error) {
			console.log(error);
		}
	});

	it('clicks the "Show menu" button', async () => {
		// Find the "Show menu" button
		const showMenuButton = await browser.findElement(By.id('menuButton'));

		// Create a spy for the "click()" method
		const clickSpy = sinon.spy(showMenuButton, 'click');

		// Click the "Show menu" button
		showMenuButton.click();

		// Check if the "click()" method is called exactly once
		sinon.assert.calledOnce(clickSpy);
	});

	/**
	 * Test case to check whether the given list of menu items is loaded.
	 */
	it("Should check whether the menuContainer is loaded", async ()=> {
		// Navigate to the specified server URI
		await browser.get(serverUri);

		// Find the "Show menu" button
		const showMenuButton = await browser.findElement(By.id('menuButton'));

		// Create a spy for the "click()" method
		const clickSpy = sinon.spy(showMenuButton, 'click');

		// Click the "Show menu" button
		showMenuButton.click();

		// Check if the "click()" method is called exactly once
		expect(clickSpy.calledOnce).to.be.true;

		const menuContainers = await browser.findElements(By.id('menuContainer'));
		for (const menuContainer of menuContainers) {
			expect(await menuContainer.isDisplayed() && await menuContainer.isEnabled()).to.be.true;
		}
	});



			after(function () {
		// End of test use this.
		browser.quit();
	});
});