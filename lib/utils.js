import {AllHtmlEntities} from 'html-entities';
import {emptySymbol, isTransparentColor} from './tui-symbol';
import TuiSymbol from './tui-symbol';
import {BACKGROUND_CHARACTER} from './characters';

let entities = new AllHtmlEntities();

export const encodeEntities = entities.encode.bind(entities);
export const decodeEntities = entities.decode.bind(entities);

/**
 * @param {ClientRect} clientRect
 * @param {Number[]} scale
 * @returns {ObjectClientRect}
 */
export function getNormalizedClientRectOf(clientRect, {scale}) {
    let [scaleX, scaleY] = scale || [];
    scaleX = scaleX || 1;
    scaleY = scaleY || 1;

    return {
        bottom: Math.round(clientRect.bottom / scaleY),
        height: Math.round(clientRect.height / scaleY),
        left: Math.round(clientRect.left / scaleX),
        right: Math.round(clientRect.right / scaleX),
        top: Math.round(clientRect.top / scaleY),
        width: Math.round(clientRect.width / scaleX)
    };
}

/**
 * @param {ClientRect[]} clientRects
 * @param {Number[]} scale
 * @returns {ObjectClientRect[]}
 */
export function normalizeClientRects(clientRects, {scale}) {
    return Array.from(clientRects, (clientRect) => getNormalizedClientRectOf(clientRect, {scale}));
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ClientRect} clientRect
 * @returns {Array<Array<(TuiSymbol)>>}
 * @private
 */
export function shiftBox(box, clientRect) {
    var left = clientRect.left;
    var top = clientRect.top;
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
    /* jshint maxcomplexity: 6, maxstatements: 20 */
    if (typeof symbolA === 'undefined' && typeof symbolB === 'undefined') {
        return emptySymbol;
    }

    if (typeof symbolA === 'undefined') {
        return symbolB;
    }

    if (typeof symbolB === 'undefined') {
        return symbolA;
    }

    var char = symbolB.char;
    var {color, fontStyle, fontWeight, textDecoration, backgroundColor} = symbolB.style;

    if (symbolB.char === BACKGROUND_CHARACTER) {
        char = symbolA.char;
        color = symbolA.style.color;
        fontStyle = symbolA.style.fontStyle;
        fontWeight = symbolA.style.fontWeight;
        textDecoration = symbolA.style.textDecoration;
    }

    if (isTransparentColor(backgroundColor)) {
        backgroundColor = symbolA.style.backgroundColor;
    }

    return new TuiSymbol(char, {color, backgroundColor, fontStyle, fontWeight, textDecoration});
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
 * @param {String} content
 * @param {CssStyle} style
 * @param {ObjectClientRect[]} clientRects
 * @returns {Array<Array<(TuiSymbol)>>}
 */
export function fillClientRectsWithText({content, style, clientRects}) {
    var keepWhiteSpaces = style.whiteSpace === 'pre' || style.whiteSpace === 'pre-wrap';

    if (!keepWhiteSpaces) {
        content = content.replace(/\s\s+/g, ' ');
    }

    // As text will be filled in clientRects - no reason to respect new lines
    content = content.replace(/\n|\r|\v/g, '');
    content = decodeEntities(content);

    return clientRects.reduce((box, clientRect) => {
        // Remove white-spaces at the line-break
        if (!keepWhiteSpaces) {
            content = content.trim();
        }

        var symbols = Array.from(content.slice(0, clientRect.width), (symbol) => {
            return new TuiSymbol(symbol, style);
        });

        content = content.slice(clientRect.width);

        let textBox = [symbols.splice(0, clientRect.width)];
        return mergeBoxes(box, shiftBox(textBox, clientRect));
    }, []);
}

/**
 * @typedef {Object} ObjectClientRect
 * @property {Number} bottom
 * @property {Number} height
 * @property {Number} left
 * @property {Number} right
 * @property {Number} top
 * @property {Number} width
 */
