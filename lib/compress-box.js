import TuiSymbol from './tui-symbol';
import {isSameStyleSymbol} from './tui-symbol';

/**
 *
 * @param {(TuiSymbol)} symbolA
 * @param {(TuiSymbol)} symbolB
 * @returns {(TuiSymbol|null)[]}
 */
function uniteSymbols(symbolA, symbolB) {
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
 * @param {Array<Array<(TuiSymbol)>>} box
 * @returns {Array<Array<(TuiSymbol)>>}
 */
export default function compressBox(box) {
    return box.map((row) => {
        return row.reduce((row, symbol) => {
            var lastSymbol = row[row.length - 1];
            var [unitedSymbols, extraSymbol] = uniteSymbols(lastSymbol, symbol);

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
