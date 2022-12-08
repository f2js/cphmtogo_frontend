
let assert = require("assert").strict;
let webdriver = require("selenium-webdriver");
const {By} = require('selenium-webdriver');
require("geckodriver");
// Application Server
const serverUri = "http://localhost:3000/#";
const menuHeaderContent = "Menu";


let browser = new webdriver.Builder()
	.usingServer()
	.withCapabilities({ browserName: "chrome" })
	.build();


function menuHeader() {
	return new Promise((resolve, reject) => {
		browser.findElement(By.id('menuHeader')).then((id) => {
			resolve(id.getText());
		});
	});
}


describe("Menu", function() {
	it("Should load page and fetch the menu header", function() {
		return new Promise((resolve, reject) => {
			browser
				.get(serverUri)
				.then(menuHeader)
				.then(header => {
					assert.strictEqual(header, menuHeaderContent);
					resolve();
				})
				.catch(err => reject(err));
		});
	});
	/**
	 * Test case to check whether the given list of menu items is loaded.
	 */
	it("Should check whether the menuContainer is loaded", function() {
		return new Promise((resolve, reject) => {
			browser
				.findElement({ id: "menuContainer" })
				.then(elem => resolve())
				.catch(err => reject(err));
		});
	});

	after(function() {
		// End of test use this.
		browser.quit();
	});
});