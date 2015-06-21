import {mergeBoxes, shiftBox, fillClientRectsWithText} from '../../utils';
import defaultSerializer from '../default';

/**
 * Max width of input text in viewport
 *
 * @param {object} style
 * @param {ClientRect} boundingBox
 * @returns {number}
 */
function getInputMaxContentWidth({style, boundingBox}) {
    var leftInputBorder = style.borderLeftWidth + style.paddingLeft;
    var rightInputBorder = style.borderRightWidth + style.paddingRight;

    return boundingBox.width - leftInputBorder - rightInputBorder;
}

/**
 * Return bounding box of input's value
 *
 * @param {object} style
 * @param {ClientRect}boundingBox
 * @param {string} value
 * @returns {ClientRect}
 */
function getInputTextBoundingBox({style, boundingBox, properties: {value}}) {
    var width = Number(value.length);
    var height = 1;
    var left = boundingBox.left;
    var top = boundingBox.top;

    left += style.borderLeftWidth;
    left += style.paddingLeft;

    top += style.borderTopWidth;
    top += style.paddingTop;

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
 * @param {TuiElement} tuiElement
 * @returns {{start: number, end: number}}
 */
function getVisibleTextRange(tuiElement) {
    /* jshint maxstatements: 20 */
    var {value, selectionEnd} = tuiElement.properties;
    var inputContentWidth = getInputMaxContentWidth(tuiElement);
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
 *
 * @param {object} style
 * @param {string} value
 * @param {number} selectionEnd
 * @param {ClientRect} textBoundingBox
 * @param {object} visibleTextRange
 * @param {number} visibleTextRange.start
 * @param {number} visibleTextRange.end
 * @returns {Array<Array<TuiSymbol>>}
 */
function renderCursorBox({style, properties: {value, selectionEnd}}, textBoundingBox, visibleTextRange) {
    // Render cursor
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

    return fillClientRectsWithText({
        content: textAtCursor,

        // Invert background and text color
        style: {
            color: style.backgroundColor,
            backgroundColor: style.color
        },
        clientRects: [clientRect]
    });
}

/**
 *
 * @param {object} style
 * @param {string} value
 * @param {ClientRect} textBoundingBox
 * @param {object} visibleTextRange
 * @param {number} visibleTextRange.start
 * @param {number} visibleTextRange.end
 * @returns {Array<Array<TuiSymbol>>}
 */
function renderInputTextBox({style, properties: {value}}, textBoundingBox, visibleTextRange) {
    var content = value.slice(visibleTextRange.start, visibleTextRange.end);

    return fillClientRectsWithText({
        content,
        style,
        clientRects: [textBoundingBox]
    });
}

/**
 * @param {TuiElement} tuiElement
 * @returns {Array<Array<(TuiSymbol)>>}
 */
export default function (tuiElement) {
    // Compute common measurements
    var textBoundingBox = getInputTextBoundingBox(tuiElement);
    var visibleTextRange = getVisibleTextRange(tuiElement);

    // Render
    var inputBox = defaultSerializer(tuiElement);
    var textBox = renderInputTextBox(tuiElement, textBoundingBox, visibleTextRange);
    var cursorBox = renderCursorBox(tuiElement, textBoundingBox, visibleTextRange);

    inputBox = mergeBoxes(inputBox, textBox);
    inputBox = mergeBoxes(inputBox, cursorBox);

    return inputBox;
}
