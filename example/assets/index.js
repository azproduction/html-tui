/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(/*! ./index.css */ 2);
	
	var TuiElement = __webpack_require__(/*! .. */ 1).TuiElement;
	
	requestAnimationFrame(function () {
	    var element = new TuiElement(document.querySelector(".tui-dom"));
	
	    document.querySelector(".tui-cli").innerHTML = element.toString("html");
	    if (/PhantomJS/.test(window.navigator.userAgent)) {
	        console.log(element.toString("ansi"));
	    } else {
	        console.log.apply(console, element.toString("chrome"));
	    }
	});

/***/ },
/* 1 */
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.TuiElement = __webpack_require__(/*! ./lib/tui-element */ 5);
	exports.addRenderer = __webpack_require__(/*! ./lib/renders */ 6).addRenderer;

/***/ },
/* 2 */
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../~/css-loader!./index.css */ 3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../~/style-loader/addStyles.js */ 4)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/azproduction/Projects/html-tui/node_modules/css-loader/index.js!/Users/azproduction/Projects/html-tui/example/index.css", function() {
			var newContent = require("!!/Users/azproduction/Projects/html-tui/node_modules/css-loader/index.js!/Users/azproduction/Projects/html-tui/example/index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/*!***********************************!*\
  !*** ../~/css-loader!./index.css ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../~/css-loader/cssToString.js */ 7)();
	__webpack_require__(/*! ../~/css-loader/mergeImport.js */ 8)(exports, __webpack_require__(/*! -!../~/css-loader!../index.css */ 9), "");
	exports.push([module.id, "\n\n.mc {\n    width: 100%;\n    height: 100%;\n    background: #000;\n}\n\n.menu {\n    margin: 0;\n    background: #0ff;\n    color: #000;\n}\n\n.menu__item {\n    display: inline-block;\n    margin-left: 1px;\n    margin-right: 1px;\n    color: black;\n    height: 1px;\n}\n\n.menu__item-shortcut {\n    color: #ff0;\n}\n\n.content {\n    padding-bottom: 3px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    background: #000;\n}\n\n.panel {\n    width: 50%;\n    border: solid 1px #fff;\n    background: #00f;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    float: left;\n    height: 100%;\n    margin-bottom: -3px;\n}\n\n.panel__caption {\n    display: inline-block;\n\n    position: absolute;\n\n    margin-top: -1px;\n    color: #000;\n    background: #fff;\n}\n\n.file-list {\n    height: 100%;\n}\n\n.file,\n.header {\n    overflow: hidden;\n    height: 1px;\n    color: white;\n}\n\n.file_state_focused {\n    background: #0ff;\n    color: #000;\n}\n\n.file_state_focused .file__name,\n.file_state_focused .file__size {\n    border-right-color: black;\n}\n\n.file__name,\n.file__size,\n.file__time,\n.header__name,\n.header__time,\n.header__size {\n    float: left;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.file__name,\n.header__name {\n    width: 50%;\n    border-right: solid 1px #fff;\n}\n\n.file__size,\n.header__size {\n    width: 20%;\n    border-right: solid 1px #fff;\n}\n\n.file__size {\n    text-align: right;\n}\n\n.file__time,\n.header__time{\n    width: 30%;\n    text-align: right;\n}\n\n.file__name_type_file {\n    color: #fff;\n    padding-left: 1px;\n}\n\n.file_state_focused .file__name_type_file {\n    color: white;\n}\n\n.header__name,\n.header__time,\n.header__size {\n    color: yellow;\n    text-align: center;\n}\n\n.console {\n    margin-top: -3px;\n    height: 3px;\n    overflow: hidden;\n    color: grey;\n    background: #000;\n}\n\n.controls {\n    margin-top: -1px;\n    height: 1px;\n}\n\n.control {\n    float: left;\n    height: 1px;\n}\n\n.control__number,\n.control__name {\n    float: left;\n}\n\n.control__number {\n    margin-left: 1px;\n    color: #fff;\n}\n\n.control__name {\n    width: 6px;\n    background: #0ff;\n    color: #000;\n}\n", ""]);

/***/ },
/* 4 */
/*!**************************************!*\
  !*** ../~/style-loader/addStyles.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 5 */
/*!*****************************!*\
  !*** ../lib/tui-element.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 18)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 19)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 17)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 20)["default"];
	
	var _utils = __webpack_require__(/*! ./utils */ 10);
	
	var getNormalizedClientRectOf = _utils.getNormalizedClientRectOf;
	var mergeBoxes = _utils.mergeBoxes;
	var shiftBox = _utils.shiftBox;
	var compressBox = _utils.compressBox;
	
	var TuiText = _interopRequire(__webpack_require__(/*! ./tui-text */ 11));
	
	var fromPositionAndStyle = __webpack_require__(/*! ./tui-symbol */ 12).fromPositionAndStyle;
	
	var boxRenderFactory = __webpack_require__(/*! ./renders */ 6).boxRenderFactory;
	
	var TuiElement = (function () {
	    /**
	     *
	     * @param {Node} node
	     * @constructor
	     */
	
	    function TuiElement(node) {
	        var _this = this;
	
	        _classCallCheck(this, TuiElement);
	
	        if (node.nodeType !== 1) {
	            throw new Error("Only element node is supported");
	        }
	
	        if (!node.ownerDocument && !node.ownerDocument.defaultView) {
	            throw new Error("Can not serialize detached node");
	        }
	
	        /**
	         * @type {CssStyle}
	         */
	        this.style = node.ownerDocument.defaultView.getComputedStyle(node);
	
	        /**
	         * @type {ClientRect}
	         */
	        this.boundingBox = getNormalizedClientRectOf(node.getBoundingClientRect());
	
	        /**
	         * @type {TuiElement[]}
	         */
	        this.content = _core.Array.from(node.childNodes).reduce(function (content, node) {
	            if (node.nodeType === 1) {
	                content.push(new TuiElement(node));
	            }
	            if (node.nodeType === 3) {
	                content.push(new TuiText(node, _this.style));
	            }
	            return content;
	        }, []);
	    }
	
	    _createClass(TuiElement, {
	        _boxCharacterAt: {
	
	            /**
	             *
	             * @param {number} x
	             * @param {number} y
	             * @returns {TuiSymbol}
	             * @private
	             */
	
	            value: function _boxCharacterAt(x, y) {
	                /* jshint maxcomplexity: 10 */
	                var width = this.boundingBox.width;
	                var height = this.boundingBox.height;
	
	                var position = {
	                    x: x === 0 ? "min" : x === width - 1 ? "max" : "mid",
	                    y: y === 0 ? "min" : y === height - 1 ? "max" : "mid",
	                    top: parseInt(this.style.borderTopWidth) ? "yes" : "no",
	                    right: parseInt(this.style.borderRightWidth) ? "yes" : "no",
	                    bottom: parseInt(this.style.borderBottomWidth) ? "yes" : "no",
	                    left: parseInt(this.style.borderLeftWidth) ? "yes" : "no"
	                };
	
	                return fromPositionAndStyle(position, this.style);
	            }
	        },
	        _renderBox: {
	
	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             * @private
	             */
	
	            value: function _renderBox() {
	                var box = [];
	                for (var y = 0; y < this.boundingBox.height; y++) {
	                    box.push([]);
	                    for (var x = 0; x < this.boundingBox.width; x++) {
	                        box[y][x] = this._boxCharacterAt(x, y);
	                    }
	                }
	
	                return box;
	            }
	        },
	        _renderContent: {
	
	            /**
	             *
	             * @returns {Array<Array<Array<(TuiSymbol)>>>}
	             * @private
	             */
	
	            value: function _renderContent() {
	                return this.content.map(function (item) {
	                    return item.toArray();
	                });
	            }
	        },
	        toArray: {
	
	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function toArray() {
	                var box = shiftBox(this._renderBox(), this.boundingBox);
	                var content = this._renderContent();
	
	                return [box].concat(content).reduce(mergeBoxes, []);
	            }
	        },
	        toOptimizedArray: {
	
	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function toOptimizedArray() {
	                return compressBox(this.toArray());
	            }
	        },
	        toString: {
	
	            /**
	             *
	             * @returns {string|*}
	             */
	
	            value: function toString() {
	                var type = arguments[0] === undefined ? "default" : arguments[0];
	
	                return boxRenderFactory(type)(this.toOptimizedArray());
	            }
	        }
	    });
	
	    return TuiElement;
	})();
	
	module.exports = TuiElement;

/***/ },
/* 6 */
/*!*******************************!*\
  !*** ../lib/renders/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 *
	 * @param {string} type
	 * @returns {function}
	 */
	exports.boxRenderFactory = boxRenderFactory;
	
	/**
	 *
	 * @param {string} type
	 * @returns {function}
	 */
	exports.symbolRenderFactory = symbolRenderFactory;
	
	/**
	 *
	 * @param {string} type
	 * @param {function} box
	 * @param {function} symbol
	 */
	exports.addRenderer = addRenderer;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var boxRenders = {};
	var symbolRenders = {};
	function boxRenderFactory(type) {
	    if (!boxRenders.hasOwnProperty(type)) {
	        throw new Error("No such box render `" + type + "`");
	    }
	
	    return boxRenders[type];
	}
	
	function symbolRenderFactory(type) {
	    if (!symbolRenders.hasOwnProperty(type)) {
	        throw new Error("No such symbol render `" + type + "`");
	    }
	
	    return symbolRenders[type];
	}
	
	function addRenderer(type, _ref) {
	    var box = _ref.box;
	    var symbol = _ref.symbol;
	
	    boxRenders[type] = box;
	    symbolRenders[type] = symbol;
	}
	
	addRenderer("default", __webpack_require__(/*! ./default */ 13));
	addRenderer("chrome", __webpack_require__(/*! ./chrome */ 14));
	addRenderer("ansi", __webpack_require__(/*! ./ansi */ 15));
	addRenderer("html", __webpack_require__(/*! ./html */ 16));

/***/ },
/* 7 */
/*!**************************************!*\
  !*** ../~/css-loader/cssToString.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 8 */
/*!**************************************!*\
  !*** ../~/css-loader/mergeImport.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(list, importedList, media) {
		for(var i = 0; i < importedList.length; i++) {
			var item = importedList[i];
			if(media && !item[2])
				item[2] = media;
			else if(media) {
				item[2] = "(" + item[2] + ") and (" + media + ")";
			}
			list.push(item);
		}
	};

/***/ },
/* 9 */
/*!************************************!*\
  !*** ../~/css-loader!../index.css ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../~/css-loader/cssToString.js */ 7)();
	exports.push([module.id, ".tui-dom {\n    font-family: 'Courier New', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    font-size: 1px;\n    line-height: 1px;\n    letter-spacing: 0.4px;\n    z-index: 2;\n    visibility: hidden;\n}\n\n.tui-dom * {\n    padding: 0;\n    margin: 0;\n    line-height: inherit;\n    font-size: inherit;\n    letter-spacing: inherit;\n    font-family: inherit;\n}\n\n.tui-cli {\n    font-family: 'Courier New', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    font-size: 13px;\n    line-height: 13px;\n    display: inline-block;\n    margin: 0;\n}\n", ""]);

/***/ },
/* 10 */
/*!***********************!*\
  !*** ../lib/utils.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = __webpack_require__(/*! babel-runtime/helpers/sliced-to-array */ 21)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 17)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 20)["default"];
	
	exports.getNormalizedClientRectOf = getNormalizedClientRectOf;
	
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
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	exports.compressBox = compressBox;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var backgroundCharacter = __webpack_require__(/*! ./border-scheme */ 22).backgroundCharacter;
	
	var _tuiSymbolJs = __webpack_require__(/*! ./tui-symbol.js */ 12);
	
	var TuiSymbol = _interopRequire(_tuiSymbolJs);
	
	var emptySymbol = _tuiSymbolJs.emptySymbol;
	
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
	
	function isTransparentColor(color) {
	    return color === "rgba(0, 0, 0, 0)" || color === "transparent";
	}
	
	function isTransparentCharacter(char, style) {
	    return char === backgroundCharacter && isTransparentColor(style.backgroundColor);
	}
	
	function lookupCharacter(_x, _x2) {
	    var _again = true;
	
	    _function: while (_again) {
	        _again = false;
	        var options = _x,
	            scheme = _x2;
	        propertyName = value = undefined;
	
	        var propertyName = _core.Object.keys(scheme)[0];
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
	
	    var color = symbolB.char === backgroundCharacter ? symbolA.style.color : symbolB.style.color;
	    var char = symbolB.char === backgroundCharacter ? symbolA.char : symbolB.char;
	
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
	
	/**
	 *
	 * @param {(TuiSymbol)} symbolA
	 * @param {(TuiSymbol)} symbolB
	 */
	function isSameStyleSymbol(symbolA, symbolB) {
	    return symbolA.style.color === symbolB.style.color && symbolA.style.backgroundColor === symbolB.style.backgroundColor;
	}
	
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
/* 11 */
/*!**************************!*\
  !*** ../lib/tui-text.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 18)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 19)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 20)["default"];
	
	var _utils = __webpack_require__(/*! ./utils */ 10);
	
	var getNormalizedClientRectOf = _utils.getNormalizedClientRectOf;
	var shiftBox = _utils.shiftBox;
	
	var TuiSymbol = _interopRequire(__webpack_require__(/*! ./tui-symbol */ 12));
	
	var boxRenderFactory = __webpack_require__(/*! ./renders */ 6).boxRenderFactory;
	
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
	             * @returns {string|*}
	             */
	
	            value: function toString() {
	                var type = arguments[0] === undefined ? "default" : arguments[0];
	
	                return boxRenderFactory(type)(this.toArray());
	            }
	        }
	    });
	
	    return TuiText;
	})();
	
	module.exports = TuiText;

/***/ },
/* 12 */
/*!****************************!*\
  !*** ../lib/tui-symbol.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 18)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 19)["default"];
	
	/**
	 *
	 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
	 * @param {CssStyle} elementStyle
	 * @returns {TuiSymbol}
	 */
	exports.fromPositionAndStyle = fromPositionAndStyle;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _borderScheme = __webpack_require__(/*! ./border-scheme */ 22);
	
	var borderScheme = _borderScheme.borderScheme;
	var backgroundCharacter = _borderScheme.backgroundCharacter;
	
	var _utils = __webpack_require__(/*! ./utils */ 10);
	
	var isTransparentCharacter = _utils.isTransparentCharacter;
	var lookupCharacter = _utils.lookupCharacter;
	var lookupCharacterStyle = _utils.lookupCharacterStyle;
	
	var symbolRenderFactory = __webpack_require__(/*! ./renders */ 6).symbolRenderFactory;
	
	var TuiSymbol = (function () {
	    /**
	     *
	     * @param {string} char
	     * @param {{color: string, backgroundColor: string}} style
	     */
	
	    function TuiSymbol(char, style) {
	        _classCallCheck(this, TuiSymbol);
	
	        if (isTransparentCharacter(char, style)) {
	            char = backgroundCharacter;
	        }
	
	        this.char = char;
	        this.style = style;
	    }
	
	    _createClass(TuiSymbol, {
	        toString: {
	
	            /**
	             *
	             * @returns {string|*}
	             */
	
	            value: function toString() {
	                var type = arguments[0] === undefined ? "default" : arguments[0];
	
	                return symbolRenderFactory(type)(this);
	            }
	        }
	    });
	
	    return TuiSymbol;
	})();
	
	exports["default"] = TuiSymbol;
	var emptySymbol = new TuiSymbol(backgroundCharacter, {
	    color: "rgba(0, 0, 0, 0)",
	    backgroundColor: "rgba(0, 0, 0, 0)"
	});exports.emptySymbol = emptySymbol;
	
	function fromPositionAndStyle(options, elementStyle) {
	    var char = lookupCharacter(options, borderScheme);
	    var characterStyle = lookupCharacterStyle(options, elementStyle);
	
	    return new TuiSymbol(char, characterStyle);
	}

/***/ },
/* 13 */
/*!*********************************!*\
  !*** ../lib/renders/default.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	    /**
	     *
	     * @param {Array<Array<(TuiSymbol)>>} box
	     * @returns {string}
	     */
	    box: (function (_box) {
	        var _boxWrapper = function box(_x) {
	            return _box.apply(this, arguments);
	        };
	
	        _boxWrapper.toString = function () {
	            return _box.toString();
	        };
	
	        return _boxWrapper;
	    })(function (box) {
	        return box.map(function (row) {
	            return row.map(function (symbol) {
	                return symbol.toString("html");
	            }).join("");
	        }).join("\n");
	    }),
	
	    /**
	     *
	     * @param {TuiSymbol} symbol
	     * @returns {string}
	     */
	    symbol: (function (_symbol) {
	        var _symbolWrapper = function symbol(_x) {
	            return _symbol.apply(this, arguments);
	        };
	
	        _symbolWrapper.toString = function () {
	            return _symbol.toString();
	        };
	
	        return _symbolWrapper;
	    })(function (symbol) {
	        return symbol.char;
	    })
	};

/***/ },
/* 14 */
/*!********************************!*\
  !*** ../lib/renders/chrome.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = __webpack_require__(/*! babel-runtime/helpers/sliced-to-array */ 21)["default"];
	
	module.exports = {
	    /**
	     *
	     * @param {Array<Array<(TuiSymbol)>>} box
	     * @returns {string[]}
	     */
	    box: (function (_box) {
	        var _boxWrapper = function box(_x) {
	            return _box.apply(this, arguments);
	        };
	
	        _boxWrapper.toString = function () {
	            return _box.toString();
	        };
	
	        return _boxWrapper;
	    })(function (box) {
	        var characters = [];
	        var styles = [];
	
	        box.forEach(function (row) {
	            var rowCharacters = "";
	            var rowStyles = [];
	
	            row.forEach(function (symbol) {
	                var _symbol$toString = symbol.toString("chrome");
	
	                var _symbol$toString2 = _slicedToArray(_symbol$toString, 2);
	
	                var character = _symbol$toString2[0];
	                var style = _symbol$toString2[1];
	
	                rowCharacters += character;
	                rowStyles.push(style);
	            });
	
	            characters.push(rowCharacters);
	            styles.push.apply(styles, rowStyles);
	        });
	
	        return [characters.join("\n")].concat(styles);
	    }),
	
	    /**
	     *
	     * @param {TuiSymbol} symbol
	     * @returns {string[]}
	     */
	    symbol: (function (_symbol) {
	        var _symbolWrapper = function symbol(_x) {
	            return _symbol.apply(this, arguments);
	        };
	
	        _symbolWrapper.toString = function () {
	            return _symbol.toString();
	        };
	
	        return _symbolWrapper;
	    })(function (symbol) {
	        var char = "%c" + symbol.char;
	        var style = "";
	
	        if (symbol.style.color) {
	            style += "color:" + symbol.style.color + ";";
	        }
	
	        if (symbol.style.backgroundColor) {
	            style += "background-color:" + symbol.style.backgroundColor + ";";
	        }
	
	        return [char, style];
	    })
	};

/***/ },
/* 15 */
/*!******************************!*\
  !*** ../lib/renders/ansi.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
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
	
	module.exports = {
	    /**
	     *
	     * @param {Array<Array<(TuiSymbol)>>} box
	     * @returns {string}
	     */
	    box: (function (_box) {
	        var _boxWrapper = function box(_x) {
	            return _box.apply(this, arguments);
	        };
	
	        _boxWrapper.toString = function () {
	            return _box.toString();
	        };
	
	        return _boxWrapper;
	    })(function (box) {
	        return box.map(function (row) {
	            return row.map(function (symbol) {
	                return symbol.toString("ansi");
	            }).join("");
	        }).join("\n");
	    }),
	
	    /**
	     *
	     * @param {TuiSymbol} symbol
	     * @returns {string[]}
	     */
	    symbol: (function (_symbol) {
	        var _symbolWrapper = function symbol(_x) {
	            return _symbol.apply(this, arguments);
	        };
	
	        _symbolWrapper.toString = function () {
	            return _symbol.toString();
	        };
	
	        return _symbolWrapper;
	    })(function (symbol) {
	        var character = wrapString(symbol.char, symbol.style.color);
	        character = wrapString(character, symbol.style.backgroundColor + "BG");
	
	        return character;
	    })
	};

/***/ },
/* 16 */
/*!******************************!*\
  !*** ../lib/renders/html.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	    /**
	     *
	     * @param {Array<Array<(TuiSymbol)>>} box
	     * @returns {string}
	     */
	    box: (function (_box) {
	        var _boxWrapper = function box(_x) {
	            return _box.apply(this, arguments);
	        };
	
	        _boxWrapper.toString = function () {
	            return _box.toString();
	        };
	
	        return _boxWrapper;
	    })(function (box) {
	        return box.map(function (row) {
	            return row.map(function (symbol) {
	                return symbol.toString("html");
	            }).join("");
	        }).join("\n");
	    }),
	
	    /**
	     *
	     * @param {TuiSymbol} symbol
	     * @returns {string[]}
	     */
	    symbol: (function (_symbol) {
	        var _symbolWrapper = function symbol(_x) {
	            return _symbol.apply(this, arguments);
	        };
	
	        _symbolWrapper.toString = function () {
	            return _symbol.toString();
	        };
	
	        return _symbolWrapper;
	    })(function (symbol) {
	        var style = "";
	
	        if (symbol.style.color) {
	            style += "color:" + symbol.style.color + ";";
	        }
	
	        if (symbol.style.backgroundColor) {
	            style += "background-color:" + symbol.style.backgroundColor + ";";
	        }
	
	        return "<span style=\"" + style + "\">" + symbol.char + "</span>";
	    })
	};

