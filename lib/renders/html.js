import serializeStyle from './common/serialize-style';
import {AllHtmlEntities} from 'html-entities';

let entities = new AllHtmlEntities();

/**
 *
 * @param {TuiSymbol} symbol
 * @returns {string[]}
 */
function htmlSymbol(symbol) {
    var style = serializeStyle(symbol.style);

    return `<span style="${style}">${entities.encode(symbol.char)}</span>`;
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} box
 * @returns {string}
 */
export function html(box) {
    return box.map((row) => row.map(htmlSymbol).join('')).join('\n');
}
