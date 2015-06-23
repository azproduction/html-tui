import TuiNode from './tui-node';
import TextSerializer from './serializers/text-serializer';

export default class TuiText extends TuiNode {
    /**
     * @param {Node} node
     * @param {CssStyle} style
     * @param {Object} [options={}]
     * @param {Number[]} [options.scale]
     * @constructor
     */
    constructor(node, style, options) {
        super(node);
        if (node.nodeType !== 3) {
            throw new Error('Only text node is supported');
        }

        var range = node.ownerDocument.createRange();
        range.selectNodeContents(node);

        this.options = options || {};

        /**
         * @type {ClientRect}
         */
        this.boundingBox = this.getNormalizedClientRectOf(range.getBoundingClientRect(), this.options);

        /**
         * @type {ObjectClientRect[]}
         */
        this.clientRects = this.normalizeClientRects(range.getClientRects(), this.options);

        this.content = node.textContent;

        this.style = style;
    }

    /**
     *
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    toArray() {
        return new TextSerializer(this, this.options).serialize();
    }
}
