
describe('angularjs homepage todo list', function() {
	it('Verify user search functionality', function() {
		browser.get('http://localhost:3000');

		console.log('Checking for existing user to return successful');
		element(by.model('search')).sendKeys('ben');
		element(by.id('searchUser')).click();
		expect(element(by.binding('currentUser.user')).getText()).toEqual('ben');

		console.log('Checking for non existing user to generate error')
		element(by.model('search')).sendKeys('ben2');
		element(by.id('searchUser')).click();
		expect(element(by.binding('errorMessage')).getText()).toContain('not found');
	});
});
