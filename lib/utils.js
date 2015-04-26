import {emptySymbol, isTransparentColor} from './tui-symbol';
import TuiSymbol from './tui-symbol';
import {BACKGROUND_CHARACTER} from './characters';

export function getNormalizedClientRectOf(boundingBox) {
    return {
        bottom: Math.round(boundingBox.bottom),
        height: Math.round(boundingBox.height),
        left: Math.round(boundingBox.left),
        right: Math.round(boundingBox.right),
        top: Math.round(boundingBox.top),
        width: Math.round(boundingBox.width)
    };
}

/**
 * @param {number} length
 * @param {*} content
 * @returns {Array}
 */
function fillArray(length, content) {
    var array = new Array(length);

    for (var i = 0; i < array.length; i++) {
        array[i] = content;
    }

    return array;
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ClientRect} boundingBox
 * @returns {Array<Array<(TuiSymbol)>>}
 * @private
 */
export function shiftBox(box, boundingBox) {
    var width = boundingBox.width;
    var left = boundingBox.left;
    var top = boundingBox.top;
    var paddingLeft = fillArray(left, emptySymbol);
    var paddingTop = fillArray(left + width, emptySymbol);

    box.forEach((row) => {
        row.unshift.apply(row, paddingLeft);
    });

    for (;top--;) {
        box.unshift(paddingTop);
    }

    return box;
}

/**
 *
 * @param {(TuiSymbol)} symbolA
 * @param {(TuiSymbol)} symbolB
 * @returns {(TuiSymbol)}
 */
function mergeSymbols(symbolA, symbolB) {
    var backgroundColor = isTransparentColor(symbolB.style.backgroundColor) ?
        symbolA.style.backgroundColor : symbolB.style.backgroundColor;

    var color = symbolB.char === BACKGROUND_CHARACTER ? symbolA.style.color : symbolB.style.color;
    var char = symbolB.char === BACKGROUND_CHARACTER ? symbolA.char : symbolB.char;

    return new TuiSymbol(char, {color, backgroundColor});
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} layerA
 * @param {Array<Array<(TuiSymbol)>>} layerB
 * @returns {{maxWidth: number, maxHeight: number}}
 */
function getMaxDimensions(layerA, layerB) {
    var maxWidth = Math.max(layerA[0] && layerA[0].length || 0, layerB[0] && layerB[0].length || 0);
    var maxHeight = Math.max(layerA.length, layerB.length);

    return {maxWidth, maxHeight};
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} layerA
 * @param {Array<Array<(TuiSymbol)>>} layerB
 * @returns {Array<Array<(TuiSymbol)>>}
 */
export function mergeBoxes(layerA, layerB) {
    var box = [];
    var {maxWidth, maxHeight} = getMaxDimensions(layerA, layerB);

    for (var y = 0; y < maxHeight; y++) {
        box.push([]);
        for (var x = 0; x < maxWidth; x++) {
            box[y][x] = mergeSymbols(
                layerA[y] && layerA[y][x] || emptySymbol,
                layerB[y] && layerB[y][x] || emptySymbol
            );
        }
    }

    return box;
}

/**
 *
 * @param {String} content
 * @param {Object} style
 * @returns {Array<Array<(TuiSymbol)>>}
 */
export function renderTextBox(content, style) {
    var symbols = String(content).split('').map((symbol) => {
        return new TuiSymbol(symbol, style);
    });

    return [symbols];
}
