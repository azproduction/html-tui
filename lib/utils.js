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
 *
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ClientRect} boundingBox
 * @returns {Array<Array<(TuiSymbol)>>}
 * @private
 */
export function shiftBox(box, boundingBox) {
    var left = boundingBox.left;
    var top = boundingBox.top;
    var paddingLeft = new Array(left);
    var paddingTop = new Array(0);

    box.forEach(function shiftRow(row) {
        row.unshift.apply(row, paddingLeft);
    });

    while (top > 0) {
        box.unshift(paddingTop);
        top--;
    }

    return box;
}

/**
 *
 * @param {TuiSymbol|undefined} symbolA
 * @param {TuiSymbol|undefined} symbolB
 * @returns {TuiSymbol}
 */
function mergeSymbols(symbolA, symbolB) {
    /* jshint maxcomplexity: 7 */
    if (typeof symbolA === 'undefined' && typeof symbolB === 'undefined') {
        return emptySymbol;
    }

    if (typeof symbolA === 'undefined') {
        return symbolB;
    }

    if (typeof symbolB === 'undefined') {
        return symbolA;
    }

    var backgroundColor = isTransparentColor(symbolB.style.backgroundColor) ?
        symbolA.style.backgroundColor : symbolB.style.backgroundColor;

    var color = symbolB.char === BACKGROUND_CHARACTER ? symbolA.style.color : symbolB.style.color;
    var char = symbolB.char === BACKGROUND_CHARACTER ? symbolA.char : symbolB.char;

    return new TuiSymbol(char, {color, backgroundColor});
}

/**
 *
 * @param {Array<(TuiSymbol|undefined)>} rowA
 * @param {Array<(TuiSymbol|undefined)>} rowB
 * @returns {Array<(TuiSymbol)>}
 */
function mergeBoxRow(rowA, rowB) {
    if (typeof rowA === 'undefined' && typeof rowB === 'undefined') {
        return [];
    }

    if (typeof rowA === 'undefined') {
        return rowB;
    }

    if (typeof rowB === 'undefined') {
        return rowA;
    }

    var maxWidth =  Math.max(rowA.length, rowB.length);
    var row = new Array(maxWidth);
    for (var x = 0; x < maxWidth; x++) {
        row[x] = mergeSymbols(rowA[x], rowB[x]);
    }

    return row;
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} layerA
 * @param {Array<Array<(TuiSymbol)>>} layerB
 * @returns {Array<Array<(TuiSymbol)>>}
 */
export function mergeBoxes(layerA, layerB) {
    var maxHeight = Math.max(layerA.length, layerB.length);
    var box = new Array(maxHeight);

    for (var y = 0; y < maxHeight; y++) {
        box[y] = mergeBoxRow(layerA[y], layerB[y]);
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
