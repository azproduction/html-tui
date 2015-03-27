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
	exports.TuiElement = _interopRequire(__webpack_require__(1));
	exports.render = _interopRequire(__webpack_require__(3));
	exports.compressBox = _interopRequire(__webpack_require__(2));
	exports.addSerializer = __webpack_require__(4).addSerializer;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var getNormalizedClientRectOf = __webpack_require__(5).getNormalizedClientRectOf;

	var selectSerializerFor = __webpack_require__(4).selectSerializerFor;

	var TuiText = _interopRequire(__webpack_require__(6));

	var TuiElement = (function () {
	  /**
	   *
	   * @param {Node} node
	   * @constructor
	   */

	  function TuiElement(node) {
	    _classCallCheck(this, TuiElement);

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
	     * @type {CssStyle}
	     */
	    this.style = node.ownerDocument.defaultView.getComputedStyle(node);

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
	        var _this = this;

	        return Array.prototype.slice.call(node.childNodes).reduce(function (content, node) {
	          if (node.nodeType === 1) {
	            content.push(new TuiElement(node));
	          }
	          if (node.nodeType === 3) {
	            content.push(new TuiText(node, _this.style));
	          }
	          return content;
	        }, []);
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

	var _tuiSymbol = __webpack_require__(7);

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

	var ansi = __webpack_require__(8).ansi;

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

	    // the last serializer is the most specific
	    return matchedSerializers[matchedSerializers.length - 1].serializer;
	}

	function addSerializer(selector, serializer) {
	    if (typeof selector !== "string") {
	        throw new TypeError("`selector` should be a string");
	    }

	    if (typeof serializer !== "function") {
	        throw new TypeError("`serializer` should be a function");
	    }

	    var specificity = calculateSpecificity(selector).specificity;

	    serializers.push({ selector: selector, serializer: serializer, specificity: specificity });
	    serializers.sort(sortBySpecificity);
	}

	// Matches on all TuiElements
	addSerializer("*", defaultSerializer);

/***/ },
/* 5 */
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
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tuiSymbol = __webpack_require__(7);

	var emptySymbol = _tuiSymbol.emptySymbol;
	var isTransparentColor = _tuiSymbol.isTransparentColor;

	var TuiSymbol = _interopRequire(_tuiSymbol);

	var BACKGROUND_CHARACTER = __webpack_require__(13).BACKGROUND_CHARACTER;

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

	/**
	 * @param {number} length
	 * @param {*} content
	 * @returns {Array}
	 */
	function fillArray(length, content) {
	    var array = new Array(length);

	    for (var i = 0; i < array.length; i++) {
	        array[i] = content;
	    }

	    return array;
	}
	function shiftBox(box, boundingBox) {
	    var width = boundingBox.width;
	    var left = boundingBox.left;
	    var top = boundingBox.top;
	    var paddingLeft = fillArray(left, emptySymbol);
	    var paddingTop = fillArray(left + width, emptySymbol);

	    box.forEach(function (row) {
	        row.unshift.apply(row, paddingLeft);
	    });

	    for (; top--;) {
	        box.unshift(paddingTop);
	    }

	    return box;
	}

	/**
	 *
	 * @param {(TuiSymbol)} symbolA
	 * @param {(TuiSymbol)} symbolB
	 * @returns {(TuiSymbol)}
	 */
	function mergeSymbols(symbolA, symbolB) {
	    var backgroundColor = isTransparentColor(symbolB.style.backgroundColor) ? symbolA.style.backgroundColor : symbolB.style.backgroundColor;

	    var color = symbolB.char === BACKGROUND_CHARACTER ? symbolA.style.color : symbolB.style.color;
	    var char = symbolB.char === BACKGROUND_CHARACTER ? symbolA.char : symbolB.char;

	    return new TuiSymbol(char, { color: color, backgroundColor: backgroundColor });
	}

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} layerA
	 * @param {Array<Array<(TuiSymbol)>>} layerB
	 * @returns {{maxWidth: number, maxHeight: number}}
	 */
	function getMaxDimensions(layerA, layerB) {
	    var maxWidth = Math.max(layerA[0] && layerA[0].length || 0, layerB[0] && layerB[0].length || 0);
	    var maxHeight = Math.max(layerA.length, layerB.length);

	    return { maxWidth: maxWidth, maxHeight: maxHeight };
	}
	function mergeBoxes(layerA, layerB) {
	    var box = [];

	    var _getMaxDimensions = getMaxDimensions(layerA, layerB);

	    var maxWidth = _getMaxDimensions.maxWidth;
	    var maxHeight = _getMaxDimensions.maxHeight;

	    for (var y = 0; y < maxHeight; y++) {
	        box.push([]);
	        for (var x = 0; x < maxWidth; x++) {
	            box[y][x] = mergeSymbols(layerA[y] && layerA[y][x] || emptySymbol, layerB[y] && layerB[y][x] || emptySymbol);
	        }
	    }

	    return box;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _utils = __webpack_require__(5);

	var getNormalizedClientRectOf = _utils.getNormalizedClientRectOf;
	var shiftBox = _utils.shiftBox;

	var TuiSymbol = _interopRequire(__webpack_require__(7));

	var TuiText = (function () {
	    /**
	     *
	     * @param {Node} node
	     * @param {CssStyle} [style=null]
	     * @constructor
	     */

	    function TuiText(node) {
	        var style = arguments[1] === undefined ? null : arguments[1];

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

	        this.style = style || node.parentNode.ownerDocument.defaultView.getComputedStyle(node.parentNode);
	    }

	    _createClass(TuiText, {
	        _renderTextBox: {

	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             * @private
	             */

	            value: function _renderTextBox() {
	                var _this = this;

	                var content = this.content.replace(/\s\s+/g, " ");

	                var symbols = content.split("").map(function (symbol) {
	                    return new TuiSymbol(symbol, {
	                        color: _this.style.color,
	                        backgroundColor: _this.style.backgroundColor
	                    });
	                });

	                return [symbols];
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
/* 7 */
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

	var BACKGROUND_CHARACTER = __webpack_require__(13).BACKGROUND_CHARACTER;

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
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

	"use strict";

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
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

	"use strict";

	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
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

	/**
	 *
	 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
	 * @param {object} scheme
	 * @returns {string}
	 * @private
	 */
	exports.lookupCharacter = lookupCharacter;

	/**
	 *
	 * @param {{x: string, y: string}} options
	 * @param {CssStyle} style
	 * @returns {{color: string, backgroundColor: string}}
	 * @private
	 */
	exports.lookupCharacterStyle = lookupCharacterStyle;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(5);

	var mergeBoxes = _utils.mergeBoxes;
	var shiftBox = _utils.shiftBox;

	var borderScheme = __webpack_require__(15).borderScheme;

	var TuiSymbol = _interopRequire(__webpack_require__(7));

	function lookupCharacter(_x, _x2) {
	    var _again = true;

	    _function: while (_again) {
	        _again = false;
	        var options = _x,
	            scheme = _x2;
	        propertyName = value = undefined;

	        var propertyName = Object.keys(scheme)[0];
	        var value = scheme[propertyName];

	        if (typeof value !== "object") {
	            return value;
	        }

	        value = value[options[propertyName]];

	        if (typeof value !== "object") {
	            return value;
	        }

	        _x = options;
	        _x2 = value;
	        _again = true;
	        continue _function;
	    }
	}

	function lookupCharacterStyle(options, style) {
	    var color = style.color;
	    var backgroundColor = style.backgroundColor;

	    if (options.x === "min") {
	        color = style.borderLeftColor;
	    }

	    if (options.x === "max") {
	        color = style.borderRightColor;
	    }

	    if (options.y === "min" && options.x === "mid") {
	        color = style.borderTopColor;
	    }

	    if (options.y === "max" && options.x === "mid") {
	        color = style.borderBottomColor;
	    }

	    return { color: color, backgroundColor: backgroundColor };
	}

	/**
	 *
	 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
	 * @param {CssStyle} elementStyle
	 * @returns {TuiSymbol}
	 */
	function fromPositionAndStyle(options, elementStyle) {
	    var char = lookupCharacter(options, borderScheme);
	    var characterStyle = lookupCharacterStyle(options, elementStyle);

	    return new TuiSymbol(char, characterStyle);
	}

	/**
	 *
	 * @param {TuiElement} tuiElement
	 * @param {number} x
	 * @param {number} y
	 * @returns {TuiSymbol}
	 * @private
	 */
	function boxCharacterAt(tuiElement, x, y) {
	    /* jshint maxcomplexity: 10 */
	    var width = tuiElement.boundingBox.width;
	    var height = tuiElement.boundingBox.height;

	    var position = {
	        x: x === 0 ? "min" : x === width - 1 ? "max" : "mid",
	        y: y === 0 ? "min" : y === height - 1 ? "max" : "mid",
	        top: parseInt(tuiElement.style.borderTopWidth) ? "yes" : "no",
	        right: parseInt(tuiElement.style.borderRightWidth) ? "yes" : "no",
	        bottom: parseInt(tuiElement.style.borderBottomWidth) ? "yes" : "no",
	        left: parseInt(tuiElement.style.borderLeftWidth) ? "yes" : "no"
	    };

	    return fromPositionAndStyle(position, tuiElement.style);
	}

	/**
	 *
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 * @private
	 */
	function renderBox(tuiElement) {
	    var box = [];
	    for (var y = 0; y < tuiElement.boundingBox.height; y++) {
	        box.push([]);
	        for (var x = 0; x < tuiElement.boundingBox.width; x++) {
	            box[y][x] = boxCharacterAt(tuiElement, x, y);
	        }
	    }

	    return box;
	}

	/**
	 *
	 * @returns {Array<Array<Array<(TuiSymbol)>>>}
	 * @private
	 */
	function renderContent(tuiElement) {
	    return tuiElement.content.map(function (item) {
	        return item.toArray();
	    });
	}

	/**
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */

	exports["default"] = function (tuiElement) {
	    var box = shiftBox(renderBox(tuiElement), tuiElement.boundingBox);
	    var content = renderContent(tuiElement);

	    return [box].concat(content).reduce(mergeBoxes, []);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BACKGROUND_CHARACTER = " ";
	exports.BACKGROUND_CHARACTER = BACKGROUND_CHARACTER;

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

	var BACKGROUND_CHARACTER = __webpack_require__(13).BACKGROUND_CHARACTER;

	var borderScheme = {
	    x: {
	        min: {
	            y: {
	                min: {
	                    // x─┐
	                    // │ │
	                    // └─┘
	                    left: {
	                        no: {
	                            top: {
	                                no: BACKGROUND_CHARACTER,
	                                yes: "─"
	                            }
	                        },
	                        yes: {
	                            top: {
	                                no: "│",
	                                yes: "┌"
	                            }
	                        }
	                    }
	                },
	                max: {
	                    // ┌─┐
	                    // │ │
	                    // x─┘
	                    left: {
	                        no: {
	                            bottom: {
	                                no: BACKGROUND_CHARACTER,
	                                yes: "─"
	                            }
	                        },
	                        yes: {
	                            bottom: {
	                                no: "│",
	                                yes: "└"
	                            }
	                        }
	                    }
	                },
	                mid: {
	                    // ┌─┐
	                    // x │
	                    // └─┘
	                    left: {
	                        no: BACKGROUND_CHARACTER,
	                        yes: "│"
	                    }
	                }
	            }
	        },
	        mid: {
	            y: {
	                min: {
	                    // ┌x┐
	                    // │ │
	                    // └─┘
	                    top: {
	                        no: BACKGROUND_CHARACTER,
	                        yes: "─"
	                    }
	                },
	                // ┌─┐
	                // │x│
	                // └─┘
	                mid: BACKGROUND_CHARACTER,
	                max: {
	                    // ┌─┐
	                    // │ │
	                    // └x┘
	                    bottom: {
	                        no: BACKGROUND_CHARACTER,
	                        yes: "─"
	                    }
	                }
	            }
	        },
	        max: {
	            y: {
	                min: {
	                    // ┌─x
	                    // │ │
	                    // └─┘
	                    right: {
	                        no: {
	                            top: {
	                                no: BACKGROUND_CHARACTER,
	                                yes: "─"
	                            }
	                        },
	                        yes: {
	                            top: {
	                                no: "│",
	                                yes: "┐"
	                            }
	                        }
	                    }
	                },
	                mid: {
	                    // ┌─┐
	                    // │ x
	                    // └─┘
	                    right: {
	                        no: BACKGROUND_CHARACTER,
	                        yes: "│"
	                    }
	                },
	                max: {
	                    // ┌─┐
	                    // │ │
	                    // └─x
	                    right: {
	                        no: {
	                            bottom: {
	                                no: BACKGROUND_CHARACTER,
	                                yes: "─"
	                            }
	                        },
	                        yes: {
	                            bottom: {
	                                no: "|",
	                                yes: "┘"
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	};
	exports.borderScheme = borderScheme;

/***/ }
/******/ ]);