var htmlTui =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TuiElement = _interopRequire(__webpack_require__(8));
	exports.render = _interopRequire(__webpack_require__(3));
	exports.compressBox = _interopRequire(__webpack_require__(2));
	exports.addSerializer = __webpack_require__(4).addSerializer;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
	"use strict";

	exports.ansi = ansi;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ansiColors = {
	    // # Styles
	    bold: ["\u001b[1m", "\u001b[22m"],
	    italic: ["\u001b[3m", "\u001b[23m"],
	    underline: ["\u001b[4m", "\u001b[24m"],
	    inverse: ["\u001b[7m", "\u001b[27m"],
	    strikethrough: ["\u001b[9m", "\u001b[29m"],

	    // # Text colors
	    // ## Grayscale
	    "rgb(255, 255, 255)": ["\u001b[37m", "\u001b[39m"],
	    "rgb(128, 128, 128)": ["\u001b[90m", "\u001b[39m"],
	    "rgb(0, 0, 0)": ["\u001b[30m", "\u001b[39m"],
	    // ## Colors
	    "rgb(0, 0, 255)": ["\u001b[34m", "\u001b[39m"],
	    "rgb(0, 255, 255)": ["\u001b[36m", "\u001b[39m"],
	    "rgb(0, 128, 0)": ["\u001b[32m", "\u001b[39m"],
	    "rgb(255, 0, 255)": ["\u001b[35m", "\u001b[39m"],
	    "rgb(255, 0, 0)": ["\u001b[31m", "\u001b[39m"],
	    "rgb(255, 255, 0)": ["\u001b[33m", "\u001b[39m"],
	    "rgba(0, 0, 0, 0)": ["", ""],

	    // # Background colors
	    // ## Grayscale
	    "rgb(255, 255, 255)BG": ["\u001b[47m", "\u001b[49m"],
	    "rgb(0, 0, 0)BG": ["\u001b[49;5;8m", "\u001b[49m"],
	    "rgb(128, 128, 128)BG": ["\u001b[40m", "\u001b[49m"],
	    // ## Colors
	    "rgb(0, 0, 255)BG": ["\u001b[44m", "\u001b[49m"],
	    "rgb(0, 255, 255)BG": ["\u001b[46m", "\u001b[49m"],
	    "rgb(0, 128, 0)BG": ["\u001b[42m", "\u001b[49m"],
	    "rgb(255, 0, 255)BG": ["\u001b[45m", "\u001b[49m"],
	    "rgb(255, 0, 0)BG": ["\u001b[41m", "\u001b[49m"],
	    "rgb(255, 255, 0)BG": ["\u001b[43m", "\u001b[49m"],
	    "rgba(0, 0, 0, 0)BG": ["", ""]
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

	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string[]}
	 */
	function ansiSymbol(symbol) {
	    var character = wrapString(symbol.char, symbol.style.color);
	    character = wrapString(character, symbol.style.backgroundColor + "BG");

	    return character;
	}
	function ansi(box) {
	    return box.map(function (row) {
	        return row.map(ansiSymbol).join("");
	    }).join("\n");
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	module.exports = compressBox;

	var _tuiSymbol = __webpack_require__(5);

	var TuiSymbol = _interopRequire(_tuiSymbol);

	var isSameStyleSymbol = _tuiSymbol.isSameStyleSymbol;

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
	function compressBox(box) {
	    return box.map(function (row) {
	        return row.reduce(function (row, symbol) {
	            var lastSymbol = row[row.length - 1];

	            var _uniteSymbols = uniteSymbols(lastSymbol, symbol);

	            var _uniteSymbols2 = _slicedToArray(_uniteSymbols, 2);

	            var unitedSymbols = _uniteSymbols2[0];
	            var extraSymbol = _uniteSymbols2[1];

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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ansi = __webpack_require__(1).ansi;

	var chrome = __webpack_require__(9).chrome;

	var html = __webpack_require__(10).html;

	var ascii = __webpack_require__(11).ascii;

	module.exports = { ansi: ansi, chrome: chrome, html: html, ascii: ascii };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	/**
	 *
	 * @param {HTMLElement} node
	 * @param {function} node.matches
	 * @returns {function}
	 */
	exports.selectSerializerFor = selectSerializerFor;

	/**
	 * @param {string} selector
	 * @param {function} serializer
	 * @example
	 *  add('table', tableSerializer);
	 *  add('input[type="progress"]', progressBarSerializer);
	 */
	exports.addSerializer = addSerializer;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var defaultSerializer = _interopRequire(__webpack_require__(12));

	var inputSerializer = _interopRequire(__webpack_require__(13));

	var calculateSpecificity = __webpack_require__(14).calculate;

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
	 * @param {HTMLElement} node
	 * @returns string
	 */
	function getMatchFunctionFor(node) {
	    var variants = ["matches", "matchesSelector", "mozMatchesSelector", "webkitMatchesSelector"];

	    for (var i = 0; i < variants.length; i++) {
	        if (typeof node[variants[i]] === "function") {
	            return variants[i];
	        }
	    }

	    throw new Error("match function is not found");
	}
	function selectSerializerFor(node) {
	    var matchedSerializers = serializers.filter(function (serializer) {
	        return node[getMatchFunctionFor(node)](serializer.selector);
	    });

	    // the last serializer is the most specific(by specificity and order of adding)
	    return matchedSerializers[matchedSerializers.length - 1].serializer;
	}

	function addSerializer(selector, serializer) {
	    if (typeof selector !== "string") {
	        throw new TypeError("`selector` should be a string");
	    }

	    if (typeof serializer !== "function") {
	        throw new TypeError("`serializer` should be a function");
	    }

	    calculateSpecificity(selector).forEach(function (_ref) {
	        var selector = _ref.selector;
	        var specificity = _ref.specificity;

	        serializers.push({ selector: selector, serializer: serializer, specificity: specificity });
	    });

	    serializers.sort(sortBySpecificity);
	}

	// Matches on all TuiElements
	addSerializer("*", defaultSerializer);

	// Matches all inputs
	addSerializer("input,select,textarea", inputSerializer);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	/**
	 *
	 * @param {(TuiSymbol)} symbolA
	 * @param {(TuiSymbol)} symbolB
	 */
	exports.isSameStyleSymbol = isSameStyleSymbol;

	/**
	 *
	 * @param {string} color
	 * @returns {boolean}
	 */
	exports.isTransparentColor = isTransparentColor;

	/**
	 *
	 * @param {string} char
	 * @param {CssStyle} style
	 * @returns {boolean}
	 */
	exports.isTransparentCharacter = isTransparentCharacter;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var BACKGROUND_CHARACTER = __webpack_require__(15).BACKGROUND_CHARACTER;

	function isSameStyleSymbol(symbolA, symbolB) {
	    return symbolA.style.color === symbolB.style.color && symbolA.style.backgroundColor === symbolB.style.backgroundColor;
	}

	function isTransparentColor(color) {
	    return color === "rgba(0, 0, 0, 0)" || color === "transparent";
	}

	function isTransparentCharacter(char, style) {
	    return char === BACKGROUND_CHARACTER && isTransparentColor(style.backgroundColor);
	}

	var TuiSymbol = (function () {
	    /**
	     *
	     * @param {string} char
	     * @param {{color: string, backgroundColor: string}} style
	     */

	    function TuiSymbol(char, style) {
	        _classCallCheck(this, TuiSymbol);

	        if (isTransparentCharacter(char, style)) {
	            char = BACKGROUND_CHARACTER;
	        }

	        this.char = char;
	        this.style = style;
	    }

	    _createClass(TuiSymbol, {
	        toString: {

	            /**
	             *
	             * @returns {string}
	             */

	            value: function toString() {
	                return this.char;
	            }
	        }
	    });

	    return TuiSymbol;
	})();

	exports["default"] = TuiSymbol;
	var emptySymbol = new TuiSymbol(BACKGROUND_CHARACTER, {
	    color: "rgba(0, 0, 0, 0)",
	    backgroundColor: "rgba(0, 0, 0, 0)"
	});
	exports.emptySymbol = emptySymbol;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	exports.getNormalizedClientRectOf = getNormalizedClientRectOf;

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @param {ClientRect} boundingBox
	 * @returns {Array<Array<(TuiSymbol)>>}
	 * @private
	 */
	exports.shiftBox = shiftBox;

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} layerA
	 * @param {Array<Array<(TuiSymbol)>>} layerB
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	exports.mergeBoxes = mergeBoxes;

	/**
	 *
	 * @param {String} content
	 * @param {Object} style
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	exports.renderTextBox = renderTextBox;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tuiSymbol = __webpack_require__(5);

	var emptySymbol = _tuiSymbol.emptySymbol;
	var isTransparentColor = _tuiSymbol.isTransparentColor;

	var TuiSymbol = _interopRequire(_tuiSymbol);

	var BACKGROUND_CHARACTER = __webpack_require__(15).BACKGROUND_CHARACTER;

	function getNormalizedClientRectOf(boundingBox) {
	    return {
	        bottom: Math.round(boundingBox.bottom),
	        height: Math.round(boundingBox.height),
	        left: Math.round(boundingBox.left),
	        right: Math.round(boundingBox.right),
	        top: Math.round(boundingBox.top),
	        width: Math.round(boundingBox.width)
	    };
	}

	function shiftBox(box, boundingBox) {
	    var left = boundingBox.left;
	    var top = boundingBox.top;
	    var paddingLeft = new Array(left);
	    var paddingTop = new Array(0);

	    box.forEach(function shiftRow(row) {
	        row.unshift.apply(row, paddingLeft);
	    });

	    while (top > 0) {
	        box.unshift(paddingTop);
	        top--;
	    }

	    return box;
	}

	/**
	 *
	 * @param {TuiSymbol|undefined} symbolA
	 * @param {TuiSymbol|undefined} symbolB
	 * @returns {TuiSymbol}
	 */
	function mergeSymbols(symbolA, symbolB) {
	    /* jshint maxcomplexity: 7 */
	    if (typeof symbolA === "undefined" && typeof symbolB === "undefined") {
	        return emptySymbol;
	    }

	    if (typeof symbolA === "undefined") {
	        return symbolB;
	    }

	    if (typeof symbolB === "undefined") {
	        return symbolA;
	    }

	    var backgroundColor = isTransparentColor(symbolB.style.backgroundColor) ? symbolA.style.backgroundColor : symbolB.style.backgroundColor;

	    var color = symbolB.char === BACKGROUND_CHARACTER ? symbolA.style.color : symbolB.style.color;
	    var char = symbolB.char === BACKGROUND_CHARACTER ? symbolA.char : symbolB.char;

	    return new TuiSymbol(char, { color: color, backgroundColor: backgroundColor });
	}

	/**
	 *
	 * @param {Array<(TuiSymbol|undefined)>} rowA
	 * @param {Array<(TuiSymbol|undefined)>} rowB
	 * @returns {Array<(TuiSymbol)>}
	 */
	function mergeBoxRow(rowA, rowB) {
	    if (typeof rowA === "undefined" && typeof rowB === "undefined") {
	        return [];
	    }

	    if (typeof rowA === "undefined") {
	        return rowB;
	    }

	    if (typeof rowB === "undefined") {
	        return rowA;
	    }

	    var maxWidth = Math.max(rowA.length, rowB.length);
	    var row = new Array(maxWidth);
	    for (var x = 0; x < maxWidth; x++) {
	        row[x] = mergeSymbols(rowA[x], rowB[x]);
	    }

	    return row;
	}
	function mergeBoxes(layerA, layerB) {
	    var maxHeight = Math.max(layerA.length, layerB.length);
	    var box = new Array(maxHeight);

	    for (var y = 0; y < maxHeight; y++) {
	        box[y] = mergeBoxRow(layerA[y], layerB[y]);
	    }

	    return box;
	}

	function renderTextBox(content, style) {
	    var symbols = String(content).split("").map(function (symbol) {
	        return new TuiSymbol(symbol, style);
	    });

	    return [symbols];
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _utils = __webpack_require__(6);

	var getNormalizedClientRectOf = _utils.getNormalizedClientRectOf;
	var shiftBox = _utils.shiftBox;
	var renderTextBox = _utils.renderTextBox;

	var TuiText = (function () {
	    /**
	     *
	     * @param {Node} node
	     * @param {CssStyle} style
	     * @constructor
	     */

	    function TuiText(node, style) {
	        _classCallCheck(this, TuiText);

	        if (node.nodeType !== 3) {
	            throw new Error("Only text node is supported");
	        }

	        if (!node.ownerDocument) {
	            throw new Error("Can not serialize detached node");
	        }

	        var range = node.ownerDocument.createRange();
	        range.selectNodeContents(node);

	        /**
	         * @type {ClientRect}
	         */
	        this.boundingBox = getNormalizedClientRectOf(range.getBoundingClientRect());

	        this.content = node.textContent;

	        this.style = style;
	    }

	    _createClass(TuiText, {
	        _renderTextBox: {

	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             * @private
	             */

	            value: function _renderTextBox() {
	                var content = this.content.replace(/\s\s+/g, " ");

	                return renderTextBox(content, this.style);
	            }
	        },
	        toArray: {

	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */

	            value: function toArray() {
	                if (this.boundingBox.width === 0 || this.boundingBox.height === 0) {
	                    return [[]];
	                }

	                return shiftBox(this._renderTextBox(), this.boundingBox);
	            }
	        },
	        toString: {

	            /**
	             *
	             * @returns {string}
	             */

	            value: function toString() {
	                return this.toArray().map(function (row) {
	                    return row.join("");
	                }).join("\n");
	            }
	        }
	    });

	    return TuiText;
	})();

	module.exports = TuiText;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var getNormalizedClientRectOf = __webpack_require__(6).getNormalizedClientRectOf;

	var selectSerializerFor = __webpack_require__(4).selectSerializerFor;

	var TuiText = _interopRequire(__webpack_require__(7));

	var TuiElement = (function () {
	    /**
	     *
	     * @param {Node} node
	     * @constructor
	     */

	    function TuiElement(node) {
	        _classCallCheck(this, TuiElement);

	        /* jshint maxstatements: 15 */
	        if (node.nodeType !== 1) {
	            throw new Error("Only element node is supported");
	        }

	        if (!node.ownerDocument && !node.ownerDocument.defaultView) {
	            throw new Error("Can not serialize detached node");
	        }

	        /**
	         * @type {string}
	         */
	        this.tagName = node.tagName.toLowerCase();

	        /**
	         * @type {{name: string, value: string}[]}
	         */
	        this.attributes = Array.prototype.slice.call(node.attributes);

	        /**
	         * @type {object}
	         */
	        this.properties = this.getProperties(node);

	        /**
	         * @type {boolean}
	         */
	        this.isActiveEment = node.ownerDocument.activeElement === node;

	        /**
	         * @type {CssStyle}
	         */
	        this.style = this.getStyle(node);

	        /**
	         * @type {object}
	         */
	        this.scroll = this.getScroll(node);

	        /**
	         * @type {ClientRect}
	         */
	        this.boundingBox = getNormalizedClientRectOf(node.getBoundingClientRect());

	        /**
	         * @type {(TuiElement|TuiText)[]}
	         */
	        this.content = this.getContentOf(node);

	        // TODO currently serializer is bound to HTMLElement
	        /**
	         * @type {function}
	         */
	        this.serializeNode = selectSerializerFor(node);
	    }

	    _createClass(TuiElement, {
	        getContentOf: {

	            /**
	             * @param {Node} node
	             * @returns {(TuiElement|TuiText)[]}
	             */

	            value: function getContentOf(node) {
	                var nodes = node.childNodes;
	                var content = [];
	                for (var i = 0; i < nodes.length; i++) {
	                    var childNode = nodes[i];
	                    if (childNode.nodeType === 1) {
	                        content.push(new TuiElement(childNode));
	                    }
	                    if (childNode.nodeType === 3) {
	                        content.push(new TuiText(childNode, this.style));
	                    }
	                }

	                return content;
	            }
	        },
	        getProperties: {

	            /**
	             *
	             * @param node
	             */

	            value: function getProperties(node) {
	                return {
	                    value: node.value,
	                    checked: node.checked,
	                    selectionStart: node.selectionStart,
	                    selectionEnd: node.selectionEnd
	                };
	            }
	        },
	        getStyle: {
	            value: function getStyle(node) {
	                var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);

	                // Support only subset of CSS
	                return {
	                    color: computedStyle.color,
	                    backgroundColor: computedStyle.backgroundColor,

	                    borderLeftColor: computedStyle.borderLeftColor,
	                    borderRightColor: computedStyle.borderRightColor,
	                    borderTopColor: computedStyle.borderTopColor,
	                    borderBottomColor: computedStyle.borderBottomColor,

	                    borderLeftWidth: parseInt(computedStyle.borderLeftWidth),
	                    borderRightWidth: parseInt(computedStyle.borderRightWidth),
	                    borderTopWidth: parseInt(computedStyle.borderTopWidth),
	                    borderBottomWidth: parseInt(computedStyle.borderBottomWidth),

	                    paddingLeft: parseInt(computedStyle.paddingLeft),
	                    paddingRight: parseInt(computedStyle.paddingRight),
	                    paddingTop: parseInt(computedStyle.paddingTop),
	                    paddingBottom: parseInt(computedStyle.paddingBottom),

	                    overflow: computedStyle.overflow
	                };
	            }
	        },
	        getScroll: {
	            value: function getScroll(node) {
	                return {
	                    scrollHeight: node.scrollHeight,
	                    scrollWidth: node.scrollWidth,
	                    scrollLeft: node.scrollLeft,
	                    scrollTop: node.scrollTop
	                };
	            }
	        },
	        toArray: {

	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */

	            value: function toArray() {
	                return this.serializeNode.call(null, this);
	            }
	        },
	        toString: {

	            /**
	             *
	             * @returns {string}
	             */

	            value: function toString() {
	                return this.toArray().map(function (row) {
	                    return row.join("");
	                }).join("\n");
	            }
	        }
	    });

	    return TuiElement;
	})();

	module.exports = TuiElement;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string[]}
	 */
	exports.chrome = chrome;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string[]}
	 */
	function chromeSymbol(symbol) {
	    var char = "%c" + symbol.char;
	    var style = "";

	    if (symbol.style.color) {
	        style += "color:" + symbol.style.color + ";";
	    }

	    if (symbol.style.backgroundColor) {
	        style += "background-color:" + symbol.style.backgroundColor + ";";
	    }

	    return [char, style];
	}
	function chrome(box) {
	    var characters = [];
	    var styles = [];

	    box.forEach(function (row) {
	        var rowCharacters = "";
	        var rowStyles = [];

	        row.forEach(function (symbol) {
	            var _chromeSymbol = chromeSymbol(symbol);

	            var _chromeSymbol2 = _slicedToArray(_chromeSymbol, 2);

	            var character = _chromeSymbol2[0];
	            var style = _chromeSymbol2[1];

	            rowCharacters += character;
	            rowStyles.push(style);
	        });

	        characters.push(rowCharacters);
	        styles.push.apply(styles, rowStyles);
	    });

	    return [characters.join("\n")].concat(styles);
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
	"use strict";

	exports.html = html;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string[]}
	 */
	function htmlSymbol(symbol) {
	    var style = "";

	    if (symbol.style.color) {
	        style += "color:" + symbol.style.color + ";";
	    }

	    if (symbol.style.backgroundColor) {
	        style += "background-color:" + symbol.style.backgroundColor + ";";
	    }

	    return "<span style=\"" + style + "\">" + symbol.char + "</span>";
	}
	function html(box) {
	    return box.map(function (row) {
	        return row.map(htmlSymbol).join("");
	    }).join("\n");
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
	"use strict";

	exports.ascii = ascii;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string}
	 */
	function asciiSymbol(symbol) {
	  return symbol.char;
	}
	function ascii(box) {
	  return box.map(function (row) {
	    return row.map(asciiSymbol).join("");
	  }).join("\n");
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _utils = __webpack_require__(6);

	var mergeBoxes = _utils.mergeBoxes;
	var shiftBox = _utils.shiftBox;

	var TuiSymbol = _interopRequire(__webpack_require__(5));

	var BACKGROUND_CHARACTER = __webpack_require__(15).BACKGROUND_CHARACTER;

	/**
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	function fillBox(tuiElement) {
	    var width = tuiElement.boundingBox.width;
	    var height = tuiElement.boundingBox.height;

	    var background = new TuiSymbol(BACKGROUND_CHARACTER, {
	        color: tuiElement.style.color,
	        backgroundColor: tuiElement.style.backgroundColor
	    });

	    var box = new Array(height);
	    for (var y = 0; y < height; y++) {
	        box[y] = new Array(width);
	        for (var x = 0; x < width; x++) {
	            box[y][x] = background;
	        }
	    }

	    return box;
	}

	/**
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @param {TuiElement} tuiElement
	 */
	function fillLeftBorder(box, tuiElement) {
	    if (!tuiElement.style.borderLeftWidth) {
	        return;
	    }

	    var leftBorder = new TuiSymbol("|", {
	        color: tuiElement.style.borderLeftColor,
	        backgroundColor: tuiElement.style.backgroundColor
	    });

	    var height = tuiElement.boundingBox.height;

	    for (var y = 0; y < height; y++) {
	        box[y][0] = leftBorder;
	    }
	}

	/**
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @param {TuiElement} tuiElement
	 */
	function fillRightBorder(box, tuiElement) {
	    if (!tuiElement.style.borderRightWidth) {
	        return;
	    }

	    var rightBorder = new TuiSymbol("|", {
	        color: tuiElement.style.borderRightColor,
	        backgroundColor: tuiElement.style.backgroundColor
	    });

	    var height = tuiElement.boundingBox.height;
	    var width = tuiElement.boundingBox.width;

	    for (var y = 0; y < height; y++) {
	        box[y][width - 1] = rightBorder;
	    }
	}

	/**
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @param {TuiElement} tuiElement
	 */
	function fillTopBorder(box, tuiElement) {
	    if (!tuiElement.style.borderTopWidth) {
	        return;
	    }

	    var topBorder = new TuiSymbol("-", {
	        color: tuiElement.style.borderTopColor,
	        backgroundColor: tuiElement.style.backgroundColor
	    });

	    var height = tuiElement.boundingBox.height;
	    var width = tuiElement.boundingBox.width;

	    for (var x = 1; x < width - 1; x++) {
	        box[0][x] = topBorder;
	    }

	    // Top Left corner
	    if (box[0][0].char === "|") {
	        box[0][0] = new TuiSymbol("┌", {
	            color: tuiElement.style.borderTopColor,
	            backgroundColor: tuiElement.style.backgroundColor
	        });
	    }

	    // Top Right corner
	    if (box[0][width - 1].char === "|") {
	        box[0][width - 1] = new TuiSymbol("┐", {
	            color: tuiElement.style.borderTopColor,
	            backgroundColor: tuiElement.style.backgroundColor
	        });
	    }
	}

	/**
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @param {TuiElement} tuiElement
	 */
	function fillBottomBorder(box, tuiElement) {
	    if (!tuiElement.style.borderBottomWidth) {
	        return;
	    }

	    var topBorder = new TuiSymbol("-", {
	        color: tuiElement.style.borderBottomColor,
	        backgroundColor: tuiElement.style.backgroundColor
	    });

	    var height = tuiElement.boundingBox.height;
	    var width = tuiElement.boundingBox.width;

	    for (var x = 1; x < width - 1; x++) {
	        box[height - 1][x] = topBorder;
	    }

	    // Bottom Left corner
	    if (box[height - 1][0].char === "|") {
	        box[height - 1][0] = new TuiSymbol("└", {
	            color: tuiElement.style.borderTopColor,
	            backgroundColor: tuiElement.style.backgroundColor
	        });
	    }

	    // Bottom Right corner
	    if (box[height - 1][width - 1].char === "|") {
	        box[height - 1][width - 1] = new TuiSymbol("┘", {
	            color: tuiElement.style.borderTopColor,
	            backgroundColor: tuiElement.style.backgroundColor
	        });
	    }
	}

	/**
	 * @param {TuiElement} tuiElement
	 * @returns {boolean}
	 */
	function hasHorizontalScrollBars(tuiElement) {
	    var overflow = tuiElement.style.overflow;

	    if (overflow === "visible" || overflow === "hidden") {
	        return false;
	    }

	    return tuiElement.scroll.scrollWidth > tuiElement.boundingBox.width;
	}

	/**
	 * @param {TuiElement} tuiElement
	 * @returns {boolean}
	 */
	function hasVerticalScrollBars(tuiElement) {
	    var overflow = tuiElement.style.overflow;

	    if (overflow === "visible" || overflow === "hidden") {
	        return false;
	    }

	    return tuiElement.scroll.scrollHeight > tuiElement.boundingBox.height;
	}

	/**
	 * @param {Number} borderSize
	 * @returns {Number}
	 */
	function getTuiBorderSize(borderSize) {
	    if (borderSize > 0) {
	        return 1;
	    }

	    return 0;
	}

	/**
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @param {TuiElement} tuiElement
	 */
	function renderVerticalScrollBar(box, tuiElement) {
	    /* jshint maxstatements: 20, maxcomplexity: 7 */
	    if (!hasVerticalScrollBars(tuiElement)) {
	        return;
	    }

	    var borderRightWidth = getTuiBorderSize(tuiElement.style.borderRightWidth);
	    var borderBottomWidth = getTuiBorderSize(tuiElement.style.borderBottomWidth);
	    var borderTopWidth = getTuiBorderSize(tuiElement.style.borderTopWidth);
	    var height = tuiElement.boundingBox.height;
	    var availableScrollHeight = height - borderBottomWidth - borderTopWidth;
	    var scrollHeight = tuiElement.scroll.scrollHeight;
	    var scrollTop = tuiElement.scroll.scrollTop;

	    var trackHeight = Math.max(Math.floor(height / scrollHeight * availableScrollHeight), 1);
	    var trackTop = Math.floor(scrollTop / scrollHeight * availableScrollHeight);
	    var trackBottom = trackTop + trackHeight;

	    var scrollBarBackground = new TuiSymbol("¦", {
	        color: tuiElement.style.color,
	        backgroundColor: tuiElement.style.backgroundColor
	    });

	    var scrollBarTrack = new TuiSymbol("║", {
	        color: tuiElement.style.color,
	        backgroundColor: tuiElement.style.backgroundColor
	    });

	    // Fill and Track
	    for (var y = borderTopWidth; y < box.length - borderBottomWidth; y++) {
	        var row = box[y];
	        var scrollBarPosition = row.length - borderRightWidth - 1;
	        if (y >= trackTop && y <= trackBottom) {
	            row[scrollBarPosition] = scrollBarTrack;
	        } else {
	            row[scrollBarPosition] = scrollBarBackground;
	        }
	    }
	}

	/**
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @param {TuiElement} tuiElement
	 */
	function renderHorizontalScrollBar(box, tuiElement) {
	    if (!hasHorizontalScrollBars(tuiElement)) {
	        return;
	    }
	}

	/**
	 *
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 * @private
	 */
	function renderBox(tuiElement) {
	    var box = fillBox(tuiElement);
	    fillLeftBorder(box, tuiElement);
	    fillRightBorder(box, tuiElement);
	    fillTopBorder(box, tuiElement);
	    fillBottomBorder(box, tuiElement);
	    renderVerticalScrollBar(box, tuiElement);

	    return box;
	}

	/**
	 *
	 * @param {Number} bottom
	 * @param {Number} right
	 * @param {Number} top
	 * @param {Number} left
	 * @returns {Function}
	 */
	function cropBoxUsing(_ref) {
	    var bottom = _ref.bottom;
	    var right = _ref.right;
	    var top = _ref.top;
	    var left = _ref.left;

	    /**
	     * @param {Array<Array<(TuiSymbol)>>} box
	     * @return {Array<Array<(TuiSymbol)>>}
	     */
	    return function cropBox(box) {
	        if (bottom <= 0 || right <= 0) {
	            return [[]];
	        }
	        var croppedBox = new Array(bottom);

	        for (var y = top; y < box.length && y < bottom; y++) {
	            var row = box[y];
	            croppedBox[y] = new Array(right);

	            for (var x = left; x < row.length && x < right; x++) {
	                croppedBox[y][x] = row[x];
	            }
	        }

	        return croppedBox;
	    };
	}

	/**
	 * @param {TuiElement} tuiElement
	 * @returns {Function} crop function
	 */
	function cropBoxByTuiElement(tuiElement) {
	    if (tuiElement.style.overflow === "visible") {
	        return function (box) {
	            return box;
	        };
	    }

	    var bottom = tuiElement.boundingBox.bottom - getTuiBorderSize(tuiElement.style.borderBottomWidth);
	    var right = tuiElement.boundingBox.right - getTuiBorderSize(tuiElement.style.borderRightWidth);
	    var top = tuiElement.boundingBox.top + getTuiBorderSize(tuiElement.style.borderTopWidth);
	    var left = tuiElement.boundingBox.left + getTuiBorderSize(tuiElement.style.borderLeftWidth);

	    return cropBoxUsing({ bottom: bottom, right: right, top: top, left: left });
	}

	/**
	 *
	 * @returns {Array<Array<Array<(TuiSymbol)>>>}
	 * @private
	 */
	function renderContent(tuiElement) {
	    return tuiElement.content.map(function (item) {
	        return item.toArray();
	    }).map(cropBoxByTuiElement(tuiElement));
	}

	/**
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */

	module.exports = function (tuiElement) {
	    var box = renderBox(tuiElement);
	    box = shiftBox(box, tuiElement.boundingBox);
	    var content = renderContent(tuiElement);

	    return [box].concat(content).reduce(mergeBoxes, []);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _utils = __webpack_require__(6);

	var mergeBoxes = _utils.mergeBoxes;
	var shiftBox = _utils.shiftBox;
	var renderTextBox = _utils.renderTextBox;

	var defaultSerializer = _interopRequire(__webpack_require__(12));

	/**
	 * Max width of input text in viewport
	 *
	 * @param {object} style
	 * @param {ClientRect} boundingBox
	 * @returns {number}
	 */
	function getInputMaxContentWidth(_ref) {
	    var style = _ref.style;
	    var boundingBox = _ref.boundingBox;

	    var leftInputBorder = style.borderLeftWidth + style.paddingLeft;
	    var rightInputBorder = style.borderRightWidth + style.paddingRight;

	    return boundingBox.width - leftInputBorder - rightInputBorder;
	}

	/**
	 * Return bounding box of input's value
	 *
	 * @param {object} style
	 * @param {ClientRect}boundingBox
	 * @param {string} value
	 * @returns {ClientRect}
	 */
	function getInputTextBoundingBox(_ref) {
	    var style = _ref.style;
	    var boundingBox = _ref.boundingBox;
	    var value = _ref.properties.value;

	    var width = Number(value.length);
	    var height = 1;
	    var left = boundingBox.left;
	    var top = boundingBox.top;

	    left += style.borderLeftWidth;
	    left += style.paddingLeft;

	    top += style.borderTopWidth;
	    top += style.paddingTop;

	    return {
	        left: left,
	        top: top,
	        bottom: top + height,
	        right: left + width,
	        height: height,
	        width: width
	    };
	}

	/**
	 * Returns range which should fit into input
	 *
	 * @param {TuiElement} tuiElement
	 * @returns {{start: number, end: number}}
	 */
	function getVisibleTextRange(tuiElement) {
	    /* jshint maxstatements: 20 */
	    var _tuiElement$properties = tuiElement.properties;
	    var value = _tuiElement$properties.value;
	    var selectionEnd = _tuiElement$properties.selectionEnd;

	    var inputContentWidth = getInputMaxContentWidth(tuiElement);
	    var halfOfInputContentWidth = inputContentWidth / 2;
	    var start = Math.floor(selectionEnd - halfOfInputContentWidth) + 1;
	    var end = Math.ceil(selectionEnd + halfOfInputContentWidth) + 1;

	    // Cursor at the end of the box
	    if (value.length === selectionEnd && value.length + 1 > inputContentWidth) {
	        end -= 1;
	    }

	    if (start < 0) {
	        end -= start;
	        start = 0;
	    }

	    if (end > value.length) {
	        start -= end - value.length;
	        end = value.length;
	    }

	    if (start < 0) {
	        start = 0;
	    }

	    return {
	        start: start,
	        end: end
	    };
	}

	/**
	 *
	 * @param {object} style
	 * @param {string} value
	 * @param {number} selectionEnd
	 * @param {ClientRect} textBoundingBox
	 * @param {object} visibleTextRange
	 * @param {number} visibleTextRange.start
	 * @param {number} visibleTextRange.end
	 * @returns {Array<Array<TuiSymbol>>}
	 */
	function renderCursorBox(_ref, textBoundingBox, visibleTextRange) {
	    var style = _ref.style;
	    var _ref$properties = _ref.properties;
	    var value = _ref$properties.value;
	    var selectionEnd = _ref$properties.selectionEnd;

	    // Render cursor
	    var cursorWidth = 1;
	    var textAtCursor = value.substr(selectionEnd, cursorWidth);

	    // End of text
	    if (textAtCursor === "") {
	        textAtCursor = " ";
	    }

	    var cursorLeft = textBoundingBox.left + selectionEnd - visibleTextRange.start;
	    var cursorRight = cursorLeft + cursorWidth;

	    var cursorBoundingBox = {
	        left: cursorLeft,
	        top: textBoundingBox.top,
	        bottom: textBoundingBox.bottom,
	        right: cursorRight,
	        height: textBoundingBox.height,
	        width: cursorWidth
	    };

	    // Invert background and text color
	    var cursorBox = renderTextBox(textAtCursor, {
	        color: style.backgroundColor,
	        backgroundColor: style.color
	    });

	    return shiftBox(cursorBox, cursorBoundingBox);
	}

	/**
	 *
	 * @param {object} style
	 * @param {string} value
	 * @param {ClientRect} textBoundingBox
	 * @param {object} visibleTextRange
	 * @param {number} visibleTextRange.start
	 * @param {number} visibleTextRange.end
	 * @returns {Array<Array<TuiSymbol>>}
	 */
	function renderInputTextBox(_ref, textBoundingBox, visibleTextRange) {
	    var style = _ref.style;
	    var value = _ref.properties.value;

	    var textInViewport = value.slice(visibleTextRange.start, visibleTextRange.end);
	    var textBox = renderTextBox(textInViewport, style);

	    return shiftBox(textBox, textBoundingBox);
	}

	/**
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */

	module.exports = function (tuiElement) {
	    // Compute common measurements
	    var textBoundingBox = getInputTextBoundingBox(tuiElement);
	    var visibleTextRange = getVisibleTextRange(tuiElement);

	    // Render
	    var inputBox = defaultSerializer(tuiElement);
	    var textBox = renderInputTextBox(tuiElement, textBoundingBox, visibleTextRange);
	    var cursorBox = renderCursorBox(tuiElement, textBoundingBox, visibleTextRange);

	    inputBox = mergeBoxes(inputBox, textBox);
	    inputBox = mergeBoxes(inputBox, cursorBox);

	    return inputBox;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Calculates the specificity of CSS selectors
	 * http://www.w3.org/TR/css3-selectors/#specificity
	 *
	 * Returns an array of objects with the following properties:
	 *  - selector: the input
	 *  - specificity: e.g. 0,1,0,0
	 *  - parts: array with details about each part of the selector that counts towards the specificity
	 */
	var SPECIFICITY = (function() {
		var calculate,
			calculateSingle;

		calculate = function(input) {
			var selectors,
				selector,
				i,
				len,
				results = [];

			// Separate input by commas
			selectors = input.split(',');

			for (i = 0, len = selectors.length; i < len; i += 1) {
				selector = selectors[i];
				if (selector.length > 0) {
					results.push(calculateSingle(selector));
				}
			}

			return results;
		};

		// Calculate the specificity for a selector by dividing it into simple selectors and counting them
		calculateSingle = function(input) {
			var selector = input,
				findMatch,
				typeCount = {
					'a': 0,
					'b': 0,
					'c': 0
				},
				parts = [],
				// The following regular expressions assume that selectors matching the preceding regular expressions have been removed
				attributeRegex = /(\[[^\]]+\])/g,
				idRegex = /(#[^\s\+>~\.\[:]+)/g,
				classRegex = /(\.[^\s\+>~\.\[:]+)/g,
				pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
				// A regex for pseudo classes with brackets - :nth-child(), :nth-last-child(), :nth-of-type(), :nth-last-type(), :lang()
				pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi,
				// A regex for other pseudo classes, which don't have brackets
				pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g,
				elementRegex = /([^\s\+>~\.\[:]+)/g;

			// Find matches for a regular expression in a string and push their details to parts
			// Type is "a" for IDs, "b" for classes, attributes and pseudo-classes and "c" for elements and pseudo-elements
			findMatch = function(regex, type) {
				var matches, i, len, match, index, length;
				if (regex.test(selector)) {
					matches = selector.match(regex);
					for (i = 0, len = matches.length; i < len; i += 1) {
						typeCount[type] += 1;
						match = matches[i];
						index = selector.indexOf(match);
						length = match.length;
						parts.push({
							selector: match,
							type: type,
							index: index,
							length: length
						});
						// Replace this simple selector with whitespace so it won't be counted in further simple selectors
						selector = selector.replace(match, Array(length + 1).join(' '));
					}
				}
			};

			// Remove the negation psuedo-class (:not) but leave its argument because specificity is calculated on its argument
			(function() {
				var regex = /:not\(([^\)]*)\)/g;
				if (regex.test(selector)) {
					selector = selector.replace(regex, '     $1 ');
				}
			}());

			// Remove anything after a left brace in case a user has pasted in a rule, not just a selector
			(function() {
				var regex = /{[^]*/gm,
					matches, i, len, match;
				if (regex.test(selector)) {
					matches = selector.match(regex);
					for (i = 0, len = matches.length; i < len; i += 1) {
						match = matches[i];
						selector = selector.replace(match, Array(match.length + 1).join(' '));
					}
				}
			}());

			// Add attribute selectors to parts collection (type b)
			findMatch(attributeRegex, 'b');

			// Add ID selectors to parts collection (type a)
			findMatch(idRegex, 'a');

			// Add class selectors to parts collection (type b)
			findMatch(classRegex, 'b');

			// Add pseudo-element selectors to parts collection (type c)
			findMatch(pseudoElementRegex, 'c');

			// Add pseudo-class selectors to parts collection (type b)
			findMatch(pseudoClassWithBracketsRegex, 'b');
			findMatch(pseudoClassRegex, 'b');

			// Remove universal selector and separator characters
			selector = selector.replace(/[\*\s\+>~]/g, ' ');

			// Remove any stray dots or hashes which aren't attached to words
			// These may be present if the user is live-editing this selector
			selector = selector.replace(/[#\.]/g, ' ');

			// The only things left should be element selectors (type c)
			findMatch(elementRegex, 'c');

			// Order the parts in the order they appear in the original selector
			// This is neater for external apps to deal with
			parts.sort(function(a, b) {
				return a.index - b.index;
			});

			return {
				selector: input,
				specificity: '0,' + typeCount.a.toString() + ',' + typeCount.b.toString() + ',' + typeCount.c.toString(),
				parts: parts
			};
		};

		return {
			calculate: calculate
		};
	}());

	// Export for Node JS
	if (true) {
		exports.calculate = SPECIFICITY.calculate;
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BACKGROUND_CHARACTER = " ";
	exports.BACKGROUND_CHARACTER = BACKGROUND_CHARACTER;

/***/ }
/******/ ]);