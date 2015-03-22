import './index.css';
import {TuiElement, render, compressBox} from '..';

requestAnimationFrame(function () {
    var element = new TuiElement(document.querySelector('.tui-dom'));
    var serializedElement = compressBox(element.toArray());

    document.querySelector('.tui-cli').innerHTML = render.html(serializedElement);
    if (/PhantomJS/.test(window.navigator.userAgent)) {
        console.log(render.ansi(serializedElement));
    } else {
        console.log.apply(console, render.chrome(serializedElement));
    }
});
