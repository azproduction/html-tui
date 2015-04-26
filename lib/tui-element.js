import {getNormalizedClientRectOf} from './utils';
import {selectSerializerFor} from './serializers';
import TuiText from './tui-text';

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
         * @type {string}
         */
        this.tagName = node.tagName.toLowerCase();

        /**
         * @type {{name: string, value: string}[]}
         */
        this.attributes = Array.prototype.slice.call(node.attributes);

        /**
         * @type {object}
         */
        this.properties = this.getProperties(node);

        /**
         * @type {boolean}
         */
        this.isActiveEment = node.ownerDocument.activeElement === node;

        /**
         * @type {CssStyle}
         */
        this.style = node.ownerDocument.defaultView.getComputedStyle(node);

        /**
         * @type {ClientRect}
         */
        this.boundingBox = getNormalizedClientRectOf(node.getBoundingClientRect());

        /**
         * @type {(TuiElement|TuiText)[]}
         */
        this.content = this.getContentOf(node);

        // TODO currently serializer is bound to HTMLElement
        /**
         * @type {function}
         */
        this.serializeNode = selectSerializerFor(node);
    }

    /**
     * @param {Node} node
     * @returns {(TuiElement|TuiText)[]}
     */
    getContentOf(node) {
        return Array.prototype.slice.call(node.childNodes).reduce((content, node) => {
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
     * @param node
     */
    getProperties(node) {
        return {
            value: node.value,
            checked: node.checked,
            selectionStart: node.selectionStart,
            selectionEnd: node.selectionEnd
        };
    }

    /**
     *
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    toArray() {
        return this.serializeNode.call(null, this);
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        return this.toArray().map((row) => row.join('')).join('\n');
    }
}
