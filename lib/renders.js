import {compressBox} from './utils';

var ansiColors = {
    // # Styles
    bold: ['\x1B[1m', '\x1B[22m'],
    italic: ['\x1B[3m', '\x1B[23m'],
    underline: ['\x1B[4m', '\x1B[24m'],
    inverse: ['\x1B[7m', '\x1B[27m'],
    strikethrough: ['\x1B[9m', '\x1B[29m'],

    // # Text colors
    // ## Grayscale
    'rgb(255, 255, 255)': ['\x1B[37m', '\x1B[39m'],
    'rgb(128, 128, 128)': ['\x1B[90m', '\x1B[39m'],
    'rgb(0, 0, 0)': ['\x1B[30m', '\x1B[39m'],
    // ## Colors
    'rgb(0, 0, 255)': ['\x1B[34m', '\x1B[39m'],
    'rgb(0, 255, 255)': ['\x1B[36m', '\x1B[39m'],
    'rgb(0, 128, 0)': ['\x1B[32m', '\x1B[39m'],
    'rgb(255, 0, 255)': ['\x1B[35m', '\x1B[39m'],
    'rgb(255, 0, 0)': ['\x1B[31m', '\x1B[39m'],
    'rgb(255, 255, 0)': ['\x1B[33m', '\x1B[39m'],
    'rgba(0, 0, 0, 0)': ['', ''],

    // # Background colors
    // ## Grayscale
    'rgb(255, 255, 255)BG': ['\x1B[47m', '\x1B[49m'],
    'rgb(0, 0, 0)BG': ['\x1B[49;5;8m', '\x1B[49m'],
    'rgb(128, 128, 128)BG': ['\x1B[40m', '\x1B[49m'],
    // ## Colors
    'rgb(0, 0, 255)BG': ['\x1B[44m', '\x1B[49m'],
    'rgb(0, 255, 255)BG': ['\x1B[46m', '\x1B[49m'],
    'rgb(0, 128, 0)BG': ['\x1B[42m', '\x1B[49m'],
    'rgb(255, 0, 255)BG': ['\x1B[45m', '\x1B[49m'],
    'rgb(255, 0, 0)BG': ['\x1B[41m', '\x1B[49m'],
    'rgb(255, 255, 0)BG': ['\x1B[43m', '\x1B[49m'],
    'rgba(0, 0, 0, 0)BG': ['', '']
};

/**
 *
 * @param {string} string
 * @param {string[]} style
 * @returns {*}
 */
function wrapString(string, style) {
    var pair = ansiColors[style];

    if (!pair) {
        return string;
    }

    return pair[0] + string + pair[1];
}

var boxRenders = {
    /**
     *
     * @param {Array<Array<(TuiSymbol)>>} box
     * @returns {string}
     */
    default(box) {
        return compressBox(box).map((row) =>  row.join('')).join('\n');
    },

    /**
     *
     * @param {Array<Array<(TuiSymbol)>>} box
     * @returns {string[]}
     */
    chrome(box) {
        var characters = [];
        var styles = [];

        compressBox(box).forEach((row) => {
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
     * @param {Array<Array<(TuiSymbol)>>} box
     * @returns {string}
     */
    html(box) {
        return compressBox(box).map((row) => {
            return row.map(function (symbol) {
                return symbol.toString('html');
            }).join('');
        }).join('\n');
    },

    /**
     *
     * @param {Array<Array<(TuiSymbol)>>} box
     * @returns {string}
     */
    ansi(box) {
        return compressBox(box).map((row) => {
            return row.map(function (symbol) {
                return symbol.toString('ansi');
            }).join('');
        }).join('\n');
    }
};

var symbolRenders = {
    /**
     *
     * @param {TuiSymbol} symbol
     * @returns {string}
     */
    default(symbol) {
        return symbol.char;
    },

    /**
     *
     * @param {TuiSymbol} symbol
     * @returns {string[]}
     */
    chrome(symbol) {
        var char = `%c${symbol.char}`;
        var style = '';

        if (symbol.style.color) {
            style += `color:${symbol.style.color};`;
        }

        if (symbol.style.backgroundColor) {
            style += `background-color:${symbol.style.backgroundColor};`;
        }

        return [char, style];
    },

    /**
     *
     * @param {TuiSymbol} symbol
     * @returns {string[]}
     */
    html(symbol) {
        var style = '';

        if (symbol.style.color) {
            style += `color:${symbol.style.color};`;
        }

        if (symbol.style.backgroundColor) {
            style += `background-color:${symbol.style.backgroundColor};`;
        }

        return '<span style="' + style + '">' + symbol.char + '</span>';
    },

    /**
     *
     * @param {TuiSymbol} symbol
     * @returns {string[]}
     */
    ansi(symbol) {
        var character = wrapString(symbol.char, symbol.style.color);
        character = wrapString(character, symbol.style.backgroundColor + 'BG');

        return character;
    }
};

export function boxRenderFactory(type) {
    if (!boxRenders.hasOwnProperty(type)) {
        throw new Error('No such box render `' + type + '`');
    }

    return boxRenders[type];
}

export function symbolRenderFactory(type) {
    if (!symbolRenders.hasOwnProperty(type)) {
        throw new Error('No such symbol render `' + type + '`');
    }

    return symbolRenders[type];
}
