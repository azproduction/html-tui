import {getNormalizedClientRectOf, normalizeClientRects} from './utils';
import {selectSerializerFor} from './serializers';
import TuiText from './tui-text';

export default class TuiElement {
    /**
     *
     * @param {Node} node
     * @param {Object} [options={}]
     * @param {Number[]} [options.scale]
     * @constructor
     */
    constructor(node, options) {
        /* jshint maxstatements: 15 */
        if (node.nodeType !== 1) {
            throw new Error('Only element node is supported');
        }

        if (!node.ownerDocument && !node.ownerDocument.defaultView) {
            throw new Error('Can not serialize detached node');
        }

        this.options = options || {};

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
        this.style = this.getStyle(node);

        /**
         * @type {object}
         */
        this.scroll = this.getScroll(node);

        /**
         * @type {ObjectClientRect}
         */
        this.boundingBox = getNormalizedClientRectOf(node.getBoundingClientRect(), this.options);

        /**
         * @type {ObjectClientRect[]}
         */
        this.clientRects = normalizeClientRects(node.getClientRects(), this.options);

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
        var nodes = node.childNodes;
        var content = [];
        for (var i = 0; i < nodes.length; i++) {
            var childNode = nodes[i];
            if (childNode.nodeType === 1) {
                content.push(new TuiElement(childNode, this.options));
            }
            if (childNode.nodeType === 3) {
                content.push(new TuiText(childNode, this.style, this.options));
            }
        }

        return content;
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

    getStyle(node) {
        var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);

        // Support only subset of CSS
        return {
            // Symbol-related properties
            color: computedStyle.color,
            backgroundColor: computedStyle.backgroundColor,

            // Supported: normal, bold
            fontWeight: computedStyle.fontWeight,

            // Supported: none, underline, line-through
            textDecoration: computedStyle.textDecoration,

            // Supported: none, italic
            fontStyle: computedStyle.fontStyle,

            // Box-related properties
            borderLeftColor: computedStyle.borderLeftColor,
            borderRightColor: computedStyle.borderRightColor,
            borderTopColor: computedStyle.borderTopColor,
            borderBottomColor: computedStyle.borderBottomColor,

            // Supported: 1px, 0px, none
            borderLeftWidth: parseInt(computedStyle.borderLeftWidth),
            borderRightWidth: parseInt(computedStyle.borderRightWidth),
            borderTopWidth: parseInt(computedStyle.borderTopWidth),
            borderBottomWidth: parseInt(computedStyle.borderBottomWidth),

            paddingLeft: parseInt(computedStyle.paddingLeft),
            paddingRight: parseInt(computedStyle.paddingRight),
            paddingTop: parseInt(computedStyle.paddingTop),
            paddingBottom: parseInt(computedStyle.paddingBottom),

            overflow: computedStyle.overflow,

            // Supported: normal, pre, pre-wrap
            whiteSpace: computedStyle.whiteSpace
        };
    }

    getScroll(node) {
        return {
            scrollHeight: node.scrollHeight,
            scrollWidth: node.scrollWidth,
            scrollLeft: node.scrollLeft,
            scrollTop: node.scrollTop
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
