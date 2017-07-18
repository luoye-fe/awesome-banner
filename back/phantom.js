var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: '', height: '' };
page.open("http://luoyefe.com", function start(status) {
	page.render('google_home.png', { format: 'png'});
	phantom.exit();
});
