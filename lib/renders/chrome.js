export default {
    /**
     *
     * @param {Array<Array<(TuiSymbol)>>} box
     * @returns {string[]}
     */
    box(box) {
        var characters = [];
        var styles = [];

        box.forEach((row) => {
            var rowCharacters = '';
            var rowStyles = [];

            row.forEach((symbol) => {
                var [character, style] = symbol.toString('chrome');

                rowCharacters += character;
                rowStyles.push(style);
            });

            characters.push(rowCharacters);
            styles.push.apply(styles, rowStyles);
        });

        return [characters.join('\n')].concat(styles);
    },

    /**
     *
     * @param {TuiSymbol} symbol
     * @returns {string[]}
     */
    symbol(symbol) {
        var char = `%c${symbol.char}`;
        var style = '';

        if (symbol.style.color) {
            style += `color:${symbol.style.color};`;
        }

        if (symbol.style.backgroundColor) {
            style += `background-color:${symbol.style.backgroundColor};`;
        }

        return [char, style];
    }
};
