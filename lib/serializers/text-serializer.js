import TuiSymbol from '../tui-symbol';
import {BACKGROUND_CHARACTER} from '../characters';
import Serializer from './serializer';

export default class TextSerializer extends Serializer {
    constructor(tuiText, options) {
        super(tuiText, options);

        /**
         * @type {CssStyle}
         */
        this.style = tuiText.style;
        /**
         * @type {ObjectClientRect[]}
         */
        this.clientRects = tuiText.clientRects;
        /**
         * @type {ObjectClientRect}
         */
        this.boundingBox = tuiText.boundingBox;
        /**
         * @type {String}
         */
        this.content = tuiText.content;
    }

    /**
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    serialize() {
        if (this.boundingBox.width === 0 || this.boundingBox.height === 0) {
            return [[]];
        }

        return this.fillClientRectsWithText({
            style: this.style,
            content: this.content,
            clientRects: this.clientRects
        });
    }
}
