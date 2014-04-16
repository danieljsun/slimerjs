var page = require('webpage').create();
console.log('opening page');
page.open("http://slimerjs.org", function (status) {
    page.viewportSize = { width:1024, height:768 };
    console.log('rendering to file');
    page.render('screenshot.png');
    console.log('exiting');
    //phantom.exit();
});
