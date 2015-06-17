import serializeStyle from './common/serialize-style';

/**
 * @param {TuiSymbol} symbol
 * @returns {string[]}
 */
function chromeSymbol(symbol) {
    var char = `%c${symbol.char}`;
    var style = serializeStyle(symbol.style);

    return [char, style];
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} box
 * @returns {string[]}
 */
export function chrome(box) {
    var characters = [];
    var styles = [];

    box.forEach((row) => {
        var rowCharacters = '';
        var rowStyles = [];

        row.forEach((symbol) => {
            var [character, style] = chromeSymbol(symbol);

            rowCharacters += character;
            rowStyles.push(style);
        });

        characters.push(rowCharacters);
        styles.push.apply(styles, rowStyles);
    });

    return [characters.join('\n')].concat(styles);
}
