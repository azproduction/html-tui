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
     * @returns {string}
     */
    symbol(symbol) {
        return symbol.char;
    }
};