/***/ },
/* 17 */
/*!*************************************!*\
  !*** ../~/babel-runtime/core-js.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core.js 0.6.1
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!function(global, framework, undefined){
	'use strict';
	
	/******************************************************************************
	 * Module : common                                                            *
	 ******************************************************************************/
	
	  // Shortcuts for [[Class]] & property names
	var OBJECT          = 'Object'
	  , FUNCTION        = 'Function'
	  , ARRAY           = 'Array'
	  , STRING          = 'String'
	  , NUMBER          = 'Number'
	  , REGEXP          = 'RegExp'
	  , DATE            = 'Date'
	  , MAP             = 'Map'
	  , SET             = 'Set'
	  , WEAKMAP         = 'WeakMap'
	  , WEAKSET         = 'WeakSet'
	  , SYMBOL          = 'Symbol'
	  , PROMISE         = 'Promise'
	  , MATH            = 'Math'
	  , ARGUMENTS       = 'Arguments'
	  , PROTOTYPE       = 'prototype'
	  , CONSTRUCTOR     = 'constructor'
	  , TO_STRING       = 'toString'
	  , TO_STRING_TAG   = TO_STRING + 'Tag'
	  , TO_LOCALE       = 'toLocaleString'
	  , HAS_OWN         = 'hasOwnProperty'
	  , FOR_EACH        = 'forEach'
	  , ITERATOR        = 'iterator'
	  , FF_ITERATOR     = '@@' + ITERATOR
	  , PROCESS         = 'process'
	  , CREATE_ELEMENT  = 'createElement'
	  // Aliases global objects and prototypes
	  , Function        = global[FUNCTION]
	  , Object          = global[OBJECT]
	  , Array           = global[ARRAY]
	  , String          = global[STRING]
	  , Number          = global[NUMBER]
	  , RegExp          = global[REGEXP]
	  , Date            = global[DATE]
	  , Map             = global[MAP]
	  , Set             = global[SET]
	  , WeakMap         = global[WEAKMAP]
	  , WeakSet         = global[WEAKSET]
	  , Symbol          = global[SYMBOL]
	  , Math            = global[MATH]
	  , TypeError       = global.TypeError
	  , RangeError      = global.RangeError
	  , setTimeout      = global.setTimeout
	  , setImmediate    = global.setImmediate
	  , clearImmediate  = global.clearImmediate
	  , parseInt        = global.parseInt
	  , isFinite        = global.isFinite
	  , process         = global[PROCESS]
	  , nextTick        = process && process.nextTick
	  , document        = global.document
	  , html            = document && document.documentElement
	  , navigator       = global.navigator
	  , define          = global.define
	  , console         = global.console || {}
	  , ArrayProto      = Array[PROTOTYPE]
	  , ObjectProto     = Object[PROTOTYPE]
	  , FunctionProto   = Function[PROTOTYPE]
	  , Infinity        = 1 / 0
	  , DOT             = '.';
	
	// http://jsperf.com/core-js-isobject
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	// Native function?
	var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);
	
	// Object internal [[Class]] or toStringTag
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	var toString = ObjectProto[TO_STRING];
	function setToStringTag(it, tag, stat){
	  if(it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))hidden(it, SYMBOL_TAG, tag);
	}
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	function classof(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[SYMBOL_TAG]) == 'string' ? T : cof(O);
	}
	
	// Function
	var call  = FunctionProto.call
	  , apply = FunctionProto.apply
	  , REFERENCE_GET;
	// Partial apply
	function part(/* ...args */){
	  var fn     = assertFunction(this)
	    , length = arguments.length
	    , args   = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that    = this
	      , _length = arguments.length
	      , i = 0, j = 0, _args;
	    if(!holder && !_length)return invoke(fn, args, that);
	    _args = args.slice();
	    if(holder)for(;length > i; i++)if(_args[i] === _)_args[i] = arguments[j++];
	    while(_length > j)_args.push(arguments[j++]);
	    return invoke(fn, _args, that);
	  }
	}
	// Optional / simple context binding
	function ctx(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    }
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    }
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    }
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	  }
	}
	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	function invoke(fn, args, that){
	  var un = that === undefined;
	  switch(args.length | 0){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	}
	
	// Object:
	var create           = Object.create
	  , getPrototypeOf   = Object.getPrototypeOf
	  , setPrototypeOf   = Object.setPrototypeOf
	  , defineProperty   = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , getOwnDescriptor = Object.getOwnPropertyDescriptor
	  , getKeys          = Object.keys
	  , getNames         = Object.getOwnPropertyNames
	  , getSymbols       = Object.getOwnPropertySymbols
	  , isFrozen         = Object.isFrozen
	  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  , ES5Object        = Object
	  , Dict;
	function toObject(it){
	  return ES5Object(assertDefined(it));
	}
	function returnIt(it){
	  return it;
	}
	function returnThis(){
	  return this;
	}
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function ownKeys(it){
	  assertObject(it);
	  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	}
	// 19.1.2.1 Object.assign(target, source, ...)
	var assign = Object.assign || function(target, source){
	  var T = Object(assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	}
	function keyOf(object, el){
	  var O      = toObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	}
	
	// Array
	// array('str1,str2,str3') => ['str1', 'str2', 'str3']
	function array(it){
	  return String(it).split(',');
	}
	var push    = ArrayProto.push
	  , unshift = ArrayProto.unshift
	  , slice   = ArrayProto.slice
	  , splice  = ArrayProto.splice
	  , indexOf = ArrayProto.indexOf
	  , forEach = ArrayProto[FOR_EACH];
	/*
	 * 0 -> forEach
	 * 1 -> map
	 * 2 -> filter
	 * 3 -> some
	 * 4 -> every
	 * 5 -> find
	 * 6 -> findIndex
	 */
	function createArrayMethod(type){
	  var isMap       = type == 1
	    , isFilter    = type == 2
	    , isSome      = type == 3
	    , isEvery     = type == 4
	    , isFindIndex = type == 6
	    , noholes     = type == 5 || isFindIndex;
	  return function(callbackfn/*, that = undefined */){
	    var O      = Object(assertDefined(this))
	      , that   = arguments[1]
	      , self   = ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = isMap ? Array(length) : isFilter ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(noholes || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(type){
	        if(isMap)result[index] = res;             // map
	        else if(res)switch(type){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(isEvery)return false;           // every
	      }
	    }
	    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	  }
	}
	function createArrayContains(isContains){
	  return function(el /*, fromIndex = 0 */){
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = toIndex(arguments[1], length);
	    if(isContains && el != el){
	      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
	    } else for(;length > index; index++)if(isContains || index in O){
	      if(O[index] === el)return isContains || index;
	    } return !isContains && -1;
	  }
	}
	function generic(A, B){
	  // strange IE quirks mode bug -> use typeof vs isFunction
	  return typeof A == 'function' ? A : B;
	}
	
	// Math
	var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
	  , pow    = Math.pow
	  , abs    = Math.abs
	  , ceil   = Math.ceil
	  , floor  = Math.floor
	  , max    = Math.max
	  , min    = Math.min
	  , random = Math.random
	  , trunc  = Math.trunc || function(it){
	      return (it > 0 ? floor : ceil)(it);
	    }
	// 20.1.2.4 Number.isNaN(number)
	function sameNaN(number){
	  return number != number;
	}
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it) ? 0 : trunc(it);
	}
	// 7.1.15 ToLength
	function toLength(it){
	  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	}
	function toIndex(index, length){
	  var index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	}
	function lz(num){
	  return num > 9 ? num : '0' + num;
	}
	
	function createReplacer(regExp, replace, isStatic){
	  var replacer = isObject(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  }
	}
	function createPointAt(toString){
	  return function(pos){
	    var s = String(assertDefined(this))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return toString ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? toString ? s.charAt(i) : a
	      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  }
	}
	
	// Assertion & errors
	var REDUCE_ERROR = 'Reduce of empty object with no initial value';
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError('Function called on null or undefined');
	  return it;
	}
	function assertFunction(it){
	  assert(isFunction(it), it, ' is not a function!');
	  return it;
	}
	function assertObject(it){
	  assert(isObject(it), it, ' is not an object!');
	  return it;
	}
	function assertInstance(it, Constructor, name){
	  assert(it instanceof Constructor, name, ": use the 'new' operator!");
	}
	
	// Property descriptors & Symbol
	function descriptor(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  }
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return defineProperty(object, key, descriptor(bitmap, value));
	  } : simpleSet;
	}
	function uid(key){
	  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
	}
	function getWellKnownSymbol(name, setter){
	  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	}
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	      try {
	        return defineProperty({}, 'a', {get: function(){ return 2 }}).a == 2;
	      } catch(e){}
	    }()
	  , sid    = 0
	  , hidden = createDefiner(1)
	  , set    = Symbol ? simpleSet : hidden
	  , safeSymbol = Symbol || uid;
	function assignHidden(target, src){
	  for(var key in src)hidden(target, key, src[key]);
	  return target;
	}
	
	var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables')
	  , ArrayUnscopables   = ArrayProto[SYMBOL_UNSCOPABLES] || {}
	  , SYMBOL_TAG         = getWellKnownSymbol(TO_STRING_TAG)
	  , SYMBOL_SPECIES     = getWellKnownSymbol('species')
	  , SYMBOL_ITERATOR;
	function setSpecies(C){
	  if(DESC && (framework || !isNative(C)))defineProperty(C, SYMBOL_SPECIES, {
	    configurable: true,
	    get: returnThis
	  });
	}
	
	/******************************************************************************
	 * Module : common.export                                                     *
	 ******************************************************************************/
	
	var NODE = cof(process) == PROCESS
	  , core = {}
	  , path = framework ? global : core
	  , old  = global.core
	  , exportGlobal
	  // type bitmap
	  , FORCED = 1
	  , GLOBAL = 2
	  , STATIC = 4
	  , PROTO  = 8
	  , BIND   = 16
	  , WRAP   = 32;
	function $define(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & GLOBAL
	    , target   = isGlobal ? global : (type & STATIC)
	        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // there is a similar native
	    own = !(type & FORCED) && target && key in target
	      && (!isFunction(target[key]) || isNative(target[key]));
	    // export native or passed
	    out = (own ? target : source)[key];
	    // prevent global pollution for namespaces
	    if(!framework && isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & BIND && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & WRAP && !framework && target[key] == out){
	      exp = function(param){
	        return this instanceof out ? new out(param) : out(param);
	      }
	      exp[PROTOTYPE] = out[PROTOTYPE];
	    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	    // extend global
	    if(framework && target && !own){
	      if(isGlobal)target[key] = out;
	      else delete target[key] && hidden(target, key, out);
	    }
	    // export
	    if(exports[key] != out)hidden(exports, key, exp);
	  }
	}
	// CommonJS export
	if(typeof module != 'undefined' && module.exports)module.exports = core;
	// RequireJS export
	else if(isFunction(define) && define.amd)define(function(){return core});
	// Export to global object
	else exportGlobal = true;
	if(exportGlobal || framework){
	  core.noConflict = function(){
	    global.core = old;
	    return core;
	  }
	  global.core = core;
	}
	
	/******************************************************************************
	 * Module : common.iterators                                                  *
	 ******************************************************************************/
	
	SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR);
	var ITER  = safeSymbol('iter')
	  , KEY   = 1
	  , VALUE = 2
	  , Iterators = {}
	  , IteratorPrototype = {}
	    // Safari has byggy iterators w/o `next`
	  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, returnThis);
	function setIterator(O, value){
	  hidden(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  FF_ITERATOR in ArrayProto && hidden(O, FF_ITERATOR, value);
	}
	function createIterator(Constructor, NAME, next, proto){
	  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	}
	function defineIterator(Constructor, NAME, value, DEFAULT){
	  var proto = Constructor[PROTOTYPE]
	    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
	  if(framework){
	    // Define iterator
	    setIterator(proto, iter);
	    if(iter !== value){
	      var iterProto = getPrototypeOf(iter.call(new Constructor));
	      // Set @@toStringTag to native iterators
	      setToStringTag(iterProto, NAME + ' Iterator', true);
	      // FF fix
	      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	    }
	  }
	  // Plug for library
	  Iterators[NAME] = iter;
	  // FF & v8 fix
	  Iterators[NAME + ' Iterator'] = returnThis;
	  return iter;
	}
	function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET){
	  function createIter(kind){
	    return function(){
	      return new Constructor(this, kind);
	    }
	  }
	  createIterator(Constructor, NAME, next);
	  var entries = createIter(KEY+VALUE)
	    , values  = createIter(VALUE);
	  if(DEFAULT == VALUE)values = defineIterator(Base, NAME, values, 'values');
	  else entries = defineIterator(Base, NAME, entries, 'entries');
	  if(DEFAULT){
	    $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	      entries: entries,
	      keys: IS_SET ? values : createIter(KEY),
	      values: values
	    });
	  }
	}
	function iterResult(done, value){
	  return {value: value, done: !!done};
	}
	function isIterable(it){
	  var O      = Object(it)
	    , Symbol = global[SYMBOL]
	    , hasExt = (Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O;
	  return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	}
	function getIterator(it){
	  var Symbol  = global[SYMBOL]
	    , ext     = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR]
	    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	  return assertObject(getIter.call(it));
	}
	function stepCall(fn, value, entries){
	  return entries ? invoke(fn, value) : fn(value);
	}
	function checkDangerIterClosing(fn){
	  var danger = true;
	  var O = {
	    next: function(){ throw 1 },
	    'return': function(){ danger = false }
	  };
	  O[SYMBOL_ITERATOR] = returnThis;
	  try {
	    fn(O);
	  } catch(e){}
	  return danger;
	}
	function closeIterator(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)ret.call(iterator);
	}
	function safeIterClose(exec, iterator){
	  try {
	    exec(iterator);
	  } catch(e){
	    closeIterator(iterator);
	    throw e;
	  }
	}
	function forOf(iterable, entries, fn, that){
	  safeIterClose(function(iterator){
	    var f = ctx(fn, that, entries ? 2 : 1)
	      , step;
	    while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false){
	      return closeIterator(iterator);
	    }
	  }, getIterator(iterable));
	}
	
	/******************************************************************************
	 * Module : es6.symbol                                                        *
	 ******************************************************************************/
	
	// ECMAScript 6 symbols shim
	!function(TAG, SymbolRegistry, AllSymbols, setter){
	  // 19.4.1.1 Symbol([description])
	  if(!isNative(Symbol)){
	    Symbol = function(description){
	      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
	      var tag = uid(description)
	        , sym = set(create(Symbol[PROTOTYPE]), TAG, tag);
	      AllSymbols[tag] = sym;
	      DESC && setter && defineProperty(ObjectProto, tag, {
	        configurable: true,
	        set: function(value){
	          hidden(this, tag, value);
	        }
	      });
	      return sym;
	    }
	    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
	      return this[TAG];
	    });
	  }
	  $define(GLOBAL + WRAP, {Symbol: Symbol});
	  
	  var symbolStatics = {
	    // 19.4.2.1 Symbol.for(key)
	    'for': function(key){
	      return has(SymbolRegistry, key += '')
	        ? SymbolRegistry[key]
	        : SymbolRegistry[key] = Symbol(key);
	    },
	    // 19.4.2.4 Symbol.iterator
	    iterator: SYMBOL_ITERATOR || getWellKnownSymbol(ITERATOR),
	    // 19.4.2.5 Symbol.keyFor(sym)
	    keyFor: part.call(keyOf, SymbolRegistry),
	    // 19.4.2.10 Symbol.species
	    species: SYMBOL_SPECIES,
	    // 19.4.2.13 Symbol.toStringTag
	    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	    // 19.4.2.14 Symbol.unscopables
	    unscopables: SYMBOL_UNSCOPABLES,
	    pure: safeSymbol,
	    set: set,
	    useSetter: function(){setter = true},
	    useSimple: function(){setter = false}
	  };
	  // 19.4.2.2 Symbol.hasInstance
	  // 19.4.2.3 Symbol.isConcatSpreadable
	  // 19.4.2.6 Symbol.match
	  // 19.4.2.8 Symbol.replace
	  // 19.4.2.9 Symbol.search
	  // 19.4.2.11 Symbol.split
	  // 19.4.2.12 Symbol.toPrimitive
	  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive'),
	    function(it){
	      symbolStatics[it] = getWellKnownSymbol(it);
	    }
	  );
	  $define(STATIC, SYMBOL, symbolStatics);
	  
	  setToStringTag(Symbol, SYMBOL);
	  
	  $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
	    // 19.1.2.7 Object.getOwnPropertyNames(O)
	    getOwnPropertyNames: function(it){
	      var names = getNames(toObject(it)), result = [], key, i = 0;
	      while(names.length > i)has(AllSymbols, key = names[i++]) || result.push(key);
	      return result;
	    },
	    // 19.1.2.8 Object.getOwnPropertySymbols(O)
	    getOwnPropertySymbols: function(it){
	      var names = getNames(toObject(it)), result = [], key, i = 0;
	      while(names.length > i)has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
	      return result;
	    }
	  });
	  
	  // 20.2.1.9 Math[@@toStringTag]
	  setToStringTag(Math, MATH, true);
	  // 24.3.3 JSON[@@toStringTag]
	  setToStringTag(global.JSON, 'JSON', true);
	}(safeSymbol('tag'), {}, {}, true);
	
	/******************************************************************************
	 * Module : es6.object.statics                                                *
	 ******************************************************************************/
	
	!function(){
	  var objectStatic = {
	    // 19.1.3.1 Object.assign(target, source)
	    assign: assign,
	    // 19.1.3.10 Object.is(value1, value2)
	    is: function(x, y){
	      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	    }
	  };
	  // 19.1.3.19 Object.setPrototypeOf(O, proto)
	  // Works with __proto__ only. Old v8 can't works with null proto objects.
	  '__proto__' in ObjectProto && function(buggy, set){
	    try {
	      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
	      set({}, ArrayProto);
	    } catch(e){ buggy = true }
	    objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto){
	      assertObject(O);
	      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	      if(buggy)O.__proto__ = proto;
	      else set(O, proto);
	      return O;
	    }
	  }();
	  $define(STATIC, OBJECT, objectStatic);
	}();
	
	/******************************************************************************
	 * Module : es6.object.statics-accept-primitives                              *
	 ******************************************************************************/
	
	!function(){
	  // Object static methods accept primitives
	  function wrapObjectMethod(key, MODE){
	    var fn  = Object[key]
	      , exp = core[OBJECT][key]
	      , f   = 0
	      , o   = {};
	    if(!exp || isNative(exp)){
	      o[key] = MODE == 1 ? function(it){
	        return isObject(it) ? fn(it) : it;
	      } : MODE == 2 ? function(it){
	        return isObject(it) ? fn(it) : true;
	      } : MODE == 3 ? function(it){
	        return isObject(it) ? fn(it) : false;
	      } : MODE == 4 ? function(it, key){
	        return fn(toObject(it), key);
	      } : function(it){
	        return fn(toObject(it));
	      };
	      try { fn(DOT) }
	      catch(e){ f = 1 }
	      $define(STATIC + FORCED * f, OBJECT, o);
	    }
	  }
	  wrapObjectMethod('freeze', 1);
	  wrapObjectMethod('seal', 1);
	  wrapObjectMethod('preventExtensions', 1);
	  wrapObjectMethod('isFrozen', 2);
	  wrapObjectMethod('isSealed', 2);
	  wrapObjectMethod('isExtensible', 3);
	  wrapObjectMethod('getOwnPropertyDescriptor', 4);
	  wrapObjectMethod('getPrototypeOf');
	  wrapObjectMethod('keys');
	  wrapObjectMethod('getOwnPropertyNames');
	}();
	
	/******************************************************************************
	 * Module : es6.number.statics                                                *
	 ******************************************************************************/
	
	!function(isInteger){
	  $define(STATIC, NUMBER, {
	    // 20.1.2.1 Number.EPSILON
	    EPSILON: pow(2, -52),
	    // 20.1.2.2 Number.isFinite(number)
	    isFinite: function(it){
	      return typeof it == 'number' && isFinite(it);
	    },
	    // 20.1.2.3 Number.isInteger(number)
	    isInteger: isInteger,
	    // 20.1.2.4 Number.isNaN(number)
	    isNaN: sameNaN,
	    // 20.1.2.5 Number.isSafeInteger(number)
	    isSafeInteger: function(number){
	      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	    },
	    // 20.1.2.6 Number.MAX_SAFE_INTEGER
	    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	    // 20.1.2.10 Number.MIN_SAFE_INTEGER
	    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	    // 20.1.2.12 Number.parseFloat(string)
	    parseFloat: parseFloat,
	    // 20.1.2.13 Number.parseInt(string, radix)
	    parseInt: parseInt
	  });
	// 20.1.2.3 Number.isInteger(number)
	}(Number.isInteger || function(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	});
	
	/******************************************************************************
	 * Module : es6.math                                                          *
	 ******************************************************************************/
	
	// ECMAScript 6 shim
	!function(){
	  // 20.2.2.28 Math.sign(x)
	  var E    = Math.E
	    , exp  = Math.exp
	    , log  = Math.log
	    , sqrt = Math.sqrt
	    , sign = Math.sign || function(x){
	        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	      };
	  
	  // 20.2.2.5 Math.asinh(x)
	  function asinh(x){
	    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	  }
	  // 20.2.2.14 Math.expm1(x)
	  function expm1(x){
	    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
	  }
	    
	  $define(STATIC, MATH, {
	    // 20.2.2.3 Math.acosh(x)
	    acosh: function(x){
	      return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
	    },
	    // 20.2.2.5 Math.asinh(x)
	    asinh: asinh,
	    // 20.2.2.7 Math.atanh(x)
	    atanh: function(x){
	      return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
	    },
	    // 20.2.2.9 Math.cbrt(x)
	    cbrt: function(x){
	      return sign(x = +x) * pow(abs(x), 1 / 3);
	    },
	    // 20.2.2.11 Math.clz32(x)
	    clz32: function(x){
	      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	    },
	    // 20.2.2.12 Math.cosh(x)
	    cosh: function(x){
	      return (exp(x = +x) + exp(-x)) / 2;
	    },
	    // 20.2.2.14 Math.expm1(x)
	    expm1: expm1,
	    // 20.2.2.16 Math.fround(x)
	    // TODO: fallback for IE9-
	    fround: function(x){
	      return new Float32Array([x])[0];
	    },
	    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	    hypot: function(value1, value2){
	      var sum  = 0
	        , len1 = arguments.length
	        , len2 = len1
	        , args = Array(len1)
	        , larg = -Infinity
	        , arg;
	      while(len1--){
	        arg = args[len1] = +arguments[len1];
	        if(arg == Infinity || arg == -Infinity)return Infinity;
	        if(arg > larg)larg = arg;
	      }
	      larg = arg || 1;
	      while(len2--)sum += pow(args[len2] / larg, 2);
	      return larg * sqrt(sum);
	    },
	    // 20.2.2.18 Math.imul(x, y)
	    imul: function(x, y){
	      var UInt16 = 0xffff
	        , xn = +x
	        , yn = +y
	        , xl = UInt16 & xn
	        , yl = UInt16 & yn;
	      return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
	    },
	    // 20.2.2.20 Math.log1p(x)
	    log1p: function(x){
	      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
	    },
	    // 20.2.2.21 Math.log10(x)
	    log10: function(x){
	      return log(x) / Math.LN10;
	    },
	    // 20.2.2.22 Math.log2(x)
	    log2: function(x){
	      return log(x) / Math.LN2;
	    },
	    // 20.2.2.28 Math.sign(x)
	    sign: sign,
	    // 20.2.2.30 Math.sinh(x)
	    sinh: function(x){
	      return (abs(x = +x) < 1) ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
	    },
	    // 20.2.2.33 Math.tanh(x)
	    tanh: function(x){
	      var a = expm1(x = +x)
	        , b = expm1(-x);
	      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	    },
	    // 20.2.2.34 Math.trunc(x)
	    trunc: trunc
	  });
	}();
	
	/******************************************************************************
	 * Module : es6.string                                                        *
	 ******************************************************************************/
	
	!function(fromCharCode){
	  function assertNotRegExp(it){
	    if(cof(it) == REGEXP)throw TypeError();
	  }
	  
	  $define(STATIC, STRING, {
	    // 21.1.2.2 String.fromCodePoint(...codePoints)
	    fromCodePoint: function(x){
	      var res = []
	        , len = arguments.length
	        , i   = 0
	        , code
	      while(len > i){
	        code = +arguments[i++];
	        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	        res.push(code < 0x10000
	          ? fromCharCode(code)
	          : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	        );
	      } return res.join('');
	    },
	    // 21.1.2.4 String.raw(callSite, ...substitutions)
	    raw: function(callSite){
	      var raw = toObject(callSite.raw)
	        , len = toLength(raw.length)
	        , sln = arguments.length
	        , res = []
	        , i   = 0;
	      while(len > i){
	        res.push(String(raw[i++]));
	        if(i < sln)res.push(String(arguments[i]));
	      } return res.join('');
	    }
	  });
	  
	  $define(PROTO, STRING, {
	    // 21.1.3.3 String.prototype.codePointAt(pos)
	    codePointAt: createPointAt(false),
	    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	    endsWith: function(searchString /*, endPosition = @length */){
	      assertNotRegExp(searchString);
	      var that = String(assertDefined(this))
	        , endPosition = arguments[1]
	        , len = toLength(that.length)
	        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
	      searchString += '';
	      return that.slice(end - searchString.length, end) === searchString;
	    },
	    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	    includes: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	    },
	    // 21.1.3.13 String.prototype.repeat(count)
	    repeat: function(count){
	      var str = String(assertDefined(this))
	        , res = ''
	        , n   = toInteger(count);
	      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
	      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	      return res;
	    },
	    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	    startsWith: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      var that  = String(assertDefined(this))
	        , index = toLength(min(arguments[1], that.length));
	      searchString += '';
	      return that.slice(index, index + searchString.length) === searchString;
	    }
	  });
	}(String.fromCharCode);
	
	/******************************************************************************
	 * Module : es6.array.statics                                                 *
	 ******************************************************************************/
	
	!function(){
	  $define(STATIC + FORCED * checkDangerIterClosing(Array.from), ARRAY, {
	    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	    from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	      var O       = Object(assertDefined(arrayLike))
	        , mapfn   = arguments[1]
	        , mapping = mapfn !== undefined
	        , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
	        , index   = 0
	        , length, result, step;
	      if(isIterable(O)){
	        result = new (generic(this, Array));
	        safeIterClose(function(iterator){
	          for(; !(step = iterator.next()).done; index++){
	            result[index] = mapping ? f(step.value, index) : step.value;
	          }
	        }, getIterator(O));
	      } else {
	        result = new (generic(this, Array))(length = toLength(O.length));
	        for(; length > index; index++){
	          result[index] = mapping ? f(O[index], index) : O[index];
	        }
	      }
	      result.length = index;
	      return result;
	    }
	  });
	  
	  $define(STATIC, ARRAY, {
	    // 22.1.2.3 Array.of( ...items)
	    of: function(/* ...args */){
	      var index  = 0
	        , length = arguments.length
	        , result = new (generic(this, Array))(length);
	      while(length > index)result[index] = arguments[index++];
	      result.length = length;
	      return result;
	    }
	  });
	  
	  setSpecies(Array);
	}();
	
	/******************************************************************************
	 * Module : es6.array.prototype                                               *
	 ******************************************************************************/
	
	!function(){
	  $define(PROTO, ARRAY, {
	    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	    copyWithin: function(target /* = 0 */, start /* = 0, end = @length */){
	      var O     = Object(assertDefined(this))
	        , len   = toLength(O.length)
	        , to    = toIndex(target, len)
	        , from  = toIndex(start, len)
	        , end   = arguments[2]
	        , fin   = end === undefined ? len : toIndex(end, len)
	        , count = min(fin - from, len - to)
	        , inc   = 1;
	      if(from < to && to < from + count){
	        inc  = -1;
	        from = from + count - 1;
	        to   = to + count - 1;
	      }
	      while(count-- > 0){
	        if(from in O)O[to] = O[from];
	        else delete O[to];
	        to += inc;
	        from += inc;
	      } return O;
	    },
	    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	    fill: function(value /*, start = 0, end = @length */){
	      var O      = Object(assertDefined(this))
	        , length = toLength(O.length)
	        , index  = toIndex(arguments[1], length)
	        , end    = arguments[2]
	        , endPos = end === undefined ? length : toIndex(end, length);
	      while(endPos > index)O[index++] = value;
	      return O;
	    },
	    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	    find: createArrayMethod(5),
	    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	    findIndex: createArrayMethod(6)
	  });
	  
	  if(framework){
	    // 22.1.3.31 Array.prototype[@@unscopables]
	    forEach.call(array('find,findIndex,fill,copyWithin,entries,keys,values'), function(it){
	      ArrayUnscopables[it] = true;
	    });
	    SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
	  }
	}();
	
	/******************************************************************************
	 * Module : es6.iterators                                                     *
	 ******************************************************************************/
	
	!function(at){
	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  defineStdIterators(Array, ARRAY, function(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), i: 0, k: kind});
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , kind  = iter.k
	      , index = iter.i++;
	    if(!O || index >= O.length){
	      iter.o = undefined;
	      return iterResult(1);
	    }
	    if(kind == KEY)  return iterResult(0, index);
	    if(kind == VALUE)return iterResult(0, O[index]);
	                     return iterResult(0, [index, O[index]]);
	  }, VALUE);
	  
	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators[ARGUMENTS] = Iterators[ARRAY];
	  
	  // 21.1.3.27 String.prototype[@@iterator]()
	  defineStdIterators(String, STRING, function(iterated){
	    set(this, ITER, {o: String(iterated), i: 0});
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , index = iter.i
	      , point;
	    if(index >= O.length)return iterResult(1);
	    point = at.call(O, index);
	    iter.i += point.length;
	    return iterResult(0, point);
	  });
	}(createPointAt(true));
	
	/******************************************************************************
	 * Module : web.immediate                                                     *
	 ******************************************************************************/
	
	// setImmediate shim
	// Node.js 0.9+ & IE10+ has setImmediate, else:
	isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
	  var postMessage      = global.postMessage
	    , addEventListener = global.addEventListener
	    , MessageChannel   = global.MessageChannel
	    , counter          = 0
	    , queue            = {}
	    , defer, channel, port;
	  setImmediate = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    }
	    defer(counter);
	    return counter;
	  }
	  clearImmediate = function(id){
	    delete queue[id];
	  }
	  function run(id){
	    if(has(queue, id)){
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  }
	  function listner(event){
	    run(event.data);
	  }
	  // Node.js 0.8-
	  if(NODE){
	    defer = function(id){
	      nextTick(part.call(run, id));
	    }
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    }
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
	    defer = function(id){
	      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run(id);
	      }
	    }
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(run, 0, id);
	    }
	  }
	}('onreadystatechange');
	$define(GLOBAL + BIND, {
	  setImmediate:   setImmediate,
	  clearImmediate: clearImmediate
	});
	
	/******************************************************************************
	 * Module : es6.promise                                                       *
	 ******************************************************************************/
	
	// ES6 promises shim
	// Based on https://github.com/getify/native-promise-only/
	!function(Promise, test){
	  isFunction(Promise) && isFunction(Promise.resolve)
	  && Promise.resolve(test = new Promise(function(){})) == test
	  || function(asap, RECORD){
	    function isThenable(it){
	      var then;
	      if(isObject(it))then = it.then;
	      return isFunction(then) ? then : false;
	    }
	    function handledRejectionOrHasOnRejected(promise){
	      var record = promise[RECORD]
	        , chain  = record.c
	        , i      = 0
	        , react;
	      if(record.h)return true;
	      while(chain.length > i){
	        react = chain[i++];
	        if(react.fail || handledRejectionOrHasOnRejected(react.P))return true;
	      }
	    }
	    function notify(record, reject){
	      var chain = record.c;
	      if(reject || chain.length)asap(function(){
	        var promise = record.p
	          , value   = record.v
	          , ok      = record.s == 1
	          , i       = 0;
	        if(reject && !handledRejectionOrHasOnRejected(promise)){
	          setTimeout(function(){
	            if(!handledRejectionOrHasOnRejected(promise)){
	              if(NODE){
	                if(!process.emit('unhandledRejection', value, promise)){
	                  // default node.js behavior
	                }
	              } else if(isFunction(console.error)){
	                console.error('Unhandled promise rejection', value);
	              }
	            }
	          }, 1e3);
	        } else while(chain.length > i)!function(react){
	          var cb = ok ? react.ok : react.fail
	            , ret, then;
	          try {
	            if(cb){
	              if(!ok)record.h = true;
	              ret = cb === true ? value : cb(value);
	              if(ret === react.P){
	                react.rej(TypeError(PROMISE + '-chain cycle'));
	              } else if(then = isThenable(ret)){
	                then.call(ret, react.res, react.rej);
	              } else react.res(ret);
	            } else react.rej(value);
	          } catch(err){
	            react.rej(err);
	          }
	        }(chain[i++]);
	        chain.length = 0;
	      });
	    }
	    function resolve(value){
	      var record = this
	        , then, wrapper;
	      if(record.d)return;
	      record.d = true;
	      record = record.r || record; // unwrap
	      try {
	        if(then = isThenable(value)){
	          wrapper = {r: record, d: false}; // wrap
	          then.call(value, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	        } else {
	          record.v = value;
	          record.s = 1;
	          notify(record);
	        }
	      } catch(err){
	        reject.call(wrapper || {r: record, d: false}, err); // wrap
	      }
	    }
	    function reject(value){
	      var record = this;
	      if(record.d)return;
	      record.d = true;
	      record = record.r || record; // unwrap
	      record.v = value;
	      record.s = 2;
	      notify(record, true);
	    }
	    function getConstructor(C){
	      var S = assertObject(C)[SYMBOL_SPECIES];
	      return S != undefined ? S : C;
	    }
	    // 25.4.3.1 Promise(executor)
	    Promise = function(executor){
	      assertFunction(executor);
	      assertInstance(this, Promise, PROMISE);
	      var record = {
	        p: this,      // promise
	        c: [],        // chain
	        s: 0,         // state
	        d: false,     // done
	        v: undefined, // value
	        h: false      // handled rejection
	      };
	      hidden(this, RECORD, record);
	      try {
	        executor(ctx(resolve, record, 1), ctx(reject, record, 1));
	      } catch(err){
	        reject.call(record, err);
	      }
	    }
	    assignHidden(Promise[PROTOTYPE], {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function(onFulfilled, onRejected){
	        var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
	        var react = {
	          ok:   isFunction(onFulfilled) ? onFulfilled : true,
	          fail: isFunction(onRejected)  ? onRejected  : false
	        } , P = react.P = new (S != undefined ? S : Promise)(function(resolve, reject){
	          react.res = assertFunction(resolve);
	          react.rej = assertFunction(reject);
	        }), record = this[RECORD];
	        record.c.push(react);
	        record.s && notify(record);
	        return P;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function(onRejected){
	        return this.then(undefined, onRejected);
	      }
	    });
	    assignHidden(Promise, {
	      // 25.4.4.1 Promise.all(iterable)
	      all: function(iterable){
	        var Promise = getConstructor(this)
	          , values  = [];
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, push, values);
	          var remaining = values.length
	            , results   = Array(remaining);
	          if(remaining)forEach.call(values, function(promise, index){
	            Promise.resolve(promise).then(function(value){
	              results[index] = value;
	              --remaining || resolve(results);
	            }, reject);
	          });
	          else resolve(results);
	        });
	      },
	      // 25.4.4.4 Promise.race(iterable)
	      race: function(iterable){
	        var Promise = getConstructor(this);
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, function(promise){
	            Promise.resolve(promise).then(resolve, reject);
	          });
	        });
	      },
	      // 25.4.4.5 Promise.reject(r)
	      reject: function(r){
	        return new (getConstructor(this))(function(resolve, reject){
	          reject(r);
	        });
	      },
	      // 25.4.4.6 Promise.resolve(x)
	      resolve: function(x){
	        return isObject(x) && RECORD in x && getPrototypeOf(x) === this[PROTOTYPE]
	          ? x : new (getConstructor(this))(function(resolve, reject){
	            resolve(x);
	          });
	      }
	    });
	  }(nextTick || setImmediate, safeSymbol('record'));
	  setToStringTag(Promise, PROMISE);
	  setSpecies(Promise);
	  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
	}(global[PROMISE]);
	
	/******************************************************************************
	 * Module : es6.collections                                                   *
	 ******************************************************************************/
	
	// ECMAScript 6 collections shim
	!function(){
	  var UID   = safeSymbol('uid')
	    , O1    = safeSymbol('O1')
	    , WEAK  = safeSymbol('weak')
	    , LEAK  = safeSymbol('leak')
	    , LAST  = safeSymbol('last')
	    , FIRST = safeSymbol('first')
	    , SIZE  = DESC ? safeSymbol('size') : 'size'
	    , uid   = 0
	    , tmp   = {};
	  
	  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
	    var ADDER = isMap ? 'set' : 'add'
	      , proto = C && C[PROTOTYPE]
	      , O     = {};
	    function initFromIterable(that, iterable){
	      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
	      return that;
	    }
	    function fixSVZ(key, chain){
	      var method = proto[key];
	      if(framework)proto[key] = function(a, b){
	        var result = method.call(this, a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      };
	    }
	    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, 'entries')))){
	      // create collection constructor
	      C = isWeak
	        ? function(iterable){
	            assertInstance(this, C, NAME);
	            set(this, UID, uid++);
	            initFromIterable(this, iterable);
	          }
	        : function(iterable){
	            var that = this;
	            assertInstance(that, C, NAME);
	            set(that, O1, create(null));
	            set(that, SIZE, 0);
	            set(that, LAST, undefined);
	            set(that, FIRST, undefined);
	            initFromIterable(that, iterable);
	          };
	      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	      isWeak || !DESC || defineProperty(C[PROTOTYPE], 'size', {get: function(){
	        return assertDefined(this[SIZE]);
	      }});
	    } else {
	      var Native = C
	        , inst   = new C
	        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
	        , buggyZero;
	      // wrap to init collections from iterable
	      if(checkDangerIterClosing(function(O){ new C(O) })){
	        C = function(iterable){
	          assertInstance(this, C, NAME);
	          return initFromIterable(new Native, iterable);
	        }
	        C[PROTOTYPE] = proto;
	        if(framework)proto[CONSTRUCTOR] = C;
	      }
	      isWeak || inst[FOR_EACH](function(val, key){
	        buggyZero = 1 / key === -Infinity;
	      });
	      // fix converting -0 key to +0
	      if(buggyZero){
	        fixSVZ('delete');
	        fixSVZ('has');
	        isMap && fixSVZ('get');
	      }
	      // + fix .add & .set for chaining
	      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
	    }
	    setToStringTag(C, NAME);
	    setSpecies(C);
	    
	    O[NAME] = C;
	    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
	    
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , kind  = iter.k
	        , entry = iter.l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
	        // or finish the iteration
	        iter.o = undefined;
	        return iterResult(1);
	      }
	      // return step by kind
	      if(kind == KEY)  return iterResult(0, entry.k);
	      if(kind == VALUE)return iterResult(0, entry.v);
	                       return iterResult(0, [entry.k, entry.v]);   
	    }, isMap ? KEY+VALUE : VALUE, !isMap);
	    
	    return C;
	  }
	  
	  function fastKey(it, create){
	    // return primitive with prefix
	    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
	    // can't set id to frozen object
	    if(isFrozen(it))return 'F';
	    if(!has(it, UID)){
	      // not necessary to add id
	      if(!create)return 'E';
	      // add missing object id
	      hidden(it, UID, ++uid);
	    // return object id with prefix
	    } return 'O' + it[UID];
	  }
	  function getEntry(that, key){
	    // fast case
	    var index = fastKey(key), entry;
	    if(index != 'F')return that[O1][index];
	    // frozen object case
	    for(entry = that[FIRST]; entry; entry = entry.n){
	      if(entry.k == key)return entry;
	    }
	  }
	  function def(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry)entry.v = value;
	    // create new entry
	    else {
	      that[LAST] = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that[LAST],          // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that[FIRST])that[FIRST] = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index != 'F')that[O1][index] = entry;
	    } return that;
	  }
	
	  var collectionMethods = {
	    // 23.1.3.1 Map.prototype.clear()
	    // 23.2.3.2 Set.prototype.clear()
	    clear: function(){
	      for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
	        entry.r = true;
	        if(entry.p)entry.p = entry.p.n = undefined;
	        delete data[entry.i];
	      }
	      that[FIRST] = that[LAST] = undefined;
	      that[SIZE] = 0;
	    },
	    // 23.1.3.3 Map.prototype.delete(key)
	    // 23.2.3.4 Set.prototype.delete(value)
	    'delete': function(key){
	      var that  = this
	        , entry = getEntry(that, key);
	      if(entry){
	        var next = entry.n
	          , prev = entry.p;
	        delete that[O1][entry.i];
	        entry.r = true;
	        if(prev)prev.n = next;
	        if(next)next.p = prev;
	        if(that[FIRST] == entry)that[FIRST] = next;
	        if(that[LAST] == entry)that[LAST] = prev;
	        that[SIZE]--;
	      } return !!entry;
	    },
	    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	    forEach: function(callbackfn /*, that = undefined */){
	      var f = ctx(callbackfn, arguments[1], 3)
	        , entry;
	      while(entry = entry ? entry.n : this[FIRST]){
	        f(entry.v, entry.k, this);
	        // revert to the last existing entry
	        while(entry && entry.r)entry = entry.p;
	      }
	    },
	    // 23.1.3.7 Map.prototype.has(key)
	    // 23.2.3.7 Set.prototype.has(value)
	    has: function(key){
	      return !!getEntry(this, key);
	    }
	  }
	  
	  // 23.1 Map Objects
	  Map = getCollection(Map, MAP, {
	    // 23.1.3.6 Map.prototype.get(key)
	    get: function(key){
	      var entry = getEntry(this, key);
	      return entry && entry.v;
	    },
	    // 23.1.3.9 Map.prototype.set(key, value)
	    set: function(key, value){
	      return def(this, key === 0 ? 0 : key, value);
	    }
	  }, collectionMethods, true);
	  
	  // 23.2 Set Objects
	  Set = getCollection(Set, SET, {
	    // 23.2.3.1 Set.prototype.add(value)
	    add: function(value){
	      return def(this, value = value === 0 ? 0 : value, value);
	    }
	  }, collectionMethods);
	  
	  function defWeak(that, key, value){
	    if(isFrozen(assertObject(key)))leakStore(that).set(key, value);
	    else {
	      has(key, WEAK) || hidden(key, WEAK, {});
	      key[WEAK][that[UID]] = value;
	    } return that;
	  }
	  function leakStore(that){
	    return that[LEAK] || hidden(that, LEAK, new Map)[LEAK];
	  }
	  
	  var weakMethods = {
	    // 23.3.3.2 WeakMap.prototype.delete(key)
	    // 23.4.3.3 WeakSet.prototype.delete(value)
	    'delete': function(key){
	      if(!isObject(key))return false;
	      if(isFrozen(key))return leakStore(this)['delete'](key);
	      return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
	    },
	    // 23.3.3.4 WeakMap.prototype.has(key)
	    // 23.4.3.4 WeakSet.prototype.has(value)
	    has: function(key){
	      if(!isObject(key))return false;
	      if(isFrozen(key))return leakStore(this).has(key);
	      return has(key, WEAK) && has(key[WEAK], this[UID]);
	    }
	  };
	  
	  // 23.3 WeakMap Objects
	  WeakMap = getCollection(WeakMap, WEAKMAP, {
	    // 23.3.3.3 WeakMap.prototype.get(key)
	    get: function(key){
	      if(isObject(key)){
	        if(isFrozen(key))return leakStore(this).get(key);
	        if(has(key, WEAK))return key[WEAK][this[UID]];
	      }
	    },
	    // 23.3.3.5 WeakMap.prototype.set(key, value)
	    set: function(key, value){
	      return defWeak(this, key, value);
	    }
	  }, weakMethods, true, true);
	  
	  // IE11 WeakMap frozen keys fix
	  if(framework && new WeakMap().set(Object.freeze(tmp), 7).get(tmp) != 7){
	    forEach.call(array('delete,has,get,set'), function(key){
	      var method = WeakMap[PROTOTYPE][key];
	      WeakMap[PROTOTYPE][key] = function(a, b){
	        // store frozen objects on leaky map
	        if(isObject(a) && isFrozen(a)){
	          var result = leakStore(this)[key](a, b);
	          return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	        } return method.call(this, a, b);
	      };
	    });
	  }
	  
	  // 23.4 WeakSet Objects
	  WeakSet = getCollection(WeakSet, WEAKSET, {
	    // 23.4.3.1 WeakSet.prototype.add(value)
	    add: function(value){
	      return defWeak(this, value, true);
	    }
	  }, weakMethods, false, true);
	}();
	
	/******************************************************************************
	 * Module : es6.reflect                                                       *
	 ******************************************************************************/
	
	!function(){
	  function Enumerate(iterated){
	    var keys = [], key;
	    for(key in iterated)keys.push(key);
	    set(this, ITER, {o: iterated, a: keys, i: 0});
	  }
	  createIterator(Enumerate, OBJECT, function(){
	    var iter = this[ITER]
	      , keys = iter.a
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!((key = keys[iter.i++]) in iter.o));
	    return iterResult(0, key);
	  });
	  
	  function wrap(fn){
	    return function(it){
	      assertObject(it);
	      try {
	        return fn.apply(undefined, arguments), true;
	      } catch(e){
	        return false;
	      }
	    }
	  }
	  
	  function reflectGet(target, propertyKey/*, receiver*/){
	    var receiver = arguments.length < 3 ? target : arguments[2]
	      , desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc)return has(desc, 'value')
	      ? desc.value
	      : desc.get === undefined
	        ? undefined
	        : desc.get.call(receiver);
	    return isObject(proto = getPrototypeOf(target))
	      ? reflectGet(proto, propertyKey, receiver)
	      : undefined;
	  }
	  function reflectSet(target, propertyKey, V/*, receiver*/){
	    var receiver = arguments.length < 4 ? target : arguments[3]
	      , ownDesc  = getOwnDescriptor(assertObject(target), propertyKey)
	      , existingDescriptor, proto;
	    if(!ownDesc){
	      if(isObject(proto = getPrototypeOf(target))){
	        return reflectSet(proto, propertyKey, V, receiver);
	      }
	      ownDesc = descriptor(0);
	    }
	    if(has(ownDesc, 'value')){
	      if(ownDesc.writable === false || !isObject(receiver))return false;
	      existingDescriptor = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	      existingDescriptor.value = V;
	      return defineProperty(receiver, propertyKey, existingDescriptor), true;
	    }
	    return ownDesc.set === undefined
	      ? false
	      : (ownDesc.set.call(receiver, V), true);
	  }
	  var isExtensible = Object.isExtensible || returnIt;
	  
	  var reflect = {
	    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	    apply: ctx(call, apply, 3),
	    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	    construct: function(target, argumentsList /*, newTarget*/){
	      var proto    = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE]
	        , instance = create(isObject(proto) ? proto : ObjectProto)
	        , result   = apply.call(target, instance, argumentsList);
	      return isObject(result) ? result : instance;
	    },
	    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	    defineProperty: wrap(defineProperty),
	    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	    deleteProperty: function(target, propertyKey){
	      var desc = getOwnDescriptor(assertObject(target), propertyKey);
	      return desc && !desc.configurable ? false : delete target[propertyKey];
	    },
	    // 26.1.5 Reflect.enumerate(target)
	    enumerate: function(target){
	      return new Enumerate(assertObject(target));
	    },
	    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	    get: reflectGet,
	    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	    getOwnPropertyDescriptor: function(target, propertyKey){
	      return getOwnDescriptor(assertObject(target), propertyKey);
	    },
	    // 26.1.8 Reflect.getPrototypeOf(target)
	    getPrototypeOf: function(target){
	      return getPrototypeOf(assertObject(target));
	    },
	    // 26.1.9 Reflect.has(target, propertyKey)
	    has: function(target, propertyKey){
	      return propertyKey in target;
	    },
	    // 26.1.10 Reflect.isExtensible(target)
	    isExtensible: function(target){
	      return !!isExtensible(assertObject(target));
	    },
	    // 26.1.11 Reflect.ownKeys(target)
	    ownKeys: ownKeys,
	    // 26.1.12 Reflect.preventExtensions(target)
	    preventExtensions: wrap(Object.preventExtensions || returnIt),
	    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	    set: reflectSet
	  }
	  // 26.1.14 Reflect.setPrototypeOf(target, proto)
	  if(setPrototypeOf)reflect.setPrototypeOf = function(target, proto){
	    return setPrototypeOf(assertObject(target), proto), true;
	  };
	  
	  $define(GLOBAL, {Reflect: {}});
	  $define(STATIC, 'Reflect', reflect);
	}();
	
	/******************************************************************************
	 * Module : es7.proposals                                                     *
	 ******************************************************************************/
	
	!function(){
	  $define(PROTO, ARRAY, {
	    // https://github.com/domenic/Array.prototype.includes
	    includes: createArrayContains(true)
	  });
	  $define(PROTO, STRING, {
	    // https://github.com/mathiasbynens/String.prototype.at
	    at: createPointAt(true)
	  });
	  
	  function createObjectToArray(isEntries){
	    return function(object){
	      var O      = toObject(object)
	        , keys   = getKeys(object)
	        , length = keys.length
	        , i      = 0
	        , result = Array(length)
	        , key;
	      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	      else while(length > i)result[i] = O[keys[i++]];
	      return result;
	    }
	  }
	  $define(STATIC, OBJECT, {
	    // https://gist.github.com/WebReflection/9353781
	    getOwnPropertyDescriptors: function(object){
	      var O      = toObject(object)
	        , result = {};
	      forEach.call(ownKeys(O), function(key){
	        defineProperty(result, key, descriptor(0, getOwnDescriptor(O, key)));
	      });
	      return result;
	    },
	    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	    values:  createObjectToArray(false),
	    entries: createObjectToArray(true)
	  });
	  $define(STATIC, REGEXP, {
	    // https://gist.github.com/kangax/9698100
	    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
	  });
	}();
	
	/******************************************************************************
	 * Module : es7.abstract-refs                                                 *
	 ******************************************************************************/
	
	// https://github.com/zenparsing/es-abstract-refs
	!function(REFERENCE){
	  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
	  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
	    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
	  
	  $define(STATIC, SYMBOL, {
	    referenceGet: REFERENCE_GET,
	    referenceSet: REFERENCE_SET,
	    referenceDelete: REFERENCE_DELETE
	  });
	  
	  hidden(FunctionProto, REFERENCE_GET, returnThis);
	  
	  function setMapMethods(Constructor){
	    if(Constructor){
	      var MapProto = Constructor[PROTOTYPE];
	      hidden(MapProto, REFERENCE_GET, MapProto.get);
	      hidden(MapProto, REFERENCE_SET, MapProto.set);
	      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
	    }
	  }
	  setMapMethods(Map);
	  setMapMethods(WeakMap);
	}('reference');
	
	/******************************************************************************
	 * Module : core.dict                                                         *
	 ******************************************************************************/
	
	!function(DICT){
	  Dict = function(iterable){
	    var dict = create(null);
	    if(iterable != undefined){
	      if(isIterable(iterable)){
	        forOf(iterable, true, function(key, value){
	          dict[key] = value;
	        });
	      } else assign(dict, iterable);
	    }
	    return dict;
	  }
	  Dict[PROTOTYPE] = null;
	  
	  function DictIterator(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), a: getKeys(iterated), i: 0, k: kind});
	  }
	  createIterator(DictIterator, DICT, function(){
	    var iter = this[ITER]
	      , O    = iter.o
	      , keys = iter.a
	      , kind = iter.k
	      , key;
	    do {
	      if(iter.i >= keys.length){
	        iter.o = undefined;
	        return iterResult(1);
	      }
	    } while(!has(O, key = keys[iter.i++]));
	    if(kind == KEY)  return iterResult(0, key);
	    if(kind == VALUE)return iterResult(0, O[key]);
	                     return iterResult(0, [key, O[key]]);
	  });
	  function createDictIter(kind){
	    return function(it){
	      return new DictIterator(it, kind);
	    }
	  }
	  
	  /*
	   * 0 -> forEach
	   * 1 -> map
	   * 2 -> filter
	   * 3 -> some
	   * 4 -> every
	   * 5 -> find
	   * 6 -> findKey
	   * 7 -> mapPairs
	   */
	  function createDictMethod(type){
	    var isMap    = type == 1
	      , isEvery  = type == 4;
	    return function(object, callbackfn, that /* = undefined */){
	      var f      = ctx(callbackfn, that, 3)
	        , O      = toObject(object)
	        , result = isMap || type == 7 || type == 2 ? new (generic(this, Dict)) : undefined
	        , key, val, res;
	      for(key in O)if(has(O, key)){
	        val = O[key];
	        res = f(val, key, object);
	        if(type){
	          if(isMap)result[key] = res;             // map
	          else if(res)switch(type){
	            case 2: result[key] = val; break      // filter
	            case 3: return true;                  // some
	            case 5: return val;                   // find
	            case 6: return key;                   // findKey
	            case 7: result[res[0]] = res[1];      // mapPairs
	          } else if(isEvery)return false;         // every
	        }
	      }
	      return type == 3 || isEvery ? isEvery : result;
	    }
	  }
	  function createDictReduce(isTurn){
	    return function(object, mapfn, init){
	      assertFunction(mapfn);
	      var O      = toObject(object)
	        , keys   = getKeys(O)
	        , length = keys.length
	        , i      = 0
	        , memo, key, result;
	      if(isTurn)memo = init == undefined ? new (generic(this, Dict)) : Object(init);
	      else if(arguments.length < 3){
	        assert(length, REDUCE_ERROR);
	        memo = O[keys[i++]];
	      } else memo = Object(init);
	      while(length > i)if(has(O, key = keys[i++])){
	        result = mapfn(memo, O[key], key, object);
	        if(isTurn){
	          if(result === false)break;
	        } else memo = result;
	      }
	      return memo;
	    }
	  }
	  var findKey = createDictMethod(6);
	  function includes(object, el){
	    return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
	  }
	  
	  var dictMethods = {
	    keys:    createDictIter(KEY),
	    values:  createDictIter(VALUE),
	    entries: createDictIter(KEY+VALUE),
	    forEach: createDictMethod(0),
	    map:     createDictMethod(1),
	    filter:  createDictMethod(2),
	    some:    createDictMethod(3),
	    every:   createDictMethod(4),
	    find:    createDictMethod(5),
	    findKey: findKey,
	    mapPairs:createDictMethod(7),
	    reduce:  createDictReduce(false),
	    turn:    createDictReduce(true),
	    keyOf:   keyOf,
	    includes:includes,
	    // Has / get / set own property
	    has: has,
	    get: get,
	    set: createDefiner(0),
	    isDict: function(it){
	      return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
	    }
	  };
	  
	  if(REFERENCE_GET)for(var key in dictMethods)!function(fn){
	    function method(){
	      for(var args = [this], i = 0; i < arguments.length;)args.push(arguments[i++]);
	      return invoke(fn, args);
	    }
	    fn[REFERENCE_GET] = function(){
	      return method;
	    }
	  }(dictMethods[key]);
	  
	  $define(GLOBAL + FORCED, {Dict: assignHidden(Dict, dictMethods)});
	}('Dict');
	
	/******************************************************************************
	 * Module : core.$for                                                         *
	 ******************************************************************************/
	
	!function(ENTRIES, FN){  
	  function $for(iterable, entries){
	    if(!(this instanceof $for))return new $for(iterable, entries);
	    this[ITER]    = getIterator(iterable);
	    this[ENTRIES] = !!entries;
	  }
	  
	  createIterator($for, 'Wrapper', function(){
	    return this[ITER].next();
	  });
	  var $forProto = $for[PROTOTYPE];
	  setIterator($forProto, function(){
	    return this[ITER]; // unwrap
	  });
	  
	  function createChainIterator(next){
	    function Iter(I, fn, that){
	      this[ITER]    = getIterator(I);
	      this[ENTRIES] = I[ENTRIES];
	      this[FN]      = ctx(fn, that, I[ENTRIES] ? 2 : 1);
	    }
	    createIterator(Iter, 'Chain', next, $forProto);
	    setIterator(Iter[PROTOTYPE], returnThis); // override $forProto iterator
	    return Iter;
	  }
	  
	  var MapIter = createChainIterator(function(){
	    var step = this[ITER].next();
	    return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
	  });
	  
	  var FilterIter = createChainIterator(function(){
	    for(;;){
	      var step = this[ITER].next();
	      if(step.done || stepCall(this[FN], step.value, this[ENTRIES]))return step;
	    }
	  });
	  
	  assignHidden($forProto, {
	    of: function(fn, that){
	      forOf(this, this[ENTRIES], fn, that);
	    },
	    array: function(fn, that){
	      var result = [];
	      forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
	      return result;
	    },
	    filter: function(fn, that){
	      return new FilterIter(this, fn, that);
	    },
	    map: function(fn, that){
	      return new MapIter(this, fn, that);
	    }
	  });
	  
	  $for.isIterable  = isIterable;
	  $for.getIterator = getIterator;
	  
	  $define(GLOBAL + FORCED, {$for: $for});
	}('entries', safeSymbol('fn'));
	
	/******************************************************************************
	 * Module : core.delay                                                        *
	 ******************************************************************************/
	
	// https://esdiscuss.org/topic/promise-returning-delay-function
	$define(GLOBAL + FORCED, {
	  delay: function(time){
	    return new Promise(function(resolve){
	      setTimeout(resolve, time, true);
	    });
	  }
	});
	
	/******************************************************************************
	 * Module : core.binding                                                      *
	 ******************************************************************************/
	
	!function(_, toLocaleString){
	  // Placeholder
	  core._ = path._ = path._ || {};
	
	  $define(PROTO + FORCED, FUNCTION, {
	    part: part,
	    only: function(numberArguments, that /* = @ */){
	      var fn     = assertFunction(this)
	        , n      = toLength(numberArguments)
	        , isThat = arguments.length > 1;
	      return function(/* ...args */){
	        var length = min(n, arguments.length)
	          , args   = Array(length)
	          , i      = 0;
	        while(length > i)args[i] = arguments[i++];
	        return invoke(fn, args, isThat ? that : this);
	      }
	    }
	  });
	  
	  function tie(key){
	    var that  = this
	      , bound = {};
	    return hidden(that, _, function(key){
	      if(key === undefined || !(key in that))return toLocaleString.call(that);
	      return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
	    })[_](key);
	  }
	  
	  hidden(path._, TO_STRING, function(){
	    return _;
	  });
	  
	  hidden(ObjectProto, _, tie);
	  DESC || hidden(ArrayProto, _, tie);
	  // IE8- dirty hack - redefined toLocaleString is not enumerable
	}(DESC ? uid('tie') : TO_LOCALE, ObjectProto[TO_LOCALE]);
	
	/******************************************************************************
	 * Module : core.object                                                       *
	 ******************************************************************************/
	
	!function(){
	  function define(target, mixin){
	    var keys   = ownKeys(toObject(mixin))
	      , length = keys.length
	      , i = 0, key;
	    while(length > i)defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
	    return target;
	  };
	  $define(STATIC + FORCED, OBJECT, {
	    isObject: isObject,
	    classof: classof,
	    define: define,
	    make: function(proto, mixin){
	      return define(create(proto), mixin);
	    }
	  });
	}();
	
	/******************************************************************************
	 * Module : core.array                                                        *
	 ******************************************************************************/
	
	$define(PROTO + FORCED, ARRAY, {
	  turn: function(fn, target /* = [] */){
	    assertFunction(fn);
	    var memo   = target == undefined ? [] : Object(target)
	      , O      = ES5Object(this)
	      , length = toLength(O.length)
	      , index  = 0;
	    while(length > index)if(fn(memo, O[index], index++, this) === false)break;
	    return memo;
	  }
	});
	if(framework)ArrayUnscopables.turn = true;
	
	/******************************************************************************
	 * Module : core.number                                                       *
	 ******************************************************************************/
	
	!function(numberMethods){  
	  function NumberIterator(iterated){
	    set(this, ITER, {l: toLength(iterated), i: 0});
	  }
	  createIterator(NumberIterator, NUMBER, function(){
	    var iter = this[ITER]
	      , i    = iter.i++;
	    return i < iter.l ? iterResult(0, i) : iterResult(1);
	  });
	  defineIterator(Number, NUMBER, function(){
	    return new NumberIterator(this);
	  });
	  
	  numberMethods.random = function(lim /* = 0 */){
	    var a = +this
	      , b = lim == undefined ? 0 : +lim
	      , m = min(a, b);
	    return random() * (max(a, b) - m) + m;
	  };
	
	  forEach.call(array(
	      // ES3:
	      'round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' +
	      // ES6:
	      'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'
	    ), function(key){
	      var fn = Math[key];
	      if(fn)numberMethods[key] = function(/* ...args */){
	        // ie9- dont support strict mode & convert `this` to object -> convert it to number
	        var args = [+this]
	          , i    = 0;
	        while(arguments.length > i)args.push(arguments[i++]);
	        return invoke(fn, args);
	      }
	    }
	  );
	  
	  $define(PROTO + FORCED, NUMBER, numberMethods);
	}({});
	
	/******************************************************************************
	 * Module : core.string                                                       *
	 ******************************************************************************/
	
	!function(){
	  var escapeHTMLDict = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&apos;'
	  }, unescapeHTMLDict = {}, key;
	  for(key in escapeHTMLDict)unescapeHTMLDict[escapeHTMLDict[key]] = key;
	  $define(PROTO + FORCED, STRING, {
	    escapeHTML:   createReplacer(/[&<>"']/g, escapeHTMLDict),
	    unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
	  });
	}();
	
	/******************************************************************************
	 * Module : core.date                                                         *
	 ******************************************************************************/
	
	!function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR){
	  function createFormat(prefix){
	    return function(template, locale /* = current */){
	      var that = this
	        , dict = locales[has(locales, locale) ? locale : current];
	      function get(unit){
	        return that[prefix + unit]();
	      }
	      return String(template).replace(formatRegExp, function(part){
	        switch(part){
	          case 's'  : return get(SECONDS);                  // Seconds : 0-59
	          case 'ss' : return lz(get(SECONDS));              // Seconds : 00-59
	          case 'm'  : return get(MINUTES);                  // Minutes : 0-59
	          case 'mm' : return lz(get(MINUTES));              // Minutes : 00-59
	          case 'h'  : return get(HOURS);                    // Hours   : 0-23
	          case 'hh' : return lz(get(HOURS));                // Hours   : 00-23
	          case 'D'  : return get(DATE);                     // Date    : 1-31
	          case 'DD' : return lz(get(DATE));                 // Date    : 01-31
	          case 'W'  : return dict[0][get('Day')];           // Day     : Понедельник
	          case 'N'  : return get(MONTH) + 1;                // Month   : 1-12
	          case 'NN' : return lz(get(MONTH) + 1);            // Month   : 01-12
	          case 'M'  : return dict[2][get(MONTH)];           // Month   : Январь
	          case 'MM' : return dict[1][get(MONTH)];           // Month   : Января
	          case 'Y'  : return get(YEAR);                     // Year    : 2014
	          case 'YY' : return lz(get(YEAR) % 100);           // Year    : 14
	        } return part;
	      });
	    }
	  }
	  function addLocale(lang, locale){
	    function split(index){
	      var result = [];
	      forEach.call(array(locale.months), function(it){
	        result.push(it.replace(flexioRegExp, '$' + index));
	      });
	      return result;
	    }
	    locales[lang] = [array(locale.weekdays), split(1), split(2)];
	    return core;
	  }
	  $define(PROTO + FORCED, DATE, {
	    format:    createFormat('get'),
	    formatUTC: createFormat('getUTC')
	  });
	  addLocale(current, {
	    weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
	    months: 'January,February,March,April,May,June,July,August,September,October,November,December'
	  });
	  addLocale('ru', {
	    weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
	    months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' +
	            'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
	  });
	  core.locale = function(locale){
	    return has(locales, locale) ? current = locale : current;
	  };
	  core.addLocale = addLocale;
	}(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');
	
	/******************************************************************************
	 * Module : core.global                                                       *
	 ******************************************************************************/
	
	$define(GLOBAL + FORCED, {global: global});
	
	/******************************************************************************
	 * Module : js.array.statics                                                  *
	 ******************************************************************************/
	
	// JavaScript 1.6 / Strawman array statics shim
	!function(arrayStatics){
	  function setArrayStatics(keys, length){
	    forEach.call(array(keys), function(key){
	      if(key in ArrayProto)arrayStatics[key] = ctx(call, ArrayProto[key], length);
	    });
	  }
	  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
	  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	                  'reduce,reduceRight,copyWithin,fill,turn');
	  $define(STATIC, ARRAY, arrayStatics);
	}({});
	
	/******************************************************************************
	 * Module : web.dom.itarable                                                  *
	 ******************************************************************************/
	
	!function(NodeList){
	  if(framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])){
	    hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
	  }
	  Iterators.NodeList = Iterators[ARRAY];
	}(global.NodeList);
	
	/******************************************************************************
	 * Module : core.log                                                          *
	 ******************************************************************************/
	
	!function(log, enabled){
	  // Methods from https://github.com/DeveloperToolsWG/console-object/blob/master/api.md
	  forEach.call(array('assert,clear,count,debug,dir,dirxml,error,exception,' +
	      'group,groupCollapsed,groupEnd,info,isIndependentlyComposed,log,' +
	      'markTimeline,profile,profileEnd,table,time,timeEnd,timeline,' +
	      'timelineEnd,timeStamp,trace,warn'), function(key){
	    log[key] = function(){
	      if(enabled && key in console)return apply.call(console[key], console, arguments);
	    };
	  });
	  $define(GLOBAL + FORCED, {log: assign(log.log, log, {
	    enable: function(){
	      enabled = true;
	    },
	    disable: function(){
	      enabled = false;
	    }
	  })});
	}({}, true);
	}(typeof self != 'undefined' && self.Math === Math ? self : Function('return this')(), false);
	module.exports = { "default": module.exports, __esModule: true };


