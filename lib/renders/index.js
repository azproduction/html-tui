var boxRenders = {};
var symbolRenders = {};

/**
 *
 * @param {string} type
 * @returns {function}
 */
export function boxRenderFactory(type) {
    if (!boxRenders.hasOwnProperty(type)) {
        throw new Error('No such box render `' + type + '`');
    }

    return boxRenders[type];
}

/**
 *
 * @param {string} type
 * @returns {function}
 */
export function symbolRenderFactory(type) {
    if (!symbolRenders.hasOwnProperty(type)) {
        throw new Error('No such symbol render `' + type + '`');
    }

    return symbolRenders[type];
}

/**
 *
 * @param {string} type
 * @param {function} box
 * @param {function} symbol
 */
export function addRenderer(type, {box, symbol}) {
    boxRenders[type] = box;
    symbolRenders[type] = symbol;
}

addRenderer('default', require('./default'));
addRenderer('chrome', require('./chrome'));
addRenderer('ansi', require('./ansi'));
addRenderer('html', require('./html'));
