var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.open('./index.html', function (status) {
    page.render('index.png');
    phantom.exit();
});
