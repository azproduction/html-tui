import {mergeBoxes, shiftBox} from '../../utils';
import TuiSymbol from '../../tui-symbol';
import {BACKGROUND_CHARACTER} from '../../characters';

/**
 * @param {TuiElement} tuiElement
 * @returns {Array<Array<(TuiSymbol)>>}
 */
function fillBox(tuiElement) {
    var width = tuiElement.boundingBox.width;
    var height = tuiElement.boundingBox.height;

    var background = new TuiSymbol(BACKGROUND_CHARACTER, {
        color: tuiElement.style.color,
        backgroundColor: tuiElement.style.backgroundColor
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
 * @param {TuiElement} tuiElement
 */
function fillLeftBorder(box, tuiElement) {
    if (!tuiElement.style.borderLeftWidth) {
        return;
    }

    var leftBorder = new TuiSymbol('|', {
        color: tuiElement.style.borderLeftColor,
        backgroundColor: tuiElement.style.backgroundColor
    });

    var height = tuiElement.boundingBox.height;

    for (let y = 0; y < height; y++) {
        box[y][0] = leftBorder;
    }
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {TuiElement} tuiElement
 */
function fillRightBorder(box, tuiElement) {
    if (!tuiElement.style.borderRightWidth) {
        return;
    }

    var rightBorder = new TuiSymbol('|', {
        color: tuiElement.style.borderRightColor,
        backgroundColor: tuiElement.style.backgroundColor
    });

    var height = tuiElement.boundingBox.height;
    var width = tuiElement.boundingBox.width;

    for (let y = 0; y < height; y++) {
        box[y][width - 1] = rightBorder;
    }
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {TuiElement} tuiElement
 */
function fillTopBorder(box, tuiElement) {
    if (!tuiElement.style.borderTopWidth) {
        return;
    }

    var topBorder = new TuiSymbol('-', {
        color: tuiElement.style.borderTopColor,
        backgroundColor: tuiElement.style.backgroundColor
    });

    var height = tuiElement.boundingBox.height;
    var width = tuiElement.boundingBox.width;

    for (let x = 1; x < width - 1; x++) {
        box[0][x] = topBorder;
    }

    // Top Left corner
    if (box[0][0].char === '|') {
        box[0][0] = new TuiSymbol('┌', {
            color: tuiElement.style.borderTopColor,
            backgroundColor: tuiElement.style.backgroundColor
        });
    }

    // Top Right corner
    if (box[0][width - 1].char === '|') {
        box[0][width - 1] = new TuiSymbol('┐', {
            color: tuiElement.style.borderTopColor,
            backgroundColor: tuiElement.style.backgroundColor
        });
    }
}

/**
 * @param {Array<Array<(TuiSymbol)>>} box
 * @param {TuiElement} tuiElement
 */
function fillBottomBorder(box, tuiElement) {
    if (!tuiElement.style.borderBottomWidth) {
        return;
    }

    var topBorder = new TuiSymbol('-', {
        color: tuiElement.style.borderBottomColor,
        backgroundColor: tuiElement.style.backgroundColor
    });

    var height = tuiElement.boundingBox.height;
    var width = tuiElement.boundingBox.width;

    for (let x = 1; x < width - 1; x++) {
        box[height - 1][x] = topBorder;
    }

    // Bottom Left corner
    if (box[height - 1][0].char === '|') {
        box[height - 1][0] = new TuiSymbol('└', {
            color: tuiElement.style.borderTopColor,
            backgroundColor: tuiElement.style.backgroundColor
        });
    }

    // Bottom Right corner
    if (box[height - 1][width - 1].char === '|') {
        box[height - 1][width - 1] = new TuiSymbol('┘', {
            color: tuiElement.style.borderTopColor,
            backgroundColor: tuiElement.style.backgroundColor
        });
    }
}

/**
 * @param {TuiElement} tuiElement
 * @returns {boolean}
 */
function hasHorizontalScrollBars(tuiElement) {
    var  overflow = tuiElement.style.overflow;

    if (overflow === 'visible' || overflow === 'hidden') {
        return false;
    }

    return tuiElement.scroll.scrollWidth > tuiElement.boundingBox.width;
}

/**
 * @param {TuiElement} tuiElement
 * @returns {boolean}
 */
function hasVerticalScrollBars(tuiElement) {
    var  overflow = tuiElement.style.overflow;

    if (overflow === 'visible' || overflow === 'hidden') {
        return false;
    }

    return tuiElement.scroll.scrollHeight > tuiElement.boundingBox.height;
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
 * @param {TuiElement} tuiElement
 */
function renderVerticalScrollBar(box, tuiElement) {
    /* jshint maxstatements: 20, maxcomplexity: 7 */
    if (!hasVerticalScrollBars(tuiElement)) {
        return;
    }

    var borderRightWidth = getTuiBorderSize(tuiElement.style.borderRightWidth);
    var borderBottomWidth = getTuiBorderSize(tuiElement.style.borderBottomWidth);
    var borderTopWidth = getTuiBorderSize(tuiElement.style.borderTopWidth);
    var height = tuiElement.boundingBox.height;
    var availableScrollHeight = height - borderBottomWidth - borderTopWidth;
    var scrollHeight = tuiElement.scroll.scrollHeight;
    var scrollTop = tuiElement.scroll.scrollTop;

    var trackHeight = Math.max(Math.floor((height / scrollHeight) * availableScrollHeight), 1);
    var trackTop = Math.floor((scrollTop / scrollHeight) * availableScrollHeight);
    var trackBottom = trackTop + trackHeight;

    var scrollBarBackground = new TuiSymbol('¦', {
        color: tuiElement.style.color,
        backgroundColor: tuiElement.style.backgroundColor
    });

    var scrollBarTrack = new TuiSymbol('║', {
        color: tuiElement.style.color,
        backgroundColor: tuiElement.style.backgroundColor
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
 * @param {TuiElement} tuiElement
 */
function renderHorizontalScrollBar(box, tuiElement) {
    if (!hasHorizontalScrollBars(tuiElement)) {
        return;
    }
}

/**
 *
 * @param {TuiElement} tuiElement
 * @returns {Array<Array<(TuiSymbol)>>}
 * @private
 */
function renderBox(tuiElement) {
    var box = fillBox(tuiElement);
    fillLeftBorder(box, tuiElement);
    fillRightBorder(box, tuiElement);
    fillTopBorder(box, tuiElement);
    fillBottomBorder(box, tuiElement);
    renderVerticalScrollBar(box, tuiElement);

    return box;
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

            for (var x = left; x < row.length && x < right; x++) {
                croppedBox[y][x] = row[x];
            }
        }

        return croppedBox;
    };
}

/**
 * @param {TuiElement} tuiElement
 * @returns {Function} crop function
 */
function cropBoxByTuiElement(tuiElement) {
    if (tuiElement.style.overflow === 'visible') {
        return (box) => box;
    }

    var bottom = tuiElement.boundingBox.bottom - getTuiBorderSize(tuiElement.style.borderBottomWidth);
    var right = tuiElement.boundingBox.right - getTuiBorderSize(tuiElement.style.borderRightWidth);
    var top = tuiElement.boundingBox.top + getTuiBorderSize(tuiElement.style.borderTopWidth);
    var left = tuiElement.boundingBox.left + getTuiBorderSize(tuiElement.style.borderLeftWidth);

    return cropBoxUsing({bottom, right, top, left});
}

/**
 *
 * @returns {Array<Array<Array<(TuiSymbol)>>>}
 * @private
 */
function renderContent(tuiElement) {
    return tuiElement.content
        .map((item) => item.toArray())
        .map(cropBoxByTuiElement(tuiElement));
}

/**
 * @param {TuiElement} tuiElement
 * @returns {Array<Array<(TuiSymbol)>>}
 */
export default function (tuiElement) {
    var box = renderBox(tuiElement);
    box = shiftBox(box, tuiElement.boundingBox);
    var content = renderContent(tuiElement);

    return [box].concat(content).reduce(mergeBoxes, []);
}
