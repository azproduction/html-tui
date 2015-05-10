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

    return box;
}

/**
 *
 * @returns {Array<Array<Array<(TuiSymbol)>>>}
 * @private
 */
function renderContent(tuiElement) {
    return tuiElement.content.map((item) => item.toArray());
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
