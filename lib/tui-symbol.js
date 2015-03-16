import {borderScheme, backgroundCharacter} from './border-scheme';
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
            char = backgroundCharacter;
        }

        this.char = char;
        this.style = style;
    }

    /**
     *
     * @returns {string|*}
     */
    toString(type = 'default') {
        return symbolRenderFactory(type)(this);
    }
}

export var emptySymbol = new TuiSymbol(backgroundCharacter, {
    color: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(0, 0, 0, 0)'
});

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
