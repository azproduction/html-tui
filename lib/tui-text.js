import {getNormalizedClientRectOf, shiftBox, renderTextBox} from './utils';

export default class TuiText {
    /**
     *
     * @param {Node} node
     * @param {CssStyle} style
     * @param {Object} [options={}]
     * @param {Number[]} [options.scale]
     * @constructor
     */
    constructor(node, style, options) {
        if (node.nodeType !== 3) {
            throw new Error('Only text node is supported');
        }

        if (!node.ownerDocument) {
            throw new Error('Can not serialize detached node');
        }

        var range = node.ownerDocument.createRange();
        range.selectNodeContents(node);

        this.options = options || {};

        /**
         * @type {ClientRect}
         */
        this.boundingBox = getNormalizedClientRectOf(range.getBoundingClientRect(), options);

        this.content = node.textContent;

        this.style = style;
    }

    /**
     *
     * @returns {Array<Array<(TuiSymbol)>>}
     * @private
     */
    _renderTextBox() {
        var content = this.content.replace(/\s\s+/g, ' ');

        return renderTextBox(content, this.style);
    }

    /**
     *
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    toArray() {
        if (this.boundingBox.width === 0 || this.boundingBox.height === 0) {
            return [[]];
        }

        return shiftBox(this._renderTextBox(), this.boundingBox);
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        return this.toArray().map((row) => row.join('')).join('\n');
    }
}
