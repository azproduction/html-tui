// TODO omg omg get rid of this sh!t code...
var layer = Layer.fromElement(document.querySelector('#dom'));

function render() {
    Symbol.mode = 'html';
    document.querySelector('pre').innerHTML = layer;
}

render();

document.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 40) return;
    var file = document.querySelector('.file_state_focused');
    var nextFile = file.nextElementSibling;
    if (nextFile) {
        file.classList.remove('file_state_focused');
        nextFile.classList.add('file_state_focused');
        render();
    }
});

document.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 38) return;
    var file = document.querySelector('.file_state_focused');
    var prevFile = file.previousElementSibling;
    if (prevFile && prevFile.classList.contains('file')) {
        file.classList.remove('file_state_focused');
        prevFile.classList.add('file_state_focused');
        render();
    }
});

Symbol.mode = 'ascii';
console.log(layer);
