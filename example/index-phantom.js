var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.open('index.html', function (status) {
    /* global phantom: true*/
    phantom.exit();
});
