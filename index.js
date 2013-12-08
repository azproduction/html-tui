// TODO omg omg get rid of this sh!t code...
var dom = document.querySelector('#dom'),
    tui = document.querySelector('pre'),
    layer = Layer.fromElement(dom);

function render() {
    Symbol.mode = 'html';
    tui.innerHTML = layer;
}

render();

if (typeof MutationObserver !== 'undefined') {
    // create an observer instance
    var observer = new MutationObserver(function() {
        render();
    });

    // pass in the target node, as well as the observer options
    observer.observe(dom, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
    });
}

document.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 40) return;
    var file = document.querySelector('.file_state_focused');
    var nextFile = file.nextElementSibling;
    if (nextFile) {
        file.classList.remove('file_state_focused');
        nextFile.classList.add('file_state_focused');
    }
}, false);

document.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 38) return;
    var file = document.querySelector('.file_state_focused');
    var prevFile = file.previousElementSibling;
    if (prevFile && prevFile.classList.contains('file')) {
        file.classList.remove('file_state_focused');
        prevFile.classList.add('file_state_focused');
    }
}, false);

Symbol.mode = 'ascii';
console.log(layer);
