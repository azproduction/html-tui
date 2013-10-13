// TODO omg omg get rid of this sh!t code...
Symbol.mode = 'html';
var layer = Layer.fromElement(document.querySelector('#dom'));
document.querySelector('pre').innerHTML = layer;

Symbol.mode = 'ascii';
console.log(layer);
