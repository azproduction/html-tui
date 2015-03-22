import defaultSerializer from './default';
import {calculate as calculateSpecificity} from 'specificity';

/**
 * Ordered by specificity, the most specific and last added element is at the end
 * @type {{selector: string, specificity: string, serializer: function}[]}
 */
var serializers = [];

/**
 * @param {{specificity: string}} a
 * @param {{specificity: string}} b
 * @returns {number}
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
 *
 * @param {HTMLElement} node
 * @param {function} node.matches
 * @returns {function}
 */
export function selectSerializerFor(node) {
    var matchedSerializers = serializers.filter(function (serializer) {
        return node.matches(serializer.selector);
    });

    // the last serializer is the most specific
    return matchedSerializers[matchedSerializers.length - 1].serializer;
}

/**
 * @param {string} selector
 * @param {function} serializer
 * @example
 *  add('table', tableSerializer);
 *  add('input[type="progress"]', progressBarSerializer);
 */
export function addSerializer(selector, serializer) {
    if (typeof selector !== 'string') {
        throw new TypeError('`selector` should be a string');
    }

    if (typeof serializer !== 'function') {
        throw new TypeError('`serializer` should be a function');
    }

    var specificity = calculateSpecificity(selector).specificity;

    serializers.push({selector, serializer, specificity});
    serializers.sort(sortBySpecificity);
}

// Matches on all TuiElements
addSerializer('*', defaultSerializer);
