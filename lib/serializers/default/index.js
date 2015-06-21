import {mergeBoxes, shiftBox} from '../../utils';
import TuiSymbol from '../../tui-symbol';
import {BACKGROUND_CHARACTER} from '../../characters';

/**
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 * @returns {Array<Array<(TuiSymbol)>>}
 */
function fillBox({clientRect, style}) {
    var width = clientRect.width;
    var height = clientRect.height;

    var background = new TuiSymbol(BACKGROUND_CHARACTER, {
        color: style.color,
        backgroundColor: style.backgroundColor
    });

    var box = new Array(height);
    for (let y = 0; y < height; y++) {
        box[y] = new Array(width);
        for (let x = 0; x < width; x++) {
            box[y][x] = background;
        }
    }

    return box;
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 */
function fillLeftBorder(box, {clientRect, style}) {
    if (!style.borderLeftWidth) {
        return;
    }

    var leftBorder = new TuiSymbol('|', {
        color: style.borderLeftColor,
        backgroundColor: style.backgroundColor
    });

    var height = clientRect.height;

    for (let y = 0; y < height; y++) {
        box[y][0] = leftBorder;
    }
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 */
function fillRightBorder(box, {clientRect, style}) {
    if (!style.borderRightWidth) {
        return;
    }

    var rightBorder = new TuiSymbol('|', {
        color: style.borderRightColor,
        backgroundColor: style.backgroundColor
    });

    var height = clientRect.height;
    var width = clientRect.width;

    for (let y = 0; y < height; y++) {
        box[y][width - 1] = rightBorder;
    }
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 */
function fillTopBorder(box, {clientRect, style}) {
    if (!style.borderTopWidth) {
        return;
    }

    var topBorder = new TuiSymbol('-', {
        color: style.borderTopColor,
        backgroundColor: style.backgroundColor
    });

    var height = clientRect.height;
    var width = clientRect.width;

    for (let x = 1; x < width - 1; x++) {
        box[0][x] = topBorder;
    }

    // Top Left corner
    if (box[0][0].char === '|') {
        box[0][0] = new TuiSymbol('┌', {
            color: style.borderTopColor,
            backgroundColor: style.backgroundColor
        });
    }

    // Top Right corner
    if (box[0][width - 1].char === '|') {
        box[0][width - 1] = new TuiSymbol('┐', {
            color: style.borderTopColor,
            backgroundColor: style.backgroundColor
        });
    }
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 */
function fillBottomBorder(box, {clientRect, style}) {
    if (!style.borderBottomWidth) {
        return;
    }

    var bottomBorder = new TuiSymbol('-', {
        color: style.borderBottomColor,
        backgroundColor: style.backgroundColor
    });

    var height = clientRect.height;
    var width = clientRect.width;

    for (let x = 1; x < width - 1; x++) {
        box[height - 1][x] = bottomBorder;
    }

    // Bottom Left corner
    if (box[height - 1][0].char === '|') {
        box[height - 1][0] = new TuiSymbol('└', {
            color: style.borderTopColor,
            backgroundColor: style.backgroundColor
        });
    }

    // Bottom Right corner
    if (box[height - 1][width - 1].char === '|') {
        box[height - 1][width - 1] = new TuiSymbol('┘', {
            color: style.borderTopColor,
            backgroundColor: style.backgroundColor
        });
    }
}

/**
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 * @param {Object} scroll
 * @returns {boolean}
 */
function hasHorizontalScrollBars({clientRect, style, scroll}) {
    var  overflow = style.overflow;

    if (overflow === 'visible' || overflow === 'hidden') {
        return false;
    }

    return scroll.scrollWidth > clientRect.width;
}

/**
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 * @param {Object} scroll
 * @returns {boolean}
 */
function hasVerticalScrollBars({clientRect, style, scroll}) {
    var  overflow = style.overflow;

    if (overflow === 'visible' || overflow === 'hidden') {
        return false;
    }

    return scroll.scrollHeight > clientRect.height;
}

/**
 * @param {Number} borderSize
 * @returns {Number}
 */
function getTuiBorderSize(borderSize) {
    if (borderSize > 0) {
        return 1;
    }

    return 0;
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 * @param {Object} scroll
 */
function renderVerticalScrollBar(box, {clientRect, style, scroll}) {
    /* jshint maxstatements: 20, maxcomplexity: 7 */
    if (!hasVerticalScrollBars({clientRect, style, scroll})) {
        return;
    }

    var borderRightWidth = getTuiBorderSize(style.borderRightWidth);
    var borderBottomWidth = getTuiBorderSize(style.borderBottomWidth);
    var borderTopWidth = getTuiBorderSize(style.borderTopWidth);
    var height = clientRect.height;
    var availableScrollHeight = height - borderBottomWidth - borderTopWidth;
    var scrollHeight = scroll.scrollHeight;
    var scrollTop = scroll.scrollTop;

    var trackHeight = Math.max(Math.floor((height / scrollHeight) * availableScrollHeight), 1);
    var trackTop = Math.floor((scrollTop / scrollHeight) * availableScrollHeight);
    var trackBottom = trackTop + trackHeight;

    var scrollBarBackground = new TuiSymbol('¦', {
        color: style.color,
        backgroundColor: style.backgroundColor
    });

    var scrollBarTrack = new TuiSymbol('║', {
        color: style.color,
        backgroundColor: style.backgroundColor
    });

    // Fill and Track
    for (var y = borderTopWidth; y < box.length - borderBottomWidth; y++) {
        var row = box[y];
        var scrollBarPosition = row.length - borderRightWidth - 1;
        if (y >= trackTop && y <= trackBottom) {
            row[scrollBarPosition] = scrollBarTrack;
        } else {
            row[scrollBarPosition] = scrollBarBackground;
        }
    }
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 * @param {Object} scroll
 */
function renderHorizontalScrollBar(box, {clientRect, style, scroll}) {
    if (!hasHorizontalScrollBars({clientRect, style, scroll})) {
        return;
    }
}

/**
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 * @param {Object} scroll
 * @param {Boolean} hasLeftBorder
 * @param {Boolean} hasRightBorder
 * @returns {Array<Array<(TuiSymbol)>>}
 */
function renderBox({clientRect, style, scroll, hasLeftBorder, hasRightBorder}) {
    var options = {clientRect, style, scroll};

    var box = fillBox(options);
    if (hasLeftBorder) {
        fillLeftBorder(box, options);
    }
    if (hasRightBorder) {
        fillRightBorder(box, options);
    }
    fillTopBorder(box, options);
    fillBottomBorder(box, options);
    renderVerticalScrollBar(box, options);
    box = shiftBox(box, clientRect);

    return box;
}

/**
 * @param {TuiElement} tuiElement
 * @returns {Array<Array<Array<(TuiSymbol)>>>}
 */
function renderBoxes(tuiElement) {
    var {style, scroll} = tuiElement;
    return tuiElement.clientRects.map((clientRect, index, {length}) => {
        var hasLeftBorder = index === 0;
        var hasRightBorder = index === length - 1;
        return renderBox({clientRect, style, scroll, hasLeftBorder, hasRightBorder});
    });
}

/**
 *
 * @param {Number} bottom
 * @param {Number} right
 * @param {Number} top
 * @param {Number} left
 * @returns {Function}
 */
function cropBoxUsing({bottom, right, top, left}) {
    /* jshint maxcomplexity: 7 */
    /**
     * @param {Array<Array<(TuiSymbol)>>} box
     * @return {Array<Array<(TuiSymbol)>>}
     */
    return function cropBox(box) {
        if (bottom <= 0 || right <= 0) {
            return [[]];
        }
        var croppedBox = new Array(bottom);

        for (var y = top; y < box.length && y < bottom; y++) {
            var row = box[y];
            croppedBox[y] = new Array(right);

            if (!row) {
                continue;
            }

            for (var x = left; x < row.length && x < right; x++) {
                croppedBox[y][x] = row[x];
            }
        }

        return croppedBox;
    };
}

/**
 * @param {ObjectClientRect} clientRect
 * @param {CssStyle} style
 * @returns {Function} crop function
 */
function cropBoxFactory({clientRect, style}) {
    // Do not crop
    if (style.overflow === 'visible') {
        return (box) => box;
    }

    var bottom = clientRect.bottom - getTuiBorderSize(style.borderBottomWidth);
    var right = clientRect.right - getTuiBorderSize(style.borderRightWidth);
    var top = clientRect.top + getTuiBorderSize(style.borderTopWidth);
    var left = clientRect.left + getTuiBorderSize(style.borderLeftWidth);

    return cropBoxUsing({bottom, right, top, left});
}

/**
 * @returns {Array<Array<Array<(TuiSymbol)>>>}
 */
function renderContent(tuiElement) {
    return tuiElement.content
        .map((item) => item.toArray())
        .map(cropBoxFactory({
            style: tuiElement.style,
            clientRect: tuiElement.boundingBox
        }));
}

/**
 * @param {TuiElement} tuiElement
 * @returns {Array<Array<(TuiSymbol)>>}
 */
export default function (tuiElement) {
    var boxes = renderBoxes(tuiElement);
    var content = renderContent(tuiElement);

    return boxes.concat(content).reduce(mergeBoxes, []);
}
