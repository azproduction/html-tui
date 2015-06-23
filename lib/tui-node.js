import TuiSymbol, {isSameStyleSymbol} from './tui-symbol';

/**
 * @abstract
 */
export default class TuiNode {
    /**
     * @param {Node} node
     */
    constructor(node) {
        if (!node.ownerDocument) {
            throw new Error('Can not serialize detached node');
        }
    }

    /**
     * @param {ClientRect} clientRect
     * @param {Number[]} scale
     * @returns {ObjectClientRect}
     */
    getNormalizedClientRectOf(clientRect, {scale}) {
        let [scaleX, scaleY] = scale || [];
        scaleX = scaleX || 1;
        scaleY = scaleY || 1;

        return {
            bottom: Math.round(clientRect.bottom / scaleY),
            height: Math.round(clientRect.height / scaleY),
            left: Math.round(clientRect.left / scaleX),
            right: Math.round(clientRect.right / scaleX),
            top: Math.round(clientRect.top / scaleY),
            width: Math.round(clientRect.width / scaleX)
        };
    }

    /**
     * @param {ClientRect[]} clientRects
     * @param {Number[]} scale
     * @returns {ObjectClientRect[]}
     */
    normalizeClientRects(clientRects, {scale}) {
        return Array.from(clientRects, (clientRect) => this.getNormalizedClientRectOf(clientRect, {scale}));
    }

    /**
     *
     * @param {TuiSymbol} symbolA
     * @param {TuiSymbol} symbolB
     * @returns {(TuiSymbol|null)[]}
     */
    uniteSymbols(symbolA, symbolB) {
        if (!symbolA) {
            return [null, symbolB];
        }

        if (isSameStyleSymbol(symbolA, symbolB)) {
            return [new TuiSymbol(symbolA.char + symbolB.char, symbolA.style), null];
        }

        return [symbolA, symbolB];
    }

    /**
     *
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    toArray() {
        return [[]];
    }

    /**
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    toCompressedArray() {
        return this.toArray().map((row) => {
            return row.reduce((row, symbol) => {
                var lastSymbol = row[row.length - 1];
                var [unitedSymbols, extraSymbol] = this.uniteSymbols(lastSymbol, symbol);

                if (unitedSymbols === null) {
                    row.push(extraSymbol);
                    return row;
                }

                if (unitedSymbols !== null) {
                    row[row.length - 1] = unitedSymbols;
                }

                if (extraSymbol !== null) {
                    row.push(extraSymbol);
                }

                return row;
            }, []);
        });
    }

    /**
     *
     * @returns {string}
     */
    toString() {
        return this.toArray().map((row) => row.join('')).join('\n');
    }
}

/**
 * @typedef {Object} ObjectClientRect
 * @property {Number} bottom
 * @property {Number} height
 * @property {Number} left
 * @property {Number} right
 * @property {Number} top
 * @property {Number} width
 */
