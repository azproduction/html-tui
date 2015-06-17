import serializeStyle from './common/serialize-style';

/**
 *
 * @param {TuiSymbol} symbol
 * @returns {string[]}
 */
function htmlSymbol(symbol) {
    var style = serializeStyle(symbol.style);

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
