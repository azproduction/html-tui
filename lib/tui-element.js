import {getNormalizedClientRectOf, mergeBoxes, shiftBox} from './utils';
import TuiText from './tui-text';
import {fromPositionAndStyle} from './tui-symbol';
import {boxRenderFactory} from './renders';

export default class TuiElement {
    /**
     *
     * @param {Node} node
     * @constructor
     */
    constructor(node) {
        if (node.nodeType !== 1) {
            throw new Error('Only element node is supported');
        }

        if (!node.ownerDocument && !node.ownerDocument.defaultView) {
            throw new Error('Can not serialize detached node');
        }

        /**
         * @type {CssStyle}
         */
        this.style = node.ownerDocument.defaultView.getComputedStyle(node);

        /**
         * @type {ClientRect}
         */
        this.boundingBox = getNormalizedClientRectOf(node.getBoundingClientRect());

        /**
         * @type {TuiElement[]}
         */
        this.content = Array.from(node.childNodes).reduce((content, node) => {
            if (node.nodeType === 1) {
                content.push(new TuiElement(node));
            }
            if (node.nodeType === 3) {
                content.push(new TuiText(node, this.style));
            }
            return content;
        }, []);
    }

    /**
     *
     * @param {number} x
     * @param {number} y
     * @returns {TuiSymbol}
     * @private
     */
    _boxCharacterAt(x, y) {
        /* jshint maxcomplexity: 10 */
        var width = this.boundingBox.width;
        var height = this.boundingBox.height;

        var position = {
            x: x === 0 ? 'min' : x === width - 1 ? 'max' : 'mid',
            y: y === 0 ? 'min' : y === height - 1 ? 'max' : 'mid',
            top: parseInt(this.style.borderTopWidth) ? 'yes' : 'no',
            right: parseInt(this.style.borderRightWidth) ? 'yes' : 'no',
            bottom: parseInt(this.style.borderBottomWidth) ? 'yes' : 'no',
            left: parseInt(this.style.borderLeftWidth) ? 'yes' : 'no'
        };

        return fromPositionAndStyle(position, this.style);
    }

    /**
     *
     * @returns {Array<Array<(TuiSymbol)>>}
     * @private
     */
    _renderBox() {
        var box = [];
        for (var y = 0; y < this.boundingBox.height; y++) {
            box.push([]);
            for (var x = 0; x < this.boundingBox.width; x++) {
                box[y][x] = this._boxCharacterAt(x, y);
            }
        }

        return box;
    }

    /**
     *
     * @returns {Array<Array<Array<(TuiSymbol)>>>}
     * @private
     */
    _renderContent() {
        return this.content.map((item) => item.toArray());
    }

    /**
     *
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    toArray() {
        var box = shiftBox(this._renderBox(), this.boundingBox);
        var content = this._renderContent();

        return [box].concat(content).reduce(mergeBoxes, []);
    }

    /**
     *
     * @returns {string|*}
     */
    toString(type = 'default') {
        return boxRenderFactory(type)(this.toArray());
    }
}
