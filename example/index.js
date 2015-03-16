import './index.css';
import TuiElement from '..';

requestAnimationFrame(function () {
    var element = new TuiElement(document.querySelector('.tui-dom'));

    document.querySelector('.tui-cli').innerHTML = element.toString('html');
    if (/PhantomJS/.test(window.navigator.userAgent)) {
        console.log(element.toString('ansi'));
    } else {
        console.log.apply(console, element.toString('chrome'));
    }
});
