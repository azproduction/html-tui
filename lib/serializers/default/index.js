import {mergeBoxes, shiftBox} from '../../utils';
import {borderScheme} from './border-scheme';
import TuiSymbol from '../../tui-symbol';

/**
 *
 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
 * @param {object} scheme
 * @returns {string}
 * @private
 */
export function lookupCharacter(options, scheme) {
    var propertyName = Object.keys(scheme)[0];
    var value = scheme[propertyName];

    if (typeof value !== 'object') {
        return value;
    }

    value = value[options[propertyName]];

    if (typeof value !== 'object') {
        return value;
    }

    return lookupCharacter(options, value);
}

/**
 *
 * @param {{x: string, y: string}} options
 * @param {CssStyle} style
 * @returns {{color: string, backgroundColor: string}}
 * @private
 */
export function lookupCharacterStyle(options, style) {
    var color = style.color;
    var backgroundColor = style.backgroundColor;

    if (options.x === 'min') {
        color = style.borderLeftColor;
    }

    if (options.x === 'max') {
        color = style.borderRightColor;
    }

    if (options.y === 'min' && options.x === 'mid') {
        color = style.borderTopColor;
    }

    if (options.y === 'max' && options.x === 'mid') {
        color = style.borderBottomColor;
    }

    return {color, backgroundColor};
}

/**
 *
 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
 * @param {CssStyle} elementStyle
 * @returns {TuiSymbol}
 */
function fromPositionAndStyle(options, elementStyle) {
    var char = lookupCharacter(options, borderScheme);
    var characterStyle = lookupCharacterStyle(options, elementStyle);

    return new TuiSymbol(char, characterStyle);
}

/**
 *
 * @param {TuiElement} tuiElement
 * @param {number} x
 * @param {number} y
 * @returns {TuiSymbol}
 * @private
 */
function boxCharacterAt(tuiElement, x, y) {
    /* jshint maxcomplexity: 10 */
    var width = tuiElement.boundingBox.width;
    var height = tuiElement.boundingBox.height;

    var position = {
        x: x === 0 ? 'min' : x === width - 1 ? 'max' : 'mid',
        y: y === 0 ? 'min' : y === height - 1 ? 'max' : 'mid',
        top: parseInt(tuiElement.style.borderTopWidth) ? 'yes' : 'no',
        right: parseInt(tuiElement.style.borderRightWidth) ? 'yes' : 'no',
        bottom: parseInt(tuiElement.style.borderBottomWidth) ? 'yes' : 'no',
        left: parseInt(tuiElement.style.borderLeftWidth) ? 'yes' : 'no'
    };

    return fromPositionAndStyle(position, tuiElement.style);
}

/**
 *
 * @param {TuiElement} tuiElement
 * @returns {Array<Array<(TuiSymbol)>>}
 * @private
 */
function renderBox(tuiElement) {
    var box = [];
    for (var y = 0; y < tuiElement.boundingBox.height; y++) {
        box.push([]);
        for (var x = 0; x < tuiElement.boundingBox.width; x++) {
            box[y][x] = boxCharacterAt(tuiElement, x, y);
        }
    }

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
    var box = shiftBox(renderBox(tuiElement), tuiElement.boundingBox);
    var content = renderContent(tuiElement);

    return [box].concat(content).reduce(mergeBoxes, []);
}
