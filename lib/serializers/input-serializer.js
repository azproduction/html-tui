import DefaultSerializer from './default-serializer';

export default class InputSerializer extends DefaultSerializer {
    /**
     * @param {TuiElement} tuiElement
     * @param {Object} options
     */
    constructor(tuiElement, options) {
        super(tuiElement, options);

        this.properties = tuiElement.properties;
    }

    /**
     * Max width of input text in viewport
     *
     * @returns {Number}
     */
    getInputMaxContentWidth() {
        var leftInputBorder = this.style.borderLeftWidth + this.style.paddingLeft;
        var rightInputBorder = this.style.borderRightWidth + this.style.paddingRight;

        return this.boundingBox.width - leftInputBorder - rightInputBorder;
    }

    /**
     * Return bounding box of input's value
     *
     * @returns {ObjectClientRect}
     */
    getInputTextBoundingBox() {
        var width = Number(this.properties.value.length);
        var height = 1;
        var left = this.boundingBox.left;
        var top = this.boundingBox.top;

        left += this.style.borderLeftWidth;
        left += this.style.paddingLeft;

        top += this.style.borderTopWidth;
        top += this.style.paddingTop;

        return {
            left,
            top,
            bottom: top + height,
            right: left + width,
            height,
            width
        };
    }

    /**
     * Returns range which should fit into input
     *
     * @returns {{start: Number, end: Number}}
     */
    getVisibleTextRange() {
        /* jshint maxstatements: 20 */
        var {value, selectionEnd} = this.properties;
        var inputContentWidth = this.getInputMaxContentWidth();
        var halfOfInputContentWidth = inputContentWidth / 2;
        var start = Math.floor(selectionEnd - halfOfInputContentWidth) + 1;
        var end = Math.ceil(selectionEnd + halfOfInputContentWidth) + 1;

        // Cursor at the end of the box
        if (value.length === selectionEnd && value.length + 1 > inputContentWidth) {
            end -= 1;
        }

        if (start < 0) {
            end -= start;
            start = 0;
        }

        if (end > value.length) {
            start -= (end - value.length);
            end = value.length;
        }

        if (start < 0) {
            start = 0;
        }

        return {
            start: start,
            end: end
        };
    }

    /**
     * @param {ObjectClientRect} textBoundingBox
     * @param {Object} visibleTextRange
     * @param {Number} visibleTextRange.start
     * @param {Number} visibleTextRange.end
     * @returns {Array<Array<TuiSymbol>>}
     */
    renderCursorBox(textBoundingBox, visibleTextRange) {
        // Render cursor
        var {value, selectionEnd} = this.properties;
        var cursorWidth = 1;
        var textAtCursor = value.substr(selectionEnd, cursorWidth);

        // End of text
        if (textAtCursor === '') {
            textAtCursor = ' ';
        }

        var cursorLeft = textBoundingBox.left + selectionEnd - visibleTextRange.start;
        var cursorRight = cursorLeft + cursorWidth;

        var clientRect = {
            left: cursorLeft,
            top: textBoundingBox.top,
            bottom: textBoundingBox.bottom,
            right: cursorRight,
            height: textBoundingBox.height,
            width: cursorWidth
        };

        return this.fillClientRectsWithText({
            content: textAtCursor,

            // Invert background and text color
            style: {
                color: this.style.backgroundColor,
                backgroundColor: this.style.color
            },
            clientRects: [clientRect]
        });
    }

    /**
     * @param {ClientRect} textBoundingBox
     * @param {Object} visibleTextRange
     * @param {Number} visibleTextRange.start
     * @param {Number} visibleTextRange.end
     * @returns {Array<Array<TuiSymbol>>}
     */
    renderInputTextBox(textBoundingBox, visibleTextRange) {
        var content = this.properties.value.slice(visibleTextRange.start, visibleTextRange.end);

        return this.fillClientRectsWithText({
            content,
            style: this.style,
            clientRects: [textBoundingBox]
        });
    }

    /**
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    serialize() {
        // Compute common measurements
        var textBoundingBox = this.getInputTextBoundingBox();
        var visibleTextRange = this.getVisibleTextRange();

        // Render
        var inputBox = super.serialize();
        var textBox = this.renderInputTextBox(textBoundingBox, visibleTextRange);
        var cursorBox = this.renderCursorBox(textBoundingBox, visibleTextRange);

        inputBox = this.mergeBoxes(inputBox, textBox);
        inputBox = this.mergeBoxes(inputBox, cursorBox);

        return inputBox;
    }
}
