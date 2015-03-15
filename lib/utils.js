import {backgroundCharacter} from './border-scheme';
import TuiSymbol from './tui-symbol.js';

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
 * @param {string} color
 * @returns {boolean}
 */
export function isTransparentColor(color) {
    return color === 'rgba(0, 0, 0, 0)' || color === 'transparent';
}

/**
 *
 * @param {string} char
 * @param {CssStyle} style
 * @returns {boolean}
 */
export function isTransparentCharacter(char, style) {
    return char === backgroundCharacter && isTransparentColor(style.backgroundColor);
}

/**
 *
 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
 * @param {object} scheme
 * @returns {string}
 * @private
 */
export function lookupCharacter(options, scheme) {
    var propertyName = Object.keys(scheme)[0];
    var value = scheme[propertyName];

    if (typeof value !== 'object') {
        return value;
    }

    value = value[options[propertyName]];

    if (typeof value !== 'object') {
        return value;
    }

    return lookupCharacter(options, value);
}

/**
 *
 * @param {{x: string, y: string}} options
 * @param {CssStyle} style
 * @returns {{color: string, backgroundColor: string}}
 * @private
 */
export function lookupCharacterStyle(options, style) {
    var color = style.color;
    var backgroundColor = style.backgroundColor;

    if (options.x === 'min') {
        color = style.borderLeftColor;
    }

    if (options.x === 'max') {
        color = style.borderRightColor;
    }

    if (options.y === 'min' && options.x === 'mid') {
        color = style.borderTopColor;
    }

    if (options.y === 'max' && options.x === 'mid') {
        color = style.borderBottomColor;
    }

    return {color, backgroundColor};
}

/**
 *
 * @param {Array<Array<(TuiSymbol|string)>>} box
 * @param {ClientRect} boundingBox
 * @returns {Array<Array<(TuiSymbol|string)>>}
 * @private
 */
export function shiftBox(box, boundingBox) {
    var width = boundingBox.width;
    var left = boundingBox.left;
    var top = boundingBox.top;
    var paddingLeft = new Array(left + 1).join(' ').split('');
    var paddingTop = new Array(left + width + 1).join(' ').split('');

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
 * @param {(TuiSymbol|string)} symbolA
 * @param {(TuiSymbol|string)} symbolB
 * @returns {(TuiSymbol|string)}
 */
function mergeTuiSymbols(symbolA, symbolB) {
    var backgroundColor = isTransparentColor(symbolB.style.backgroundColor) ?
        symbolA.style.backgroundColor : symbolB.style.backgroundColor;

    var color = symbolB.char === ' ' ? symbolA.style.color : symbolB.style.color;
    var char = symbolB.char === ' ' ? symbolA.char : symbolB.char;

    return new TuiSymbol(char, {color, backgroundColor});
}

/**
 *
 * @param {(TuiSymbol|string)} symbolA
 * @param {(TuiSymbol|string)} symbolB
 * @returns {(TuiSymbol|string)}
 */
function mergeSymbols(symbolA, symbolB) {
    if (symbolB === ' ') {
        return symbolA;
    }

    if (symbolA === ' ') {
        return symbolB;
    }

    if (symbolA instanceof TuiSymbol && symbolB instanceof TuiSymbol) {
        return mergeTuiSymbols(symbolA, symbolB);
    }

    return symbolB;
}

/**
 *
 * @param {Array<Array<(TuiSymbol|string)>>} layerA
 * @param {Array<Array<(TuiSymbol|string)>>} layerB
 * @returns {{maxWidth: number, maxHeight: number}}
 */
function getMaxDimensions(layerA, layerB) {
    var maxWidth = Math.max(layerA[0] && layerA[0].length || 0, layerB[0] && layerB[0].length || 0);
    var maxHeight = Math.max(layerA.length, layerB.length);

    return {maxWidth, maxHeight};
}

/**
 *
 * @param {Array<Array<(TuiSymbol|string)>>} layerA
 * @param {Array<Array<(TuiSymbol|string)>>} layerB
 * @returns {Array<Array<(TuiSymbol|string)>>}
 */
export function mergeBoxes(layerA, layerB) {
    var box = [];
    var {maxWidth, maxHeight} = getMaxDimensions(layerA, layerB);

    for (var y = 0; y < maxHeight; y++) {
        box.push([]);
        for (var x = 0; x < maxWidth; x++) {
            box[y][x] = mergeSymbols(layerA[y] && layerA[y][x] || ' ', layerB[y] && layerB[y][x] || ' ');
        }
    }

    return box;
}
