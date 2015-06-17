import {BACKGROUND_CHARACTER} from './characters';

/**
 *
 * @param {(TuiSymbol)} symbolA
 * @param {(TuiSymbol)} symbolB
 */
export function isSameStyleSymbol(symbolA, symbolB) {
    return symbolA.style.color === symbolB.style.color &&
        symbolA.style.fontStyle === symbolB.style.fontStyle &&
        symbolA.style.fontWeight === symbolB.style.fontWeight &&
        symbolA.style.textDecoration === symbolB.style.textDecoration &&
        symbolA.style.backgroundColor === symbolB.style.backgroundColor;
}

/**
 *
 * @param {string} color
 * @returns {boolean}
 */
export function isTransparentColor(color) {
    return color === 'rgba(0, 0, 0, 0)' || color === 'transparent';
}

/**
 *
 * @param {string} char
 * @param {CssStyle} style
 * @returns {boolean}
 */
export function isTransparentCharacter(char, style) {
    return char === BACKGROUND_CHARACTER && isTransparentColor(style.backgroundColor);
}

export default class TuiSymbol {
    /**
     *
     * @param {string} char
     * @param {{color: string, backgroundColor: string}} style
     */
    constructor(char, style) {
        if (isTransparentCharacter(char, style)) {
            char = BACKGROUND_CHARACTER;
        }

        this.char = char;
        this.style = style;
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        return this.char;
    }
}

export var emptySymbol = new TuiSymbol(BACKGROUND_CHARACTER, {
    color: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(0, 0, 0, 0)'
});
