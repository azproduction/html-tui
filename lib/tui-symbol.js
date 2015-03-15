import {borderScheme} from './border-scheme';
import {isTransparentCharacter, lookupCharacter, lookupCharacterStyle} from './utils';
import {symbolRenderFactory} from './renders';

export default class TuiSymbol {
    /**
     *
     * @param {string} char
     * @param {{color: string, backgroundColor: string}} style
     */
    constructor(char, style) {
        if (isTransparentCharacter(char, style)) {
            char = ' ';
        }

        Object.assign(this, {char, style});
    }

    /**
     *
     * @returns {string|*}
     */
    toString(type = 'default') {
        return symbolRenderFactory(type)(this);
    }
}

/**
 *
 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
 * @param {CssStyle} elementStyle
 * @returns {TuiSymbol}
 */
export function fromPositionAndStyle(options, elementStyle) {
    var char = lookupCharacter(options, borderScheme);
    var characterStyle = lookupCharacterStyle(options, elementStyle);

    return new TuiSymbol(char, characterStyle);
}
