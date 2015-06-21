const TEXT_STYLES = [
    ['color', 'color'],
    ['font-style', 'fontStyle'],
    ['font-weight', 'fontWeight'],
    ['text-decoration', 'textDecoration'],
    ['background-color', 'backgroundColor']
];

/**
 * @param {Object} symbolStyle
 * @returns {String}
 */
export default function serializeStyle(symbolStyle) {
    return TEXT_STYLES.reduce((style, [cssProperty, styleProperty]) => {
        if (symbolStyle[styleProperty]) {
            style += `${cssProperty}:${symbolStyle[styleProperty]};`;
        }

        return style;
    }, '');
}
