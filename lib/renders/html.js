/**
 *
 * @param {TuiSymbol} symbol
 * @returns {string[]}
 */
function htmlSymbol(symbol) {
    var style = '';

    if (symbol.style.color) {
        style += `color:${symbol.style.color};`;
    }

    if (symbol.style.backgroundColor) {
        style += `background-color:${symbol.style.backgroundColor};`;
    }

    return `<span style="${style}">${symbol.char}</span>`;
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} box
 * @returns {string}
 */
export function html(box) {
    return box.map((row) => row.map(htmlSymbol).join('')).join('\n');
}