/***/ },
/* 18 */
/*!******************************************************!*\
  !*** ../~/babel-runtime/helpers/class-call-check.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 19 */
/*!**************************************************!*\
  !*** ../~/babel-runtime/helpers/create-class.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var key in props) {
	      var prop = props[key];
	      prop.configurable = true;
	      if (prop.value) prop.writable = true;
	    }
	
	    Object.defineProperties(target, props);
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 20 */
/*!*****************************************************!*\
  !*** ../~/babel-runtime/helpers/interop-require.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 21 */
/*!*****************************************************!*\
  !*** ../~/babel-runtime/helpers/sliced-to-array.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 17)["default"];
	
	exports["default"] = function (arr, i) {
	  if (Array.isArray(arr)) {
	    return arr;
	  } else if (_core.$for.isIterable(Object(arr))) {
	    var _arr = [];
	
	    for (var _iterator = _core.$for.getIterator(arr), _step; !(_step = _iterator.next()).done;) {
	      _arr.push(_step.value);
	
	      if (i && _arr.length === i) break;
	    }
	
	    return _arr;
	  } else {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 22 */
/*!*******************************!*\
  !*** ../lib/border-scheme.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var backgroundCharacter = " ";
	
	exports.backgroundCharacter = backgroundCharacter;
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
	                                no: backgroundCharacter,
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
	                                no: backgroundCharacter,
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
	                        no: backgroundCharacter,
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
	                        no: backgroundCharacter,
	                        yes: "─"
	                    }
	                },
	                // ┌─┐
	                // │x│
	                // └─┘
	                mid: backgroundCharacter,
	                max: {
	                    // ┌─┐
	                    // │ │
	                    // └x┘
	                    bottom: {
	                        no: backgroundCharacter,
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
	                                no: backgroundCharacter,
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
	                        no: backgroundCharacter,
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
	                                no: backgroundCharacter,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGE1M2IzMGUwNmRhZDM2NjU1N2MiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LmNzcz8wOTJjIiwid2VicGFjazovLy8uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9saWIvdHVpLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9yZW5kZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2Nzcy1sb2FkZXIvY3NzVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL34vY3NzLWxvYWRlci9tZXJnZUltcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vaW5kZXguY3NzIiwid2VicGFjazovLy8uLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi90dWktdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL3R1aS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9yZW5kZXJzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9yZW5kZXJzL2Nocm9tZS5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL3JlbmRlcnMvYW5zaS5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL3JlbmRlcnMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWQtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9ib3JkZXItc2NoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7cUJDdENPLG9CQUFhOztLQUNaLFVBQVUsdUJBQU8sV0FBSSxFQUFyQixVQUFVOztBQUVsQixzQkFBcUIsQ0FBQyxZQUFZO0FBQzlCLFNBQUksT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7QUFFakUsYUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4RSxTQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM5QyxnQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDekMsTUFBTTtBQUNILGdCQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQzFEO0VBQ0osQ0FBQyxDOzs7Ozs7Ozs7OztBQ1pGLFFBQU8sQ0FBQyxVQUFVLEdBQUcsbUJBQU8sQ0FBQywwQkFBbUIsQ0FBQyxDQUFDO0FBQ2xELFFBQU8sQ0FBQyxXQUFXLEdBQUcsbUJBQU8sQ0FBQyxzQkFBZSxDQUFDLENBQUMsV0FBVyxDOzs7Ozs7Ozs7QUNEMUQ7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVMsZUFBZTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckM7QUFDQSwrQkFBOEI7QUFDOUIsOEJBQTZCO0FBQzdCLGdDQUErQjtBQUMvQixvQ0FBbUM7QUFDbkMsVUFBUyw4QkFBOEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsZUFBZTtBQUMxQixNQUFLLFdBQVcsZUFBZTtBQUMvQjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWixNQUFLLFVBQVU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLGNBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixxQ0FBcUM7QUFDMUQ7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXFCLDBCQUEwQjtBQUMvQztBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWdFLE9BQU87QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLFlBQVk7QUFDL0I7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkMsSUFBRztBQUNILEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCLDJEQUEyRDtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckM7QUFDQSx1Q0FBc0M7QUFDdEMsaUNBQWdDO0FBQ2hDLGdDQUErQjtBQUMvQixnQ0FBK0I7QUFDL0IsNkNBQTRDO0FBQzVDLFlBQVcsOEJBQThCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFtQyxzQkFBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUgsNkJBQTRCLHNDQUFzQztBQUNsRSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSx3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBLDZCQUE0QixXQUFXO0FBQ3ZDLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEI7QUFDQTtBQUNBLHNCQUFxQiw0QkFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDLEdBQUc7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmLGVBQWM7QUFDZCxlQUFjO0FBQ2QsaUJBQWdCO0FBQ2hCLGlCQUFnQjtBQUNoQixJQUFHLHVCQUF1QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSw0REFBMkQ7QUFDM0QsSUFBRztBQUNILEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywyQ0FBMEM7QUFDMUMsK0NBQThDO0FBQzlDLHlDQUF3QztBQUN4Qyw2Q0FBNEM7QUFDNUMsd0NBQXVDO0FBQ3ZDLDRDQUEyQztBQUMzQyxrREFBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLGlEQUFnRDtBQUNoRCxrREFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELHdDQUF1QztBQUN2QyxrREFBaUQ7QUFDakQsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsaUNBQWlDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTBCLGVBQWU7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsR0FBRzs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCw2QkFBNEI7QUFDNUI7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHLEVBQUU7QUFDTCxFQUFDLEdBQUc7QUFDSixFQUFDO0FBQ0QsbUJBQWtCOzs7Ozs7Ozs7O0FDbnlFbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7O0FDUkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCwyQjs7Ozs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBLDZEQUE0RCxrQ0FBa0M7QUFDOUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7Ozs7Ozs7O0FDdEJPLEtBQUksbUJBQW1CLEdBQUcsR0FBRyxDQUFDOztTQUExQixtQkFBbUIsR0FBbkIsbUJBQW1CO0FBRXZCLEtBQUksWUFBWSxHQUFHO0FBQ3RCLE1BQUMsRUFBRTtBQUNDLFlBQUcsRUFBRTtBQUNELGNBQUMsRUFBRTtBQUNDLG9CQUFHLEVBQUU7Ozs7QUFJRCx5QkFBSSxFQUFFO0FBQ0YsMkJBQUUsRUFBRTtBQUNBLGdDQUFHLEVBQUU7QUFDRCxtQ0FBRSxFQUFFLG1CQUFtQjtBQUN2QixvQ0FBRyxFQUFFLEdBQUc7OEJBQ1g7MEJBQ0o7QUFDRCw0QkFBRyxFQUFFO0FBQ0QsZ0NBQUcsRUFBRTtBQUNELG1DQUFFLEVBQUUsR0FBRztBQUNQLG9DQUFHLEVBQUUsR0FBRzs4QkFDWDswQkFDSjtzQkFDSjtrQkFDSjtBQUNELG9CQUFHLEVBQUU7Ozs7QUFJRCx5QkFBSSxFQUFFO0FBQ0YsMkJBQUUsRUFBRTtBQUNBLG1DQUFNLEVBQUU7QUFDSixtQ0FBRSxFQUFFLG1CQUFtQjtBQUN2QixvQ0FBRyxFQUFFLEdBQUc7OEJBQ1g7MEJBQ0o7QUFDRCw0QkFBRyxFQUFFO0FBQ0QsbUNBQU0sRUFBRTtBQUNKLG1DQUFFLEVBQUUsR0FBRztBQUNQLG9DQUFHLEVBQUUsR0FBRzs4QkFDWDswQkFDSjtzQkFDSjtrQkFDSjtBQUNELG9CQUFHLEVBQUU7Ozs7QUFJRCx5QkFBSSxFQUFFO0FBQ0YsMkJBQUUsRUFBRSxtQkFBbUI7QUFDdkIsNEJBQUcsRUFBRSxHQUFHO3NCQUNYO2tCQUNKO2NBQ0o7VUFDSjtBQUNELFlBQUcsRUFBRTtBQUNELGNBQUMsRUFBRTtBQUNDLG9CQUFHLEVBQUU7Ozs7QUFJRCx3QkFBRyxFQUFFO0FBQ0QsMkJBQUUsRUFBRSxtQkFBbUI7QUFDdkIsNEJBQUcsRUFBRSxHQUFHO3NCQUNYO2tCQUNKOzs7O0FBSUQsb0JBQUcsRUFBRSxtQkFBbUI7QUFDeEIsb0JBQUcsRUFBRTs7OztBQUlELDJCQUFNLEVBQUU7QUFDSiwyQkFBRSxFQUFFLG1CQUFtQjtBQUN2Qiw0QkFBRyxFQUFFLEdBQUc7c0JBQ1g7a0JBQ0o7Y0FDSjtVQUNKO0FBQ0QsWUFBRyxFQUFFO0FBQ0QsY0FBQyxFQUFFO0FBQ0Msb0JBQUcsRUFBRTs7OztBQUlELDBCQUFLLEVBQUU7QUFDSCwyQkFBRSxFQUFFO0FBQ0EsZ0NBQUcsRUFBRTtBQUNELG1DQUFFLEVBQUUsbUJBQW1CO0FBQ3ZCLG9DQUFHLEVBQUUsR0FBRzs4QkFDWDswQkFDSjtBQUNELDRCQUFHLEVBQUU7QUFDRCxnQ0FBRyxFQUFFO0FBQ0QsbUNBQUUsRUFBRSxHQUFHO0FBQ1Asb0NBQUcsRUFBRSxHQUFHOzhCQUNYOzBCQUNKO3NCQUNKO2tCQUNKO0FBQ0Qsb0JBQUcsRUFBRTs7OztBQUlELDBCQUFLLEVBQUU7QUFDSCwyQkFBRSxFQUFFLG1CQUFtQjtBQUN2Qiw0QkFBRyxFQUFFLEdBQUc7c0JBQ1g7a0JBQ0o7QUFDRCxvQkFBRyxFQUFFOzs7O0FBSUQsMEJBQUssRUFBRTtBQUNILDJCQUFFLEVBQUU7QUFDQSxtQ0FBTSxFQUFFO0FBQ0osbUNBQUUsRUFBRSxtQkFBbUI7QUFDdkIsb0NBQUcsRUFBRSxHQUFHOzhCQUNYOzBCQUNKO0FBQ0QsNEJBQUcsRUFBRTtBQUNELG1DQUFNLEVBQUU7QUFDSixtQ0FBRSxFQUFFLEdBQUc7QUFDUCxvQ0FBRyxFQUFFLEdBQUc7OEJBQ1g7MEJBQ0o7c0JBQ0o7a0JBQ0o7Y0FDSjtVQUNKO01BQ0o7RUFDSixDQUFDO1NBbklTLFlBQVksR0FBWixZQUFZLEMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDBhNTNiMzBlMDZkYWQzNjY1NTdjXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQge1R1aUVsZW1lbnR9IGZyb20gJy4uJztcblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudCA9IG5ldyBUdWlFbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dWktZG9tJykpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1aS1jbGknKS5pbm5lckhUTUwgPSBlbGVtZW50LnRvU3RyaW5nKCdodG1sJyk7XG4gICAgaWYgKC9QaGFudG9tSlMvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQudG9TdHJpbmcoJ2Fuc2knKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgZWxlbWVudC50b1N0cmluZygnY2hyb21lJykpO1xuICAgIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsImV4cG9ydHMuVHVpRWxlbWVudCA9IHJlcXVpcmUoJy4vbGliL3R1aS1lbGVtZW50Jyk7XG5leHBvcnRzLmFkZFJlbmRlcmVyID0gcmVxdWlyZSgnLi9saWIvcmVuZGVycycpLmFkZFJlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vaW5kZXguanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL2V4YW1wbGUvaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS9Vc2Vycy9henByb2R1Y3Rpb24vUHJvamVjdHMvaHRtbC10dWkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9leGFtcGxlL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS9Vc2Vycy9henByb2R1Y3Rpb24vUHJvamVjdHMvaHRtbC10dWkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9leGFtcGxlL2luZGV4LmNzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9jc3NUb1N0cmluZy5qc1wiKSgpO1xucmVxdWlyZShcIi9Vc2Vycy9henByb2R1Y3Rpb24vUHJvamVjdHMvaHRtbC10dWkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbWVyZ2VJbXBvcnQuanNcIikoZXhwb3J0cywgcmVxdWlyZShcIi0hL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9pbmRleC5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLm1jIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6ICMwZmY7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWVudV9faXRlbSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbi5tZW51X19pdGVtLXNob3J0Y3V0IHtcXG4gICAgY29sb3I6ICNmZjA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxufVxcblxcbi5wYW5lbCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICMwMGY7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xcbn1cXG5cXG4ucGFuZWxfX2NhcHRpb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblxcbi5maWxlLWxpc3Qge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5maWxlLFxcbi5oZWFkZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmlsZV9zdGF0ZV9mb2N1c2VkIHtcXG4gICAgYmFja2dyb3VuZDogIzBmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5maWxlX3N0YXRlX2ZvY3VzZWQgLmZpbGVfX25hbWUsXFxuLmZpbGVfc3RhdGVfZm9jdXNlZCAuZmlsZV9fc2l6ZSB7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5maWxlX19uYW1lLFxcbi5maWxlX19zaXplLFxcbi5maWxlX190aW1lLFxcbi5oZWFkZXJfX25hbWUsXFxuLmhlYWRlcl9fdGltZSxcXG4uaGVhZGVyX19zaXplIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZmlsZV9fbmFtZSxcXG4uaGVhZGVyX19uYW1lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2ZmZjtcXG59XFxuXFxuLmZpbGVfX3NpemUsXFxuLmhlYWRlcl9fc2l6ZSB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNmZmY7XFxufVxcblxcbi5maWxlX19zaXplIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5maWxlX190aW1lLFxcbi5oZWFkZXJfX3RpbWV7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZmlsZV9fbmFtZV90eXBlX2ZpbGUge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XFxufVxcblxcbi5maWxlX3N0YXRlX2ZvY3VzZWQgLmZpbGVfX25hbWVfdHlwZV9maWxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyX19uYW1lLFxcbi5oZWFkZXJfX3RpbWUsXFxuLmhlYWRlcl9fc2l6ZSB7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnNvbGUge1xcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxufVxcblxcbi5jb250cm9scyB7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4uY29udHJvbCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLmNvbnRyb2xfX251bWJlcixcXG4uY29udHJvbF9fbmFtZSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uY29udHJvbF9fbnVtYmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb250cm9sX19uYW1lIHtcXG4gICAgd2lkdGg6IDZweDtcXG4gICAgYmFja2dyb3VuZDogIzBmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2Nzcy1sb2FkZXIhLi9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNJRTkgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIDlcXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNJRTkoKTtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VUZXh0KHNvdXJjZSwgaWQsIHJlcGxhY2VtZW50KSB7XHJcblx0dmFyIGJvdW5kYXJpZXMgPSBbXCIvKiogPj5cIiArIGlkICsgXCIgKiovXCIsIFwiLyoqIFwiICsgaWQgKyBcIjw8ICoqL1wiXTtcclxuXHR2YXIgc3RhcnQgPSBzb3VyY2UubGFzdEluZGV4T2YoYm91bmRhcmllc1swXSk7XHJcblx0dmFyIHdyYXBwZWRSZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50XHJcblx0XHQ/IChib3VuZGFyaWVzWzBdICsgcmVwbGFjZW1lbnQgKyBib3VuZGFyaWVzWzFdKVxyXG5cdFx0OiBcIlwiO1xyXG5cdGlmIChzb3VyY2UubGFzdEluZGV4T2YoYm91bmRhcmllc1swXSkgPj0gMCkge1xyXG5cdFx0dmFyIGVuZCA9IHNvdXJjZS5sYXN0SW5kZXhPZihib3VuZGFyaWVzWzFdKSArIGJvdW5kYXJpZXNbMV0ubGVuZ3RoO1xyXG5cdFx0cmV0dXJuIHNvdXJjZS5zbGljZSgwLCBzdGFydCkgKyB3cmFwcGVkUmVwbGFjZW1lbnQgKyBzb3VyY2Uuc2xpY2UoZW5kKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHNvdXJjZSArIHdyYXBwZWRSZXBsYWNlbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCwgaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiAqL1wiO1xyXG5cdFx0XHRjc3MgPSBcIkBpbXBvcnQgdXJsKFxcXCJkYXRhOnRleHQvY3NzO2Jhc2U2NCxcIiArIGJ0b2EoY3NzKSArIFwiXFxcIilcIjtcclxuXHRcdH0gY2F0Y2goZSkge31cclxuXHR9XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge2dldE5vcm1hbGl6ZWRDbGllbnRSZWN0T2YsIG1lcmdlQm94ZXMsIHNoaWZ0Qm94LCBjb21wcmVzc0JveH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgVHVpVGV4dCBmcm9tICcuL3R1aS10ZXh0JztcbmltcG9ydCB7ZnJvbVBvc2l0aW9uQW5kU3R5bGV9IGZyb20gJy4vdHVpLXN5bWJvbCc7XG5pbXBvcnQge2JveFJlbmRlckZhY3Rvcnl9IGZyb20gJy4vcmVuZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1aUVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IGVsZW1lbnQgbm9kZSBpcyBzdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbm9kZS5vd25lckRvY3VtZW50ICYmICFub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBzZXJpYWxpemUgZGV0YWNoZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtDc3NTdHlsZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0NsaWVudFJlY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJvdW5kaW5nQm94ID0gZ2V0Tm9ybWFsaXplZENsaWVudFJlY3RPZihub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1R1aUVsZW1lbnRbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGVudCA9IEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKS5yZWR1Y2UoKGNvbnRlbnQsIG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5wdXNoKG5ldyBUdWlFbGVtZW50KG5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5wdXNoKG5ldyBUdWlUZXh0KG5vZGUsIHRoaXMuc3R5bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge1R1aVN5bWJvbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9ib3hDaGFyYWN0ZXJBdCh4LCB5KSB7XG4gICAgICAgIC8qIGpzaGludCBtYXhjb21wbGV4aXR5OiAxMCAqL1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmJvdW5kaW5nQm94LndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5ib3VuZGluZ0JveC5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCA9PT0gMCA/ICdtaW4nIDogeCA9PT0gd2lkdGggLSAxID8gJ21heCcgOiAnbWlkJyxcbiAgICAgICAgICAgIHk6IHkgPT09IDAgPyAnbWluJyA6IHkgPT09IGhlaWdodCAtIDEgPyAnbWF4JyA6ICdtaWQnLFxuICAgICAgICAgICAgdG9wOiBwYXJzZUludCh0aGlzLnN0eWxlLmJvcmRlclRvcFdpZHRoKSA/ICd5ZXMnIDogJ25vJyxcbiAgICAgICAgICAgIHJpZ2h0OiBwYXJzZUludCh0aGlzLnN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpID8gJ3llcycgOiAnbm8nLFxuICAgICAgICAgICAgYm90dG9tOiBwYXJzZUludCh0aGlzLnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKSA/ICd5ZXMnIDogJ25vJyxcbiAgICAgICAgICAgIGxlZnQ6IHBhcnNlSW50KHRoaXMuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSA/ICd5ZXMnIDogJ25vJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmcm9tUG9zaXRpb25BbmRTdHlsZShwb3NpdGlvbiwgdGhpcy5zdHlsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZW5kZXJCb3goKSB7XG4gICAgICAgIHZhciBib3ggPSBbXTtcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmJvdW5kaW5nQm94LmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBib3gucHVzaChbXSk7XG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMuYm91bmRpbmdCb3gud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGJveFt5XVt4XSA9IHRoaXMuX2JveENoYXJhY3RlckF0KHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZW5kZXJDb250ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50Lm1hcCgoaXRlbSkgPT4gaXRlbS50b0FycmF5KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgdG9BcnJheSgpIHtcbiAgICAgICAgdmFyIGJveCA9IHNoaWZ0Qm94KHRoaXMuX3JlbmRlckJveCgpLCB0aGlzLmJvdW5kaW5nQm94KTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLl9yZW5kZXJDb250ZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIFtib3hdLmNvbmNhdChjb250ZW50KS5yZWR1Y2UobWVyZ2VCb3hlcywgW10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgdG9PcHRpbWl6ZWRBcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIGNvbXByZXNzQm94KHRoaXMudG9BcnJheSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICB0b1N0cmluZyh0eXBlID0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHJldHVybiBib3hSZW5kZXJGYWN0b3J5KHR5cGUpKHRoaXMudG9PcHRpbWl6ZWRBcnJheSgpKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9saWIvdHVpLWVsZW1lbnQuanNcbiAqKi8iLCJ2YXIgYm94UmVuZGVycyA9IHt9O1xudmFyIHN5bWJvbFJlbmRlcnMgPSB7fTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJveFJlbmRlckZhY3RvcnkodHlwZSkge1xuICAgIGlmICghYm94UmVuZGVycy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHN1Y2ggYm94IHJlbmRlciBgJyArIHR5cGUgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBib3hSZW5kZXJzW3R5cGVdO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ltYm9sUmVuZGVyRmFjdG9yeSh0eXBlKSB7XG4gICAgaWYgKCFzeW1ib2xSZW5kZXJzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc3VjaCBzeW1ib2wgcmVuZGVyIGAnICsgdHlwZSArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN5bWJvbFJlbmRlcnNbdHlwZV07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBib3hcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN5bWJvbFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVuZGVyZXIodHlwZSwge2JveCwgc3ltYm9sfSkge1xuICAgIGJveFJlbmRlcnNbdHlwZV0gPSBib3g7XG4gICAgc3ltYm9sUmVuZGVyc1t0eXBlXSA9IHN5bWJvbDtcbn1cblxuYWRkUmVuZGVyZXIoJ2RlZmF1bHQnLCByZXF1aXJlKCcuL2RlZmF1bHQnKSk7XG5hZGRSZW5kZXJlcignY2hyb21lJywgcmVxdWlyZSgnLi9jaHJvbWUnKSk7XG5hZGRSZW5kZXJlcignYW5zaScsIHJlcXVpcmUoJy4vYW5zaScpKTtcbmFkZFJlbmRlcmVyKCdodG1sJywgcmVxdWlyZSgnLi9odG1sJykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3JlbmRlcnMvaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBpbXBvcnRlZExpc3QsIG1lZGlhKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGltcG9ydGVkTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBpbXBvcnRlZExpc3RbaV07XHJcblx0XHRpZihtZWRpYSAmJiAhaXRlbVsyXSlcclxuXHRcdFx0aXRlbVsyXSA9IG1lZGlhO1xyXG5cdFx0ZWxzZSBpZihtZWRpYSkge1xyXG5cdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYSArIFwiKVwiO1xyXG5cdFx0fVxyXG5cdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdH1cclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY3NzLWxvYWRlci9tZXJnZUltcG9ydC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudHVpLWRvbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDFweDtcXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50dWktZG9tICoge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnR1aS1jbGkge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBsaW5lLWhlaWdodDogMTNweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2Nzcy1sb2FkZXIhLi4vaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtiYWNrZ3JvdW5kQ2hhcmFjdGVyfSBmcm9tICcuL2JvcmRlci1zY2hlbWUnO1xuaW1wb3J0IFR1aVN5bWJvbCBmcm9tICcuL3R1aS1zeW1ib2wuanMnO1xuaW1wb3J0IHtlbXB0eVN5bWJvbH0gZnJvbSAnLi90dWktc3ltYm9sLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRDbGllbnRSZWN0T2YoYm91bmRpbmdCb3gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib3R0b206IE1hdGgucm91bmQoYm91bmRpbmdCb3guYm90dG9tKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKGJvdW5kaW5nQm94LmhlaWdodCksXG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQoYm91bmRpbmdCb3gubGVmdCksXG4gICAgICAgIHJpZ2h0OiBNYXRoLnJvdW5kKGJvdW5kaW5nQm94LnJpZ2h0KSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKGJvdW5kaW5nQm94LnRvcCksXG4gICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJvdW5kaW5nQm94LndpZHRoKVxuICAgIH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYW5zcGFyZW50Q29sb3IoY29sb3IpIHtcbiAgICByZXR1cm4gY29sb3IgPT09ICdyZ2JhKDAsIDAsIDAsIDApJyB8fCBjb2xvciA9PT0gJ3RyYW5zcGFyZW50Jztcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJcbiAqIEBwYXJhbSB7Q3NzU3R5bGV9IHN0eWxlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhbnNwYXJlbnRDaGFyYWN0ZXIoY2hhciwgc3R5bGUpIHtcbiAgICByZXR1cm4gY2hhciA9PT0gYmFja2dyb3VuZENoYXJhY3RlciAmJiBpc1RyYW5zcGFyZW50Q29sb3Ioc3R5bGUuYmFja2dyb3VuZENvbG9yKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHt7eDogc3RyaW5nLCB5OiBzdHJpbmcsIHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcsIGJvdHRvbTogc3RyaW5nLCByaWdodDogc3RyaW5nfX0gb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHNjaGVtZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBDaGFyYWN0ZXIob3B0aW9ucywgc2NoZW1lKSB7XG4gICAgdmFyIHByb3BlcnR5TmFtZSA9IE9iamVjdC5rZXlzKHNjaGVtZSlbMF07XG4gICAgdmFyIHZhbHVlID0gc2NoZW1lW3Byb3BlcnR5TmFtZV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZVtvcHRpb25zW3Byb3BlcnR5TmFtZV1dO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBsb29rdXBDaGFyYWN0ZXIob3B0aW9ucywgdmFsdWUpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3t4OiBzdHJpbmcsIHk6IHN0cmluZ319IG9wdGlvbnNcbiAqIEBwYXJhbSB7Q3NzU3R5bGV9IHN0eWxlXG4gKiBAcmV0dXJucyB7e2NvbG9yOiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nfX1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBDaGFyYWN0ZXJTdHlsZShvcHRpb25zLCBzdHlsZSkge1xuICAgIHZhciBjb2xvciA9IHN0eWxlLmNvbG9yO1xuICAgIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICBpZiAob3B0aW9ucy54ID09PSAnbWluJykge1xuICAgICAgICBjb2xvciA9IHN0eWxlLmJvcmRlckxlZnRDb2xvcjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy54ID09PSAnbWF4Jykge1xuICAgICAgICBjb2xvciA9IHN0eWxlLmJvcmRlclJpZ2h0Q29sb3I7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMueSA9PT0gJ21pbicgJiYgb3B0aW9ucy54ID09PSAnbWlkJykge1xuICAgICAgICBjb2xvciA9IHN0eWxlLmJvcmRlclRvcENvbG9yO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnkgPT09ICdtYXgnICYmIG9wdGlvbnMueCA9PT0gJ21pZCcpIHtcbiAgICAgICAgY29sb3IgPSBzdHlsZS5ib3JkZXJCb3R0b21Db2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NvbG9yLCBiYWNrZ3JvdW5kQ29sb3J9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7Kn0gY29udGVudFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5mdW5jdGlvbiBmaWxsQXJyYXkobGVuZ3RoLCBjb250ZW50KSB7XG4gICAgdmFyIGFycmF5ID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2ldID0gY29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gYm94XG4gKiBAcGFyYW0ge0NsaWVudFJlY3R9IGJvdW5kaW5nQm94XG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGlmdEJveChib3gsIGJvdW5kaW5nQm94KSB7XG4gICAgdmFyIHdpZHRoID0gYm91bmRpbmdCb3gud2lkdGg7XG4gICAgdmFyIGxlZnQgPSBib3VuZGluZ0JveC5sZWZ0O1xuICAgIHZhciB0b3AgPSBib3VuZGluZ0JveC50b3A7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gZmlsbEFycmF5KGxlZnQsIGVtcHR5U3ltYm9sKTtcbiAgICB2YXIgcGFkZGluZ1RvcCA9IGZpbGxBcnJheShsZWZ0ICsgd2lkdGgsIGVtcHR5U3ltYm9sKTtcblxuICAgIGJveC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgcm93LnVuc2hpZnQuYXBwbHkocm93LCBwYWRkaW5nTGVmdCk7XG4gICAgfSk7XG5cbiAgICBmb3IgKDt0b3AtLTspIHtcbiAgICAgICAgYm94LnVuc2hpZnQocGFkZGluZ1RvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJveDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHsoVHVpU3ltYm9sKX0gc3ltYm9sQVxuICogQHBhcmFtIHsoVHVpU3ltYm9sKX0gc3ltYm9sQlxuICogQHJldHVybnMgeyhUdWlTeW1ib2wpfVxuICovXG5mdW5jdGlvbiBtZXJnZVN5bWJvbHMoc3ltYm9sQSwgc3ltYm9sQikge1xuICAgIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBpc1RyYW5zcGFyZW50Q29sb3Ioc3ltYm9sQi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpID9cbiAgICAgICAgc3ltYm9sQS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgOiBzeW1ib2xCLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcblxuICAgIHZhciBjb2xvciA9IHN5bWJvbEIuY2hhciA9PT0gYmFja2dyb3VuZENoYXJhY3RlciA/IHN5bWJvbEEuc3R5bGUuY29sb3IgOiBzeW1ib2xCLnN0eWxlLmNvbG9yO1xuICAgIHZhciBjaGFyID0gc3ltYm9sQi5jaGFyID09PSBiYWNrZ3JvdW5kQ2hhcmFjdGVyID8gc3ltYm9sQS5jaGFyIDogc3ltYm9sQi5jaGFyO1xuXG4gICAgcmV0dXJuIG5ldyBUdWlTeW1ib2woY2hhciwge2NvbG9yLCBiYWNrZ3JvdW5kQ29sb3J9KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBsYXllckFcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gbGF5ZXJCXG4gKiBAcmV0dXJucyB7e21heFdpZHRoOiBudW1iZXIsIG1heEhlaWdodDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0TWF4RGltZW5zaW9ucyhsYXllckEsIGxheWVyQikge1xuICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWF4KGxheWVyQVswXSAmJiBsYXllckFbMF0ubGVuZ3RoIHx8IDAsIGxheWVyQlswXSAmJiBsYXllckJbMF0ubGVuZ3RoIHx8IDApO1xuICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heChsYXllckEubGVuZ3RoLCBsYXllckIubGVuZ3RoKTtcblxuICAgIHJldHVybiB7bWF4V2lkdGgsIG1heEhlaWdodH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gbGF5ZXJBXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGxheWVyQlxuICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUJveGVzKGxheWVyQSwgbGF5ZXJCKSB7XG4gICAgdmFyIGJveCA9IFtdO1xuICAgIHZhciB7bWF4V2lkdGgsIG1heEhlaWdodH0gPSBnZXRNYXhEaW1lbnNpb25zKGxheWVyQSwgbGF5ZXJCKTtcblxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgbWF4SGVpZ2h0OyB5KyspIHtcbiAgICAgICAgYm94LnB1c2goW10pO1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG1heFdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIGJveFt5XVt4XSA9IG1lcmdlU3ltYm9scyhcbiAgICAgICAgICAgICAgICBsYXllckFbeV0gJiYgbGF5ZXJBW3ldW3hdIHx8IGVtcHR5U3ltYm9sLFxuICAgICAgICAgICAgICAgIGxheWVyQlt5XSAmJiBsYXllckJbeV1beF0gfHwgZW1wdHlTeW1ib2xcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm94O1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0geyhUdWlTeW1ib2wpfSBzeW1ib2xBXG4gKiBAcGFyYW0geyhUdWlTeW1ib2wpfSBzeW1ib2xCXG4gKi9cbmZ1bmN0aW9uIGlzU2FtZVN0eWxlU3ltYm9sKHN5bWJvbEEsIHN5bWJvbEIpIHtcbiAgICByZXR1cm4gc3ltYm9sQS5zdHlsZS5jb2xvciA9PT0gc3ltYm9sQi5zdHlsZS5jb2xvciAmJlxuICAgICAgICBzeW1ib2xBLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gc3ltYm9sQi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7KFR1aVN5bWJvbCl9IHN5bWJvbEFcbiAqIEBwYXJhbSB7KFR1aVN5bWJvbCl9IHN5bWJvbEJcbiAqIEByZXR1cm5zIHsoVHVpU3ltYm9sfG51bGwpW119XG4gKi9cbmZ1bmN0aW9uIHVuaXRlU3ltYm9scyhzeW1ib2xBLCBzeW1ib2xCKSB7XG4gICAgaWYgKCFzeW1ib2xBKSB7XG4gICAgICAgIHJldHVybiBbbnVsbCwgc3ltYm9sQl07XG4gICAgfVxuXG4gICAgaWYgKGlzU2FtZVN0eWxlU3ltYm9sKHN5bWJvbEEsIHN5bWJvbEIpKSB7XG4gICAgICAgIHJldHVybiBbbmV3IFR1aVN5bWJvbChzeW1ib2xBLmNoYXIgKyBzeW1ib2xCLmNoYXIsIHN5bWJvbEEuc3R5bGUpLCBudWxsXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3N5bWJvbEEsIHN5bWJvbEJdO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzc0JveChib3gpIHtcbiAgICByZXR1cm4gYm94Lm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cucmVkdWNlKChyb3csIHN5bWJvbCkgPT4ge1xuICAgICAgICAgICAgdmFyIGxhc3RTeW1ib2wgPSByb3dbcm93Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIFt1bml0ZWRTeW1ib2xzLCBleHRyYVN5bWJvbF0gPSB1bml0ZVN5bWJvbHMobGFzdFN5bWJvbCwgc3ltYm9sKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRlZFN5bWJvbHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChleHRyYVN5bWJvbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVuaXRlZFN5bWJvbHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3dbcm93Lmxlbmd0aCAtIDFdID0gdW5pdGVkU3ltYm9scztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV4dHJhU3ltYm9sICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goZXh0cmFTeW1ib2wpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9LCBbXSk7XG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9saWIvdXRpbHMuanNcbiAqKi8iLCJpbXBvcnQge2dldE5vcm1hbGl6ZWRDbGllbnRSZWN0T2YsIHNoaWZ0Qm94fSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBUdWlTeW1ib2wgZnJvbSAnLi90dWktc3ltYm9sJztcbmltcG9ydCB7Ym94UmVuZGVyRmFjdG9yeX0gZnJvbSAnLi9yZW5kZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHVpVGV4dCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0ge0Nzc1N0eWxlfSBbc3R5bGU9bnVsbF1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihub2RlLCBzdHlsZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT25seSB0ZXh0IG5vZGUgaXMgc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5vZGUub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHNlcmlhbGl6ZSBkZXRhY2hlZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmFuZ2UgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Q2xpZW50UmVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm91bmRpbmdCb3ggPSBnZXROb3JtYWxpemVkQ2xpZW50UmVjdE9mKHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZSB8fCBub2RlLnBhcmVudE5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZW5kZXJUZXh0Qm94KCkge1xuICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuY29udGVudC5yZXBsYWNlKC9cXHNcXHMrL2csICcgJyk7XG5cbiAgICAgICAgdmFyIHN5bWJvbHMgPSBjb250ZW50LnNwbGl0KCcnKS5tYXAoKHN5bWJvbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUdWlTeW1ib2woc3ltYm9sLCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuc3R5bGUuY29sb3IsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBbc3ltYm9sc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAgICAgKi9cbiAgICB0b0FycmF5KCkge1xuICAgICAgICBpZiAodGhpcy5ib3VuZGluZ0JveC53aWR0aCA9PT0gMCB8fCB0aGlzLmJvdW5kaW5nQm94LmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtbXV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hpZnRCb3godGhpcy5fcmVuZGVyVGV4dEJveCgpLCB0aGlzLmJvdW5kaW5nQm94KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICB0b1N0cmluZyh0eXBlID0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHJldHVybiBib3hSZW5kZXJGYWN0b3J5KHR5cGUpKHRoaXMudG9BcnJheSgpKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9saWIvdHVpLXRleHQuanNcbiAqKi8iLCJpbXBvcnQge2JvcmRlclNjaGVtZSwgYmFja2dyb3VuZENoYXJhY3Rlcn0gZnJvbSAnLi9ib3JkZXItc2NoZW1lJztcbmltcG9ydCB7aXNUcmFuc3BhcmVudENoYXJhY3RlciwgbG9va3VwQ2hhcmFjdGVyLCBsb29rdXBDaGFyYWN0ZXJTdHlsZX0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge3N5bWJvbFJlbmRlckZhY3Rvcnl9IGZyb20gJy4vcmVuZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1aVN5bWJvbCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhclxuICAgICAqIEBwYXJhbSB7e2NvbG9yOiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nfX0gc3R5bGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjaGFyLCBzdHlsZSkge1xuICAgICAgICBpZiAoaXNUcmFuc3BhcmVudENoYXJhY3RlcihjaGFyLCBzdHlsZSkpIHtcbiAgICAgICAgICAgIGNoYXIgPSBiYWNrZ3JvdW5kQ2hhcmFjdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFyID0gY2hhcjtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ3wqfVxuICAgICAqL1xuICAgIHRvU3RyaW5nKHR5cGUgPSAnZGVmYXVsdCcpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFJlbmRlckZhY3RvcnkodHlwZSkodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGVtcHR5U3ltYm9sID0gbmV3IFR1aVN5bWJvbChiYWNrZ3JvdW5kQ2hhcmFjdGVyLCB7XG4gICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJ1xufSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7e3g6IHN0cmluZywgeTogc3RyaW5nLCB0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nLCBib3R0b206IHN0cmluZywgcmlnaHQ6IHN0cmluZ319IG9wdGlvbnNcbiAqIEBwYXJhbSB7Q3NzU3R5bGV9IGVsZW1lbnRTdHlsZVxuICogQHJldHVybnMge1R1aVN5bWJvbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Qb3NpdGlvbkFuZFN0eWxlKG9wdGlvbnMsIGVsZW1lbnRTdHlsZSkge1xuICAgIHZhciBjaGFyID0gbG9va3VwQ2hhcmFjdGVyKG9wdGlvbnMsIGJvcmRlclNjaGVtZSk7XG4gICAgdmFyIGNoYXJhY3RlclN0eWxlID0gbG9va3VwQ2hhcmFjdGVyU3R5bGUob3B0aW9ucywgZWxlbWVudFN0eWxlKTtcblxuICAgIHJldHVybiBuZXcgVHVpU3ltYm9sKGNoYXIsIGNoYXJhY3RlclN0eWxlKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi90dWktc3ltYm9sLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBib3hcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGJveChib3gpIHtcbiAgICAgICAgcmV0dXJuIGJveC5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJvdy5tYXAoZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzeW1ib2wudG9TdHJpbmcoJ2h0bWwnKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1R1aVN5bWJvbH0gc3ltYm9sXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzeW1ib2woc3ltYm9sKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2wuY2hhcjtcbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3JlbmRlcnMvZGVmYXVsdC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gYm94XG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGJveChib3gpIHtcbiAgICAgICAgdmFyIGNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgdmFyIHN0eWxlcyA9IFtdO1xuXG4gICAgICAgIGJveC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgIHZhciByb3dDaGFyYWN0ZXJzID0gJyc7XG4gICAgICAgICAgICB2YXIgcm93U3R5bGVzID0gW107XG5cbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChzeW1ib2wpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgW2NoYXJhY3Rlciwgc3R5bGVdID0gc3ltYm9sLnRvU3RyaW5nKCdjaHJvbWUnKTtcblxuICAgICAgICAgICAgICAgIHJvd0NoYXJhY3RlcnMgKz0gY2hhcmFjdGVyO1xuICAgICAgICAgICAgICAgIHJvd1N0eWxlcy5wdXNoKHN0eWxlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2gocm93Q2hhcmFjdGVycyk7XG4gICAgICAgICAgICBzdHlsZXMucHVzaC5hcHBseShzdHlsZXMsIHJvd1N0eWxlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBbY2hhcmFjdGVycy5qb2luKCdcXG4nKV0uY29uY2F0KHN0eWxlcyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUdWlTeW1ib2x9IHN5bWJvbFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBzeW1ib2woc3ltYm9sKSB7XG4gICAgICAgIHZhciBjaGFyID0gYCVjJHtzeW1ib2wuY2hhcn1gO1xuICAgICAgICB2YXIgc3R5bGUgPSAnJztcblxuICAgICAgICBpZiAoc3ltYm9sLnN0eWxlLmNvbG9yKSB7XG4gICAgICAgICAgICBzdHlsZSArPSBgY29sb3I6JHtzeW1ib2wuc3R5bGUuY29sb3J9O2A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQtY29sb3I6JHtzeW1ib2wuc3R5bGUuYmFja2dyb3VuZENvbG9yfTtgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtjaGFyLCBzdHlsZV07XG4gICAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi9yZW5kZXJzL2Nocm9tZS5qc1xuICoqLyIsInZhciBhbnNpQ29sb3JzID0ge1xuICAgIC8vICMgU3R5bGVzXG4gICAgYm9sZDogWydcXHgxQlsxbScsICdcXHgxQlsyMm0nXSxcbiAgICBpdGFsaWM6IFsnXFx4MUJbM20nLCAnXFx4MUJbMjNtJ10sXG4gICAgdW5kZXJsaW5lOiBbJ1xceDFCWzRtJywgJ1xceDFCWzI0bSddLFxuICAgIGludmVyc2U6IFsnXFx4MUJbN20nLCAnXFx4MUJbMjdtJ10sXG4gICAgc3RyaWtldGhyb3VnaDogWydcXHgxQls5bScsICdcXHgxQlsyOW0nXSxcblxuICAgIC8vICMgVGV4dCBjb2xvcnNcbiAgICAvLyAjIyBHcmF5c2NhbGVcbiAgICAncmdiKDI1NSwgMjU1LCAyNTUpJzogWydcXHgxQlszN20nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigxMjgsIDEyOCwgMTI4KSc6IFsnXFx4MUJbOTBtJywgJ1xceDFCWzM5bSddLFxuICAgICdyZ2IoMCwgMCwgMCknOiBbJ1xceDFCWzMwbScsICdcXHgxQlszOW0nXSxcbiAgICAvLyAjIyBDb2xvcnNcbiAgICAncmdiKDAsIDAsIDI1NSknOiBbJ1xceDFCWzM0bScsICdcXHgxQlszOW0nXSxcbiAgICAncmdiKDAsIDI1NSwgMjU1KSc6IFsnXFx4MUJbMzZtJywgJ1xceDFCWzM5bSddLFxuICAgICdyZ2IoMCwgMTI4LCAwKSc6IFsnXFx4MUJbMzJtJywgJ1xceDFCWzM5bSddLFxuICAgICdyZ2IoMjU1LCAwLCAyNTUpJzogWydcXHgxQlszNW0nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigyNTUsIDAsIDApJzogWydcXHgxQlszMW0nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigyNTUsIDI1NSwgMCknOiBbJ1xceDFCWzMzbScsICdcXHgxQlszOW0nXSxcbiAgICAncmdiYSgwLCAwLCAwLCAwKSc6IFsnJywgJyddLFxuXG4gICAgLy8gIyBCYWNrZ3JvdW5kIGNvbG9yc1xuICAgIC8vICMjIEdyYXlzY2FsZVxuICAgICdyZ2IoMjU1LCAyNTUsIDI1NSlCRyc6IFsnXFx4MUJbNDdtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMCwgMCwgMClCRyc6IFsnXFx4MUJbNDk7NTs4bScsICdcXHgxQls0OW0nXSxcbiAgICAncmdiKDEyOCwgMTI4LCAxMjgpQkcnOiBbJ1xceDFCWzQwbScsICdcXHgxQls0OW0nXSxcbiAgICAvLyAjIyBDb2xvcnNcbiAgICAncmdiKDAsIDAsIDI1NSlCRyc6IFsnXFx4MUJbNDRtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMCwgMjU1LCAyNTUpQkcnOiBbJ1xceDFCWzQ2bScsICdcXHgxQls0OW0nXSxcbiAgICAncmdiKDAsIDEyOCwgMClCRyc6IFsnXFx4MUJbNDJtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMjU1LCAwLCAyNTUpQkcnOiBbJ1xceDFCWzQ1bScsICdcXHgxQls0OW0nXSxcbiAgICAncmdiKDI1NSwgMCwgMClCRyc6IFsnXFx4MUJbNDFtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMjU1LCAyNTUsIDApQkcnOiBbJ1xceDFCWzQzbScsICdcXHgxQls0OW0nXSxcbiAgICAncmdiYSgwLCAwLCAwLCAwKUJHJzogWycnLCAnJ11cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW119IHN0eWxlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gd3JhcFN0cmluZyhzdHJpbmcsIHN0eWxlKSB7XG4gICAgdmFyIHBhaXIgPSBhbnNpQ29sb3JzW3N0eWxlXTtcblxuICAgIGlmICghcGFpcikge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwYWlyWzBdICsgc3RyaW5nICsgcGFpclsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBib3hcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGJveChib3gpIHtcbiAgICAgICAgcmV0dXJuIGJveC5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJvdy5tYXAoZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzeW1ib2wudG9TdHJpbmcoJ2Fuc2knKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1R1aVN5bWJvbH0gc3ltYm9sXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIHN5bWJvbChzeW1ib2wpIHtcbiAgICAgICAgdmFyIGNoYXJhY3RlciA9IHdyYXBTdHJpbmcoc3ltYm9sLmNoYXIsIHN5bWJvbC5zdHlsZS5jb2xvcik7XG4gICAgICAgIGNoYXJhY3RlciA9IHdyYXBTdHJpbmcoY2hhcmFjdGVyLCBzeW1ib2wuc3R5bGUuYmFja2dyb3VuZENvbG9yICsgJ0JHJyk7XG5cbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3JlbmRlcnMvYW5zaS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gYm94XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBib3goYm94KSB7XG4gICAgICAgIHJldHVybiBib3gubWFwKChyb3cpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByb3cubWFwKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sLnRvU3RyaW5nKCdodG1sJyk7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUdWlTeW1ib2x9IHN5bWJvbFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBzeW1ib2woc3ltYm9sKSB7XG4gICAgICAgIHZhciBzdHlsZSA9ICcnO1xuXG4gICAgICAgIGlmIChzeW1ib2wuc3R5bGUuY29sb3IpIHtcbiAgICAgICAgICAgIHN0eWxlICs9IGBjb2xvcjoke3N5bWJvbC5zdHlsZS5jb2xvcn07YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW1ib2wuc3R5bGUuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICBzdHlsZSArPSBgYmFja2dyb3VuZC1jb2xvcjoke3N5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3J9O2A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJzxzcGFuIHN0eWxlPVwiJyArIHN0eWxlICsgJ1wiPicgKyBzeW1ib2wuY2hhciArICc8L3NwYW4+JztcbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3JlbmRlcnMvaHRtbC5qc1xuICoqLyIsIi8qKlxuICogQ29yZS5qcyAwLjYuMVxuICogaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanNcbiAqIExpY2Vuc2U6IGh0dHA6Ly9yb2NrLm1pdC1saWNlbnNlLm9yZ1xuICogwqkgMjAxNSBEZW5pcyBQdXNoa2FyZXZcbiAqL1xuIWZ1bmN0aW9uKGdsb2JhbCwgZnJhbWV3b3JrLCB1bmRlZmluZWQpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb21tb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8vIFNob3J0Y3V0cyBmb3IgW1tDbGFzc11dICYgcHJvcGVydHkgbmFtZXNcclxudmFyIE9CSkVDVCAgICAgICAgICA9ICdPYmplY3QnXHJcbiAgLCBGVU5DVElPTiAgICAgICAgPSAnRnVuY3Rpb24nXHJcbiAgLCBBUlJBWSAgICAgICAgICAgPSAnQXJyYXknXHJcbiAgLCBTVFJJTkcgICAgICAgICAgPSAnU3RyaW5nJ1xyXG4gICwgTlVNQkVSICAgICAgICAgID0gJ051bWJlcidcclxuICAsIFJFR0VYUCAgICAgICAgICA9ICdSZWdFeHAnXHJcbiAgLCBEQVRFICAgICAgICAgICAgPSAnRGF0ZSdcclxuICAsIE1BUCAgICAgICAgICAgICA9ICdNYXAnXHJcbiAgLCBTRVQgICAgICAgICAgICAgPSAnU2V0J1xyXG4gICwgV0VBS01BUCAgICAgICAgID0gJ1dlYWtNYXAnXHJcbiAgLCBXRUFLU0VUICAgICAgICAgPSAnV2Vha1NldCdcclxuICAsIFNZTUJPTCAgICAgICAgICA9ICdTeW1ib2wnXHJcbiAgLCBQUk9NSVNFICAgICAgICAgPSAnUHJvbWlzZSdcclxuICAsIE1BVEggICAgICAgICAgICA9ICdNYXRoJ1xyXG4gICwgQVJHVU1FTlRTICAgICAgID0gJ0FyZ3VtZW50cydcclxuICAsIFBST1RPVFlQRSAgICAgICA9ICdwcm90b3R5cGUnXHJcbiAgLCBDT05TVFJVQ1RPUiAgICAgPSAnY29uc3RydWN0b3InXHJcbiAgLCBUT19TVFJJTkcgICAgICAgPSAndG9TdHJpbmcnXHJcbiAgLCBUT19TVFJJTkdfVEFHICAgPSBUT19TVFJJTkcgKyAnVGFnJ1xyXG4gICwgVE9fTE9DQUxFICAgICAgID0gJ3RvTG9jYWxlU3RyaW5nJ1xyXG4gICwgSEFTX09XTiAgICAgICAgID0gJ2hhc093blByb3BlcnR5J1xyXG4gICwgRk9SX0VBQ0ggICAgICAgID0gJ2ZvckVhY2gnXHJcbiAgLCBJVEVSQVRPUiAgICAgICAgPSAnaXRlcmF0b3InXHJcbiAgLCBGRl9JVEVSQVRPUiAgICAgPSAnQEAnICsgSVRFUkFUT1JcclxuICAsIFBST0NFU1MgICAgICAgICA9ICdwcm9jZXNzJ1xyXG4gICwgQ1JFQVRFX0VMRU1FTlQgID0gJ2NyZWF0ZUVsZW1lbnQnXHJcbiAgLy8gQWxpYXNlcyBnbG9iYWwgb2JqZWN0cyBhbmQgcHJvdG90eXBlc1xyXG4gICwgRnVuY3Rpb24gICAgICAgID0gZ2xvYmFsW0ZVTkNUSU9OXVxyXG4gICwgT2JqZWN0ICAgICAgICAgID0gZ2xvYmFsW09CSkVDVF1cclxuICAsIEFycmF5ICAgICAgICAgICA9IGdsb2JhbFtBUlJBWV1cclxuICAsIFN0cmluZyAgICAgICAgICA9IGdsb2JhbFtTVFJJTkddXHJcbiAgLCBOdW1iZXIgICAgICAgICAgPSBnbG9iYWxbTlVNQkVSXVxyXG4gICwgUmVnRXhwICAgICAgICAgID0gZ2xvYmFsW1JFR0VYUF1cclxuICAsIERhdGUgICAgICAgICAgICA9IGdsb2JhbFtEQVRFXVxyXG4gICwgTWFwICAgICAgICAgICAgID0gZ2xvYmFsW01BUF1cclxuICAsIFNldCAgICAgICAgICAgICA9IGdsb2JhbFtTRVRdXHJcbiAgLCBXZWFrTWFwICAgICAgICAgPSBnbG9iYWxbV0VBS01BUF1cclxuICAsIFdlYWtTZXQgICAgICAgICA9IGdsb2JhbFtXRUFLU0VUXVxyXG4gICwgU3ltYm9sICAgICAgICAgID0gZ2xvYmFsW1NZTUJPTF1cclxuICAsIE1hdGggICAgICAgICAgICA9IGdsb2JhbFtNQVRIXVxyXG4gICwgVHlwZUVycm9yICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxyXG4gICwgUmFuZ2VFcnJvciAgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3JcclxuICAsIHNldFRpbWVvdXQgICAgICA9IGdsb2JhbC5zZXRUaW1lb3V0XHJcbiAgLCBzZXRJbW1lZGlhdGUgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXHJcbiAgLCBjbGVhckltbWVkaWF0ZSAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcclxuICAsIHBhcnNlSW50ICAgICAgICA9IGdsb2JhbC5wYXJzZUludFxyXG4gICwgaXNGaW5pdGUgICAgICAgID0gZ2xvYmFsLmlzRmluaXRlXHJcbiAgLCBwcm9jZXNzICAgICAgICAgPSBnbG9iYWxbUFJPQ0VTU11cclxuICAsIG5leHRUaWNrICAgICAgICA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5uZXh0VGlja1xyXG4gICwgZG9jdW1lbnQgICAgICAgID0gZ2xvYmFsLmRvY3VtZW50XHJcbiAgLCBodG1sICAgICAgICAgICAgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAsIG5hdmlnYXRvciAgICAgICA9IGdsb2JhbC5uYXZpZ2F0b3JcclxuICAsIGRlZmluZSAgICAgICAgICA9IGdsb2JhbC5kZWZpbmVcclxuICAsIGNvbnNvbGUgICAgICAgICA9IGdsb2JhbC5jb25zb2xlIHx8IHt9XHJcbiAgLCBBcnJheVByb3RvICAgICAgPSBBcnJheVtQUk9UT1RZUEVdXHJcbiAgLCBPYmplY3RQcm90byAgICAgPSBPYmplY3RbUFJPVE9UWVBFXVxyXG4gICwgRnVuY3Rpb25Qcm90byAgID0gRnVuY3Rpb25bUFJPVE9UWVBFXVxyXG4gICwgSW5maW5pdHkgICAgICAgID0gMSAvIDBcclxuICAsIERPVCAgICAgICAgICAgICA9ICcuJztcclxuXHJcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcclxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xyXG4gIHJldHVybiBpdCAhPT0gbnVsbCAmJiAodHlwZW9mIGl0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nKTtcclxufVxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcclxuICByZXR1cm4gdHlwZW9mIGl0ID09ICdmdW5jdGlvbic7XHJcbn1cclxuLy8gTmF0aXZlIGZ1bmN0aW9uP1xyXG52YXIgaXNOYXRpdmUgPSBjdHgoLy4vLnRlc3QsIC9cXFtuYXRpdmUgY29kZVxcXVxccypcXH1cXHMqJC8sIDEpO1xyXG5cclxuLy8gT2JqZWN0IGludGVybmFsIFtbQ2xhc3NdXSBvciB0b1N0cmluZ1RhZ1xyXG4vLyBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXHJcbnZhciB0b1N0cmluZyA9IE9iamVjdFByb3RvW1RPX1NUUklOR107XHJcbmZ1bmN0aW9uIHNldFRvU3RyaW5nVGFnKGl0LCB0YWcsIHN0YXQpe1xyXG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdFtQUk9UT1RZUEVdLCBTWU1CT0xfVEFHKSloaWRkZW4oaXQsIFNZTUJPTF9UQUcsIHRhZyk7XHJcbn1cclxuZnVuY3Rpb24gY29mKGl0KXtcclxuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xyXG59XHJcbmZ1bmN0aW9uIGNsYXNzb2YoaXQpe1xyXG4gIHZhciBPLCBUO1xyXG4gIHJldHVybiBpdCA9PSB1bmRlZmluZWQgPyBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiAnTnVsbCdcclxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtTWU1CT0xfVEFHXSkgPT0gJ3N0cmluZycgPyBUIDogY29mKE8pO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvblxyXG52YXIgY2FsbCAgPSBGdW5jdGlvblByb3RvLmNhbGxcclxuICAsIGFwcGx5ID0gRnVuY3Rpb25Qcm90by5hcHBseVxyXG4gICwgUkVGRVJFTkNFX0dFVDtcclxuLy8gUGFydGlhbCBhcHBseVxyXG5mdW5jdGlvbiBwYXJ0KC8qIC4uLmFyZ3MgKi8pe1xyXG4gIHZhciBmbiAgICAgPSBhc3NlcnRGdW5jdGlvbih0aGlzKVxyXG4gICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAsIGFyZ3MgICA9IEFycmF5KGxlbmd0aClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCBfICAgICAgPSBwYXRoLl9cclxuICAgICwgaG9sZGVyID0gZmFsc2U7XHJcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigoYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xyXG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgIHZhciB0aGF0ICAgID0gdGhpc1xyXG4gICAgICAsIF9sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICwgaSA9IDAsIGogPSAwLCBfYXJncztcclxuICAgIGlmKCFob2xkZXIgJiYgIV9sZW5ndGgpcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XHJcbiAgICBfYXJncyA9IGFyZ3Muc2xpY2UoKTtcclxuICAgIGlmKGhvbGRlcilmb3IoO2xlbmd0aCA+IGk7IGkrKylpZihfYXJnc1tpXSA9PT0gXylfYXJnc1tpXSA9IGFyZ3VtZW50c1tqKytdO1xyXG4gICAgd2hpbGUoX2xlbmd0aCA+IGopX2FyZ3MucHVzaChhcmd1bWVudHNbaisrXSk7XHJcbiAgICByZXR1cm4gaW52b2tlKGZuLCBfYXJncywgdGhhdCk7XHJcbiAgfVxyXG59XHJcbi8vIE9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xyXG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQsIGxlbmd0aCl7XHJcbiAgYXNzZXJ0RnVuY3Rpb24oZm4pO1xyXG4gIGlmKH5sZW5ndGggJiYgdGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcclxuICBzd2l0Y2gobGVuZ3RoKXtcclxuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcclxuICAgIH1cclxuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcclxuICAgIH1cclxuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcclxuICAgIH1cclxuICB9IHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG59XHJcbi8vIEZhc3QgYXBwbHlcclxuLy8gaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XHJcbmZ1bmN0aW9uIGludm9rZShmbiwgYXJncywgdGhhdCl7XHJcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaChhcmdzLmxlbmd0aCB8IDApe1xyXG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XHJcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XHJcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XHJcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICBjYXNlIDU6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSk7XHJcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xyXG59XHJcblxyXG4vLyBPYmplY3Q6XHJcbnZhciBjcmVhdGUgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZVxyXG4gICwgZ2V0UHJvdG90eXBlT2YgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZlxyXG4gICwgc2V0UHJvdG90eXBlT2YgICA9IE9iamVjdC5zZXRQcm90b3R5cGVPZlxyXG4gICwgZGVmaW5lUHJvcGVydHkgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxyXG4gICwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzXHJcbiAgLCBnZXRPd25EZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvclxyXG4gICwgZ2V0S2V5cyAgICAgICAgICA9IE9iamVjdC5rZXlzXHJcbiAgLCBnZXROYW1lcyAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcclxuICAsIGdldFN5bWJvbHMgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzXHJcbiAgLCBpc0Zyb3plbiAgICAgICAgID0gT2JqZWN0LmlzRnJvemVuXHJcbiAgLCBoYXMgICAgICAgICAgICAgID0gY3R4KGNhbGwsIE9iamVjdFByb3RvW0hBU19PV05dLCAyKVxyXG4gIC8vIER1bW15LCBmaXggZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmcgaW4gZXM1IG1vZHVsZVxyXG4gICwgRVM1T2JqZWN0ICAgICAgICA9IE9iamVjdFxyXG4gICwgRGljdDtcclxuZnVuY3Rpb24gdG9PYmplY3QoaXQpe1xyXG4gIHJldHVybiBFUzVPYmplY3QoYXNzZXJ0RGVmaW5lZChpdCkpO1xyXG59XHJcbmZ1bmN0aW9uIHJldHVybkl0KGl0KXtcclxuICByZXR1cm4gaXQ7XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuVGhpcygpe1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcbmZ1bmN0aW9uIGdldChvYmplY3QsIGtleSl7XHJcbiAgaWYoaGFzKG9iamVjdCwga2V5KSlyZXR1cm4gb2JqZWN0W2tleV07XHJcbn1cclxuZnVuY3Rpb24gb3duS2V5cyhpdCl7XHJcbiAgYXNzZXJ0T2JqZWN0KGl0KTtcclxuICByZXR1cm4gZ2V0U3ltYm9scyA/IGdldE5hbWVzKGl0KS5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDogZ2V0TmFtZXMoaXQpO1xyXG59XHJcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcclxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2Upe1xyXG4gIHZhciBUID0gT2JqZWN0KGFzc2VydERlZmluZWQodGFyZ2V0KSlcclxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICwgaSA9IDE7XHJcbiAgd2hpbGUobCA+IGkpe1xyXG4gICAgdmFyIFMgICAgICA9IEVTNU9iamVjdChhcmd1bWVudHNbaSsrXSlcclxuICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKFMpXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBqICAgICAgPSAwXHJcbiAgICAgICwga2V5O1xyXG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBUO1xyXG59XHJcbmZ1bmN0aW9uIGtleU9mKG9iamVjdCwgZWwpe1xyXG4gIHZhciBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaW5kZXggID0gMFxyXG4gICAgLCBrZXk7XHJcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcclxufVxyXG5cclxuLy8gQXJyYXlcclxuLy8gYXJyYXkoJ3N0cjEsc3RyMixzdHIzJykgPT4gWydzdHIxJywgJ3N0cjInLCAnc3RyMyddXHJcbmZ1bmN0aW9uIGFycmF5KGl0KXtcclxuICByZXR1cm4gU3RyaW5nKGl0KS5zcGxpdCgnLCcpO1xyXG59XHJcbnZhciBwdXNoICAgID0gQXJyYXlQcm90by5wdXNoXHJcbiAgLCB1bnNoaWZ0ID0gQXJyYXlQcm90by51bnNoaWZ0XHJcbiAgLCBzbGljZSAgID0gQXJyYXlQcm90by5zbGljZVxyXG4gICwgc3BsaWNlICA9IEFycmF5UHJvdG8uc3BsaWNlXHJcbiAgLCBpbmRleE9mID0gQXJyYXlQcm90by5pbmRleE9mXHJcbiAgLCBmb3JFYWNoID0gQXJyYXlQcm90b1tGT1JfRUFDSF07XHJcbi8qXHJcbiAqIDAgLT4gZm9yRWFjaFxyXG4gKiAxIC0+IG1hcFxyXG4gKiAyIC0+IGZpbHRlclxyXG4gKiAzIC0+IHNvbWVcclxuICogNCAtPiBldmVyeVxyXG4gKiA1IC0+IGZpbmRcclxuICogNiAtPiBmaW5kSW5kZXhcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5TWV0aG9kKHR5cGUpe1xyXG4gIHZhciBpc01hcCAgICAgICA9IHR5cGUgPT0gMVxyXG4gICAgLCBpc0ZpbHRlciAgICA9IHR5cGUgPT0gMlxyXG4gICAgLCBpc1NvbWUgICAgICA9IHR5cGUgPT0gM1xyXG4gICAgLCBpc0V2ZXJ5ICAgICA9IHR5cGUgPT0gNFxyXG4gICAgLCBpc0ZpbmRJbmRleCA9IHR5cGUgPT0gNlxyXG4gICAgLCBub2hvbGVzICAgICA9IHR5cGUgPT0gNSB8fCBpc0ZpbmRJbmRleDtcclxuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgIHZhciBPICAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCB0aGF0ICAgPSBhcmd1bWVudHNbMV1cclxuICAgICAgLCBzZWxmICAgPSBFUzVPYmplY3QoTylcclxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcclxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gaXNNYXAgPyBBcnJheShsZW5ndGgpIDogaXNGaWx0ZXIgPyBbXSA6IHVuZGVmaW5lZFxyXG4gICAgICAsIHZhbCwgcmVzO1xyXG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihub2hvbGVzIHx8IGluZGV4IGluIHNlbGYpe1xyXG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcclxuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcclxuICAgICAgaWYodHlwZSl7XHJcbiAgICAgICAgaWYoaXNNYXApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAgLy8gbWFwXHJcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcclxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXHJcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XHJcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXHJcbiAgICAgICAgfSBlbHNlIGlmKGlzRXZlcnkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAgLy8gZXZlcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRmluZEluZGV4ID8gLTEgOiBpc1NvbWUgfHwgaXNFdmVyeSA/IGlzRXZlcnkgOiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5Q29udGFpbnMoaXNDb250YWlucyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcclxuICAgIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxyXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoYXJndW1lbnRzWzFdLCBsZW5ndGgpO1xyXG4gICAgaWYoaXNDb250YWlucyAmJiBlbCAhPSBlbCl7XHJcbiAgICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoc2FtZU5hTihPW2luZGV4XSkpcmV0dXJuIGlzQ29udGFpbnMgfHwgaW5kZXg7XHJcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihpc0NvbnRhaW5zIHx8IGluZGV4IGluIE8pe1xyXG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIGlzQ29udGFpbnMgfHwgaW5kZXg7XHJcbiAgICB9IHJldHVybiAhaXNDb250YWlucyAmJiAtMTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJpYyhBLCBCKXtcclxuICAvLyBzdHJhbmdlIElFIHF1aXJrcyBtb2RlIGJ1ZyAtPiB1c2UgdHlwZW9mIHZzIGlzRnVuY3Rpb25cclxuICByZXR1cm4gdHlwZW9mIEEgPT0gJ2Z1bmN0aW9uJyA/IEEgOiBCO1xyXG59XHJcblxyXG4vLyBNYXRoXHJcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxZmZmZmZmZmZmZmZmZiAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXHJcbiAgLCBwb3cgICAgPSBNYXRoLnBvd1xyXG4gICwgYWJzICAgID0gTWF0aC5hYnNcclxuICAsIGNlaWwgICA9IE1hdGguY2VpbFxyXG4gICwgZmxvb3IgID0gTWF0aC5mbG9vclxyXG4gICwgbWF4ICAgID0gTWF0aC5tYXhcclxuICAsIG1pbiAgICA9IE1hdGgubWluXHJcbiAgLCByYW5kb20gPSBNYXRoLnJhbmRvbVxyXG4gICwgdHJ1bmMgID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHJldHVybiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XHJcbiAgICB9XHJcbi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXHJcbmZ1bmN0aW9uIHNhbWVOYU4obnVtYmVyKXtcclxuICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcclxufVxyXG4vLyA3LjEuNCBUb0ludGVnZXJcclxuZnVuY3Rpb24gdG9JbnRlZ2VyKGl0KXtcclxuICByZXR1cm4gaXNOYU4oaXQpID8gMCA6IHRydW5jKGl0KTtcclxufVxyXG4vLyA3LjEuMTUgVG9MZW5ndGhcclxuZnVuY3Rpb24gdG9MZW5ndGgoaXQpe1xyXG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgTUFYX1NBRkVfSU5URUdFUikgOiAwO1xyXG59XHJcbmZ1bmN0aW9uIHRvSW5kZXgoaW5kZXgsIGxlbmd0aCl7XHJcbiAgdmFyIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcclxuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcclxufVxyXG5mdW5jdGlvbiBseihudW0pe1xyXG4gIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXBsYWNlcihyZWdFeHAsIHJlcGxhY2UsIGlzU3RhdGljKXtcclxuICB2YXIgcmVwbGFjZXIgPSBpc09iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xyXG4gICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XHJcbiAgfSA6IHJlcGxhY2U7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBTdHJpbmcoaXNTdGF0aWMgPyBpdCA6IHRoaXMpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVBvaW50QXQodG9TdHJpbmcpe1xyXG4gIHJldHVybiBmdW5jdGlvbihwb3Mpe1xyXG4gICAgdmFyIHMgPSBTdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcclxuICAgICAgLCBsID0gcy5sZW5ndGhcclxuICAgICAgLCBhLCBiO1xyXG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiB0b1N0cmluZyA/ICcnIDogdW5kZWZpbmVkO1xyXG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcclxuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXHJcbiAgICAgID8gdG9TdHJpbmcgPyBzLmNoYXJBdChpKSA6IGFcclxuICAgICAgOiB0b1N0cmluZyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFzc2VydGlvbiAmIGVycm9yc1xyXG52YXIgUkVEVUNFX0VSUk9SID0gJ1JlZHVjZSBvZiBlbXB0eSBvYmplY3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcclxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbXNnMSwgbXNnMil7XHJcbiAgaWYoIWNvbmRpdGlvbil0aHJvdyBUeXBlRXJyb3IobXNnMiA/IG1zZzEgKyBtc2cyIDogbXNnMSk7XHJcbn1cclxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XHJcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignRnVuY3Rpb24gY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydEZ1bmN0aW9uKGl0KXtcclxuICBhc3NlcnQoaXNGdW5jdGlvbihpdCksIGl0LCAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5mdW5jdGlvbiBhc3NlcnRPYmplY3QoaXQpe1xyXG4gIGFzc2VydChpc09iamVjdChpdCksIGl0LCAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydEluc3RhbmNlKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XHJcbiAgYXNzZXJ0KGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IsIG5hbWUsIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcclxufVxyXG5cclxuLy8gUHJvcGVydHkgZGVzY3JpcHRvcnMgJiBTeW1ib2xcclxuZnVuY3Rpb24gZGVzY3JpcHRvcihiaXRtYXAsIHZhbHVlKXtcclxuICByZXR1cm4ge1xyXG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxyXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxyXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxyXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG4gIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe1xyXG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwgZGVzY3JpcHRvcihiaXRtYXAsIHZhbHVlKSk7XHJcbiAgfSA6IHNpbXBsZVNldDtcclxufVxyXG5mdW5jdGlvbiB1aWQoa2V5KXtcclxuICByZXR1cm4gU1lNQk9MICsgJygnICsga2V5ICsgJylfJyArICgrK3NpZCArIHJhbmRvbSgpKVtUT19TVFJJTkddKDM2KTtcclxufVxyXG5mdW5jdGlvbiBnZXRXZWxsS25vd25TeW1ib2wobmFtZSwgc2V0dGVyKXtcclxuICByZXR1cm4gKFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0pIHx8IChzZXR0ZXIgPyBTeW1ib2wgOiBzYWZlU3ltYm9sKShTWU1CT0wgKyBET1QgKyBuYW1lKTtcclxufVxyXG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cclxudmFyIERFU0MgPSAhIWZ1bmN0aW9uKCl7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyIH19KS5hID09IDI7XHJcbiAgICAgIH0gY2F0Y2goZSl7fVxyXG4gICAgfSgpXHJcbiAgLCBzaWQgICAgPSAwXHJcbiAgLCBoaWRkZW4gPSBjcmVhdGVEZWZpbmVyKDEpXHJcbiAgLCBzZXQgICAgPSBTeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRkZW5cclxuICAsIHNhZmVTeW1ib2wgPSBTeW1ib2wgfHwgdWlkO1xyXG5mdW5jdGlvbiBhc3NpZ25IaWRkZW4odGFyZ2V0LCBzcmMpe1xyXG4gIGZvcih2YXIga2V5IGluIHNyYyloaWRkZW4odGFyZ2V0LCBrZXksIHNyY1trZXldKTtcclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG52YXIgU1lNQk9MX1VOU0NPUEFCTEVTID0gZ2V0V2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpXHJcbiAgLCBBcnJheVVuc2NvcGFibGVzICAgPSBBcnJheVByb3RvW1NZTUJPTF9VTlNDT1BBQkxFU10gfHwge31cclxuICAsIFNZTUJPTF9UQUcgICAgICAgICA9IGdldFdlbGxLbm93blN5bWJvbChUT19TVFJJTkdfVEFHKVxyXG4gICwgU1lNQk9MX1NQRUNJRVMgICAgID0gZ2V0V2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJylcclxuICAsIFNZTUJPTF9JVEVSQVRPUjtcclxuZnVuY3Rpb24gc2V0U3BlY2llcyhDKXtcclxuICBpZihERVNDICYmIChmcmFtZXdvcmsgfHwgIWlzTmF0aXZlKEMpKSlkZWZpbmVQcm9wZXJ0eShDLCBTWU1CT0xfU1BFQ0lFUywge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiByZXR1cm5UaGlzXHJcbiAgfSk7XHJcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29tbW9uLmV4cG9ydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIE5PREUgPSBjb2YocHJvY2VzcykgPT0gUFJPQ0VTU1xyXG4gICwgY29yZSA9IHt9XHJcbiAgLCBwYXRoID0gZnJhbWV3b3JrID8gZ2xvYmFsIDogY29yZVxyXG4gICwgb2xkICA9IGdsb2JhbC5jb3JlXHJcbiAgLCBleHBvcnRHbG9iYWxcclxuICAvLyB0eXBlIGJpdG1hcFxyXG4gICwgRk9SQ0VEID0gMVxyXG4gICwgR0xPQkFMID0gMlxyXG4gICwgU1RBVElDID0gNFxyXG4gICwgUFJPVE8gID0gOFxyXG4gICwgQklORCAgID0gMTZcclxuICAsIFdSQVAgICA9IDMyO1xyXG5mdW5jdGlvbiAkZGVmaW5lKHR5cGUsIG5hbWUsIHNvdXJjZSl7XHJcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxyXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiBHTE9CQUxcclxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6ICh0eXBlICYgU1RBVElDKVxyXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCBPYmplY3RQcm90bylbUFJPVE9UWVBFXVxyXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XHJcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcclxuICBmb3Ioa2V5IGluIHNvdXJjZSl7XHJcbiAgICAvLyB0aGVyZSBpcyBhIHNpbWlsYXIgbmF0aXZlXHJcbiAgICBvd24gPSAhKHR5cGUgJiBGT1JDRUQpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0XHJcbiAgICAgICYmICghaXNGdW5jdGlvbih0YXJnZXRba2V5XSkgfHwgaXNOYXRpdmUodGFyZ2V0W2tleV0pKTtcclxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXHJcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xyXG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXHJcbiAgICBpZighZnJhbWV3b3JrICYmIGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcclxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XHJcbiAgICBlbHNlIGlmKHR5cGUgJiBCSU5EICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xyXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcclxuICAgIGVsc2UgaWYodHlwZSAmIFdSQVAgJiYgIWZyYW1ld29yayAmJiB0YXJnZXRba2V5XSA9PSBvdXQpe1xyXG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBvdXQgPyBuZXcgb3V0KHBhcmFtKSA6IG91dChwYXJhbSk7XHJcbiAgICAgIH1cclxuICAgICAgZXhwW1BST1RPVFlQRV0gPSBvdXRbUFJPVE9UWVBFXTtcclxuICAgIH0gZWxzZSBleHAgPSB0eXBlICYgUFJPVE8gJiYgaXNGdW5jdGlvbihvdXQpID8gY3R4KGNhbGwsIG91dCkgOiBvdXQ7XHJcbiAgICAvLyBleHRlbmQgZ2xvYmFsXHJcbiAgICBpZihmcmFtZXdvcmsgJiYgdGFyZ2V0ICYmICFvd24pe1xyXG4gICAgICBpZihpc0dsb2JhbCl0YXJnZXRba2V5XSA9IG91dDtcclxuICAgICAgZWxzZSBkZWxldGUgdGFyZ2V0W2tleV0gJiYgaGlkZGVuKHRhcmdldCwga2V5LCBvdXQpO1xyXG4gICAgfVxyXG4gICAgLy8gZXhwb3J0XHJcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGRlbihleHBvcnRzLCBrZXksIGV4cCk7XHJcbiAgfVxyXG59XHJcbi8vIENvbW1vbkpTIGV4cG9ydFxyXG5pZih0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKW1vZHVsZS5leHBvcnRzID0gY29yZTtcclxuLy8gUmVxdWlyZUpTIGV4cG9ydFxyXG5lbHNlIGlmKGlzRnVuY3Rpb24oZGVmaW5lKSAmJiBkZWZpbmUuYW1kKWRlZmluZShmdW5jdGlvbigpe3JldHVybiBjb3JlfSk7XHJcbi8vIEV4cG9ydCB0byBnbG9iYWwgb2JqZWN0XHJcbmVsc2UgZXhwb3J0R2xvYmFsID0gdHJ1ZTtcclxuaWYoZXhwb3J0R2xvYmFsIHx8IGZyYW1ld29yayl7XHJcbiAgY29yZS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKXtcclxuICAgIGdsb2JhbC5jb3JlID0gb2xkO1xyXG4gICAgcmV0dXJuIGNvcmU7XHJcbiAgfVxyXG4gIGdsb2JhbC5jb3JlID0gY29yZTtcclxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb21tb24uaXRlcmF0b3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5TWU1CT0xfSVRFUkFUT1IgPSBnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpO1xyXG52YXIgSVRFUiAgPSBzYWZlU3ltYm9sKCdpdGVyJylcclxuICAsIEtFWSAgID0gMVxyXG4gICwgVkFMVUUgPSAyXHJcbiAgLCBJdGVyYXRvcnMgPSB7fVxyXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fVxyXG4gICAgLy8gU2FmYXJpIGhhcyBieWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxyXG4gICwgQlVHR1lfSVRFUkFUT1JTID0gJ2tleXMnIGluIEFycmF5UHJvdG8gJiYgISgnbmV4dCcgaW4gW10ua2V5cygpKTtcclxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcclxuc2V0SXRlcmF0b3IoSXRlcmF0b3JQcm90b3R5cGUsIHJldHVyblRoaXMpO1xyXG5mdW5jdGlvbiBzZXRJdGVyYXRvcihPLCB2YWx1ZSl7XHJcbiAgaGlkZGVuKE8sIFNZTUJPTF9JVEVSQVRPUiwgdmFsdWUpO1xyXG4gIC8vIEFkZCBpdGVyYXRvciBmb3IgRkYgaXRlcmF0b3IgcHJvdG9jb2xcclxuICBGRl9JVEVSQVRPUiBpbiBBcnJheVByb3RvICYmIGhpZGRlbihPLCBGRl9JVEVSQVRPUiwgdmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0LCBwcm90byl7XHJcbiAgQ29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGNyZWF0ZShwcm90byB8fCBJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcclxuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcclxufVxyXG5mdW5jdGlvbiBkZWZpbmVJdGVyYXRvcihDb25zdHJ1Y3RvciwgTkFNRSwgdmFsdWUsIERFRkFVTFQpe1xyXG4gIHZhciBwcm90byA9IENvbnN0cnVjdG9yW1BST1RPVFlQRV1cclxuICAgICwgaXRlciAgPSBnZXQocHJvdG8sIFNZTUJPTF9JVEVSQVRPUikgfHwgZ2V0KHByb3RvLCBGRl9JVEVSQVRPUikgfHwgKERFRkFVTFQgJiYgZ2V0KHByb3RvLCBERUZBVUxUKSkgfHwgdmFsdWU7XHJcbiAgaWYoZnJhbWV3b3JrKXtcclxuICAgIC8vIERlZmluZSBpdGVyYXRvclxyXG4gICAgc2V0SXRlcmF0b3IocHJvdG8sIGl0ZXIpO1xyXG4gICAgaWYoaXRlciAhPT0gdmFsdWUpe1xyXG4gICAgICB2YXIgaXRlclByb3RvID0gZ2V0UHJvdG90eXBlT2YoaXRlci5jYWxsKG5ldyBDb25zdHJ1Y3RvcikpO1xyXG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXHJcbiAgICAgIHNldFRvU3RyaW5nVGFnKGl0ZXJQcm90bywgTkFNRSArICcgSXRlcmF0b3InLCB0cnVlKTtcclxuICAgICAgLy8gRkYgZml4XHJcbiAgICAgIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpICYmIHNldEl0ZXJhdG9yKGl0ZXJQcm90bywgcmV0dXJuVGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcclxuICBJdGVyYXRvcnNbTkFNRV0gPSBpdGVyO1xyXG4gIC8vIEZGICYgdjggZml4XHJcbiAgSXRlcmF0b3JzW05BTUUgKyAnIEl0ZXJhdG9yJ10gPSByZXR1cm5UaGlzO1xyXG4gIHJldHVybiBpdGVyO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZVN0ZEl0ZXJhdG9ycyhCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VUKXtcclxuICBmdW5jdGlvbiBjcmVhdGVJdGVyKGtpbmQpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNyZWF0ZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcclxuICB2YXIgZW50cmllcyA9IGNyZWF0ZUl0ZXIoS0VZK1ZBTFVFKVxyXG4gICAgLCB2YWx1ZXMgID0gY3JlYXRlSXRlcihWQUxVRSk7XHJcbiAgaWYoREVGQVVMVCA9PSBWQUxVRSl2YWx1ZXMgPSBkZWZpbmVJdGVyYXRvcihCYXNlLCBOQU1FLCB2YWx1ZXMsICd2YWx1ZXMnKTtcclxuICBlbHNlIGVudHJpZXMgPSBkZWZpbmVJdGVyYXRvcihCYXNlLCBOQU1FLCBlbnRyaWVzLCAnZW50cmllcycpO1xyXG4gIGlmKERFRkFVTFQpe1xyXG4gICAgJGRlZmluZShQUk9UTyArIEZPUkNFRCAqIEJVR0dZX0lURVJBVE9SUywgTkFNRSwge1xyXG4gICAgICBlbnRyaWVzOiBlbnRyaWVzLFxyXG4gICAgICBrZXlzOiBJU19TRVQgPyB2YWx1ZXMgOiBjcmVhdGVJdGVyKEtFWSksXHJcbiAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gaXRlclJlc3VsdChkb25lLCB2YWx1ZSl7XHJcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XHJcbn1cclxuZnVuY3Rpb24gaXNJdGVyYWJsZShpdCl7XHJcbiAgdmFyIE8gICAgICA9IE9iamVjdChpdClcclxuICAgICwgU3ltYm9sID0gZ2xvYmFsW1NZTUJPTF1cclxuICAgICwgaGFzRXh0ID0gKFN5bWJvbCAmJiBTeW1ib2xbSVRFUkFUT1JdIHx8IEZGX0lURVJBVE9SKSBpbiBPO1xyXG4gIHJldHVybiBoYXNFeHQgfHwgU1lNQk9MX0lURVJBVE9SIGluIE8gfHwgaGFzKEl0ZXJhdG9ycywgY2xhc3NvZihPKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SXRlcmF0b3IoaXQpe1xyXG4gIHZhciBTeW1ib2wgID0gZ2xvYmFsW1NZTUJPTF1cclxuICAgICwgZXh0ICAgICA9IGl0W1N5bWJvbCAmJiBTeW1ib2xbSVRFUkFUT1JdIHx8IEZGX0lURVJBVE9SXVxyXG4gICAgLCBnZXRJdGVyID0gZXh0IHx8IGl0W1NZTUJPTF9JVEVSQVRPUl0gfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcclxuICByZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpO1xyXG59XHJcbmZ1bmN0aW9uIHN0ZXBDYWxsKGZuLCB2YWx1ZSwgZW50cmllcyl7XHJcbiAgcmV0dXJuIGVudHJpZXMgPyBpbnZva2UoZm4sIHZhbHVlKSA6IGZuKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKGZuKXtcclxuICB2YXIgZGFuZ2VyID0gdHJ1ZTtcclxuICB2YXIgTyA9IHtcclxuICAgIG5leHQ6IGZ1bmN0aW9uKCl7IHRocm93IDEgfSxcclxuICAgICdyZXR1cm4nOiBmdW5jdGlvbigpeyBkYW5nZXIgPSBmYWxzZSB9XHJcbiAgfTtcclxuICBPW1NZTUJPTF9JVEVSQVRPUl0gPSByZXR1cm5UaGlzO1xyXG4gIHRyeSB7XHJcbiAgICBmbihPKTtcclxuICB9IGNhdGNoKGUpe31cclxuICByZXR1cm4gZGFuZ2VyO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlSXRlcmF0b3IoaXRlcmF0b3Ipe1xyXG4gIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XHJcbiAgaWYocmV0ICE9PSB1bmRlZmluZWQpcmV0LmNhbGwoaXRlcmF0b3IpO1xyXG59XHJcbmZ1bmN0aW9uIHNhZmVJdGVyQ2xvc2UoZXhlYywgaXRlcmF0b3Ipe1xyXG4gIHRyeSB7XHJcbiAgICBleGVjKGl0ZXJhdG9yKTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgY2xvc2VJdGVyYXRvcihpdGVyYXRvcik7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBmb3JPZihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xyXG4gIHNhZmVJdGVyQ2xvc2UoZnVuY3Rpb24oaXRlcmF0b3Ipe1xyXG4gICAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcclxuICAgICAgLCBzdGVwO1xyXG4gICAgd2hpbGUoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKWlmKHN0ZXBDYWxsKGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpID09PSBmYWxzZSl7XHJcbiAgICAgIHJldHVybiBjbG9zZUl0ZXJhdG9yKGl0ZXJhdG9yKTtcclxuICAgIH1cclxuICB9LCBnZXRJdGVyYXRvcihpdGVyYWJsZSkpO1xyXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5zeW1ib2wgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cclxuIWZ1bmN0aW9uKFRBRywgU3ltYm9sUmVnaXN0cnksIEFsbFN5bWJvbHMsIHNldHRlcil7XHJcbiAgLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXHJcbiAgaWYoIWlzTmF0aXZlKFN5bWJvbCkpe1xyXG4gICAgU3ltYm9sID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pe1xyXG4gICAgICBhc3NlcnQoISh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSwgU1lNQk9MICsgJyBpcyBub3QgYSAnICsgQ09OU1RSVUNUT1IpO1xyXG4gICAgICB2YXIgdGFnID0gdWlkKGRlc2NyaXB0aW9uKVxyXG4gICAgICAgICwgc3ltID0gc2V0KGNyZWF0ZShTeW1ib2xbUFJPVE9UWVBFXSksIFRBRywgdGFnKTtcclxuICAgICAgQWxsU3ltYm9sc1t0YWddID0gc3ltO1xyXG4gICAgICBERVNDICYmIHNldHRlciAmJiBkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90bywgdGFnLCB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgaGlkZGVuKHRoaXMsIHRhZywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzeW07XHJcbiAgICB9XHJcbiAgICBoaWRkZW4oU3ltYm9sW1BST1RPVFlQRV0sIFRPX1NUUklORywgZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIHRoaXNbVEFHXTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAkZGVmaW5lKEdMT0JBTCArIFdSQVAsIHtTeW1ib2w6IFN5bWJvbH0pO1xyXG4gIFxyXG4gIHZhciBzeW1ib2xTdGF0aWNzID0ge1xyXG4gICAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXHJcbiAgICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxyXG4gICAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxyXG4gICAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9IFN5bWJvbChrZXkpO1xyXG4gICAgfSxcclxuICAgIC8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxyXG4gICAgaXRlcmF0b3I6IFNZTUJPTF9JVEVSQVRPUiB8fCBnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpLFxyXG4gICAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXHJcbiAgICBrZXlGb3I6IHBhcnQuY2FsbChrZXlPZiwgU3ltYm9sUmVnaXN0cnkpLFxyXG4gICAgLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXHJcbiAgICBzcGVjaWVzOiBTWU1CT0xfU1BFQ0lFUyxcclxuICAgIC8vIDE5LjQuMi4xMyBTeW1ib2wudG9TdHJpbmdUYWdcclxuICAgIHRvU3RyaW5nVGFnOiBTWU1CT0xfVEFHID0gZ2V0V2VsbEtub3duU3ltYm9sKFRPX1NUUklOR19UQUcsIHRydWUpLFxyXG4gICAgLy8gMTkuNC4yLjE0IFN5bWJvbC51bnNjb3BhYmxlc1xyXG4gICAgdW5zY29wYWJsZXM6IFNZTUJPTF9VTlNDT1BBQkxFUyxcclxuICAgIHB1cmU6IHNhZmVTeW1ib2wsXHJcbiAgICBzZXQ6IHNldCxcclxuICAgIHVzZVNldHRlcjogZnVuY3Rpb24oKXtzZXR0ZXIgPSB0cnVlfSxcclxuICAgIHVzZVNpbXBsZTogZnVuY3Rpb24oKXtzZXR0ZXIgPSBmYWxzZX1cclxuICB9O1xyXG4gIC8vIDE5LjQuMi4yIFN5bWJvbC5oYXNJbnN0YW5jZVxyXG4gIC8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcclxuICAvLyAxOS40LjIuNiBTeW1ib2wubWF0Y2hcclxuICAvLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxyXG4gIC8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcclxuICAvLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XHJcbiAgLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxyXG4gIGZvckVhY2guY2FsbChhcnJheSgnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwbGl0LHRvUHJpbWl0aXZlJyksXHJcbiAgICBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHN5bWJvbFN0YXRpY3NbaXRdID0gZ2V0V2VsbEtub3duU3ltYm9sKGl0KTtcclxuICAgIH1cclxuICApO1xyXG4gICRkZWZpbmUoU1RBVElDLCBTWU1CT0wsIHN5bWJvbFN0YXRpY3MpO1xyXG4gIFxyXG4gIHNldFRvU3RyaW5nVGFnKFN5bWJvbCwgU1lNQk9MKTtcclxuICBcclxuICAkZGVmaW5lKFNUQVRJQyArIEZPUkNFRCAqICFpc05hdGl2ZShTeW1ib2wpLCBPQkpFQ1QsIHtcclxuICAgIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbiAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHZhciBuYW1lcyA9IGdldE5hbWVzKHRvT2JqZWN0KGl0KSksIHJlc3VsdCA9IFtdLCBrZXksIGkgPSAwO1xyXG4gICAgICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcclxuICAgIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24oaXQpe1xyXG4gICAgICB2YXIgbmFtZXMgPSBnZXROYW1lcyh0b09iamVjdChpdCkpLCByZXN1bHQgPSBbXSwga2V5LCBpID0gMDtcclxuICAgICAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSloYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAvLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXHJcbiAgc2V0VG9TdHJpbmdUYWcoTWF0aCwgTUFUSCwgdHJ1ZSk7XHJcbiAgLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cclxuICBzZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcclxufShzYWZlU3ltYm9sKCd0YWcnKSwge30sIHt9LCB0cnVlKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lm9iamVjdC5zdGF0aWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgdmFyIG9iamVjdFN0YXRpYyA9IHtcclxuICAgIC8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXHJcbiAgICBhc3NpZ246IGFzc2lnbixcclxuICAgIC8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXHJcbiAgICBpczogZnVuY3Rpb24oeCwgeSl7XHJcbiAgICAgIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcclxuICAvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29ya3Mgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXHJcbiAgJ19fcHJvdG9fXycgaW4gT2JqZWN0UHJvdG8gJiYgZnVuY3Rpb24oYnVnZ3ksIHNldCl7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXQgPSBjdHgoY2FsbCwgZ2V0T3duRGVzY3JpcHRvcihPYmplY3RQcm90bywgJ19fcHJvdG9fXycpLnNldCwgMik7XHJcbiAgICAgIHNldCh7fSwgQXJyYXlQcm90byk7XHJcbiAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWUgfVxyXG4gICAgb2JqZWN0U3RhdGljLnNldFByb3RvdHlwZU9mID0gc2V0UHJvdG90eXBlT2YgPSBzZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPLCBwcm90byl7XHJcbiAgICAgIGFzc2VydE9iamVjdChPKTtcclxuICAgICAgYXNzZXJ0KHByb3RvID09PSBudWxsIHx8IGlzT2JqZWN0KHByb3RvKSwgcHJvdG8sIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcclxuICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcclxuICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xyXG4gICAgICByZXR1cm4gTztcclxuICAgIH1cclxuICB9KCk7XHJcbiAgJGRlZmluZShTVEFUSUMsIE9CSkVDVCwgb2JqZWN0U3RhdGljKTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICAvLyBPYmplY3Qgc3RhdGljIG1ldGhvZHMgYWNjZXB0IHByaW1pdGl2ZXNcclxuICBmdW5jdGlvbiB3cmFwT2JqZWN0TWV0aG9kKGtleSwgTU9ERSl7XHJcbiAgICB2YXIgZm4gID0gT2JqZWN0W2tleV1cclxuICAgICAgLCBleHAgPSBjb3JlW09CSkVDVF1ba2V5XVxyXG4gICAgICAsIGYgICA9IDBcclxuICAgICAgLCBvICAgPSB7fTtcclxuICAgIGlmKCFleHAgfHwgaXNOYXRpdmUoZXhwKSl7XHJcbiAgICAgIG9ba2V5XSA9IE1PREUgPT0gMSA/IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XHJcbiAgICAgIH0gOiBNT0RFID09IDIgPyBmdW5jdGlvbihpdCl7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XHJcbiAgICAgIH0gOiBNT0RFID09IDMgPyBmdW5jdGlvbihpdCl7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGZhbHNlO1xyXG4gICAgICB9IDogTU9ERSA9PSA0ID8gZnVuY3Rpb24oaXQsIGtleSl7XHJcbiAgICAgICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSwga2V5KTtcclxuICAgICAgfSA6IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcclxuICAgICAgfTtcclxuICAgICAgdHJ5IHsgZm4oRE9UKSB9XHJcbiAgICAgIGNhdGNoKGUpeyBmID0gMSB9XHJcbiAgICAgICRkZWZpbmUoU1RBVElDICsgRk9SQ0VEICogZiwgT0JKRUNULCBvKTtcclxuICAgIH1cclxuICB9XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnZnJlZXplJywgMSk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnc2VhbCcsIDEpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ3ByZXZlbnRFeHRlbnNpb25zJywgMSk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnaXNGcm96ZW4nLCAyKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdpc1NlYWxlZCcsIDIpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2lzRXh0ZW5zaWJsZScsIDMpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIDQpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2dldFByb3RvdHlwZU9mJyk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgna2V5cycpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2dldE93blByb3BlcnR5TmFtZXMnKTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYubnVtYmVyLnN0YXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oaXNJbnRlZ2VyKXtcclxuICAkZGVmaW5lKFNUQVRJQywgTlVNQkVSLCB7XHJcbiAgICAvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxyXG4gICAgRVBTSUxPTjogcG93KDIsIC01MiksXHJcbiAgICAvLyAyMC4xLjIuMiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKVxyXG4gICAgaXNGaW5pdGU6IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShpdCk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXHJcbiAgICBpc0ludGVnZXI6IGlzSW50ZWdlcixcclxuICAgIC8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXHJcbiAgICBpc05hTjogc2FtZU5hTixcclxuICAgIC8vIDIwLjEuMi41IE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcilcclxuICAgIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uKG51bWJlcil7XHJcbiAgICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXHJcbiAgICBNQVhfU0FGRV9JTlRFR0VSOiBNQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXHJcbiAgICBNSU5fU0FGRV9JTlRFR0VSOiAtTUFYX1NBRkVfSU5URUdFUixcclxuICAgIC8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXHJcbiAgICBwYXJzZUZsb2F0OiBwYXJzZUZsb2F0LFxyXG4gICAgLy8gMjAuMS4yLjEzIE51bWJlci5wYXJzZUludChzdHJpbmcsIHJhZGl4KVxyXG4gICAgcGFyc2VJbnQ6IHBhcnNlSW50XHJcbiAgfSk7XHJcbi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxyXG59KE51bWJlci5pc0ludGVnZXIgfHwgZnVuY3Rpb24oaXQpe1xyXG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xyXG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lm1hdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRUNNQVNjcmlwdCA2IHNoaW1cclxuIWZ1bmN0aW9uKCl7XHJcbiAgLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxyXG4gIHZhciBFICAgID0gTWF0aC5FXHJcbiAgICAsIGV4cCAgPSBNYXRoLmV4cFxyXG4gICAgLCBsb2cgID0gTWF0aC5sb2dcclxuICAgICwgc3FydCA9IE1hdGguc3FydFxyXG4gICAgLCBzaWduID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uKHgpe1xyXG4gICAgICAgIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcclxuICAgICAgfTtcclxuICBcclxuICAvLyAyMC4yLjIuNSBNYXRoLmFzaW5oKHgpXHJcbiAgZnVuY3Rpb24gYXNpbmgoeCl7XHJcbiAgICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IGxvZyh4ICsgc3FydCh4ICogeCArIDEpKTtcclxuICB9XHJcbiAgLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcclxuICBmdW5jdGlvbiBleHBtMSh4KXtcclxuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBleHAoeCkgLSAxO1xyXG4gIH1cclxuICAgIFxyXG4gICRkZWZpbmUoU1RBVElDLCBNQVRILCB7XHJcbiAgICAvLyAyMC4yLjIuMyBNYXRoLmFjb3NoKHgpXHJcbiAgICBhY29zaDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiBpc0Zpbml0ZSh4KSA/IGxvZyh4IC8gRSArIHNxcnQoeCArIDEpICogc3FydCh4IC0gMSkgLyBFKSArIDEgOiB4O1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcclxuICAgIGFzaW5oOiBhc2luaCxcclxuICAgIC8vIDIwLjIuMi43IE1hdGguYXRhbmgoeClcclxuICAgIGF0YW5oOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogbG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXHJcbiAgICBjYnJ0OiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIHBvdyhhYnMoeCksIDEgLyAzKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxyXG4gICAgY2x6MzI6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMyIC0geFtUT19TVFJJTkddKDIpLmxlbmd0aCA6IDMyO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xMiBNYXRoLmNvc2goeClcclxuICAgIGNvc2g6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXHJcbiAgICBleHBtMTogZXhwbTEsXHJcbiAgICAvLyAyMC4yLjIuMTYgTWF0aC5mcm91bmQoeClcclxuICAgIC8vIFRPRE86IGZhbGxiYWNrIGZvciBJRTktXHJcbiAgICBmcm91bmQ6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbeF0pWzBdO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxyXG4gICAgaHlwb3Q6IGZ1bmN0aW9uKHZhbHVlMSwgdmFsdWUyKXtcclxuICAgICAgdmFyIHN1bSAgPSAwXHJcbiAgICAgICAgLCBsZW4xID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICwgbGVuMiA9IGxlbjFcclxuICAgICAgICAsIGFyZ3MgPSBBcnJheShsZW4xKVxyXG4gICAgICAgICwgbGFyZyA9IC1JbmZpbml0eVxyXG4gICAgICAgICwgYXJnO1xyXG4gICAgICB3aGlsZShsZW4xLS0pe1xyXG4gICAgICAgIGFyZyA9IGFyZ3NbbGVuMV0gPSArYXJndW1lbnRzW2xlbjFdO1xyXG4gICAgICAgIGlmKGFyZyA9PSBJbmZpbml0eSB8fCBhcmcgPT0gLUluZmluaXR5KXJldHVybiBJbmZpbml0eTtcclxuICAgICAgICBpZihhcmcgPiBsYXJnKWxhcmcgPSBhcmc7XHJcbiAgICAgIH1cclxuICAgICAgbGFyZyA9IGFyZyB8fCAxO1xyXG4gICAgICB3aGlsZShsZW4yLS0pc3VtICs9IHBvdyhhcmdzW2xlbjJdIC8gbGFyZywgMik7XHJcbiAgICAgIHJldHVybiBsYXJnICogc3FydChzdW0pO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcclxuICAgIGltdWw6IGZ1bmN0aW9uKHgsIHkpe1xyXG4gICAgICB2YXIgVUludDE2ID0gMHhmZmZmXHJcbiAgICAgICAgLCB4biA9ICt4XHJcbiAgICAgICAgLCB5biA9ICt5XHJcbiAgICAgICAgLCB4bCA9IFVJbnQxNiAmIHhuXHJcbiAgICAgICAgLCB5bCA9IFVJbnQxNiAmIHluO1xyXG4gICAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJbnQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJbnQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXHJcbiAgICBsb2cxcDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IGxvZygxICsgeCk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjIxIE1hdGgubG9nMTAoeClcclxuICAgIGxvZzEwOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIGxvZyh4KSAvIE1hdGguTE4xMDtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXHJcbiAgICBsb2cyOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIGxvZyh4KSAvIE1hdGguTE4yO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcclxuICAgIHNpZ246IHNpZ24sXHJcbiAgICAvLyAyMC4yLjIuMzAgTWF0aC5zaW5oKHgpXHJcbiAgICBzaW5oOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIChhYnMoeCA9ICt4KSA8IDEpID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDIgOiAoZXhwKHggLSAxKSAtIGV4cCgteCAtIDEpKSAqIChFIC8gMik7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxyXG4gICAgdGFuaDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KVxyXG4gICAgICAgICwgYiA9IGV4cG0xKC14KTtcclxuICAgICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxyXG4gICAgdHJ1bmM6IHRydW5jXHJcbiAgfSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LnN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKGZyb21DaGFyQ29kZSl7XHJcbiAgZnVuY3Rpb24gYXNzZXJ0Tm90UmVnRXhwKGl0KXtcclxuICAgIGlmKGNvZihpdCkgPT0gUkVHRVhQKXRocm93IFR5cGVFcnJvcigpO1xyXG4gIH1cclxuICBcclxuICAkZGVmaW5lKFNUQVRJQywgU1RSSU5HLCB7XHJcbiAgICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxyXG4gICAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHZhciByZXMgPSBbXVxyXG4gICAgICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICwgaSAgID0gMFxyXG4gICAgICAgICwgY29kZVxyXG4gICAgICB3aGlsZShsZW4gPiBpKXtcclxuICAgICAgICBjb2RlID0gK2FyZ3VtZW50c1tpKytdO1xyXG4gICAgICAgIGlmKHRvSW5kZXgoY29kZSwgMHgxMGZmZmYpICE9PSBjb2RlKXRocm93IFJhbmdlRXJyb3IoY29kZSArICcgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludCcpO1xyXG4gICAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXHJcbiAgICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxyXG4gICAgICAgICAgOiBmcm9tQ2hhckNvZGUoKChjb2RlIC09IDB4MTAwMDApID4+IDEwKSArIDB4ZDgwMCwgY29kZSAlIDB4NDAwICsgMHhkYzAwKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxyXG4gICAgcmF3OiBmdW5jdGlvbihjYWxsU2l0ZSl7XHJcbiAgICAgIHZhciByYXcgPSB0b09iamVjdChjYWxsU2l0ZS5yYXcpXHJcbiAgICAgICAgLCBsZW4gPSB0b0xlbmd0aChyYXcubGVuZ3RoKVxyXG4gICAgICAgICwgc2xuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICwgcmVzID0gW11cclxuICAgICAgICAsIGkgICA9IDA7XHJcbiAgICAgIHdoaWxlKGxlbiA+IGkpe1xyXG4gICAgICAgIHJlcy5wdXNoKFN0cmluZyhyYXdbaSsrXSkpO1xyXG4gICAgICAgIGlmKGkgPCBzbG4pcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgICB9IHJldHVybiByZXMuam9pbignJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgJGRlZmluZShQUk9UTywgU1RSSU5HLCB7XHJcbiAgICAvLyAyMS4xLjMuMyBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0KHBvcylcclxuICAgIGNvZGVQb2ludEF0OiBjcmVhdGVQb2ludEF0KGZhbHNlKSxcclxuICAgIC8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcclxuICAgIGVuZHNXaXRoOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcgLyosIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLyl7XHJcbiAgICAgIGFzc2VydE5vdFJlZ0V4cChzZWFyY2hTdHJpbmcpO1xyXG4gICAgICB2YXIgdGhhdCA9IFN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAgICwgZW5kUG9zaXRpb24gPSBhcmd1bWVudHNbMV1cclxuICAgICAgICAsIGxlbiA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKVxyXG4gICAgICAgICwgZW5kID0gZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGxlbiA6IG1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbik7XHJcbiAgICAgIHNlYXJjaFN0cmluZyArPSAnJztcclxuICAgICAgcmV0dXJuIHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoU3RyaW5nLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gICAgfSxcclxuICAgIC8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXHJcbiAgICBpbmNsdWRlczogZnVuY3Rpb24oc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xyXG4gICAgICBhc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTtcclxuICAgICAgcmV0dXJuICEhflN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKS5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzWzFdKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMS4xLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQoY291bnQpXHJcbiAgICByZXBlYXQ6IGZ1bmN0aW9uKGNvdW50KXtcclxuICAgICAgdmFyIHN0ciA9IFN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAgICwgcmVzID0gJydcclxuICAgICAgICAsIG4gICA9IHRvSW50ZWdlcihjb3VudCk7XHJcbiAgICAgIGlmKDAgPiBuIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xyXG4gICAgICBmb3IoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlpZihuICYgMSlyZXMgKz0gc3RyO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSxcclxuICAgIC8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXHJcbiAgICBzdGFydHNXaXRoOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XHJcbiAgICAgIGFzc2VydE5vdFJlZ0V4cChzZWFyY2hTdHJpbmcpO1xyXG4gICAgICB2YXIgdGhhdCAgPSBTdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgICAsIGluZGV4ID0gdG9MZW5ndGgobWluKGFyZ3VtZW50c1sxXSwgdGhhdC5sZW5ndGgpKTtcclxuICAgICAgc2VhcmNoU3RyaW5nICs9ICcnO1xyXG4gICAgICByZXR1cm4gdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2hTdHJpbmcubGVuZ3RoKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KFN0cmluZy5mcm9tQ2hhckNvZGUpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuYXJyYXkuc3RhdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICAkZGVmaW5lKFNUQVRJQyArIEZPUkNFRCAqIGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoQXJyYXkuZnJvbSksIEFSUkFZLCB7XHJcbiAgICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICBmcm9tOiBmdW5jdGlvbihhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XHJcbiAgICAgIHZhciBPICAgICAgID0gT2JqZWN0KGFzc2VydERlZmluZWQoYXJyYXlMaWtlKSlcclxuICAgICAgICAsIG1hcGZuICAgPSBhcmd1bWVudHNbMV1cclxuICAgICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgLCBmICAgICAgID0gbWFwcGluZyA/IGN0eChtYXBmbiwgYXJndW1lbnRzWzJdLCAyKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICwgaW5kZXggICA9IDBcclxuICAgICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwO1xyXG4gICAgICBpZihpc0l0ZXJhYmxlKE8pKXtcclxuICAgICAgICByZXN1bHQgPSBuZXcgKGdlbmVyaWModGhpcywgQXJyYXkpKTtcclxuICAgICAgICBzYWZlSXRlckNsb3NlKGZ1bmN0aW9uKGl0ZXJhdG9yKXtcclxuICAgICAgICAgIGZvcig7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gZihzdGVwLnZhbHVlLCBpbmRleCkgOiBzdGVwLnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGdldEl0ZXJhdG9yKE8pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSBuZXcgKGdlbmVyaWModGhpcywgQXJyYXkpKShsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCkpO1xyXG4gICAgICAgIGZvcig7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcclxuICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gZihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAkZGVmaW5lKFNUQVRJQywgQVJSQVksIHtcclxuICAgIC8vIDIyLjEuMi4zIEFycmF5Lm9mKCAuLi5pdGVtcylcclxuICAgIG9mOiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgICAgdmFyIGluZGV4ICA9IDBcclxuICAgICAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgICAsIHJlc3VsdCA9IG5ldyAoZ2VuZXJpYyh0aGlzLCBBcnJheSkpKGxlbmd0aCk7XHJcbiAgICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XHJcbiAgICAgIHJlc3VsdC5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgc2V0U3BlY2llcyhBcnJheSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LmFycmF5LnByb3RvdHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgJGRlZmluZShQUk9UTywgQVJSQVksIHtcclxuICAgIC8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxyXG4gICAgY29weVdpdGhpbjogZnVuY3Rpb24odGFyZ2V0IC8qID0gMCAqLywgc3RhcnQgLyogPSAwLCBlbmQgPSBAbGVuZ3RoICovKXtcclxuICAgICAgdmFyIE8gICAgID0gT2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCBsZW4gICA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxyXG4gICAgICAgICwgZnJvbSAgPSB0b0luZGV4KHN0YXJ0LCBsZW4pXHJcbiAgICAgICAgLCBlbmQgICA9IGFyZ3VtZW50c1syXVxyXG4gICAgICAgICwgZmluICAgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pXHJcbiAgICAgICAgLCBjb3VudCA9IG1pbihmaW4gLSBmcm9tLCBsZW4gLSB0bylcclxuICAgICAgICAsIGluYyAgID0gMTtcclxuICAgICAgaWYoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KXtcclxuICAgICAgICBpbmMgID0gLTE7XHJcbiAgICAgICAgZnJvbSA9IGZyb20gKyBjb3VudCAtIDE7XHJcbiAgICAgICAgdG8gICA9IHRvICsgY291bnQgLSAxO1xyXG4gICAgICB9XHJcbiAgICAgIHdoaWxlKGNvdW50LS0gPiAwKXtcclxuICAgICAgICBpZihmcm9tIGluIE8pT1t0b10gPSBPW2Zyb21dO1xyXG4gICAgICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xyXG4gICAgICAgIHRvICs9IGluYztcclxuICAgICAgICBmcm9tICs9IGluYztcclxuICAgICAgfSByZXR1cm4gTztcclxuICAgIH0sXHJcbiAgICAvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcclxuICAgIGZpbGw6IGZ1bmN0aW9uKHZhbHVlIC8qLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgICB2YXIgTyAgICAgID0gT2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgICAsIGluZGV4ICA9IHRvSW5kZXgoYXJndW1lbnRzWzFdLCBsZW5ndGgpXHJcbiAgICAgICAgLCBlbmQgICAgPSBhcmd1bWVudHNbMl1cclxuICAgICAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XHJcbiAgICAgIHdoaWxlKGVuZFBvcyA+IGluZGV4KU9baW5kZXgrK10gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIE87XHJcbiAgICB9LFxyXG4gICAgLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgZmluZDogY3JlYXRlQXJyYXlNZXRob2QoNSksXHJcbiAgICAvLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgIGZpbmRJbmRleDogY3JlYXRlQXJyYXlNZXRob2QoNilcclxuICB9KTtcclxuICBcclxuICBpZihmcmFtZXdvcmspe1xyXG4gICAgLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxyXG4gICAgZm9yRWFjaC5jYWxsKGFycmF5KCdmaW5kLGZpbmRJbmRleCxmaWxsLGNvcHlXaXRoaW4sZW50cmllcyxrZXlzLHZhbHVlcycpLCBmdW5jdGlvbihpdCl7XHJcbiAgICAgIEFycmF5VW5zY29wYWJsZXNbaXRdID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgU1lNQk9MX1VOU0NPUEFCTEVTIGluIEFycmF5UHJvdG8gfHwgaGlkZGVuKEFycmF5UHJvdG8sIFNZTUJPTF9VTlNDT1BBQkxFUywgQXJyYXlVbnNjb3BhYmxlcyk7XHJcbiAgfVxyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5pdGVyYXRvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihhdCl7XHJcbiAgLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxyXG4gIC8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXHJcbiAgLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxyXG4gIC8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxyXG4gIGRlZmluZVN0ZEl0ZXJhdG9ycyhBcnJheSwgQVJSQVksIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcclxuICAgIHNldCh0aGlzLCBJVEVSLCB7bzogdG9PYmplY3QoaXRlcmF0ZWQpLCBpOiAwLCBrOiBraW5kfSk7XHJcbiAgLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXHJcbiAgfSwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICAgLCBPICAgICA9IGl0ZXIub1xyXG4gICAgICAsIGtpbmQgID0gaXRlci5rXHJcbiAgICAgICwgaW5kZXggPSBpdGVyLmkrKztcclxuICAgIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcclxuICAgICAgaXRlci5vID0gdW5kZWZpbmVkO1xyXG4gICAgICByZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgIH1cclxuICAgIGlmKGtpbmQgPT0gS0VZKSAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgaW5kZXgpO1xyXG4gICAgaWYoa2luZCA9PSBWQUxVRSlyZXR1cm4gaXRlclJlc3VsdCgwLCBPW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDAsIFtpbmRleCwgT1tpbmRleF1dKTtcclxuICB9LCBWQUxVRSk7XHJcbiAgXHJcbiAgLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxyXG4gIEl0ZXJhdG9yc1tBUkdVTUVOVFNdID0gSXRlcmF0b3JzW0FSUkFZXTtcclxuICBcclxuICAvLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXHJcbiAgZGVmaW5lU3RkSXRlcmF0b3JzKFN0cmluZywgU1RSSU5HLCBmdW5jdGlvbihpdGVyYXRlZCl7XHJcbiAgICBzZXQodGhpcywgSVRFUiwge286IFN0cmluZyhpdGVyYXRlZCksIGk6IDB9KTtcclxuICAvLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXHJcbiAgfSwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICAgLCBPICAgICA9IGl0ZXIub1xyXG4gICAgICAsIGluZGV4ID0gaXRlci5pXHJcbiAgICAgICwgcG9pbnQ7XHJcbiAgICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgIHBvaW50ID0gYXQuY2FsbChPLCBpbmRleCk7XHJcbiAgICBpdGVyLmkgKz0gcG9pbnQubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgcG9pbnQpO1xyXG4gIH0pO1xyXG59KGNyZWF0ZVBvaW50QXQodHJ1ZSkpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiB3ZWIuaW1tZWRpYXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBzZXRJbW1lZGlhdGUgc2hpbVxyXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBlbHNlOlxyXG5pc0Z1bmN0aW9uKHNldEltbWVkaWF0ZSkgJiYgaXNGdW5jdGlvbihjbGVhckltbWVkaWF0ZSkgfHwgZnVuY3Rpb24oT05SRUFEWVNUQVRFQ0hBTkdFKXtcclxuICB2YXIgcG9zdE1lc3NhZ2UgICAgICA9IGdsb2JhbC5wb3N0TWVzc2FnZVxyXG4gICAgLCBhZGRFdmVudExpc3RlbmVyID0gZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXJcclxuICAgICwgTWVzc2FnZUNoYW5uZWwgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxyXG4gICAgLCBjb3VudGVyICAgICAgICAgID0gMFxyXG4gICAgLCBxdWV1ZSAgICAgICAgICAgID0ge31cclxuICAgICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XHJcbiAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oZm4pe1xyXG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XHJcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xyXG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGludm9rZShpc0Z1bmN0aW9uKGZuKSA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcclxuICAgIH1cclxuICAgIGRlZmVyKGNvdW50ZXIpO1xyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfVxyXG4gIGNsZWFySW1tZWRpYXRlID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcnVuKGlkKXtcclxuICAgIGlmKGhhcyhxdWV1ZSwgaWQpKXtcclxuICAgICAgdmFyIGZuID0gcXVldWVbaWRdO1xyXG4gICAgICBkZWxldGUgcXVldWVbaWRdO1xyXG4gICAgICBmbigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBsaXN0bmVyKGV2ZW50KXtcclxuICAgIHJ1bihldmVudC5kYXRhKTtcclxuICB9XHJcbiAgLy8gTm9kZS5qcyAwLjgtXHJcbiAgaWYoTk9ERSl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgbmV4dFRpY2socGFydC5jYWxsKHJ1biwgaWQpKTtcclxuICAgIH1cclxuICAvLyBNb2Rlcm4gYnJvd3NlcnMsIHNraXAgaW1wbGVtZW50YXRpb24gZm9yIFdlYldvcmtlcnNcclxuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyBvYmplY3RcclxuICB9IGVsc2UgaWYoYWRkRXZlbnRMaXN0ZW5lciAmJiBpc0Z1bmN0aW9uKHBvc3RNZXNzYWdlKSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIHBvc3RNZXNzYWdlKGlkLCAnKicpO1xyXG4gICAgfVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RuZXIsIGZhbHNlKTtcclxuICAvLyBXZWJXb3JrZXJzXHJcbiAgfSBlbHNlIGlmKGlzRnVuY3Rpb24oTWVzc2FnZUNoYW5uZWwpKXtcclxuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XHJcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcclxuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdG5lcjtcclxuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xyXG4gIC8vIElFOC1cclxuICB9IGVsc2UgaWYoZG9jdW1lbnQgJiYgT05SRUFEWVNUQVRFQ0hBTkdFIGluIGRvY3VtZW50W0NSRUFURV9FTEVNRU5UXSgnc2NyaXB0Jykpe1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnRbQ1JFQVRFX0VMRU1FTlRdKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICBydW4oaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcclxuICB9IGVsc2Uge1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIHNldFRpbWVvdXQocnVuLCAwLCBpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KCdvbnJlYWR5c3RhdGVjaGFuZ2UnKTtcclxuJGRlZmluZShHTE9CQUwgKyBCSU5ELCB7XHJcbiAgc2V0SW1tZWRpYXRlOiAgIHNldEltbWVkaWF0ZSxcclxuICBjbGVhckltbWVkaWF0ZTogY2xlYXJJbW1lZGlhdGVcclxufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5wcm9taXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEVTNiBwcm9taXNlcyBzaGltXHJcbi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRpZnkvbmF0aXZlLXByb21pc2Utb25seS9cclxuIWZ1bmN0aW9uKFByb21pc2UsIHRlc3Qpe1xyXG4gIGlzRnVuY3Rpb24oUHJvbWlzZSkgJiYgaXNGdW5jdGlvbihQcm9taXNlLnJlc29sdmUpXHJcbiAgJiYgUHJvbWlzZS5yZXNvbHZlKHRlc3QgPSBuZXcgUHJvbWlzZShmdW5jdGlvbigpe30pKSA9PSB0ZXN0XHJcbiAgfHwgZnVuY3Rpb24oYXNhcCwgUkVDT1JEKXtcclxuICAgIGZ1bmN0aW9uIGlzVGhlbmFibGUoaXQpe1xyXG4gICAgICB2YXIgdGhlbjtcclxuICAgICAgaWYoaXNPYmplY3QoaXQpKXRoZW4gPSBpdC50aGVuO1xyXG4gICAgICByZXR1cm4gaXNGdW5jdGlvbih0aGVuKSA/IHRoZW4gOiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocHJvbWlzZSl7XHJcbiAgICAgIHZhciByZWNvcmQgPSBwcm9taXNlW1JFQ09SRF1cclxuICAgICAgICAsIGNoYWluICA9IHJlY29yZC5jXHJcbiAgICAgICAgLCBpICAgICAgPSAwXHJcbiAgICAgICAgLCByZWFjdDtcclxuICAgICAgaWYocmVjb3JkLmgpcmV0dXJuIHRydWU7XHJcbiAgICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xyXG4gICAgICAgIHJlYWN0ID0gY2hhaW5baSsrXTtcclxuICAgICAgICBpZihyZWFjdC5mYWlsIHx8IGhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocmVhY3QuUCkpcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG5vdGlmeShyZWNvcmQsIHJlamVjdCl7XHJcbiAgICAgIHZhciBjaGFpbiA9IHJlY29yZC5jO1xyXG4gICAgICBpZihyZWplY3QgfHwgY2hhaW4ubGVuZ3RoKWFzYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcHJvbWlzZSA9IHJlY29yZC5wXHJcbiAgICAgICAgICAsIHZhbHVlICAgPSByZWNvcmQudlxyXG4gICAgICAgICAgLCBvayAgICAgID0gcmVjb3JkLnMgPT0gMVxyXG4gICAgICAgICAgLCBpICAgICAgID0gMDtcclxuICAgICAgICBpZihyZWplY3QgJiYgIWhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocHJvbWlzZSkpe1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZighaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKSl7XHJcbiAgICAgICAgICAgICAgaWYoTk9ERSl7XHJcbiAgICAgICAgICAgICAgICBpZighcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSkpe1xyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IG5vZGUuanMgYmVoYXZpb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNGdW5jdGlvbihjb25zb2xlLmVycm9yKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAxZTMpO1xyXG4gICAgICAgIH0gZWxzZSB3aGlsZShjaGFpbi5sZW5ndGggPiBpKSFmdW5jdGlvbihyZWFjdCl7XHJcbiAgICAgICAgICB2YXIgY2IgPSBvayA/IHJlYWN0Lm9rIDogcmVhY3QuZmFpbFxyXG4gICAgICAgICAgICAsIHJldCwgdGhlbjtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKGNiKXtcclxuICAgICAgICAgICAgICBpZighb2spcmVjb3JkLmggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHJldCA9IGNiID09PSB0cnVlID8gdmFsdWUgOiBjYih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYocmV0ID09PSByZWFjdC5QKXtcclxuICAgICAgICAgICAgICAgIHJlYWN0LnJlaihUeXBlRXJyb3IoUFJPTUlTRSArICctY2hhaW4gY3ljbGUnKSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJldCkpe1xyXG4gICAgICAgICAgICAgICAgdGhlbi5jYWxsKHJldCwgcmVhY3QucmVzLCByZWFjdC5yZWopO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSByZWFjdC5yZXMocmV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHJlYWN0LnJlaih2YWx1ZSk7XHJcbiAgICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHJlYWN0LnJlaihlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0oY2hhaW5baSsrXSk7XHJcbiAgICAgICAgY2hhaW4ubGVuZ3RoID0gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKXtcclxuICAgICAgdmFyIHJlY29yZCA9IHRoaXNcclxuICAgICAgICAsIHRoZW4sIHdyYXBwZXI7XHJcbiAgICAgIGlmKHJlY29yZC5kKXJldHVybjtcclxuICAgICAgcmVjb3JkLmQgPSB0cnVlO1xyXG4gICAgICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XHJcbiAgICAgICAgICB3cmFwcGVyID0ge3I6IHJlY29yZCwgZDogZmFsc2V9OyAvLyB3cmFwXHJcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eChyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KHJlamVjdCwgd3JhcHBlciwgMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWNvcmQudiA9IHZhbHVlO1xyXG4gICAgICAgICAgcmVjb3JkLnMgPSAxO1xyXG4gICAgICAgICAgbm90aWZ5KHJlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVqZWN0LmNhbGwod3JhcHBlciB8fCB7cjogcmVjb3JkLCBkOiBmYWxzZX0sIGVycik7IC8vIHdyYXBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKXtcclxuICAgICAgdmFyIHJlY29yZCA9IHRoaXM7XHJcbiAgICAgIGlmKHJlY29yZC5kKXJldHVybjtcclxuICAgICAgcmVjb3JkLmQgPSB0cnVlO1xyXG4gICAgICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxyXG4gICAgICByZWNvcmQudiA9IHZhbHVlO1xyXG4gICAgICByZWNvcmQucyA9IDI7XHJcbiAgICAgIG5vdGlmeShyZWNvcmQsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3IoQyl7XHJcbiAgICAgIHZhciBTID0gYXNzZXJ0T2JqZWN0KEMpW1NZTUJPTF9TUEVDSUVTXTtcclxuICAgICAgcmV0dXJuIFMgIT0gdW5kZWZpbmVkID8gUyA6IEM7XHJcbiAgICB9XHJcbiAgICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxyXG4gICAgUHJvbWlzZSA9IGZ1bmN0aW9uKGV4ZWN1dG9yKXtcclxuICAgICAgYXNzZXJ0RnVuY3Rpb24oZXhlY3V0b3IpO1xyXG4gICAgICBhc3NlcnRJbnN0YW5jZSh0aGlzLCBQcm9taXNlLCBQUk9NSVNFKTtcclxuICAgICAgdmFyIHJlY29yZCA9IHtcclxuICAgICAgICBwOiB0aGlzLCAgICAgIC8vIHByb21pc2VcclxuICAgICAgICBjOiBbXSwgICAgICAgIC8vIGNoYWluXHJcbiAgICAgICAgczogMCwgICAgICAgICAvLyBzdGF0ZVxyXG4gICAgICAgIGQ6IGZhbHNlLCAgICAgLy8gZG9uZVxyXG4gICAgICAgIHY6IHVuZGVmaW5lZCwgLy8gdmFsdWVcclxuICAgICAgICBoOiBmYWxzZSAgICAgIC8vIGhhbmRsZWQgcmVqZWN0aW9uXHJcbiAgICAgIH07XHJcbiAgICAgIGhpZGRlbih0aGlzLCBSRUNPUkQsIHJlY29yZCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZXhlY3V0b3IoY3R4KHJlc29sdmUsIHJlY29yZCwgMSksIGN0eChyZWplY3QsIHJlY29yZCwgMSkpO1xyXG4gICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3NpZ25IaWRkZW4oUHJvbWlzZVtQUk9UT1RZUEVdLCB7XHJcbiAgICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXHJcbiAgICAgIHRoZW46IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcclxuICAgICAgICB2YXIgUyA9IGFzc2VydE9iamVjdChhc3NlcnRPYmplY3QodGhpcylbQ09OU1RSVUNUT1JdKVtTWU1CT0xfU1BFQ0lFU107XHJcbiAgICAgICAgdmFyIHJlYWN0ID0ge1xyXG4gICAgICAgICAgb2s6ICAgaXNGdW5jdGlvbihvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IHRydWUsXHJcbiAgICAgICAgICBmYWlsOiBpc0Z1bmN0aW9uKG9uUmVqZWN0ZWQpICA/IG9uUmVqZWN0ZWQgIDogZmFsc2VcclxuICAgICAgICB9ICwgUCA9IHJlYWN0LlAgPSBuZXcgKFMgIT0gdW5kZWZpbmVkID8gUyA6IFByb21pc2UpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICByZWFjdC5yZXMgPSBhc3NlcnRGdW5jdGlvbihyZXNvbHZlKTtcclxuICAgICAgICAgIHJlYWN0LnJlaiA9IGFzc2VydEZ1bmN0aW9uKHJlamVjdCk7XHJcbiAgICAgICAgfSksIHJlY29yZCA9IHRoaXNbUkVDT1JEXTtcclxuICAgICAgICByZWNvcmQuYy5wdXNoKHJlYWN0KTtcclxuICAgICAgICByZWNvcmQucyAmJiBub3RpZnkocmVjb3JkKTtcclxuICAgICAgICByZXR1cm4gUDtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcclxuICAgICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFzc2lnbkhpZGRlbihQcm9taXNlLCB7XHJcbiAgICAgIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxyXG4gICAgICBhbGw6IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICB2YXIgUHJvbWlzZSA9IGdldENvbnN0cnVjdG9yKHRoaXMpXHJcbiAgICAgICAgICAsIHZhbHVlcyAgPSBbXTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgcHVzaCwgdmFsdWVzKTtcclxuICAgICAgICAgIHZhciByZW1haW5pbmcgPSB2YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICwgcmVzdWx0cyAgID0gQXJyYXkocmVtYWluaW5nKTtcclxuICAgICAgICAgIGlmKHJlbWFpbmluZylmb3JFYWNoLmNhbGwodmFsdWVzLCBmdW5jdGlvbihwcm9taXNlLCBpbmRleCl7XHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUocmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVsc2UgcmVzb2x2ZShyZXN1bHRzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxyXG4gICAgICByYWNlOiBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICAgICAgdmFyIFByb21pc2UgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcclxuICAgICAgcmVqZWN0OiBmdW5jdGlvbihyKXtcclxuICAgICAgICByZXR1cm4gbmV3IChnZXRDb25zdHJ1Y3Rvcih0aGlzKSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgIHJlamVjdChyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXHJcbiAgICAgIHJlc29sdmU6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdCh4KSAmJiBSRUNPUkQgaW4geCAmJiBnZXRQcm90b3R5cGVPZih4KSA9PT0gdGhpc1tQUk9UT1RZUEVdXHJcbiAgICAgICAgICA/IHggOiBuZXcgKGdldENvbnN0cnVjdG9yKHRoaXMpKShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0obmV4dFRpY2sgfHwgc2V0SW1tZWRpYXRlLCBzYWZlU3ltYm9sKCdyZWNvcmQnKSk7XHJcbiAgc2V0VG9TdHJpbmdUYWcoUHJvbWlzZSwgUFJPTUlTRSk7XHJcbiAgc2V0U3BlY2llcyhQcm9taXNlKTtcclxuICAkZGVmaW5lKEdMT0JBTCArIEZPUkNFRCAqICFpc05hdGl2ZShQcm9taXNlKSwge1Byb21pc2U6IFByb21pc2V9KTtcclxufShnbG9iYWxbUFJPTUlTRV0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuY29sbGVjdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBFQ01BU2NyaXB0IDYgY29sbGVjdGlvbnMgc2hpbVxyXG4hZnVuY3Rpb24oKXtcclxuICB2YXIgVUlEICAgPSBzYWZlU3ltYm9sKCd1aWQnKVxyXG4gICAgLCBPMSAgICA9IHNhZmVTeW1ib2woJ08xJylcclxuICAgICwgV0VBSyAgPSBzYWZlU3ltYm9sKCd3ZWFrJylcclxuICAgICwgTEVBSyAgPSBzYWZlU3ltYm9sKCdsZWFrJylcclxuICAgICwgTEFTVCAgPSBzYWZlU3ltYm9sKCdsYXN0JylcclxuICAgICwgRklSU1QgPSBzYWZlU3ltYm9sKCdmaXJzdCcpXHJcbiAgICAsIFNJWkUgID0gREVTQyA/IHNhZmVTeW1ib2woJ3NpemUnKSA6ICdzaXplJ1xyXG4gICAgLCB1aWQgICA9IDBcclxuICAgICwgdG1wICAgPSB7fTtcclxuICBcclxuICBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uKEMsIE5BTUUsIG1ldGhvZHMsIGNvbW1vbk1ldGhvZHMsIGlzTWFwLCBpc1dlYWspe1xyXG4gICAgdmFyIEFEREVSID0gaXNNYXAgPyAnc2V0JyA6ICdhZGQnXHJcbiAgICAgICwgcHJvdG8gPSBDICYmIENbUFJPVE9UWVBFXVxyXG4gICAgICAsIE8gICAgID0ge307XHJcbiAgICBmdW5jdGlvbiBpbml0RnJvbUl0ZXJhYmxlKHRoYXQsIGl0ZXJhYmxlKXtcclxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBpc01hcCwgdGhhdFtBRERFUl0sIHRoYXQpO1xyXG4gICAgICByZXR1cm4gdGhhdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZpeFNWWihrZXksIGNoYWluKXtcclxuICAgICAgdmFyIG1ldGhvZCA9IHByb3RvW2tleV07XHJcbiAgICAgIGlmKGZyYW1ld29yaylwcm90b1trZXldID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG1ldGhvZC5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7XHJcbiAgICAgICAgcmV0dXJuIGNoYWluID8gdGhpcyA6IHJlc3VsdDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmKCFpc05hdGl2ZShDKSB8fCAhKGlzV2VhayB8fCAoIUJVR0dZX0lURVJBVE9SUyAmJiBoYXMocHJvdG8sIEZPUl9FQUNIKSAmJiBoYXMocHJvdG8sICdlbnRyaWVzJykpKSl7XHJcbiAgICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXHJcbiAgICAgIEMgPSBpc1dlYWtcclxuICAgICAgICA/IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICAgICAgYXNzZXJ0SW5zdGFuY2UodGhpcywgQywgTkFNRSk7XHJcbiAgICAgICAgICAgIHNldCh0aGlzLCBVSUQsIHVpZCsrKTtcclxuICAgICAgICAgICAgaW5pdEZyb21JdGVyYWJsZSh0aGlzLCBpdGVyYWJsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgYXNzZXJ0SW5zdGFuY2UodGhhdCwgQywgTkFNRSk7XHJcbiAgICAgICAgICAgIHNldCh0aGF0LCBPMSwgY3JlYXRlKG51bGwpKTtcclxuICAgICAgICAgICAgc2V0KHRoYXQsIFNJWkUsIDApO1xyXG4gICAgICAgICAgICBzZXQodGhhdCwgTEFTVCwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgc2V0KHRoYXQsIEZJUlNULCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBpbml0RnJvbUl0ZXJhYmxlKHRoYXQsIGl0ZXJhYmxlKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIGFzc2lnbkhpZGRlbihhc3NpZ25IaWRkZW4oQ1tQUk9UT1RZUEVdLCBtZXRob2RzKSwgY29tbW9uTWV0aG9kcyk7XHJcbiAgICAgIGlzV2VhayB8fCAhREVTQyB8fCBkZWZpbmVQcm9wZXJ0eShDW1BST1RPVFlQRV0sICdzaXplJywge2dldDogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gYXNzZXJ0RGVmaW5lZCh0aGlzW1NJWkVdKTtcclxuICAgICAgfX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIE5hdGl2ZSA9IENcclxuICAgICAgICAsIGluc3QgICA9IG5ldyBDXHJcbiAgICAgICAgLCBjaGFpbiAgPSBpbnN0W0FEREVSXShpc1dlYWsgPyB7fSA6IC0wLCAxKVxyXG4gICAgICAgICwgYnVnZ3laZXJvO1xyXG4gICAgICAvLyB3cmFwIHRvIGluaXQgY29sbGVjdGlvbnMgZnJvbSBpdGVyYWJsZVxyXG4gICAgICBpZihjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKGZ1bmN0aW9uKE8peyBuZXcgQyhPKSB9KSl7XHJcbiAgICAgICAgQyA9IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICAgIGFzc2VydEluc3RhbmNlKHRoaXMsIEMsIE5BTUUpO1xyXG4gICAgICAgICAgcmV0dXJuIGluaXRGcm9tSXRlcmFibGUobmV3IE5hdGl2ZSwgaXRlcmFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDW1BST1RPVFlQRV0gPSBwcm90bztcclxuICAgICAgICBpZihmcmFtZXdvcmspcHJvdG9bQ09OU1RSVUNUT1JdID0gQztcclxuICAgICAgfVxyXG4gICAgICBpc1dlYWsgfHwgaW5zdFtGT1JfRUFDSF0oZnVuY3Rpb24odmFsLCBrZXkpe1xyXG4gICAgICAgIGJ1Z2d5WmVybyA9IDEgLyBrZXkgPT09IC1JbmZpbml0eTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGZpeCBjb252ZXJ0aW5nIC0wIGtleSB0byArMFxyXG4gICAgICBpZihidWdneVplcm8pe1xyXG4gICAgICAgIGZpeFNWWignZGVsZXRlJyk7XHJcbiAgICAgICAgZml4U1ZaKCdoYXMnKTtcclxuICAgICAgICBpc01hcCAmJiBmaXhTVlooJ2dldCcpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vICsgZml4IC5hZGQgJiAuc2V0IGZvciBjaGFpbmluZ1xyXG4gICAgICBpZihidWdneVplcm8gfHwgY2hhaW4gIT09IGluc3QpZml4U1ZaKEFEREVSLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xyXG4gICAgc2V0U3BlY2llcyhDKTtcclxuICAgIFxyXG4gICAgT1tOQU1FXSA9IEM7XHJcbiAgICAkZGVmaW5lKEdMT0JBTCArIFdSQVAgKyBGT1JDRUQgKiAhaXNOYXRpdmUoQyksIE8pO1xyXG4gICAgXHJcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cclxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcclxuICAgIGlzV2VhayB8fCBkZWZpbmVTdGRJdGVyYXRvcnMoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xyXG4gICAgICBzZXQodGhpcywgSVRFUiwge286IGl0ZXJhdGVkLCBrOiBraW5kfSk7XHJcbiAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXHJcbiAgICAgICAgLCBraW5kICA9IGl0ZXIua1xyXG4gICAgICAgICwgZW50cnkgPSBpdGVyLmw7XHJcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxyXG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcclxuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcclxuICAgICAgaWYoIWl0ZXIubyB8fCAhKGl0ZXIubCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogaXRlci5vW0ZJUlNUXSkpe1xyXG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXHJcbiAgICAgICAgaXRlci5vID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcclxuICAgICAgaWYoa2luZCA9PSBLRVkpICByZXR1cm4gaXRlclJlc3VsdCgwLCBlbnRyeS5rKTtcclxuICAgICAgaWYoa2luZCA9PSBWQUxVRSlyZXR1cm4gaXRlclJlc3VsdCgwLCBlbnRyeS52KTtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlclJlc3VsdCgwLCBbZW50cnkuaywgZW50cnkudl0pOyAgIFxyXG4gICAgfSwgaXNNYXAgPyBLRVkrVkFMVUUgOiBWQUxVRSwgIWlzTWFwKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIEM7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGZhc3RLZXkoaXQsIGNyZWF0ZSl7XHJcbiAgICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XHJcbiAgICBpZighaXNPYmplY3QoaXQpKXJldHVybiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xyXG4gICAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcclxuICAgIGlmKGlzRnJvemVuKGl0KSlyZXR1cm4gJ0YnO1xyXG4gICAgaWYoIWhhcyhpdCwgVUlEKSl7XHJcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXHJcbiAgICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcclxuICAgICAgLy8gYWRkIG1pc3Npbmcgb2JqZWN0IGlkXHJcbiAgICAgIGhpZGRlbihpdCwgVUlELCArK3VpZCk7XHJcbiAgICAvLyByZXR1cm4gb2JqZWN0IGlkIHdpdGggcHJlZml4XHJcbiAgICB9IHJldHVybiAnTycgKyBpdFtVSURdO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRFbnRyeSh0aGF0LCBrZXkpe1xyXG4gICAgLy8gZmFzdCBjYXNlXHJcbiAgICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xyXG4gICAgaWYoaW5kZXggIT0gJ0YnKXJldHVybiB0aGF0W08xXVtpbmRleF07XHJcbiAgICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcclxuICAgIGZvcihlbnRyeSA9IHRoYXRbRklSU1RdOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcclxuICAgICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBkZWYodGhhdCwga2V5LCB2YWx1ZSl7XHJcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXHJcbiAgICAgICwgcHJldiwgaW5kZXg7XHJcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcclxuICAgIGlmKGVudHJ5KWVudHJ5LnYgPSB2YWx1ZTtcclxuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGF0W0xBU1RdID0gZW50cnkgPSB7XHJcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XHJcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxyXG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxyXG4gICAgICAgIHA6IHByZXYgPSB0aGF0W0xBU1RdLCAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxyXG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XHJcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcclxuICAgICAgfTtcclxuICAgICAgaWYoIXRoYXRbRklSU1RdKXRoYXRbRklSU1RdID0gZW50cnk7XHJcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XHJcbiAgICAgIHRoYXRbU0laRV0rKztcclxuICAgICAgLy8gYWRkIHRvIGluZGV4XHJcbiAgICAgIGlmKGluZGV4ICE9ICdGJyl0aGF0W08xXVtpbmRleF0gPSBlbnRyeTtcclxuICAgIH0gcmV0dXJuIHRoYXQ7XHJcbiAgfVxyXG5cclxuICB2YXIgY29sbGVjdGlvbk1ldGhvZHMgPSB7XHJcbiAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcclxuICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0W08xXSwgZW50cnkgPSB0aGF0W0ZJUlNUXTsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XHJcbiAgICAgICAgZW50cnkuciA9IHRydWU7XHJcbiAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xyXG4gICAgICB9XHJcbiAgICAgIHRoYXRbRklSU1RdID0gdGhhdFtMQVNUXSA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhhdFtTSVpFXSA9IDA7XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxyXG4gICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXHJcbiAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIHRoYXQgID0gdGhpc1xyXG4gICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xyXG4gICAgICBpZihlbnRyeSl7XHJcbiAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXHJcbiAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xyXG4gICAgICAgIGRlbGV0ZSB0aGF0W08xXVtlbnRyeS5pXTtcclxuICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcclxuICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XHJcbiAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xyXG4gICAgICAgIGlmKHRoYXRbRklSU1RdID09IGVudHJ5KXRoYXRbRklSU1RdID0gbmV4dDtcclxuICAgICAgICBpZih0aGF0W0xBU1RdID09IGVudHJ5KXRoYXRbTEFTVF0gPSBwcmV2O1xyXG4gICAgICAgIHRoYXRbU0laRV0tLTtcclxuICAgICAgfSByZXR1cm4gISFlbnRyeTtcclxuICAgIH0sXHJcbiAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgZm9yRWFjaDogZnVuY3Rpb24oY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSwgMylcclxuICAgICAgICAsIGVudHJ5O1xyXG4gICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXNbRklSU1RdKXtcclxuICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xyXG4gICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxyXG4gICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxyXG4gICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXHJcbiAgICBoYXM6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIDIzLjEgTWFwIE9iamVjdHNcclxuICBNYXAgPSBnZXRDb2xsZWN0aW9uKE1hcCwgTUFQLCB7XHJcbiAgICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xyXG4gICAgfSxcclxuICAgIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICByZXR1cm4gZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9LCBjb2xsZWN0aW9uTWV0aG9kcywgdHJ1ZSk7XHJcbiAgXHJcbiAgLy8gMjMuMiBTZXQgT2JqZWN0c1xyXG4gIFNldCA9IGdldENvbGxlY3Rpb24oU2V0LCBTRVQsIHtcclxuICAgIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxyXG4gICAgYWRkOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgIHJldHVybiBkZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIGNvbGxlY3Rpb25NZXRob2RzKTtcclxuICBcclxuICBmdW5jdGlvbiBkZWZXZWFrKHRoYXQsIGtleSwgdmFsdWUpe1xyXG4gICAgaWYoaXNGcm96ZW4oYXNzZXJ0T2JqZWN0KGtleSkpKWxlYWtTdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaGFzKGtleSwgV0VBSykgfHwgaGlkZGVuKGtleSwgV0VBSywge30pO1xyXG4gICAgICBrZXlbV0VBS11bdGhhdFtVSURdXSA9IHZhbHVlO1xyXG4gICAgfSByZXR1cm4gdGhhdDtcclxuICB9XHJcbiAgZnVuY3Rpb24gbGVha1N0b3JlKHRoYXQpe1xyXG4gICAgcmV0dXJuIHRoYXRbTEVBS10gfHwgaGlkZGVuKHRoYXQsIExFQUssIG5ldyBNYXApW0xFQUtdO1xyXG4gIH1cclxuICBcclxuICB2YXIgd2Vha01ldGhvZHMgPSB7XHJcbiAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxyXG4gICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxyXG4gICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcclxuICAgICAgaWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xyXG4gICAgICByZXR1cm4gaGFzKGtleSwgV0VBSykgJiYgaGFzKGtleVtXRUFLXSwgdGhpc1tVSURdKSAmJiBkZWxldGUga2V5W1dFQUtdW3RoaXNbVUlEXV07XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcclxuICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcclxuICAgIGhhczogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuaGFzKGtleSk7XHJcbiAgICAgIHJldHVybiBoYXMoa2V5LCBXRUFLKSAmJiBoYXMoa2V5W1dFQUtdLCB0aGlzW1VJRF0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcclxuICBXZWFrTWFwID0gZ2V0Q29sbGVjdGlvbihXZWFrTWFwLCBXRUFLTUFQLCB7XHJcbiAgICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxyXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZihpc09iamVjdChrZXkpKXtcclxuICAgICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYoaGFzKGtleSwgV0VBSykpcmV0dXJuIGtleVtXRUFLXVt0aGlzW1VJRF1dO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICByZXR1cm4gZGVmV2Vhayh0aGlzLCBrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9LCB3ZWFrTWV0aG9kcywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgXHJcbiAgLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxyXG4gIGlmKGZyYW1ld29yayAmJiBuZXcgV2Vha01hcCgpLnNldChPYmplY3QuZnJlZXplKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xyXG4gICAgZm9yRWFjaC5jYWxsKGFycmF5KCdkZWxldGUsaGFzLGdldCxzZXQnKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIG1ldGhvZCA9IFdlYWtNYXBbUFJPVE9UWVBFXVtrZXldO1xyXG4gICAgICBXZWFrTWFwW1BST1RPVFlQRV1ba2V5XSA9IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGxlYWt5IG1hcFxyXG4gICAgICAgIGlmKGlzT2JqZWN0KGEpICYmIGlzRnJvemVuKGEpKXtcclxuICAgICAgICAgIHZhciByZXN1bHQgPSBsZWFrU3RvcmUodGhpcylba2V5XShhLCBiKTtcclxuICAgICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xyXG4gICAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxyXG4gICAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIDIzLjQgV2Vha1NldCBPYmplY3RzXHJcbiAgV2Vha1NldCA9IGdldENvbGxlY3Rpb24oV2Vha1NldCwgV0VBS1NFVCwge1xyXG4gICAgLy8gMjMuNC4zLjEgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxyXG4gICAgYWRkOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgIHJldHVybiBkZWZXZWFrKHRoaXMsIHZhbHVlLCB0cnVlKTtcclxuICAgIH1cclxuICB9LCB3ZWFrTWV0aG9kcywgZmFsc2UsIHRydWUpO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5yZWZsZWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gIGZ1bmN0aW9uIEVudW1lcmF0ZShpdGVyYXRlZCl7XHJcbiAgICB2YXIga2V5cyA9IFtdLCBrZXk7XHJcbiAgICBmb3Ioa2V5IGluIGl0ZXJhdGVkKWtleXMucHVzaChrZXkpO1xyXG4gICAgc2V0KHRoaXMsIElURVIsIHtvOiBpdGVyYXRlZCwgYToga2V5cywgaTogMH0pO1xyXG4gIH1cclxuICBjcmVhdGVJdGVyYXRvcihFbnVtZXJhdGUsIE9CSkVDVCwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBpdGVyID0gdGhpc1tJVEVSXVxyXG4gICAgICAsIGtleXMgPSBpdGVyLmFcclxuICAgICAgLCBrZXk7XHJcbiAgICBkbyB7XHJcbiAgICAgIGlmKGl0ZXIuaSA+PSBrZXlzLmxlbmd0aClyZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgIH0gd2hpbGUoISgoa2V5ID0ga2V5c1tpdGVyLmkrK10pIGluIGl0ZXIubykpO1xyXG4gICAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwga2V5KTtcclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiB3cmFwKGZuKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIGFzc2VydE9iamVjdChpdCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSwgdHJ1ZTtcclxuICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gcmVmbGVjdEdldCh0YXJnZXQsIHByb3BlcnR5S2V5LyosIHJlY2VpdmVyKi8pe1xyXG4gICAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl1cclxuICAgICAgLCBkZXNjID0gZ2V0T3duRGVzY3JpcHRvcihhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpLCBwcm90bztcclxuICAgIGlmKGRlc2MpcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxyXG4gICAgICA/IGRlc2MudmFsdWVcclxuICAgICAgOiBkZXNjLmdldCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSlcclxuICAgICAgPyByZWZsZWN0R2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZWZsZWN0U2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYvKiwgcmVjZWl2ZXIqLyl7XHJcbiAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXVxyXG4gICAgICAsIG93bkRlc2MgID0gZ2V0T3duRGVzY3JpcHRvcihhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpXHJcbiAgICAgICwgZXhpc3RpbmdEZXNjcmlwdG9yLCBwcm90bztcclxuICAgIGlmKCFvd25EZXNjKXtcclxuICAgICAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSl7XHJcbiAgICAgICAgcmV0dXJuIHJlZmxlY3RTZXQocHJvdG8sIHByb3BlcnR5S2V5LCBWLCByZWNlaXZlcik7XHJcbiAgICAgIH1cclxuICAgICAgb3duRGVzYyA9IGRlc2NyaXB0b3IoMCk7XHJcbiAgICB9XHJcbiAgICBpZihoYXMob3duRGVzYywgJ3ZhbHVlJykpe1xyXG4gICAgICBpZihvd25EZXNjLndyaXRhYmxlID09PSBmYWxzZSB8fCAhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtcclxuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yID0gZ2V0T3duRGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGRlc2NyaXB0b3IoMCk7XHJcbiAgICAgIGV4aXN0aW5nRGVzY3JpcHRvci52YWx1ZSA9IFY7XHJcbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHlLZXksIGV4aXN0aW5nRGVzY3JpcHRvciksIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGZhbHNlXHJcbiAgICAgIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcclxuICB9XHJcbiAgdmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgcmV0dXJuSXQ7XHJcbiAgXHJcbiAgdmFyIHJlZmxlY3QgPSB7XHJcbiAgICAvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcclxuICAgIGFwcGx5OiBjdHgoY2FsbCwgYXBwbHksIDMpLFxyXG4gICAgLy8gMjYuMS4yIFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCBbLCBuZXdUYXJnZXRdKVxyXG4gICAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3VtZW50c0xpc3QgLyosIG5ld1RhcmdldCovKXtcclxuICAgICAgdmFyIHByb3RvICAgID0gYXNzZXJ0RnVuY3Rpb24oYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl0pW1BST1RPVFlQRV1cclxuICAgICAgICAsIGluc3RhbmNlID0gY3JlYXRlKGlzT2JqZWN0KHByb3RvKSA/IHByb3RvIDogT2JqZWN0UHJvdG8pXHJcbiAgICAgICAgLCByZXN1bHQgICA9IGFwcGx5LmNhbGwodGFyZ2V0LCBpbnN0YW5jZSwgYXJndW1lbnRzTGlzdCk7XHJcbiAgICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcclxuICAgIGRlZmluZVByb3BlcnR5OiB3cmFwKGRlZmluZVByb3BlcnR5KSxcclxuICAgIC8vIDI2LjEuNCBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpXHJcbiAgICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eUtleSl7XHJcbiAgICAgIHZhciBkZXNjID0gZ2V0T3duRGVzY3JpcHRvcihhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xyXG4gICAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXHJcbiAgICBlbnVtZXJhdGU6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICAgIHJldHVybiBuZXcgRW51bWVyYXRlKGFzc2VydE9iamVjdCh0YXJnZXQpKTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXHJcbiAgICBnZXQ6IHJlZmxlY3RHZXQsXHJcbiAgICAvLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eUtleSl7XHJcbiAgICAgIHJldHVybiBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxyXG4gICAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICAgIHJldHVybiBnZXRQcm90b3R5cGVPZihhc3NlcnRPYmplY3QodGFyZ2V0KSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXHJcbiAgICBoYXM6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHlLZXkpe1xyXG4gICAgICByZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0O1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuMTAgUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KVxyXG4gICAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbih0YXJnZXQpe1xyXG4gICAgICByZXR1cm4gISFpc0V4dGVuc2libGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuMTEgUmVmbGVjdC5vd25LZXlzKHRhcmdldClcclxuICAgIG93bktleXM6IG93bktleXMsXHJcbiAgICAvLyAyNi4xLjEyIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxyXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IHdyYXAoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zIHx8IHJldHVybkl0KSxcclxuICAgIC8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXHJcbiAgICBzZXQ6IHJlZmxlY3RTZXRcclxuICB9XHJcbiAgLy8gMjYuMS4xNCBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pXHJcbiAgaWYoc2V0UHJvdG90eXBlT2YpcmVmbGVjdC5zZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvdG8pe1xyXG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm90byksIHRydWU7XHJcbiAgfTtcclxuICBcclxuICAkZGVmaW5lKEdMT0JBTCwge1JlZmxlY3Q6IHt9fSk7XHJcbiAgJGRlZmluZShTVEFUSUMsICdSZWZsZWN0JywgcmVmbGVjdCk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM3LnByb3Bvc2FscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgJGRlZmluZShQUk9UTywgQVJSQVksIHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kb21lbmljL0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xyXG4gICAgaW5jbHVkZXM6IGNyZWF0ZUFycmF5Q29udGFpbnModHJ1ZSlcclxuICB9KTtcclxuICAkZGVmaW5lKFBST1RPLCBTVFJJTkcsIHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcclxuICAgIGF0OiBjcmVhdGVQb2ludEF0KHRydWUpXHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0VG9BcnJheShpc0VudHJpZXMpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCl7XHJcbiAgICAgIHZhciBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKG9iamVjdClcclxuICAgICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICAgLCBpICAgICAgPSAwXHJcbiAgICAgICAgLCByZXN1bHQgPSBBcnJheShsZW5ndGgpXHJcbiAgICAgICAgLCBrZXk7XHJcbiAgICAgIGlmKGlzRW50cmllcyl3aGlsZShsZW5ndGggPiBpKXJlc3VsdFtpXSA9IFtrZXkgPSBrZXlzW2krK10sIE9ba2V5XV07XHJcbiAgICAgIGVsc2Ugd2hpbGUobGVuZ3RoID4gaSlyZXN1bHRbaV0gPSBPW2tleXNbaSsrXV07XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICRkZWZpbmUoU1RBVElDLCBPQkpFQ1QsIHtcclxuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vOTM1Mzc4MVxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KG9iamVjdClcclxuICAgICAgICAsIHJlc3VsdCA9IHt9O1xyXG4gICAgICBmb3JFYWNoLmNhbGwob3duS2V5cyhPKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShyZXN1bHQsIGtleSwgZGVzY3JpcHRvcigwLCBnZXRPd25EZXNjcmlwdG9yKE8sIGtleSkpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3J3YWxkcm9uL3RjMzktbm90ZXMvYmxvYi9tYXN0ZXIvZXM2LzIwMTQtMDQvYXByLTkubWQjNTEtb2JqZWN0ZW50cmllcy1vYmplY3R2YWx1ZXNcclxuICAgIHZhbHVlczogIGNyZWF0ZU9iamVjdFRvQXJyYXkoZmFsc2UpLFxyXG4gICAgZW50cmllczogY3JlYXRlT2JqZWN0VG9BcnJheSh0cnVlKVxyXG4gIH0pO1xyXG4gICRkZWZpbmUoU1RBVElDLCBSRUdFWFAsIHtcclxuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2thbmdheC85Njk4MTAwXHJcbiAgICBlc2NhcGU6IGNyZWF0ZVJlcGxhY2VyKC8oW1xcXFxcXC1bXFxde30oKSorPy4sXiR8XSkvZywgJ1xcXFwkMScsIHRydWUpXHJcbiAgfSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM3LmFic3RyYWN0LXJlZnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtYWJzdHJhY3QtcmVmc1xyXG4hZnVuY3Rpb24oUkVGRVJFTkNFKXtcclxuICBSRUZFUkVOQ0VfR0VUID0gZ2V0V2VsbEtub3duU3ltYm9sKFJFRkVSRU5DRSsnR2V0JywgdHJ1ZSk7XHJcbiAgdmFyIFJFRkVSRU5DRV9TRVQgPSBnZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1NFVCwgdHJ1ZSlcclxuICAgICwgUkVGRVJFTkNFX0RFTEVURSA9IGdldFdlbGxLbm93blN5bWJvbChSRUZFUkVOQ0UrJ0RlbGV0ZScsIHRydWUpO1xyXG4gIFxyXG4gICRkZWZpbmUoU1RBVElDLCBTWU1CT0wsIHtcclxuICAgIHJlZmVyZW5jZUdldDogUkVGRVJFTkNFX0dFVCxcclxuICAgIHJlZmVyZW5jZVNldDogUkVGRVJFTkNFX1NFVCxcclxuICAgIHJlZmVyZW5jZURlbGV0ZTogUkVGRVJFTkNFX0RFTEVURVxyXG4gIH0pO1xyXG4gIFxyXG4gIGhpZGRlbihGdW5jdGlvblByb3RvLCBSRUZFUkVOQ0VfR0VULCByZXR1cm5UaGlzKTtcclxuICBcclxuICBmdW5jdGlvbiBzZXRNYXBNZXRob2RzKENvbnN0cnVjdG9yKXtcclxuICAgIGlmKENvbnN0cnVjdG9yKXtcclxuICAgICAgdmFyIE1hcFByb3RvID0gQ29uc3RydWN0b3JbUFJPVE9UWVBFXTtcclxuICAgICAgaGlkZGVuKE1hcFByb3RvLCBSRUZFUkVOQ0VfR0VULCBNYXBQcm90by5nZXQpO1xyXG4gICAgICBoaWRkZW4oTWFwUHJvdG8sIFJFRkVSRU5DRV9TRVQsIE1hcFByb3RvLnNldCk7XHJcbiAgICAgIGhpZGRlbihNYXBQcm90bywgUkVGRVJFTkNFX0RFTEVURSwgTWFwUHJvdG9bJ2RlbGV0ZSddKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0TWFwTWV0aG9kcyhNYXApO1xyXG4gIHNldE1hcE1ldGhvZHMoV2Vha01hcCk7XHJcbn0oJ3JlZmVyZW5jZScpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLmRpY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oRElDVCl7XHJcbiAgRGljdCA9IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgIHZhciBkaWN0ID0gY3JlYXRlKG51bGwpO1xyXG4gICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgaWYoaXNJdGVyYWJsZShpdGVyYWJsZSkpe1xyXG4gICAgICAgIGZvck9mKGl0ZXJhYmxlLCB0cnVlLCBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICAgIGRpY3Rba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgYXNzaWduKGRpY3QsIGl0ZXJhYmxlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaWN0O1xyXG4gIH1cclxuICBEaWN0W1BST1RPVFlQRV0gPSBudWxsO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIERpY3RJdGVyYXRvcihpdGVyYXRlZCwga2luZCl7XHJcbiAgICBzZXQodGhpcywgSVRFUiwge286IHRvT2JqZWN0KGl0ZXJhdGVkKSwgYTogZ2V0S2V5cyhpdGVyYXRlZCksIGk6IDAsIGs6IGtpbmR9KTtcclxuICB9XHJcbiAgY3JlYXRlSXRlcmF0b3IoRGljdEl0ZXJhdG9yLCBESUNULCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgPSB0aGlzW0lURVJdXHJcbiAgICAgICwgTyAgICA9IGl0ZXIub1xyXG4gICAgICAsIGtleXMgPSBpdGVyLmFcclxuICAgICAgLCBraW5kID0gaXRlci5rXHJcbiAgICAgICwga2V5O1xyXG4gICAgZG8ge1xyXG4gICAgICBpZihpdGVyLmkgPj0ga2V5cy5sZW5ndGgpe1xyXG4gICAgICAgIGl0ZXIubyA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgICAgfVxyXG4gICAgfSB3aGlsZSghaGFzKE8sIGtleSA9IGtleXNbaXRlci5pKytdKSk7XHJcbiAgICBpZihraW5kID09IEtFWSkgIHJldHVybiBpdGVyUmVzdWx0KDAsIGtleSk7XHJcbiAgICBpZihraW5kID09IFZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsIE9ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDAsIFtrZXksIE9ba2V5XV0pO1xyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZURpY3RJdGVyKGtpbmQpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcclxuICAgICAgcmV0dXJuIG5ldyBEaWN0SXRlcmF0b3IoaXQsIGtpbmQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKlxyXG4gICAqIDAgLT4gZm9yRWFjaFxyXG4gICAqIDEgLT4gbWFwXHJcbiAgICogMiAtPiBmaWx0ZXJcclxuICAgKiAzIC0+IHNvbWVcclxuICAgKiA0IC0+IGV2ZXJ5XHJcbiAgICogNSAtPiBmaW5kXHJcbiAgICogNiAtPiBmaW5kS2V5XHJcbiAgICogNyAtPiBtYXBQYWlyc1xyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZURpY3RNZXRob2QodHlwZSl7XHJcbiAgICB2YXIgaXNNYXAgICAgPSB0eXBlID09IDFcclxuICAgICAgLCBpc0V2ZXJ5ICA9IHR5cGUgPT0gNDtcclxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGNhbGxiYWNrZm4sIHRoYXQgLyogPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgICB2YXIgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXHJcbiAgICAgICAgLCBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAgICAgLCByZXN1bHQgPSBpc01hcCB8fCB0eXBlID09IDcgfHwgdHlwZSA9PSAyID8gbmV3IChnZW5lcmljKHRoaXMsIERpY3QpKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICwga2V5LCB2YWwsIHJlcztcclxuICAgICAgZm9yKGtleSBpbiBPKWlmKGhhcyhPLCBrZXkpKXtcclxuICAgICAgICB2YWwgPSBPW2tleV07XHJcbiAgICAgICAgcmVzID0gZih2YWwsIGtleSwgb2JqZWN0KTtcclxuICAgICAgICBpZih0eXBlKXtcclxuICAgICAgICAgIGlmKGlzTWFwKXJlc3VsdFtrZXldID0gcmVzOyAgICAgICAgICAgICAvLyBtYXBcclxuICAgICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaCh0eXBlKXtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXN1bHRba2V5XSA9IHZhbDsgYnJlYWsgICAgICAvLyBmaWx0ZXJcclxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAvLyBzb21lXHJcbiAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgLy8gZmluZFxyXG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiBrZXk7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRLZXlcclxuICAgICAgICAgICAgY2FzZSA3OiByZXN1bHRbcmVzWzBdXSA9IHJlc1sxXTsgICAgICAvLyBtYXBQYWlyc1xyXG4gICAgICAgICAgfSBlbHNlIGlmKGlzRXZlcnkpcmV0dXJuIGZhbHNlOyAgICAgICAgIC8vIGV2ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0eXBlID09IDMgfHwgaXNFdmVyeSA/IGlzRXZlcnkgOiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZURpY3RSZWR1Y2UoaXNUdXJuKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QsIG1hcGZuLCBpbml0KXtcclxuICAgICAgYXNzZXJ0RnVuY3Rpb24obWFwZm4pO1xyXG4gICAgICB2YXIgTyAgICAgID0gdG9PYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxyXG4gICAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgICAsIGkgICAgICA9IDBcclxuICAgICAgICAsIG1lbW8sIGtleSwgcmVzdWx0O1xyXG4gICAgICBpZihpc1R1cm4pbWVtbyA9IGluaXQgPT0gdW5kZWZpbmVkID8gbmV3IChnZW5lcmljKHRoaXMsIERpY3QpKSA6IE9iamVjdChpbml0KTtcclxuICAgICAgZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoIDwgMyl7XHJcbiAgICAgICAgYXNzZXJ0KGxlbmd0aCwgUkVEVUNFX0VSUk9SKTtcclxuICAgICAgICBtZW1vID0gT1trZXlzW2krK11dO1xyXG4gICAgICB9IGVsc2UgbWVtbyA9IE9iamVjdChpbml0KTtcclxuICAgICAgd2hpbGUobGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0ga2V5c1tpKytdKSl7XHJcbiAgICAgICAgcmVzdWx0ID0gbWFwZm4obWVtbywgT1trZXldLCBrZXksIG9iamVjdCk7XHJcbiAgICAgICAgaWYoaXNUdXJuKXtcclxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gZmFsc2UpYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIG1lbW8gPSByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1lbW87XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciBmaW5kS2V5ID0gY3JlYXRlRGljdE1ldGhvZCg2KTtcclxuICBmdW5jdGlvbiBpbmNsdWRlcyhvYmplY3QsIGVsKXtcclxuICAgIHJldHVybiAoZWwgPT0gZWwgPyBrZXlPZihvYmplY3QsIGVsKSA6IGZpbmRLZXkob2JqZWN0LCBzYW1lTmFOKSkgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgXHJcbiAgdmFyIGRpY3RNZXRob2RzID0ge1xyXG4gICAga2V5czogICAgY3JlYXRlRGljdEl0ZXIoS0VZKSxcclxuICAgIHZhbHVlczogIGNyZWF0ZURpY3RJdGVyKFZBTFVFKSxcclxuICAgIGVudHJpZXM6IGNyZWF0ZURpY3RJdGVyKEtFWStWQUxVRSksXHJcbiAgICBmb3JFYWNoOiBjcmVhdGVEaWN0TWV0aG9kKDApLFxyXG4gICAgbWFwOiAgICAgY3JlYXRlRGljdE1ldGhvZCgxKSxcclxuICAgIGZpbHRlcjogIGNyZWF0ZURpY3RNZXRob2QoMiksXHJcbiAgICBzb21lOiAgICBjcmVhdGVEaWN0TWV0aG9kKDMpLFxyXG4gICAgZXZlcnk6ICAgY3JlYXRlRGljdE1ldGhvZCg0KSxcclxuICAgIGZpbmQ6ICAgIGNyZWF0ZURpY3RNZXRob2QoNSksXHJcbiAgICBmaW5kS2V5OiBmaW5kS2V5LFxyXG4gICAgbWFwUGFpcnM6Y3JlYXRlRGljdE1ldGhvZCg3KSxcclxuICAgIHJlZHVjZTogIGNyZWF0ZURpY3RSZWR1Y2UoZmFsc2UpLFxyXG4gICAgdHVybjogICAgY3JlYXRlRGljdFJlZHVjZSh0cnVlKSxcclxuICAgIGtleU9mOiAgIGtleU9mLFxyXG4gICAgaW5jbHVkZXM6aW5jbHVkZXMsXHJcbiAgICAvLyBIYXMgLyBnZXQgLyBzZXQgb3duIHByb3BlcnR5XHJcbiAgICBoYXM6IGhhcyxcclxuICAgIGdldDogZ2V0LFxyXG4gICAgc2V0OiBjcmVhdGVEZWZpbmVyKDApLFxyXG4gICAgaXNEaWN0OiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHJldHVybiBpc09iamVjdChpdCkgJiYgZ2V0UHJvdG90eXBlT2YoaXQpID09PSBEaWN0W1BST1RPVFlQRV07XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBpZihSRUZFUkVOQ0VfR0VUKWZvcih2YXIga2V5IGluIGRpY3RNZXRob2RzKSFmdW5jdGlvbihmbil7XHJcbiAgICBmdW5jdGlvbiBtZXRob2QoKXtcclxuICAgICAgZm9yKHZhciBhcmdzID0gW3RoaXNdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7KWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XHJcbiAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZm5bUkVGRVJFTkNFX0dFVF0gPSBmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgfVxyXG4gIH0oZGljdE1ldGhvZHNba2V5XSk7XHJcbiAgXHJcbiAgJGRlZmluZShHTE9CQUwgKyBGT1JDRUQsIHtEaWN0OiBhc3NpZ25IaWRkZW4oRGljdCwgZGljdE1ldGhvZHMpfSk7XHJcbn0oJ0RpY3QnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS4kZm9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKEVOVFJJRVMsIEZOKXsgIFxyXG4gIGZ1bmN0aW9uICRmb3IoaXRlcmFibGUsIGVudHJpZXMpe1xyXG4gICAgaWYoISh0aGlzIGluc3RhbmNlb2YgJGZvcikpcmV0dXJuIG5ldyAkZm9yKGl0ZXJhYmxlLCBlbnRyaWVzKTtcclxuICAgIHRoaXNbSVRFUl0gICAgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSk7XHJcbiAgICB0aGlzW0VOVFJJRVNdID0gISFlbnRyaWVzO1xyXG4gIH1cclxuICBcclxuICBjcmVhdGVJdGVyYXRvcigkZm9yLCAnV3JhcHBlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpc1tJVEVSXS5uZXh0KCk7XHJcbiAgfSk7XHJcbiAgdmFyICRmb3JQcm90byA9ICRmb3JbUFJPVE9UWVBFXTtcclxuICBzZXRJdGVyYXRvcigkZm9yUHJvdG8sIGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpc1tJVEVSXTsgLy8gdW53cmFwXHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5JdGVyYXRvcihuZXh0KXtcclxuICAgIGZ1bmN0aW9uIEl0ZXIoSSwgZm4sIHRoYXQpe1xyXG4gICAgICB0aGlzW0lURVJdICAgID0gZ2V0SXRlcmF0b3IoSSk7XHJcbiAgICAgIHRoaXNbRU5UUklFU10gPSBJW0VOVFJJRVNdO1xyXG4gICAgICB0aGlzW0ZOXSAgICAgID0gY3R4KGZuLCB0aGF0LCBJW0VOVFJJRVNdID8gMiA6IDEpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlSXRlcmF0b3IoSXRlciwgJ0NoYWluJywgbmV4dCwgJGZvclByb3RvKTtcclxuICAgIHNldEl0ZXJhdG9yKEl0ZXJbUFJPVE9UWVBFXSwgcmV0dXJuVGhpcyk7IC8vIG92ZXJyaWRlICRmb3JQcm90byBpdGVyYXRvclxyXG4gICAgcmV0dXJuIEl0ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHZhciBNYXBJdGVyID0gY3JlYXRlQ2hhaW5JdGVyYXRvcihmdW5jdGlvbigpe1xyXG4gICAgdmFyIHN0ZXAgPSB0aGlzW0lURVJdLm5leHQoKTtcclxuICAgIHJldHVybiBzdGVwLmRvbmUgPyBzdGVwIDogaXRlclJlc3VsdCgwLCBzdGVwQ2FsbCh0aGlzW0ZOXSwgc3RlcC52YWx1ZSwgdGhpc1tFTlRSSUVTXSkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIHZhciBGaWx0ZXJJdGVyID0gY3JlYXRlQ2hhaW5JdGVyYXRvcihmdW5jdGlvbigpe1xyXG4gICAgZm9yKDs7KXtcclxuICAgICAgdmFyIHN0ZXAgPSB0aGlzW0lURVJdLm5leHQoKTtcclxuICAgICAgaWYoc3RlcC5kb25lIHx8IHN0ZXBDYWxsKHRoaXNbRk5dLCBzdGVwLnZhbHVlLCB0aGlzW0VOVFJJRVNdKSlyZXR1cm4gc3RlcDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBhc3NpZ25IaWRkZW4oJGZvclByb3RvLCB7XHJcbiAgICBvZjogZnVuY3Rpb24oZm4sIHRoYXQpe1xyXG4gICAgICBmb3JPZih0aGlzLCB0aGlzW0VOVFJJRVNdLCBmbiwgdGhhdCk7XHJcbiAgICB9LFxyXG4gICAgYXJyYXk6IGZ1bmN0aW9uKGZuLCB0aGF0KXtcclxuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICBmb3JPZihmbiAhPSB1bmRlZmluZWQgPyB0aGlzLm1hcChmbiwgdGhhdCkgOiB0aGlzLCBmYWxzZSwgcHVzaCwgcmVzdWx0KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKGZuLCB0aGF0KXtcclxuICAgICAgcmV0dXJuIG5ldyBGaWx0ZXJJdGVyKHRoaXMsIGZuLCB0aGF0KTtcclxuICAgIH0sXHJcbiAgICBtYXA6IGZ1bmN0aW9uKGZuLCB0aGF0KXtcclxuICAgICAgcmV0dXJuIG5ldyBNYXBJdGVyKHRoaXMsIGZuLCB0aGF0KTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAkZm9yLmlzSXRlcmFibGUgID0gaXNJdGVyYWJsZTtcclxuICAkZm9yLmdldEl0ZXJhdG9yID0gZ2V0SXRlcmF0b3I7XHJcbiAgXHJcbiAgJGRlZmluZShHTE9CQUwgKyBGT1JDRUQsIHskZm9yOiAkZm9yfSk7XHJcbn0oJ2VudHJpZXMnLCBzYWZlU3ltYm9sKCdmbicpKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5kZWxheSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gaHR0cHM6Ly9lc2Rpc2N1c3Mub3JnL3RvcGljL3Byb21pc2UtcmV0dXJuaW5nLWRlbGF5LWZ1bmN0aW9uXHJcbiRkZWZpbmUoR0xPQkFMICsgRk9SQ0VELCB7XHJcbiAgZGVsYXk6IGZ1bmN0aW9uKHRpbWUpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpe1xyXG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5iaW5kaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKF8sIHRvTG9jYWxlU3RyaW5nKXtcclxuICAvLyBQbGFjZWhvbGRlclxyXG4gIGNvcmUuXyA9IHBhdGguXyA9IHBhdGguXyB8fCB7fTtcclxuXHJcbiAgJGRlZmluZShQUk9UTyArIEZPUkNFRCwgRlVOQ1RJT04sIHtcclxuICAgIHBhcnQ6IHBhcnQsXHJcbiAgICBvbmx5OiBmdW5jdGlvbihudW1iZXJBcmd1bWVudHMsIHRoYXQgLyogPSBAICovKXtcclxuICAgICAgdmFyIGZuICAgICA9IGFzc2VydEZ1bmN0aW9uKHRoaXMpXHJcbiAgICAgICAgLCBuICAgICAgPSB0b0xlbmd0aChudW1iZXJBcmd1bWVudHMpXHJcbiAgICAgICAgLCBpc1RoYXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMTtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBtaW4obiwgYXJndW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICwgYXJncyAgID0gQXJyYXkobGVuZ3RoKVxyXG4gICAgICAgICAgLCBpICAgICAgPSAwO1xyXG4gICAgICAgIHdoaWxlKGxlbmd0aCA+IGkpYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdO1xyXG4gICAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIGlzVGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHRpZShrZXkpe1xyXG4gICAgdmFyIHRoYXQgID0gdGhpc1xyXG4gICAgICAsIGJvdW5kID0ge307XHJcbiAgICByZXR1cm4gaGlkZGVuKHRoYXQsIF8sIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKGtleSA9PT0gdW5kZWZpbmVkIHx8ICEoa2V5IGluIHRoYXQpKXJldHVybiB0b0xvY2FsZVN0cmluZy5jYWxsKHRoYXQpO1xyXG4gICAgICByZXR1cm4gaGFzKGJvdW5kLCBrZXkpID8gYm91bmRba2V5XSA6IChib3VuZFtrZXldID0gY3R4KHRoYXRba2V5XSwgdGhhdCwgLTEpKTtcclxuICAgIH0pW19dKGtleSk7XHJcbiAgfVxyXG4gIFxyXG4gIGhpZGRlbihwYXRoLl8sIFRPX1NUUklORywgZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBfO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGhpZGRlbihPYmplY3RQcm90bywgXywgdGllKTtcclxuICBERVNDIHx8IGhpZGRlbihBcnJheVByb3RvLCBfLCB0aWUpO1xyXG4gIC8vIElFOC0gZGlydHkgaGFjayAtIHJlZGVmaW5lZCB0b0xvY2FsZVN0cmluZyBpcyBub3QgZW51bWVyYWJsZVxyXG59KERFU0MgPyB1aWQoJ3RpZScpIDogVE9fTE9DQUxFLCBPYmplY3RQcm90b1tUT19MT0NBTEVdKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5vYmplY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgZnVuY3Rpb24gZGVmaW5lKHRhcmdldCwgbWl4aW4pe1xyXG4gICAgdmFyIGtleXMgICA9IG93bktleXModG9PYmplY3QobWl4aW4pKVxyXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICwgaSA9IDAsIGtleTtcclxuICAgIHdoaWxlKGxlbmd0aCA+IGkpZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXkgPSBrZXlzW2krK10sIGdldE93bkRlc2NyaXB0b3IobWl4aW4sIGtleSkpO1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9O1xyXG4gICRkZWZpbmUoU1RBVElDICsgRk9SQ0VELCBPQkpFQ1QsIHtcclxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcclxuICAgIGNsYXNzb2Y6IGNsYXNzb2YsXHJcbiAgICBkZWZpbmU6IGRlZmluZSxcclxuICAgIG1ha2U6IGZ1bmN0aW9uKHByb3RvLCBtaXhpbil7XHJcbiAgICAgIHJldHVybiBkZWZpbmUoY3JlYXRlKHByb3RvKSwgbWl4aW4pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUuYXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiRkZWZpbmUoUFJPVE8gKyBGT1JDRUQsIEFSUkFZLCB7XHJcbiAgdHVybjogZnVuY3Rpb24oZm4sIHRhcmdldCAvKiA9IFtdICovKXtcclxuICAgIGFzc2VydEZ1bmN0aW9uKGZuKTtcclxuICAgIHZhciBtZW1vICAgPSB0YXJnZXQgPT0gdW5kZWZpbmVkID8gW10gOiBPYmplY3QodGFyZ2V0KVxyXG4gICAgICAsIE8gICAgICA9IEVTNU9iamVjdCh0aGlzKVxyXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAsIGluZGV4ICA9IDA7XHJcbiAgICB3aGlsZShsZW5ndGggPiBpbmRleClpZihmbihtZW1vLCBPW2luZGV4XSwgaW5kZXgrKywgdGhpcykgPT09IGZhbHNlKWJyZWFrO1xyXG4gICAgcmV0dXJuIG1lbW87XHJcbiAgfVxyXG59KTtcclxuaWYoZnJhbWV3b3JrKUFycmF5VW5zY29wYWJsZXMudHVybiA9IHRydWU7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUubnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihudW1iZXJNZXRob2RzKXsgIFxyXG4gIGZ1bmN0aW9uIE51bWJlckl0ZXJhdG9yKGl0ZXJhdGVkKXtcclxuICAgIHNldCh0aGlzLCBJVEVSLCB7bDogdG9MZW5ndGgoaXRlcmF0ZWQpLCBpOiAwfSk7XHJcbiAgfVxyXG4gIGNyZWF0ZUl0ZXJhdG9yKE51bWJlckl0ZXJhdG9yLCBOVU1CRVIsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaXRlciA9IHRoaXNbSVRFUl1cclxuICAgICAgLCBpICAgID0gaXRlci5pKys7XHJcbiAgICByZXR1cm4gaSA8IGl0ZXIubCA/IGl0ZXJSZXN1bHQoMCwgaSkgOiBpdGVyUmVzdWx0KDEpO1xyXG4gIH0pO1xyXG4gIGRlZmluZUl0ZXJhdG9yKE51bWJlciwgTlVNQkVSLCBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIG5ldyBOdW1iZXJJdGVyYXRvcih0aGlzKTtcclxuICB9KTtcclxuICBcclxuICBudW1iZXJNZXRob2RzLnJhbmRvbSA9IGZ1bmN0aW9uKGxpbSAvKiA9IDAgKi8pe1xyXG4gICAgdmFyIGEgPSArdGhpc1xyXG4gICAgICAsIGIgPSBsaW0gPT0gdW5kZWZpbmVkID8gMCA6ICtsaW1cclxuICAgICAgLCBtID0gbWluKGEsIGIpO1xyXG4gICAgcmV0dXJuIHJhbmRvbSgpICogKG1heChhLCBiKSAtIG0pICsgbTtcclxuICB9O1xyXG5cclxuICBmb3JFYWNoLmNhbGwoYXJyYXkoXHJcbiAgICAgIC8vIEVTMzpcclxuICAgICAgJ3JvdW5kLGZsb29yLGNlaWwsYWJzLHNpbixhc2luLGNvcyxhY29zLHRhbixhdGFuLGV4cCxzcXJ0LG1heCxtaW4scG93LGF0YW4yLCcgK1xyXG4gICAgICAvLyBFUzY6XHJcbiAgICAgICdhY29zaCxhc2luaCxhdGFuaCxjYnJ0LGNsejMyLGNvc2gsZXhwbTEsaHlwb3QsaW11bCxsb2cxcCxsb2cxMCxsb2cyLHNpZ24sc2luaCx0YW5oLHRydW5jJ1xyXG4gICAgKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIGZuID0gTWF0aFtrZXldO1xyXG4gICAgICBpZihmbiludW1iZXJNZXRob2RzW2tleV0gPSBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgICAgICAvLyBpZTktIGRvbnQgc3VwcG9ydCBzdHJpY3QgbW9kZSAmIGNvbnZlcnQgYHRoaXNgIHRvIG9iamVjdCAtPiBjb252ZXJ0IGl0IHRvIG51bWJlclxyXG4gICAgICAgIHZhciBhcmdzID0gWyt0aGlzXVxyXG4gICAgICAgICAgLCBpICAgID0gMDtcclxuICAgICAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xyXG4gICAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuICBcclxuICAkZGVmaW5lKFBST1RPICsgRk9SQ0VELCBOVU1CRVIsIG51bWJlck1ldGhvZHMpO1xyXG59KHt9KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5zdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgdmFyIGVzY2FwZUhUTUxEaWN0ID0ge1xyXG4gICAgJyYnOiAnJmFtcDsnLFxyXG4gICAgJzwnOiAnJmx0OycsXHJcbiAgICAnPic6ICcmZ3Q7JyxcclxuICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgXCInXCI6ICcmYXBvczsnXHJcbiAgfSwgdW5lc2NhcGVIVE1MRGljdCA9IHt9LCBrZXk7XHJcbiAgZm9yKGtleSBpbiBlc2NhcGVIVE1MRGljdCl1bmVzY2FwZUhUTUxEaWN0W2VzY2FwZUhUTUxEaWN0W2tleV1dID0ga2V5O1xyXG4gICRkZWZpbmUoUFJPVE8gKyBGT1JDRUQsIFNUUklORywge1xyXG4gICAgZXNjYXBlSFRNTDogICBjcmVhdGVSZXBsYWNlcigvWyY8PlwiJ10vZywgZXNjYXBlSFRNTERpY3QpLFxyXG4gICAgdW5lc2NhcGVIVE1MOiBjcmVhdGVSZXBsYWNlcigvJig/OmFtcHxsdHxndHxxdW90fGFwb3MpOy9nLCB1bmVzY2FwZUhUTUxEaWN0KVxyXG4gIH0pO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUuZGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihmb3JtYXRSZWdFeHAsIGZsZXhpb1JlZ0V4cCwgbG9jYWxlcywgY3VycmVudCwgU0VDT05EUywgTUlOVVRFUywgSE9VUlMsIE1PTlRILCBZRUFSKXtcclxuICBmdW5jdGlvbiBjcmVhdGVGb3JtYXQocHJlZml4KXtcclxuICAgIHJldHVybiBmdW5jdGlvbih0ZW1wbGF0ZSwgbG9jYWxlIC8qID0gY3VycmVudCAqLyl7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgICwgZGljdCA9IGxvY2FsZXNbaGFzKGxvY2FsZXMsIGxvY2FsZSkgPyBsb2NhbGUgOiBjdXJyZW50XTtcclxuICAgICAgZnVuY3Rpb24gZ2V0KHVuaXQpe1xyXG4gICAgICAgIHJldHVybiB0aGF0W3ByZWZpeCArIHVuaXRdKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFN0cmluZyh0ZW1wbGF0ZSkucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHBhcnQpe1xyXG4gICAgICAgIHN3aXRjaChwYXJ0KXtcclxuICAgICAgICAgIGNhc2UgJ3MnICA6IHJldHVybiBnZXQoU0VDT05EUyk7ICAgICAgICAgICAgICAgICAgLy8gU2Vjb25kcyA6IDAtNTlcclxuICAgICAgICAgIGNhc2UgJ3NzJyA6IHJldHVybiBseihnZXQoU0VDT05EUykpOyAgICAgICAgICAgICAgLy8gU2Vjb25kcyA6IDAwLTU5XHJcbiAgICAgICAgICBjYXNlICdtJyAgOiByZXR1cm4gZ2V0KE1JTlVURVMpOyAgICAgICAgICAgICAgICAgIC8vIE1pbnV0ZXMgOiAwLTU5XHJcbiAgICAgICAgICBjYXNlICdtbScgOiByZXR1cm4gbHooZ2V0KE1JTlVURVMpKTsgICAgICAgICAgICAgIC8vIE1pbnV0ZXMgOiAwMC01OVxyXG4gICAgICAgICAgY2FzZSAnaCcgIDogcmV0dXJuIGdldChIT1VSUyk7ICAgICAgICAgICAgICAgICAgICAvLyBIb3VycyAgIDogMC0yM1xyXG4gICAgICAgICAgY2FzZSAnaGgnIDogcmV0dXJuIGx6KGdldChIT1VSUykpOyAgICAgICAgICAgICAgICAvLyBIb3VycyAgIDogMDAtMjNcclxuICAgICAgICAgIGNhc2UgJ0QnICA6IHJldHVybiBnZXQoREFURSk7ICAgICAgICAgICAgICAgICAgICAgLy8gRGF0ZSAgICA6IDEtMzFcclxuICAgICAgICAgIGNhc2UgJ0REJyA6IHJldHVybiBseihnZXQoREFURSkpOyAgICAgICAgICAgICAgICAgLy8gRGF0ZSAgICA6IDAxLTMxXHJcbiAgICAgICAgICBjYXNlICdXJyAgOiByZXR1cm4gZGljdFswXVtnZXQoJ0RheScpXTsgICAgICAgICAgIC8vIERheSAgICAgOiDQn9C+0L3QtdC00LXQu9GM0L3QuNC6XHJcbiAgICAgICAgICBjYXNlICdOJyAgOiByZXR1cm4gZ2V0KE1PTlRIKSArIDE7ICAgICAgICAgICAgICAgIC8vIE1vbnRoICAgOiAxLTEyXHJcbiAgICAgICAgICBjYXNlICdOTicgOiByZXR1cm4gbHooZ2V0KE1PTlRIKSArIDEpOyAgICAgICAgICAgIC8vIE1vbnRoICAgOiAwMS0xMlxyXG4gICAgICAgICAgY2FzZSAnTScgIDogcmV0dXJuIGRpY3RbMl1bZ2V0KE1PTlRIKV07ICAgICAgICAgICAvLyBNb250aCAgIDog0K/QvdCy0LDRgNGMXHJcbiAgICAgICAgICBjYXNlICdNTScgOiByZXR1cm4gZGljdFsxXVtnZXQoTU9OVEgpXTsgICAgICAgICAgIC8vIE1vbnRoICAgOiDQr9C90LLQsNGA0Y9cclxuICAgICAgICAgIGNhc2UgJ1knICA6IHJldHVybiBnZXQoWUVBUik7ICAgICAgICAgICAgICAgICAgICAgLy8gWWVhciAgICA6IDIwMTRcclxuICAgICAgICAgIGNhc2UgJ1lZJyA6IHJldHVybiBseihnZXQoWUVBUikgJSAxMDApOyAgICAgICAgICAgLy8gWWVhciAgICA6IDE0XHJcbiAgICAgICAgfSByZXR1cm4gcGFydDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZExvY2FsZShsYW5nLCBsb2NhbGUpe1xyXG4gICAgZnVuY3Rpb24gc3BsaXQoaW5kZXgpe1xyXG4gICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgIGZvckVhY2guY2FsbChhcnJheShsb2NhbGUubW9udGhzKSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGl0LnJlcGxhY2UoZmxleGlvUmVnRXhwLCAnJCcgKyBpbmRleCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGxvY2FsZXNbbGFuZ10gPSBbYXJyYXkobG9jYWxlLndlZWtkYXlzKSwgc3BsaXQoMSksIHNwbGl0KDIpXTtcclxuICAgIHJldHVybiBjb3JlO1xyXG4gIH1cclxuICAkZGVmaW5lKFBST1RPICsgRk9SQ0VELCBEQVRFLCB7XHJcbiAgICBmb3JtYXQ6ICAgIGNyZWF0ZUZvcm1hdCgnZ2V0JyksXHJcbiAgICBmb3JtYXRVVEM6IGNyZWF0ZUZvcm1hdCgnZ2V0VVRDJylcclxuICB9KTtcclxuICBhZGRMb2NhbGUoY3VycmVudCwge1xyXG4gICAgd2Vla2RheXM6ICdTdW5kYXksTW9uZGF5LFR1ZXNkYXksV2VkbmVzZGF5LFRodXJzZGF5LEZyaWRheSxTYXR1cmRheScsXHJcbiAgICBtb250aHM6ICdKYW51YXJ5LEZlYnJ1YXJ5LE1hcmNoLEFwcmlsLE1heSxKdW5lLEp1bHksQXVndXN0LFNlcHRlbWJlcixPY3RvYmVyLE5vdmVtYmVyLERlY2VtYmVyJ1xyXG4gIH0pO1xyXG4gIGFkZExvY2FsZSgncnUnLCB7XHJcbiAgICB3ZWVrZGF5czogJ9CS0L7RgdC60YDQtdGB0LXQvdGM0LUs0J/QvtC90LXQtNC10LvRjNC90LjQuizQktGC0L7RgNC90LjQuizQodGA0LXQtNCwLNCn0LXRgtCy0LXRgNCzLNCf0Y/RgtC90LjRhtCwLNCh0YPQsdCx0L7RgtCwJyxcclxuICAgIG1vbnRoczogJ9Cv0L3QstCw0YA60Y980Yws0KTQtdCy0YDQsNC7OtGPfNGMLNCc0LDRgNGCOtCwfCzQkNC/0YDQtdC7OtGPfNGMLNCc0LA60Y980Lks0JjRjtC9OtGPfNGMLCcgK1xyXG4gICAgICAgICAgICAn0JjRjtC7OtGPfNGMLNCQ0LLQs9GD0YHRgjrQsHws0KHQtdC90YLRj9Cx0YA60Y980Yws0J7QutGC0Y/QsdGAOtGPfNGMLNCd0L7Rj9Cx0YA60Y980Yws0JTQtdC60LDQsdGAOtGPfNGMJ1xyXG4gIH0pO1xyXG4gIGNvcmUubG9jYWxlID0gZnVuY3Rpb24obG9jYWxlKXtcclxuICAgIHJldHVybiBoYXMobG9jYWxlcywgbG9jYWxlKSA/IGN1cnJlbnQgPSBsb2NhbGUgOiBjdXJyZW50O1xyXG4gIH07XHJcbiAgY29yZS5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XHJcbn0oL1xcYlxcd1xcdz9cXGIvZywgLzooLiopXFx8KC4qKSQvLCB7fSwgJ2VuJywgJ1NlY29uZHMnLCAnTWludXRlcycsICdIb3VycycsICdNb250aCcsICdGdWxsWWVhcicpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLmdsb2JhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kZGVmaW5lKEdMT0JBTCArIEZPUkNFRCwge2dsb2JhbDogZ2xvYmFsfSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGpzLmFycmF5LnN0YXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEphdmFTY3JpcHQgMS42IC8gU3RyYXdtYW4gYXJyYXkgc3RhdGljcyBzaGltXHJcbiFmdW5jdGlvbihhcnJheVN0YXRpY3Mpe1xyXG4gIGZ1bmN0aW9uIHNldEFycmF5U3RhdGljcyhrZXlzLCBsZW5ndGgpe1xyXG4gICAgZm9yRWFjaC5jYWxsKGFycmF5KGtleXMpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZihrZXkgaW4gQXJyYXlQcm90bylhcnJheVN0YXRpY3Nba2V5XSA9IGN0eChjYWxsLCBBcnJheVByb3RvW2tleV0sIGxlbmd0aCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzJywgMSk7XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzJywgMyk7XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YsJyArXHJcbiAgICAgICAgICAgICAgICAgICdyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsLHR1cm4nKTtcclxuICAkZGVmaW5lKFNUQVRJQywgQVJSQVksIGFycmF5U3RhdGljcyk7XHJcbn0oe30pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiB3ZWIuZG9tLml0YXJhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oTm9kZUxpc3Qpe1xyXG4gIGlmKGZyYW1ld29yayAmJiBOb2RlTGlzdCAmJiAhKFNZTUJPTF9JVEVSQVRPUiBpbiBOb2RlTGlzdFtQUk9UT1RZUEVdKSl7XHJcbiAgICBoaWRkZW4oTm9kZUxpc3RbUFJPVE9UWVBFXSwgU1lNQk9MX0lURVJBVE9SLCBJdGVyYXRvcnNbQVJSQVldKTtcclxuICB9XHJcbiAgSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzW0FSUkFZXTtcclxufShnbG9iYWwuTm9kZUxpc3QpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLmxvZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24obG9nLCBlbmFibGVkKXtcclxuICAvLyBNZXRob2RzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0RldmVsb3BlclRvb2xzV0cvY29uc29sZS1vYmplY3QvYmxvYi9tYXN0ZXIvYXBpLm1kXHJcbiAgZm9yRWFjaC5jYWxsKGFycmF5KCdhc3NlcnQsY2xlYXIsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sJyArXHJcbiAgICAgICdncm91cCxncm91cENvbGxhcHNlZCxncm91cEVuZCxpbmZvLGlzSW5kZXBlbmRlbnRseUNvbXBvc2VkLGxvZywnICtcclxuICAgICAgJ21hcmtUaW1lbGluZSxwcm9maWxlLHByb2ZpbGVFbmQsdGFibGUsdGltZSx0aW1lRW5kLHRpbWVsaW5lLCcgK1xyXG4gICAgICAndGltZWxpbmVFbmQsdGltZVN0YW1wLHRyYWNlLHdhcm4nKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgIGxvZ1trZXldID0gZnVuY3Rpb24oKXtcclxuICAgICAgaWYoZW5hYmxlZCAmJiBrZXkgaW4gY29uc29sZSlyZXR1cm4gYXBwbHkuY2FsbChjb25zb2xlW2tleV0sIGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gICRkZWZpbmUoR0xPQkFMICsgRk9SQ0VELCB7bG9nOiBhc3NpZ24obG9nLmxvZywgbG9nLCB7XHJcbiAgICBlbmFibGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGRpc2FibGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9KX0pO1xyXG59KHt9LCB0cnVlKTtcbn0odHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCksIGZhbHNlKTtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogbW9kdWxlLmV4cG9ydHMsIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xuICAgICAgcHJvcC5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKHByb3AudmFsdWUpIHByb3Aud3JpdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iajtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY29yZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanNcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIHJldHVybiBhcnI7XG4gIH0gZWxzZSBpZiAoX2NvcmUuJGZvci5pc0l0ZXJhYmxlKE9iamVjdChhcnIpKSkge1xuICAgIHZhciBfYXJyID0gW107XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY29yZS4kZm9yLmdldEl0ZXJhdG9yKGFyciksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICAgIF9hcnIucHVzaChfc3RlcC52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZC10by1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgdmFyIGJhY2tncm91bmRDaGFyYWN0ZXIgPSAnICc7XG5cbmV4cG9ydCB2YXIgYm9yZGVyU2NoZW1lID0ge1xuICAgIHg6IHtcbiAgICAgICAgbWluOiB7XG4gICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHjilIDilJBcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSCIOKUglxuICAgICAgICAgICAgICAgICAgICAvLyDilJTilIDilJhcbiAgICAgICAgICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm86IGJhY2tncm91bmRDaGFyYWN0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUgCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vOiAn4pSCJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiAn4pSMJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOKUjOKUgOKUkFxuICAgICAgICAgICAgICAgICAgICAvLyDilIIg4pSCXG4gICAgICAgICAgICAgICAgICAgIC8vIHjilIDilJhcbiAgICAgICAgICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm86IGJhY2tncm91bmRDaGFyYWN0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUgCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vOiAn4pSCJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiAn4pSUJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWlkOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOKUjOKUgOKUkFxuICAgICAgICAgICAgICAgICAgICAvLyB4IOKUglxuICAgICAgICAgICAgICAgICAgICAvLyDilJTilIDilJhcbiAgICAgICAgICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm86IGJhY2tncm91bmRDaGFyYWN0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilIInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1pZDoge1xuICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgICAgICAvLyDilIx44pSQXG4gICAgICAgICAgICAgICAgICAgIC8vIOKUgiDilIJcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSU4pSA4pSYXG4gICAgICAgICAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm86IGJhY2tncm91bmRDaGFyYWN0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilIAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIOKUjOKUgOKUkFxuICAgICAgICAgICAgICAgIC8vIOKUgnjilIJcbiAgICAgICAgICAgICAgICAvLyDilJTilIDilJhcbiAgICAgICAgICAgICAgICBtaWQ6IGJhY2tncm91bmRDaGFyYWN0ZXIsXG4gICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOKUjOKUgOKUkFxuICAgICAgICAgICAgICAgICAgICAvLyDilIIg4pSCXG4gICAgICAgICAgICAgICAgICAgIC8vIOKUlHjilJhcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBubzogYmFja2dyb3VuZENoYXJhY3RlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUgCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOKUjOKUgHhcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSCIOKUglxuICAgICAgICAgICAgICAgICAgICAvLyDilJTilIDilJhcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vOiBiYWNrZ3JvdW5kQ2hhcmFjdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilIAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubzogJ+KUgicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUkCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1pZDoge1xuICAgICAgICAgICAgICAgICAgICAvLyDilIzilIDilJBcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSCIHhcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSU4pSA4pSYXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBubzogYmFja2dyb3VuZENoYXJhY3RlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUgidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOKUjOKUgOKUkFxuICAgICAgICAgICAgICAgICAgICAvLyDilIIg4pSCXG4gICAgICAgICAgICAgICAgICAgIC8vIOKUlOKUgHhcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vOiBiYWNrZ3JvdW5kQ2hhcmFjdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilIAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubzogJ3wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilJgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi9ib3JkZXItc2NoZW1lLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiaW5kZXguanMifQ==