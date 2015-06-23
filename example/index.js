import './index.css';
import {TuiElement, render} from '..';

requestAnimationFrame(function () {
    var element = new TuiElement(document.querySelector('.tui-dom'), {
        scale: [7.8, 13]
    });
    var serializedElement = element.toCompressedArray();

    document.querySelector('.tui-cli').innerHTML = render.html(serializedElement);
    if (/PhantomJS/.test(window.navigator.userAgent)) {
        console.log(render.ansi(serializedElement));
    } else {
        console.log.apply(console, render.chrome(serializedElement));
    }
});
