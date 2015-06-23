import DefaultSerializer from './default-serializer';
import InputSerializer from './input-serializer';
import {calculate as calculateSpecificity} from 'specificity';

/**
 * Ordered by specificity, the most specific and last added element is at the end
 * @type {{selector: String, specificity: String, serializer: Serializer}[]}
 */
var serializers = [];

/**
 * @param {{specificity: String}} a
 * @param {{specificity: String}} b
 * @returns {Number}
 */
function sortBySpecificity(a, b) {
    if (a.specificity > b.specificity) {
        return 1;
    }

    if (a.specificity < b.specificity) {
        return -1;
    }

    return 0;
}

/**
 * @param {HTMLElement} node
 * @returns {String}
 */
function getMatchFunctionFor(node) {
    var variants = ['matches', 'matchesSelector', 'mozMatchesSelector', 'webkitMatchesSelector'];

    for (var i = 0; i < variants.length; i++) {
        if (typeof node[variants[i]] === 'function') {
            return variants[i];
        }
    }

    throw new Error('match function is not found');
}

/**
 * @param {HTMLElement} node
 * @param {Function} node.matches
 * @returns {Function}
 */
export function selectSerializerFor(node) {
    var matchedSerializers = serializers.filter(function (serializer) {
        return node[getMatchFunctionFor(node)](serializer.selector);
    });

    // the last serializer is the most specific(by specificity and order of adding)
    var Serializer = matchedSerializers[matchedSerializers.length - 1].serializer;

    /**
     * @param {TuiElement} tuiElement
     * @param {Object} options
     */
    return function (tuiElement, options) {
        var serializer = new Serializer(tuiElement, options);
        return serializer.serialize();
    };
}

/**
 * @param {String} selector
 * @param {Serializer} serializer
 * @example
 *  add('table', TableSerializer);
 *  add('input[type="progress"]', ProgressBarSerializer);
 */
export function addSerializer(selector, serializer) {
    if (typeof selector !== 'string') {
        throw new TypeError('`selector` should be a string');
    }

    if (typeof serializer !== 'function') {
        throw new TypeError('`serializer` should be a function');
    }

    calculateSpecificity(selector).forEach(({selector, specificity}) => {
        serializers.push({selector, serializer, specificity});
    });

    serializers.sort(sortBySpecificity);
}

// Matches on all TuiElements
addSerializer('*', DefaultSerializer);

// Matches all inputs
addSerializer('input,select,textarea', InputSerializer);
