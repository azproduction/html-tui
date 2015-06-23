import TuiSymbol, {isTransparentColor, emptySymbol} from '../tui-symbol';
import {BACKGROUND_CHARACTER} from '../characters';
import {AllHtmlEntities} from 'html-entities';

let entities = new AllHtmlEntities();

/**
 * @abstract
 */
export default class Serializer {
    /**
     * @param {TuiNode} tuiNode
     * @param {Object} options
     */
    constructor(tuiNode, options) {
        /**
         * @type {Object}
         */
        this.options = options || {};
    }

    /**
     * @param {Array<Array<(TuiSymbol)>>} box
     * @param {ClientRect} clientRect
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    shiftBox(box, clientRect) {
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
     * @param {TuiSymbol|undefined} symbolA
     * @param {TuiSymbol|undefined} symbolB
     * @returns {TuiSymbol}
     */
    mergeSymbols(symbolA, symbolB) {
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
     * @param {Array<(TuiSymbol|undefined)>} rowA
     * @param {Array<(TuiSymbol|undefined)>} rowB
     * @returns {Array<(TuiSymbol)>}
     */
    mergeBoxRow(rowA, rowB) {
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
            row[x] = this.mergeSymbols(rowA[x], rowB[x]);
        }

        return row;
    }

    /**
     * @param {Array<Array<(TuiSymbol)>>} layerA
     * @param {Array<Array<(TuiSymbol)>>} layerB
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    mergeBoxes(layerA, layerB) {
        var maxHeight = Math.max(layerA.length, layerB.length);
        var box = new Array(maxHeight);

        for (var y = 0; y < maxHeight; y++) {
            box[y] = this.mergeBoxRow(layerA[y], layerB[y]);
        }

        return box;
    }

    /**
     * @param {String} content
     * @param {ObjectClientRect} clientRects
     * @param {CssStyle} style
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    fillClientRectsWithText({content, clientRects, style}) {
        var keepWhiteSpaces = style.whiteSpace === 'pre' || style.whiteSpace === 'pre-wrap';

        if (!keepWhiteSpaces) {
            content = content.replace(/\s\s+/g, ' ');
        }

        // As text will be filled in clientRects - no reason to respect new lines
        content = content.replace(/\n|\r|\v/g, '');
        content = entities.decode(content);

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
            return this.mergeBoxes(box, this.shiftBox(textBox, clientRect));
        }, []);
    }

    /**
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    serialize() {
        return [[]];
    }
}
