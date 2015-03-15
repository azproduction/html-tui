import {getNormalizedClientRectOf, shiftBox} from './utils';
import TuiSymbol from './tui-symbol';
import {boxRenderFactory} from './renders';

export default class TuiText {
	/**
	 *
	 * @param {Node} node
	 * @param {CssStyle} [style=null]
	 * @constructor
	 */
	constructor(node, style = null) {
		if (node.nodeType !== 3) {
			throw new Error('Only text node is supported');
		}

		if (!node.ownerDocument) {
			throw new Error('Can not serialize detached node');
		}

		var range = node.ownerDocument.createRange();
		range.selectNodeContents(node);

		/**
		 * @type {ClientRect}
		 */
		this.boundingBox = getNormalizedClientRectOf(range.getBoundingClientRect());

		this.content = node.textContent;

		this.style = style || node.parentNode.ownerDocument.defaultView.getComputedStyle(node.parentNode);
	}

	_renderTextBox() {
		var content = this.content.replace(/\s\s+/g, ' ');

		var symbols = content.split('').map((symbol) => {
			return new TuiSymbol(symbol, {
				color: this.style.color,
				backgroundColor: this.style.backgroundColor
			});
		});

		return [symbols];
	}

	/**
	 *
	 * @returns {Array<Array<(TuiSymbol)>>}
	 * @private
	 */
	toArray() {
		if (this.boundingBox.width === 0 || this.boundingBox.height === 0) {
			return [[]];
		}
		return shiftBox(this._renderTextBox(), this.boundingBox);
	}

	/**
	 *
	 * @returns {string|*}
	 */
	toString(type = 'default') {
		return boxRenderFactory(type)(this.toArray());
	}
}
