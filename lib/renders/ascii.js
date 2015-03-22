/**
 *
 * @param {TuiSymbol} symbol
 * @returns {string}
 */
function asciiSymbol(symbol) {
    return symbol.char;
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} box
 * @returns {string}
 */
export function ascii(box) {
    return box.map((row) => row.map(asciiSymbol).join('')).join('\n');
}
