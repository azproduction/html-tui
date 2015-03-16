export default {
    /**
     *
     * @param {Array<Array<(TuiSymbol)>>} box
     * @returns {string}
     */
    box(box) {
        return box.map((row) => {
            return row.map(function (symbol) {
                return symbol.toString('html');
            }).join('');
        }).join('\n');
    },

    /**
     *
     * @param {TuiSymbol} symbol
     * @returns {string[]}
     */
    symbol(symbol) {
        var style = '';

        if (symbol.style.color) {
            style += `color:${symbol.style.color};`;
        }

        if (symbol.style.backgroundColor) {
            style += `background-color:${symbol.style.backgroundColor};`;
        }

        return '<span style="' + style + '">' + symbol.char + '</span>';
    }
};
