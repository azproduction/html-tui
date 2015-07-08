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
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(/*! ./index.css */ 2);
	
	var _ = __webpack_require__(/*! .. */ 1);
	
	var TuiElement = _.TuiElement;
	var render = _.render;
	
	requestAnimationFrame(function () {
	    var element = new TuiElement(document.querySelector(".tui-dom"), {
	        scale: [7.8, 13]
	    });
	    var serializedElement = element.toCompressedArray();
	
	    document.querySelector(".tui-cli").innerHTML = render.html(serializedElement);
	    if (/PhantomJS/.test(window.navigator.userAgent)) {
	        console.log(render.ansi(serializedElement));
	    } else {
	        console.log.apply(console, render.chrome(serializedElement));
	    }
	});

/***/ },
/* 1 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TuiElement = _interopRequire(__webpack_require__(/*! ./lib/tui-element */ 4));
	exports.render = _interopRequire(__webpack_require__(/*! ./lib/renders */ 5));
	exports.addSerializer = __webpack_require__(/*! ./lib/serializers */ 6).addSerializer;

/***/ },
/* 2 */
/*!***************************!*\
  !*** ./example/index.css ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader!./example/index.css */ 3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 7)(content, {});
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
/*!******************************************!*\
  !*** ./~/css-loader!./example/index.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 9)();
	__webpack_require__(/*! ./~/css-loader/mergeImport.js */ 10)(exports, __webpack_require__(/*! -!./~/css-loader!../index.css */ 11), "");
	exports.push([module.id, "\n\n.mc {\n    width: 100%;\n    height: 100%;\n    background: #000;\n}\n\n.menu {\n    margin: 0;\n    background: #0ff;\n    color: #000;\n}\n\n.menu__item {\n    display: inline-block;\n    margin-left: 1px;\n    margin-right: 1px;\n    color: black;\n    height: 1px;\n}\n\n.menu__item-shortcut {\n    color: #ff0;\n}\n\n.content {\n    padding-bottom: 3px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    background: #000;\n}\n\n.panel {\n    width: 50%;\n    border: solid 1px #fff;\n    background: #00f;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    float: left;\n    height: 100%;\n    margin-bottom: -3px;\n}\n\n.panel_file-preview {\n    background: #000;\n}\n\n.panel__caption {\n    display: inline-block;\n\n    position: absolute;\n\n    margin-top: -1px;\n    color: #000;\n    background: #fff;\n}\n\n.file-list {\n    height: 100%;\n    color: #fff;\n    overflow: auto;\n}\n\n.file,\n.header {\n    overflow: hidden;\n    height: 1px;\n    color: white;\n}\n\n.file_state_focused {\n    background: #0ff;\n    color: #000;\n}\n\n.file_state_focused .file__name,\n.file_state_focused .file__size {\n    border-right-color: black;\n}\n\n.file__name,\n.file__size,\n.file__time,\n.header__name,\n.header__time,\n.header__size {\n    float: left;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.file__name,\n.header__name {\n    width: 50%;\n    border-right: solid 1px #fff;\n}\n\n.file__size,\n.header__size {\n    width: 20%;\n    border-right: solid 1px #fff;\n}\n\n.file__size {\n    text-align: right;\n}\n\n.file__time,\n.header__time{\n    width: 30%;\n    text-align: right;\n}\n\n.file__name_type_file {\n    color: #fff;\n    padding-left: 1px;\n}\n\n.file_state_focused .file__name_type_file {\n    color: white;\n}\n\n.header__name,\n.header__time,\n.header__size {\n    color: yellow;\n    text-align: center;\n}\n\n.file-preview {\n    color: #fff;\n}\n\n.console {\n    margin-top: -3px;\n    height: 3px;\n    overflow: hidden;\n    color: grey;\n    background: #000;\n}\n\n.console__input {\n    border: none;\n    color: inherit;\n    background: inherit;\n    height: 1px;\n}\n\n.controls {\n    margin-top: -2px;\n    height: 1px;\n}\n\n.control {\n    float: left;\n    height: 1px;\n}\n\n.control__number,\n.control__name {\n    float: left;\n}\n\n.control__number {\n    margin-left: 1px;\n    color: #fff;\n}\n\n.control__name {\n    width: 6px;\n    background: #0ff;\n    color: #000;\n}\n", ""]);

/***/ },
/* 4 */
/*!****************************!*\
  !*** ./lib/tui-element.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 12)["default"];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 13)["default"];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 14)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 15)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	var TuiNode = _interopRequire(__webpack_require__(/*! ./tui-node */ 17));
	
	var TuiText = _interopRequire(__webpack_require__(/*! ./tui-text */ 18));
	
	var selectSerializerFor = __webpack_require__(/*! ./serializers */ 6).selectSerializerFor;
	
	var TuiElement = (function (_TuiNode) {
	    /**
	     * @param {Node} node
	     * @param {Object} [options={}]
	     * @param {Number[]} [options.scale]
	     * @constructor
	     */
	
	    function TuiElement(node, options) {
	        _classCallCheck(this, TuiElement);
	
	        /* jshint maxstatements: 15 */
	        _get(_core.Object.getPrototypeOf(TuiElement.prototype), "constructor", this).call(this, node);
	        if (node.nodeType !== 1) {
	            throw new Error("Only element node is supported");
	        }
	
	        this.options = options || {};
	
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
	         * @type {ObjectClientRect}
	         */
	        this.boundingBox = this.getNormalizedClientRectOf(node.getBoundingClientRect(), this.options);
	
	        /**
	         * @type {ObjectClientRect[]}
	         */
	        this.clientRects = this.normalizeClientRects(node.getClientRects(), this.options);
	
	        /**
	         * @type {TuiNode[]}
	         */
	        this.content = this.getContentOf(node);
	
	        // TODO currently serializer is bound to HTMLElement
	        /**
	         * @type {function}
	         */
	        this.serializeElement = selectSerializerFor(node);
	    }
	
	    _inherits(TuiElement, _TuiNode);
	
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
	                        content.push(new TuiElement(childNode, this.options));
	                    }
	                    if (childNode.nodeType === 3) {
	                        content.push(new TuiText(childNode, this.style, this.options));
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
	                    // Symbol-related properties
	                    color: computedStyle.color,
	                    backgroundColor: computedStyle.backgroundColor,
	
	                    // Supported: normal, bold
	                    fontWeight: computedStyle.fontWeight,
	
	                    // Supported: none, underline, line-through
	                    textDecoration: computedStyle.textDecoration,
	
	                    // Supported: none, italic
	                    fontStyle: computedStyle.fontStyle,
	
	                    // Box-related properties
	                    borderLeftColor: computedStyle.borderLeftColor,
	                    borderRightColor: computedStyle.borderRightColor,
	                    borderTopColor: computedStyle.borderTopColor,
	                    borderBottomColor: computedStyle.borderBottomColor,
	
	                    // Supported: 1px, 0px, none
	                    borderLeftWidth: parseInt(computedStyle.borderLeftWidth),
	                    borderRightWidth: parseInt(computedStyle.borderRightWidth),
	                    borderTopWidth: parseInt(computedStyle.borderTopWidth),
	                    borderBottomWidth: parseInt(computedStyle.borderBottomWidth),
	
	                    paddingLeft: parseInt(computedStyle.paddingLeft),
	                    paddingRight: parseInt(computedStyle.paddingRight),
	                    paddingTop: parseInt(computedStyle.paddingTop),
	                    paddingBottom: parseInt(computedStyle.paddingBottom),
	
	                    overflow: computedStyle.overflow,
	
	                    // Supported: normal, pre, pre-wrap
	                    whiteSpace: computedStyle.whiteSpace
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
	                return this.serializeElement.call(null, this);
	            }
	        }
	    });
	
	    return TuiElement;
	})(TuiNode);
	
	module.exports = TuiElement;

/***/ },
/* 5 */
/*!******************************!*\
  !*** ./lib/renders/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ansi = __webpack_require__(/*! ./ansi */ 21).ansi;
	
	var chrome = __webpack_require__(/*! ./chrome */ 22).chrome;
	
	var html = __webpack_require__(/*! ./html */ 23).html;
	
	var ascii = __webpack_require__(/*! ./ascii */ 24).ascii;
	
	module.exports = { ansi: ansi, chrome: chrome, html: html, ascii: ascii };

/***/ },
/* 6 */
/*!**********************************!*\
  !*** ./lib/serializers/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	/**
	 * @param {HTMLElement} node
	 * @param {Function} node.matches
	 * @returns {Function}
	 */
	exports.selectSerializerFor = selectSerializerFor;
	
	/**
	 * @param {String} selector
	 * @param {Serializer} serializer
	 * @example
	 *  add('table', TableSerializer);
	 *  add('input[type="progress"]', ProgressBarSerializer);
	 */
	exports.addSerializer = addSerializer;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var ElementSerializer = _interopRequire(__webpack_require__(/*! ./element-serializer */ 19));
	
	var InputSerializer = _interopRequire(__webpack_require__(/*! ./input-serializer */ 20));
	
	var calculateSpecificity = __webpack_require__(/*! specificity */ 28).calculate;
	
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
	addSerializer("*", ElementSerializer);
	
	// Matches all inputs
	addSerializer("input,select,textarea", InputSerializer);

/***/ },
/* 7 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
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
/* 8 */
/*!****************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 9 */
/*!*************************************!*\
  !*** ./~/css-loader/cssToString.js ***!
  \*************************************/
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
/* 10 */
/*!*************************************!*\
  !*** ./~/css-loader/mergeImport.js ***!
  \*************************************/
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
/* 11 */
/*!**********************************!*\
  !*** ./~/css-loader!./index.css ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 9)();
	exports.push([module.id, ".tui-dom {\n    font-family: 'Courier', 'Courier New', monospace;\n    position: fixed;\n    left: 0;\n    top: 0;\n    font-size: 1px;\n    letter-spacing: 0.39990234375px;\n    line-height: 1px;\n    visibility: visible;\n    z-index: -1;\n    overflow: hidden;\n}\n\n.tui-dom * {\n    padding: 0;\n    margin: 0;\n    line-height: inherit;\n    font-size: inherit;\n    letter-spacing: inherit;\n    font-family: inherit;\n}\n\n.tui-dom *::-webkit-scrollbar {\n    width: 1px;\n    height: 0;\n}\n\n.tui-cli {\n    font-family: 'Courier', 'Courier New', monospace;\n    position: fixed;\n    left: 0;\n    top: 0;\n    font-size: 13px;\n    line-height: 13px;\n    display: inline-block;\n    margin: 0;\n}\n", ""]);

/***/ },
/* 12 */
/*!*****************************************************!*\
  !*** ./~/babel-runtime/helpers/class-call-check.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 13 */
/*!*********************************************!*\
  !*** ./~/babel-runtime/helpers/inherits.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 14 */
/*!****************************************!*\
  !*** ./~/babel-runtime/helpers/get.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    _again = false;
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	
	    var desc = _core.Object.getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = _core.Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc && desc.writable) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 15 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/helpers/create-class.js ***!
  \*************************************************/
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
/* 16 */
/*!************************************!*\
  !*** ./~/babel-runtime/core-js.js ***!
  \************************************/
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
/* 17 */
/*!*************************!*\
  !*** ./lib/tui-node.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 12)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 15)["default"];
	
	var _slicedToArray = __webpack_require__(/*! babel-runtime/helpers/sliced-to-array */ 25)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	var _tuiSymbol = __webpack_require__(/*! ./tui-symbol */ 26);
	
	var TuiSymbol = _interopRequire(_tuiSymbol);
	
	var isSameStyleSymbol = _tuiSymbol.isSameStyleSymbol;
	
	/**
	 * @abstract
	 */
	
	var TuiNode = (function () {
	    /**
	     * @param {Node} node
	     */
	
	    function TuiNode(node) {
	        _classCallCheck(this, TuiNode);
	
	        if (!node.ownerDocument) {
	            throw new Error("Can not serialize detached node");
	        }
	    }
	
	    _createClass(TuiNode, {
	        getNormalizedClientRectOf: {
	
	            /**
	             * @param {ClientRect} clientRect
	             * @param {Number[]} scale
	             * @returns {ObjectClientRect}
	             */
	
	            value: function getNormalizedClientRectOf(clientRect, _ref) {
	                var scale = _ref.scale;
	
	                var _ref2 = scale || [];
	
	                var _ref22 = _slicedToArray(_ref2, 2);
	
	                var scaleX = _ref22[0];
	                var scaleY = _ref22[1];
	
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
	        },
	        normalizeClientRects: {
	
	            /**
	             * @param {ClientRect[]} clientRects
	             * @param {Number[]} scale
	             * @returns {ObjectClientRect[]}
	             */
	
	            value: function normalizeClientRects(clientRects, _ref) {
	                var _this = this;
	
	                var scale = _ref.scale;
	
	                return _core.Array.from(clientRects, function (clientRect) {
	                    return _this.getNormalizedClientRectOf(clientRect, { scale: scale });
	                });
	            }
	        },
	        uniteSymbols: {
	
	            /**
	             *
	             * @param {TuiSymbol} symbolA
	             * @param {TuiSymbol} symbolB
	             * @returns {(TuiSymbol|null)[]}
	             */
	
	            value: function uniteSymbols(symbolA, symbolB) {
	                if (!symbolA) {
	                    return [null, symbolB];
	                }
	
	                if (isSameStyleSymbol(symbolA, symbolB)) {
	                    return [new TuiSymbol(symbolA.char + symbolB.char, symbolA.style), null];
	                }
	
	                return [symbolA, symbolB];
	            }
	        },
	        toArray: {
	
	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function toArray() {
	                return [[]];
	            }
	        },
	        toCompressedArray: {
	
	            /**
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function toCompressedArray() {
	                var _this = this;
	
	                return this.toArray().map(function (row) {
	                    return row.reduce(function (row, symbol) {
	                        var lastSymbol = row[row.length - 1];
	
	                        var _uniteSymbols = _this.uniteSymbols(lastSymbol, symbol);
	
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
	
	    return TuiNode;
	})();
	
	module.exports = TuiNode;
	
	/**
	 * @typedef {Object} ObjectClientRect
	 * @property {Number} bottom
	 * @property {Number} height
	 * @property {Number} left
	 * @property {Number} right
	 * @property {Number} top
	 * @property {Number} width
	 */

/***/ },
/* 18 */
/*!*************************!*\
  !*** ./lib/tui-text.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 12)["default"];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 13)["default"];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 14)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 15)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	var TuiNode = _interopRequire(__webpack_require__(/*! ./tui-node */ 17));
	
	var TextSerializer = _interopRequire(__webpack_require__(/*! ./serializers/text-serializer */ 27));
	
	var TuiText = (function (_TuiNode) {
	  /**
	   * @param {Node} node
	   * @param {CssStyle} style
	   * @param {Object} [options={}]
	   * @param {Number[]} [options.scale]
	   * @constructor
	   */
	
	  function TuiText(node, style, options) {
	    _classCallCheck(this, TuiText);
	
	    _get(_core.Object.getPrototypeOf(TuiText.prototype), "constructor", this).call(this, node);
	    if (node.nodeType !== 3) {
	      throw new Error("Only text node is supported");
	    }
	
	    var range = node.ownerDocument.createRange();
	    range.selectNodeContents(node);
	
	    this.options = options || {};
	
	    /**
	     * @type {ClientRect}
	     */
	    this.boundingBox = this.getNormalizedClientRectOf(range.getBoundingClientRect(), this.options);
	
	    /**
	     * @type {ObjectClientRect[]}
	     */
	    this.clientRects = this.normalizeClientRects(range.getClientRects(), this.options);
	
	    this.content = node.textContent;
	
	    this.style = style;
	  }
	
	  _inherits(TuiText, _TuiNode);
	
	  _createClass(TuiText, {
	    toArray: {
	
	      /**
	       *
	       * @returns {Array<Array<(TuiSymbol)>>}
	       */
	
	      value: function toArray() {
	        return new TextSerializer(this, this.options).serialize();
	      }
	    }
	  });
	
	  return TuiText;
	})(TuiNode);
	
	module.exports = TuiText;

/***/ },
/* 19 */
/*!***********************************************!*\
  !*** ./lib/serializers/element-serializer.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 12)["default"];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 13)["default"];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 14)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 15)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	var TuiSymbol = _interopRequire(__webpack_require__(/*! ../tui-symbol */ 26));
	
	var _characters = __webpack_require__(/*! ../characters */ 29);
	
	var BACKGROUND_CHARACTER = _characters.BACKGROUND_CHARACTER;
	var BORDER = _characters.BORDER;
	var SCROLL = _characters.SCROLL;
	
	var Serializer = _interopRequire(__webpack_require__(/*! ./serializer */ 30));
	
	var DefaultSerializer = (function (_Serializer) {
	    /**
	     * @param {TuiElement} tuiElement
	     * @param {Object} options
	     */
	
	    function DefaultSerializer(tuiElement, options) {
	        _classCallCheck(this, DefaultSerializer);
	
	        _get(_core.Object.getPrototypeOf(DefaultSerializer.prototype), "constructor", this).call(this, tuiElement, options);
	
	        /**
	         * @type {CssStyle}
	         */
	        this.style = tuiElement.style;
	        /**
	         * @type {ObjectClientRect[]}
	         */
	        this.clientRects = tuiElement.clientRects;
	        /**
	         * @type {ObjectClientRect}
	         */
	        this.boundingBox = tuiElement.boundingBox;
	        /**
	         * @type {Object}
	         */
	        this.scroll = tuiElement.scroll;
	        /**
	         * @type {Object[]}
	         */
	        this.content = tuiElement.content;
	    }
	
	    _inherits(DefaultSerializer, _Serializer);
	
	    _createClass(DefaultSerializer, {
	        fillBox: {
	            /**
	             * @param {ObjectClientRect} clientRect
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function fillBox(clientRect) {
	                var width = clientRect.width;
	                var height = clientRect.height;
	
	                var background = new TuiSymbol(BACKGROUND_CHARACTER, {
	                    color: this.style.color,
	                    backgroundColor: this.style.backgroundColor
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
	        },
	        fillLeftBorder: {
	
	            /**
	             * @param {Array<Array<(TuiSymbol)>>} box
	             * @param {ObjectClientRect} clientRect
	             */
	
	            value: function fillLeftBorder(box, clientRect) {
	                if (!this.style.borderLeftWidth) {
	                    return;
	                }
	
	                var leftBorder = new TuiSymbol(BORDER.SOLID.LEFT, {
	                    color: this.style.borderLeftColor,
	                    backgroundColor: this.style.backgroundColor
	                });
	
	                var height = clientRect.height;
	
	                for (var y = 0; y < height; y++) {
	                    box[y][0] = leftBorder;
	                }
	            }
	        },
	        fillRightBorder: {
	
	            /**
	             * @param {Array<Array<(TuiSymbol)>>} box
	             * @param {ObjectClientRect} clientRect
	             */
	
	            value: function fillRightBorder(box, clientRect) {
	                if (!this.style.borderRightWidth) {
	                    return;
	                }
	
	                var rightBorder = new TuiSymbol(BORDER.SOLID.RIGHT, {
	                    color: this.style.borderRightColor,
	                    backgroundColor: this.style.backgroundColor
	                });
	
	                var height = clientRect.height;
	                var width = clientRect.width;
	
	                for (var y = 0; y < height; y++) {
	                    box[y][width - 1] = rightBorder;
	                }
	            }
	        },
	        fillTopBorder: {
	
	            /**
	             * @param {Array<Array<(TuiSymbol)>>} box
	             * @param {ObjectClientRect} clientRect
	             */
	
	            value: function fillTopBorder(box, clientRect) {
	                if (!this.style.borderTopWidth) {
	                    return;
	                }
	
	                var topBorder = new TuiSymbol(BORDER.SOLID.TOP, {
	                    color: this.style.borderTopColor,
	                    backgroundColor: this.style.backgroundColor
	                });
	
	                var height = clientRect.height;
	                var width = clientRect.width;
	
	                for (var x = 1; x < width - 1; x++) {
	                    box[0][x] = topBorder;
	                }
	
	                // Top Left corner
	                if (box[0][0].char === BORDER.SOLID.LEFT) {
	                    box[0][0] = new TuiSymbol(BORDER.SOLID.TOP_LEFT, {
	                        color: this.style.borderTopColor,
	                        backgroundColor: this.style.backgroundColor
	                    });
	                }
	
	                // Top Right corner
	                if (box[0][width - 1].char === BORDER.SOLID.RIGHT) {
	                    box[0][width - 1] = new TuiSymbol(BORDER.SOLID.TOP_RIGHT, {
	                        color: this.style.borderTopColor,
	                        backgroundColor: this.style.backgroundColor
	                    });
	                }
	            }
	        },
	        fillBottomBorder: {
	
	            /**
	             * @param {Array<Array<(TuiSymbol)>>} box
	             * @param {ObjectClientRect} clientRect
	             */
	
	            value: function fillBottomBorder(box, clientRect) {
	                if (!this.style.borderBottomWidth) {
	                    return;
	                }
	
	                var bottomBorder = new TuiSymbol(BORDER.SOLID.BOTTOM, {
	                    color: this.style.borderBottomColor,
	                    backgroundColor: this.style.backgroundColor
	                });
	
	                var height = clientRect.height;
	                var width = clientRect.width;
	
	                for (var x = 1; x < width - 1; x++) {
	                    box[height - 1][x] = bottomBorder;
	                }
	
	                // Bottom Left corner
	                if (box[height - 1][0].char === BORDER.SOLID.LEFT) {
	                    box[height - 1][0] = new TuiSymbol(BORDER.SOLID.BOTTOM_LEFT, {
	                        color: this.style.borderTopColor,
	                        backgroundColor: this.style.backgroundColor
	                    });
	                }
	
	                // Bottom Right corner
	                if (box[height - 1][width - 1].char === BORDER.SOLID.RIGHT) {
	                    box[height - 1][width - 1] = new TuiSymbol(BORDER.SOLID.BOTTOM_RIGHT, {
	                        color: this.style.borderTopColor,
	                        backgroundColor: this.style.backgroundColor
	                    });
	                }
	            }
	        },
	        hasHorizontalScrollBars: {
	
	            /**
	             * @param {ObjectClientRect} clientRect
	             * @returns {boolean}
	             */
	
	            value: function hasHorizontalScrollBars(clientRect) {
	                var overflow = this.style.overflow;
	
	                if (overflow === "visible" || overflow === "hidden") {
	                    return false;
	                }
	
	                return this.scroll.scrollWidth > clientRect.width;
	            }
	        },
	        hasVerticalScrollBars: {
	
	            /**
	             * @param {ObjectClientRect} clientRect
	             * @returns {boolean}
	             */
	
	            value: function hasVerticalScrollBars(clientRect) {
	                var overflow = this.style.overflow;
	
	                if (overflow === "visible" || overflow === "hidden") {
	                    return false;
	                }
	
	                return this.scroll.scrollHeight > clientRect.height;
	            }
	        },
	        getTuiBorderSize: {
	
	            /**
	             * @param {Number} borderSize
	             * @returns {Number}
	             */
	
	            value: function getTuiBorderSize(borderSize) {
	                if (borderSize > 0) {
	                    return 1;
	                }
	
	                return 0;
	            }
	        },
	        renderVerticalScrollBar: {
	
	            /**
	             * @param {Array<Array<(TuiSymbol)>>} box
	             * @param {ObjectClientRect} clientRect
	             */
	
	            value: function renderVerticalScrollBar(box, clientRect) {
	                /* jshint maxstatements: 20, maxcomplexity: 7 */
	                if (!this.hasVerticalScrollBars(clientRect)) {
	                    return;
	                }
	
	                var borderRightWidth = this.getTuiBorderSize(this.style.borderRightWidth);
	                var borderBottomWidth = this.getTuiBorderSize(this.style.borderBottomWidth);
	                var borderTopWidth = this.getTuiBorderSize(this.style.borderTopWidth);
	                var height = clientRect.height;
	                var availableScrollHeight = height - borderBottomWidth - borderTopWidth;
	                var scrollHeight = this.scroll.scrollHeight;
	                var scrollTop = this.scroll.scrollTop;
	
	                var trackHeight = Math.max(Math.floor(height / scrollHeight * availableScrollHeight), 1);
	                var trackTop = Math.floor(scrollTop / scrollHeight * availableScrollHeight);
	                var trackBottom = trackTop + trackHeight;
	
	                var scrollBarBackground = new TuiSymbol(SCROLL.BACKGROUND, {
	                    color: this.style.color,
	                    backgroundColor: this.style.backgroundColor
	                });
	
	                var scrollBarTrack = new TuiSymbol(SCROLL.TRACK, {
	                    color: this.style.color,
	                    backgroundColor: this.style.backgroundColor
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
	        },
	        renderHorizontalScrollBar: {
	
	            /**
	             * @param {Array<Array<(TuiSymbol)>>} box
	             * @param {ObjectClientRect} clientRect
	             */
	
	            value: function renderHorizontalScrollBar(box, clientRect) {
	                if (!this.hasHorizontalScrollBars(clientRect)) {
	                    return;
	                }
	
	                return box;
	            }
	        },
	        renderBox: {
	
	            /**
	             * @param {ObjectClientRect} clientRect
	             * @param {Boolean} hasLeftBorder
	             * @param {Boolean} hasRightBorder
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function renderBox(clientRect, _ref) {
	                var hasLeftBorder = _ref.hasLeftBorder;
	                var hasRightBorder = _ref.hasRightBorder;
	
	                var box = this.fillBox(clientRect);
	                if (hasLeftBorder) {
	                    this.fillLeftBorder(box, clientRect);
	                }
	                if (hasRightBorder) {
	                    this.fillRightBorder(box, clientRect);
	                }
	                this.fillTopBorder(box, clientRect);
	                this.fillBottomBorder(box, clientRect);
	                this.renderVerticalScrollBar(box, clientRect);
	                box = this.shiftBox(box, clientRect);
	
	                return box;
	            }
	        },
	        renderBoxes: {
	
	            /**
	             * @returns {Array<Array<Array<(TuiSymbol)>>>}
	             */
	
	            value: function renderBoxes() {
	                var _this = this;
	
	                return this.clientRects.map(function (clientRect, index, _ref) {
	                    var length = _ref.length;
	
	                    var hasLeftBorder = index === 0;
	                    var hasRightBorder = index === length - 1;
	                    return _this.renderBox(clientRect, { hasLeftBorder: hasLeftBorder, hasRightBorder: hasRightBorder });
	                });
	            }
	        },
	        cropBoxUsing: {
	
	            /**
	             *
	             * @param {Number} bottom
	             * @param {Number} right
	             * @param {Number} top
	             * @param {Number} left
	             * @returns {Function}
	             */
	
	            value: function cropBoxUsing(_ref) {
	                var bottom = _ref.bottom;
	                var right = _ref.right;
	                var top = _ref.top;
	                var left = _ref.left;
	
	                /* jshint maxcomplexity: 7 */
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
	
	                        if (!row) {
	                            continue;
	                        }
	
	                        for (var x = left; x < row.length && x < right; x++) {
	                            croppedBox[y][x] = row[x];
	                        }
	                    }
	
	                    return croppedBox;
	                };
	            }
	        },
	        cropBoxFactory: {
	
	            /**
	             * @returns {Function} crop function
	             */
	
	            value: function cropBoxFactory() {
	                // Do not crop
	                if (this.style.overflow === "visible") {
	                    return function (box) {
	                        return box;
	                    };
	                }
	
	                var bottom = this.boundingBox.bottom - this.getTuiBorderSize(this.style.borderBottomWidth);
	                var right = this.boundingBox.right - this.getTuiBorderSize(this.style.borderRightWidth);
	                var top = this.boundingBox.top + this.getTuiBorderSize(this.style.borderTopWidth);
	                var left = this.boundingBox.left + this.getTuiBorderSize(this.style.borderLeftWidth);
	
	                return this.cropBoxUsing({ bottom: bottom, right: right, top: top, left: left });
	            }
	        },
	        renderContent: {
	
	            /**
	             * @returns {Array<Array<Array<(TuiSymbol)>>>}
	             */
	
	            value: function renderContent() {
	                return this.content.map(function (item) {
	                    return item.toArray();
	                }).map(this.cropBoxFactory());
	            }
	        },
	        serialize: {
	
	            /**
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function serialize() {
	                var boxes = this.renderBoxes();
	                var content = this.renderContent();
	
	                return boxes.concat(content).reduce(this.mergeBoxes.bind(this), []);
	            }
	        }
	    });
	
	    return DefaultSerializer;
	})(Serializer);
	
	module.exports = DefaultSerializer;

/***/ },
/* 20 */
/*!*********************************************!*\
  !*** ./lib/serializers/input-serializer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 12)["default"];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 13)["default"];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 14)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 15)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	var ElementSerializer = _interopRequire(__webpack_require__(/*! ./element-serializer */ 19));
	
	var InputSerializer = (function (_ElementSerializer) {
	    /**
	     * @param {TuiElement} tuiElement
	     * @param {Object} options
	     */
	
	    function InputSerializer(tuiElement, options) {
	        _classCallCheck(this, InputSerializer);
	
	        _get(_core.Object.getPrototypeOf(InputSerializer.prototype), "constructor", this).call(this, tuiElement, options);
	
	        this.properties = tuiElement.properties;
	    }
	
	    _inherits(InputSerializer, _ElementSerializer);
	
	    _createClass(InputSerializer, {
	        getInputMaxContentWidth: {
	
	            /**
	             * Max width of input text in viewport
	             *
	             * @returns {Number}
	             */
	
	            value: function getInputMaxContentWidth() {
	                var leftInputBorder = this.style.borderLeftWidth + this.style.paddingLeft;
	                var rightInputBorder = this.style.borderRightWidth + this.style.paddingRight;
	
	                return this.boundingBox.width - leftInputBorder - rightInputBorder;
	            }
	        },
	        getInputTextBoundingBox: {
	
	            /**
	             * Return bounding box of input's value
	             *
	             * @returns {ObjectClientRect}
	             */
	
	            value: function getInputTextBoundingBox() {
	                var width = Number(this.properties.value.length);
	                var height = 1;
	                var left = this.boundingBox.left;
	                var top = this.boundingBox.top;
	
	                left += this.style.borderLeftWidth;
	                left += this.style.paddingLeft;
	
	                top += this.style.borderTopWidth;
	                top += this.style.paddingTop;
	
	                return {
	                    left: left,
	                    top: top,
	                    bottom: top + height,
	                    right: left + width,
	                    height: height,
	                    width: width
	                };
	            }
	        },
	        getVisibleTextRange: {
	
	            /**
	             * Returns range which should fit into input
	             *
	             * @returns {{start: Number, end: Number}}
	             */
	
	            value: function getVisibleTextRange() {
	                /* jshint maxstatements: 20 */
	                var _properties = this.properties;
	                var value = _properties.value;
	                var selectionEnd = _properties.selectionEnd;
	
	                var inputContentWidth = this.getInputMaxContentWidth();
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
	        },
	        renderCursorBox: {
	
	            /**
	             * @param {ObjectClientRect} textBoundingBox
	             * @param {Object} visibleTextRange
	             * @param {Number} visibleTextRange.start
	             * @param {Number} visibleTextRange.end
	             * @returns {Array<Array<TuiSymbol>>}
	             */
	
	            value: function renderCursorBox(textBoundingBox, visibleTextRange) {
	                // Render cursor
	                var _properties = this.properties;
	                var value = _properties.value;
	                var selectionEnd = _properties.selectionEnd;
	
	                var cursorWidth = 1;
	                var textAtCursor = value.substr(selectionEnd, cursorWidth);
	
	                // End of text
	                if (textAtCursor === "") {
	                    textAtCursor = " ";
	                }
	
	                var cursorLeft = textBoundingBox.left + selectionEnd - visibleTextRange.start;
	                var cursorRight = cursorLeft + cursorWidth;
	
	                var clientRect = {
	                    left: cursorLeft,
	                    top: textBoundingBox.top,
	                    bottom: textBoundingBox.bottom,
	                    right: cursorRight,
	                    height: textBoundingBox.height,
	                    width: cursorWidth
	                };
	
	                return this.fillClientRectsWithText({
	                    content: textAtCursor,
	
	                    // Invert background and text color
	                    style: {
	                        color: this.style.backgroundColor,
	                        backgroundColor: this.style.color
	                    },
	                    clientRects: [clientRect]
	                });
	            }
	        },
	        renderInputTextBox: {
	
	            /**
	             * @param {ClientRect} textBoundingBox
	             * @param {Object} visibleTextRange
	             * @param {Number} visibleTextRange.start
	             * @param {Number} visibleTextRange.end
	             * @returns {Array<Array<TuiSymbol>>}
	             */
	
	            value: function renderInputTextBox(textBoundingBox, visibleTextRange) {
	                var content = this.properties.value.slice(visibleTextRange.start, visibleTextRange.end);
	
	                return this.fillClientRectsWithText({
	                    content: content,
	                    style: this.style,
	                    clientRects: [textBoundingBox]
	                });
	            }
	        },
	        serialize: {
	
	            /**
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function serialize() {
	                // Compute common measurements
	                var textBoundingBox = this.getInputTextBoundingBox();
	                var visibleTextRange = this.getVisibleTextRange();
	
	                // Render
	                var inputBox = _get(_core.Object.getPrototypeOf(InputSerializer.prototype), "serialize", this).call(this);
	                var textBox = this.renderInputTextBox(textBoundingBox, visibleTextRange);
	                var cursorBox = this.renderCursorBox(textBoundingBox, visibleTextRange);
	
	                inputBox = this.mergeBoxes(inputBox, textBox);
	                inputBox = this.mergeBoxes(inputBox, cursorBox);
	
	                return inputBox;
	            }
	        }
	    });
	
	    return InputSerializer;
	})(ElementSerializer);
	
	module.exports = InputSerializer;

/***/ },
/* 21 */
/*!*****************************!*\
  !*** ./lib/renders/ansi.js ***!
  \*****************************/
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
	
	    if (symbol.style.fontStyle === "italic") {
	        character = wrapString(character, "italic");
	    }
	
	    if (symbol.style.fontWeight === "bold") {
	        character = wrapString(character, "bold");
	    }
	
	    if (symbol.style.textDecoration === "underline") {
	        character = wrapString(character, "underline");
	    }
	
	    if (symbol.style.textDecoration === "line-through") {
	        character = wrapString(character, "strikethrough");
	    }
	
	    return character;
	}
	function ansi(box) {
	    return box.map(function (row) {
	        return row.map(ansiSymbol).join("");
	    }).join("\n");
	}

/***/ },
/* 22 */
/*!*******************************!*\
  !*** ./lib/renders/chrome.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = __webpack_require__(/*! babel-runtime/helpers/sliced-to-array */ 25)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string[]}
	 */
	exports.chrome = chrome;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var serializeStyle = _interopRequire(__webpack_require__(/*! ./common/serialize-style */ 31));
	
	/**
	 * @param {TuiSymbol} symbol
	 * @returns {string[]}
	 */
	function chromeSymbol(symbol) {
	    var char = "%c" + symbol.char;
	    var style = serializeStyle(symbol.style);
	
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
/* 23 */
/*!*****************************!*\
  !*** ./lib/renders/html.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
	exports.html = html;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var serializeStyle = _interopRequire(__webpack_require__(/*! ./common/serialize-style */ 31));
	
	var AllHtmlEntities = __webpack_require__(/*! html-entities */ 32).AllHtmlEntities;
	
	var entities = new AllHtmlEntities();
	
	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string[]}
	 */
	function htmlSymbol(symbol) {
	  var style = serializeStyle(symbol.style);
	
	  return "<span style=\"" + style + "\">" + entities.encode(symbol.char) + "</span>";
	}
	function html(box) {
	  return box.map(function (row) {
	    return row.map(htmlSymbol).join("");
	  }).join("\n");
	}

/***/ },
/* 24 */
/*!******************************!*\
  !*** ./lib/renders/ascii.js ***!
  \******************************/
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
/* 25 */
/*!****************************************************!*\
  !*** ./~/babel-runtime/helpers/sliced-to-array.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
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
/* 26 */
/*!***************************!*\
  !*** ./lib/tui-symbol.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 12)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 15)["default"];
	
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
	
	var BACKGROUND_CHARACTER = __webpack_require__(/*! ./characters */ 29).BACKGROUND_CHARACTER;
	
	function isSameStyleSymbol(symbolA, symbolB) {
	    return symbolA.style.color === symbolB.style.color && symbolA.style.fontStyle === symbolB.style.fontStyle && symbolA.style.fontWeight === symbolB.style.fontWeight && symbolA.style.textDecoration === symbolB.style.textDecoration && symbolA.style.backgroundColor === symbolB.style.backgroundColor;
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
/* 27 */
/*!********************************************!*\
  !*** ./lib/serializers/text-serializer.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 12)["default"];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 13)["default"];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 14)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 15)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	var TuiSymbol = _interopRequire(__webpack_require__(/*! ../tui-symbol */ 26));
	
	var BACKGROUND_CHARACTER = __webpack_require__(/*! ../characters */ 29).BACKGROUND_CHARACTER;
	
	var Serializer = _interopRequire(__webpack_require__(/*! ./serializer */ 30));
	
	var TextSerializer = (function (_Serializer) {
	  function TextSerializer(tuiText, options) {
	    _classCallCheck(this, TextSerializer);
	
	    _get(_core.Object.getPrototypeOf(TextSerializer.prototype), "constructor", this).call(this, tuiText, options);
	
	    /**
	     * @type {CssStyle}
	     */
	    this.style = tuiText.style;
	    /**
	     * @type {ObjectClientRect[]}
	     */
	    this.clientRects = tuiText.clientRects;
	    /**
	     * @type {ObjectClientRect}
	     */
	    this.boundingBox = tuiText.boundingBox;
	    /**
	     * @type {String}
	     */
	    this.content = tuiText.content;
	  }
	
	  _inherits(TextSerializer, _Serializer);
	
	  _createClass(TextSerializer, {
	    serialize: {
	
	      /**
	       * @returns {Array<Array<(TuiSymbol)>>}
	       */
	
	      value: function serialize() {
	        if (this.boundingBox.width === 0 || this.boundingBox.height === 0) {
	          return [[]];
	        }
	
	        return this.fillClientRectsWithText({
	          style: this.style,
	          content: this.content,
	          clientRects: this.clientRects
	        });
	      }
	    }
	  });
	
	  return TextSerializer;
	})(Serializer);
	
	module.exports = TextSerializer;

/***/ },
/* 28 */
/*!**************************************!*\
  !*** ./~/specificity/specificity.js ***!
  \**************************************/
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
/* 29 */
/*!***************************!*\
  !*** ./lib/characters.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var BACKGROUND_CHARACTER = " ";
	
	exports.BACKGROUND_CHARACTER = BACKGROUND_CHARACTER;
	var BORDER = {
	    SOLID: {
	        TOP: "─",
	        LEFT: "│",
	        RIGHT: "│",
	        BOTTOM: "─",
	        TOP_LEFT: "┌",
	        TOP_RIGHT: "┐",
	        BOTTOM_LEFT: "└",
	        BOTTOM_RIGHT: "┘"
	    },
	    DOUBLE: {
	        TOP: "═",
	        LEFT: "║",
	        RIGHT: "║",
	        BOTTOM: "═",
	        TOP_LEFT: "╔",
	        TOP_RIGHT: "╗",
	        BOTTOM_LEFT: "╚",
	        BOTTOM_RIGHT: "╝"
	    }
	};
	
	exports.BORDER = BORDER;
	var SCROLL = {
	    BACKGROUND: "¦",
	    TRACK: "║"
	};
	exports.SCROLL = SCROLL;

/***/ },
/* 30 */
/*!***************************************!*\
  !*** ./lib/serializers/serializer.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 12)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 15)["default"];
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 16)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 8)["default"];
	
	var _tuiSymbol = __webpack_require__(/*! ../tui-symbol */ 26);
	
	var TuiSymbol = _interopRequire(_tuiSymbol);
	
	var isTransparentColor = _tuiSymbol.isTransparentColor;
	var emptySymbol = _tuiSymbol.emptySymbol;
	
	var BACKGROUND_CHARACTER = __webpack_require__(/*! ../characters */ 29).BACKGROUND_CHARACTER;
	
	var AllHtmlEntities = __webpack_require__(/*! html-entities */ 32).AllHtmlEntities;
	
	var entities = new AllHtmlEntities();
	
	/**
	 * @abstract
	 */
	
	var Serializer = (function () {
	    /**
	     * @param {TuiNode} tuiNode
	     * @param {Object} options
	     */
	
	    function Serializer(tuiNode, options) {
	        _classCallCheck(this, Serializer);
	
	        /**
	         * @type {Object}
	         */
	        this.options = options || {};
	    }
	
	    _createClass(Serializer, {
	        shiftBox: {
	
	            /**
	             * @param {Array<Array<(TuiSymbol)>>} box
	             * @param {ClientRect} clientRect
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function shiftBox(box, clientRect) {
	                var left = clientRect.left;
	                var top = clientRect.top;
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
	        },
	        mergeSymbols: {
	
	            /**
	             * @param {TuiSymbol|undefined} symbolA
	             * @param {TuiSymbol|undefined} symbolB
	             * @returns {TuiSymbol}
	             */
	
	            value: function mergeSymbols(symbolA, symbolB) {
	                /* jshint maxcomplexity: 6, maxstatements: 20 */
	                if (typeof symbolA === "undefined" && typeof symbolB === "undefined") {
	                    return emptySymbol;
	                }
	
	                if (typeof symbolA === "undefined") {
	                    return symbolB;
	                }
	
	                if (typeof symbolB === "undefined") {
	                    return symbolA;
	                }
	
	                var char = symbolB.char;
	                var _symbolB$style = symbolB.style;
	                var color = _symbolB$style.color;
	                var fontStyle = _symbolB$style.fontStyle;
	                var fontWeight = _symbolB$style.fontWeight;
	                var textDecoration = _symbolB$style.textDecoration;
	                var backgroundColor = _symbolB$style.backgroundColor;
	
	                if (symbolB.char === BACKGROUND_CHARACTER) {
	                    char = symbolA.char;
	                    color = symbolA.style.color;
	                    fontStyle = symbolA.style.fontStyle;
	                    fontWeight = symbolA.style.fontWeight;
	                    textDecoration = symbolA.style.textDecoration;
	                }
	
	                if (isTransparentColor(backgroundColor)) {
	                    backgroundColor = symbolA.style.backgroundColor;
	                }
	
	                return new TuiSymbol(char, { color: color, backgroundColor: backgroundColor, fontStyle: fontStyle, fontWeight: fontWeight, textDecoration: textDecoration });
	            }
	        },
	        mergeBoxRow: {
	
	            /**
	             * @param {Array<(TuiSymbol|undefined)>} rowA
	             * @param {Array<(TuiSymbol|undefined)>} rowB
	             * @returns {Array<(TuiSymbol)>}
	             */
	
	            value: function mergeBoxRow(rowA, rowB) {
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
	                    row[x] = this.mergeSymbols(rowA[x], rowB[x]);
	                }
	
	                return row;
	            }
	        },
	        mergeBoxes: {
	
	            /**
	             * @param {Array<Array<(TuiSymbol)>>} layerA
	             * @param {Array<Array<(TuiSymbol)>>} layerB
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function mergeBoxes(layerA, layerB) {
	                var maxHeight = Math.max(layerA.length, layerB.length);
	                var box = new Array(maxHeight);
	
	                for (var y = 0; y < maxHeight; y++) {
	                    box[y] = this.mergeBoxRow(layerA[y], layerB[y]);
	                }
	
	                return box;
	            }
	        },
	        fillClientRectsWithText: {
	
	            /**
	             * @param {String} content
	             * @param {ObjectClientRect} clientRects
	             * @param {CssStyle} style
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function fillClientRectsWithText(_ref) {
	                var _this = this;
	
	                var content = _ref.content;
	                var clientRects = _ref.clientRects;
	                var style = _ref.style;
	
	                var keepWhiteSpaces = style.whiteSpace === "pre" || style.whiteSpace === "pre-wrap";
	
	                if (!keepWhiteSpaces) {
	                    content = content.replace(/\s\s+/g, " ");
	                }
	
	                // As text will be filled in clientRects - no reason to respect new lines
	                content = content.replace(/\n|\r|\v/g, "");
	                content = entities.decode(content);
	
	                return clientRects.reduce(function (box, clientRect) {
	                    // Remove white-spaces at the line-break
	                    if (!keepWhiteSpaces) {
	                        content = content.trim();
	                    }
	
	                    var symbols = _core.Array.from(content.slice(0, clientRect.width), function (symbol) {
	                        return new TuiSymbol(symbol, style);
	                    });
	
	                    content = content.slice(clientRect.width);
	
	                    var textBox = [symbols.splice(0, clientRect.width)];
	                    return _this.mergeBoxes(box, _this.shiftBox(textBox, clientRect));
	                }, []);
	            }
	        },
	        serialize: {
	
	            /**
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function serialize() {
	                return [[]];
	            }
	        }
	    });
	
	    return Serializer;
	})();
	
	module.exports = Serializer;

/***/ },
/* 31 */
/*!***********************************************!*\
  !*** ./lib/renders/common/serialize-style.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = __webpack_require__(/*! babel-runtime/helpers/sliced-to-array */ 25)["default"];
	
	/**
	 * @param {Object} symbolStyle
	 * @returns {String}
	 */
	module.exports = serializeStyle;
	var TEXT_STYLES = [["color", "color"], ["font-style", "fontStyle"], ["font-weight", "fontWeight"], ["text-decoration", "textDecoration"], ["background-color", "backgroundColor"]];
	function serializeStyle(symbolStyle) {
	    return TEXT_STYLES.reduce(function (style, _ref) {
	        var _ref2 = _slicedToArray(_ref, 2);
	
	        var cssProperty = _ref2[0];
	        var styleProperty = _ref2[1];
	
	        if (symbolStyle[styleProperty]) {
	            style += "" + cssProperty + ":" + symbolStyle[styleProperty] + ";";
	        }
	
	        return style;
	    }, "");
	}

/***/ },
/* 32 */
/*!**********************************!*\
  !*** ./~/html-entities/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  XmlEntities: __webpack_require__(/*! ./lib/xml-entities.js */ 33),
	  Html4Entities: __webpack_require__(/*! ./lib/html4-entities.js */ 34),
	  Html5Entities: __webpack_require__(/*! ./lib/html5-entities.js */ 35),
	  AllHtmlEntities: __webpack_require__(/*! ./lib/html5-entities.js */ 35)
	};


/***/ },
/* 33 */
/*!*********************************************!*\
  !*** ./~/html-entities/lib/xml-entities.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ALPHA_INDEX = {
	    '&lt': '<',
	    '&gt': '>',
	    '&quot': '"',
	    '&apos': '\'',
	    '&amp': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&apos;': '\'',
	    '&amp;': '&'
	};
	
	var CHAR_INDEX = {
	    60: 'lt',
	    62: 'gt',
	    34: 'quot',
	    39: 'apos',
	    38: 'amp'
	};
	
	var CHAR_S_INDEX = {
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    '\'': '&apos;',
	    '&': '&amp;'
	};
	
	/**
	 * @constructor
	 */
	function XmlEntities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/<|>|"|'|&/g, function(s) {
	        return CHAR_S_INDEX[s];
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
	        if (s.charAt(1) === '#') {
	            var code = s.charAt(2).toLowerCase() === 'x' ?
	                parseInt(s.substr(3), 16) :
	                parseInt(s.substr(2));
	
	            if (isNaN(code) || code < -32768 || code > 65535) {
	                return '';
	            }
	            return String.fromCharCode(code);
	        }
	        return ALPHA_INDEX[s] || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        var alpha = CHAR_INDEX[c];
	        if (alpha) {
	            result += "&" + alpha + ";";
	            i++;
	            continue;
	        }
	        if (c < 32 || c > 126) {
	            result += '&#' + c + ';';
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encodeNonASCII = function(str) {
	    var strLenght = str.length;
	    if (strLenght === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLenght) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++;
	    }
	    return result;
	};
	
	module.exports = XmlEntities;


/***/ },
/* 34 */
/*!***********************************************!*\
  !*** ./~/html-entities/lib/html4-entities.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'Oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'oelig', 'oelig', 'scaron', 'scaron', 'yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
	var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
	
	var alphaIndex = {};
	var numIndex = {};
	
	var i = 0;
	var length = HTML_ALPHA.length;
	while (i < length) {
	    var a = HTML_ALPHA[i];
	    var c = HTML_CODES[i];
	    alphaIndex[a] = String.fromCharCode(c);
	    numIndex[c] = a;
	    i++;
	}
	
	/**
	 * @constructor
	 */
	function Html4Entities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
	        var chr;
	        if (entity.charAt(0) === "#") {
	            var code = entity.charAt(1).toLowerCase() === 'x' ?
	                parseInt(entity.substr(2), 16) :
	                parseInt(entity.substr(1));
	
	            if (!(isNaN(code) || code < -32768 || code > 65535)) {
	                chr = String.fromCharCode(code);
	            }
	        } else {
	            chr = alphaIndex[entity];
	        }
	        return chr || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encode = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var alpha = numIndex[str.charCodeAt(i)];
	        result += alpha ? "&" + alpha + ";" : str.charAt(i);
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var cc = str.charCodeAt(i);
	        var alpha = numIndex[cc];
	        if (alpha) {
	            result += "&" + alpha + ";";
	        } else if (cc < 32 || cc > 126) {
	            result += "&#" + cc + ";";
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encodeNonASCII = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++;
	    }
	    return result;
	};
	
	module.exports = Html4Entities;


/***/ },
/* 35 */
/*!***********************************************!*\
  !*** ./~/html-entities/lib/html5-entities.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['CloseCurlyDoubleQuote', [8221]], ['CloseCurlyQuote', [8217]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['NewLine', [10]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
	
	var alphaIndex = {};
	var charIndex = {};
	
	createIndexes(alphaIndex, charIndex);
	
	/**
	 * @constructor
	 */
	function Html5Entities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
	        var char;
	        if (entity.charAt(0) === "#") {
	            var code = entity.charAt(1) === 'x' ?
	                parseInt(entity.substr(2).toLowerCase(), 16) :
	                parseInt(entity.substr(1));
	
	            if (!(isNaN(code) || code < -32768 || code > 65535)) {
	                char = String.fromCharCode(code);
	            }
	        } else {
	            char = alphaIndex[entity];
	        }
	        return char || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encode = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var charInfo = charIndex[str.charCodeAt(i)];
	        if (charInfo) {
	            var alpha = charInfo[str.charCodeAt(i + 1)];
	            if (alpha) {
	                i++;
	            } else {
	                alpha = charInfo[''];
	            }
	            if (alpha) {
	                result += "&" + alpha + ";";
	                i++;
	                continue;
	            }
	        }
	        result += str.charAt(i);
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        var charInfo = charIndex[c];
	        if (charInfo) {
	            var alpha = charInfo[str.charCodeAt(i + 1)];
	            if (alpha) {
	                i++;
	            } else {
	                alpha = charInfo[''];
	            }
	            if (alpha) {
	                result += "&" + alpha + ";";
	                i++;
	                continue;
	            }
	        }
	        if (c < 32 || c > 126) {
	            result += '&#' + c + ';';
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encodeNonASCII = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++
	    }
	    return result;
	};
	
	/**
	 * @param {Object} alphaIndex Passed by reference.
	 * @param {Object} charIndex Passed by reference.
	 */
	function createIndexes(alphaIndex, charIndex) {
	    var i = ENTITIES.length;
	    var _results = [];
	    while (i--) {
	        var e = ENTITIES[i];
	        var alpha = e[0];
	        var chars = e[1];
	        var chr = chars[0];
	        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
	        var charInfo;
	        if (addChar) {
	            charInfo = charIndex[chr] = charIndex[chr] || {};
	        }
	        if (chars[1]) {
	            var chr2 = chars[1];
	            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
	            _results.push(addChar && (charInfo[chr2] = alpha));
	        } else {
	            alphaIndex[alpha] = String.fromCharCode(chr);
	            _results.push(addChar && (charInfo[''] = alpha));
	        }
	    }
	}
	
	module.exports = Html5Entities;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTQyYjhkNDhiNmE1MGNmOTJiYTMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2luZGV4LmNzcz9lNTFlIiwid2VicGFjazovLy8uL2V4YW1wbGUvaW5kZXguY3NzIiwid2VicGFjazovLy8uL2xpYi90dWktZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcmVuZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2VyaWFsaXplcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvY3NzVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL21lcmdlSW1wb3J0LmpzIiwid2VicGFjazovLy8uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3R1aS1ub2RlLmpzIiwid2VicGFjazovLy8uL2xpYi90dWktdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2VyaWFsaXplcnMvZWxlbWVudC1zZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uL2xpYi9zZXJpYWxpemVycy9pbnB1dC1zZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uL2xpYi9yZW5kZXJzL2Fuc2kuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlbmRlcnMvY2hyb21lLmpzIiwid2VicGFjazovLy8uL2xpYi9yZW5kZXJzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlbmRlcnMvYXNjaWkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkLXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL2xpYi90dWktc3ltYm9sLmpzIiwid2VicGFjazovLy8uL2xpYi9zZXJpYWxpemVycy90ZXh0LXNlcmlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zcGVjaWZpY2l0eS9zcGVjaWZpY2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2VyaWFsaXplcnMvc2VyaWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcmVuZGVycy9jb21tb24vc2VyaWFsaXplLXN0eWxlLmpzIiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL3htbC1lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzIiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDUtZW50aXRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7Ozs7OztxQkN0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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQztBQUNBLCtCQUE4QjtBQUM5Qiw4QkFBNkI7QUFDN0IsZ0NBQStCO0FBQy9CLG9DQUFtQztBQUNuQyxVQUFTLDhCQUE4QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxlQUFlO0FBQzFCLE1BQUssV0FBVyxlQUFlO0FBQy9CO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLFFBQVEsZ0JBQWdCLFlBQVk7QUFDcEUsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRCxZQUFZO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0QsMEJBQTBCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLFVBQVU7QUFDL0IsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLGVBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsY0FBYztBQUN4QywyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsc0JBQXNCLElBQUk7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaLE1BQUssVUFBVTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFlBQVc7QUFDWCxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsZ0NBQWdDO0FBQy9DO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0EsY0FBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLHFDQUFxQztBQUMxRDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZ0UsT0FBTztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsWUFBWTtBQUMvQjtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTQyYjhkNDhiNmE1MGNmOTJiYTNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7VHVpRWxlbWVudCwgcmVuZGVyfSBmcm9tICcuLic7XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBuZXcgVHVpRWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVpLWRvbScpLCB7XG4gICAgICAgIHNjYWxlOiBbNy44LCAxM11cbiAgICB9KTtcbiAgICB2YXIgc2VyaWFsaXplZEVsZW1lbnQgPSBlbGVtZW50LnRvQ29tcHJlc3NlZEFycmF5KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVpLWNsaScpLmlubmVySFRNTCA9IHJlbmRlci5odG1sKHNlcmlhbGl6ZWRFbGVtZW50KTtcbiAgICBpZiAoL1BoYW50b21KUy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVuZGVyLmFuc2koc2VyaWFsaXplZEVsZW1lbnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCByZW5kZXIuY2hyb21lKHNlcmlhbGl6ZWRFbGVtZW50KSk7XG4gICAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGUvaW5kZXguanNcbiAqKi8iLCJleHBvcnQge2RlZmF1bHQgYXMgVHVpRWxlbWVudH0gZnJvbSAnLi9saWIvdHVpLWVsZW1lbnQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHJlbmRlcn0gZnJvbSAnLi9saWIvcmVuZGVycyc7XG5leHBvcnQge2FkZFNlcmlhbGl6ZXJ9IGZyb20gJy4vbGliL3NlcmlhbGl6ZXJzJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL2V4YW1wbGUvaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS9Vc2Vycy9henByb2R1Y3Rpb24vUHJvamVjdHMvaHRtbC10dWkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9leGFtcGxlL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS9Vc2Vycy9henByb2R1Y3Rpb24vUHJvamVjdHMvaHRtbC10dWkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9leGFtcGxlL2luZGV4LmNzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9leGFtcGxlL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXCIpKCk7XG5yZXF1aXJlKFwiL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9tZXJnZUltcG9ydC5qc1wiKShleHBvcnRzLCByZXF1aXJlKFwiLSEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL2luZGV4LmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4ubWMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogIzBmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5tZW51X19pdGVtIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLm1lbnVfX2l0ZW0tc2hvcnRjdXQge1xcbiAgICBjb2xvcjogI2ZmMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXFxuLnBhbmVsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogIzAwZjtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XFxufVxcblxcbi5wYW5lbF9maWxlLXByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbn1cXG5cXG4ucGFuZWxfX2NhcHRpb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblxcbi5maWxlLWxpc3Qge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZpbGUsXFxuLmhlYWRlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5maWxlX3N0YXRlX2ZvY3VzZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMGZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmZpbGVfc3RhdGVfZm9jdXNlZCAuZmlsZV9fbmFtZSxcXG4uZmlsZV9zdGF0ZV9mb2N1c2VkIC5maWxlX19zaXplIHtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmZpbGVfX25hbWUsXFxuLmZpbGVfX3NpemUsXFxuLmZpbGVfX3RpbWUsXFxuLmhlYWRlcl9fbmFtZSxcXG4uaGVhZGVyX190aW1lLFxcbi5oZWFkZXJfX3NpemUge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5maWxlX19uYW1lLFxcbi5oZWFkZXJfX25hbWUge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZmZmO1xcbn1cXG5cXG4uZmlsZV9fc2l6ZSxcXG4uaGVhZGVyX19zaXplIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2ZmZjtcXG59XFxuXFxuLmZpbGVfX3NpemUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmZpbGVfX3RpbWUsXFxuLmhlYWRlcl9fdGltZXtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5maWxlX19uYW1lX3R5cGVfZmlsZSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXG59XFxuXFxuLmZpbGVfc3RhdGVfZm9jdXNlZCAuZmlsZV9fbmFtZV90eXBlX2ZpbGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJfX25hbWUsXFxuLmhlYWRlcl9fdGltZSxcXG4uaGVhZGVyX19zaXplIHtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmlsZS1wcmV2aWV3IHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb25zb2xlIHtcXG4gICAgbWFyZ2luLXRvcDogLTNweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbn1cXG5cXG4uY29uc29sZV9faW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbi5jb250cm9sIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4uY29udHJvbF9fbnVtYmVyLFxcbi5jb250cm9sX19uYW1lIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5jb250cm9sX19udW1iZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRyb2xfX25hbWUge1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMGZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vZXhhbXBsZS9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVHVpTm9kZSBmcm9tICcuL3R1aS1ub2RlJztcbmltcG9ydCBUdWlUZXh0IGZyb20gJy4vdHVpLXRleHQnO1xuaW1wb3J0IHtzZWxlY3RTZXJpYWxpemVyRm9yfSBmcm9tICcuL3NlcmlhbGl6ZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHVpRWxlbWVudCBleHRlbmRzIFR1aU5vZGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAgICAgKiBAcGFyYW0ge051bWJlcltdfSBbb3B0aW9ucy5zY2FsZV1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihub2RlLCBvcHRpb25zKSB7XG4gICAgICAgIC8qIGpzaGludCBtYXhzdGF0ZW1lbnRzOiAxNSAqL1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT25seSBlbGVtZW50IG5vZGUgaXMgc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YWdOYW1lID0gbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHt7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVtdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5hdHRyaWJ1dGVzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllcyhub2RlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzQWN0aXZlRW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbm9kZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0Nzc1N0eWxlfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdHlsZSA9IHRoaXMuZ2V0U3R5bGUobm9kZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjcm9sbCA9IHRoaXMuZ2V0U2Nyb2xsKG5vZGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0Q2xpZW50UmVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm91bmRpbmdCb3ggPSB0aGlzLmdldE5vcm1hbGl6ZWRDbGllbnRSZWN0T2Yobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge09iamVjdENsaWVudFJlY3RbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xpZW50UmVjdHMgPSB0aGlzLm5vcm1hbGl6ZUNsaWVudFJlY3RzKG5vZGUuZ2V0Q2xpZW50UmVjdHMoKSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1R1aU5vZGVbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudE9mKG5vZGUpO1xuXG4gICAgICAgIC8vIFRPRE8gY3VycmVudGx5IHNlcmlhbGl6ZXIgaXMgYm91bmQgdG8gSFRNTEVsZW1lbnRcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VyaWFsaXplRWxlbWVudCA9IHNlbGVjdFNlcmlhbGl6ZXJGb3Iobm9kZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICogQHJldHVybnMgeyhUdWlFbGVtZW50fFR1aVRleHQpW119XG4gICAgICovXG4gICAgZ2V0Q29udGVudE9mKG5vZGUpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICB2YXIgY29udGVudCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5wdXNoKG5ldyBUdWlFbGVtZW50KGNoaWxkTm9kZSwgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5wdXNoKG5ldyBUdWlUZXh0KGNoaWxkTm9kZSwgdGhpcy5zdHlsZSwgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICovXG4gICAgZ2V0UHJvcGVydGllcyhub2RlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbm9kZS52YWx1ZSxcbiAgICAgICAgICAgIGNoZWNrZWQ6IG5vZGUuY2hlY2tlZCxcbiAgICAgICAgICAgIHNlbGVjdGlvblN0YXJ0OiBub2RlLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgc2VsZWN0aW9uRW5kOiBub2RlLnNlbGVjdGlvbkVuZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFN0eWxlKG5vZGUpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgICAgICAvLyBTdXBwb3J0IG9ubHkgc3Vic2V0IG9mIENTU1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gU3ltYm9sLXJlbGF0ZWQgcHJvcGVydGllc1xuICAgICAgICAgICAgY29sb3I6IGNvbXB1dGVkU3R5bGUuY29sb3IsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbXB1dGVkU3R5bGUuYmFja2dyb3VuZENvbG9yLFxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0ZWQ6IG5vcm1hbCwgYm9sZFxuICAgICAgICAgICAgZm9udFdlaWdodDogY29tcHV0ZWRTdHlsZS5mb250V2VpZ2h0LFxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0ZWQ6IG5vbmUsIHVuZGVybGluZSwgbGluZS10aHJvdWdoXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogY29tcHV0ZWRTdHlsZS50ZXh0RGVjb3JhdGlvbixcblxuICAgICAgICAgICAgLy8gU3VwcG9ydGVkOiBub25lLCBpdGFsaWNcbiAgICAgICAgICAgIGZvbnRTdHlsZTogY29tcHV0ZWRTdHlsZS5mb250U3R5bGUsXG5cbiAgICAgICAgICAgIC8vIEJveC1yZWxhdGVkIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGJvcmRlckxlZnRDb2xvcjogY29tcHV0ZWRTdHlsZS5ib3JkZXJMZWZ0Q29sb3IsXG4gICAgICAgICAgICBib3JkZXJSaWdodENvbG9yOiBjb21wdXRlZFN0eWxlLmJvcmRlclJpZ2h0Q29sb3IsXG4gICAgICAgICAgICBib3JkZXJUb3BDb2xvcjogY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BDb2xvcixcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb21wdXRlZFN0eWxlLmJvcmRlckJvdHRvbUNvbG9yLFxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0ZWQ6IDFweCwgMHB4LCBub25lXG4gICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGg6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSxcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGg6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCksXG4gICAgICAgICAgICBib3JkZXJUb3BXaWR0aDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BXaWR0aCksXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCksXG5cbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYXJzZUludChjb21wdXRlZFN0eWxlLnBhZGRpbmdMZWZ0KSxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nUmlnaHQpLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nVG9wKSxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSksXG5cbiAgICAgICAgICAgIG92ZXJmbG93OiBjb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0ZWQ6IG5vcm1hbCwgcHJlLCBwcmUtd3JhcFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogY29tcHV0ZWRTdHlsZS53aGl0ZVNwYWNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0U2Nyb2xsKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodDogbm9kZS5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBzY3JvbGxXaWR0aDogbm9kZS5zY3JvbGxXaWR0aCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQ6IG5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFRvcDogbm9kZS5zY3JvbGxUb3BcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fVxuICAgICAqL1xuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZUVsZW1lbnQuY2FsbChudWxsLCB0aGlzKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi90dWktZWxlbWVudC5qc1xuICoqLyIsImltcG9ydCB7YW5zaX0gZnJvbSAnLi9hbnNpJztcbmltcG9ydCB7Y2hyb21lfSBmcm9tICcuL2Nocm9tZSc7XG5pbXBvcnQge2h0bWx9IGZyb20gJy4vaHRtbCc7XG5pbXBvcnQge2FzY2lpfSBmcm9tICcuL2FzY2lpJztcblxuZXhwb3J0IGRlZmF1bHQge2Fuc2ksIGNocm9tZSwgaHRtbCwgYXNjaWl9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvcmVuZGVycy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBFbGVtZW50U2VyaWFsaXplciBmcm9tICcuL2VsZW1lbnQtc2VyaWFsaXplcic7XG5pbXBvcnQgSW5wdXRTZXJpYWxpemVyIGZyb20gJy4vaW5wdXQtc2VyaWFsaXplcic7XG5pbXBvcnQge2NhbGN1bGF0ZSBhcyBjYWxjdWxhdGVTcGVjaWZpY2l0eX0gZnJvbSAnc3BlY2lmaWNpdHknO1xuXG4vKipcbiAqIE9yZGVyZWQgYnkgc3BlY2lmaWNpdHksIHRoZSBtb3N0IHNwZWNpZmljIGFuZCBsYXN0IGFkZGVkIGVsZW1lbnQgaXMgYXQgdGhlIGVuZFxuICogQHR5cGUge3tzZWxlY3RvcjogU3RyaW5nLCBzcGVjaWZpY2l0eTogU3RyaW5nLCBzZXJpYWxpemVyOiBTZXJpYWxpemVyfVtdfVxuICovXG52YXIgc2VyaWFsaXplcnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0ge3tzcGVjaWZpY2l0eTogU3RyaW5nfX0gYVxuICogQHBhcmFtIHt7c3BlY2lmaWNpdHk6IFN0cmluZ319IGJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHNvcnRCeVNwZWNpZmljaXR5KGEsIGIpIHtcbiAgICBpZiAoYS5zcGVjaWZpY2l0eSA+IGIuc3BlY2lmaWNpdHkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgaWYgKGEuc3BlY2lmaWNpdHkgPCBiLnNwZWNpZmljaXR5KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaEZ1bmN0aW9uRm9yKG5vZGUpIHtcbiAgICB2YXIgdmFyaWFudHMgPSBbJ21hdGNoZXMnLCAnbWF0Y2hlc1NlbGVjdG9yJywgJ21vek1hdGNoZXNTZWxlY3RvcicsICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlW3ZhcmlhbnRzW2ldXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXRjaCBmdW5jdGlvbiBpcyBub3QgZm91bmQnKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBub2RlLm1hdGNoZXNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFNlcmlhbGl6ZXJGb3Iobm9kZSkge1xuICAgIHZhciBtYXRjaGVkU2VyaWFsaXplcnMgPSBzZXJpYWxpemVycy5maWx0ZXIoZnVuY3Rpb24gKHNlcmlhbGl6ZXIpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVbZ2V0TWF0Y2hGdW5jdGlvbkZvcihub2RlKV0oc2VyaWFsaXplci5zZWxlY3Rvcik7XG4gICAgfSk7XG5cbiAgICAvLyB0aGUgbGFzdCBzZXJpYWxpemVyIGlzIHRoZSBtb3N0IHNwZWNpZmljKGJ5IHNwZWNpZmljaXR5IGFuZCBvcmRlciBvZiBhZGRpbmcpXG4gICAgdmFyIFNlcmlhbGl6ZXIgPSBtYXRjaGVkU2VyaWFsaXplcnNbbWF0Y2hlZFNlcmlhbGl6ZXJzLmxlbmd0aCAtIDFdLnNlcmlhbGl6ZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R1aUVsZW1lbnR9IHR1aUVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodHVpRWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VyaWFsaXplciA9IG5ldyBTZXJpYWxpemVyKHR1aUVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplci5zZXJpYWxpemUoKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTZXJpYWxpemVyfSBzZXJpYWxpemVyXG4gKiBAZXhhbXBsZVxuICogIGFkZCgndGFibGUnLCBUYWJsZVNlcmlhbGl6ZXIpO1xuICogIGFkZCgnaW5wdXRbdHlwZT1cInByb2dyZXNzXCJdJywgUHJvZ3Jlc3NCYXJTZXJpYWxpemVyKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFNlcmlhbGl6ZXIoc2VsZWN0b3IsIHNlcmlhbGl6ZXIpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgc2VsZWN0b3JgIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2VyaWFsaXplciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgc2VyaWFsaXplcmAgc2hvdWxkIGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTcGVjaWZpY2l0eShzZWxlY3RvcikuZm9yRWFjaCgoe3NlbGVjdG9yLCBzcGVjaWZpY2l0eX0pID0+IHtcbiAgICAgICAgc2VyaWFsaXplcnMucHVzaCh7c2VsZWN0b3IsIHNlcmlhbGl6ZXIsIHNwZWNpZmljaXR5fSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVycy5zb3J0KHNvcnRCeVNwZWNpZmljaXR5KTtcbn1cblxuLy8gTWF0Y2hlcyBvbiBhbGwgVHVpRWxlbWVudHNcbmFkZFNlcmlhbGl6ZXIoJyonLCBFbGVtZW50U2VyaWFsaXplcik7XG5cbi8vIE1hdGNoZXMgYWxsIGlucHV0c1xuYWRkU2VyaWFsaXplcignaW5wdXQsc2VsZWN0LHRleHRhcmVhJywgSW5wdXRTZXJpYWxpemVyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3NlcmlhbGl6ZXJzL2luZGV4LmpzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzSUU5ID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSA5XFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzSUU5KCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlVGV4dChzb3VyY2UsIGlkLCByZXBsYWNlbWVudCkge1xyXG5cdHZhciBib3VuZGFyaWVzID0gW1wiLyoqID4+XCIgKyBpZCArIFwiICoqL1wiLCBcIi8qKiBcIiArIGlkICsgXCI8PCAqKi9cIl07XHJcblx0dmFyIHN0YXJ0ID0gc291cmNlLmxhc3RJbmRleE9mKGJvdW5kYXJpZXNbMF0pO1xyXG5cdHZhciB3cmFwcGVkUmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudFxyXG5cdFx0PyAoYm91bmRhcmllc1swXSArIHJlcGxhY2VtZW50ICsgYm91bmRhcmllc1sxXSlcclxuXHRcdDogXCJcIjtcclxuXHRpZiAoc291cmNlLmxhc3RJbmRleE9mKGJvdW5kYXJpZXNbMF0pID49IDApIHtcclxuXHRcdHZhciBlbmQgPSBzb3VyY2UubGFzdEluZGV4T2YoYm91bmRhcmllc1sxXSkgKyBib3VuZGFyaWVzWzFdLmxlbmd0aDtcclxuXHRcdHJldHVybiBzb3VyY2Uuc2xpY2UoMCwgc3RhcnQpICsgd3JhcHBlZFJlcGxhY2VtZW50ICsgc291cmNlLnNsaWNlKGVuZCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBzb3VyY2UgKyB3cmFwcGVkUmVwbGFjZW1lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQsIGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpICsgXCIgKi9cIjtcclxuXHRcdFx0Y3NzID0gXCJAaW1wb3J0IHVybChcXFwiZGF0YTp0ZXh0L2NzcztiYXNlNjQsXCIgKyBidG9hKGNzcykgKyBcIlxcXCIpXCI7XHJcblx0XHR9IGNhdGNoKGUpIHt9XHJcblx0fVxyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBpbXBvcnRlZExpc3QsIG1lZGlhKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGltcG9ydGVkTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBpbXBvcnRlZExpc3RbaV07XHJcblx0XHRpZihtZWRpYSAmJiAhaXRlbVsyXSlcclxuXHRcdFx0aXRlbVsyXSA9IG1lZGlhO1xyXG5cdFx0ZWxzZSBpZihtZWRpYSkge1xyXG5cdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYSArIFwiKVwiO1xyXG5cdFx0fVxyXG5cdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdH1cclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL21lcmdlSW1wb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudHVpLWRvbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllcicsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zOTk5MDIzNDM3NXB4O1xcbiAgICBsaW5lLWhlaWdodDogMXB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnR1aS1kb20gKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4udHVpLWRvbSAqOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLnR1aS1jbGkge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXInLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY29yZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanNcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHtcbiAgdmFyIF9hZ2FpbiA9IHRydWU7XG5cbiAgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7XG4gICAgX2FnYWluID0gZmFsc2U7XG4gICAgdmFyIG9iamVjdCA9IF94LFxuICAgICAgICBwcm9wZXJ0eSA9IF94MixcbiAgICAgICAgcmVjZWl2ZXIgPSBfeDM7XG4gICAgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDtcblxuICAgIHZhciBkZXNjID0gX2NvcmUuT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICAgIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBfY29yZS5PYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3ggPSBwYXJlbnQ7XG4gICAgICAgIF94MiA9IHByb3BlcnR5O1xuICAgICAgICBfeDMgPSByZWNlaXZlcjtcbiAgICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MgJiYgZGVzYy53cml0YWJsZSkge1xuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YXIgcHJvcCA9IHByb3BzW2tleV07XG4gICAgICBwcm9wLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAocHJvcC52YWx1ZSkgcHJvcC53cml0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29yZS5qcyAwLjYuMVxuICogaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanNcbiAqIExpY2Vuc2U6IGh0dHA6Ly9yb2NrLm1pdC1saWNlbnNlLm9yZ1xuICogwqkgMjAxNSBEZW5pcyBQdXNoa2FyZXZcbiAqL1xuIWZ1bmN0aW9uKGdsb2JhbCwgZnJhbWV3b3JrLCB1bmRlZmluZWQpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb21tb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8vIFNob3J0Y3V0cyBmb3IgW1tDbGFzc11dICYgcHJvcGVydHkgbmFtZXNcclxudmFyIE9CSkVDVCAgICAgICAgICA9ICdPYmplY3QnXHJcbiAgLCBGVU5DVElPTiAgICAgICAgPSAnRnVuY3Rpb24nXHJcbiAgLCBBUlJBWSAgICAgICAgICAgPSAnQXJyYXknXHJcbiAgLCBTVFJJTkcgICAgICAgICAgPSAnU3RyaW5nJ1xyXG4gICwgTlVNQkVSICAgICAgICAgID0gJ051bWJlcidcclxuICAsIFJFR0VYUCAgICAgICAgICA9ICdSZWdFeHAnXHJcbiAgLCBEQVRFICAgICAgICAgICAgPSAnRGF0ZSdcclxuICAsIE1BUCAgICAgICAgICAgICA9ICdNYXAnXHJcbiAgLCBTRVQgICAgICAgICAgICAgPSAnU2V0J1xyXG4gICwgV0VBS01BUCAgICAgICAgID0gJ1dlYWtNYXAnXHJcbiAgLCBXRUFLU0VUICAgICAgICAgPSAnV2Vha1NldCdcclxuICAsIFNZTUJPTCAgICAgICAgICA9ICdTeW1ib2wnXHJcbiAgLCBQUk9NSVNFICAgICAgICAgPSAnUHJvbWlzZSdcclxuICAsIE1BVEggICAgICAgICAgICA9ICdNYXRoJ1xyXG4gICwgQVJHVU1FTlRTICAgICAgID0gJ0FyZ3VtZW50cydcclxuICAsIFBST1RPVFlQRSAgICAgICA9ICdwcm90b3R5cGUnXHJcbiAgLCBDT05TVFJVQ1RPUiAgICAgPSAnY29uc3RydWN0b3InXHJcbiAgLCBUT19TVFJJTkcgICAgICAgPSAndG9TdHJpbmcnXHJcbiAgLCBUT19TVFJJTkdfVEFHICAgPSBUT19TVFJJTkcgKyAnVGFnJ1xyXG4gICwgVE9fTE9DQUxFICAgICAgID0gJ3RvTG9jYWxlU3RyaW5nJ1xyXG4gICwgSEFTX09XTiAgICAgICAgID0gJ2hhc093blByb3BlcnR5J1xyXG4gICwgRk9SX0VBQ0ggICAgICAgID0gJ2ZvckVhY2gnXHJcbiAgLCBJVEVSQVRPUiAgICAgICAgPSAnaXRlcmF0b3InXHJcbiAgLCBGRl9JVEVSQVRPUiAgICAgPSAnQEAnICsgSVRFUkFUT1JcclxuICAsIFBST0NFU1MgICAgICAgICA9ICdwcm9jZXNzJ1xyXG4gICwgQ1JFQVRFX0VMRU1FTlQgID0gJ2NyZWF0ZUVsZW1lbnQnXHJcbiAgLy8gQWxpYXNlcyBnbG9iYWwgb2JqZWN0cyBhbmQgcHJvdG90eXBlc1xyXG4gICwgRnVuY3Rpb24gICAgICAgID0gZ2xvYmFsW0ZVTkNUSU9OXVxyXG4gICwgT2JqZWN0ICAgICAgICAgID0gZ2xvYmFsW09CSkVDVF1cclxuICAsIEFycmF5ICAgICAgICAgICA9IGdsb2JhbFtBUlJBWV1cclxuICAsIFN0cmluZyAgICAgICAgICA9IGdsb2JhbFtTVFJJTkddXHJcbiAgLCBOdW1iZXIgICAgICAgICAgPSBnbG9iYWxbTlVNQkVSXVxyXG4gICwgUmVnRXhwICAgICAgICAgID0gZ2xvYmFsW1JFR0VYUF1cclxuICAsIERhdGUgICAgICAgICAgICA9IGdsb2JhbFtEQVRFXVxyXG4gICwgTWFwICAgICAgICAgICAgID0gZ2xvYmFsW01BUF1cclxuICAsIFNldCAgICAgICAgICAgICA9IGdsb2JhbFtTRVRdXHJcbiAgLCBXZWFrTWFwICAgICAgICAgPSBnbG9iYWxbV0VBS01BUF1cclxuICAsIFdlYWtTZXQgICAgICAgICA9IGdsb2JhbFtXRUFLU0VUXVxyXG4gICwgU3ltYm9sICAgICAgICAgID0gZ2xvYmFsW1NZTUJPTF1cclxuICAsIE1hdGggICAgICAgICAgICA9IGdsb2JhbFtNQVRIXVxyXG4gICwgVHlwZUVycm9yICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxyXG4gICwgUmFuZ2VFcnJvciAgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3JcclxuICAsIHNldFRpbWVvdXQgICAgICA9IGdsb2JhbC5zZXRUaW1lb3V0XHJcbiAgLCBzZXRJbW1lZGlhdGUgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXHJcbiAgLCBjbGVhckltbWVkaWF0ZSAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcclxuICAsIHBhcnNlSW50ICAgICAgICA9IGdsb2JhbC5wYXJzZUludFxyXG4gICwgaXNGaW5pdGUgICAgICAgID0gZ2xvYmFsLmlzRmluaXRlXHJcbiAgLCBwcm9jZXNzICAgICAgICAgPSBnbG9iYWxbUFJPQ0VTU11cclxuICAsIG5leHRUaWNrICAgICAgICA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5uZXh0VGlja1xyXG4gICwgZG9jdW1lbnQgICAgICAgID0gZ2xvYmFsLmRvY3VtZW50XHJcbiAgLCBodG1sICAgICAgICAgICAgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAsIG5hdmlnYXRvciAgICAgICA9IGdsb2JhbC5uYXZpZ2F0b3JcclxuICAsIGRlZmluZSAgICAgICAgICA9IGdsb2JhbC5kZWZpbmVcclxuICAsIGNvbnNvbGUgICAgICAgICA9IGdsb2JhbC5jb25zb2xlIHx8IHt9XHJcbiAgLCBBcnJheVByb3RvICAgICAgPSBBcnJheVtQUk9UT1RZUEVdXHJcbiAgLCBPYmplY3RQcm90byAgICAgPSBPYmplY3RbUFJPVE9UWVBFXVxyXG4gICwgRnVuY3Rpb25Qcm90byAgID0gRnVuY3Rpb25bUFJPVE9UWVBFXVxyXG4gICwgSW5maW5pdHkgICAgICAgID0gMSAvIDBcclxuICAsIERPVCAgICAgICAgICAgICA9ICcuJztcclxuXHJcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcclxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xyXG4gIHJldHVybiBpdCAhPT0gbnVsbCAmJiAodHlwZW9mIGl0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nKTtcclxufVxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcclxuICByZXR1cm4gdHlwZW9mIGl0ID09ICdmdW5jdGlvbic7XHJcbn1cclxuLy8gTmF0aXZlIGZ1bmN0aW9uP1xyXG52YXIgaXNOYXRpdmUgPSBjdHgoLy4vLnRlc3QsIC9cXFtuYXRpdmUgY29kZVxcXVxccypcXH1cXHMqJC8sIDEpO1xyXG5cclxuLy8gT2JqZWN0IGludGVybmFsIFtbQ2xhc3NdXSBvciB0b1N0cmluZ1RhZ1xyXG4vLyBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXHJcbnZhciB0b1N0cmluZyA9IE9iamVjdFByb3RvW1RPX1NUUklOR107XHJcbmZ1bmN0aW9uIHNldFRvU3RyaW5nVGFnKGl0LCB0YWcsIHN0YXQpe1xyXG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdFtQUk9UT1RZUEVdLCBTWU1CT0xfVEFHKSloaWRkZW4oaXQsIFNZTUJPTF9UQUcsIHRhZyk7XHJcbn1cclxuZnVuY3Rpb24gY29mKGl0KXtcclxuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xyXG59XHJcbmZ1bmN0aW9uIGNsYXNzb2YoaXQpe1xyXG4gIHZhciBPLCBUO1xyXG4gIHJldHVybiBpdCA9PSB1bmRlZmluZWQgPyBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiAnTnVsbCdcclxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtTWU1CT0xfVEFHXSkgPT0gJ3N0cmluZycgPyBUIDogY29mKE8pO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvblxyXG52YXIgY2FsbCAgPSBGdW5jdGlvblByb3RvLmNhbGxcclxuICAsIGFwcGx5ID0gRnVuY3Rpb25Qcm90by5hcHBseVxyXG4gICwgUkVGRVJFTkNFX0dFVDtcclxuLy8gUGFydGlhbCBhcHBseVxyXG5mdW5jdGlvbiBwYXJ0KC8qIC4uLmFyZ3MgKi8pe1xyXG4gIHZhciBmbiAgICAgPSBhc3NlcnRGdW5jdGlvbih0aGlzKVxyXG4gICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAsIGFyZ3MgICA9IEFycmF5KGxlbmd0aClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCBfICAgICAgPSBwYXRoLl9cclxuICAgICwgaG9sZGVyID0gZmFsc2U7XHJcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigoYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xyXG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgIHZhciB0aGF0ICAgID0gdGhpc1xyXG4gICAgICAsIF9sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICwgaSA9IDAsIGogPSAwLCBfYXJncztcclxuICAgIGlmKCFob2xkZXIgJiYgIV9sZW5ndGgpcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XHJcbiAgICBfYXJncyA9IGFyZ3Muc2xpY2UoKTtcclxuICAgIGlmKGhvbGRlcilmb3IoO2xlbmd0aCA+IGk7IGkrKylpZihfYXJnc1tpXSA9PT0gXylfYXJnc1tpXSA9IGFyZ3VtZW50c1tqKytdO1xyXG4gICAgd2hpbGUoX2xlbmd0aCA+IGopX2FyZ3MucHVzaChhcmd1bWVudHNbaisrXSk7XHJcbiAgICByZXR1cm4gaW52b2tlKGZuLCBfYXJncywgdGhhdCk7XHJcbiAgfVxyXG59XHJcbi8vIE9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xyXG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQsIGxlbmd0aCl7XHJcbiAgYXNzZXJ0RnVuY3Rpb24oZm4pO1xyXG4gIGlmKH5sZW5ndGggJiYgdGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcclxuICBzd2l0Y2gobGVuZ3RoKXtcclxuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcclxuICAgIH1cclxuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcclxuICAgIH1cclxuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcclxuICAgIH1cclxuICB9IHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG59XHJcbi8vIEZhc3QgYXBwbHlcclxuLy8gaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XHJcbmZ1bmN0aW9uIGludm9rZShmbiwgYXJncywgdGhhdCl7XHJcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaChhcmdzLmxlbmd0aCB8IDApe1xyXG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XHJcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XHJcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XHJcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICBjYXNlIDU6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSk7XHJcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xyXG59XHJcblxyXG4vLyBPYmplY3Q6XHJcbnZhciBjcmVhdGUgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZVxyXG4gICwgZ2V0UHJvdG90eXBlT2YgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZlxyXG4gICwgc2V0UHJvdG90eXBlT2YgICA9IE9iamVjdC5zZXRQcm90b3R5cGVPZlxyXG4gICwgZGVmaW5lUHJvcGVydHkgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxyXG4gICwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzXHJcbiAgLCBnZXRPd25EZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvclxyXG4gICwgZ2V0S2V5cyAgICAgICAgICA9IE9iamVjdC5rZXlzXHJcbiAgLCBnZXROYW1lcyAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcclxuICAsIGdldFN5bWJvbHMgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzXHJcbiAgLCBpc0Zyb3plbiAgICAgICAgID0gT2JqZWN0LmlzRnJvemVuXHJcbiAgLCBoYXMgICAgICAgICAgICAgID0gY3R4KGNhbGwsIE9iamVjdFByb3RvW0hBU19PV05dLCAyKVxyXG4gIC8vIER1bW15LCBmaXggZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmcgaW4gZXM1IG1vZHVsZVxyXG4gICwgRVM1T2JqZWN0ICAgICAgICA9IE9iamVjdFxyXG4gICwgRGljdDtcclxuZnVuY3Rpb24gdG9PYmplY3QoaXQpe1xyXG4gIHJldHVybiBFUzVPYmplY3QoYXNzZXJ0RGVmaW5lZChpdCkpO1xyXG59XHJcbmZ1bmN0aW9uIHJldHVybkl0KGl0KXtcclxuICByZXR1cm4gaXQ7XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuVGhpcygpe1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcbmZ1bmN0aW9uIGdldChvYmplY3QsIGtleSl7XHJcbiAgaWYoaGFzKG9iamVjdCwga2V5KSlyZXR1cm4gb2JqZWN0W2tleV07XHJcbn1cclxuZnVuY3Rpb24gb3duS2V5cyhpdCl7XHJcbiAgYXNzZXJ0T2JqZWN0KGl0KTtcclxuICByZXR1cm4gZ2V0U3ltYm9scyA/IGdldE5hbWVzKGl0KS5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDogZ2V0TmFtZXMoaXQpO1xyXG59XHJcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcclxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2Upe1xyXG4gIHZhciBUID0gT2JqZWN0KGFzc2VydERlZmluZWQodGFyZ2V0KSlcclxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICwgaSA9IDE7XHJcbiAgd2hpbGUobCA+IGkpe1xyXG4gICAgdmFyIFMgICAgICA9IEVTNU9iamVjdChhcmd1bWVudHNbaSsrXSlcclxuICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKFMpXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBqICAgICAgPSAwXHJcbiAgICAgICwga2V5O1xyXG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBUO1xyXG59XHJcbmZ1bmN0aW9uIGtleU9mKG9iamVjdCwgZWwpe1xyXG4gIHZhciBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaW5kZXggID0gMFxyXG4gICAgLCBrZXk7XHJcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcclxufVxyXG5cclxuLy8gQXJyYXlcclxuLy8gYXJyYXkoJ3N0cjEsc3RyMixzdHIzJykgPT4gWydzdHIxJywgJ3N0cjInLCAnc3RyMyddXHJcbmZ1bmN0aW9uIGFycmF5KGl0KXtcclxuICByZXR1cm4gU3RyaW5nKGl0KS5zcGxpdCgnLCcpO1xyXG59XHJcbnZhciBwdXNoICAgID0gQXJyYXlQcm90by5wdXNoXHJcbiAgLCB1bnNoaWZ0ID0gQXJyYXlQcm90by51bnNoaWZ0XHJcbiAgLCBzbGljZSAgID0gQXJyYXlQcm90by5zbGljZVxyXG4gICwgc3BsaWNlICA9IEFycmF5UHJvdG8uc3BsaWNlXHJcbiAgLCBpbmRleE9mID0gQXJyYXlQcm90by5pbmRleE9mXHJcbiAgLCBmb3JFYWNoID0gQXJyYXlQcm90b1tGT1JfRUFDSF07XHJcbi8qXHJcbiAqIDAgLT4gZm9yRWFjaFxyXG4gKiAxIC0+IG1hcFxyXG4gKiAyIC0+IGZpbHRlclxyXG4gKiAzIC0+IHNvbWVcclxuICogNCAtPiBldmVyeVxyXG4gKiA1IC0+IGZpbmRcclxuICogNiAtPiBmaW5kSW5kZXhcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5TWV0aG9kKHR5cGUpe1xyXG4gIHZhciBpc01hcCAgICAgICA9IHR5cGUgPT0gMVxyXG4gICAgLCBpc0ZpbHRlciAgICA9IHR5cGUgPT0gMlxyXG4gICAgLCBpc1NvbWUgICAgICA9IHR5cGUgPT0gM1xyXG4gICAgLCBpc0V2ZXJ5ICAgICA9IHR5cGUgPT0gNFxyXG4gICAgLCBpc0ZpbmRJbmRleCA9IHR5cGUgPT0gNlxyXG4gICAgLCBub2hvbGVzICAgICA9IHR5cGUgPT0gNSB8fCBpc0ZpbmRJbmRleDtcclxuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgIHZhciBPICAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCB0aGF0ICAgPSBhcmd1bWVudHNbMV1cclxuICAgICAgLCBzZWxmICAgPSBFUzVPYmplY3QoTylcclxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcclxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gaXNNYXAgPyBBcnJheShsZW5ndGgpIDogaXNGaWx0ZXIgPyBbXSA6IHVuZGVmaW5lZFxyXG4gICAgICAsIHZhbCwgcmVzO1xyXG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihub2hvbGVzIHx8IGluZGV4IGluIHNlbGYpe1xyXG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcclxuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcclxuICAgICAgaWYodHlwZSl7XHJcbiAgICAgICAgaWYoaXNNYXApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAgLy8gbWFwXHJcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcclxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXHJcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XHJcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXHJcbiAgICAgICAgfSBlbHNlIGlmKGlzRXZlcnkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAgLy8gZXZlcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRmluZEluZGV4ID8gLTEgOiBpc1NvbWUgfHwgaXNFdmVyeSA/IGlzRXZlcnkgOiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5Q29udGFpbnMoaXNDb250YWlucyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcclxuICAgIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxyXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoYXJndW1lbnRzWzFdLCBsZW5ndGgpO1xyXG4gICAgaWYoaXNDb250YWlucyAmJiBlbCAhPSBlbCl7XHJcbiAgICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoc2FtZU5hTihPW2luZGV4XSkpcmV0dXJuIGlzQ29udGFpbnMgfHwgaW5kZXg7XHJcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihpc0NvbnRhaW5zIHx8IGluZGV4IGluIE8pe1xyXG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIGlzQ29udGFpbnMgfHwgaW5kZXg7XHJcbiAgICB9IHJldHVybiAhaXNDb250YWlucyAmJiAtMTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJpYyhBLCBCKXtcclxuICAvLyBzdHJhbmdlIElFIHF1aXJrcyBtb2RlIGJ1ZyAtPiB1c2UgdHlwZW9mIHZzIGlzRnVuY3Rpb25cclxuICByZXR1cm4gdHlwZW9mIEEgPT0gJ2Z1bmN0aW9uJyA/IEEgOiBCO1xyXG59XHJcblxyXG4vLyBNYXRoXHJcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxZmZmZmZmZmZmZmZmZiAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXHJcbiAgLCBwb3cgICAgPSBNYXRoLnBvd1xyXG4gICwgYWJzICAgID0gTWF0aC5hYnNcclxuICAsIGNlaWwgICA9IE1hdGguY2VpbFxyXG4gICwgZmxvb3IgID0gTWF0aC5mbG9vclxyXG4gICwgbWF4ICAgID0gTWF0aC5tYXhcclxuICAsIG1pbiAgICA9IE1hdGgubWluXHJcbiAgLCByYW5kb20gPSBNYXRoLnJhbmRvbVxyXG4gICwgdHJ1bmMgID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHJldHVybiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XHJcbiAgICB9XHJcbi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXHJcbmZ1bmN0aW9uIHNhbWVOYU4obnVtYmVyKXtcclxuICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcclxufVxyXG4vLyA3LjEuNCBUb0ludGVnZXJcclxuZnVuY3Rpb24gdG9JbnRlZ2VyKGl0KXtcclxuICByZXR1cm4gaXNOYU4oaXQpID8gMCA6IHRydW5jKGl0KTtcclxufVxyXG4vLyA3LjEuMTUgVG9MZW5ndGhcclxuZnVuY3Rpb24gdG9MZW5ndGgoaXQpe1xyXG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgTUFYX1NBRkVfSU5URUdFUikgOiAwO1xyXG59XHJcbmZ1bmN0aW9uIHRvSW5kZXgoaW5kZXgsIGxlbmd0aCl7XHJcbiAgdmFyIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcclxuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcclxufVxyXG5mdW5jdGlvbiBseihudW0pe1xyXG4gIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXBsYWNlcihyZWdFeHAsIHJlcGxhY2UsIGlzU3RhdGljKXtcclxuICB2YXIgcmVwbGFjZXIgPSBpc09iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xyXG4gICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XHJcbiAgfSA6IHJlcGxhY2U7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBTdHJpbmcoaXNTdGF0aWMgPyBpdCA6IHRoaXMpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVBvaW50QXQodG9TdHJpbmcpe1xyXG4gIHJldHVybiBmdW5jdGlvbihwb3Mpe1xyXG4gICAgdmFyIHMgPSBTdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcclxuICAgICAgLCBsID0gcy5sZW5ndGhcclxuICAgICAgLCBhLCBiO1xyXG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiB0b1N0cmluZyA/ICcnIDogdW5kZWZpbmVkO1xyXG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcclxuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXHJcbiAgICAgID8gdG9TdHJpbmcgPyBzLmNoYXJBdChpKSA6IGFcclxuICAgICAgOiB0b1N0cmluZyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFzc2VydGlvbiAmIGVycm9yc1xyXG52YXIgUkVEVUNFX0VSUk9SID0gJ1JlZHVjZSBvZiBlbXB0eSBvYmplY3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcclxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbXNnMSwgbXNnMil7XHJcbiAgaWYoIWNvbmRpdGlvbil0aHJvdyBUeXBlRXJyb3IobXNnMiA/IG1zZzEgKyBtc2cyIDogbXNnMSk7XHJcbn1cclxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XHJcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignRnVuY3Rpb24gY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydEZ1bmN0aW9uKGl0KXtcclxuICBhc3NlcnQoaXNGdW5jdGlvbihpdCksIGl0LCAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5mdW5jdGlvbiBhc3NlcnRPYmplY3QoaXQpe1xyXG4gIGFzc2VydChpc09iamVjdChpdCksIGl0LCAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydEluc3RhbmNlKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XHJcbiAgYXNzZXJ0KGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IsIG5hbWUsIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcclxufVxyXG5cclxuLy8gUHJvcGVydHkgZGVzY3JpcHRvcnMgJiBTeW1ib2xcclxuZnVuY3Rpb24gZGVzY3JpcHRvcihiaXRtYXAsIHZhbHVlKXtcclxuICByZXR1cm4ge1xyXG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxyXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxyXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxyXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG4gIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe1xyXG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwgZGVzY3JpcHRvcihiaXRtYXAsIHZhbHVlKSk7XHJcbiAgfSA6IHNpbXBsZVNldDtcclxufVxyXG5mdW5jdGlvbiB1aWQoa2V5KXtcclxuICByZXR1cm4gU1lNQk9MICsgJygnICsga2V5ICsgJylfJyArICgrK3NpZCArIHJhbmRvbSgpKVtUT19TVFJJTkddKDM2KTtcclxufVxyXG5mdW5jdGlvbiBnZXRXZWxsS25vd25TeW1ib2wobmFtZSwgc2V0dGVyKXtcclxuICByZXR1cm4gKFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0pIHx8IChzZXR0ZXIgPyBTeW1ib2wgOiBzYWZlU3ltYm9sKShTWU1CT0wgKyBET1QgKyBuYW1lKTtcclxufVxyXG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cclxudmFyIERFU0MgPSAhIWZ1bmN0aW9uKCl7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyIH19KS5hID09IDI7XHJcbiAgICAgIH0gY2F0Y2goZSl7fVxyXG4gICAgfSgpXHJcbiAgLCBzaWQgICAgPSAwXHJcbiAgLCBoaWRkZW4gPSBjcmVhdGVEZWZpbmVyKDEpXHJcbiAgLCBzZXQgICAgPSBTeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRkZW5cclxuICAsIHNhZmVTeW1ib2wgPSBTeW1ib2wgfHwgdWlkO1xyXG5mdW5jdGlvbiBhc3NpZ25IaWRkZW4odGFyZ2V0LCBzcmMpe1xyXG4gIGZvcih2YXIga2V5IGluIHNyYyloaWRkZW4odGFyZ2V0LCBrZXksIHNyY1trZXldKTtcclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG52YXIgU1lNQk9MX1VOU0NPUEFCTEVTID0gZ2V0V2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpXHJcbiAgLCBBcnJheVVuc2NvcGFibGVzICAgPSBBcnJheVByb3RvW1NZTUJPTF9VTlNDT1BBQkxFU10gfHwge31cclxuICAsIFNZTUJPTF9UQUcgICAgICAgICA9IGdldFdlbGxLbm93blN5bWJvbChUT19TVFJJTkdfVEFHKVxyXG4gICwgU1lNQk9MX1NQRUNJRVMgICAgID0gZ2V0V2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJylcclxuICAsIFNZTUJPTF9JVEVSQVRPUjtcclxuZnVuY3Rpb24gc2V0U3BlY2llcyhDKXtcclxuICBpZihERVNDICYmIChmcmFtZXdvcmsgfHwgIWlzTmF0aXZlKEMpKSlkZWZpbmVQcm9wZXJ0eShDLCBTWU1CT0xfU1BFQ0lFUywge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiByZXR1cm5UaGlzXHJcbiAgfSk7XHJcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29tbW9uLmV4cG9ydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIE5PREUgPSBjb2YocHJvY2VzcykgPT0gUFJPQ0VTU1xyXG4gICwgY29yZSA9IHt9XHJcbiAgLCBwYXRoID0gZnJhbWV3b3JrID8gZ2xvYmFsIDogY29yZVxyXG4gICwgb2xkICA9IGdsb2JhbC5jb3JlXHJcbiAgLCBleHBvcnRHbG9iYWxcclxuICAvLyB0eXBlIGJpdG1hcFxyXG4gICwgRk9SQ0VEID0gMVxyXG4gICwgR0xPQkFMID0gMlxyXG4gICwgU1RBVElDID0gNFxyXG4gICwgUFJPVE8gID0gOFxyXG4gICwgQklORCAgID0gMTZcclxuICAsIFdSQVAgICA9IDMyO1xyXG5mdW5jdGlvbiAkZGVmaW5lKHR5cGUsIG5hbWUsIHNvdXJjZSl7XHJcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxyXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiBHTE9CQUxcclxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6ICh0eXBlICYgU1RBVElDKVxyXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCBPYmplY3RQcm90bylbUFJPVE9UWVBFXVxyXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XHJcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcclxuICBmb3Ioa2V5IGluIHNvdXJjZSl7XHJcbiAgICAvLyB0aGVyZSBpcyBhIHNpbWlsYXIgbmF0aXZlXHJcbiAgICBvd24gPSAhKHR5cGUgJiBGT1JDRUQpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0XHJcbiAgICAgICYmICghaXNGdW5jdGlvbih0YXJnZXRba2V5XSkgfHwgaXNOYXRpdmUodGFyZ2V0W2tleV0pKTtcclxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXHJcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xyXG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXHJcbiAgICBpZighZnJhbWV3b3JrICYmIGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcclxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XHJcbiAgICBlbHNlIGlmKHR5cGUgJiBCSU5EICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xyXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcclxuICAgIGVsc2UgaWYodHlwZSAmIFdSQVAgJiYgIWZyYW1ld29yayAmJiB0YXJnZXRba2V5XSA9PSBvdXQpe1xyXG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBvdXQgPyBuZXcgb3V0KHBhcmFtKSA6IG91dChwYXJhbSk7XHJcbiAgICAgIH1cclxuICAgICAgZXhwW1BST1RPVFlQRV0gPSBvdXRbUFJPVE9UWVBFXTtcclxuICAgIH0gZWxzZSBleHAgPSB0eXBlICYgUFJPVE8gJiYgaXNGdW5jdGlvbihvdXQpID8gY3R4KGNhbGwsIG91dCkgOiBvdXQ7XHJcbiAgICAvLyBleHRlbmQgZ2xvYmFsXHJcbiAgICBpZihmcmFtZXdvcmsgJiYgdGFyZ2V0ICYmICFvd24pe1xyXG4gICAgICBpZihpc0dsb2JhbCl0YXJnZXRba2V5XSA9IG91dDtcclxuICAgICAgZWxzZSBkZWxldGUgdGFyZ2V0W2tleV0gJiYgaGlkZGVuKHRhcmdldCwga2V5LCBvdXQpO1xyXG4gICAgfVxyXG4gICAgLy8gZXhwb3J0XHJcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGRlbihleHBvcnRzLCBrZXksIGV4cCk7XHJcbiAgfVxyXG59XHJcbi8vIENvbW1vbkpTIGV4cG9ydFxyXG5pZih0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKW1vZHVsZS5leHBvcnRzID0gY29yZTtcclxuLy8gUmVxdWlyZUpTIGV4cG9ydFxyXG5lbHNlIGlmKGlzRnVuY3Rpb24oZGVmaW5lKSAmJiBkZWZpbmUuYW1kKWRlZmluZShmdW5jdGlvbigpe3JldHVybiBjb3JlfSk7XHJcbi8vIEV4cG9ydCB0byBnbG9iYWwgb2JqZWN0XHJcbmVsc2UgZXhwb3J0R2xvYmFsID0gdHJ1ZTtcclxuaWYoZXhwb3J0R2xvYmFsIHx8IGZyYW1ld29yayl7XHJcbiAgY29yZS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKXtcclxuICAgIGdsb2JhbC5jb3JlID0gb2xkO1xyXG4gICAgcmV0dXJuIGNvcmU7XHJcbiAgfVxyXG4gIGdsb2JhbC5jb3JlID0gY29yZTtcclxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb21tb24uaXRlcmF0b3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5TWU1CT0xfSVRFUkFUT1IgPSBnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpO1xyXG52YXIgSVRFUiAgPSBzYWZlU3ltYm9sKCdpdGVyJylcclxuICAsIEtFWSAgID0gMVxyXG4gICwgVkFMVUUgPSAyXHJcbiAgLCBJdGVyYXRvcnMgPSB7fVxyXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fVxyXG4gICAgLy8gU2FmYXJpIGhhcyBieWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxyXG4gICwgQlVHR1lfSVRFUkFUT1JTID0gJ2tleXMnIGluIEFycmF5UHJvdG8gJiYgISgnbmV4dCcgaW4gW10ua2V5cygpKTtcclxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcclxuc2V0SXRlcmF0b3IoSXRlcmF0b3JQcm90b3R5cGUsIHJldHVyblRoaXMpO1xyXG5mdW5jdGlvbiBzZXRJdGVyYXRvcihPLCB2YWx1ZSl7XHJcbiAgaGlkZGVuKE8sIFNZTUJPTF9JVEVSQVRPUiwgdmFsdWUpO1xyXG4gIC8vIEFkZCBpdGVyYXRvciBmb3IgRkYgaXRlcmF0b3IgcHJvdG9jb2xcclxuICBGRl9JVEVSQVRPUiBpbiBBcnJheVByb3RvICYmIGhpZGRlbihPLCBGRl9JVEVSQVRPUiwgdmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0LCBwcm90byl7XHJcbiAgQ29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGNyZWF0ZShwcm90byB8fCBJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcclxuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcclxufVxyXG5mdW5jdGlvbiBkZWZpbmVJdGVyYXRvcihDb25zdHJ1Y3RvciwgTkFNRSwgdmFsdWUsIERFRkFVTFQpe1xyXG4gIHZhciBwcm90byA9IENvbnN0cnVjdG9yW1BST1RPVFlQRV1cclxuICAgICwgaXRlciAgPSBnZXQocHJvdG8sIFNZTUJPTF9JVEVSQVRPUikgfHwgZ2V0KHByb3RvLCBGRl9JVEVSQVRPUikgfHwgKERFRkFVTFQgJiYgZ2V0KHByb3RvLCBERUZBVUxUKSkgfHwgdmFsdWU7XHJcbiAgaWYoZnJhbWV3b3JrKXtcclxuICAgIC8vIERlZmluZSBpdGVyYXRvclxyXG4gICAgc2V0SXRlcmF0b3IocHJvdG8sIGl0ZXIpO1xyXG4gICAgaWYoaXRlciAhPT0gdmFsdWUpe1xyXG4gICAgICB2YXIgaXRlclByb3RvID0gZ2V0UHJvdG90eXBlT2YoaXRlci5jYWxsKG5ldyBDb25zdHJ1Y3RvcikpO1xyXG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXHJcbiAgICAgIHNldFRvU3RyaW5nVGFnKGl0ZXJQcm90bywgTkFNRSArICcgSXRlcmF0b3InLCB0cnVlKTtcclxuICAgICAgLy8gRkYgZml4XHJcbiAgICAgIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpICYmIHNldEl0ZXJhdG9yKGl0ZXJQcm90bywgcmV0dXJuVGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcclxuICBJdGVyYXRvcnNbTkFNRV0gPSBpdGVyO1xyXG4gIC8vIEZGICYgdjggZml4XHJcbiAgSXRlcmF0b3JzW05BTUUgKyAnIEl0ZXJhdG9yJ10gPSByZXR1cm5UaGlzO1xyXG4gIHJldHVybiBpdGVyO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZVN0ZEl0ZXJhdG9ycyhCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VUKXtcclxuICBmdW5jdGlvbiBjcmVhdGVJdGVyKGtpbmQpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNyZWF0ZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcclxuICB2YXIgZW50cmllcyA9IGNyZWF0ZUl0ZXIoS0VZK1ZBTFVFKVxyXG4gICAgLCB2YWx1ZXMgID0gY3JlYXRlSXRlcihWQUxVRSk7XHJcbiAgaWYoREVGQVVMVCA9PSBWQUxVRSl2YWx1ZXMgPSBkZWZpbmVJdGVyYXRvcihCYXNlLCBOQU1FLCB2YWx1ZXMsICd2YWx1ZXMnKTtcclxuICBlbHNlIGVudHJpZXMgPSBkZWZpbmVJdGVyYXRvcihCYXNlLCBOQU1FLCBlbnRyaWVzLCAnZW50cmllcycpO1xyXG4gIGlmKERFRkFVTFQpe1xyXG4gICAgJGRlZmluZShQUk9UTyArIEZPUkNFRCAqIEJVR0dZX0lURVJBVE9SUywgTkFNRSwge1xyXG4gICAgICBlbnRyaWVzOiBlbnRyaWVzLFxyXG4gICAgICBrZXlzOiBJU19TRVQgPyB2YWx1ZXMgOiBjcmVhdGVJdGVyKEtFWSksXHJcbiAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gaXRlclJlc3VsdChkb25lLCB2YWx1ZSl7XHJcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XHJcbn1cclxuZnVuY3Rpb24gaXNJdGVyYWJsZShpdCl7XHJcbiAgdmFyIE8gICAgICA9IE9iamVjdChpdClcclxuICAgICwgU3ltYm9sID0gZ2xvYmFsW1NZTUJPTF1cclxuICAgICwgaGFzRXh0ID0gKFN5bWJvbCAmJiBTeW1ib2xbSVRFUkFUT1JdIHx8IEZGX0lURVJBVE9SKSBpbiBPO1xyXG4gIHJldHVybiBoYXNFeHQgfHwgU1lNQk9MX0lURVJBVE9SIGluIE8gfHwgaGFzKEl0ZXJhdG9ycywgY2xhc3NvZihPKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SXRlcmF0b3IoaXQpe1xyXG4gIHZhciBTeW1ib2wgID0gZ2xvYmFsW1NZTUJPTF1cclxuICAgICwgZXh0ICAgICA9IGl0W1N5bWJvbCAmJiBTeW1ib2xbSVRFUkFUT1JdIHx8IEZGX0lURVJBVE9SXVxyXG4gICAgLCBnZXRJdGVyID0gZXh0IHx8IGl0W1NZTUJPTF9JVEVSQVRPUl0gfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcclxuICByZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpO1xyXG59XHJcbmZ1bmN0aW9uIHN0ZXBDYWxsKGZuLCB2YWx1ZSwgZW50cmllcyl7XHJcbiAgcmV0dXJuIGVudHJpZXMgPyBpbnZva2UoZm4sIHZhbHVlKSA6IGZuKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKGZuKXtcclxuICB2YXIgZGFuZ2VyID0gdHJ1ZTtcclxuICB2YXIgTyA9IHtcclxuICAgIG5leHQ6IGZ1bmN0aW9uKCl7IHRocm93IDEgfSxcclxuICAgICdyZXR1cm4nOiBmdW5jdGlvbigpeyBkYW5nZXIgPSBmYWxzZSB9XHJcbiAgfTtcclxuICBPW1NZTUJPTF9JVEVSQVRPUl0gPSByZXR1cm5UaGlzO1xyXG4gIHRyeSB7XHJcbiAgICBmbihPKTtcclxuICB9IGNhdGNoKGUpe31cclxuICByZXR1cm4gZGFuZ2VyO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlSXRlcmF0b3IoaXRlcmF0b3Ipe1xyXG4gIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XHJcbiAgaWYocmV0ICE9PSB1bmRlZmluZWQpcmV0LmNhbGwoaXRlcmF0b3IpO1xyXG59XHJcbmZ1bmN0aW9uIHNhZmVJdGVyQ2xvc2UoZXhlYywgaXRlcmF0b3Ipe1xyXG4gIHRyeSB7XHJcbiAgICBleGVjKGl0ZXJhdG9yKTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgY2xvc2VJdGVyYXRvcihpdGVyYXRvcik7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBmb3JPZihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xyXG4gIHNhZmVJdGVyQ2xvc2UoZnVuY3Rpb24oaXRlcmF0b3Ipe1xyXG4gICAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcclxuICAgICAgLCBzdGVwO1xyXG4gICAgd2hpbGUoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKWlmKHN0ZXBDYWxsKGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpID09PSBmYWxzZSl7XHJcbiAgICAgIHJldHVybiBjbG9zZUl0ZXJhdG9yKGl0ZXJhdG9yKTtcclxuICAgIH1cclxuICB9LCBnZXRJdGVyYXRvcihpdGVyYWJsZSkpO1xyXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5zeW1ib2wgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cclxuIWZ1bmN0aW9uKFRBRywgU3ltYm9sUmVnaXN0cnksIEFsbFN5bWJvbHMsIHNldHRlcil7XHJcbiAgLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXHJcbiAgaWYoIWlzTmF0aXZlKFN5bWJvbCkpe1xyXG4gICAgU3ltYm9sID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pe1xyXG4gICAgICBhc3NlcnQoISh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSwgU1lNQk9MICsgJyBpcyBub3QgYSAnICsgQ09OU1RSVUNUT1IpO1xyXG4gICAgICB2YXIgdGFnID0gdWlkKGRlc2NyaXB0aW9uKVxyXG4gICAgICAgICwgc3ltID0gc2V0KGNyZWF0ZShTeW1ib2xbUFJPVE9UWVBFXSksIFRBRywgdGFnKTtcclxuICAgICAgQWxsU3ltYm9sc1t0YWddID0gc3ltO1xyXG4gICAgICBERVNDICYmIHNldHRlciAmJiBkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90bywgdGFnLCB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgaGlkZGVuKHRoaXMsIHRhZywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzeW07XHJcbiAgICB9XHJcbiAgICBoaWRkZW4oU3ltYm9sW1BST1RPVFlQRV0sIFRPX1NUUklORywgZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIHRoaXNbVEFHXTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAkZGVmaW5lKEdMT0JBTCArIFdSQVAsIHtTeW1ib2w6IFN5bWJvbH0pO1xyXG4gIFxyXG4gIHZhciBzeW1ib2xTdGF0aWNzID0ge1xyXG4gICAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXHJcbiAgICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxyXG4gICAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxyXG4gICAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9IFN5bWJvbChrZXkpO1xyXG4gICAgfSxcclxuICAgIC8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxyXG4gICAgaXRlcmF0b3I6IFNZTUJPTF9JVEVSQVRPUiB8fCBnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpLFxyXG4gICAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXHJcbiAgICBrZXlGb3I6IHBhcnQuY2FsbChrZXlPZiwgU3ltYm9sUmVnaXN0cnkpLFxyXG4gICAgLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXHJcbiAgICBzcGVjaWVzOiBTWU1CT0xfU1BFQ0lFUyxcclxuICAgIC8vIDE5LjQuMi4xMyBTeW1ib2wudG9TdHJpbmdUYWdcclxuICAgIHRvU3RyaW5nVGFnOiBTWU1CT0xfVEFHID0gZ2V0V2VsbEtub3duU3ltYm9sKFRPX1NUUklOR19UQUcsIHRydWUpLFxyXG4gICAgLy8gMTkuNC4yLjE0IFN5bWJvbC51bnNjb3BhYmxlc1xyXG4gICAgdW5zY29wYWJsZXM6IFNZTUJPTF9VTlNDT1BBQkxFUyxcclxuICAgIHB1cmU6IHNhZmVTeW1ib2wsXHJcbiAgICBzZXQ6IHNldCxcclxuICAgIHVzZVNldHRlcjogZnVuY3Rpb24oKXtzZXR0ZXIgPSB0cnVlfSxcclxuICAgIHVzZVNpbXBsZTogZnVuY3Rpb24oKXtzZXR0ZXIgPSBmYWxzZX1cclxuICB9O1xyXG4gIC8vIDE5LjQuMi4yIFN5bWJvbC5oYXNJbnN0YW5jZVxyXG4gIC8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcclxuICAvLyAxOS40LjIuNiBTeW1ib2wubWF0Y2hcclxuICAvLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxyXG4gIC8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcclxuICAvLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XHJcbiAgLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxyXG4gIGZvckVhY2guY2FsbChhcnJheSgnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwbGl0LHRvUHJpbWl0aXZlJyksXHJcbiAgICBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHN5bWJvbFN0YXRpY3NbaXRdID0gZ2V0V2VsbEtub3duU3ltYm9sKGl0KTtcclxuICAgIH1cclxuICApO1xyXG4gICRkZWZpbmUoU1RBVElDLCBTWU1CT0wsIHN5bWJvbFN0YXRpY3MpO1xyXG4gIFxyXG4gIHNldFRvU3RyaW5nVGFnKFN5bWJvbCwgU1lNQk9MKTtcclxuICBcclxuICAkZGVmaW5lKFNUQVRJQyArIEZPUkNFRCAqICFpc05hdGl2ZShTeW1ib2wpLCBPQkpFQ1QsIHtcclxuICAgIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbiAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHZhciBuYW1lcyA9IGdldE5hbWVzKHRvT2JqZWN0KGl0KSksIHJlc3VsdCA9IFtdLCBrZXksIGkgPSAwO1xyXG4gICAgICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcclxuICAgIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24oaXQpe1xyXG4gICAgICB2YXIgbmFtZXMgPSBnZXROYW1lcyh0b09iamVjdChpdCkpLCByZXN1bHQgPSBbXSwga2V5LCBpID0gMDtcclxuICAgICAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSloYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAvLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXHJcbiAgc2V0VG9TdHJpbmdUYWcoTWF0aCwgTUFUSCwgdHJ1ZSk7XHJcbiAgLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cclxuICBzZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcclxufShzYWZlU3ltYm9sKCd0YWcnKSwge30sIHt9LCB0cnVlKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lm9iamVjdC5zdGF0aWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgdmFyIG9iamVjdFN0YXRpYyA9IHtcclxuICAgIC8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXHJcbiAgICBhc3NpZ246IGFzc2lnbixcclxuICAgIC8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXHJcbiAgICBpczogZnVuY3Rpb24oeCwgeSl7XHJcbiAgICAgIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcclxuICAvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29ya3Mgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXHJcbiAgJ19fcHJvdG9fXycgaW4gT2JqZWN0UHJvdG8gJiYgZnVuY3Rpb24oYnVnZ3ksIHNldCl7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXQgPSBjdHgoY2FsbCwgZ2V0T3duRGVzY3JpcHRvcihPYmplY3RQcm90bywgJ19fcHJvdG9fXycpLnNldCwgMik7XHJcbiAgICAgIHNldCh7fSwgQXJyYXlQcm90byk7XHJcbiAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWUgfVxyXG4gICAgb2JqZWN0U3RhdGljLnNldFByb3RvdHlwZU9mID0gc2V0UHJvdG90eXBlT2YgPSBzZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPLCBwcm90byl7XHJcbiAgICAgIGFzc2VydE9iamVjdChPKTtcclxuICAgICAgYXNzZXJ0KHByb3RvID09PSBudWxsIHx8IGlzT2JqZWN0KHByb3RvKSwgcHJvdG8sIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcclxuICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcclxuICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xyXG4gICAgICByZXR1cm4gTztcclxuICAgIH1cclxuICB9KCk7XHJcbiAgJGRlZmluZShTVEFUSUMsIE9CSkVDVCwgb2JqZWN0U3RhdGljKTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICAvLyBPYmplY3Qgc3RhdGljIG1ldGhvZHMgYWNjZXB0IHByaW1pdGl2ZXNcclxuICBmdW5jdGlvbiB3cmFwT2JqZWN0TWV0aG9kKGtleSwgTU9ERSl7XHJcbiAgICB2YXIgZm4gID0gT2JqZWN0W2tleV1cclxuICAgICAgLCBleHAgPSBjb3JlW09CSkVDVF1ba2V5XVxyXG4gICAgICAsIGYgICA9IDBcclxuICAgICAgLCBvICAgPSB7fTtcclxuICAgIGlmKCFleHAgfHwgaXNOYXRpdmUoZXhwKSl7XHJcbiAgICAgIG9ba2V5XSA9IE1PREUgPT0gMSA/IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XHJcbiAgICAgIH0gOiBNT0RFID09IDIgPyBmdW5jdGlvbihpdCl7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XHJcbiAgICAgIH0gOiBNT0RFID09IDMgPyBmdW5jdGlvbihpdCl7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGZhbHNlO1xyXG4gICAgICB9IDogTU9ERSA9PSA0ID8gZnVuY3Rpb24oaXQsIGtleSl7XHJcbiAgICAgICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSwga2V5KTtcclxuICAgICAgfSA6IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpKTtcclxuICAgICAgfTtcclxuICAgICAgdHJ5IHsgZm4oRE9UKSB9XHJcbiAgICAgIGNhdGNoKGUpeyBmID0gMSB9XHJcbiAgICAgICRkZWZpbmUoU1RBVElDICsgRk9SQ0VEICogZiwgT0JKRUNULCBvKTtcclxuICAgIH1cclxuICB9XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnZnJlZXplJywgMSk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnc2VhbCcsIDEpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ3ByZXZlbnRFeHRlbnNpb25zJywgMSk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnaXNGcm96ZW4nLCAyKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdpc1NlYWxlZCcsIDIpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2lzRXh0ZW5zaWJsZScsIDMpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIDQpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2dldFByb3RvdHlwZU9mJyk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgna2V5cycpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2dldE93blByb3BlcnR5TmFtZXMnKTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYubnVtYmVyLnN0YXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oaXNJbnRlZ2VyKXtcclxuICAkZGVmaW5lKFNUQVRJQywgTlVNQkVSLCB7XHJcbiAgICAvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxyXG4gICAgRVBTSUxPTjogcG93KDIsIC01MiksXHJcbiAgICAvLyAyMC4xLjIuMiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKVxyXG4gICAgaXNGaW5pdGU6IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShpdCk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXHJcbiAgICBpc0ludGVnZXI6IGlzSW50ZWdlcixcclxuICAgIC8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXHJcbiAgICBpc05hTjogc2FtZU5hTixcclxuICAgIC8vIDIwLjEuMi41IE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcilcclxuICAgIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uKG51bWJlcil7XHJcbiAgICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXHJcbiAgICBNQVhfU0FGRV9JTlRFR0VSOiBNQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXHJcbiAgICBNSU5fU0FGRV9JTlRFR0VSOiAtTUFYX1NBRkVfSU5URUdFUixcclxuICAgIC8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXHJcbiAgICBwYXJzZUZsb2F0OiBwYXJzZUZsb2F0LFxyXG4gICAgLy8gMjAuMS4yLjEzIE51bWJlci5wYXJzZUludChzdHJpbmcsIHJhZGl4KVxyXG4gICAgcGFyc2VJbnQ6IHBhcnNlSW50XHJcbiAgfSk7XHJcbi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxyXG59KE51bWJlci5pc0ludGVnZXIgfHwgZnVuY3Rpb24oaXQpe1xyXG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xyXG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lm1hdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRUNNQVNjcmlwdCA2IHNoaW1cclxuIWZ1bmN0aW9uKCl7XHJcbiAgLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxyXG4gIHZhciBFICAgID0gTWF0aC5FXHJcbiAgICAsIGV4cCAgPSBNYXRoLmV4cFxyXG4gICAgLCBsb2cgID0gTWF0aC5sb2dcclxuICAgICwgc3FydCA9IE1hdGguc3FydFxyXG4gICAgLCBzaWduID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uKHgpe1xyXG4gICAgICAgIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcclxuICAgICAgfTtcclxuICBcclxuICAvLyAyMC4yLjIuNSBNYXRoLmFzaW5oKHgpXHJcbiAgZnVuY3Rpb24gYXNpbmgoeCl7XHJcbiAgICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IGxvZyh4ICsgc3FydCh4ICogeCArIDEpKTtcclxuICB9XHJcbiAgLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcclxuICBmdW5jdGlvbiBleHBtMSh4KXtcclxuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBleHAoeCkgLSAxO1xyXG4gIH1cclxuICAgIFxyXG4gICRkZWZpbmUoU1RBVElDLCBNQVRILCB7XHJcbiAgICAvLyAyMC4yLjIuMyBNYXRoLmFjb3NoKHgpXHJcbiAgICBhY29zaDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiBpc0Zpbml0ZSh4KSA/IGxvZyh4IC8gRSArIHNxcnQoeCArIDEpICogc3FydCh4IC0gMSkgLyBFKSArIDEgOiB4O1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcclxuICAgIGFzaW5oOiBhc2luaCxcclxuICAgIC8vIDIwLjIuMi43IE1hdGguYXRhbmgoeClcclxuICAgIGF0YW5oOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogbG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXHJcbiAgICBjYnJ0OiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIHBvdyhhYnMoeCksIDEgLyAzKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxyXG4gICAgY2x6MzI6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMyIC0geFtUT19TVFJJTkddKDIpLmxlbmd0aCA6IDMyO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xMiBNYXRoLmNvc2goeClcclxuICAgIGNvc2g6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXHJcbiAgICBleHBtMTogZXhwbTEsXHJcbiAgICAvLyAyMC4yLjIuMTYgTWF0aC5mcm91bmQoeClcclxuICAgIC8vIFRPRE86IGZhbGxiYWNrIGZvciBJRTktXHJcbiAgICBmcm91bmQ6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbeF0pWzBdO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxyXG4gICAgaHlwb3Q6IGZ1bmN0aW9uKHZhbHVlMSwgdmFsdWUyKXtcclxuICAgICAgdmFyIHN1bSAgPSAwXHJcbiAgICAgICAgLCBsZW4xID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICwgbGVuMiA9IGxlbjFcclxuICAgICAgICAsIGFyZ3MgPSBBcnJheShsZW4xKVxyXG4gICAgICAgICwgbGFyZyA9IC1JbmZpbml0eVxyXG4gICAgICAgICwgYXJnO1xyXG4gICAgICB3aGlsZShsZW4xLS0pe1xyXG4gICAgICAgIGFyZyA9IGFyZ3NbbGVuMV0gPSArYXJndW1lbnRzW2xlbjFdO1xyXG4gICAgICAgIGlmKGFyZyA9PSBJbmZpbml0eSB8fCBhcmcgPT0gLUluZmluaXR5KXJldHVybiBJbmZpbml0eTtcclxuICAgICAgICBpZihhcmcgPiBsYXJnKWxhcmcgPSBhcmc7XHJcbiAgICAgIH1cclxuICAgICAgbGFyZyA9IGFyZyB8fCAxO1xyXG4gICAgICB3aGlsZShsZW4yLS0pc3VtICs9IHBvdyhhcmdzW2xlbjJdIC8gbGFyZywgMik7XHJcbiAgICAgIHJldHVybiBsYXJnICogc3FydChzdW0pO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcclxuICAgIGltdWw6IGZ1bmN0aW9uKHgsIHkpe1xyXG4gICAgICB2YXIgVUludDE2ID0gMHhmZmZmXHJcbiAgICAgICAgLCB4biA9ICt4XHJcbiAgICAgICAgLCB5biA9ICt5XHJcbiAgICAgICAgLCB4bCA9IFVJbnQxNiAmIHhuXHJcbiAgICAgICAgLCB5bCA9IFVJbnQxNiAmIHluO1xyXG4gICAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJbnQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJbnQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXHJcbiAgICBsb2cxcDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IGxvZygxICsgeCk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjIxIE1hdGgubG9nMTAoeClcclxuICAgIGxvZzEwOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIGxvZyh4KSAvIE1hdGguTE4xMDtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXHJcbiAgICBsb2cyOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIGxvZyh4KSAvIE1hdGguTE4yO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcclxuICAgIHNpZ246IHNpZ24sXHJcbiAgICAvLyAyMC4yLjIuMzAgTWF0aC5zaW5oKHgpXHJcbiAgICBzaW5oOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIChhYnMoeCA9ICt4KSA8IDEpID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDIgOiAoZXhwKHggLSAxKSAtIGV4cCgteCAtIDEpKSAqIChFIC8gMik7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxyXG4gICAgdGFuaDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KVxyXG4gICAgICAgICwgYiA9IGV4cG0xKC14KTtcclxuICAgICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxyXG4gICAgdHJ1bmM6IHRydW5jXHJcbiAgfSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LnN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKGZyb21DaGFyQ29kZSl7XHJcbiAgZnVuY3Rpb24gYXNzZXJ0Tm90UmVnRXhwKGl0KXtcclxuICAgIGlmKGNvZihpdCkgPT0gUkVHRVhQKXRocm93IFR5cGVFcnJvcigpO1xyXG4gIH1cclxuICBcclxuICAkZGVmaW5lKFNUQVRJQywgU1RSSU5HLCB7XHJcbiAgICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxyXG4gICAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHZhciByZXMgPSBbXVxyXG4gICAgICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICwgaSAgID0gMFxyXG4gICAgICAgICwgY29kZVxyXG4gICAgICB3aGlsZShsZW4gPiBpKXtcclxuICAgICAgICBjb2RlID0gK2FyZ3VtZW50c1tpKytdO1xyXG4gICAgICAgIGlmKHRvSW5kZXgoY29kZSwgMHgxMGZmZmYpICE9PSBjb2RlKXRocm93IFJhbmdlRXJyb3IoY29kZSArICcgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludCcpO1xyXG4gICAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXHJcbiAgICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxyXG4gICAgICAgICAgOiBmcm9tQ2hhckNvZGUoKChjb2RlIC09IDB4MTAwMDApID4+IDEwKSArIDB4ZDgwMCwgY29kZSAlIDB4NDAwICsgMHhkYzAwKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxyXG4gICAgcmF3OiBmdW5jdGlvbihjYWxsU2l0ZSl7XHJcbiAgICAgIHZhciByYXcgPSB0b09iamVjdChjYWxsU2l0ZS5yYXcpXHJcbiAgICAgICAgLCBsZW4gPSB0b0xlbmd0aChyYXcubGVuZ3RoKVxyXG4gICAgICAgICwgc2xuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICwgcmVzID0gW11cclxuICAgICAgICAsIGkgICA9IDA7XHJcbiAgICAgIHdoaWxlKGxlbiA+IGkpe1xyXG4gICAgICAgIHJlcy5wdXNoKFN0cmluZyhyYXdbaSsrXSkpO1xyXG4gICAgICAgIGlmKGkgPCBzbG4pcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgICB9IHJldHVybiByZXMuam9pbignJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgJGRlZmluZShQUk9UTywgU1RSSU5HLCB7XHJcbiAgICAvLyAyMS4xLjMuMyBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0KHBvcylcclxuICAgIGNvZGVQb2ludEF0OiBjcmVhdGVQb2ludEF0KGZhbHNlKSxcclxuICAgIC8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcclxuICAgIGVuZHNXaXRoOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcgLyosIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLyl7XHJcbiAgICAgIGFzc2VydE5vdFJlZ0V4cChzZWFyY2hTdHJpbmcpO1xyXG4gICAgICB2YXIgdGhhdCA9IFN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAgICwgZW5kUG9zaXRpb24gPSBhcmd1bWVudHNbMV1cclxuICAgICAgICAsIGxlbiA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKVxyXG4gICAgICAgICwgZW5kID0gZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGxlbiA6IG1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbik7XHJcbiAgICAgIHNlYXJjaFN0cmluZyArPSAnJztcclxuICAgICAgcmV0dXJuIHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoU3RyaW5nLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gICAgfSxcclxuICAgIC8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXHJcbiAgICBpbmNsdWRlczogZnVuY3Rpb24oc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xyXG4gICAgICBhc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTtcclxuICAgICAgcmV0dXJuICEhflN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKS5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzWzFdKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMS4xLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQoY291bnQpXHJcbiAgICByZXBlYXQ6IGZ1bmN0aW9uKGNvdW50KXtcclxuICAgICAgdmFyIHN0ciA9IFN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAgICwgcmVzID0gJydcclxuICAgICAgICAsIG4gICA9IHRvSW50ZWdlcihjb3VudCk7XHJcbiAgICAgIGlmKDAgPiBuIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xyXG4gICAgICBmb3IoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlpZihuICYgMSlyZXMgKz0gc3RyO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSxcclxuICAgIC8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXHJcbiAgICBzdGFydHNXaXRoOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XHJcbiAgICAgIGFzc2VydE5vdFJlZ0V4cChzZWFyY2hTdHJpbmcpO1xyXG4gICAgICB2YXIgdGhhdCAgPSBTdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgICAsIGluZGV4ID0gdG9MZW5ndGgobWluKGFyZ3VtZW50c1sxXSwgdGhhdC5sZW5ndGgpKTtcclxuICAgICAgc2VhcmNoU3RyaW5nICs9ICcnO1xyXG4gICAgICByZXR1cm4gdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2hTdHJpbmcubGVuZ3RoKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KFN0cmluZy5mcm9tQ2hhckNvZGUpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuYXJyYXkuc3RhdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICAkZGVmaW5lKFNUQVRJQyArIEZPUkNFRCAqIGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoQXJyYXkuZnJvbSksIEFSUkFZLCB7XHJcbiAgICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICBmcm9tOiBmdW5jdGlvbihhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XHJcbiAgICAgIHZhciBPICAgICAgID0gT2JqZWN0KGFzc2VydERlZmluZWQoYXJyYXlMaWtlKSlcclxuICAgICAgICAsIG1hcGZuICAgPSBhcmd1bWVudHNbMV1cclxuICAgICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgLCBmICAgICAgID0gbWFwcGluZyA/IGN0eChtYXBmbiwgYXJndW1lbnRzWzJdLCAyKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICwgaW5kZXggICA9IDBcclxuICAgICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwO1xyXG4gICAgICBpZihpc0l0ZXJhYmxlKE8pKXtcclxuICAgICAgICByZXN1bHQgPSBuZXcgKGdlbmVyaWModGhpcywgQXJyYXkpKTtcclxuICAgICAgICBzYWZlSXRlckNsb3NlKGZ1bmN0aW9uKGl0ZXJhdG9yKXtcclxuICAgICAgICAgIGZvcig7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gZihzdGVwLnZhbHVlLCBpbmRleCkgOiBzdGVwLnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGdldEl0ZXJhdG9yKE8pKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSBuZXcgKGdlbmVyaWModGhpcywgQXJyYXkpKShsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCkpO1xyXG4gICAgICAgIGZvcig7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcclxuICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gZihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAkZGVmaW5lKFNUQVRJQywgQVJSQVksIHtcclxuICAgIC8vIDIyLjEuMi4zIEFycmF5Lm9mKCAuLi5pdGVtcylcclxuICAgIG9mOiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgICAgdmFyIGluZGV4ICA9IDBcclxuICAgICAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgICAsIHJlc3VsdCA9IG5ldyAoZ2VuZXJpYyh0aGlzLCBBcnJheSkpKGxlbmd0aCk7XHJcbiAgICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XHJcbiAgICAgIHJlc3VsdC5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgc2V0U3BlY2llcyhBcnJheSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LmFycmF5LnByb3RvdHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgJGRlZmluZShQUk9UTywgQVJSQVksIHtcclxuICAgIC8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxyXG4gICAgY29weVdpdGhpbjogZnVuY3Rpb24odGFyZ2V0IC8qID0gMCAqLywgc3RhcnQgLyogPSAwLCBlbmQgPSBAbGVuZ3RoICovKXtcclxuICAgICAgdmFyIE8gICAgID0gT2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCBsZW4gICA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxyXG4gICAgICAgICwgZnJvbSAgPSB0b0luZGV4KHN0YXJ0LCBsZW4pXHJcbiAgICAgICAgLCBlbmQgICA9IGFyZ3VtZW50c1syXVxyXG4gICAgICAgICwgZmluICAgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pXHJcbiAgICAgICAgLCBjb3VudCA9IG1pbihmaW4gLSBmcm9tLCBsZW4gLSB0bylcclxuICAgICAgICAsIGluYyAgID0gMTtcclxuICAgICAgaWYoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KXtcclxuICAgICAgICBpbmMgID0gLTE7XHJcbiAgICAgICAgZnJvbSA9IGZyb20gKyBjb3VudCAtIDE7XHJcbiAgICAgICAgdG8gICA9IHRvICsgY291bnQgLSAxO1xyXG4gICAgICB9XHJcbiAgICAgIHdoaWxlKGNvdW50LS0gPiAwKXtcclxuICAgICAgICBpZihmcm9tIGluIE8pT1t0b10gPSBPW2Zyb21dO1xyXG4gICAgICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xyXG4gICAgICAgIHRvICs9IGluYztcclxuICAgICAgICBmcm9tICs9IGluYztcclxuICAgICAgfSByZXR1cm4gTztcclxuICAgIH0sXHJcbiAgICAvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcclxuICAgIGZpbGw6IGZ1bmN0aW9uKHZhbHVlIC8qLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgICB2YXIgTyAgICAgID0gT2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgICAsIGluZGV4ICA9IHRvSW5kZXgoYXJndW1lbnRzWzFdLCBsZW5ndGgpXHJcbiAgICAgICAgLCBlbmQgICAgPSBhcmd1bWVudHNbMl1cclxuICAgICAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XHJcbiAgICAgIHdoaWxlKGVuZFBvcyA+IGluZGV4KU9baW5kZXgrK10gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIE87XHJcbiAgICB9LFxyXG4gICAgLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgZmluZDogY3JlYXRlQXJyYXlNZXRob2QoNSksXHJcbiAgICAvLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgIGZpbmRJbmRleDogY3JlYXRlQXJyYXlNZXRob2QoNilcclxuICB9KTtcclxuICBcclxuICBpZihmcmFtZXdvcmspe1xyXG4gICAgLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxyXG4gICAgZm9yRWFjaC5jYWxsKGFycmF5KCdmaW5kLGZpbmRJbmRleCxmaWxsLGNvcHlXaXRoaW4sZW50cmllcyxrZXlzLHZhbHVlcycpLCBmdW5jdGlvbihpdCl7XHJcbiAgICAgIEFycmF5VW5zY29wYWJsZXNbaXRdID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgU1lNQk9MX1VOU0NPUEFCTEVTIGluIEFycmF5UHJvdG8gfHwgaGlkZGVuKEFycmF5UHJvdG8sIFNZTUJPTF9VTlNDT1BBQkxFUywgQXJyYXlVbnNjb3BhYmxlcyk7XHJcbiAgfVxyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5pdGVyYXRvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihhdCl7XHJcbiAgLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxyXG4gIC8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXHJcbiAgLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxyXG4gIC8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxyXG4gIGRlZmluZVN0ZEl0ZXJhdG9ycyhBcnJheSwgQVJSQVksIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcclxuICAgIHNldCh0aGlzLCBJVEVSLCB7bzogdG9PYmplY3QoaXRlcmF0ZWQpLCBpOiAwLCBrOiBraW5kfSk7XHJcbiAgLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXHJcbiAgfSwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICAgLCBPICAgICA9IGl0ZXIub1xyXG4gICAgICAsIGtpbmQgID0gaXRlci5rXHJcbiAgICAgICwgaW5kZXggPSBpdGVyLmkrKztcclxuICAgIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcclxuICAgICAgaXRlci5vID0gdW5kZWZpbmVkO1xyXG4gICAgICByZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgIH1cclxuICAgIGlmKGtpbmQgPT0gS0VZKSAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgaW5kZXgpO1xyXG4gICAgaWYoa2luZCA9PSBWQUxVRSlyZXR1cm4gaXRlclJlc3VsdCgwLCBPW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDAsIFtpbmRleCwgT1tpbmRleF1dKTtcclxuICB9LCBWQUxVRSk7XHJcbiAgXHJcbiAgLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxyXG4gIEl0ZXJhdG9yc1tBUkdVTUVOVFNdID0gSXRlcmF0b3JzW0FSUkFZXTtcclxuICBcclxuICAvLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXHJcbiAgZGVmaW5lU3RkSXRlcmF0b3JzKFN0cmluZywgU1RSSU5HLCBmdW5jdGlvbihpdGVyYXRlZCl7XHJcbiAgICBzZXQodGhpcywgSVRFUiwge286IFN0cmluZyhpdGVyYXRlZCksIGk6IDB9KTtcclxuICAvLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXHJcbiAgfSwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICAgLCBPICAgICA9IGl0ZXIub1xyXG4gICAgICAsIGluZGV4ID0gaXRlci5pXHJcbiAgICAgICwgcG9pbnQ7XHJcbiAgICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgIHBvaW50ID0gYXQuY2FsbChPLCBpbmRleCk7XHJcbiAgICBpdGVyLmkgKz0gcG9pbnQubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgcG9pbnQpO1xyXG4gIH0pO1xyXG59KGNyZWF0ZVBvaW50QXQodHJ1ZSkpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiB3ZWIuaW1tZWRpYXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBzZXRJbW1lZGlhdGUgc2hpbVxyXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBlbHNlOlxyXG5pc0Z1bmN0aW9uKHNldEltbWVkaWF0ZSkgJiYgaXNGdW5jdGlvbihjbGVhckltbWVkaWF0ZSkgfHwgZnVuY3Rpb24oT05SRUFEWVNUQVRFQ0hBTkdFKXtcclxuICB2YXIgcG9zdE1lc3NhZ2UgICAgICA9IGdsb2JhbC5wb3N0TWVzc2FnZVxyXG4gICAgLCBhZGRFdmVudExpc3RlbmVyID0gZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXJcclxuICAgICwgTWVzc2FnZUNoYW5uZWwgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxyXG4gICAgLCBjb3VudGVyICAgICAgICAgID0gMFxyXG4gICAgLCBxdWV1ZSAgICAgICAgICAgID0ge31cclxuICAgICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XHJcbiAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oZm4pe1xyXG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XHJcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xyXG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGludm9rZShpc0Z1bmN0aW9uKGZuKSA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcclxuICAgIH1cclxuICAgIGRlZmVyKGNvdW50ZXIpO1xyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfVxyXG4gIGNsZWFySW1tZWRpYXRlID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcnVuKGlkKXtcclxuICAgIGlmKGhhcyhxdWV1ZSwgaWQpKXtcclxuICAgICAgdmFyIGZuID0gcXVldWVbaWRdO1xyXG4gICAgICBkZWxldGUgcXVldWVbaWRdO1xyXG4gICAgICBmbigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBsaXN0bmVyKGV2ZW50KXtcclxuICAgIHJ1bihldmVudC5kYXRhKTtcclxuICB9XHJcbiAgLy8gTm9kZS5qcyAwLjgtXHJcbiAgaWYoTk9ERSl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgbmV4dFRpY2socGFydC5jYWxsKHJ1biwgaWQpKTtcclxuICAgIH1cclxuICAvLyBNb2Rlcm4gYnJvd3NlcnMsIHNraXAgaW1wbGVtZW50YXRpb24gZm9yIFdlYldvcmtlcnNcclxuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyBvYmplY3RcclxuICB9IGVsc2UgaWYoYWRkRXZlbnRMaXN0ZW5lciAmJiBpc0Z1bmN0aW9uKHBvc3RNZXNzYWdlKSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIHBvc3RNZXNzYWdlKGlkLCAnKicpO1xyXG4gICAgfVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RuZXIsIGZhbHNlKTtcclxuICAvLyBXZWJXb3JrZXJzXHJcbiAgfSBlbHNlIGlmKGlzRnVuY3Rpb24oTWVzc2FnZUNoYW5uZWwpKXtcclxuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XHJcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcclxuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdG5lcjtcclxuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xyXG4gIC8vIElFOC1cclxuICB9IGVsc2UgaWYoZG9jdW1lbnQgJiYgT05SRUFEWVNUQVRFQ0hBTkdFIGluIGRvY3VtZW50W0NSRUFURV9FTEVNRU5UXSgnc2NyaXB0Jykpe1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnRbQ1JFQVRFX0VMRU1FTlRdKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICBydW4oaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcclxuICB9IGVsc2Uge1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIHNldFRpbWVvdXQocnVuLCAwLCBpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KCdvbnJlYWR5c3RhdGVjaGFuZ2UnKTtcclxuJGRlZmluZShHTE9CQUwgKyBCSU5ELCB7XHJcbiAgc2V0SW1tZWRpYXRlOiAgIHNldEltbWVkaWF0ZSxcclxuICBjbGVhckltbWVkaWF0ZTogY2xlYXJJbW1lZGlhdGVcclxufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5wcm9taXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEVTNiBwcm9taXNlcyBzaGltXHJcbi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRpZnkvbmF0aXZlLXByb21pc2Utb25seS9cclxuIWZ1bmN0aW9uKFByb21pc2UsIHRlc3Qpe1xyXG4gIGlzRnVuY3Rpb24oUHJvbWlzZSkgJiYgaXNGdW5jdGlvbihQcm9taXNlLnJlc29sdmUpXHJcbiAgJiYgUHJvbWlzZS5yZXNvbHZlKHRlc3QgPSBuZXcgUHJvbWlzZShmdW5jdGlvbigpe30pKSA9PSB0ZXN0XHJcbiAgfHwgZnVuY3Rpb24oYXNhcCwgUkVDT1JEKXtcclxuICAgIGZ1bmN0aW9uIGlzVGhlbmFibGUoaXQpe1xyXG4gICAgICB2YXIgdGhlbjtcclxuICAgICAgaWYoaXNPYmplY3QoaXQpKXRoZW4gPSBpdC50aGVuO1xyXG4gICAgICByZXR1cm4gaXNGdW5jdGlvbih0aGVuKSA/IHRoZW4gOiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocHJvbWlzZSl7XHJcbiAgICAgIHZhciByZWNvcmQgPSBwcm9taXNlW1JFQ09SRF1cclxuICAgICAgICAsIGNoYWluICA9IHJlY29yZC5jXHJcbiAgICAgICAgLCBpICAgICAgPSAwXHJcbiAgICAgICAgLCByZWFjdDtcclxuICAgICAgaWYocmVjb3JkLmgpcmV0dXJuIHRydWU7XHJcbiAgICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xyXG4gICAgICAgIHJlYWN0ID0gY2hhaW5baSsrXTtcclxuICAgICAgICBpZihyZWFjdC5mYWlsIHx8IGhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocmVhY3QuUCkpcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG5vdGlmeShyZWNvcmQsIHJlamVjdCl7XHJcbiAgICAgIHZhciBjaGFpbiA9IHJlY29yZC5jO1xyXG4gICAgICBpZihyZWplY3QgfHwgY2hhaW4ubGVuZ3RoKWFzYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcHJvbWlzZSA9IHJlY29yZC5wXHJcbiAgICAgICAgICAsIHZhbHVlICAgPSByZWNvcmQudlxyXG4gICAgICAgICAgLCBvayAgICAgID0gcmVjb3JkLnMgPT0gMVxyXG4gICAgICAgICAgLCBpICAgICAgID0gMDtcclxuICAgICAgICBpZihyZWplY3QgJiYgIWhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocHJvbWlzZSkpe1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZighaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKSl7XHJcbiAgICAgICAgICAgICAgaWYoTk9ERSl7XHJcbiAgICAgICAgICAgICAgICBpZighcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSkpe1xyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IG5vZGUuanMgYmVoYXZpb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNGdW5jdGlvbihjb25zb2xlLmVycm9yKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAxZTMpO1xyXG4gICAgICAgIH0gZWxzZSB3aGlsZShjaGFpbi5sZW5ndGggPiBpKSFmdW5jdGlvbihyZWFjdCl7XHJcbiAgICAgICAgICB2YXIgY2IgPSBvayA/IHJlYWN0Lm9rIDogcmVhY3QuZmFpbFxyXG4gICAgICAgICAgICAsIHJldCwgdGhlbjtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKGNiKXtcclxuICAgICAgICAgICAgICBpZighb2spcmVjb3JkLmggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHJldCA9IGNiID09PSB0cnVlID8gdmFsdWUgOiBjYih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYocmV0ID09PSByZWFjdC5QKXtcclxuICAgICAgICAgICAgICAgIHJlYWN0LnJlaihUeXBlRXJyb3IoUFJPTUlTRSArICctY2hhaW4gY3ljbGUnKSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJldCkpe1xyXG4gICAgICAgICAgICAgICAgdGhlbi5jYWxsKHJldCwgcmVhY3QucmVzLCByZWFjdC5yZWopO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSByZWFjdC5yZXMocmV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHJlYWN0LnJlaih2YWx1ZSk7XHJcbiAgICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHJlYWN0LnJlaihlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0oY2hhaW5baSsrXSk7XHJcbiAgICAgICAgY2hhaW4ubGVuZ3RoID0gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKXtcclxuICAgICAgdmFyIHJlY29yZCA9IHRoaXNcclxuICAgICAgICAsIHRoZW4sIHdyYXBwZXI7XHJcbiAgICAgIGlmKHJlY29yZC5kKXJldHVybjtcclxuICAgICAgcmVjb3JkLmQgPSB0cnVlO1xyXG4gICAgICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XHJcbiAgICAgICAgICB3cmFwcGVyID0ge3I6IHJlY29yZCwgZDogZmFsc2V9OyAvLyB3cmFwXHJcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eChyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KHJlamVjdCwgd3JhcHBlciwgMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWNvcmQudiA9IHZhbHVlO1xyXG4gICAgICAgICAgcmVjb3JkLnMgPSAxO1xyXG4gICAgICAgICAgbm90aWZ5KHJlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVqZWN0LmNhbGwod3JhcHBlciB8fCB7cjogcmVjb3JkLCBkOiBmYWxzZX0sIGVycik7IC8vIHdyYXBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKXtcclxuICAgICAgdmFyIHJlY29yZCA9IHRoaXM7XHJcbiAgICAgIGlmKHJlY29yZC5kKXJldHVybjtcclxuICAgICAgcmVjb3JkLmQgPSB0cnVlO1xyXG4gICAgICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxyXG4gICAgICByZWNvcmQudiA9IHZhbHVlO1xyXG4gICAgICByZWNvcmQucyA9IDI7XHJcbiAgICAgIG5vdGlmeShyZWNvcmQsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3IoQyl7XHJcbiAgICAgIHZhciBTID0gYXNzZXJ0T2JqZWN0KEMpW1NZTUJPTF9TUEVDSUVTXTtcclxuICAgICAgcmV0dXJuIFMgIT0gdW5kZWZpbmVkID8gUyA6IEM7XHJcbiAgICB9XHJcbiAgICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxyXG4gICAgUHJvbWlzZSA9IGZ1bmN0aW9uKGV4ZWN1dG9yKXtcclxuICAgICAgYXNzZXJ0RnVuY3Rpb24oZXhlY3V0b3IpO1xyXG4gICAgICBhc3NlcnRJbnN0YW5jZSh0aGlzLCBQcm9taXNlLCBQUk9NSVNFKTtcclxuICAgICAgdmFyIHJlY29yZCA9IHtcclxuICAgICAgICBwOiB0aGlzLCAgICAgIC8vIHByb21pc2VcclxuICAgICAgICBjOiBbXSwgICAgICAgIC8vIGNoYWluXHJcbiAgICAgICAgczogMCwgICAgICAgICAvLyBzdGF0ZVxyXG4gICAgICAgIGQ6IGZhbHNlLCAgICAgLy8gZG9uZVxyXG4gICAgICAgIHY6IHVuZGVmaW5lZCwgLy8gdmFsdWVcclxuICAgICAgICBoOiBmYWxzZSAgICAgIC8vIGhhbmRsZWQgcmVqZWN0aW9uXHJcbiAgICAgIH07XHJcbiAgICAgIGhpZGRlbih0aGlzLCBSRUNPUkQsIHJlY29yZCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZXhlY3V0b3IoY3R4KHJlc29sdmUsIHJlY29yZCwgMSksIGN0eChyZWplY3QsIHJlY29yZCwgMSkpO1xyXG4gICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3NpZ25IaWRkZW4oUHJvbWlzZVtQUk9UT1RZUEVdLCB7XHJcbiAgICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXHJcbiAgICAgIHRoZW46IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcclxuICAgICAgICB2YXIgUyA9IGFzc2VydE9iamVjdChhc3NlcnRPYmplY3QodGhpcylbQ09OU1RSVUNUT1JdKVtTWU1CT0xfU1BFQ0lFU107XHJcbiAgICAgICAgdmFyIHJlYWN0ID0ge1xyXG4gICAgICAgICAgb2s6ICAgaXNGdW5jdGlvbihvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IHRydWUsXHJcbiAgICAgICAgICBmYWlsOiBpc0Z1bmN0aW9uKG9uUmVqZWN0ZWQpICA/IG9uUmVqZWN0ZWQgIDogZmFsc2VcclxuICAgICAgICB9ICwgUCA9IHJlYWN0LlAgPSBuZXcgKFMgIT0gdW5kZWZpbmVkID8gUyA6IFByb21pc2UpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICByZWFjdC5yZXMgPSBhc3NlcnRGdW5jdGlvbihyZXNvbHZlKTtcclxuICAgICAgICAgIHJlYWN0LnJlaiA9IGFzc2VydEZ1bmN0aW9uKHJlamVjdCk7XHJcbiAgICAgICAgfSksIHJlY29yZCA9IHRoaXNbUkVDT1JEXTtcclxuICAgICAgICByZWNvcmQuYy5wdXNoKHJlYWN0KTtcclxuICAgICAgICByZWNvcmQucyAmJiBub3RpZnkocmVjb3JkKTtcclxuICAgICAgICByZXR1cm4gUDtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcclxuICAgICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFzc2lnbkhpZGRlbihQcm9taXNlLCB7XHJcbiAgICAgIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxyXG4gICAgICBhbGw6IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICB2YXIgUHJvbWlzZSA9IGdldENvbnN0cnVjdG9yKHRoaXMpXHJcbiAgICAgICAgICAsIHZhbHVlcyAgPSBbXTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgcHVzaCwgdmFsdWVzKTtcclxuICAgICAgICAgIHZhciByZW1haW5pbmcgPSB2YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICwgcmVzdWx0cyAgID0gQXJyYXkocmVtYWluaW5nKTtcclxuICAgICAgICAgIGlmKHJlbWFpbmluZylmb3JFYWNoLmNhbGwodmFsdWVzLCBmdW5jdGlvbihwcm9taXNlLCBpbmRleCl7XHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUocmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVsc2UgcmVzb2x2ZShyZXN1bHRzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxyXG4gICAgICByYWNlOiBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICAgICAgdmFyIFByb21pc2UgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcclxuICAgICAgcmVqZWN0OiBmdW5jdGlvbihyKXtcclxuICAgICAgICByZXR1cm4gbmV3IChnZXRDb25zdHJ1Y3Rvcih0aGlzKSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgIHJlamVjdChyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXHJcbiAgICAgIHJlc29sdmU6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdCh4KSAmJiBSRUNPUkQgaW4geCAmJiBnZXRQcm90b3R5cGVPZih4KSA9PT0gdGhpc1tQUk9UT1RZUEVdXHJcbiAgICAgICAgICA/IHggOiBuZXcgKGdldENvbnN0cnVjdG9yKHRoaXMpKShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0obmV4dFRpY2sgfHwgc2V0SW1tZWRpYXRlLCBzYWZlU3ltYm9sKCdyZWNvcmQnKSk7XHJcbiAgc2V0VG9TdHJpbmdUYWcoUHJvbWlzZSwgUFJPTUlTRSk7XHJcbiAgc2V0U3BlY2llcyhQcm9taXNlKTtcclxuICAkZGVmaW5lKEdMT0JBTCArIEZPUkNFRCAqICFpc05hdGl2ZShQcm9taXNlKSwge1Byb21pc2U6IFByb21pc2V9KTtcclxufShnbG9iYWxbUFJPTUlTRV0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuY29sbGVjdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBFQ01BU2NyaXB0IDYgY29sbGVjdGlvbnMgc2hpbVxyXG4hZnVuY3Rpb24oKXtcclxuICB2YXIgVUlEICAgPSBzYWZlU3ltYm9sKCd1aWQnKVxyXG4gICAgLCBPMSAgICA9IHNhZmVTeW1ib2woJ08xJylcclxuICAgICwgV0VBSyAgPSBzYWZlU3ltYm9sKCd3ZWFrJylcclxuICAgICwgTEVBSyAgPSBzYWZlU3ltYm9sKCdsZWFrJylcclxuICAgICwgTEFTVCAgPSBzYWZlU3ltYm9sKCdsYXN0JylcclxuICAgICwgRklSU1QgPSBzYWZlU3ltYm9sKCdmaXJzdCcpXHJcbiAgICAsIFNJWkUgID0gREVTQyA/IHNhZmVTeW1ib2woJ3NpemUnKSA6ICdzaXplJ1xyXG4gICAgLCB1aWQgICA9IDBcclxuICAgICwgdG1wICAgPSB7fTtcclxuICBcclxuICBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uKEMsIE5BTUUsIG1ldGhvZHMsIGNvbW1vbk1ldGhvZHMsIGlzTWFwLCBpc1dlYWspe1xyXG4gICAgdmFyIEFEREVSID0gaXNNYXAgPyAnc2V0JyA6ICdhZGQnXHJcbiAgICAgICwgcHJvdG8gPSBDICYmIENbUFJPVE9UWVBFXVxyXG4gICAgICAsIE8gICAgID0ge307XHJcbiAgICBmdW5jdGlvbiBpbml0RnJvbUl0ZXJhYmxlKHRoYXQsIGl0ZXJhYmxlKXtcclxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBpc01hcCwgdGhhdFtBRERFUl0sIHRoYXQpO1xyXG4gICAgICByZXR1cm4gdGhhdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZpeFNWWihrZXksIGNoYWluKXtcclxuICAgICAgdmFyIG1ldGhvZCA9IHByb3RvW2tleV07XHJcbiAgICAgIGlmKGZyYW1ld29yaylwcm90b1trZXldID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG1ldGhvZC5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7XHJcbiAgICAgICAgcmV0dXJuIGNoYWluID8gdGhpcyA6IHJlc3VsdDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmKCFpc05hdGl2ZShDKSB8fCAhKGlzV2VhayB8fCAoIUJVR0dZX0lURVJBVE9SUyAmJiBoYXMocHJvdG8sIEZPUl9FQUNIKSAmJiBoYXMocHJvdG8sICdlbnRyaWVzJykpKSl7XHJcbiAgICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXHJcbiAgICAgIEMgPSBpc1dlYWtcclxuICAgICAgICA/IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICAgICAgYXNzZXJ0SW5zdGFuY2UodGhpcywgQywgTkFNRSk7XHJcbiAgICAgICAgICAgIHNldCh0aGlzLCBVSUQsIHVpZCsrKTtcclxuICAgICAgICAgICAgaW5pdEZyb21JdGVyYWJsZSh0aGlzLCBpdGVyYWJsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgYXNzZXJ0SW5zdGFuY2UodGhhdCwgQywgTkFNRSk7XHJcbiAgICAgICAgICAgIHNldCh0aGF0LCBPMSwgY3JlYXRlKG51bGwpKTtcclxuICAgICAgICAgICAgc2V0KHRoYXQsIFNJWkUsIDApO1xyXG4gICAgICAgICAgICBzZXQodGhhdCwgTEFTVCwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgc2V0KHRoYXQsIEZJUlNULCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBpbml0RnJvbUl0ZXJhYmxlKHRoYXQsIGl0ZXJhYmxlKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIGFzc2lnbkhpZGRlbihhc3NpZ25IaWRkZW4oQ1tQUk9UT1RZUEVdLCBtZXRob2RzKSwgY29tbW9uTWV0aG9kcyk7XHJcbiAgICAgIGlzV2VhayB8fCAhREVTQyB8fCBkZWZpbmVQcm9wZXJ0eShDW1BST1RPVFlQRV0sICdzaXplJywge2dldDogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gYXNzZXJ0RGVmaW5lZCh0aGlzW1NJWkVdKTtcclxuICAgICAgfX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIE5hdGl2ZSA9IENcclxuICAgICAgICAsIGluc3QgICA9IG5ldyBDXHJcbiAgICAgICAgLCBjaGFpbiAgPSBpbnN0W0FEREVSXShpc1dlYWsgPyB7fSA6IC0wLCAxKVxyXG4gICAgICAgICwgYnVnZ3laZXJvO1xyXG4gICAgICAvLyB3cmFwIHRvIGluaXQgY29sbGVjdGlvbnMgZnJvbSBpdGVyYWJsZVxyXG4gICAgICBpZihjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKGZ1bmN0aW9uKE8peyBuZXcgQyhPKSB9KSl7XHJcbiAgICAgICAgQyA9IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICAgIGFzc2VydEluc3RhbmNlKHRoaXMsIEMsIE5BTUUpO1xyXG4gICAgICAgICAgcmV0dXJuIGluaXRGcm9tSXRlcmFibGUobmV3IE5hdGl2ZSwgaXRlcmFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDW1BST1RPVFlQRV0gPSBwcm90bztcclxuICAgICAgICBpZihmcmFtZXdvcmspcHJvdG9bQ09OU1RSVUNUT1JdID0gQztcclxuICAgICAgfVxyXG4gICAgICBpc1dlYWsgfHwgaW5zdFtGT1JfRUFDSF0oZnVuY3Rpb24odmFsLCBrZXkpe1xyXG4gICAgICAgIGJ1Z2d5WmVybyA9IDEgLyBrZXkgPT09IC1JbmZpbml0eTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGZpeCBjb252ZXJ0aW5nIC0wIGtleSB0byArMFxyXG4gICAgICBpZihidWdneVplcm8pe1xyXG4gICAgICAgIGZpeFNWWignZGVsZXRlJyk7XHJcbiAgICAgICAgZml4U1ZaKCdoYXMnKTtcclxuICAgICAgICBpc01hcCAmJiBmaXhTVlooJ2dldCcpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vICsgZml4IC5hZGQgJiAuc2V0IGZvciBjaGFpbmluZ1xyXG4gICAgICBpZihidWdneVplcm8gfHwgY2hhaW4gIT09IGluc3QpZml4U1ZaKEFEREVSLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xyXG4gICAgc2V0U3BlY2llcyhDKTtcclxuICAgIFxyXG4gICAgT1tOQU1FXSA9IEM7XHJcbiAgICAkZGVmaW5lKEdMT0JBTCArIFdSQVAgKyBGT1JDRUQgKiAhaXNOYXRpdmUoQyksIE8pO1xyXG4gICAgXHJcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cclxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcclxuICAgIGlzV2VhayB8fCBkZWZpbmVTdGRJdGVyYXRvcnMoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xyXG4gICAgICBzZXQodGhpcywgSVRFUiwge286IGl0ZXJhdGVkLCBrOiBraW5kfSk7XHJcbiAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXHJcbiAgICAgICAgLCBraW5kICA9IGl0ZXIua1xyXG4gICAgICAgICwgZW50cnkgPSBpdGVyLmw7XHJcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxyXG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcclxuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcclxuICAgICAgaWYoIWl0ZXIubyB8fCAhKGl0ZXIubCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogaXRlci5vW0ZJUlNUXSkpe1xyXG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXHJcbiAgICAgICAgaXRlci5vID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcclxuICAgICAgaWYoa2luZCA9PSBLRVkpICByZXR1cm4gaXRlclJlc3VsdCgwLCBlbnRyeS5rKTtcclxuICAgICAgaWYoa2luZCA9PSBWQUxVRSlyZXR1cm4gaXRlclJlc3VsdCgwLCBlbnRyeS52KTtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlclJlc3VsdCgwLCBbZW50cnkuaywgZW50cnkudl0pOyAgIFxyXG4gICAgfSwgaXNNYXAgPyBLRVkrVkFMVUUgOiBWQUxVRSwgIWlzTWFwKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIEM7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGZhc3RLZXkoaXQsIGNyZWF0ZSl7XHJcbiAgICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XHJcbiAgICBpZighaXNPYmplY3QoaXQpKXJldHVybiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xyXG4gICAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcclxuICAgIGlmKGlzRnJvemVuKGl0KSlyZXR1cm4gJ0YnO1xyXG4gICAgaWYoIWhhcyhpdCwgVUlEKSl7XHJcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXHJcbiAgICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcclxuICAgICAgLy8gYWRkIG1pc3Npbmcgb2JqZWN0IGlkXHJcbiAgICAgIGhpZGRlbihpdCwgVUlELCArK3VpZCk7XHJcbiAgICAvLyByZXR1cm4gb2JqZWN0IGlkIHdpdGggcHJlZml4XHJcbiAgICB9IHJldHVybiAnTycgKyBpdFtVSURdO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRFbnRyeSh0aGF0LCBrZXkpe1xyXG4gICAgLy8gZmFzdCBjYXNlXHJcbiAgICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xyXG4gICAgaWYoaW5kZXggIT0gJ0YnKXJldHVybiB0aGF0W08xXVtpbmRleF07XHJcbiAgICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcclxuICAgIGZvcihlbnRyeSA9IHRoYXRbRklSU1RdOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcclxuICAgICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBkZWYodGhhdCwga2V5LCB2YWx1ZSl7XHJcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXHJcbiAgICAgICwgcHJldiwgaW5kZXg7XHJcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcclxuICAgIGlmKGVudHJ5KWVudHJ5LnYgPSB2YWx1ZTtcclxuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGF0W0xBU1RdID0gZW50cnkgPSB7XHJcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XHJcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxyXG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxyXG4gICAgICAgIHA6IHByZXYgPSB0aGF0W0xBU1RdLCAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxyXG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XHJcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcclxuICAgICAgfTtcclxuICAgICAgaWYoIXRoYXRbRklSU1RdKXRoYXRbRklSU1RdID0gZW50cnk7XHJcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XHJcbiAgICAgIHRoYXRbU0laRV0rKztcclxuICAgICAgLy8gYWRkIHRvIGluZGV4XHJcbiAgICAgIGlmKGluZGV4ICE9ICdGJyl0aGF0W08xXVtpbmRleF0gPSBlbnRyeTtcclxuICAgIH0gcmV0dXJuIHRoYXQ7XHJcbiAgfVxyXG5cclxuICB2YXIgY29sbGVjdGlvbk1ldGhvZHMgPSB7XHJcbiAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcclxuICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0W08xXSwgZW50cnkgPSB0aGF0W0ZJUlNUXTsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XHJcbiAgICAgICAgZW50cnkuciA9IHRydWU7XHJcbiAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xyXG4gICAgICB9XHJcbiAgICAgIHRoYXRbRklSU1RdID0gdGhhdFtMQVNUXSA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhhdFtTSVpFXSA9IDA7XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxyXG4gICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXHJcbiAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIHRoYXQgID0gdGhpc1xyXG4gICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xyXG4gICAgICBpZihlbnRyeSl7XHJcbiAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXHJcbiAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xyXG4gICAgICAgIGRlbGV0ZSB0aGF0W08xXVtlbnRyeS5pXTtcclxuICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcclxuICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XHJcbiAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xyXG4gICAgICAgIGlmKHRoYXRbRklSU1RdID09IGVudHJ5KXRoYXRbRklSU1RdID0gbmV4dDtcclxuICAgICAgICBpZih0aGF0W0xBU1RdID09IGVudHJ5KXRoYXRbTEFTVF0gPSBwcmV2O1xyXG4gICAgICAgIHRoYXRbU0laRV0tLTtcclxuICAgICAgfSByZXR1cm4gISFlbnRyeTtcclxuICAgIH0sXHJcbiAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgZm9yRWFjaDogZnVuY3Rpb24oY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSwgMylcclxuICAgICAgICAsIGVudHJ5O1xyXG4gICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXNbRklSU1RdKXtcclxuICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xyXG4gICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxyXG4gICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxyXG4gICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXHJcbiAgICBoYXM6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIDIzLjEgTWFwIE9iamVjdHNcclxuICBNYXAgPSBnZXRDb2xsZWN0aW9uKE1hcCwgTUFQLCB7XHJcbiAgICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xyXG4gICAgfSxcclxuICAgIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICByZXR1cm4gZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9LCBjb2xsZWN0aW9uTWV0aG9kcywgdHJ1ZSk7XHJcbiAgXHJcbiAgLy8gMjMuMiBTZXQgT2JqZWN0c1xyXG4gIFNldCA9IGdldENvbGxlY3Rpb24oU2V0LCBTRVQsIHtcclxuICAgIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxyXG4gICAgYWRkOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgIHJldHVybiBkZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIGNvbGxlY3Rpb25NZXRob2RzKTtcclxuICBcclxuICBmdW5jdGlvbiBkZWZXZWFrKHRoYXQsIGtleSwgdmFsdWUpe1xyXG4gICAgaWYoaXNGcm96ZW4oYXNzZXJ0T2JqZWN0KGtleSkpKWxlYWtTdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgaGFzKGtleSwgV0VBSykgfHwgaGlkZGVuKGtleSwgV0VBSywge30pO1xyXG4gICAgICBrZXlbV0VBS11bdGhhdFtVSURdXSA9IHZhbHVlO1xyXG4gICAgfSByZXR1cm4gdGhhdDtcclxuICB9XHJcbiAgZnVuY3Rpb24gbGVha1N0b3JlKHRoYXQpe1xyXG4gICAgcmV0dXJuIHRoYXRbTEVBS10gfHwgaGlkZGVuKHRoYXQsIExFQUssIG5ldyBNYXApW0xFQUtdO1xyXG4gIH1cclxuICBcclxuICB2YXIgd2Vha01ldGhvZHMgPSB7XHJcbiAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxyXG4gICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxyXG4gICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcclxuICAgICAgaWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xyXG4gICAgICByZXR1cm4gaGFzKGtleSwgV0VBSykgJiYgaGFzKGtleVtXRUFLXSwgdGhpc1tVSURdKSAmJiBkZWxldGUga2V5W1dFQUtdW3RoaXNbVUlEXV07XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcclxuICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcclxuICAgIGhhczogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuaGFzKGtleSk7XHJcbiAgICAgIHJldHVybiBoYXMoa2V5LCBXRUFLKSAmJiBoYXMoa2V5W1dFQUtdLCB0aGlzW1VJRF0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcclxuICBXZWFrTWFwID0gZ2V0Q29sbGVjdGlvbihXZWFrTWFwLCBXRUFLTUFQLCB7XHJcbiAgICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxyXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZihpc09iamVjdChrZXkpKXtcclxuICAgICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYoaGFzKGtleSwgV0VBSykpcmV0dXJuIGtleVtXRUFLXVt0aGlzW1VJRF1dO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICByZXR1cm4gZGVmV2Vhayh0aGlzLCBrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9LCB3ZWFrTWV0aG9kcywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgXHJcbiAgLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxyXG4gIGlmKGZyYW1ld29yayAmJiBuZXcgV2Vha01hcCgpLnNldChPYmplY3QuZnJlZXplKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xyXG4gICAgZm9yRWFjaC5jYWxsKGFycmF5KCdkZWxldGUsaGFzLGdldCxzZXQnKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIG1ldGhvZCA9IFdlYWtNYXBbUFJPVE9UWVBFXVtrZXldO1xyXG4gICAgICBXZWFrTWFwW1BST1RPVFlQRV1ba2V5XSA9IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGxlYWt5IG1hcFxyXG4gICAgICAgIGlmKGlzT2JqZWN0KGEpICYmIGlzRnJvemVuKGEpKXtcclxuICAgICAgICAgIHZhciByZXN1bHQgPSBsZWFrU3RvcmUodGhpcylba2V5XShhLCBiKTtcclxuICAgICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xyXG4gICAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxyXG4gICAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIDIzLjQgV2Vha1NldCBPYmplY3RzXHJcbiAgV2Vha1NldCA9IGdldENvbGxlY3Rpb24oV2Vha1NldCwgV0VBS1NFVCwge1xyXG4gICAgLy8gMjMuNC4zLjEgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxyXG4gICAgYWRkOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgIHJldHVybiBkZWZXZWFrKHRoaXMsIHZhbHVlLCB0cnVlKTtcclxuICAgIH1cclxuICB9LCB3ZWFrTWV0aG9kcywgZmFsc2UsIHRydWUpO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5yZWZsZWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gIGZ1bmN0aW9uIEVudW1lcmF0ZShpdGVyYXRlZCl7XHJcbiAgICB2YXIga2V5cyA9IFtdLCBrZXk7XHJcbiAgICBmb3Ioa2V5IGluIGl0ZXJhdGVkKWtleXMucHVzaChrZXkpO1xyXG4gICAgc2V0KHRoaXMsIElURVIsIHtvOiBpdGVyYXRlZCwgYToga2V5cywgaTogMH0pO1xyXG4gIH1cclxuICBjcmVhdGVJdGVyYXRvcihFbnVtZXJhdGUsIE9CSkVDVCwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBpdGVyID0gdGhpc1tJVEVSXVxyXG4gICAgICAsIGtleXMgPSBpdGVyLmFcclxuICAgICAgLCBrZXk7XHJcbiAgICBkbyB7XHJcbiAgICAgIGlmKGl0ZXIuaSA+PSBrZXlzLmxlbmd0aClyZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgIH0gd2hpbGUoISgoa2V5ID0ga2V5c1tpdGVyLmkrK10pIGluIGl0ZXIubykpO1xyXG4gICAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwga2V5KTtcclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiB3cmFwKGZuKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIGFzc2VydE9iamVjdChpdCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSwgdHJ1ZTtcclxuICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gcmVmbGVjdEdldCh0YXJnZXQsIHByb3BlcnR5S2V5LyosIHJlY2VpdmVyKi8pe1xyXG4gICAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl1cclxuICAgICAgLCBkZXNjID0gZ2V0T3duRGVzY3JpcHRvcihhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpLCBwcm90bztcclxuICAgIGlmKGRlc2MpcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxyXG4gICAgICA/IGRlc2MudmFsdWVcclxuICAgICAgOiBkZXNjLmdldCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSlcclxuICAgICAgPyByZWZsZWN0R2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZWZsZWN0U2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYvKiwgcmVjZWl2ZXIqLyl7XHJcbiAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXVxyXG4gICAgICAsIG93bkRlc2MgID0gZ2V0T3duRGVzY3JpcHRvcihhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpXHJcbiAgICAgICwgZXhpc3RpbmdEZXNjcmlwdG9yLCBwcm90bztcclxuICAgIGlmKCFvd25EZXNjKXtcclxuICAgICAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSl7XHJcbiAgICAgICAgcmV0dXJuIHJlZmxlY3RTZXQocHJvdG8sIHByb3BlcnR5S2V5LCBWLCByZWNlaXZlcik7XHJcbiAgICAgIH1cclxuICAgICAgb3duRGVzYyA9IGRlc2NyaXB0b3IoMCk7XHJcbiAgICB9XHJcbiAgICBpZihoYXMob3duRGVzYywgJ3ZhbHVlJykpe1xyXG4gICAgICBpZihvd25EZXNjLndyaXRhYmxlID09PSBmYWxzZSB8fCAhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtcclxuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yID0gZ2V0T3duRGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGRlc2NyaXB0b3IoMCk7XHJcbiAgICAgIGV4aXN0aW5nRGVzY3JpcHRvci52YWx1ZSA9IFY7XHJcbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHlLZXksIGV4aXN0aW5nRGVzY3JpcHRvciksIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGZhbHNlXHJcbiAgICAgIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcclxuICB9XHJcbiAgdmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgcmV0dXJuSXQ7XHJcbiAgXHJcbiAgdmFyIHJlZmxlY3QgPSB7XHJcbiAgICAvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcclxuICAgIGFwcGx5OiBjdHgoY2FsbCwgYXBwbHksIDMpLFxyXG4gICAgLy8gMjYuMS4yIFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCBbLCBuZXdUYXJnZXRdKVxyXG4gICAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3VtZW50c0xpc3QgLyosIG5ld1RhcmdldCovKXtcclxuICAgICAgdmFyIHByb3RvICAgID0gYXNzZXJ0RnVuY3Rpb24oYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl0pW1BST1RPVFlQRV1cclxuICAgICAgICAsIGluc3RhbmNlID0gY3JlYXRlKGlzT2JqZWN0KHByb3RvKSA/IHByb3RvIDogT2JqZWN0UHJvdG8pXHJcbiAgICAgICAgLCByZXN1bHQgICA9IGFwcGx5LmNhbGwodGFyZ2V0LCBpbnN0YW5jZSwgYXJndW1lbnRzTGlzdCk7XHJcbiAgICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcclxuICAgIGRlZmluZVByb3BlcnR5OiB3cmFwKGRlZmluZVByb3BlcnR5KSxcclxuICAgIC8vIDI2LjEuNCBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpXHJcbiAgICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eUtleSl7XHJcbiAgICAgIHZhciBkZXNjID0gZ2V0T3duRGVzY3JpcHRvcihhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xyXG4gICAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXHJcbiAgICBlbnVtZXJhdGU6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICAgIHJldHVybiBuZXcgRW51bWVyYXRlKGFzc2VydE9iamVjdCh0YXJnZXQpKTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXHJcbiAgICBnZXQ6IHJlZmxlY3RHZXQsXHJcbiAgICAvLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eUtleSl7XHJcbiAgICAgIHJldHVybiBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxyXG4gICAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICAgIHJldHVybiBnZXRQcm90b3R5cGVPZihhc3NlcnRPYmplY3QodGFyZ2V0KSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXHJcbiAgICBoYXM6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHlLZXkpe1xyXG4gICAgICByZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0O1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuMTAgUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KVxyXG4gICAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbih0YXJnZXQpe1xyXG4gICAgICByZXR1cm4gISFpc0V4dGVuc2libGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuMTEgUmVmbGVjdC5vd25LZXlzKHRhcmdldClcclxuICAgIG93bktleXM6IG93bktleXMsXHJcbiAgICAvLyAyNi4xLjEyIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxyXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IHdyYXAoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zIHx8IHJldHVybkl0KSxcclxuICAgIC8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXHJcbiAgICBzZXQ6IHJlZmxlY3RTZXRcclxuICB9XHJcbiAgLy8gMjYuMS4xNCBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pXHJcbiAgaWYoc2V0UHJvdG90eXBlT2YpcmVmbGVjdC5zZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvdG8pe1xyXG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm90byksIHRydWU7XHJcbiAgfTtcclxuICBcclxuICAkZGVmaW5lKEdMT0JBTCwge1JlZmxlY3Q6IHt9fSk7XHJcbiAgJGRlZmluZShTVEFUSUMsICdSZWZsZWN0JywgcmVmbGVjdCk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM3LnByb3Bvc2FscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgJGRlZmluZShQUk9UTywgQVJSQVksIHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kb21lbmljL0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xyXG4gICAgaW5jbHVkZXM6IGNyZWF0ZUFycmF5Q29udGFpbnModHJ1ZSlcclxuICB9KTtcclxuICAkZGVmaW5lKFBST1RPLCBTVFJJTkcsIHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcclxuICAgIGF0OiBjcmVhdGVQb2ludEF0KHRydWUpXHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0VG9BcnJheShpc0VudHJpZXMpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCl7XHJcbiAgICAgIHZhciBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKG9iamVjdClcclxuICAgICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICAgLCBpICAgICAgPSAwXHJcbiAgICAgICAgLCByZXN1bHQgPSBBcnJheShsZW5ndGgpXHJcbiAgICAgICAgLCBrZXk7XHJcbiAgICAgIGlmKGlzRW50cmllcyl3aGlsZShsZW5ndGggPiBpKXJlc3VsdFtpXSA9IFtrZXkgPSBrZXlzW2krK10sIE9ba2V5XV07XHJcbiAgICAgIGVsc2Ugd2hpbGUobGVuZ3RoID4gaSlyZXN1bHRbaV0gPSBPW2tleXNbaSsrXV07XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICRkZWZpbmUoU1RBVElDLCBPQkpFQ1QsIHtcclxuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vOTM1Mzc4MVxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KG9iamVjdClcclxuICAgICAgICAsIHJlc3VsdCA9IHt9O1xyXG4gICAgICBmb3JFYWNoLmNhbGwob3duS2V5cyhPKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShyZXN1bHQsIGtleSwgZGVzY3JpcHRvcigwLCBnZXRPd25EZXNjcmlwdG9yKE8sIGtleSkpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3J3YWxkcm9uL3RjMzktbm90ZXMvYmxvYi9tYXN0ZXIvZXM2LzIwMTQtMDQvYXByLTkubWQjNTEtb2JqZWN0ZW50cmllcy1vYmplY3R2YWx1ZXNcclxuICAgIHZhbHVlczogIGNyZWF0ZU9iamVjdFRvQXJyYXkoZmFsc2UpLFxyXG4gICAgZW50cmllczogY3JlYXRlT2JqZWN0VG9BcnJheSh0cnVlKVxyXG4gIH0pO1xyXG4gICRkZWZpbmUoU1RBVElDLCBSRUdFWFAsIHtcclxuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2thbmdheC85Njk4MTAwXHJcbiAgICBlc2NhcGU6IGNyZWF0ZVJlcGxhY2VyKC8oW1xcXFxcXC1bXFxde30oKSorPy4sXiR8XSkvZywgJ1xcXFwkMScsIHRydWUpXHJcbiAgfSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM3LmFic3RyYWN0LXJlZnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtYWJzdHJhY3QtcmVmc1xyXG4hZnVuY3Rpb24oUkVGRVJFTkNFKXtcclxuICBSRUZFUkVOQ0VfR0VUID0gZ2V0V2VsbEtub3duU3ltYm9sKFJFRkVSRU5DRSsnR2V0JywgdHJ1ZSk7XHJcbiAgdmFyIFJFRkVSRU5DRV9TRVQgPSBnZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1NFVCwgdHJ1ZSlcclxuICAgICwgUkVGRVJFTkNFX0RFTEVURSA9IGdldFdlbGxLbm93blN5bWJvbChSRUZFUkVOQ0UrJ0RlbGV0ZScsIHRydWUpO1xyXG4gIFxyXG4gICRkZWZpbmUoU1RBVElDLCBTWU1CT0wsIHtcclxuICAgIHJlZmVyZW5jZUdldDogUkVGRVJFTkNFX0dFVCxcclxuICAgIHJlZmVyZW5jZVNldDogUkVGRVJFTkNFX1NFVCxcclxuICAgIHJlZmVyZW5jZURlbGV0ZTogUkVGRVJFTkNFX0RFTEVURVxyXG4gIH0pO1xyXG4gIFxyXG4gIGhpZGRlbihGdW5jdGlvblByb3RvLCBSRUZFUkVOQ0VfR0VULCByZXR1cm5UaGlzKTtcclxuICBcclxuICBmdW5jdGlvbiBzZXRNYXBNZXRob2RzKENvbnN0cnVjdG9yKXtcclxuICAgIGlmKENvbnN0cnVjdG9yKXtcclxuICAgICAgdmFyIE1hcFByb3RvID0gQ29uc3RydWN0b3JbUFJPVE9UWVBFXTtcclxuICAgICAgaGlkZGVuKE1hcFByb3RvLCBSRUZFUkVOQ0VfR0VULCBNYXBQcm90by5nZXQpO1xyXG4gICAgICBoaWRkZW4oTWFwUHJvdG8sIFJFRkVSRU5DRV9TRVQsIE1hcFByb3RvLnNldCk7XHJcbiAgICAgIGhpZGRlbihNYXBQcm90bywgUkVGRVJFTkNFX0RFTEVURSwgTWFwUHJvdG9bJ2RlbGV0ZSddKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0TWFwTWV0aG9kcyhNYXApO1xyXG4gIHNldE1hcE1ldGhvZHMoV2Vha01hcCk7XHJcbn0oJ3JlZmVyZW5jZScpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLmRpY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oRElDVCl7XHJcbiAgRGljdCA9IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgIHZhciBkaWN0ID0gY3JlYXRlKG51bGwpO1xyXG4gICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgaWYoaXNJdGVyYWJsZShpdGVyYWJsZSkpe1xyXG4gICAgICAgIGZvck9mKGl0ZXJhYmxlLCB0cnVlLCBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICAgIGRpY3Rba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgYXNzaWduKGRpY3QsIGl0ZXJhYmxlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaWN0O1xyXG4gIH1cclxuICBEaWN0W1BST1RPVFlQRV0gPSBudWxsO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIERpY3RJdGVyYXRvcihpdGVyYXRlZCwga2luZCl7XHJcbiAgICBzZXQodGhpcywgSVRFUiwge286IHRvT2JqZWN0KGl0ZXJhdGVkKSwgYTogZ2V0S2V5cyhpdGVyYXRlZCksIGk6IDAsIGs6IGtpbmR9KTtcclxuICB9XHJcbiAgY3JlYXRlSXRlcmF0b3IoRGljdEl0ZXJhdG9yLCBESUNULCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgPSB0aGlzW0lURVJdXHJcbiAgICAgICwgTyAgICA9IGl0ZXIub1xyXG4gICAgICAsIGtleXMgPSBpdGVyLmFcclxuICAgICAgLCBraW5kID0gaXRlci5rXHJcbiAgICAgICwga2V5O1xyXG4gICAgZG8ge1xyXG4gICAgICBpZihpdGVyLmkgPj0ga2V5cy5sZW5ndGgpe1xyXG4gICAgICAgIGl0ZXIubyA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgICAgfVxyXG4gICAgfSB3aGlsZSghaGFzKE8sIGtleSA9IGtleXNbaXRlci5pKytdKSk7XHJcbiAgICBpZihraW5kID09IEtFWSkgIHJldHVybiBpdGVyUmVzdWx0KDAsIGtleSk7XHJcbiAgICBpZihraW5kID09IFZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsIE9ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDAsIFtrZXksIE9ba2V5XV0pO1xyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZURpY3RJdGVyKGtpbmQpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcclxuICAgICAgcmV0dXJuIG5ldyBEaWN0SXRlcmF0b3IoaXQsIGtpbmQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKlxyXG4gICAqIDAgLT4gZm9yRWFjaFxyXG4gICAqIDEgLT4gbWFwXHJcbiAgICogMiAtPiBmaWx0ZXJcclxuICAgKiAzIC0+IHNvbWVcclxuICAgKiA0IC0+IGV2ZXJ5XHJcbiAgICogNSAtPiBmaW5kXHJcbiAgICogNiAtPiBmaW5kS2V5XHJcbiAgICogNyAtPiBtYXBQYWlyc1xyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZURpY3RNZXRob2QodHlwZSl7XHJcbiAgICB2YXIgaXNNYXAgICAgPSB0eXBlID09IDFcclxuICAgICAgLCBpc0V2ZXJ5ICA9IHR5cGUgPT0gNDtcclxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGNhbGxiYWNrZm4sIHRoYXQgLyogPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgICB2YXIgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXHJcbiAgICAgICAgLCBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAgICAgLCByZXN1bHQgPSBpc01hcCB8fCB0eXBlID09IDcgfHwgdHlwZSA9PSAyID8gbmV3IChnZW5lcmljKHRoaXMsIERpY3QpKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICwga2V5LCB2YWwsIHJlcztcclxuICAgICAgZm9yKGtleSBpbiBPKWlmKGhhcyhPLCBrZXkpKXtcclxuICAgICAgICB2YWwgPSBPW2tleV07XHJcbiAgICAgICAgcmVzID0gZih2YWwsIGtleSwgb2JqZWN0KTtcclxuICAgICAgICBpZih0eXBlKXtcclxuICAgICAgICAgIGlmKGlzTWFwKXJlc3VsdFtrZXldID0gcmVzOyAgICAgICAgICAgICAvLyBtYXBcclxuICAgICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaCh0eXBlKXtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXN1bHRba2V5XSA9IHZhbDsgYnJlYWsgICAgICAvLyBmaWx0ZXJcclxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAvLyBzb21lXHJcbiAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgLy8gZmluZFxyXG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiBrZXk7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRLZXlcclxuICAgICAgICAgICAgY2FzZSA3OiByZXN1bHRbcmVzWzBdXSA9IHJlc1sxXTsgICAgICAvLyBtYXBQYWlyc1xyXG4gICAgICAgICAgfSBlbHNlIGlmKGlzRXZlcnkpcmV0dXJuIGZhbHNlOyAgICAgICAgIC8vIGV2ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0eXBlID09IDMgfHwgaXNFdmVyeSA/IGlzRXZlcnkgOiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZURpY3RSZWR1Y2UoaXNUdXJuKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QsIG1hcGZuLCBpbml0KXtcclxuICAgICAgYXNzZXJ0RnVuY3Rpb24obWFwZm4pO1xyXG4gICAgICB2YXIgTyAgICAgID0gdG9PYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxyXG4gICAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgICAsIGkgICAgICA9IDBcclxuICAgICAgICAsIG1lbW8sIGtleSwgcmVzdWx0O1xyXG4gICAgICBpZihpc1R1cm4pbWVtbyA9IGluaXQgPT0gdW5kZWZpbmVkID8gbmV3IChnZW5lcmljKHRoaXMsIERpY3QpKSA6IE9iamVjdChpbml0KTtcclxuICAgICAgZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoIDwgMyl7XHJcbiAgICAgICAgYXNzZXJ0KGxlbmd0aCwgUkVEVUNFX0VSUk9SKTtcclxuICAgICAgICBtZW1vID0gT1trZXlzW2krK11dO1xyXG4gICAgICB9IGVsc2UgbWVtbyA9IE9iamVjdChpbml0KTtcclxuICAgICAgd2hpbGUobGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0ga2V5c1tpKytdKSl7XHJcbiAgICAgICAgcmVzdWx0ID0gbWFwZm4obWVtbywgT1trZXldLCBrZXksIG9iamVjdCk7XHJcbiAgICAgICAgaWYoaXNUdXJuKXtcclxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gZmFsc2UpYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIG1lbW8gPSByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1lbW87XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciBmaW5kS2V5ID0gY3JlYXRlRGljdE1ldGhvZCg2KTtcclxuICBmdW5jdGlvbiBpbmNsdWRlcyhvYmplY3QsIGVsKXtcclxuICAgIHJldHVybiAoZWwgPT0gZWwgPyBrZXlPZihvYmplY3QsIGVsKSA6IGZpbmRLZXkob2JqZWN0LCBzYW1lTmFOKSkgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgXHJcbiAgdmFyIGRpY3RNZXRob2RzID0ge1xyXG4gICAga2V5czogICAgY3JlYXRlRGljdEl0ZXIoS0VZKSxcclxuICAgIHZhbHVlczogIGNyZWF0ZURpY3RJdGVyKFZBTFVFKSxcclxuICAgIGVudHJpZXM6IGNyZWF0ZURpY3RJdGVyKEtFWStWQUxVRSksXHJcbiAgICBmb3JFYWNoOiBjcmVhdGVEaWN0TWV0aG9kKDApLFxyXG4gICAgbWFwOiAgICAgY3JlYXRlRGljdE1ldGhvZCgxKSxcclxuICAgIGZpbHRlcjogIGNyZWF0ZURpY3RNZXRob2QoMiksXHJcbiAgICBzb21lOiAgICBjcmVhdGVEaWN0TWV0aG9kKDMpLFxyXG4gICAgZXZlcnk6ICAgY3JlYXRlRGljdE1ldGhvZCg0KSxcclxuICAgIGZpbmQ6ICAgIGNyZWF0ZURpY3RNZXRob2QoNSksXHJcbiAgICBmaW5kS2V5OiBmaW5kS2V5LFxyXG4gICAgbWFwUGFpcnM6Y3JlYXRlRGljdE1ldGhvZCg3KSxcclxuICAgIHJlZHVjZTogIGNyZWF0ZURpY3RSZWR1Y2UoZmFsc2UpLFxyXG4gICAgdHVybjogICAgY3JlYXRlRGljdFJlZHVjZSh0cnVlKSxcclxuICAgIGtleU9mOiAgIGtleU9mLFxyXG4gICAgaW5jbHVkZXM6aW5jbHVkZXMsXHJcbiAgICAvLyBIYXMgLyBnZXQgLyBzZXQgb3duIHByb3BlcnR5XHJcbiAgICBoYXM6IGhhcyxcclxuICAgIGdldDogZ2V0LFxyXG4gICAgc2V0OiBjcmVhdGVEZWZpbmVyKDApLFxyXG4gICAgaXNEaWN0OiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHJldHVybiBpc09iamVjdChpdCkgJiYgZ2V0UHJvdG90eXBlT2YoaXQpID09PSBEaWN0W1BST1RPVFlQRV07XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBpZihSRUZFUkVOQ0VfR0VUKWZvcih2YXIga2V5IGluIGRpY3RNZXRob2RzKSFmdW5jdGlvbihmbil7XHJcbiAgICBmdW5jdGlvbiBtZXRob2QoKXtcclxuICAgICAgZm9yKHZhciBhcmdzID0gW3RoaXNdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7KWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XHJcbiAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZm5bUkVGRVJFTkNFX0dFVF0gPSBmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgfVxyXG4gIH0oZGljdE1ldGhvZHNba2V5XSk7XHJcbiAgXHJcbiAgJGRlZmluZShHTE9CQUwgKyBGT1JDRUQsIHtEaWN0OiBhc3NpZ25IaWRkZW4oRGljdCwgZGljdE1ldGhvZHMpfSk7XHJcbn0oJ0RpY3QnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS4kZm9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKEVOVFJJRVMsIEZOKXsgIFxyXG4gIGZ1bmN0aW9uICRmb3IoaXRlcmFibGUsIGVudHJpZXMpe1xyXG4gICAgaWYoISh0aGlzIGluc3RhbmNlb2YgJGZvcikpcmV0dXJuIG5ldyAkZm9yKGl0ZXJhYmxlLCBlbnRyaWVzKTtcclxuICAgIHRoaXNbSVRFUl0gICAgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSk7XHJcbiAgICB0aGlzW0VOVFJJRVNdID0gISFlbnRyaWVzO1xyXG4gIH1cclxuICBcclxuICBjcmVhdGVJdGVyYXRvcigkZm9yLCAnV3JhcHBlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpc1tJVEVSXS5uZXh0KCk7XHJcbiAgfSk7XHJcbiAgdmFyICRmb3JQcm90byA9ICRmb3JbUFJPVE9UWVBFXTtcclxuICBzZXRJdGVyYXRvcigkZm9yUHJvdG8sIGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpc1tJVEVSXTsgLy8gdW53cmFwXHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5JdGVyYXRvcihuZXh0KXtcclxuICAgIGZ1bmN0aW9uIEl0ZXIoSSwgZm4sIHRoYXQpe1xyXG4gICAgICB0aGlzW0lURVJdICAgID0gZ2V0SXRlcmF0b3IoSSk7XHJcbiAgICAgIHRoaXNbRU5UUklFU10gPSBJW0VOVFJJRVNdO1xyXG4gICAgICB0aGlzW0ZOXSAgICAgID0gY3R4KGZuLCB0aGF0LCBJW0VOVFJJRVNdID8gMiA6IDEpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlSXRlcmF0b3IoSXRlciwgJ0NoYWluJywgbmV4dCwgJGZvclByb3RvKTtcclxuICAgIHNldEl0ZXJhdG9yKEl0ZXJbUFJPVE9UWVBFXSwgcmV0dXJuVGhpcyk7IC8vIG92ZXJyaWRlICRmb3JQcm90byBpdGVyYXRvclxyXG4gICAgcmV0dXJuIEl0ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHZhciBNYXBJdGVyID0gY3JlYXRlQ2hhaW5JdGVyYXRvcihmdW5jdGlvbigpe1xyXG4gICAgdmFyIHN0ZXAgPSB0aGlzW0lURVJdLm5leHQoKTtcclxuICAgIHJldHVybiBzdGVwLmRvbmUgPyBzdGVwIDogaXRlclJlc3VsdCgwLCBzdGVwQ2FsbCh0aGlzW0ZOXSwgc3RlcC52YWx1ZSwgdGhpc1tFTlRSSUVTXSkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIHZhciBGaWx0ZXJJdGVyID0gY3JlYXRlQ2hhaW5JdGVyYXRvcihmdW5jdGlvbigpe1xyXG4gICAgZm9yKDs7KXtcclxuICAgICAgdmFyIHN0ZXAgPSB0aGlzW0lURVJdLm5leHQoKTtcclxuICAgICAgaWYoc3RlcC5kb25lIHx8IHN0ZXBDYWxsKHRoaXNbRk5dLCBzdGVwLnZhbHVlLCB0aGlzW0VOVFJJRVNdKSlyZXR1cm4gc3RlcDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBhc3NpZ25IaWRkZW4oJGZvclByb3RvLCB7XHJcbiAgICBvZjogZnVuY3Rpb24oZm4sIHRoYXQpe1xyXG4gICAgICBmb3JPZih0aGlzLCB0aGlzW0VOVFJJRVNdLCBmbiwgdGhhdCk7XHJcbiAgICB9LFxyXG4gICAgYXJyYXk6IGZ1bmN0aW9uKGZuLCB0aGF0KXtcclxuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICBmb3JPZihmbiAhPSB1bmRlZmluZWQgPyB0aGlzLm1hcChmbiwgdGhhdCkgOiB0aGlzLCBmYWxzZSwgcHVzaCwgcmVzdWx0KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKGZuLCB0aGF0KXtcclxuICAgICAgcmV0dXJuIG5ldyBGaWx0ZXJJdGVyKHRoaXMsIGZuLCB0aGF0KTtcclxuICAgIH0sXHJcbiAgICBtYXA6IGZ1bmN0aW9uKGZuLCB0aGF0KXtcclxuICAgICAgcmV0dXJuIG5ldyBNYXBJdGVyKHRoaXMsIGZuLCB0aGF0KTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAkZm9yLmlzSXRlcmFibGUgID0gaXNJdGVyYWJsZTtcclxuICAkZm9yLmdldEl0ZXJhdG9yID0gZ2V0SXRlcmF0b3I7XHJcbiAgXHJcbiAgJGRlZmluZShHTE9CQUwgKyBGT1JDRUQsIHskZm9yOiAkZm9yfSk7XHJcbn0oJ2VudHJpZXMnLCBzYWZlU3ltYm9sKCdmbicpKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5kZWxheSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gaHR0cHM6Ly9lc2Rpc2N1c3Mub3JnL3RvcGljL3Byb21pc2UtcmV0dXJuaW5nLWRlbGF5LWZ1bmN0aW9uXHJcbiRkZWZpbmUoR0xPQkFMICsgRk9SQ0VELCB7XHJcbiAgZGVsYXk6IGZ1bmN0aW9uKHRpbWUpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpe1xyXG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5iaW5kaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKF8sIHRvTG9jYWxlU3RyaW5nKXtcclxuICAvLyBQbGFjZWhvbGRlclxyXG4gIGNvcmUuXyA9IHBhdGguXyA9IHBhdGguXyB8fCB7fTtcclxuXHJcbiAgJGRlZmluZShQUk9UTyArIEZPUkNFRCwgRlVOQ1RJT04sIHtcclxuICAgIHBhcnQ6IHBhcnQsXHJcbiAgICBvbmx5OiBmdW5jdGlvbihudW1iZXJBcmd1bWVudHMsIHRoYXQgLyogPSBAICovKXtcclxuICAgICAgdmFyIGZuICAgICA9IGFzc2VydEZ1bmN0aW9uKHRoaXMpXHJcbiAgICAgICAgLCBuICAgICAgPSB0b0xlbmd0aChudW1iZXJBcmd1bWVudHMpXHJcbiAgICAgICAgLCBpc1RoYXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMTtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBtaW4obiwgYXJndW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICwgYXJncyAgID0gQXJyYXkobGVuZ3RoKVxyXG4gICAgICAgICAgLCBpICAgICAgPSAwO1xyXG4gICAgICAgIHdoaWxlKGxlbmd0aCA+IGkpYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdO1xyXG4gICAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIGlzVGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHRpZShrZXkpe1xyXG4gICAgdmFyIHRoYXQgID0gdGhpc1xyXG4gICAgICAsIGJvdW5kID0ge307XHJcbiAgICByZXR1cm4gaGlkZGVuKHRoYXQsIF8sIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKGtleSA9PT0gdW5kZWZpbmVkIHx8ICEoa2V5IGluIHRoYXQpKXJldHVybiB0b0xvY2FsZVN0cmluZy5jYWxsKHRoYXQpO1xyXG4gICAgICByZXR1cm4gaGFzKGJvdW5kLCBrZXkpID8gYm91bmRba2V5XSA6IChib3VuZFtrZXldID0gY3R4KHRoYXRba2V5XSwgdGhhdCwgLTEpKTtcclxuICAgIH0pW19dKGtleSk7XHJcbiAgfVxyXG4gIFxyXG4gIGhpZGRlbihwYXRoLl8sIFRPX1NUUklORywgZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBfO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGhpZGRlbihPYmplY3RQcm90bywgXywgdGllKTtcclxuICBERVNDIHx8IGhpZGRlbihBcnJheVByb3RvLCBfLCB0aWUpO1xyXG4gIC8vIElFOC0gZGlydHkgaGFjayAtIHJlZGVmaW5lZCB0b0xvY2FsZVN0cmluZyBpcyBub3QgZW51bWVyYWJsZVxyXG59KERFU0MgPyB1aWQoJ3RpZScpIDogVE9fTE9DQUxFLCBPYmplY3RQcm90b1tUT19MT0NBTEVdKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5vYmplY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgZnVuY3Rpb24gZGVmaW5lKHRhcmdldCwgbWl4aW4pe1xyXG4gICAgdmFyIGtleXMgICA9IG93bktleXModG9PYmplY3QobWl4aW4pKVxyXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICwgaSA9IDAsIGtleTtcclxuICAgIHdoaWxlKGxlbmd0aCA+IGkpZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXkgPSBrZXlzW2krK10sIGdldE93bkRlc2NyaXB0b3IobWl4aW4sIGtleSkpO1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9O1xyXG4gICRkZWZpbmUoU1RBVElDICsgRk9SQ0VELCBPQkpFQ1QsIHtcclxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcclxuICAgIGNsYXNzb2Y6IGNsYXNzb2YsXHJcbiAgICBkZWZpbmU6IGRlZmluZSxcclxuICAgIG1ha2U6IGZ1bmN0aW9uKHByb3RvLCBtaXhpbil7XHJcbiAgICAgIHJldHVybiBkZWZpbmUoY3JlYXRlKHByb3RvKSwgbWl4aW4pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUuYXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiRkZWZpbmUoUFJPVE8gKyBGT1JDRUQsIEFSUkFZLCB7XHJcbiAgdHVybjogZnVuY3Rpb24oZm4sIHRhcmdldCAvKiA9IFtdICovKXtcclxuICAgIGFzc2VydEZ1bmN0aW9uKGZuKTtcclxuICAgIHZhciBtZW1vICAgPSB0YXJnZXQgPT0gdW5kZWZpbmVkID8gW10gOiBPYmplY3QodGFyZ2V0KVxyXG4gICAgICAsIE8gICAgICA9IEVTNU9iamVjdCh0aGlzKVxyXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAsIGluZGV4ICA9IDA7XHJcbiAgICB3aGlsZShsZW5ndGggPiBpbmRleClpZihmbihtZW1vLCBPW2luZGV4XSwgaW5kZXgrKywgdGhpcykgPT09IGZhbHNlKWJyZWFrO1xyXG4gICAgcmV0dXJuIG1lbW87XHJcbiAgfVxyXG59KTtcclxuaWYoZnJhbWV3b3JrKUFycmF5VW5zY29wYWJsZXMudHVybiA9IHRydWU7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUubnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihudW1iZXJNZXRob2RzKXsgIFxyXG4gIGZ1bmN0aW9uIE51bWJlckl0ZXJhdG9yKGl0ZXJhdGVkKXtcclxuICAgIHNldCh0aGlzLCBJVEVSLCB7bDogdG9MZW5ndGgoaXRlcmF0ZWQpLCBpOiAwfSk7XHJcbiAgfVxyXG4gIGNyZWF0ZUl0ZXJhdG9yKE51bWJlckl0ZXJhdG9yLCBOVU1CRVIsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaXRlciA9IHRoaXNbSVRFUl1cclxuICAgICAgLCBpICAgID0gaXRlci5pKys7XHJcbiAgICByZXR1cm4gaSA8IGl0ZXIubCA/IGl0ZXJSZXN1bHQoMCwgaSkgOiBpdGVyUmVzdWx0KDEpO1xyXG4gIH0pO1xyXG4gIGRlZmluZUl0ZXJhdG9yKE51bWJlciwgTlVNQkVSLCBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIG5ldyBOdW1iZXJJdGVyYXRvcih0aGlzKTtcclxuICB9KTtcclxuICBcclxuICBudW1iZXJNZXRob2RzLnJhbmRvbSA9IGZ1bmN0aW9uKGxpbSAvKiA9IDAgKi8pe1xyXG4gICAgdmFyIGEgPSArdGhpc1xyXG4gICAgICAsIGIgPSBsaW0gPT0gdW5kZWZpbmVkID8gMCA6ICtsaW1cclxuICAgICAgLCBtID0gbWluKGEsIGIpO1xyXG4gICAgcmV0dXJuIHJhbmRvbSgpICogKG1heChhLCBiKSAtIG0pICsgbTtcclxuICB9O1xyXG5cclxuICBmb3JFYWNoLmNhbGwoYXJyYXkoXHJcbiAgICAgIC8vIEVTMzpcclxuICAgICAgJ3JvdW5kLGZsb29yLGNlaWwsYWJzLHNpbixhc2luLGNvcyxhY29zLHRhbixhdGFuLGV4cCxzcXJ0LG1heCxtaW4scG93LGF0YW4yLCcgK1xyXG4gICAgICAvLyBFUzY6XHJcbiAgICAgICdhY29zaCxhc2luaCxhdGFuaCxjYnJ0LGNsejMyLGNvc2gsZXhwbTEsaHlwb3QsaW11bCxsb2cxcCxsb2cxMCxsb2cyLHNpZ24sc2luaCx0YW5oLHRydW5jJ1xyXG4gICAgKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIGZuID0gTWF0aFtrZXldO1xyXG4gICAgICBpZihmbiludW1iZXJNZXRob2RzW2tleV0gPSBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgICAgICAvLyBpZTktIGRvbnQgc3VwcG9ydCBzdHJpY3QgbW9kZSAmIGNvbnZlcnQgYHRoaXNgIHRvIG9iamVjdCAtPiBjb252ZXJ0IGl0IHRvIG51bWJlclxyXG4gICAgICAgIHZhciBhcmdzID0gWyt0aGlzXVxyXG4gICAgICAgICAgLCBpICAgID0gMDtcclxuICAgICAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xyXG4gICAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuICBcclxuICAkZGVmaW5lKFBST1RPICsgRk9SQ0VELCBOVU1CRVIsIG51bWJlck1ldGhvZHMpO1xyXG59KHt9KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5zdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgdmFyIGVzY2FwZUhUTUxEaWN0ID0ge1xyXG4gICAgJyYnOiAnJmFtcDsnLFxyXG4gICAgJzwnOiAnJmx0OycsXHJcbiAgICAnPic6ICcmZ3Q7JyxcclxuICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgXCInXCI6ICcmYXBvczsnXHJcbiAgfSwgdW5lc2NhcGVIVE1MRGljdCA9IHt9LCBrZXk7XHJcbiAgZm9yKGtleSBpbiBlc2NhcGVIVE1MRGljdCl1bmVzY2FwZUhUTUxEaWN0W2VzY2FwZUhUTUxEaWN0W2tleV1dID0ga2V5O1xyXG4gICRkZWZpbmUoUFJPVE8gKyBGT1JDRUQsIFNUUklORywge1xyXG4gICAgZXNjYXBlSFRNTDogICBjcmVhdGVSZXBsYWNlcigvWyY8PlwiJ10vZywgZXNjYXBlSFRNTERpY3QpLFxyXG4gICAgdW5lc2NhcGVIVE1MOiBjcmVhdGVSZXBsYWNlcigvJig/OmFtcHxsdHxndHxxdW90fGFwb3MpOy9nLCB1bmVzY2FwZUhUTUxEaWN0KVxyXG4gIH0pO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUuZGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihmb3JtYXRSZWdFeHAsIGZsZXhpb1JlZ0V4cCwgbG9jYWxlcywgY3VycmVudCwgU0VDT05EUywgTUlOVVRFUywgSE9VUlMsIE1PTlRILCBZRUFSKXtcclxuICBmdW5jdGlvbiBjcmVhdGVGb3JtYXQocHJlZml4KXtcclxuICAgIHJldHVybiBmdW5jdGlvbih0ZW1wbGF0ZSwgbG9jYWxlIC8qID0gY3VycmVudCAqLyl7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgICwgZGljdCA9IGxvY2FsZXNbaGFzKGxvY2FsZXMsIGxvY2FsZSkgPyBsb2NhbGUgOiBjdXJyZW50XTtcclxuICAgICAgZnVuY3Rpb24gZ2V0KHVuaXQpe1xyXG4gICAgICAgIHJldHVybiB0aGF0W3ByZWZpeCArIHVuaXRdKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFN0cmluZyh0ZW1wbGF0ZSkucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHBhcnQpe1xyXG4gICAgICAgIHN3aXRjaChwYXJ0KXtcclxuICAgICAgICAgIGNhc2UgJ3MnICA6IHJldHVybiBnZXQoU0VDT05EUyk7ICAgICAgICAgICAgICAgICAgLy8gU2Vjb25kcyA6IDAtNTlcclxuICAgICAgICAgIGNhc2UgJ3NzJyA6IHJldHVybiBseihnZXQoU0VDT05EUykpOyAgICAgICAgICAgICAgLy8gU2Vjb25kcyA6IDAwLTU5XHJcbiAgICAgICAgICBjYXNlICdtJyAgOiByZXR1cm4gZ2V0KE1JTlVURVMpOyAgICAgICAgICAgICAgICAgIC8vIE1pbnV0ZXMgOiAwLTU5XHJcbiAgICAgICAgICBjYXNlICdtbScgOiByZXR1cm4gbHooZ2V0KE1JTlVURVMpKTsgICAgICAgICAgICAgIC8vIE1pbnV0ZXMgOiAwMC01OVxyXG4gICAgICAgICAgY2FzZSAnaCcgIDogcmV0dXJuIGdldChIT1VSUyk7ICAgICAgICAgICAgICAgICAgICAvLyBIb3VycyAgIDogMC0yM1xyXG4gICAgICAgICAgY2FzZSAnaGgnIDogcmV0dXJuIGx6KGdldChIT1VSUykpOyAgICAgICAgICAgICAgICAvLyBIb3VycyAgIDogMDAtMjNcclxuICAgICAgICAgIGNhc2UgJ0QnICA6IHJldHVybiBnZXQoREFURSk7ICAgICAgICAgICAgICAgICAgICAgLy8gRGF0ZSAgICA6IDEtMzFcclxuICAgICAgICAgIGNhc2UgJ0REJyA6IHJldHVybiBseihnZXQoREFURSkpOyAgICAgICAgICAgICAgICAgLy8gRGF0ZSAgICA6IDAxLTMxXHJcbiAgICAgICAgICBjYXNlICdXJyAgOiByZXR1cm4gZGljdFswXVtnZXQoJ0RheScpXTsgICAgICAgICAgIC8vIERheSAgICAgOiDQn9C+0L3QtdC00LXQu9GM0L3QuNC6XHJcbiAgICAgICAgICBjYXNlICdOJyAgOiByZXR1cm4gZ2V0KE1PTlRIKSArIDE7ICAgICAgICAgICAgICAgIC8vIE1vbnRoICAgOiAxLTEyXHJcbiAgICAgICAgICBjYXNlICdOTicgOiByZXR1cm4gbHooZ2V0KE1PTlRIKSArIDEpOyAgICAgICAgICAgIC8vIE1vbnRoICAgOiAwMS0xMlxyXG4gICAgICAgICAgY2FzZSAnTScgIDogcmV0dXJuIGRpY3RbMl1bZ2V0KE1PTlRIKV07ICAgICAgICAgICAvLyBNb250aCAgIDog0K/QvdCy0LDRgNGMXHJcbiAgICAgICAgICBjYXNlICdNTScgOiByZXR1cm4gZGljdFsxXVtnZXQoTU9OVEgpXTsgICAgICAgICAgIC8vIE1vbnRoICAgOiDQr9C90LLQsNGA0Y9cclxuICAgICAgICAgIGNhc2UgJ1knICA6IHJldHVybiBnZXQoWUVBUik7ICAgICAgICAgICAgICAgICAgICAgLy8gWWVhciAgICA6IDIwMTRcclxuICAgICAgICAgIGNhc2UgJ1lZJyA6IHJldHVybiBseihnZXQoWUVBUikgJSAxMDApOyAgICAgICAgICAgLy8gWWVhciAgICA6IDE0XHJcbiAgICAgICAgfSByZXR1cm4gcGFydDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZExvY2FsZShsYW5nLCBsb2NhbGUpe1xyXG4gICAgZnVuY3Rpb24gc3BsaXQoaW5kZXgpe1xyXG4gICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgIGZvckVhY2guY2FsbChhcnJheShsb2NhbGUubW9udGhzKSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGl0LnJlcGxhY2UoZmxleGlvUmVnRXhwLCAnJCcgKyBpbmRleCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGxvY2FsZXNbbGFuZ10gPSBbYXJyYXkobG9jYWxlLndlZWtkYXlzKSwgc3BsaXQoMSksIHNwbGl0KDIpXTtcclxuICAgIHJldHVybiBjb3JlO1xyXG4gIH1cclxuICAkZGVmaW5lKFBST1RPICsgRk9SQ0VELCBEQVRFLCB7XHJcbiAgICBmb3JtYXQ6ICAgIGNyZWF0ZUZvcm1hdCgnZ2V0JyksXHJcbiAgICBmb3JtYXRVVEM6IGNyZWF0ZUZvcm1hdCgnZ2V0VVRDJylcclxuICB9KTtcclxuICBhZGRMb2NhbGUoY3VycmVudCwge1xyXG4gICAgd2Vla2RheXM6ICdTdW5kYXksTW9uZGF5LFR1ZXNkYXksV2VkbmVzZGF5LFRodXJzZGF5LEZyaWRheSxTYXR1cmRheScsXHJcbiAgICBtb250aHM6ICdKYW51YXJ5LEZlYnJ1YXJ5LE1hcmNoLEFwcmlsLE1heSxKdW5lLEp1bHksQXVndXN0LFNlcHRlbWJlcixPY3RvYmVyLE5vdmVtYmVyLERlY2VtYmVyJ1xyXG4gIH0pO1xyXG4gIGFkZExvY2FsZSgncnUnLCB7XHJcbiAgICB3ZWVrZGF5czogJ9CS0L7RgdC60YDQtdGB0LXQvdGM0LUs0J/QvtC90LXQtNC10LvRjNC90LjQuizQktGC0L7RgNC90LjQuizQodGA0LXQtNCwLNCn0LXRgtCy0LXRgNCzLNCf0Y/RgtC90LjRhtCwLNCh0YPQsdCx0L7RgtCwJyxcclxuICAgIG1vbnRoczogJ9Cv0L3QstCw0YA60Y980Yws0KTQtdCy0YDQsNC7OtGPfNGMLNCc0LDRgNGCOtCwfCzQkNC/0YDQtdC7OtGPfNGMLNCc0LA60Y980Lks0JjRjtC9OtGPfNGMLCcgK1xyXG4gICAgICAgICAgICAn0JjRjtC7OtGPfNGMLNCQ0LLQs9GD0YHRgjrQsHws0KHQtdC90YLRj9Cx0YA60Y980Yws0J7QutGC0Y/QsdGAOtGPfNGMLNCd0L7Rj9Cx0YA60Y980Yws0JTQtdC60LDQsdGAOtGPfNGMJ1xyXG4gIH0pO1xyXG4gIGNvcmUubG9jYWxlID0gZnVuY3Rpb24obG9jYWxlKXtcclxuICAgIHJldHVybiBoYXMobG9jYWxlcywgbG9jYWxlKSA/IGN1cnJlbnQgPSBsb2NhbGUgOiBjdXJyZW50O1xyXG4gIH07XHJcbiAgY29yZS5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XHJcbn0oL1xcYlxcd1xcdz9cXGIvZywgLzooLiopXFx8KC4qKSQvLCB7fSwgJ2VuJywgJ1NlY29uZHMnLCAnTWludXRlcycsICdIb3VycycsICdNb250aCcsICdGdWxsWWVhcicpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLmdsb2JhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kZGVmaW5lKEdMT0JBTCArIEZPUkNFRCwge2dsb2JhbDogZ2xvYmFsfSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGpzLmFycmF5LnN0YXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEphdmFTY3JpcHQgMS42IC8gU3RyYXdtYW4gYXJyYXkgc3RhdGljcyBzaGltXHJcbiFmdW5jdGlvbihhcnJheVN0YXRpY3Mpe1xyXG4gIGZ1bmN0aW9uIHNldEFycmF5U3RhdGljcyhrZXlzLCBsZW5ndGgpe1xyXG4gICAgZm9yRWFjaC5jYWxsKGFycmF5KGtleXMpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZihrZXkgaW4gQXJyYXlQcm90bylhcnJheVN0YXRpY3Nba2V5XSA9IGN0eChjYWxsLCBBcnJheVByb3RvW2tleV0sIGxlbmd0aCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzJywgMSk7XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzJywgMyk7XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YsJyArXHJcbiAgICAgICAgICAgICAgICAgICdyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsLHR1cm4nKTtcclxuICAkZGVmaW5lKFNUQVRJQywgQVJSQVksIGFycmF5U3RhdGljcyk7XHJcbn0oe30pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiB3ZWIuZG9tLml0YXJhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oTm9kZUxpc3Qpe1xyXG4gIGlmKGZyYW1ld29yayAmJiBOb2RlTGlzdCAmJiAhKFNZTUJPTF9JVEVSQVRPUiBpbiBOb2RlTGlzdFtQUk9UT1RZUEVdKSl7XHJcbiAgICBoaWRkZW4oTm9kZUxpc3RbUFJPVE9UWVBFXSwgU1lNQk9MX0lURVJBVE9SLCBJdGVyYXRvcnNbQVJSQVldKTtcclxuICB9XHJcbiAgSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzW0FSUkFZXTtcclxufShnbG9iYWwuTm9kZUxpc3QpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLmxvZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24obG9nLCBlbmFibGVkKXtcclxuICAvLyBNZXRob2RzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0RldmVsb3BlclRvb2xzV0cvY29uc29sZS1vYmplY3QvYmxvYi9tYXN0ZXIvYXBpLm1kXHJcbiAgZm9yRWFjaC5jYWxsKGFycmF5KCdhc3NlcnQsY2xlYXIsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sJyArXHJcbiAgICAgICdncm91cCxncm91cENvbGxhcHNlZCxncm91cEVuZCxpbmZvLGlzSW5kZXBlbmRlbnRseUNvbXBvc2VkLGxvZywnICtcclxuICAgICAgJ21hcmtUaW1lbGluZSxwcm9maWxlLHByb2ZpbGVFbmQsdGFibGUsdGltZSx0aW1lRW5kLHRpbWVsaW5lLCcgK1xyXG4gICAgICAndGltZWxpbmVFbmQsdGltZVN0YW1wLHRyYWNlLHdhcm4nKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgIGxvZ1trZXldID0gZnVuY3Rpb24oKXtcclxuICAgICAgaWYoZW5hYmxlZCAmJiBrZXkgaW4gY29uc29sZSlyZXR1cm4gYXBwbHkuY2FsbChjb25zb2xlW2tleV0sIGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gICRkZWZpbmUoR0xPQkFMICsgRk9SQ0VELCB7bG9nOiBhc3NpZ24obG9nLmxvZywgbG9nLCB7XHJcbiAgICBlbmFibGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGRpc2FibGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9KX0pO1xyXG59KHt9LCB0cnVlKTtcbn0odHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCksIGZhbHNlKTtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogbW9kdWxlLmV4cG9ydHMsIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVHVpU3ltYm9sLCB7aXNTYW1lU3R5bGVTeW1ib2x9IGZyb20gJy4vdHVpLXN5bWJvbCc7XG5cbi8qKlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1aU5vZGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBzZXJpYWxpemUgZGV0YWNoZWQgbm9kZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gICAgICogQHBhcmFtIHtOdW1iZXJbXX0gc2NhbGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0Q2xpZW50UmVjdH1cbiAgICAgKi9cbiAgICBnZXROb3JtYWxpemVkQ2xpZW50UmVjdE9mKGNsaWVudFJlY3QsIHtzY2FsZX0pIHtcbiAgICAgICAgbGV0IFtzY2FsZVgsIHNjYWxlWV0gPSBzY2FsZSB8fCBbXTtcbiAgICAgICAgc2NhbGVYID0gc2NhbGVYIHx8IDE7XG4gICAgICAgIHNjYWxlWSA9IHNjYWxlWSB8fCAxO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib3R0b206IE1hdGgucm91bmQoY2xpZW50UmVjdC5ib3R0b20gLyBzY2FsZVkpLFxuICAgICAgICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGVZKSxcbiAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoY2xpZW50UmVjdC5sZWZ0IC8gc2NhbGVYKSxcbiAgICAgICAgICAgIHJpZ2h0OiBNYXRoLnJvdW5kKGNsaWVudFJlY3QucmlnaHQgLyBzY2FsZVgpLFxuICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKGNsaWVudFJlY3QudG9wIC8gc2NhbGVZKSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZVgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDbGllbnRSZWN0W119IGNsaWVudFJlY3RzXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXX0gc2NhbGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0Q2xpZW50UmVjdFtdfVxuICAgICAqL1xuICAgIG5vcm1hbGl6ZUNsaWVudFJlY3RzKGNsaWVudFJlY3RzLCB7c2NhbGV9KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGNsaWVudFJlY3RzLCAoY2xpZW50UmVjdCkgPT4gdGhpcy5nZXROb3JtYWxpemVkQ2xpZW50UmVjdE9mKGNsaWVudFJlY3QsIHtzY2FsZX0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHVpU3ltYm9sfSBzeW1ib2xBXG4gICAgICogQHBhcmFtIHtUdWlTeW1ib2x9IHN5bWJvbEJcbiAgICAgKiBAcmV0dXJucyB7KFR1aVN5bWJvbHxudWxsKVtdfVxuICAgICAqL1xuICAgIHVuaXRlU3ltYm9scyhzeW1ib2xBLCBzeW1ib2xCKSB7XG4gICAgICAgIGlmICghc3ltYm9sQSkge1xuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBzeW1ib2xCXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NhbWVTdHlsZVN5bWJvbChzeW1ib2xBLCBzeW1ib2xCKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgVHVpU3ltYm9sKHN5bWJvbEEuY2hhciArIHN5bWJvbEIuY2hhciwgc3ltYm9sQS5zdHlsZSksIG51bGxdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtzeW1ib2xBLCBzeW1ib2xCXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fVxuICAgICAqL1xuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBbW11dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fVxuICAgICAqL1xuICAgIHRvQ29tcHJlc3NlZEFycmF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0FycmF5KCkubWFwKChyb3cpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByb3cucmVkdWNlKChyb3csIHN5bWJvbCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0U3ltYm9sID0gcm93W3Jvdy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB2YXIgW3VuaXRlZFN5bWJvbHMsIGV4dHJhU3ltYm9sXSA9IHRoaXMudW5pdGVTeW1ib2xzKGxhc3RTeW1ib2wsIHN5bWJvbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5pdGVkU3ltYm9scyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByb3cucHVzaChleHRyYVN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHVuaXRlZFN5bWJvbHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93W3Jvdy5sZW5ndGggLSAxXSA9IHVuaXRlZFN5bWJvbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhU3ltYm9sICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKGV4dHJhU3ltYm9sKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKS5tYXAoKHJvdykgPT4gcm93LmpvaW4oJycpKS5qb2luKCdcXG4nKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gT2JqZWN0Q2xpZW50UmVjdFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGJvdHRvbVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGhlaWdodFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGxlZnRcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByaWdodFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHRvcFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHdpZHRoXG4gKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3R1aS1ub2RlLmpzXG4gKiovIiwiaW1wb3J0IFR1aU5vZGUgZnJvbSAnLi90dWktbm9kZSc7XG5pbXBvcnQgVGV4dFNlcmlhbGl6ZXIgZnJvbSAnLi9zZXJpYWxpemVycy90ZXh0LXNlcmlhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdWlUZXh0IGV4dGVuZHMgVHVpTm9kZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHtDc3NTdHlsZX0gc3R5bGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXX0gW29wdGlvbnMuc2NhbGVdXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iobm9kZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSAzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgdGV4dCBub2RlIGlzIHN1cHBvcnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Q2xpZW50UmVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm91bmRpbmdCb3ggPSB0aGlzLmdldE5vcm1hbGl6ZWRDbGllbnRSZWN0T2YocmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3RDbGllbnRSZWN0W119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsaWVudFJlY3RzID0gdGhpcy5ub3JtYWxpemVDbGllbnRSZWN0cyhyYW5nZS5nZXRDbGllbnRSZWN0cygpLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuY29udGVudCA9IG5vZGUudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgdG9BcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0U2VyaWFsaXplcih0aGlzLCB0aGlzLm9wdGlvbnMpLnNlcmlhbGl6ZSgpO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3R1aS10ZXh0LmpzXG4gKiovIiwiaW1wb3J0IFR1aVN5bWJvbCBmcm9tICcuLi90dWktc3ltYm9sJztcbmltcG9ydCB7QkFDS0dST1VORF9DSEFSQUNURVIsIEJPUkRFUiwgU0NST0xMfSBmcm9tICcuLi9jaGFyYWN0ZXJzJztcbmltcG9ydCBTZXJpYWxpemVyIGZyb20gJy4vc2VyaWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRTZXJpYWxpemVyIGV4dGVuZHMgU2VyaWFsaXplciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUdWlFbGVtZW50fSB0dWlFbGVtZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0dWlFbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHR1aUVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Q3NzU3R5bGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0eWxlID0gdHVpRWxlbWVudC5zdHlsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3RDbGllbnRSZWN0W119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsaWVudFJlY3RzID0gdHVpRWxlbWVudC5jbGllbnRSZWN0cztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3RDbGllbnRSZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ib3VuZGluZ0JveCA9IHR1aUVsZW1lbnQuYm91bmRpbmdCb3g7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB0dWlFbGVtZW50LnNjcm9sbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3RbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGVudCA9IHR1aUVsZW1lbnQuY29udGVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgZmlsbEJveChjbGllbnRSZWN0KSB7XG4gICAgICAgIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcblxuICAgICAgICB2YXIgYmFja2dyb3VuZCA9IG5ldyBUdWlTeW1ib2woQkFDS0dST1VORF9DSEFSQUNURVIsIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlLmNvbG9yLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgYm94ID0gbmV3IEFycmF5KGhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGJveFt5XSA9IG5ldyBBcnJheSh3aWR0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBib3hbeV1beF0gPSBiYWNrZ3JvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICAgICAqIEBwYXJhbSB7T2JqZWN0Q2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICAgICAqL1xuICAgIGZpbGxMZWZ0Qm9yZGVyKGJveCwgY2xpZW50UmVjdCkge1xuICAgICAgICBpZiAoIXRoaXMuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVmdEJvcmRlciA9IG5ldyBUdWlTeW1ib2woQk9SREVSLlNPTElELkxFRlQsIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlLmJvcmRlckxlZnRDb2xvcixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGJveFt5XVswXSA9IGxlZnRCb3JkZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICAgICAqIEBwYXJhbSB7T2JqZWN0Q2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICAgICAqL1xuICAgIGZpbGxSaWdodEJvcmRlcihib3gsIGNsaWVudFJlY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByaWdodEJvcmRlciA9IG5ldyBUdWlTeW1ib2woQk9SREVSLlNPTElELlJJR0hULCB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5zdHlsZS5ib3JkZXJSaWdodENvbG9yLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgYm94W3ldW3dpZHRoIC0gMV0gPSByaWdodEJvcmRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gYm94XG4gICAgICogQHBhcmFtIHtPYmplY3RDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gICAgICovXG4gICAgZmlsbFRvcEJvcmRlcihib3gsIGNsaWVudFJlY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0eWxlLmJvcmRlclRvcFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9wQm9yZGVyID0gbmV3IFR1aVN5bWJvbChCT1JERVIuU09MSUQuVE9QLCB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5zdHlsZS5ib3JkZXJUb3BDb2xvcixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgd2lkdGggLSAxOyB4KyspIHtcbiAgICAgICAgICAgIGJveFswXVt4XSA9IHRvcEJvcmRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvcCBMZWZ0IGNvcm5lclxuICAgICAgICBpZiAoYm94WzBdWzBdLmNoYXIgPT09IEJPUkRFUi5TT0xJRC5MRUZUKSB7XG4gICAgICAgICAgICBib3hbMF1bMF0gPSBuZXcgVHVpU3ltYm9sKEJPUkRFUi5TT0xJRC5UT1BfTEVGVCwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlLmJvcmRlclRvcENvbG9yLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9wIFJpZ2h0IGNvcm5lclxuICAgICAgICBpZiAoYm94WzBdW3dpZHRoIC0gMV0uY2hhciA9PT0gQk9SREVSLlNPTElELlJJR0hUKSB7XG4gICAgICAgICAgICBib3hbMF1bd2lkdGggLSAxXSA9IG5ldyBUdWlTeW1ib2woQk9SREVSLlNPTElELlRPUF9SSUdIVCwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlLmJvcmRlclRvcENvbG9yLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBib3hcbiAgICAgKiBAcGFyYW0ge09iamVjdENsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAgICAgKi9cbiAgICBmaWxsQm90dG9tQm9yZGVyKGJveCwgY2xpZW50UmVjdCkge1xuICAgICAgICBpZiAoIXRoaXMuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib3R0b21Cb3JkZXIgPSBuZXcgVHVpU3ltYm9sKEJPUkRFUi5TT0xJRC5CT1RUT00sIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPCB3aWR0aCAtIDE7IHgrKykge1xuICAgICAgICAgICAgYm94W2hlaWdodCAtIDFdW3hdID0gYm90dG9tQm9yZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm90dG9tIExlZnQgY29ybmVyXG4gICAgICAgIGlmIChib3hbaGVpZ2h0IC0gMV1bMF0uY2hhciA9PT0gQk9SREVSLlNPTElELkxFRlQpIHtcbiAgICAgICAgICAgIGJveFtoZWlnaHQgLSAxXVswXSA9IG5ldyBUdWlTeW1ib2woQk9SREVSLlNPTElELkJPVFRPTV9MRUZULCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuc3R5bGUuYm9yZGVyVG9wQ29sb3IsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCb3R0b20gUmlnaHQgY29ybmVyXG4gICAgICAgIGlmIChib3hbaGVpZ2h0IC0gMV1bd2lkdGggLSAxXS5jaGFyID09PSBCT1JERVIuU09MSUQuUklHSFQpIHtcbiAgICAgICAgICAgIGJveFtoZWlnaHQgLSAxXVt3aWR0aCAtIDFdID0gbmV3IFR1aVN5bWJvbChCT1JERVIuU09MSUQuQk9UVE9NX1JJR0hULCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuc3R5bGUuYm9yZGVyVG9wQ29sb3IsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdENsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNIb3Jpem9udGFsU2Nyb2xsQmFycyhjbGllbnRSZWN0KSB7XG4gICAgICAgIHZhciAgb3ZlcmZsb3cgPSB0aGlzLnN0eWxlLm92ZXJmbG93O1xuXG4gICAgICAgIGlmIChvdmVyZmxvdyA9PT0gJ3Zpc2libGUnIHx8IG92ZXJmbG93ID09PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsLnNjcm9sbFdpZHRoID4gY2xpZW50UmVjdC53aWR0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdENsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNWZXJ0aWNhbFNjcm9sbEJhcnMoY2xpZW50UmVjdCkge1xuICAgICAgICB2YXIgIG92ZXJmbG93ID0gdGhpcy5zdHlsZS5vdmVyZmxvdztcblxuICAgICAgICBpZiAob3ZlcmZsb3cgPT09ICd2aXNpYmxlJyB8fCBvdmVyZmxvdyA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbC5zY3JvbGxIZWlnaHQgPiBjbGllbnRSZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYm9yZGVyU2l6ZVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VHVpQm9yZGVyU2l6ZShib3JkZXJTaXplKSB7XG4gICAgICAgIGlmIChib3JkZXJTaXplID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICAgICAqIEBwYXJhbSB7T2JqZWN0Q2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICAgICAqL1xuICAgIHJlbmRlclZlcnRpY2FsU2Nyb2xsQmFyKGJveCwgY2xpZW50UmVjdCkge1xuICAgICAgICAvKiBqc2hpbnQgbWF4c3RhdGVtZW50czogMjAsIG1heGNvbXBsZXhpdHk6IDcgKi9cbiAgICAgICAgaWYgKCF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsQmFycyhjbGllbnRSZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldFR1aUJvcmRlclNpemUodGhpcy5zdHlsZS5ib3JkZXJSaWdodFdpZHRoKTtcbiAgICAgICAgdmFyIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRUdWlCb3JkZXJTaXplKHRoaXMuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgICAgICB2YXIgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldFR1aUJvcmRlclNpemUodGhpcy5zdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVNjcm9sbEhlaWdodCA9IGhlaWdodCAtIGJvcmRlckJvdHRvbVdpZHRoIC0gYm9yZGVyVG9wV2lkdGg7XG4gICAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSB0aGlzLnNjcm9sbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgICAgICAgdmFyIHRyYWNrSGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5mbG9vcigoaGVpZ2h0IC8gc2Nyb2xsSGVpZ2h0KSAqIGF2YWlsYWJsZVNjcm9sbEhlaWdodCksIDEpO1xuICAgICAgICB2YXIgdHJhY2tUb3AgPSBNYXRoLmZsb29yKChzY3JvbGxUb3AgLyBzY3JvbGxIZWlnaHQpICogYXZhaWxhYmxlU2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgdmFyIHRyYWNrQm90dG9tID0gdHJhY2tUb3AgKyB0cmFja0hlaWdodDtcblxuICAgICAgICB2YXIgc2Nyb2xsQmFyQmFja2dyb3VuZCA9IG5ldyBUdWlTeW1ib2woU0NST0xMLkJBQ0tHUk9VTkQsIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlLmNvbG9yLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2Nyb2xsQmFyVHJhY2sgPSBuZXcgVHVpU3ltYm9sKFNDUk9MTC5UUkFDSywge1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuc3R5bGUuY29sb3IsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpbGwgYW5kIFRyYWNrXG4gICAgICAgIGZvciAodmFyIHkgPSBib3JkZXJUb3BXaWR0aDsgeSA8IGJveC5sZW5ndGggLSBib3JkZXJCb3R0b21XaWR0aDsgeSsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gYm94W3ldO1xuICAgICAgICAgICAgdmFyIHNjcm9sbEJhclBvc2l0aW9uID0gcm93Lmxlbmd0aCAtIGJvcmRlclJpZ2h0V2lkdGggLSAxO1xuICAgICAgICAgICAgaWYgKHkgPj0gdHJhY2tUb3AgJiYgeSA8PSB0cmFja0JvdHRvbSkge1xuICAgICAgICAgICAgICAgIHJvd1tzY3JvbGxCYXJQb3NpdGlvbl0gPSBzY3JvbGxCYXJUcmFjaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93W3Njcm9sbEJhclBvc2l0aW9uXSA9IHNjcm9sbEJhckJhY2tncm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICAgICAqIEBwYXJhbSB7T2JqZWN0Q2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICAgICAqL1xuICAgIHJlbmRlckhvcml6b250YWxTY3JvbGxCYXIoYm94LCBjbGllbnRSZWN0KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsQmFycyhjbGllbnRSZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdENsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGhhc0xlZnRCb3JkZXJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGhhc1JpZ2h0Qm9yZGVyXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgcmVuZGVyQm94KGNsaWVudFJlY3QsIHtoYXNMZWZ0Qm9yZGVyLCBoYXNSaWdodEJvcmRlcn0pIHtcbiAgICAgICAgdmFyIGJveCA9IHRoaXMuZmlsbEJveChjbGllbnRSZWN0KTtcbiAgICAgICAgaWYgKGhhc0xlZnRCb3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbExlZnRCb3JkZXIoYm94LCBjbGllbnRSZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzUmlnaHRCb3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbFJpZ2h0Qm9yZGVyKGJveCwgY2xpZW50UmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWxsVG9wQm9yZGVyKGJveCwgY2xpZW50UmVjdCk7XG4gICAgICAgIHRoaXMuZmlsbEJvdHRvbUJvcmRlcihib3gsIGNsaWVudFJlY3QpO1xuICAgICAgICB0aGlzLnJlbmRlclZlcnRpY2FsU2Nyb2xsQmFyKGJveCwgY2xpZW50UmVjdCk7XG4gICAgICAgIGJveCA9IHRoaXMuc2hpZnRCb3goYm94LCBjbGllbnRSZWN0KTtcblxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+Pn1cbiAgICAgKi9cbiAgICByZW5kZXJCb3hlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50UmVjdHMubWFwKChjbGllbnRSZWN0LCBpbmRleCwge2xlbmd0aH0pID0+IHtcbiAgICAgICAgICAgIHZhciBoYXNMZWZ0Qm9yZGVyID0gaW5kZXggPT09IDA7XG4gICAgICAgICAgICB2YXIgaGFzUmlnaHRCb3JkZXIgPSBpbmRleCA9PT0gbGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckJveChjbGllbnRSZWN0LCB7aGFzTGVmdEJvcmRlciwgaGFzUmlnaHRCb3JkZXJ9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYm90dG9tXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvcFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0XG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGNyb3BCb3hVc2luZyh7Ym90dG9tLCByaWdodCwgdG9wLCBsZWZ0fSkge1xuICAgICAgICAvKiBqc2hpbnQgbWF4Y29tcGxleGl0eTogNyAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBib3hcbiAgICAgICAgICogQHJldHVybiB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjcm9wQm94KGJveCkge1xuICAgICAgICAgICAgaWYgKGJvdHRvbSA8PSAwIHx8IHJpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1tdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjcm9wcGVkQm94ID0gbmV3IEFycmF5KGJvdHRvbSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHkgPSB0b3A7IHkgPCBib3gubGVuZ3RoICYmIHkgPCBib3R0b207IHkrKykge1xuICAgICAgICAgICAgICAgIHZhciByb3cgPSBib3hbeV07XG4gICAgICAgICAgICAgICAgY3JvcHBlZEJveFt5XSA9IG5ldyBBcnJheShyaWdodCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJvdykge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gbGVmdDsgeCA8IHJvdy5sZW5ndGggJiYgeCA8IHJpZ2h0OyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3JvcHBlZEJveFt5XVt4XSA9IHJvd1t4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjcm9wcGVkQm94O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gY3JvcCBmdW5jdGlvblxuICAgICAqL1xuICAgIGNyb3BCb3hGYWN0b3J5KCkge1xuICAgICAgICAvLyBEbyBub3QgY3JvcFxuICAgICAgICBpZiAodGhpcy5zdHlsZS5vdmVyZmxvdyA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gKGJveCkgPT4gYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvdHRvbSA9IHRoaXMuYm91bmRpbmdCb3guYm90dG9tIC0gdGhpcy5nZXRUdWlCb3JkZXJTaXplKHRoaXMuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLmJvdW5kaW5nQm94LnJpZ2h0IC0gdGhpcy5nZXRUdWlCb3JkZXJTaXplKHRoaXMuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmJvdW5kaW5nQm94LnRvcCArIHRoaXMuZ2V0VHVpQm9yZGVyU2l6ZSh0aGlzLnN0eWxlLmJvcmRlclRvcFdpZHRoKTtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmJvdW5kaW5nQm94LmxlZnQgKyB0aGlzLmdldFR1aUJvcmRlclNpemUodGhpcy5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNyb3BCb3hVc2luZyh7Ym90dG9tLCByaWdodCwgdG9wLCBsZWZ0fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PEFycmF5PChUdWlTeW1ib2wpPj4+fVxuICAgICAqL1xuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0udG9BcnJheSgpKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmNyb3BCb3hGYWN0b3J5KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIGJveGVzID0gdGhpcy5yZW5kZXJCb3hlcygpO1xuICAgICAgICB2YXIgY29udGVudCA9IHRoaXMucmVuZGVyQ29udGVudCgpO1xuXG4gICAgICAgIHJldHVybiBib3hlcy5jb25jYXQoY29udGVudCkucmVkdWNlKHRoaXMubWVyZ2VCb3hlcy5iaW5kKHRoaXMpLCBbXSk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvc2VyaWFsaXplcnMvZWxlbWVudC1zZXJpYWxpemVyLmpzXG4gKiovIiwiaW1wb3J0IEVsZW1lbnRTZXJpYWxpemVyIGZyb20gJy4vZWxlbWVudC1zZXJpYWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRTZXJpYWxpemVyIGV4dGVuZHMgRWxlbWVudFNlcmlhbGl6ZXIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VHVpRWxlbWVudH0gdHVpRWxlbWVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodHVpRWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcih0dWlFbGVtZW50LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSB0dWlFbGVtZW50LnByb3BlcnRpZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWF4IHdpZHRoIG9mIGlucHV0IHRleHQgaW4gdmlld3BvcnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW5wdXRNYXhDb250ZW50V2lkdGgoKSB7XG4gICAgICAgIHZhciBsZWZ0SW5wdXRCb3JkZXIgPSB0aGlzLnN0eWxlLmJvcmRlckxlZnRXaWR0aCArIHRoaXMuc3R5bGUucGFkZGluZ0xlZnQ7XG4gICAgICAgIHZhciByaWdodElucHV0Qm9yZGVyID0gdGhpcy5zdHlsZS5ib3JkZXJSaWdodFdpZHRoICsgdGhpcy5zdHlsZS5wYWRkaW5nUmlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRpbmdCb3gud2lkdGggLSBsZWZ0SW5wdXRCb3JkZXIgLSByaWdodElucHV0Qm9yZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBib3VuZGluZyBib3ggb2YgaW5wdXQncyB2YWx1ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdENsaWVudFJlY3R9XG4gICAgICovXG4gICAgZ2V0SW5wdXRUZXh0Qm91bmRpbmdCb3goKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IE51bWJlcih0aGlzLnByb3BlcnRpZXMudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IDE7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5ib3VuZGluZ0JveC5sZWZ0O1xuICAgICAgICB2YXIgdG9wID0gdGhpcy5ib3VuZGluZ0JveC50b3A7XG5cbiAgICAgICAgbGVmdCArPSB0aGlzLnN0eWxlLmJvcmRlckxlZnRXaWR0aDtcbiAgICAgICAgbGVmdCArPSB0aGlzLnN0eWxlLnBhZGRpbmdMZWZ0O1xuXG4gICAgICAgIHRvcCArPSB0aGlzLnN0eWxlLmJvcmRlclRvcFdpZHRoO1xuICAgICAgICB0b3AgKz0gdGhpcy5zdHlsZS5wYWRkaW5nVG9wO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgYm90dG9tOiB0b3AgKyBoZWlnaHQsXG4gICAgICAgICAgICByaWdodDogbGVmdCArIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJhbmdlIHdoaWNoIHNob3VsZCBmaXQgaW50byBpbnB1dFxuICAgICAqXG4gICAgICogQHJldHVybnMge3tzdGFydDogTnVtYmVyLCBlbmQ6IE51bWJlcn19XG4gICAgICovXG4gICAgZ2V0VmlzaWJsZVRleHRSYW5nZSgpIHtcbiAgICAgICAgLyoganNoaW50IG1heHN0YXRlbWVudHM6IDIwICovXG4gICAgICAgIHZhciB7dmFsdWUsIHNlbGVjdGlvbkVuZH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgIHZhciBpbnB1dENvbnRlbnRXaWR0aCA9IHRoaXMuZ2V0SW5wdXRNYXhDb250ZW50V2lkdGgoKTtcbiAgICAgICAgdmFyIGhhbGZPZklucHV0Q29udGVudFdpZHRoID0gaW5wdXRDb250ZW50V2lkdGggLyAyO1xuICAgICAgICB2YXIgc3RhcnQgPSBNYXRoLmZsb29yKHNlbGVjdGlvbkVuZCAtIGhhbGZPZklucHV0Q29udGVudFdpZHRoKSArIDE7XG4gICAgICAgIHZhciBlbmQgPSBNYXRoLmNlaWwoc2VsZWN0aW9uRW5kICsgaGFsZk9mSW5wdXRDb250ZW50V2lkdGgpICsgMTtcblxuICAgICAgICAvLyBDdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgYm94XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IHNlbGVjdGlvbkVuZCAmJiB2YWx1ZS5sZW5ndGggKyAxID4gaW5wdXRDb250ZW50V2lkdGgpIHtcbiAgICAgICAgICAgIGVuZCAtPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgZW5kIC09IHN0YXJ0O1xuICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA+IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RhcnQgLT0gKGVuZCAtIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICBlbmQgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBlbmRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdENsaWVudFJlY3R9IHRleHRCb3VuZGluZ0JveFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2aXNpYmxlVGV4dFJhbmdlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZpc2libGVUZXh0UmFuZ2Uuc3RhcnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmlzaWJsZVRleHRSYW5nZS5lbmRcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8VHVpU3ltYm9sPj59XG4gICAgICovXG4gICAgcmVuZGVyQ3Vyc29yQm94KHRleHRCb3VuZGluZ0JveCwgdmlzaWJsZVRleHRSYW5nZSkge1xuICAgICAgICAvLyBSZW5kZXIgY3Vyc29yXG4gICAgICAgIHZhciB7dmFsdWUsIHNlbGVjdGlvbkVuZH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgIHZhciBjdXJzb3JXaWR0aCA9IDE7XG4gICAgICAgIHZhciB0ZXh0QXRDdXJzb3IgPSB2YWx1ZS5zdWJzdHIoc2VsZWN0aW9uRW5kLCBjdXJzb3JXaWR0aCk7XG5cbiAgICAgICAgLy8gRW5kIG9mIHRleHRcbiAgICAgICAgaWYgKHRleHRBdEN1cnNvciA9PT0gJycpIHtcbiAgICAgICAgICAgIHRleHRBdEN1cnNvciA9ICcgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJzb3JMZWZ0ID0gdGV4dEJvdW5kaW5nQm94LmxlZnQgKyBzZWxlY3Rpb25FbmQgLSB2aXNpYmxlVGV4dFJhbmdlLnN0YXJ0O1xuICAgICAgICB2YXIgY3Vyc29yUmlnaHQgPSBjdXJzb3JMZWZ0ICsgY3Vyc29yV2lkdGg7XG5cbiAgICAgICAgdmFyIGNsaWVudFJlY3QgPSB7XG4gICAgICAgICAgICBsZWZ0OiBjdXJzb3JMZWZ0LFxuICAgICAgICAgICAgdG9wOiB0ZXh0Qm91bmRpbmdCb3gudG9wLFxuICAgICAgICAgICAgYm90dG9tOiB0ZXh0Qm91bmRpbmdCb3guYm90dG9tLFxuICAgICAgICAgICAgcmlnaHQ6IGN1cnNvclJpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiB0ZXh0Qm91bmRpbmdCb3guaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGN1cnNvcldpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsbENsaWVudFJlY3RzV2l0aFRleHQoe1xuICAgICAgICAgICAgY29udGVudDogdGV4dEF0Q3Vyc29yLFxuXG4gICAgICAgICAgICAvLyBJbnZlcnQgYmFja2dyb3VuZCBhbmQgdGV4dCBjb2xvclxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlLmNvbG9yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpZW50UmVjdHM6IFtjbGllbnRSZWN0XVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NsaWVudFJlY3R9IHRleHRCb3VuZGluZ0JveFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2aXNpYmxlVGV4dFJhbmdlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZpc2libGVUZXh0UmFuZ2Uuc3RhcnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmlzaWJsZVRleHRSYW5nZS5lbmRcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8VHVpU3ltYm9sPj59XG4gICAgICovXG4gICAgcmVuZGVySW5wdXRUZXh0Qm94KHRleHRCb3VuZGluZ0JveCwgdmlzaWJsZVRleHRSYW5nZSkge1xuICAgICAgICB2YXIgY29udGVudCA9IHRoaXMucHJvcGVydGllcy52YWx1ZS5zbGljZSh2aXNpYmxlVGV4dFJhbmdlLnN0YXJ0LCB2aXNpYmxlVGV4dFJhbmdlLmVuZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsbENsaWVudFJlY3RzV2l0aFRleHQoe1xuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlLFxuICAgICAgICAgICAgY2xpZW50UmVjdHM6IFt0ZXh0Qm91bmRpbmdCb3hdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgLy8gQ29tcHV0ZSBjb21tb24gbWVhc3VyZW1lbnRzXG4gICAgICAgIHZhciB0ZXh0Qm91bmRpbmdCb3ggPSB0aGlzLmdldElucHV0VGV4dEJvdW5kaW5nQm94KCk7XG4gICAgICAgIHZhciB2aXNpYmxlVGV4dFJhbmdlID0gdGhpcy5nZXRWaXNpYmxlVGV4dFJhbmdlKCk7XG5cbiAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgIHZhciBpbnB1dEJveCA9IHN1cGVyLnNlcmlhbGl6ZSgpO1xuICAgICAgICB2YXIgdGV4dEJveCA9IHRoaXMucmVuZGVySW5wdXRUZXh0Qm94KHRleHRCb3VuZGluZ0JveCwgdmlzaWJsZVRleHRSYW5nZSk7XG4gICAgICAgIHZhciBjdXJzb3JCb3ggPSB0aGlzLnJlbmRlckN1cnNvckJveCh0ZXh0Qm91bmRpbmdCb3gsIHZpc2libGVUZXh0UmFuZ2UpO1xuXG4gICAgICAgIGlucHV0Qm94ID0gdGhpcy5tZXJnZUJveGVzKGlucHV0Qm94LCB0ZXh0Qm94KTtcbiAgICAgICAgaW5wdXRCb3ggPSB0aGlzLm1lcmdlQm94ZXMoaW5wdXRCb3gsIGN1cnNvckJveCk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0Qm94O1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3NlcmlhbGl6ZXJzL2lucHV0LXNlcmlhbGl6ZXIuanNcbiAqKi8iLCJ2YXIgYW5zaUNvbG9ycyA9IHtcbiAgICAvLyAjIFN0eWxlc1xuICAgIGJvbGQ6IFsnXFx4MUJbMW0nLCAnXFx4MUJbMjJtJ10sXG4gICAgaXRhbGljOiBbJ1xceDFCWzNtJywgJ1xceDFCWzIzbSddLFxuICAgIHVuZGVybGluZTogWydcXHgxQls0bScsICdcXHgxQlsyNG0nXSxcbiAgICBzdHJpa2V0aHJvdWdoOiBbJ1xceDFCWzltJywgJ1xceDFCWzI5bSddLFxuXG4gICAgLy8gIyBUZXh0IGNvbG9yc1xuICAgIC8vICMjIEdyYXlzY2FsZVxuICAgICdyZ2IoMjU1LCAyNTUsIDI1NSknOiBbJ1xceDFCWzM3bScsICdcXHgxQlszOW0nXSxcbiAgICAncmdiKDEyOCwgMTI4LCAxMjgpJzogWydcXHgxQls5MG0nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigwLCAwLCAwKSc6IFsnXFx4MUJbMzBtJywgJ1xceDFCWzM5bSddLFxuICAgIC8vICMjIENvbG9yc1xuICAgICdyZ2IoMCwgMCwgMjU1KSc6IFsnXFx4MUJbMzRtJywgJ1xceDFCWzM5bSddLFxuICAgICdyZ2IoMCwgMjU1LCAyNTUpJzogWydcXHgxQlszNm0nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigwLCAxMjgsIDApJzogWydcXHgxQlszMm0nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigyNTUsIDAsIDI1NSknOiBbJ1xceDFCWzM1bScsICdcXHgxQlszOW0nXSxcbiAgICAncmdiKDI1NSwgMCwgMCknOiBbJ1xceDFCWzMxbScsICdcXHgxQlszOW0nXSxcbiAgICAncmdiKDI1NSwgMjU1LCAwKSc6IFsnXFx4MUJbMzNtJywgJ1xceDFCWzM5bSddLFxuICAgICdyZ2JhKDAsIDAsIDAsIDApJzogWycnLCAnJ10sXG5cbiAgICAvLyAjIEJhY2tncm91bmQgY29sb3JzXG4gICAgLy8gIyMgR3JheXNjYWxlXG4gICAgJ3JnYigyNTUsIDI1NSwgMjU1KUJHJzogWydcXHgxQls0N20nLCAnXFx4MUJbNDltJ10sXG4gICAgJ3JnYigwLCAwLCAwKUJHJzogWydcXHgxQls0OTs1OzhtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMTI4LCAxMjgsIDEyOClCRyc6IFsnXFx4MUJbNDBtJywgJ1xceDFCWzQ5bSddLFxuICAgIC8vICMjIENvbG9yc1xuICAgICdyZ2IoMCwgMCwgMjU1KUJHJzogWydcXHgxQls0NG0nLCAnXFx4MUJbNDltJ10sXG4gICAgJ3JnYigwLCAyNTUsIDI1NSlCRyc6IFsnXFx4MUJbNDZtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMCwgMTI4LCAwKUJHJzogWydcXHgxQls0Mm0nLCAnXFx4MUJbNDltJ10sXG4gICAgJ3JnYigyNTUsIDAsIDI1NSlCRyc6IFsnXFx4MUJbNDVtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMjU1LCAwLCAwKUJHJzogWydcXHgxQls0MW0nLCAnXFx4MUJbNDltJ10sXG4gICAgJ3JnYigyNTUsIDI1NSwgMClCRyc6IFsnXFx4MUJbNDNtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2JhKDAsIDAsIDAsIDApQkcnOiBbJycsICcnXVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXX0gc3R5bGVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiB3cmFwU3RyaW5nKHN0cmluZywgc3R5bGUpIHtcbiAgICB2YXIgcGFpciA9IGFuc2lDb2xvcnNbc3R5bGVdO1xuXG4gICAgaWYgKCFwYWlyKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhaXJbMF0gKyBzdHJpbmcgKyBwYWlyWzFdO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1R1aVN5bWJvbH0gc3ltYm9sXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmZ1bmN0aW9uIGFuc2lTeW1ib2woc3ltYm9sKSB7XG4gICAgdmFyIGNoYXJhY3RlciA9IHdyYXBTdHJpbmcoc3ltYm9sLmNoYXIsIHN5bWJvbC5zdHlsZS5jb2xvcik7XG4gICAgY2hhcmFjdGVyID0gd3JhcFN0cmluZyhjaGFyYWN0ZXIsIHN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgKyAnQkcnKTtcblxuICAgIGlmIChzeW1ib2wuc3R5bGUuZm9udFN0eWxlID09PSAnaXRhbGljJykge1xuICAgICAgICBjaGFyYWN0ZXIgPSB3cmFwU3RyaW5nKGNoYXJhY3RlciwgJ2l0YWxpYycpO1xuICAgIH1cblxuICAgIGlmIChzeW1ib2wuc3R5bGUuZm9udFdlaWdodCA9PT0gJ2JvbGQnKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHdyYXBTdHJpbmcoY2hhcmFjdGVyLCAnYm9sZCcpO1xuICAgIH1cblxuICAgIGlmIChzeW1ib2wuc3R5bGUudGV4dERlY29yYXRpb24gPT09ICd1bmRlcmxpbmUnKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHdyYXBTdHJpbmcoY2hhcmFjdGVyLCAndW5kZXJsaW5lJyk7XG4gICAgfVxuXG4gICAgaWYgKHN5bWJvbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gJ2xpbmUtdGhyb3VnaCcpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gd3JhcFN0cmluZyhjaGFyYWN0ZXIsICdzdHJpa2V0aHJvdWdoJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYXJhY3Rlcjtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBib3hcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbnNpKGJveCkge1xuICAgIHJldHVybiBib3gubWFwKChyb3cpID0+IHJvdy5tYXAoYW5zaVN5bWJvbCkuam9pbignJykpLmpvaW4oJ1xcbicpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvcmVuZGVycy9hbnNpLmpzXG4gKiovIiwiaW1wb3J0IHNlcmlhbGl6ZVN0eWxlIGZyb20gJy4vY29tbW9uL3NlcmlhbGl6ZS1zdHlsZSc7XG5cbi8qKlxuICogQHBhcmFtIHtUdWlTeW1ib2x9IHN5bWJvbFxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5mdW5jdGlvbiBjaHJvbWVTeW1ib2woc3ltYm9sKSB7XG4gICAgdmFyIGNoYXIgPSBgJWMke3N5bWJvbC5jaGFyfWA7XG4gICAgdmFyIHN0eWxlID0gc2VyaWFsaXplU3R5bGUoc3ltYm9sLnN0eWxlKTtcblxuICAgIHJldHVybiBbY2hhciwgc3R5bGVdO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hyb21lKGJveCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gW107XG4gICAgdmFyIHN0eWxlcyA9IFtdO1xuXG4gICAgYm94LmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICB2YXIgcm93Q2hhcmFjdGVycyA9ICcnO1xuICAgICAgICB2YXIgcm93U3R5bGVzID0gW107XG5cbiAgICAgICAgcm93LmZvckVhY2goKHN5bWJvbCkgPT4ge1xuICAgICAgICAgICAgdmFyIFtjaGFyYWN0ZXIsIHN0eWxlXSA9IGNocm9tZVN5bWJvbChzeW1ib2wpO1xuXG4gICAgICAgICAgICByb3dDaGFyYWN0ZXJzICs9IGNoYXJhY3RlcjtcbiAgICAgICAgICAgIHJvd1N0eWxlcy5wdXNoKHN0eWxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hhcmFjdGVycy5wdXNoKHJvd0NoYXJhY3RlcnMpO1xuICAgICAgICBzdHlsZXMucHVzaC5hcHBseShzdHlsZXMsIHJvd1N0eWxlcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW2NoYXJhY3RlcnMuam9pbignXFxuJyldLmNvbmNhdChzdHlsZXMpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvcmVuZGVycy9jaHJvbWUuanNcbiAqKi8iLCJpbXBvcnQgc2VyaWFsaXplU3R5bGUgZnJvbSAnLi9jb21tb24vc2VyaWFsaXplLXN0eWxlJztcbmltcG9ydCB7QWxsSHRtbEVudGl0aWVzfSBmcm9tICdodG1sLWVudGl0aWVzJztcblxubGV0IGVudGl0aWVzID0gbmV3IEFsbEh0bWxFbnRpdGllcygpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1R1aVN5bWJvbH0gc3ltYm9sXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmZ1bmN0aW9uIGh0bWxTeW1ib2woc3ltYm9sKSB7XG4gICAgdmFyIHN0eWxlID0gc2VyaWFsaXplU3R5bGUoc3ltYm9sLnN0eWxlKTtcblxuICAgIHJldHVybiBgPHNwYW4gc3R5bGU9XCIke3N0eWxlfVwiPiR7ZW50aXRpZXMuZW5jb2RlKHN5bWJvbC5jaGFyKX08L3NwYW4+YDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBib3hcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBodG1sKGJveCkge1xuICAgIHJldHVybiBib3gubWFwKChyb3cpID0+IHJvdy5tYXAoaHRtbFN5bWJvbCkuam9pbignJykpLmpvaW4oJ1xcbicpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvcmVuZGVycy9odG1sLmpzXG4gKiovIiwiLyoqXG4gKlxuICogQHBhcmFtIHtUdWlTeW1ib2x9IHN5bWJvbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gYXNjaWlTeW1ib2woc3ltYm9sKSB7XG4gICAgcmV0dXJuIHN5bWJvbC5jaGFyO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzY2lpKGJveCkge1xuICAgIHJldHVybiBib3gubWFwKChyb3cpID0+IHJvdy5tYXAoYXNjaWlTeW1ib2wpLmpvaW4oJycpKS5qb2luKCdcXG4nKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3JlbmRlcnMvYXNjaWkuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jb3JlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qc1wiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGFyciwgaSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfSBlbHNlIGlmIChfY29yZS4kZm9yLmlzSXRlcmFibGUoT2JqZWN0KGFycikpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jb3JlLiRmb3IuZ2V0SXRlcmF0b3IoYXJyKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgICAgX2Fyci5wdXNoKF9zdGVwLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWQtdG8tYXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtCQUNLR1JPVU5EX0NIQVJBQ1RFUn0gZnJvbSAnLi9jaGFyYWN0ZXJzJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHsoVHVpU3ltYm9sKX0gc3ltYm9sQVxuICogQHBhcmFtIHsoVHVpU3ltYm9sKX0gc3ltYm9sQlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lU3R5bGVTeW1ib2woc3ltYm9sQSwgc3ltYm9sQikge1xuICAgIHJldHVybiBzeW1ib2xBLnN0eWxlLmNvbG9yID09PSBzeW1ib2xCLnN0eWxlLmNvbG9yICYmXG4gICAgICAgIHN5bWJvbEEuc3R5bGUuZm9udFN0eWxlID09PSBzeW1ib2xCLnN0eWxlLmZvbnRTdHlsZSAmJlxuICAgICAgICBzeW1ib2xBLnN0eWxlLmZvbnRXZWlnaHQgPT09IHN5bWJvbEIuc3R5bGUuZm9udFdlaWdodCAmJlxuICAgICAgICBzeW1ib2xBLnN0eWxlLnRleHREZWNvcmF0aW9uID09PSBzeW1ib2xCLnN0eWxlLnRleHREZWNvcmF0aW9uICYmXG4gICAgICAgIHN5bWJvbEEuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBzeW1ib2xCLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhbnNwYXJlbnRDb2xvcihjb2xvcikge1xuICAgIHJldHVybiBjb2xvciA9PT0gJ3JnYmEoMCwgMCwgMCwgMCknIHx8IGNvbG9yID09PSAndHJhbnNwYXJlbnQnO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhclxuICogQHBhcmFtIHtDc3NTdHlsZX0gc3R5bGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFuc3BhcmVudENoYXJhY3RlcihjaGFyLCBzdHlsZSkge1xuICAgIHJldHVybiBjaGFyID09PSBCQUNLR1JPVU5EX0NIQVJBQ1RFUiAmJiBpc1RyYW5zcGFyZW50Q29sb3Ioc3R5bGUuYmFja2dyb3VuZENvbG9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHVpU3ltYm9sIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyXG4gICAgICogQHBhcmFtIHt7Y29sb3I6IHN0cmluZywgYmFja2dyb3VuZENvbG9yOiBzdHJpbmd9fSBzdHlsZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNoYXIsIHN0eWxlKSB7XG4gICAgICAgIGlmIChpc1RyYW5zcGFyZW50Q2hhcmFjdGVyKGNoYXIsIHN0eWxlKSkge1xuICAgICAgICAgICAgY2hhciA9IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFyID0gY2hhcjtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcjtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgZW1wdHlTeW1ib2wgPSBuZXcgVHVpU3ltYm9sKEJBQ0tHUk9VTkRfQ0hBUkFDVEVSLCB7XG4gICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJ1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi90dWktc3ltYm9sLmpzXG4gKiovIiwiaW1wb3J0IFR1aVN5bWJvbCBmcm9tICcuLi90dWktc3ltYm9sJztcbmltcG9ydCB7QkFDS0dST1VORF9DSEFSQUNURVJ9IGZyb20gJy4uL2NoYXJhY3RlcnMnO1xuaW1wb3J0IFNlcmlhbGl6ZXIgZnJvbSAnLi9zZXJpYWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dFNlcmlhbGl6ZXIgZXh0ZW5kcyBTZXJpYWxpemVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0dWlUZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHR1aVRleHQsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Q3NzU3R5bGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0eWxlID0gdHVpVGV4dC5zdHlsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3RDbGllbnRSZWN0W119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsaWVudFJlY3RzID0gdHVpVGV4dC5jbGllbnRSZWN0cztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3RDbGllbnRSZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ib3VuZGluZ0JveCA9IHR1aVRleHQuYm91bmRpbmdCb3g7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250ZW50ID0gdHVpVGV4dC5jb250ZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYm91bmRpbmdCb3gud2lkdGggPT09IDAgfHwgdGhpcy5ib3VuZGluZ0JveC5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbW11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsbENsaWVudFJlY3RzV2l0aFRleHQoe1xuICAgICAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGUsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICBjbGllbnRSZWN0czogdGhpcy5jbGllbnRSZWN0c1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9zZXJpYWxpemVycy90ZXh0LXNlcmlhbGl6ZXIuanNcbiAqKi8iLCIvKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNwZWNpZmljaXR5IG9mIENTUyBzZWxlY3RvcnNcbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyNzcGVjaWZpY2l0eVxuICpcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqICAtIHNlbGVjdG9yOiB0aGUgaW5wdXRcbiAqICAtIHNwZWNpZmljaXR5OiBlLmcuIDAsMSwwLDBcbiAqICAtIHBhcnRzOiBhcnJheSB3aXRoIGRldGFpbHMgYWJvdXQgZWFjaCBwYXJ0IG9mIHRoZSBzZWxlY3RvciB0aGF0IGNvdW50cyB0b3dhcmRzIHRoZSBzcGVjaWZpY2l0eVxuICovXG52YXIgU1BFQ0lGSUNJVFkgPSAoZnVuY3Rpb24oKSB7XG5cdHZhciBjYWxjdWxhdGUsXG5cdFx0Y2FsY3VsYXRlU2luZ2xlO1xuXG5cdGNhbGN1bGF0ZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0dmFyIHNlbGVjdG9ycyxcblx0XHRcdHNlbGVjdG9yLFxuXHRcdFx0aSxcblx0XHRcdGxlbixcblx0XHRcdHJlc3VsdHMgPSBbXTtcblxuXHRcdC8vIFNlcGFyYXRlIGlucHV0IGJ5IGNvbW1hc1xuXHRcdHNlbGVjdG9ycyA9IGlucHV0LnNwbGl0KCcsJyk7XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcblx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xuXHRcdFx0aWYgKHNlbGVjdG9yLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmVzdWx0cy5wdXNoKGNhbGN1bGF0ZVNpbmdsZShzZWxlY3RvcikpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9O1xuXG5cdC8vIENhbGN1bGF0ZSB0aGUgc3BlY2lmaWNpdHkgZm9yIGEgc2VsZWN0b3IgYnkgZGl2aWRpbmcgaXQgaW50byBzaW1wbGUgc2VsZWN0b3JzIGFuZCBjb3VudGluZyB0aGVtXG5cdGNhbGN1bGF0ZVNpbmdsZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0dmFyIHNlbGVjdG9yID0gaW5wdXQsXG5cdFx0XHRmaW5kTWF0Y2gsXG5cdFx0XHR0eXBlQ291bnQgPSB7XG5cdFx0XHRcdCdhJzogMCxcblx0XHRcdFx0J2InOiAwLFxuXHRcdFx0XHQnYyc6IDBcblx0XHRcdH0sXG5cdFx0XHRwYXJ0cyA9IFtdLFxuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyByZWd1bGFyIGV4cHJlc3Npb25zIGFzc3VtZSB0aGF0IHNlbGVjdG9ycyBtYXRjaGluZyB0aGUgcHJlY2VkaW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgaGF2ZSBiZWVuIHJlbW92ZWRcblx0XHRcdGF0dHJpYnV0ZVJlZ2V4ID0gLyhcXFtbXlxcXV0rXFxdKS9nLFxuXHRcdFx0aWRSZWdleCA9IC8oI1teXFxzXFwrPn5cXC5cXFs6XSspL2csXG5cdFx0XHRjbGFzc1JlZ2V4ID0gLyhcXC5bXlxcc1xcKz5+XFwuXFxbOl0rKS9nLFxuXHRcdFx0cHNldWRvRWxlbWVudFJlZ2V4ID0gLyg6OlteXFxzXFwrPn5cXC5cXFs6XSt8OmZpcnN0LWxpbmV8OmZpcnN0LWxldHRlcnw6YmVmb3JlfDphZnRlcikvZ2ksXG5cdFx0XHQvLyBBIHJlZ2V4IGZvciBwc2V1ZG8gY2xhc3NlcyB3aXRoIGJyYWNrZXRzIC0gOm50aC1jaGlsZCgpLCA6bnRoLWxhc3QtY2hpbGQoKSwgOm50aC1vZi10eXBlKCksIDpudGgtbGFzdC10eXBlKCksIDpsYW5nKClcblx0XHRcdHBzZXVkb0NsYXNzV2l0aEJyYWNrZXRzUmVnZXggPSAvKDpbXFx3LV0rXFwoW15cXCldKlxcKSkvZ2ksXG5cdFx0XHQvLyBBIHJlZ2V4IGZvciBvdGhlciBwc2V1ZG8gY2xhc3Nlcywgd2hpY2ggZG9uJ3QgaGF2ZSBicmFja2V0c1xuXHRcdFx0cHNldWRvQ2xhc3NSZWdleCA9IC8oOlteXFxzXFwrPn5cXC5cXFs6XSspL2csXG5cdFx0XHRlbGVtZW50UmVnZXggPSAvKFteXFxzXFwrPn5cXC5cXFs6XSspL2c7XG5cblx0XHQvLyBGaW5kIG1hdGNoZXMgZm9yIGEgcmVndWxhciBleHByZXNzaW9uIGluIGEgc3RyaW5nIGFuZCBwdXNoIHRoZWlyIGRldGFpbHMgdG8gcGFydHNcblx0XHQvLyBUeXBlIGlzIFwiYVwiIGZvciBJRHMsIFwiYlwiIGZvciBjbGFzc2VzLCBhdHRyaWJ1dGVzIGFuZCBwc2V1ZG8tY2xhc3NlcyBhbmQgXCJjXCIgZm9yIGVsZW1lbnRzIGFuZCBwc2V1ZG8tZWxlbWVudHNcblx0XHRmaW5kTWF0Y2ggPSBmdW5jdGlvbihyZWdleCwgdHlwZSkge1xuXHRcdFx0dmFyIG1hdGNoZXMsIGksIGxlbiwgbWF0Y2gsIGluZGV4LCBsZW5ndGg7XG5cdFx0XHRpZiAocmVnZXgudGVzdChzZWxlY3RvcikpIHtcblx0XHRcdFx0bWF0Y2hlcyA9IHNlbGVjdG9yLm1hdGNoKHJlZ2V4KTtcblx0XHRcdFx0Zm9yIChpID0gMCwgbGVuID0gbWF0Y2hlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuXHRcdFx0XHRcdHR5cGVDb3VudFt0eXBlXSArPSAxO1xuXHRcdFx0XHRcdG1hdGNoID0gbWF0Y2hlc1tpXTtcblx0XHRcdFx0XHRpbmRleCA9IHNlbGVjdG9yLmluZGV4T2YobWF0Y2gpO1xuXHRcdFx0XHRcdGxlbmd0aCA9IG1hdGNoLmxlbmd0aDtcblx0XHRcdFx0XHRwYXJ0cy5wdXNoKHtcblx0XHRcdFx0XHRcdHNlbGVjdG9yOiBtYXRjaCxcblx0XHRcdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0XHRcdFx0XHRsZW5ndGg6IGxlbmd0aFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdC8vIFJlcGxhY2UgdGhpcyBzaW1wbGUgc2VsZWN0b3Igd2l0aCB3aGl0ZXNwYWNlIHNvIGl0IHdvbid0IGJlIGNvdW50ZWQgaW4gZnVydGhlciBzaW1wbGUgc2VsZWN0b3JzXG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKG1hdGNoLCBBcnJheShsZW5ndGggKyAxKS5qb2luKCcgJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgbmVnYXRpb24gcHN1ZWRvLWNsYXNzICg6bm90KSBidXQgbGVhdmUgaXRzIGFyZ3VtZW50IGJlY2F1c2Ugc3BlY2lmaWNpdHkgaXMgY2FsY3VsYXRlZCBvbiBpdHMgYXJndW1lbnRcblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVnZXggPSAvOm5vdFxcKChbXlxcKV0qKVxcKS9nO1xuXHRcdFx0aWYgKHJlZ2V4LnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShyZWdleCwgJyAgICAgJDEgJyk7XG5cdFx0XHR9XG5cdFx0fSgpKTtcblxuXHRcdC8vIFJlbW92ZSBhbnl0aGluZyBhZnRlciBhIGxlZnQgYnJhY2UgaW4gY2FzZSBhIHVzZXIgaGFzIHBhc3RlZCBpbiBhIHJ1bGUsIG5vdCBqdXN0IGEgc2VsZWN0b3Jcblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVnZXggPSAve1teXSovZ20sXG5cdFx0XHRcdG1hdGNoZXMsIGksIGxlbiwgbWF0Y2g7XG5cdFx0XHRpZiAocmVnZXgudGVzdChzZWxlY3RvcikpIHtcblx0XHRcdFx0bWF0Y2hlcyA9IHNlbGVjdG9yLm1hdGNoKHJlZ2V4KTtcblx0XHRcdFx0Zm9yIChpID0gMCwgbGVuID0gbWF0Y2hlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuXHRcdFx0XHRcdG1hdGNoID0gbWF0Y2hlc1tpXTtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UobWF0Y2gsIEFycmF5KG1hdGNoLmxlbmd0aCArIDEpLmpvaW4oJyAnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KCkpO1xuXG5cdFx0Ly8gQWRkIGF0dHJpYnV0ZSBzZWxlY3RvcnMgdG8gcGFydHMgY29sbGVjdGlvbiAodHlwZSBiKVxuXHRcdGZpbmRNYXRjaChhdHRyaWJ1dGVSZWdleCwgJ2InKTtcblxuXHRcdC8vIEFkZCBJRCBzZWxlY3RvcnMgdG8gcGFydHMgY29sbGVjdGlvbiAodHlwZSBhKVxuXHRcdGZpbmRNYXRjaChpZFJlZ2V4LCAnYScpO1xuXG5cdFx0Ly8gQWRkIGNsYXNzIHNlbGVjdG9ycyB0byBwYXJ0cyBjb2xsZWN0aW9uICh0eXBlIGIpXG5cdFx0ZmluZE1hdGNoKGNsYXNzUmVnZXgsICdiJyk7XG5cblx0XHQvLyBBZGQgcHNldWRvLWVsZW1lbnQgc2VsZWN0b3JzIHRvIHBhcnRzIGNvbGxlY3Rpb24gKHR5cGUgYylcblx0XHRmaW5kTWF0Y2gocHNldWRvRWxlbWVudFJlZ2V4LCAnYycpO1xuXG5cdFx0Ly8gQWRkIHBzZXVkby1jbGFzcyBzZWxlY3RvcnMgdG8gcGFydHMgY29sbGVjdGlvbiAodHlwZSBiKVxuXHRcdGZpbmRNYXRjaChwc2V1ZG9DbGFzc1dpdGhCcmFja2V0c1JlZ2V4LCAnYicpO1xuXHRcdGZpbmRNYXRjaChwc2V1ZG9DbGFzc1JlZ2V4LCAnYicpO1xuXG5cdFx0Ly8gUmVtb3ZlIHVuaXZlcnNhbCBzZWxlY3RvciBhbmQgc2VwYXJhdG9yIGNoYXJhY3RlcnNcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoL1tcXCpcXHNcXCs+fl0vZywgJyAnKTtcblxuXHRcdC8vIFJlbW92ZSBhbnkgc3RyYXkgZG90cyBvciBoYXNoZXMgd2hpY2ggYXJlbid0IGF0dGFjaGVkIHRvIHdvcmRzXG5cdFx0Ly8gVGhlc2UgbWF5IGJlIHByZXNlbnQgaWYgdGhlIHVzZXIgaXMgbGl2ZS1lZGl0aW5nIHRoaXMgc2VsZWN0b3Jcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoL1sjXFwuXS9nLCAnICcpO1xuXG5cdFx0Ly8gVGhlIG9ubHkgdGhpbmdzIGxlZnQgc2hvdWxkIGJlIGVsZW1lbnQgc2VsZWN0b3JzICh0eXBlIGMpXG5cdFx0ZmluZE1hdGNoKGVsZW1lbnRSZWdleCwgJ2MnKTtcblxuXHRcdC8vIE9yZGVyIHRoZSBwYXJ0cyBpbiB0aGUgb3JkZXIgdGhleSBhcHBlYXIgaW4gdGhlIG9yaWdpbmFsIHNlbGVjdG9yXG5cdFx0Ly8gVGhpcyBpcyBuZWF0ZXIgZm9yIGV4dGVybmFsIGFwcHMgdG8gZGVhbCB3aXRoXG5cdFx0cGFydHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRyZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0b3I6IGlucHV0LFxuXHRcdFx0c3BlY2lmaWNpdHk6ICcwLCcgKyB0eXBlQ291bnQuYS50b1N0cmluZygpICsgJywnICsgdHlwZUNvdW50LmIudG9TdHJpbmcoKSArICcsJyArIHR5cGVDb3VudC5jLnRvU3RyaW5nKCksXG5cdFx0XHRwYXJ0czogcGFydHNcblx0XHR9O1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Y2FsY3VsYXRlOiBjYWxjdWxhdGVcblx0fTtcbn0oKSk7XG5cbi8vIEV4cG9ydCBmb3IgTm9kZSBKU1xuaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuXHRleHBvcnRzLmNhbGN1bGF0ZSA9IFNQRUNJRklDSVRZLmNhbGN1bGF0ZTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NwZWNpZmljaXR5L3NwZWNpZmljaXR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBjb25zdCBCQUNLR1JPVU5EX0NIQVJBQ1RFUiA9ICcgJztcblxuZXhwb3J0IGNvbnN0IEJPUkRFUiA9IHtcbiAgICBTT0xJRDoge1xuICAgICAgICBUT1A6ICfilIAnLFxuICAgICAgICBMRUZUOiAn4pSCJyxcbiAgICAgICAgUklHSFQ6ICfilIInLFxuICAgICAgICBCT1RUT006ICfilIAnLFxuICAgICAgICBUT1BfTEVGVDogJ+KUjCcsXG4gICAgICAgIFRPUF9SSUdIVDogJ+KUkCcsXG4gICAgICAgIEJPVFRPTV9MRUZUOiAn4pSUJyxcbiAgICAgICAgQk9UVE9NX1JJR0hUOiAn4pSYJ1xuICAgIH0sXG4gICAgRE9VQkxFOiB7XG4gICAgICAgIFRPUDogJ+KVkCcsXG4gICAgICAgIExFRlQ6ICfilZEnLFxuICAgICAgICBSSUdIVDogJ+KVkScsXG4gICAgICAgIEJPVFRPTTogJ+KVkCcsXG4gICAgICAgIFRPUF9MRUZUOiAn4pWUJyxcbiAgICAgICAgVE9QX1JJR0hUOiAn4pWXJyxcbiAgICAgICAgQk9UVE9NX0xFRlQ6ICfilZonLFxuICAgICAgICBCT1RUT01fUklHSFQ6ICfilZ0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFNDUk9MTCA9IHtcbiAgICBCQUNLR1JPVU5EOiAnwqYnLFxuICAgIFRSQUNLOiAn4pWRJ1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2NoYXJhY3RlcnMuanNcbiAqKi8iLCJpbXBvcnQgVHVpU3ltYm9sLCB7aXNUcmFuc3BhcmVudENvbG9yLCBlbXB0eVN5bWJvbH0gZnJvbSAnLi4vdHVpLXN5bWJvbCc7XG5pbXBvcnQge0JBQ0tHUk9VTkRfQ0hBUkFDVEVSfSBmcm9tICcuLi9jaGFyYWN0ZXJzJztcbmltcG9ydCB7QWxsSHRtbEVudGl0aWVzfSBmcm9tICdodG1sLWVudGl0aWVzJztcblxubGV0IGVudGl0aWVzID0gbmV3IEFsbEh0bWxFbnRpdGllcygpO1xuXG4vKipcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpYWxpemVyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1R1aU5vZGV9IHR1aU5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHR1aU5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gYm94XG4gICAgICogQHBhcmFtIHtDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgc2hpZnRCb3goYm94LCBjbGllbnRSZWN0KSB7XG4gICAgICAgIHZhciBsZWZ0ID0gY2xpZW50UmVjdC5sZWZ0O1xuICAgICAgICB2YXIgdG9wID0gY2xpZW50UmVjdC50b3A7XG4gICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IG5ldyBBcnJheShsZWZ0KTtcbiAgICAgICAgdmFyIHBhZGRpbmdUb3AgPSBuZXcgQXJyYXkoMCk7XG5cbiAgICAgICAgYm94LmZvckVhY2goZnVuY3Rpb24gc2hpZnRSb3cocm93KSB7XG4gICAgICAgICAgICByb3cudW5zaGlmdC5hcHBseShyb3csIHBhZGRpbmdMZWZ0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2hpbGUgKHRvcCA+IDApIHtcbiAgICAgICAgICAgIGJveC51bnNoaWZ0KHBhZGRpbmdUb3ApO1xuICAgICAgICAgICAgdG9wLS07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VHVpU3ltYm9sfHVuZGVmaW5lZH0gc3ltYm9sQVxuICAgICAqIEBwYXJhbSB7VHVpU3ltYm9sfHVuZGVmaW5lZH0gc3ltYm9sQlxuICAgICAqIEByZXR1cm5zIHtUdWlTeW1ib2x9XG4gICAgICovXG4gICAgbWVyZ2VTeW1ib2xzKHN5bWJvbEEsIHN5bWJvbEIpIHtcbiAgICAgICAgLyoganNoaW50IG1heGNvbXBsZXhpdHk6IDYsIG1heHN0YXRlbWVudHM6IDIwICovXG4gICAgICAgIGlmICh0eXBlb2Ygc3ltYm9sQSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHN5bWJvbEIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlTeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHN5bWJvbEEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sQjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygc3ltYm9sQiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2xBO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYXIgPSBzeW1ib2xCLmNoYXI7XG4gICAgICAgIHZhciB7Y29sb3IsIGZvbnRTdHlsZSwgZm9udFdlaWdodCwgdGV4dERlY29yYXRpb24sIGJhY2tncm91bmRDb2xvcn0gPSBzeW1ib2xCLnN0eWxlO1xuXG4gICAgICAgIGlmIChzeW1ib2xCLmNoYXIgPT09IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSKSB7XG4gICAgICAgICAgICBjaGFyID0gc3ltYm9sQS5jaGFyO1xuICAgICAgICAgICAgY29sb3IgPSBzeW1ib2xBLnN0eWxlLmNvbG9yO1xuICAgICAgICAgICAgZm9udFN0eWxlID0gc3ltYm9sQS5zdHlsZS5mb250U3R5bGU7XG4gICAgICAgICAgICBmb250V2VpZ2h0ID0gc3ltYm9sQS5zdHlsZS5mb250V2VpZ2h0O1xuICAgICAgICAgICAgdGV4dERlY29yYXRpb24gPSBzeW1ib2xBLnN0eWxlLnRleHREZWNvcmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzVHJhbnNwYXJlbnRDb2xvcihiYWNrZ3JvdW5kQ29sb3IpKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBzeW1ib2xBLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVHVpU3ltYm9sKGNoYXIsIHtjb2xvciwgYmFja2dyb3VuZENvbG9yLCBmb250U3R5bGUsIGZvbnRXZWlnaHQsIHRleHREZWNvcmF0aW9ufSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheTwoVHVpU3ltYm9sfHVuZGVmaW5lZCk+fSByb3dBXG4gICAgICogQHBhcmFtIHtBcnJheTwoVHVpU3ltYm9sfHVuZGVmaW5lZCk+fSByb3dCXG4gICAgICogQHJldHVybnMge0FycmF5PChUdWlTeW1ib2wpPn1cbiAgICAgKi9cbiAgICBtZXJnZUJveFJvdyhyb3dBLCByb3dCKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygcm93QSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHJvd0IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHJvd0EgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcm93QjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygcm93QiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByb3dBO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1heFdpZHRoID0gIE1hdGgubWF4KHJvd0EubGVuZ3RoLCByb3dCLmxlbmd0aCk7XG4gICAgICAgIHZhciByb3cgPSBuZXcgQXJyYXkobWF4V2lkdGgpO1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG1heFdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIHJvd1t4XSA9IHRoaXMubWVyZ2VTeW1ib2xzKHJvd0FbeF0sIHJvd0JbeF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGxheWVyQVxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gbGF5ZXJCXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgbWVyZ2VCb3hlcyhsYXllckEsIGxheWVyQikge1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgobGF5ZXJBLmxlbmd0aCwgbGF5ZXJCLmxlbmd0aCk7XG4gICAgICAgIHZhciBib3ggPSBuZXcgQXJyYXkobWF4SGVpZ2h0KTtcblxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IG1heEhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBib3hbeV0gPSB0aGlzLm1lcmdlQm94Um93KGxheWVyQVt5XSwgbGF5ZXJCW3ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdENsaWVudFJlY3R9IGNsaWVudFJlY3RzXG4gICAgICogQHBhcmFtIHtDc3NTdHlsZX0gc3R5bGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAgICAgKi9cbiAgICBmaWxsQ2xpZW50UmVjdHNXaXRoVGV4dCh7Y29udGVudCwgY2xpZW50UmVjdHMsIHN0eWxlfSkge1xuICAgICAgICB2YXIga2VlcFdoaXRlU3BhY2VzID0gc3R5bGUud2hpdGVTcGFjZSA9PT0gJ3ByZScgfHwgc3R5bGUud2hpdGVTcGFjZSA9PT0gJ3ByZS13cmFwJztcblxuICAgICAgICBpZiAoIWtlZXBXaGl0ZVNwYWNlcykge1xuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXMgdGV4dCB3aWxsIGJlIGZpbGxlZCBpbiBjbGllbnRSZWN0cyAtIG5vIHJlYXNvbiB0byByZXNwZWN0IG5ldyBsaW5lc1xuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXG58XFxyfFxcdi9nLCAnJyk7XG4gICAgICAgIGNvbnRlbnQgPSBlbnRpdGllcy5kZWNvZGUoY29udGVudCk7XG5cbiAgICAgICAgcmV0dXJuIGNsaWVudFJlY3RzLnJlZHVjZSgoYm94LCBjbGllbnRSZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgd2hpdGUtc3BhY2VzIGF0IHRoZSBsaW5lLWJyZWFrXG4gICAgICAgICAgICBpZiAoIWtlZXBXaGl0ZVNwYWNlcykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN5bWJvbHMgPSBBcnJheS5mcm9tKGNvbnRlbnQuc2xpY2UoMCwgY2xpZW50UmVjdC53aWR0aCksIChzeW1ib2wpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR1aVN5bWJvbChzeW1ib2wsIHN0eWxlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zbGljZShjbGllbnRSZWN0LndpZHRoKTtcblxuICAgICAgICAgICAgbGV0IHRleHRCb3ggPSBbc3ltYm9scy5zcGxpY2UoMCwgY2xpZW50UmVjdC53aWR0aCldO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VCb3hlcyhib3gsIHRoaXMuc2hpZnRCb3godGV4dEJveCwgY2xpZW50UmVjdCkpO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICByZXR1cm4gW1tdXTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9zZXJpYWxpemVycy9zZXJpYWxpemVyLmpzXG4gKiovIiwiY29uc3QgVEVYVF9TVFlMRVMgPSBbXG4gICAgWydjb2xvcicsICdjb2xvciddLFxuICAgIFsnZm9udC1zdHlsZScsICdmb250U3R5bGUnXSxcbiAgICBbJ2ZvbnQtd2VpZ2h0JywgJ2ZvbnRXZWlnaHQnXSxcbiAgICBbJ3RleHQtZGVjb3JhdGlvbicsICd0ZXh0RGVjb3JhdGlvbiddLFxuICAgIFsnYmFja2dyb3VuZC1jb2xvcicsICdiYWNrZ3JvdW5kQ29sb3InXVxuXTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sU3R5bGVcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlKHN5bWJvbFN0eWxlKSB7XG4gICAgcmV0dXJuIFRFWFRfU1RZTEVTLnJlZHVjZSgoc3R5bGUsIFtjc3NQcm9wZXJ0eSwgc3R5bGVQcm9wZXJ0eV0pID0+IHtcbiAgICAgICAgaWYgKHN5bWJvbFN0eWxlW3N0eWxlUHJvcGVydHldKSB7XG4gICAgICAgICAgICBzdHlsZSArPSBgJHtjc3NQcm9wZXJ0eX06JHtzeW1ib2xTdHlsZVtzdHlsZVByb3BlcnR5XX07YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9LCAnJyk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9yZW5kZXJzL2NvbW1vbi9zZXJpYWxpemUtc3R5bGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgWG1sRW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL3htbC1lbnRpdGllcy5qcycpLFxuICBIdG1sNEVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi9odG1sNC1lbnRpdGllcy5qcycpLFxuICBIdG1sNUVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi9odG1sNS1lbnRpdGllcy5qcycpLFxuICBBbGxIdG1sRW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw1LWVudGl0aWVzLmpzJylcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9odG1sLWVudGl0aWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBBTFBIQV9JTkRFWCA9IHtcbiAgICAnJmx0JzogJzwnLFxuICAgICcmZ3QnOiAnPicsXG4gICAgJyZxdW90JzogJ1wiJyxcbiAgICAnJmFwb3MnOiAnXFwnJyxcbiAgICAnJmFtcCc6ICcmJyxcbiAgICAnJmx0Oyc6ICc8JyxcbiAgICAnJmd0Oyc6ICc+JyxcbiAgICAnJnF1b3Q7JzogJ1wiJyxcbiAgICAnJmFwb3M7JzogJ1xcJycsXG4gICAgJyZhbXA7JzogJyYnXG59O1xuXG52YXIgQ0hBUl9JTkRFWCA9IHtcbiAgICA2MDogJ2x0JyxcbiAgICA2MjogJ2d0JyxcbiAgICAzNDogJ3F1b3QnLFxuICAgIDM5OiAnYXBvcycsXG4gICAgMzg6ICdhbXAnXG59O1xuXG52YXIgQ0hBUl9TX0lOREVYID0ge1xuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgICdcXCcnOiAnJmFwb3M7JyxcbiAgICAnJic6ICcmYW1wOydcbn07XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFhtbEVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzx8PnxcInwnfCYvZywgZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gQ0hBUl9TX0lOREVYW3NdO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjP1swLTlhLXpBLVpdKzs/L2csIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgaWYgKHMuY2hhckF0KDEpID09PSAnIycpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gcy5jaGFyQXQoMikudG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChzLnN1YnN0cigzKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChzLnN1YnN0cigyKSk7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihjb2RlKSB8fCBjb2RlIDwgLTMyNzY4IHx8IGNvZGUgPiA2NTUzNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBTFBIQV9JTkRFWFtzXSB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gQ0hBUl9JTkRFWFtjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5naHQgPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5naHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ2h0KSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhtbEVudGl0aWVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaHRtbC1lbnRpdGllcy9saWIveG1sLWVudGl0aWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIVE1MX0FMUEhBID0gWydhcG9zJywgJ25ic3AnLCAnaWV4Y2wnLCAnY2VudCcsICdwb3VuZCcsICdjdXJyZW4nLCAneWVuJywgJ2JydmJhcicsICdzZWN0JywgJ3VtbCcsICdjb3B5JywgJ29yZGYnLCAnbGFxdW8nLCAnbm90JywgJ3NoeScsICdyZWcnLCAnbWFjcicsICdkZWcnLCAncGx1c21uJywgJ3N1cDInLCAnc3VwMycsICdhY3V0ZScsICdtaWNybycsICdwYXJhJywgJ21pZGRvdCcsICdjZWRpbCcsICdzdXAxJywgJ29yZG0nLCAncmFxdW8nLCAnZnJhYzE0JywgJ2ZyYWMxMicsICdmcmFjMzQnLCAnaXF1ZXN0JywgJ0FncmF2ZScsICdBYWN1dGUnLCAnQWNpcmMnLCAnQXRpbGRlJywgJ0F1bWwnLCAnQXJpbmcnLCAnQWVsaWcnLCAnQ2NlZGlsJywgJ0VncmF2ZScsICdFYWN1dGUnLCAnRWNpcmMnLCAnRXVtbCcsICdJZ3JhdmUnLCAnSWFjdXRlJywgJ0ljaXJjJywgJ0l1bWwnLCAnRVRIJywgJ050aWxkZScsICdPZ3JhdmUnLCAnT2FjdXRlJywgJ09jaXJjJywgJ090aWxkZScsICdPdW1sJywgJ3RpbWVzJywgJ09zbGFzaCcsICdVZ3JhdmUnLCAnVWFjdXRlJywgJ1VjaXJjJywgJ1V1bWwnLCAnWWFjdXRlJywgJ1RIT1JOJywgJ3N6bGlnJywgJ2FncmF2ZScsICdhYWN1dGUnLCAnYWNpcmMnLCAnYXRpbGRlJywgJ2F1bWwnLCAnYXJpbmcnLCAnYWVsaWcnLCAnY2NlZGlsJywgJ2VncmF2ZScsICdlYWN1dGUnLCAnZWNpcmMnLCAnZXVtbCcsICdpZ3JhdmUnLCAnaWFjdXRlJywgJ2ljaXJjJywgJ2l1bWwnLCAnZXRoJywgJ250aWxkZScsICdvZ3JhdmUnLCAnb2FjdXRlJywgJ29jaXJjJywgJ290aWxkZScsICdvdW1sJywgJ2RpdmlkZScsICdPc2xhc2gnLCAndWdyYXZlJywgJ3VhY3V0ZScsICd1Y2lyYycsICd1dW1sJywgJ3lhY3V0ZScsICd0aG9ybicsICd5dW1sJywgJ3F1b3QnLCAnYW1wJywgJ2x0JywgJ2d0JywgJ29lbGlnJywgJ29lbGlnJywgJ3NjYXJvbicsICdzY2Fyb24nLCAneXVtbCcsICdjaXJjJywgJ3RpbGRlJywgJ2Vuc3AnLCAnZW1zcCcsICd0aGluc3AnLCAnenduaicsICd6d2onLCAnbHJtJywgJ3JsbScsICduZGFzaCcsICdtZGFzaCcsICdsc3F1bycsICdyc3F1bycsICdzYnF1bycsICdsZHF1bycsICdyZHF1bycsICdiZHF1bycsICdkYWdnZXInLCAnZGFnZ2VyJywgJ3Blcm1pbCcsICdsc2FxdW8nLCAncnNhcXVvJywgJ2V1cm8nLCAnZm5vZicsICdhbHBoYScsICdiZXRhJywgJ2dhbW1hJywgJ2RlbHRhJywgJ2Vwc2lsb24nLCAnemV0YScsICdldGEnLCAndGhldGEnLCAnaW90YScsICdrYXBwYScsICdsYW1iZGEnLCAnbXUnLCAnbnUnLCAneGknLCAnb21pY3JvbicsICdwaScsICdyaG8nLCAnc2lnbWEnLCAndGF1JywgJ3Vwc2lsb24nLCAncGhpJywgJ2NoaScsICdwc2knLCAnb21lZ2EnLCAnYWxwaGEnLCAnYmV0YScsICdnYW1tYScsICdkZWx0YScsICdlcHNpbG9uJywgJ3pldGEnLCAnZXRhJywgJ3RoZXRhJywgJ2lvdGEnLCAna2FwcGEnLCAnbGFtYmRhJywgJ211JywgJ251JywgJ3hpJywgJ29taWNyb24nLCAncGknLCAncmhvJywgJ3NpZ21hZicsICdzaWdtYScsICd0YXUnLCAndXBzaWxvbicsICdwaGknLCAnY2hpJywgJ3BzaScsICdvbWVnYScsICd0aGV0YXN5bScsICd1cHNpaCcsICdwaXYnLCAnYnVsbCcsICdoZWxsaXAnLCAncHJpbWUnLCAncHJpbWUnLCAnb2xpbmUnLCAnZnJhc2wnLCAnd2VpZXJwJywgJ2ltYWdlJywgJ3JlYWwnLCAndHJhZGUnLCAnYWxlZnN5bScsICdsYXJyJywgJ3VhcnInLCAncmFycicsICdkYXJyJywgJ2hhcnInLCAnY3JhcnInLCAnbGFycicsICd1YXJyJywgJ3JhcnInLCAnZGFycicsICdoYXJyJywgJ2ZvcmFsbCcsICdwYXJ0JywgJ2V4aXN0JywgJ2VtcHR5JywgJ25hYmxhJywgJ2lzaW4nLCAnbm90aW4nLCAnbmknLCAncHJvZCcsICdzdW0nLCAnbWludXMnLCAnbG93YXN0JywgJ3JhZGljJywgJ3Byb3AnLCAnaW5maW4nLCAnYW5nJywgJ2FuZCcsICdvcicsICdjYXAnLCAnY3VwJywgJ2ludCcsICd0aGVyZTQnLCAnc2ltJywgJ2NvbmcnLCAnYXN5bXAnLCAnbmUnLCAnZXF1aXYnLCAnbGUnLCAnZ2UnLCAnc3ViJywgJ3N1cCcsICduc3ViJywgJ3N1YmUnLCAnc3VwZScsICdvcGx1cycsICdvdGltZXMnLCAncGVycCcsICdzZG90JywgJ2xjZWlsJywgJ3JjZWlsJywgJ2xmbG9vcicsICdyZmxvb3InLCAnbGFuZycsICdyYW5nJywgJ2xveicsICdzcGFkZXMnLCAnY2x1YnMnLCAnaGVhcnRzJywgJ2RpYW1zJ107XG52YXIgSFRNTF9DT0RFUyA9IFszOSwgMTYwLCAxNjEsIDE2MiwgMTYzLCAxNjQsIDE2NSwgMTY2LCAxNjcsIDE2OCwgMTY5LCAxNzAsIDE3MSwgMTcyLCAxNzMsIDE3NCwgMTc1LCAxNzYsIDE3NywgMTc4LCAxNzksIDE4MCwgMTgxLCAxODIsIDE4MywgMTg0LCAxODUsIDE4NiwgMTg3LCAxODgsIDE4OSwgMTkwLCAxOTEsIDE5MiwgMTkzLCAxOTQsIDE5NSwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMSwgMjAyLCAyMDMsIDIwNCwgMjA1LCAyMDYsIDIwNywgMjA4LCAyMDksIDIxMCwgMjExLCAyMTIsIDIxMywgMjE0LCAyMTUsIDIxNiwgMjE3LCAyMTgsIDIxOSwgMjIwLCAyMjEsIDIyMiwgMjIzLCAyMjQsIDIyNSwgMjI2LCAyMjcsIDIyOCwgMjI5LCAyMzAsIDIzMSwgMjMyLCAyMzMsIDIzNCwgMjM1LCAyMzYsIDIzNywgMjM4LCAyMzksIDI0MCwgMjQxLCAyNDIsIDI0MywgMjQ0LCAyNDUsIDI0NiwgMjQ3LCAyNDgsIDI0OSwgMjUwLCAyNTEsIDI1MiwgMjUzLCAyNTQsIDI1NSwgMzQsIDM4LCA2MCwgNjIsIDMzOCwgMzM5LCAzNTIsIDM1MywgMzc2LCA3MTAsIDczMiwgODE5NCwgODE5NSwgODIwMSwgODIwNCwgODIwNSwgODIwNiwgODIwNywgODIxMSwgODIxMiwgODIxNiwgODIxNywgODIxOCwgODIyMCwgODIyMSwgODIyMiwgODIyNCwgODIyNSwgODI0MCwgODI0OSwgODI1MCwgODM2NCwgNDAyLCA5MTMsIDkxNCwgOTE1LCA5MTYsIDkxNywgOTE4LCA5MTksIDkyMCwgOTIxLCA5MjIsIDkyMywgOTI0LCA5MjUsIDkyNiwgOTI3LCA5MjgsIDkyOSwgOTMxLCA5MzIsIDkzMywgOTM0LCA5MzUsIDkzNiwgOTM3LCA5NDUsIDk0NiwgOTQ3LCA5NDgsIDk0OSwgOTUwLCA5NTEsIDk1MiwgOTUzLCA5NTQsIDk1NSwgOTU2LCA5NTcsIDk1OCwgOTU5LCA5NjAsIDk2MSwgOTYyLCA5NjMsIDk2NCwgOTY1LCA5NjYsIDk2NywgOTY4LCA5NjksIDk3NywgOTc4LCA5ODIsIDgyMjYsIDgyMzAsIDgyNDIsIDgyNDMsIDgyNTQsIDgyNjAsIDg0NzIsIDg0NjUsIDg0NzYsIDg0ODIsIDg1MDEsIDg1OTIsIDg1OTMsIDg1OTQsIDg1OTUsIDg1OTYsIDg2MjksIDg2NTYsIDg2NTcsIDg2NTgsIDg2NTksIDg2NjAsIDg3MDQsIDg3MDYsIDg3MDcsIDg3MDksIDg3MTEsIDg3MTIsIDg3MTMsIDg3MTUsIDg3MTksIDg3MjEsIDg3MjIsIDg3MjcsIDg3MzAsIDg3MzMsIDg3MzQsIDg3MzYsIDg3NDMsIDg3NDQsIDg3NDUsIDg3NDYsIDg3NDcsIDg3NTYsIDg3NjQsIDg3NzMsIDg3NzYsIDg4MDAsIDg4MDEsIDg4MDQsIDg4MDUsIDg4MzQsIDg4MzUsIDg4MzYsIDg4MzgsIDg4MzksIDg4NTMsIDg4NTUsIDg4NjksIDg5MDEsIDg5NjgsIDg5NjksIDg5NzAsIDg5NzEsIDkwMDEsIDkwMDIsIDk2NzQsIDk4MjQsIDk4MjcsIDk4MjksIDk4MzBdO1xuXG52YXIgYWxwaGFJbmRleCA9IHt9O1xudmFyIG51bUluZGV4ID0ge307XG5cbnZhciBpID0gMDtcbnZhciBsZW5ndGggPSBIVE1MX0FMUEhBLmxlbmd0aDtcbndoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgdmFyIGEgPSBIVE1MX0FMUEhBW2ldO1xuICAgIHZhciBjID0gSFRNTF9DT0RFU1tpXTtcbiAgICBhbHBoYUluZGV4W2FdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICBudW1JbmRleFtjXSA9IGE7XG4gICAgaSsrO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIdG1sNEVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJigjP1tcXHdcXGRdKyk7Py9nLCBmdW5jdGlvbihzLCBlbnRpdHkpIHtcbiAgICAgICAgdmFyIGNocjtcbiAgICAgICAgaWYgKGVudGl0eS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGVudGl0eS5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDIpLCAxNikgOlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMSkpO1xuXG4gICAgICAgICAgICBpZiAoIShpc05hTihjb2RlKSB8fCBjb2RlIDwgLTMyNzY4IHx8IGNvZGUgPiA2NTUzNSkpIHtcbiAgICAgICAgICAgICAgICBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hyID0gYWxwaGFJbmRleFtlbnRpdHldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaHIgfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGFscGhhID0gbnVtSW5kZXhbc3RyLmNoYXJDb2RlQXQoaSldO1xuICAgICAgICByZXN1bHQgKz0gYWxwaGEgPyBcIiZcIiArIGFscGhhICsgXCI7XCIgOiBzdHIuY2hhckF0KGkpO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgYWxwaGEgPSBudW1JbmRleFtjY107XG4gICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYyA8IDMyIHx8IGNjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImI1wiICsgY2MgKyBcIjtcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNEVudGl0aWVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDQtZW50aXRpZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEVOVElUSUVTID0gW1snQWFjdXRlJywgWzE5M11dLCBbJ2FhY3V0ZScsIFsyMjVdXSwgWydBYnJldmUnLCBbMjU4XV0sIFsnYWJyZXZlJywgWzI1OV1dLCBbJ2FjJywgWzg3NjZdXSwgWydhY2QnLCBbODc2N11dLCBbJ2FjRScsIFs4NzY2LCA4MTldXSwgWydBY2lyYycsIFsxOTRdXSwgWydhY2lyYycsIFsyMjZdXSwgWydhY3V0ZScsIFsxODBdXSwgWydBY3knLCBbMTA0MF1dLCBbJ2FjeScsIFsxMDcyXV0sIFsnQUVsaWcnLCBbMTk4XV0sIFsnYWVsaWcnLCBbMjMwXV0sIFsnYWYnLCBbODI4OV1dLCBbJ0FmcicsIFsxMjAwNjhdXSwgWydhZnInLCBbMTIwMDk0XV0sIFsnQWdyYXZlJywgWzE5Ml1dLCBbJ2FncmF2ZScsIFsyMjRdXSwgWydhbGVmc3ltJywgWzg1MDFdXSwgWydhbGVwaCcsIFs4NTAxXV0sIFsnQWxwaGEnLCBbOTEzXV0sIFsnYWxwaGEnLCBbOTQ1XV0sIFsnQW1hY3InLCBbMjU2XV0sIFsnYW1hY3InLCBbMjU3XV0sIFsnYW1hbGcnLCBbMTA4MTVdXSwgWydhbXAnLCBbMzhdXSwgWydBTVAnLCBbMzhdXSwgWydhbmRhbmQnLCBbMTA4MzddXSwgWydBbmQnLCBbMTA4MzVdXSwgWydhbmQnLCBbODc0M11dLCBbJ2FuZGQnLCBbMTA4NDRdXSwgWydhbmRzbG9wZScsIFsxMDg0MF1dLCBbJ2FuZHYnLCBbMTA4NDJdXSwgWydhbmcnLCBbODczNl1dLCBbJ2FuZ2UnLCBbMTA2NjBdXSwgWydhbmdsZScsIFs4NzM2XV0sIFsnYW5nbXNkYWEnLCBbMTA2NjRdXSwgWydhbmdtc2RhYicsIFsxMDY2NV1dLCBbJ2FuZ21zZGFjJywgWzEwNjY2XV0sIFsnYW5nbXNkYWQnLCBbMTA2NjddXSwgWydhbmdtc2RhZScsIFsxMDY2OF1dLCBbJ2FuZ21zZGFmJywgWzEwNjY5XV0sIFsnYW5nbXNkYWcnLCBbMTA2NzBdXSwgWydhbmdtc2RhaCcsIFsxMDY3MV1dLCBbJ2FuZ21zZCcsIFs4NzM3XV0sIFsnYW5ncnQnLCBbODczNV1dLCBbJ2FuZ3J0dmInLCBbODg5NF1dLCBbJ2FuZ3J0dmJkJywgWzEwNjUzXV0sIFsnYW5nc3BoJywgWzg3MzhdXSwgWydhbmdzdCcsIFsxOTddXSwgWydhbmd6YXJyJywgWzkwODRdXSwgWydBb2dvbicsIFsyNjBdXSwgWydhb2dvbicsIFsyNjFdXSwgWydBb3BmJywgWzEyMDEyMF1dLCBbJ2FvcGYnLCBbMTIwMTQ2XV0sIFsnYXBhY2lyJywgWzEwODYzXV0sIFsnYXAnLCBbODc3Nl1dLCBbJ2FwRScsIFsxMDg2NF1dLCBbJ2FwZScsIFs4Nzc4XV0sIFsnYXBpZCcsIFs4Nzc5XV0sIFsnYXBvcycsIFszOV1dLCBbJ0FwcGx5RnVuY3Rpb24nLCBbODI4OV1dLCBbJ2FwcHJveCcsIFs4Nzc2XV0sIFsnYXBwcm94ZXEnLCBbODc3OF1dLCBbJ0FyaW5nJywgWzE5N11dLCBbJ2FyaW5nJywgWzIyOV1dLCBbJ0FzY3InLCBbMTE5OTY0XV0sIFsnYXNjcicsIFsxMTk5OTBdXSwgWydBc3NpZ24nLCBbODc4OF1dLCBbJ2FzdCcsIFs0Ml1dLCBbJ2FzeW1wJywgWzg3NzZdXSwgWydhc3ltcGVxJywgWzg3ODFdXSwgWydBdGlsZGUnLCBbMTk1XV0sIFsnYXRpbGRlJywgWzIyN11dLCBbJ0F1bWwnLCBbMTk2XV0sIFsnYXVtbCcsIFsyMjhdXSwgWydhd2NvbmludCcsIFs4NzU1XV0sIFsnYXdpbnQnLCBbMTA3NjldXSwgWydiYWNrY29uZycsIFs4NzgwXV0sIFsnYmFja2Vwc2lsb24nLCBbMTAxNF1dLCBbJ2JhY2twcmltZScsIFs4MjQ1XV0sIFsnYmFja3NpbScsIFs4NzY1XV0sIFsnYmFja3NpbWVxJywgWzg5MDldXSwgWydCYWNrc2xhc2gnLCBbODcyNl1dLCBbJ0JhcnYnLCBbMTA5ODNdXSwgWydiYXJ2ZWUnLCBbODg5M11dLCBbJ2JhcndlZCcsIFs4OTY1XV0sIFsnQmFyd2VkJywgWzg5NjZdXSwgWydiYXJ3ZWRnZScsIFs4OTY1XV0sIFsnYmJyaycsIFs5MTQxXV0sIFsnYmJya3RicmsnLCBbOTE0Ml1dLCBbJ2Jjb25nJywgWzg3ODBdXSwgWydCY3knLCBbMTA0MV1dLCBbJ2JjeScsIFsxMDczXV0sIFsnYmRxdW8nLCBbODIyMl1dLCBbJ2JlY2F1cycsIFs4NzU3XV0sIFsnYmVjYXVzZScsIFs4NzU3XV0sIFsnQmVjYXVzZScsIFs4NzU3XV0sIFsnYmVtcHR5dicsIFsxMDY3Ml1dLCBbJ2JlcHNpJywgWzEwMTRdXSwgWydiZXJub3UnLCBbODQ5Ml1dLCBbJ0Jlcm5vdWxsaXMnLCBbODQ5Ml1dLCBbJ0JldGEnLCBbOTE0XV0sIFsnYmV0YScsIFs5NDZdXSwgWydiZXRoJywgWzg1MDJdXSwgWydiZXR3ZWVuJywgWzg4MTJdXSwgWydCZnInLCBbMTIwMDY5XV0sIFsnYmZyJywgWzEyMDA5NV1dLCBbJ2JpZ2NhcCcsIFs4ODk4XV0sIFsnYmlnY2lyYycsIFs5NzExXV0sIFsnYmlnY3VwJywgWzg4OTldXSwgWydiaWdvZG90JywgWzEwNzUyXV0sIFsnYmlnb3BsdXMnLCBbMTA3NTNdXSwgWydiaWdvdGltZXMnLCBbMTA3NTRdXSwgWydiaWdzcWN1cCcsIFsxMDc1OF1dLCBbJ2JpZ3N0YXInLCBbOTczM11dLCBbJ2JpZ3RyaWFuZ2xlZG93bicsIFs5NjYxXV0sIFsnYmlndHJpYW5nbGV1cCcsIFs5NjUxXV0sIFsnYmlndXBsdXMnLCBbMTA3NTZdXSwgWydiaWd2ZWUnLCBbODg5N11dLCBbJ2JpZ3dlZGdlJywgWzg4OTZdXSwgWydia2Fyb3cnLCBbMTA1MDldXSwgWydibGFja2xvemVuZ2UnLCBbMTA3MzFdXSwgWydibGFja3NxdWFyZScsIFs5NjQyXV0sIFsnYmxhY2t0cmlhbmdsZScsIFs5NjUyXV0sIFsnYmxhY2t0cmlhbmdsZWRvd24nLCBbOTY2Ml1dLCBbJ2JsYWNrdHJpYW5nbGVsZWZ0JywgWzk2NjZdXSwgWydibGFja3RyaWFuZ2xlcmlnaHQnLCBbOTY1Nl1dLCBbJ2JsYW5rJywgWzkyNTFdXSwgWydibGsxMicsIFs5NjE4XV0sIFsnYmxrMTQnLCBbOTYxN11dLCBbJ2JsazM0JywgWzk2MTldXSwgWydibG9jaycsIFs5NjA4XV0sIFsnYm5lJywgWzYxLCA4NDIxXV0sIFsnYm5lcXVpdicsIFs4ODAxLCA4NDIxXV0sIFsnYk5vdCcsIFsxMDk4OV1dLCBbJ2Jub3QnLCBbODk3Nl1dLCBbJ0JvcGYnLCBbMTIwMTIxXV0sIFsnYm9wZicsIFsxMjAxNDddXSwgWydib3QnLCBbODg2OV1dLCBbJ2JvdHRvbScsIFs4ODY5XV0sIFsnYm93dGllJywgWzg5MDRdXSwgWydib3hib3gnLCBbMTA2OTddXSwgWydib3hkbCcsIFs5NDg4XV0sIFsnYm94ZEwnLCBbOTU1N11dLCBbJ2JveERsJywgWzk1NThdXSwgWydib3hETCcsIFs5NTU5XV0sIFsnYm94ZHInLCBbOTQ4NF1dLCBbJ2JveGRSJywgWzk1NTRdXSwgWydib3hEcicsIFs5NTU1XV0sIFsnYm94RFInLCBbOTU1Nl1dLCBbJ2JveGgnLCBbOTQ3Ml1dLCBbJ2JveEgnLCBbOTU1Ml1dLCBbJ2JveGhkJywgWzk1MTZdXSwgWydib3hIZCcsIFs5NTcyXV0sIFsnYm94aEQnLCBbOTU3M11dLCBbJ2JveEhEJywgWzk1NzRdXSwgWydib3hodScsIFs5NTI0XV0sIFsnYm94SHUnLCBbOTU3NV1dLCBbJ2JveGhVJywgWzk1NzZdXSwgWydib3hIVScsIFs5NTc3XV0sIFsnYm94bWludXMnLCBbODg2M11dLCBbJ2JveHBsdXMnLCBbODg2Ml1dLCBbJ2JveHRpbWVzJywgWzg4NjRdXSwgWydib3h1bCcsIFs5NDk2XV0sIFsnYm94dUwnLCBbOTU2M11dLCBbJ2JveFVsJywgWzk1NjRdXSwgWydib3hVTCcsIFs5NTY1XV0sIFsnYm94dXInLCBbOTQ5Ml1dLCBbJ2JveHVSJywgWzk1NjBdXSwgWydib3hVcicsIFs5NTYxXV0sIFsnYm94VVInLCBbOTU2Ml1dLCBbJ2JveHYnLCBbOTQ3NF1dLCBbJ2JveFYnLCBbOTU1M11dLCBbJ2JveHZoJywgWzk1MzJdXSwgWydib3h2SCcsIFs5NTc4XV0sIFsnYm94VmgnLCBbOTU3OV1dLCBbJ2JveFZIJywgWzk1ODBdXSwgWydib3h2bCcsIFs5NTA4XV0sIFsnYm94dkwnLCBbOTU2OV1dLCBbJ2JveFZsJywgWzk1NzBdXSwgWydib3hWTCcsIFs5NTcxXV0sIFsnYm94dnInLCBbOTUwMF1dLCBbJ2JveHZSJywgWzk1NjZdXSwgWydib3hWcicsIFs5NTY3XV0sIFsnYm94VlInLCBbOTU2OF1dLCBbJ2JwcmltZScsIFs4MjQ1XV0sIFsnYnJldmUnLCBbNzI4XV0sIFsnQnJldmUnLCBbNzI4XV0sIFsnYnJ2YmFyJywgWzE2Nl1dLCBbJ2JzY3InLCBbMTE5OTkxXV0sIFsnQnNjcicsIFs4NDkyXV0sIFsnYnNlbWknLCBbODI3MV1dLCBbJ2JzaW0nLCBbODc2NV1dLCBbJ2JzaW1lJywgWzg5MDldXSwgWydic29sYicsIFsxMDY5M11dLCBbJ2Jzb2wnLCBbOTJdXSwgWydic29saHN1YicsIFsxMDE4NF1dLCBbJ2J1bGwnLCBbODIyNl1dLCBbJ2J1bGxldCcsIFs4MjI2XV0sIFsnYnVtcCcsIFs4NzgyXV0sIFsnYnVtcEUnLCBbMTA5MjZdXSwgWydidW1wZScsIFs4NzgzXV0sIFsnQnVtcGVxJywgWzg3ODJdXSwgWydidW1wZXEnLCBbODc4M11dLCBbJ0NhY3V0ZScsIFsyNjJdXSwgWydjYWN1dGUnLCBbMjYzXV0sIFsnY2FwYW5kJywgWzEwODIwXV0sIFsnY2FwYnJjdXAnLCBbMTA4MjVdXSwgWydjYXBjYXAnLCBbMTA4MjddXSwgWydjYXAnLCBbODc0NV1dLCBbJ0NhcCcsIFs4OTE0XV0sIFsnY2FwY3VwJywgWzEwODIzXV0sIFsnY2FwZG90JywgWzEwODE2XV0sIFsnQ2FwaXRhbERpZmZlcmVudGlhbEQnLCBbODUxN11dLCBbJ2NhcHMnLCBbODc0NSwgNjUwMjRdXSwgWydjYXJldCcsIFs4MjU3XV0sIFsnY2Fyb24nLCBbNzExXV0sIFsnQ2F5bGV5cycsIFs4NDkzXV0sIFsnY2NhcHMnLCBbMTA4MjldXSwgWydDY2Fyb24nLCBbMjY4XV0sIFsnY2Nhcm9uJywgWzI2OV1dLCBbJ0NjZWRpbCcsIFsxOTldXSwgWydjY2VkaWwnLCBbMjMxXV0sIFsnQ2NpcmMnLCBbMjY0XV0sIFsnY2NpcmMnLCBbMjY1XV0sIFsnQ2NvbmludCcsIFs4NzUyXV0sIFsnY2N1cHMnLCBbMTA4MjhdXSwgWydjY3Vwc3NtJywgWzEwODMyXV0sIFsnQ2RvdCcsIFsyNjZdXSwgWydjZG90JywgWzI2N11dLCBbJ2NlZGlsJywgWzE4NF1dLCBbJ0NlZGlsbGEnLCBbMTg0XV0sIFsnY2VtcHR5dicsIFsxMDY3NF1dLCBbJ2NlbnQnLCBbMTYyXV0sIFsnY2VudGVyZG90JywgWzE4M11dLCBbJ0NlbnRlckRvdCcsIFsxODNdXSwgWydjZnInLCBbMTIwMDk2XV0sIFsnQ2ZyJywgWzg0OTNdXSwgWydDSGN5JywgWzEwNjNdXSwgWydjaGN5JywgWzEwOTVdXSwgWydjaGVjaycsIFsxMDAwM11dLCBbJ2NoZWNrbWFyaycsIFsxMDAwM11dLCBbJ0NoaScsIFs5MzVdXSwgWydjaGknLCBbOTY3XV0sIFsnY2lyYycsIFs3MTBdXSwgWydjaXJjZXEnLCBbODc5MV1dLCBbJ2NpcmNsZWFycm93bGVmdCcsIFs4NjM0XV0sIFsnY2lyY2xlYXJyb3dyaWdodCcsIFs4NjM1XV0sIFsnY2lyY2xlZGFzdCcsIFs4ODU5XV0sIFsnY2lyY2xlZGNpcmMnLCBbODg1OF1dLCBbJ2NpcmNsZWRkYXNoJywgWzg4NjFdXSwgWydDaXJjbGVEb3QnLCBbODg1N11dLCBbJ2NpcmNsZWRSJywgWzE3NF1dLCBbJ2NpcmNsZWRTJywgWzk0MTZdXSwgWydDaXJjbGVNaW51cycsIFs4ODU0XV0sIFsnQ2lyY2xlUGx1cycsIFs4ODUzXV0sIFsnQ2lyY2xlVGltZXMnLCBbODg1NV1dLCBbJ2NpcicsIFs5Njc1XV0sIFsnY2lyRScsIFsxMDY5MV1dLCBbJ2NpcmUnLCBbODc5MV1dLCBbJ2NpcmZuaW50JywgWzEwNzY4XV0sIFsnY2lybWlkJywgWzEwOTkxXV0sIFsnY2lyc2NpcicsIFsxMDY5MF1dLCBbJ0Nsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzU0XV0sIFsnQ2xvc2VDdXJseURvdWJsZVF1b3RlJywgWzgyMjFdXSwgWydDbG9zZUN1cmx5UXVvdGUnLCBbODIxN11dLCBbJ2NsdWJzJywgWzk4MjddXSwgWydjbHVic3VpdCcsIFs5ODI3XV0sIFsnY29sb24nLCBbNThdXSwgWydDb2xvbicsIFs4NzU5XV0sIFsnQ29sb25lJywgWzEwODY4XV0sIFsnY29sb25lJywgWzg3ODhdXSwgWydjb2xvbmVxJywgWzg3ODhdXSwgWydjb21tYScsIFs0NF1dLCBbJ2NvbW1hdCcsIFs2NF1dLCBbJ2NvbXAnLCBbODcwNV1dLCBbJ2NvbXBmbicsIFs4NzI4XV0sIFsnY29tcGxlbWVudCcsIFs4NzA1XV0sIFsnY29tcGxleGVzJywgWzg0NTBdXSwgWydjb25nJywgWzg3NzNdXSwgWydjb25nZG90JywgWzEwODYxXV0sIFsnQ29uZ3J1ZW50JywgWzg4MDFdXSwgWydjb25pbnQnLCBbODc1MF1dLCBbJ0NvbmludCcsIFs4NzUxXV0sIFsnQ29udG91ckludGVncmFsJywgWzg3NTBdXSwgWydjb3BmJywgWzEyMDE0OF1dLCBbJ0NvcGYnLCBbODQ1MF1dLCBbJ2NvcHJvZCcsIFs4NzIwXV0sIFsnQ29wcm9kdWN0JywgWzg3MjBdXSwgWydjb3B5JywgWzE2OV1dLCBbJ0NPUFknLCBbMTY5XV0sIFsnY29weXNyJywgWzg0NzFdXSwgWydDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsJywgWzg3NTVdXSwgWydjcmFycicsIFs4NjI5XV0sIFsnY3Jvc3MnLCBbMTAwMDddXSwgWydDcm9zcycsIFsxMDc5OV1dLCBbJ0NzY3InLCBbMTE5OTY2XV0sIFsnY3NjcicsIFsxMTk5OTJdXSwgWydjc3ViJywgWzEwOTU5XV0sIFsnY3N1YmUnLCBbMTA5NjFdXSwgWydjc3VwJywgWzEwOTYwXV0sIFsnY3N1cGUnLCBbMTA5NjJdXSwgWydjdGRvdCcsIFs4OTQzXV0sIFsnY3VkYXJybCcsIFsxMDU1Ml1dLCBbJ2N1ZGFycnInLCBbMTA1NDldXSwgWydjdWVwcicsIFs4OTI2XV0sIFsnY3Vlc2MnLCBbODkyN11dLCBbJ2N1bGFycicsIFs4NjMwXV0sIFsnY3VsYXJycCcsIFsxMDU1N11dLCBbJ2N1cGJyY2FwJywgWzEwODI0XV0sIFsnY3VwY2FwJywgWzEwODIyXV0sIFsnQ3VwQ2FwJywgWzg3ODFdXSwgWydjdXAnLCBbODc0Nl1dLCBbJ0N1cCcsIFs4OTE1XV0sIFsnY3VwY3VwJywgWzEwODI2XV0sIFsnY3VwZG90JywgWzg4NDVdXSwgWydjdXBvcicsIFsxMDgyMV1dLCBbJ2N1cHMnLCBbODc0NiwgNjUwMjRdXSwgWydjdXJhcnInLCBbODYzMV1dLCBbJ2N1cmFycm0nLCBbMTA1NTZdXSwgWydjdXJseWVxcHJlYycsIFs4OTI2XV0sIFsnY3VybHllcXN1Y2MnLCBbODkyN11dLCBbJ2N1cmx5dmVlJywgWzg5MTBdXSwgWydjdXJseXdlZGdlJywgWzg5MTFdXSwgWydjdXJyZW4nLCBbMTY0XV0sIFsnY3VydmVhcnJvd2xlZnQnLCBbODYzMF1dLCBbJ2N1cnZlYXJyb3dyaWdodCcsIFs4NjMxXV0sIFsnY3V2ZWUnLCBbODkxMF1dLCBbJ2N1d2VkJywgWzg5MTFdXSwgWydjd2NvbmludCcsIFs4NzU0XV0sIFsnY3dpbnQnLCBbODc1M11dLCBbJ2N5bGN0eScsIFs5MDA1XV0sIFsnZGFnZ2VyJywgWzgyMjRdXSwgWydEYWdnZXInLCBbODIyNV1dLCBbJ2RhbGV0aCcsIFs4NTA0XV0sIFsnZGFycicsIFs4NTk1XV0sIFsnRGFycicsIFs4NjA5XV0sIFsnZEFycicsIFs4NjU5XV0sIFsnZGFzaCcsIFs4MjA4XV0sIFsnRGFzaHYnLCBbMTA5ODBdXSwgWydkYXNodicsIFs4ODY3XV0sIFsnZGJrYXJvdycsIFsxMDUxMV1dLCBbJ2RibGFjJywgWzczM11dLCBbJ0RjYXJvbicsIFsyNzBdXSwgWydkY2Fyb24nLCBbMjcxXV0sIFsnRGN5JywgWzEwNDRdXSwgWydkY3knLCBbMTA3Nl1dLCBbJ2RkYWdnZXInLCBbODIyNV1dLCBbJ2RkYXJyJywgWzg2NTBdXSwgWydERCcsIFs4NTE3XV0sIFsnZGQnLCBbODUxOF1dLCBbJ0REb3RyYWhkJywgWzEwNTEzXV0sIFsnZGRvdHNlcScsIFsxMDg3MV1dLCBbJ2RlZycsIFsxNzZdXSwgWydEZWwnLCBbODcxMV1dLCBbJ0RlbHRhJywgWzkxNl1dLCBbJ2RlbHRhJywgWzk0OF1dLCBbJ2RlbXB0eXYnLCBbMTA2NzNdXSwgWydkZmlzaHQnLCBbMTA2MjNdXSwgWydEZnInLCBbMTIwMDcxXV0sIFsnZGZyJywgWzEyMDA5N11dLCBbJ2RIYXInLCBbMTA1OTddXSwgWydkaGFybCcsIFs4NjQzXV0sIFsnZGhhcnInLCBbODY0Ml1dLCBbJ0RpYWNyaXRpY2FsQWN1dGUnLCBbMTgwXV0sIFsnRGlhY3JpdGljYWxEb3QnLCBbNzI5XV0sIFsnRGlhY3JpdGljYWxEb3VibGVBY3V0ZScsIFs3MzNdXSwgWydEaWFjcml0aWNhbEdyYXZlJywgWzk2XV0sIFsnRGlhY3JpdGljYWxUaWxkZScsIFs3MzJdXSwgWydkaWFtJywgWzg5MDBdXSwgWydkaWFtb25kJywgWzg5MDBdXSwgWydEaWFtb25kJywgWzg5MDBdXSwgWydkaWFtb25kc3VpdCcsIFs5ODMwXV0sIFsnZGlhbXMnLCBbOTgzMF1dLCBbJ2RpZScsIFsxNjhdXSwgWydEaWZmZXJlbnRpYWxEJywgWzg1MThdXSwgWydkaWdhbW1hJywgWzk4OV1dLCBbJ2Rpc2luJywgWzg5NDZdXSwgWydkaXYnLCBbMjQ3XV0sIFsnZGl2aWRlJywgWzI0N11dLCBbJ2RpdmlkZW9udGltZXMnLCBbODkwM11dLCBbJ2Rpdm9ueCcsIFs4OTAzXV0sIFsnREpjeScsIFsxMDI2XV0sIFsnZGpjeScsIFsxMTA2XV0sIFsnZGxjb3JuJywgWzg5OTBdXSwgWydkbGNyb3AnLCBbODk3M11dLCBbJ2RvbGxhcicsIFszNl1dLCBbJ0RvcGYnLCBbMTIwMTIzXV0sIFsnZG9wZicsIFsxMjAxNDldXSwgWydEb3QnLCBbMTY4XV0sIFsnZG90JywgWzcyOV1dLCBbJ0RvdERvdCcsIFs4NDEyXV0sIFsnZG90ZXEnLCBbODc4NF1dLCBbJ2RvdGVxZG90JywgWzg3ODVdXSwgWydEb3RFcXVhbCcsIFs4Nzg0XV0sIFsnZG90bWludXMnLCBbODc2MF1dLCBbJ2RvdHBsdXMnLCBbODcyNF1dLCBbJ2RvdHNxdWFyZScsIFs4ODY1XV0sIFsnZG91YmxlYmFyd2VkZ2UnLCBbODk2Nl1dLCBbJ0RvdWJsZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzUxXV0sIFsnRG91YmxlRG90JywgWzE2OF1dLCBbJ0RvdWJsZURvd25BcnJvdycsIFs4NjU5XV0sIFsnRG91YmxlTGVmdEFycm93JywgWzg2NTZdXSwgWydEb3VibGVMZWZ0UmlnaHRBcnJvdycsIFs4NjYwXV0sIFsnRG91YmxlTGVmdFRlZScsIFsxMDk4MF1dLCBbJ0RvdWJsZUxvbmdMZWZ0QXJyb3cnLCBbMTAyMzJdXSwgWydEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3cnLCBbMTAyMzRdXSwgWydEb3VibGVMb25nUmlnaHRBcnJvdycsIFsxMDIzM11dLCBbJ0RvdWJsZVJpZ2h0QXJyb3cnLCBbODY1OF1dLCBbJ0RvdWJsZVJpZ2h0VGVlJywgWzg4NzJdXSwgWydEb3VibGVVcEFycm93JywgWzg2NTddXSwgWydEb3VibGVVcERvd25BcnJvdycsIFs4NjYxXV0sIFsnRG91YmxlVmVydGljYWxCYXInLCBbODc0MV1dLCBbJ0Rvd25BcnJvd0JhcicsIFsxMDUxNV1dLCBbJ2Rvd25hcnJvdycsIFs4NTk1XV0sIFsnRG93bkFycm93JywgWzg1OTVdXSwgWydEb3duYXJyb3cnLCBbODY1OV1dLCBbJ0Rvd25BcnJvd1VwQXJyb3cnLCBbODY5M11dLCBbJ0Rvd25CcmV2ZScsIFs3ODVdXSwgWydkb3duZG93bmFycm93cycsIFs4NjUwXV0sIFsnZG93bmhhcnBvb25sZWZ0JywgWzg2NDNdXSwgWydkb3duaGFycG9vbnJpZ2h0JywgWzg2NDJdXSwgWydEb3duTGVmdFJpZ2h0VmVjdG9yJywgWzEwNTc2XV0sIFsnRG93bkxlZnRUZWVWZWN0b3InLCBbMTA1OTBdXSwgWydEb3duTGVmdFZlY3RvckJhcicsIFsxMDU4Ml1dLCBbJ0Rvd25MZWZ0VmVjdG9yJywgWzg2MzddXSwgWydEb3duUmlnaHRUZWVWZWN0b3InLCBbMTA1OTFdXSwgWydEb3duUmlnaHRWZWN0b3JCYXInLCBbMTA1ODNdXSwgWydEb3duUmlnaHRWZWN0b3InLCBbODY0MV1dLCBbJ0Rvd25UZWVBcnJvdycsIFs4NjE1XV0sIFsnRG93blRlZScsIFs4ODY4XV0sIFsnZHJia2Fyb3cnLCBbMTA1MTJdXSwgWydkcmNvcm4nLCBbODk5MV1dLCBbJ2RyY3JvcCcsIFs4OTcyXV0sIFsnRHNjcicsIFsxMTk5NjddXSwgWydkc2NyJywgWzExOTk5M11dLCBbJ0RTY3knLCBbMTAyOV1dLCBbJ2RzY3knLCBbMTEwOV1dLCBbJ2Rzb2wnLCBbMTA3NDJdXSwgWydEc3Ryb2snLCBbMjcyXV0sIFsnZHN0cm9rJywgWzI3M11dLCBbJ2R0ZG90JywgWzg5NDVdXSwgWydkdHJpJywgWzk2NjNdXSwgWydkdHJpZicsIFs5NjYyXV0sIFsnZHVhcnInLCBbODY5M11dLCBbJ2R1aGFyJywgWzEwNjA3XV0sIFsnZHdhbmdsZScsIFsxMDY2Ml1dLCBbJ0RaY3knLCBbMTAzOV1dLCBbJ2R6Y3knLCBbMTExOV1dLCBbJ2R6aWdyYXJyJywgWzEwMjM5XV0sIFsnRWFjdXRlJywgWzIwMV1dLCBbJ2VhY3V0ZScsIFsyMzNdXSwgWydlYXN0ZXInLCBbMTA4NjJdXSwgWydFY2Fyb24nLCBbMjgyXV0sIFsnZWNhcm9uJywgWzI4M11dLCBbJ0VjaXJjJywgWzIwMl1dLCBbJ2VjaXJjJywgWzIzNF1dLCBbJ2VjaXInLCBbODc5MF1dLCBbJ2Vjb2xvbicsIFs4Nzg5XV0sIFsnRWN5JywgWzEwNjldXSwgWydlY3knLCBbMTEwMV1dLCBbJ2VERG90JywgWzEwODcxXV0sIFsnRWRvdCcsIFsyNzhdXSwgWydlZG90JywgWzI3OV1dLCBbJ2VEb3QnLCBbODc4NV1dLCBbJ2VlJywgWzg1MTldXSwgWydlZkRvdCcsIFs4Nzg2XV0sIFsnRWZyJywgWzEyMDA3Ml1dLCBbJ2VmcicsIFsxMjAwOThdXSwgWydlZycsIFsxMDkwNl1dLCBbJ0VncmF2ZScsIFsyMDBdXSwgWydlZ3JhdmUnLCBbMjMyXV0sIFsnZWdzJywgWzEwOTAyXV0sIFsnZWdzZG90JywgWzEwOTA0XV0sIFsnZWwnLCBbMTA5MDVdXSwgWydFbGVtZW50JywgWzg3MTJdXSwgWydlbGludGVycycsIFs5MTkxXV0sIFsnZWxsJywgWzg0NjddXSwgWydlbHMnLCBbMTA5MDFdXSwgWydlbHNkb3QnLCBbMTA5MDNdXSwgWydFbWFjcicsIFsyNzRdXSwgWydlbWFjcicsIFsyNzVdXSwgWydlbXB0eScsIFs4NzA5XV0sIFsnZW1wdHlzZXQnLCBbODcwOV1dLCBbJ0VtcHR5U21hbGxTcXVhcmUnLCBbOTcyM11dLCBbJ2VtcHR5dicsIFs4NzA5XV0sIFsnRW1wdHlWZXJ5U21hbGxTcXVhcmUnLCBbOTY0M11dLCBbJ2Vtc3AxMycsIFs4MTk2XV0sIFsnZW1zcDE0JywgWzgxOTddXSwgWydlbXNwJywgWzgxOTVdXSwgWydFTkcnLCBbMzMwXV0sIFsnZW5nJywgWzMzMV1dLCBbJ2Vuc3AnLCBbODE5NF1dLCBbJ0VvZ29uJywgWzI4MF1dLCBbJ2VvZ29uJywgWzI4MV1dLCBbJ0VvcGYnLCBbMTIwMTI0XV0sIFsnZW9wZicsIFsxMjAxNTBdXSwgWydlcGFyJywgWzg5MTddXSwgWydlcGFyc2wnLCBbMTA3MjNdXSwgWydlcGx1cycsIFsxMDg2NV1dLCBbJ2Vwc2knLCBbOTQ5XV0sIFsnRXBzaWxvbicsIFs5MTddXSwgWydlcHNpbG9uJywgWzk0OV1dLCBbJ2Vwc2l2JywgWzEwMTNdXSwgWydlcWNpcmMnLCBbODc5MF1dLCBbJ2VxY29sb24nLCBbODc4OV1dLCBbJ2Vxc2ltJywgWzg3NzBdXSwgWydlcXNsYW50Z3RyJywgWzEwOTAyXV0sIFsnZXFzbGFudGxlc3MnLCBbMTA5MDFdXSwgWydFcXVhbCcsIFsxMDg2OV1dLCBbJ2VxdWFscycsIFs2MV1dLCBbJ0VxdWFsVGlsZGUnLCBbODc3MF1dLCBbJ2VxdWVzdCcsIFs4Nzk5XV0sIFsnRXF1aWxpYnJpdW0nLCBbODY1Ml1dLCBbJ2VxdWl2JywgWzg4MDFdXSwgWydlcXVpdkREJywgWzEwODcyXV0sIFsnZXF2cGFyc2wnLCBbMTA3MjVdXSwgWydlcmFycicsIFsxMDYwOV1dLCBbJ2VyRG90JywgWzg3ODddXSwgWydlc2NyJywgWzg0OTVdXSwgWydFc2NyJywgWzg0OTZdXSwgWydlc2RvdCcsIFs4Nzg0XV0sIFsnRXNpbScsIFsxMDg2N11dLCBbJ2VzaW0nLCBbODc3MF1dLCBbJ0V0YScsIFs5MTldXSwgWydldGEnLCBbOTUxXV0sIFsnRVRIJywgWzIwOF1dLCBbJ2V0aCcsIFsyNDBdXSwgWydFdW1sJywgWzIwM11dLCBbJ2V1bWwnLCBbMjM1XV0sIFsnZXVybycsIFs4MzY0XV0sIFsnZXhjbCcsIFszM11dLCBbJ2V4aXN0JywgWzg3MDddXSwgWydFeGlzdHMnLCBbODcwN11dLCBbJ2V4cGVjdGF0aW9uJywgWzg0OTZdXSwgWydleHBvbmVudGlhbGUnLCBbODUxOV1dLCBbJ0V4cG9uZW50aWFsRScsIFs4NTE5XV0sIFsnZmFsbGluZ2RvdHNlcScsIFs4Nzg2XV0sIFsnRmN5JywgWzEwNjBdXSwgWydmY3knLCBbMTA5Ml1dLCBbJ2ZlbWFsZScsIFs5NzkyXV0sIFsnZmZpbGlnJywgWzY0MjU5XV0sIFsnZmZsaWcnLCBbNjQyNTZdXSwgWydmZmxsaWcnLCBbNjQyNjBdXSwgWydGZnInLCBbMTIwMDczXV0sIFsnZmZyJywgWzEyMDA5OV1dLCBbJ2ZpbGlnJywgWzY0MjU3XV0sIFsnRmlsbGVkU21hbGxTcXVhcmUnLCBbOTcyNF1dLCBbJ0ZpbGxlZFZlcnlTbWFsbFNxdWFyZScsIFs5NjQyXV0sIFsnZmpsaWcnLCBbMTAyLCAxMDZdXSwgWydmbGF0JywgWzk4MzddXSwgWydmbGxpZycsIFs2NDI1OF1dLCBbJ2ZsdG5zJywgWzk2NDldXSwgWydmbm9mJywgWzQwMl1dLCBbJ0ZvcGYnLCBbMTIwMTI1XV0sIFsnZm9wZicsIFsxMjAxNTFdXSwgWydmb3JhbGwnLCBbODcwNF1dLCBbJ0ZvckFsbCcsIFs4NzA0XV0sIFsnZm9yaycsIFs4OTE2XV0sIFsnZm9ya3YnLCBbMTA5NjldXSwgWydGb3VyaWVydHJmJywgWzg0OTddXSwgWydmcGFydGludCcsIFsxMDc2NV1dLCBbJ2ZyYWMxMicsIFsxODldXSwgWydmcmFjMTMnLCBbODUzMV1dLCBbJ2ZyYWMxNCcsIFsxODhdXSwgWydmcmFjMTUnLCBbODUzM11dLCBbJ2ZyYWMxNicsIFs4NTM3XV0sIFsnZnJhYzE4JywgWzg1MzldXSwgWydmcmFjMjMnLCBbODUzMl1dLCBbJ2ZyYWMyNScsIFs4NTM0XV0sIFsnZnJhYzM0JywgWzE5MF1dLCBbJ2ZyYWMzNScsIFs4NTM1XV0sIFsnZnJhYzM4JywgWzg1NDBdXSwgWydmcmFjNDUnLCBbODUzNl1dLCBbJ2ZyYWM1NicsIFs4NTM4XV0sIFsnZnJhYzU4JywgWzg1NDFdXSwgWydmcmFjNzgnLCBbODU0Ml1dLCBbJ2ZyYXNsJywgWzgyNjBdXSwgWydmcm93bicsIFs4OTk0XV0sIFsnZnNjcicsIFsxMTk5OTVdXSwgWydGc2NyJywgWzg0OTddXSwgWydnYWN1dGUnLCBbNTAxXV0sIFsnR2FtbWEnLCBbOTE1XV0sIFsnZ2FtbWEnLCBbOTQ3XV0sIFsnR2FtbWFkJywgWzk4OF1dLCBbJ2dhbW1hZCcsIFs5ODldXSwgWydnYXAnLCBbMTA4ODZdXSwgWydHYnJldmUnLCBbMjg2XV0sIFsnZ2JyZXZlJywgWzI4N11dLCBbJ0djZWRpbCcsIFsyOTBdXSwgWydHY2lyYycsIFsyODRdXSwgWydnY2lyYycsIFsyODVdXSwgWydHY3knLCBbMTA0M11dLCBbJ2djeScsIFsxMDc1XV0sIFsnR2RvdCcsIFsyODhdXSwgWydnZG90JywgWzI4OV1dLCBbJ2dlJywgWzg4MDVdXSwgWydnRScsIFs4ODA3XV0sIFsnZ0VsJywgWzEwODkyXV0sIFsnZ2VsJywgWzg5MjNdXSwgWydnZXEnLCBbODgwNV1dLCBbJ2dlcXEnLCBbODgwN11dLCBbJ2dlcXNsYW50JywgWzEwODc4XV0sIFsnZ2VzY2MnLCBbMTA5MjFdXSwgWydnZXMnLCBbMTA4NzhdXSwgWydnZXNkb3QnLCBbMTA4ODBdXSwgWydnZXNkb3RvJywgWzEwODgyXV0sIFsnZ2VzZG90b2wnLCBbMTA4ODRdXSwgWydnZXNsJywgWzg5MjMsIDY1MDI0XV0sIFsnZ2VzbGVzJywgWzEwOTAwXV0sIFsnR2ZyJywgWzEyMDA3NF1dLCBbJ2dmcicsIFsxMjAxMDBdXSwgWydnZycsIFs4ODExXV0sIFsnR2cnLCBbODkyMV1dLCBbJ2dnZycsIFs4OTIxXV0sIFsnZ2ltZWwnLCBbODUwM11dLCBbJ0dKY3knLCBbMTAyN11dLCBbJ2dqY3knLCBbMTEwN11dLCBbJ2dsYScsIFsxMDkxN11dLCBbJ2dsJywgWzg4MjNdXSwgWydnbEUnLCBbMTA4OThdXSwgWydnbGonLCBbMTA5MTZdXSwgWydnbmFwJywgWzEwODkwXV0sIFsnZ25hcHByb3gnLCBbMTA4OTBdXSwgWydnbmUnLCBbMTA4ODhdXSwgWydnbkUnLCBbODgwOV1dLCBbJ2duZXEnLCBbMTA4ODhdXSwgWydnbmVxcScsIFs4ODA5XV0sIFsnZ25zaW0nLCBbODkzNV1dLCBbJ0dvcGYnLCBbMTIwMTI2XV0sIFsnZ29wZicsIFsxMjAxNTJdXSwgWydncmF2ZScsIFs5Nl1dLCBbJ0dyZWF0ZXJFcXVhbCcsIFs4ODA1XV0sIFsnR3JlYXRlckVxdWFsTGVzcycsIFs4OTIzXV0sIFsnR3JlYXRlckZ1bGxFcXVhbCcsIFs4ODA3XV0sIFsnR3JlYXRlckdyZWF0ZXInLCBbMTA5MTRdXSwgWydHcmVhdGVyTGVzcycsIFs4ODIzXV0sIFsnR3JlYXRlclNsYW50RXF1YWwnLCBbMTA4NzhdXSwgWydHcmVhdGVyVGlsZGUnLCBbODgxOV1dLCBbJ0dzY3InLCBbMTE5OTcwXV0sIFsnZ3NjcicsIFs4NDU4XV0sIFsnZ3NpbScsIFs4ODE5XV0sIFsnZ3NpbWUnLCBbMTA4OTRdXSwgWydnc2ltbCcsIFsxMDg5Nl1dLCBbJ2d0Y2MnLCBbMTA5MTldXSwgWydndGNpcicsIFsxMDg3NF1dLCBbJ2d0JywgWzYyXV0sIFsnR1QnLCBbNjJdXSwgWydHdCcsIFs4ODExXV0sIFsnZ3Rkb3QnLCBbODkxOV1dLCBbJ2d0bFBhcicsIFsxMDY0NV1dLCBbJ2d0cXVlc3QnLCBbMTA4NzZdXSwgWydndHJhcHByb3gnLCBbMTA4ODZdXSwgWydndHJhcnInLCBbMTA2MTZdXSwgWydndHJkb3QnLCBbODkxOV1dLCBbJ2d0cmVxbGVzcycsIFs4OTIzXV0sIFsnZ3RyZXFxbGVzcycsIFsxMDg5Ml1dLCBbJ2d0cmxlc3MnLCBbODgyM11dLCBbJ2d0cnNpbScsIFs4ODE5XV0sIFsnZ3ZlcnRuZXFxJywgWzg4MDksIDY1MDI0XV0sIFsnZ3ZuRScsIFs4ODA5LCA2NTAyNF1dLCBbJ0hhY2VrJywgWzcxMV1dLCBbJ2hhaXJzcCcsIFs4MjAyXV0sIFsnaGFsZicsIFsxODldXSwgWydoYW1pbHQnLCBbODQ1OV1dLCBbJ0hBUkRjeScsIFsxMDY2XV0sIFsnaGFyZGN5JywgWzEwOThdXSwgWydoYXJyY2lyJywgWzEwNTY4XV0sIFsnaGFycicsIFs4NTk2XV0sIFsnaEFycicsIFs4NjYwXV0sIFsnaGFycncnLCBbODYyMV1dLCBbJ0hhdCcsIFs5NF1dLCBbJ2hiYXInLCBbODQ2M11dLCBbJ0hjaXJjJywgWzI5Ml1dLCBbJ2hjaXJjJywgWzI5M11dLCBbJ2hlYXJ0cycsIFs5ODI5XV0sIFsnaGVhcnRzdWl0JywgWzk4MjldXSwgWydoZWxsaXAnLCBbODIzMF1dLCBbJ2hlcmNvbicsIFs4ODg5XV0sIFsnaGZyJywgWzEyMDEwMV1dLCBbJ0hmcicsIFs4NDYwXV0sIFsnSGlsYmVydFNwYWNlJywgWzg0NTldXSwgWydoa3NlYXJvdycsIFsxMDUzM11dLCBbJ2hrc3dhcm93JywgWzEwNTM0XV0sIFsnaG9hcnInLCBbODcwM11dLCBbJ2hvbXRodCcsIFs4NzYzXV0sIFsnaG9va2xlZnRhcnJvdycsIFs4NjE3XV0sIFsnaG9va3JpZ2h0YXJyb3cnLCBbODYxOF1dLCBbJ2hvcGYnLCBbMTIwMTUzXV0sIFsnSG9wZicsIFs4NDYxXV0sIFsnaG9yYmFyJywgWzgyMTNdXSwgWydIb3Jpem9udGFsTGluZScsIFs5NDcyXV0sIFsnaHNjcicsIFsxMTk5OTddXSwgWydIc2NyJywgWzg0NTldXSwgWydoc2xhc2gnLCBbODQ2M11dLCBbJ0hzdHJvaycsIFsyOTRdXSwgWydoc3Ryb2snLCBbMjk1XV0sIFsnSHVtcERvd25IdW1wJywgWzg3ODJdXSwgWydIdW1wRXF1YWwnLCBbODc4M11dLCBbJ2h5YnVsbCcsIFs4MjU5XV0sIFsnaHlwaGVuJywgWzgyMDhdXSwgWydJYWN1dGUnLCBbMjA1XV0sIFsnaWFjdXRlJywgWzIzN11dLCBbJ2ljJywgWzgyOTFdXSwgWydJY2lyYycsIFsyMDZdXSwgWydpY2lyYycsIFsyMzhdXSwgWydJY3knLCBbMTA0OF1dLCBbJ2ljeScsIFsxMDgwXV0sIFsnSWRvdCcsIFszMDRdXSwgWydJRWN5JywgWzEwNDVdXSwgWydpZWN5JywgWzEwNzddXSwgWydpZXhjbCcsIFsxNjFdXSwgWydpZmYnLCBbODY2MF1dLCBbJ2lmcicsIFsxMjAxMDJdXSwgWydJZnInLCBbODQ2NV1dLCBbJ0lncmF2ZScsIFsyMDRdXSwgWydpZ3JhdmUnLCBbMjM2XV0sIFsnaWknLCBbODUyMF1dLCBbJ2lpaWludCcsIFsxMDc2NF1dLCBbJ2lpaW50JywgWzg3NDldXSwgWydpaW5maW4nLCBbMTA3MTZdXSwgWydpaW90YScsIFs4NDg5XV0sIFsnSUpsaWcnLCBbMzA2XV0sIFsnaWpsaWcnLCBbMzA3XV0sIFsnSW1hY3InLCBbMjk4XV0sIFsnaW1hY3InLCBbMjk5XV0sIFsnaW1hZ2UnLCBbODQ2NV1dLCBbJ0ltYWdpbmFyeUknLCBbODUyMF1dLCBbJ2ltYWdsaW5lJywgWzg0NjRdXSwgWydpbWFncGFydCcsIFs4NDY1XV0sIFsnaW1hdGgnLCBbMzA1XV0sIFsnSW0nLCBbODQ2NV1dLCBbJ2ltb2YnLCBbODg4N11dLCBbJ2ltcGVkJywgWzQzN11dLCBbJ0ltcGxpZXMnLCBbODY1OF1dLCBbJ2luY2FyZScsIFs4NDUzXV0sIFsnaW4nLCBbODcxMl1dLCBbJ2luZmluJywgWzg3MzRdXSwgWydpbmZpbnRpZScsIFsxMDcxN11dLCBbJ2lub2RvdCcsIFszMDVdXSwgWydpbnRjYWwnLCBbODg5MF1dLCBbJ2ludCcsIFs4NzQ3XV0sIFsnSW50JywgWzg3NDhdXSwgWydpbnRlZ2VycycsIFs4NDg0XV0sIFsnSW50ZWdyYWwnLCBbODc0N11dLCBbJ2ludGVyY2FsJywgWzg4OTBdXSwgWydJbnRlcnNlY3Rpb24nLCBbODg5OF1dLCBbJ2ludGxhcmhrJywgWzEwNzc1XV0sIFsnaW50cHJvZCcsIFsxMDgxMl1dLCBbJ0ludmlzaWJsZUNvbW1hJywgWzgyOTFdXSwgWydJbnZpc2libGVUaW1lcycsIFs4MjkwXV0sIFsnSU9jeScsIFsxMDI1XV0sIFsnaW9jeScsIFsxMTA1XV0sIFsnSW9nb24nLCBbMzAyXV0sIFsnaW9nb24nLCBbMzAzXV0sIFsnSW9wZicsIFsxMjAxMjhdXSwgWydpb3BmJywgWzEyMDE1NF1dLCBbJ0lvdGEnLCBbOTIxXV0sIFsnaW90YScsIFs5NTNdXSwgWydpcHJvZCcsIFsxMDgxMl1dLCBbJ2lxdWVzdCcsIFsxOTFdXSwgWydpc2NyJywgWzExOTk5OF1dLCBbJ0lzY3InLCBbODQ2NF1dLCBbJ2lzaW4nLCBbODcxMl1dLCBbJ2lzaW5kb3QnLCBbODk0OV1dLCBbJ2lzaW5FJywgWzg5NTNdXSwgWydpc2lucycsIFs4OTQ4XV0sIFsnaXNpbnN2JywgWzg5NDddXSwgWydpc2ludicsIFs4NzEyXV0sIFsnaXQnLCBbODI5MF1dLCBbJ0l0aWxkZScsIFsyOTZdXSwgWydpdGlsZGUnLCBbMjk3XV0sIFsnSXVrY3knLCBbMTAzMF1dLCBbJ2l1a2N5JywgWzExMTBdXSwgWydJdW1sJywgWzIwN11dLCBbJ2l1bWwnLCBbMjM5XV0sIFsnSmNpcmMnLCBbMzA4XV0sIFsnamNpcmMnLCBbMzA5XV0sIFsnSmN5JywgWzEwNDldXSwgWydqY3knLCBbMTA4MV1dLCBbJ0pmcicsIFsxMjAwNzddXSwgWydqZnInLCBbMTIwMTAzXV0sIFsnam1hdGgnLCBbNTY3XV0sIFsnSm9wZicsIFsxMjAxMjldXSwgWydqb3BmJywgWzEyMDE1NV1dLCBbJ0pzY3InLCBbMTE5OTczXV0sIFsnanNjcicsIFsxMTk5OTldXSwgWydKc2VyY3knLCBbMTAzMl1dLCBbJ2pzZXJjeScsIFsxMTEyXV0sIFsnSnVrY3knLCBbMTAyOF1dLCBbJ2p1a2N5JywgWzExMDhdXSwgWydLYXBwYScsIFs5MjJdXSwgWydrYXBwYScsIFs5NTRdXSwgWydrYXBwYXYnLCBbMTAwOF1dLCBbJ0tjZWRpbCcsIFszMTBdXSwgWydrY2VkaWwnLCBbMzExXV0sIFsnS2N5JywgWzEwNTBdXSwgWydrY3knLCBbMTA4Ml1dLCBbJ0tmcicsIFsxMjAwNzhdXSwgWydrZnInLCBbMTIwMTA0XV0sIFsna2dyZWVuJywgWzMxMl1dLCBbJ0tIY3knLCBbMTA2MV1dLCBbJ2toY3knLCBbMTA5M11dLCBbJ0tKY3knLCBbMTAzNl1dLCBbJ2tqY3knLCBbMTExNl1dLCBbJ0tvcGYnLCBbMTIwMTMwXV0sIFsna29wZicsIFsxMjAxNTZdXSwgWydLc2NyJywgWzExOTk3NF1dLCBbJ2tzY3InLCBbMTIwMDAwXV0sIFsnbEFhcnInLCBbODY2Nl1dLCBbJ0xhY3V0ZScsIFszMTNdXSwgWydsYWN1dGUnLCBbMzE0XV0sIFsnbGFlbXB0eXYnLCBbMTA2NzZdXSwgWydsYWdyYW4nLCBbODQ2Nl1dLCBbJ0xhbWJkYScsIFs5MjNdXSwgWydsYW1iZGEnLCBbOTU1XV0sIFsnbGFuZycsIFsxMDIxNl1dLCBbJ0xhbmcnLCBbMTAyMThdXSwgWydsYW5nZCcsIFsxMDY0MV1dLCBbJ2xhbmdsZScsIFsxMDIxNl1dLCBbJ2xhcCcsIFsxMDg4NV1dLCBbJ0xhcGxhY2V0cmYnLCBbODQ2Nl1dLCBbJ2xhcXVvJywgWzE3MV1dLCBbJ2xhcnJiJywgWzg2NzZdXSwgWydsYXJyYmZzJywgWzEwNTI3XV0sIFsnbGFycicsIFs4NTkyXV0sIFsnTGFycicsIFs4NjA2XV0sIFsnbEFycicsIFs4NjU2XV0sIFsnbGFycmZzJywgWzEwNTI1XV0sIFsnbGFycmhrJywgWzg2MTddXSwgWydsYXJybHAnLCBbODYxOV1dLCBbJ2xhcnJwbCcsIFsxMDU1M11dLCBbJ2xhcnJzaW0nLCBbMTA2MTFdXSwgWydsYXJydGwnLCBbODYxMF1dLCBbJ2xhdGFpbCcsIFsxMDUyMV1dLCBbJ2xBdGFpbCcsIFsxMDUyM11dLCBbJ2xhdCcsIFsxMDkyM11dLCBbJ2xhdGUnLCBbMTA5MjVdXSwgWydsYXRlcycsIFsxMDkyNSwgNjUwMjRdXSwgWydsYmFycicsIFsxMDUwOF1dLCBbJ2xCYXJyJywgWzEwNTEwXV0sIFsnbGJicmsnLCBbMTAwOThdXSwgWydsYnJhY2UnLCBbMTIzXV0sIFsnbGJyYWNrJywgWzkxXV0sIFsnbGJya2UnLCBbMTA2MzVdXSwgWydsYnJrc2xkJywgWzEwNjM5XV0sIFsnbGJya3NsdScsIFsxMDYzN11dLCBbJ0xjYXJvbicsIFszMTddXSwgWydsY2Fyb24nLCBbMzE4XV0sIFsnTGNlZGlsJywgWzMxNV1dLCBbJ2xjZWRpbCcsIFszMTZdXSwgWydsY2VpbCcsIFs4OTY4XV0sIFsnbGN1YicsIFsxMjNdXSwgWydMY3knLCBbMTA1MV1dLCBbJ2xjeScsIFsxMDgzXV0sIFsnbGRjYScsIFsxMDU1MF1dLCBbJ2xkcXVvJywgWzgyMjBdXSwgWydsZHF1b3InLCBbODIyMl1dLCBbJ2xkcmRoYXInLCBbMTA1OTldXSwgWydsZHJ1c2hhcicsIFsxMDU3MV1dLCBbJ2xkc2gnLCBbODYyNl1dLCBbJ2xlJywgWzg4MDRdXSwgWydsRScsIFs4ODA2XV0sIFsnTGVmdEFuZ2xlQnJhY2tldCcsIFsxMDIxNl1dLCBbJ0xlZnRBcnJvd0JhcicsIFs4Njc2XV0sIFsnbGVmdGFycm93JywgWzg1OTJdXSwgWydMZWZ0QXJyb3cnLCBbODU5Ml1dLCBbJ0xlZnRhcnJvdycsIFs4NjU2XV0sIFsnTGVmdEFycm93UmlnaHRBcnJvdycsIFs4NjQ2XV0sIFsnbGVmdGFycm93dGFpbCcsIFs4NjEwXV0sIFsnTGVmdENlaWxpbmcnLCBbODk2OF1dLCBbJ0xlZnREb3VibGVCcmFja2V0JywgWzEwMjE0XV0sIFsnTGVmdERvd25UZWVWZWN0b3InLCBbMTA1OTNdXSwgWydMZWZ0RG93blZlY3RvckJhcicsIFsxMDU4NV1dLCBbJ0xlZnREb3duVmVjdG9yJywgWzg2NDNdXSwgWydMZWZ0Rmxvb3InLCBbODk3MF1dLCBbJ2xlZnRoYXJwb29uZG93bicsIFs4NjM3XV0sIFsnbGVmdGhhcnBvb251cCcsIFs4NjM2XV0sIFsnbGVmdGxlZnRhcnJvd3MnLCBbODY0N11dLCBbJ2xlZnRyaWdodGFycm93JywgWzg1OTZdXSwgWydMZWZ0UmlnaHRBcnJvdycsIFs4NTk2XV0sIFsnTGVmdHJpZ2h0YXJyb3cnLCBbODY2MF1dLCBbJ2xlZnRyaWdodGFycm93cycsIFs4NjQ2XV0sIFsnbGVmdHJpZ2h0aGFycG9vbnMnLCBbODY1MV1dLCBbJ2xlZnRyaWdodHNxdWlnYXJyb3cnLCBbODYyMV1dLCBbJ0xlZnRSaWdodFZlY3RvcicsIFsxMDU3NF1dLCBbJ0xlZnRUZWVBcnJvdycsIFs4NjEyXV0sIFsnTGVmdFRlZScsIFs4ODY3XV0sIFsnTGVmdFRlZVZlY3RvcicsIFsxMDU4Nl1dLCBbJ2xlZnR0aHJlZXRpbWVzJywgWzg5MDddXSwgWydMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDNdXSwgWydMZWZ0VHJpYW5nbGUnLCBbODg4Ml1dLCBbJ0xlZnRUcmlhbmdsZUVxdWFsJywgWzg4ODRdXSwgWydMZWZ0VXBEb3duVmVjdG9yJywgWzEwNTc3XV0sIFsnTGVmdFVwVGVlVmVjdG9yJywgWzEwNTkyXV0sIFsnTGVmdFVwVmVjdG9yQmFyJywgWzEwNTg0XV0sIFsnTGVmdFVwVmVjdG9yJywgWzg2MzldXSwgWydMZWZ0VmVjdG9yQmFyJywgWzEwNTc4XV0sIFsnTGVmdFZlY3RvcicsIFs4NjM2XV0sIFsnbEVnJywgWzEwODkxXV0sIFsnbGVnJywgWzg5MjJdXSwgWydsZXEnLCBbODgwNF1dLCBbJ2xlcXEnLCBbODgwNl1dLCBbJ2xlcXNsYW50JywgWzEwODc3XV0sIFsnbGVzY2MnLCBbMTA5MjBdXSwgWydsZXMnLCBbMTA4NzddXSwgWydsZXNkb3QnLCBbMTA4NzldXSwgWydsZXNkb3RvJywgWzEwODgxXV0sIFsnbGVzZG90b3InLCBbMTA4ODNdXSwgWydsZXNnJywgWzg5MjIsIDY1MDI0XV0sIFsnbGVzZ2VzJywgWzEwODk5XV0sIFsnbGVzc2FwcHJveCcsIFsxMDg4NV1dLCBbJ2xlc3Nkb3QnLCBbODkxOF1dLCBbJ2xlc3NlcWd0cicsIFs4OTIyXV0sIFsnbGVzc2VxcWd0cicsIFsxMDg5MV1dLCBbJ0xlc3NFcXVhbEdyZWF0ZXInLCBbODkyMl1dLCBbJ0xlc3NGdWxsRXF1YWwnLCBbODgwNl1dLCBbJ0xlc3NHcmVhdGVyJywgWzg4MjJdXSwgWydsZXNzZ3RyJywgWzg4MjJdXSwgWydMZXNzTGVzcycsIFsxMDkxM11dLCBbJ2xlc3NzaW0nLCBbODgxOF1dLCBbJ0xlc3NTbGFudEVxdWFsJywgWzEwODc3XV0sIFsnTGVzc1RpbGRlJywgWzg4MThdXSwgWydsZmlzaHQnLCBbMTA2MjBdXSwgWydsZmxvb3InLCBbODk3MF1dLCBbJ0xmcicsIFsxMjAwNzldXSwgWydsZnInLCBbMTIwMTA1XV0sIFsnbGcnLCBbODgyMl1dLCBbJ2xnRScsIFsxMDg5N11dLCBbJ2xIYXInLCBbMTA1OTRdXSwgWydsaGFyZCcsIFs4NjM3XV0sIFsnbGhhcnUnLCBbODYzNl1dLCBbJ2xoYXJ1bCcsIFsxMDYwMl1dLCBbJ2xoYmxrJywgWzk2MDRdXSwgWydMSmN5JywgWzEwMzNdXSwgWydsamN5JywgWzExMTNdXSwgWydsbGFycicsIFs4NjQ3XV0sIFsnbGwnLCBbODgxMF1dLCBbJ0xsJywgWzg5MjBdXSwgWydsbGNvcm5lcicsIFs4OTkwXV0sIFsnTGxlZnRhcnJvdycsIFs4NjY2XV0sIFsnbGxoYXJkJywgWzEwNjAzXV0sIFsnbGx0cmknLCBbOTcyMl1dLCBbJ0xtaWRvdCcsIFszMTldXSwgWydsbWlkb3QnLCBbMzIwXV0sIFsnbG1vdXN0YWNoZScsIFs5MTM2XV0sIFsnbG1vdXN0JywgWzkxMzZdXSwgWydsbmFwJywgWzEwODg5XV0sIFsnbG5hcHByb3gnLCBbMTA4ODldXSwgWydsbmUnLCBbMTA4ODddXSwgWydsbkUnLCBbODgwOF1dLCBbJ2xuZXEnLCBbMTA4ODddXSwgWydsbmVxcScsIFs4ODA4XV0sIFsnbG5zaW0nLCBbODkzNF1dLCBbJ2xvYW5nJywgWzEwMjIwXV0sIFsnbG9hcnInLCBbODcwMV1dLCBbJ2xvYnJrJywgWzEwMjE0XV0sIFsnbG9uZ2xlZnRhcnJvdycsIFsxMDIyOV1dLCBbJ0xvbmdMZWZ0QXJyb3cnLCBbMTAyMjldXSwgWydMb25nbGVmdGFycm93JywgWzEwMjMyXV0sIFsnbG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjMxXV0sIFsnTG9uZ0xlZnRSaWdodEFycm93JywgWzEwMjMxXV0sIFsnTG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjM0XV0sIFsnbG9uZ21hcHN0bycsIFsxMDIzNl1dLCBbJ2xvbmdyaWdodGFycm93JywgWzEwMjMwXV0sIFsnTG9uZ1JpZ2h0QXJyb3cnLCBbMTAyMzBdXSwgWydMb25ncmlnaHRhcnJvdycsIFsxMDIzM11dLCBbJ2xvb3BhcnJvd2xlZnQnLCBbODYxOV1dLCBbJ2xvb3BhcnJvd3JpZ2h0JywgWzg2MjBdXSwgWydsb3BhcicsIFsxMDYyOV1dLCBbJ0xvcGYnLCBbMTIwMTMxXV0sIFsnbG9wZicsIFsxMjAxNTddXSwgWydsb3BsdXMnLCBbMTA3OTddXSwgWydsb3RpbWVzJywgWzEwODA0XV0sIFsnbG93YXN0JywgWzg3MjddXSwgWydsb3diYXInLCBbOTVdXSwgWydMb3dlckxlZnRBcnJvdycsIFs4NjAxXV0sIFsnTG93ZXJSaWdodEFycm93JywgWzg2MDBdXSwgWydsb3onLCBbOTY3NF1dLCBbJ2xvemVuZ2UnLCBbOTY3NF1dLCBbJ2xvemYnLCBbMTA3MzFdXSwgWydscGFyJywgWzQwXV0sIFsnbHBhcmx0JywgWzEwNjQzXV0sIFsnbHJhcnInLCBbODY0Nl1dLCBbJ2xyY29ybmVyJywgWzg5OTFdXSwgWydscmhhcicsIFs4NjUxXV0sIFsnbHJoYXJkJywgWzEwNjA1XV0sIFsnbHJtJywgWzgyMDZdXSwgWydscnRyaScsIFs4ODk1XV0sIFsnbHNhcXVvJywgWzgyNDldXSwgWydsc2NyJywgWzEyMDAwMV1dLCBbJ0xzY3InLCBbODQ2Nl1dLCBbJ2xzaCcsIFs4NjI0XV0sIFsnTHNoJywgWzg2MjRdXSwgWydsc2ltJywgWzg4MThdXSwgWydsc2ltZScsIFsxMDg5M11dLCBbJ2xzaW1nJywgWzEwODk1XV0sIFsnbHNxYicsIFs5MV1dLCBbJ2xzcXVvJywgWzgyMTZdXSwgWydsc3F1b3InLCBbODIxOF1dLCBbJ0xzdHJvaycsIFszMjFdXSwgWydsc3Ryb2snLCBbMzIyXV0sIFsnbHRjYycsIFsxMDkxOF1dLCBbJ2x0Y2lyJywgWzEwODczXV0sIFsnbHQnLCBbNjBdXSwgWydMVCcsIFs2MF1dLCBbJ0x0JywgWzg4MTBdXSwgWydsdGRvdCcsIFs4OTE4XV0sIFsnbHRocmVlJywgWzg5MDddXSwgWydsdGltZXMnLCBbODkwNV1dLCBbJ2x0bGFycicsIFsxMDYxNF1dLCBbJ2x0cXVlc3QnLCBbMTA4NzVdXSwgWydsdHJpJywgWzk2NjddXSwgWydsdHJpZScsIFs4ODg0XV0sIFsnbHRyaWYnLCBbOTY2Nl1dLCBbJ2x0clBhcicsIFsxMDY0Nl1dLCBbJ2x1cmRzaGFyJywgWzEwNTcwXV0sIFsnbHVydWhhcicsIFsxMDU5OF1dLCBbJ2x2ZXJ0bmVxcScsIFs4ODA4LCA2NTAyNF1dLCBbJ2x2bkUnLCBbODgwOCwgNjUwMjRdXSwgWydtYWNyJywgWzE3NV1dLCBbJ21hbGUnLCBbOTc5NF1dLCBbJ21hbHQnLCBbMTAwMTZdXSwgWydtYWx0ZXNlJywgWzEwMDE2XV0sIFsnTWFwJywgWzEwNTAxXV0sIFsnbWFwJywgWzg2MTRdXSwgWydtYXBzdG8nLCBbODYxNF1dLCBbJ21hcHN0b2Rvd24nLCBbODYxNV1dLCBbJ21hcHN0b2xlZnQnLCBbODYxMl1dLCBbJ21hcHN0b3VwJywgWzg2MTNdXSwgWydtYXJrZXInLCBbOTY0Nl1dLCBbJ21jb21tYScsIFsxMDc5M11dLCBbJ01jeScsIFsxMDUyXV0sIFsnbWN5JywgWzEwODRdXSwgWydtZGFzaCcsIFs4MjEyXV0sIFsnbUREb3QnLCBbODc2Ml1dLCBbJ21lYXN1cmVkYW5nbGUnLCBbODczN11dLCBbJ01lZGl1bVNwYWNlJywgWzgyODddXSwgWydNZWxsaW50cmYnLCBbODQ5OV1dLCBbJ01mcicsIFsxMjAwODBdXSwgWydtZnInLCBbMTIwMTA2XV0sIFsnbWhvJywgWzg0ODddXSwgWydtaWNybycsIFsxODFdXSwgWydtaWRhc3QnLCBbNDJdXSwgWydtaWRjaXInLCBbMTA5OTJdXSwgWydtaWQnLCBbODczOV1dLCBbJ21pZGRvdCcsIFsxODNdXSwgWydtaW51c2InLCBbODg2M11dLCBbJ21pbnVzJywgWzg3MjJdXSwgWydtaW51c2QnLCBbODc2MF1dLCBbJ21pbnVzZHUnLCBbMTA3OTRdXSwgWydNaW51c1BsdXMnLCBbODcyM11dLCBbJ21sY3AnLCBbMTA5NzFdXSwgWydtbGRyJywgWzgyMzBdXSwgWydtbnBsdXMnLCBbODcyM11dLCBbJ21vZGVscycsIFs4ODcxXV0sIFsnTW9wZicsIFsxMjAxMzJdXSwgWydtb3BmJywgWzEyMDE1OF1dLCBbJ21wJywgWzg3MjNdXSwgWydtc2NyJywgWzEyMDAwMl1dLCBbJ01zY3InLCBbODQ5OV1dLCBbJ21zdHBvcycsIFs4NzY2XV0sIFsnTXUnLCBbOTI0XV0sIFsnbXUnLCBbOTU2XV0sIFsnbXVsdGltYXAnLCBbODg4OF1dLCBbJ211bWFwJywgWzg4ODhdXSwgWyduYWJsYScsIFs4NzExXV0sIFsnTmFjdXRlJywgWzMyM11dLCBbJ25hY3V0ZScsIFszMjRdXSwgWyduYW5nJywgWzg3MzYsIDg0MDJdXSwgWyduYXAnLCBbODc3N11dLCBbJ25hcEUnLCBbMTA4NjQsIDgyNF1dLCBbJ25hcGlkJywgWzg3NzksIDgyNF1dLCBbJ25hcG9zJywgWzMyOV1dLCBbJ25hcHByb3gnLCBbODc3N11dLCBbJ25hdHVyYWwnLCBbOTgzOF1dLCBbJ25hdHVyYWxzJywgWzg0NjldXSwgWyduYXR1cicsIFs5ODM4XV0sIFsnbmJzcCcsIFsxNjBdXSwgWyduYnVtcCcsIFs4NzgyLCA4MjRdXSwgWyduYnVtcGUnLCBbODc4MywgODI0XV0sIFsnbmNhcCcsIFsxMDgxOV1dLCBbJ05jYXJvbicsIFszMjddXSwgWyduY2Fyb24nLCBbMzI4XV0sIFsnTmNlZGlsJywgWzMyNV1dLCBbJ25jZWRpbCcsIFszMjZdXSwgWyduY29uZycsIFs4Nzc1XV0sIFsnbmNvbmdkb3QnLCBbMTA4NjEsIDgyNF1dLCBbJ25jdXAnLCBbMTA4MThdXSwgWydOY3knLCBbMTA1M11dLCBbJ25jeScsIFsxMDg1XV0sIFsnbmRhc2gnLCBbODIxMV1dLCBbJ25lYXJoaycsIFsxMDUzMl1dLCBbJ25lYXJyJywgWzg1OTldXSwgWyduZUFycicsIFs4NjYzXV0sIFsnbmVhcnJvdycsIFs4NTk5XV0sIFsnbmUnLCBbODgwMF1dLCBbJ25lZG90JywgWzg3ODQsIDgyNF1dLCBbJ05lZ2F0aXZlTWVkaXVtU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVGhpY2tTcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVUaGluU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVmVyeVRoaW5TcGFjZScsIFs4MjAzXV0sIFsnbmVxdWl2JywgWzg4MDJdXSwgWyduZXNlYXInLCBbMTA1MzZdXSwgWyduZXNpbScsIFs4NzcwLCA4MjRdXSwgWydOZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFs4ODExXV0sIFsnTmVzdGVkTGVzc0xlc3MnLCBbODgxMF1dLCBbJ05ld0xpbmUnLCBbMTBdXSwgWyduZXhpc3QnLCBbODcwOF1dLCBbJ25leGlzdHMnLCBbODcwOF1dLCBbJ05mcicsIFsxMjAwODFdXSwgWyduZnInLCBbMTIwMTA3XV0sIFsnbmdFJywgWzg4MDcsIDgyNF1dLCBbJ25nZScsIFs4ODE3XV0sIFsnbmdlcScsIFs4ODE3XV0sIFsnbmdlcXEnLCBbODgwNywgODI0XV0sIFsnbmdlcXNsYW50JywgWzEwODc4LCA4MjRdXSwgWyduZ2VzJywgWzEwODc4LCA4MjRdXSwgWyduR2cnLCBbODkyMSwgODI0XV0sIFsnbmdzaW0nLCBbODgyMV1dLCBbJ25HdCcsIFs4ODExLCA4NDAyXV0sIFsnbmd0JywgWzg4MTVdXSwgWyduZ3RyJywgWzg4MTVdXSwgWyduR3R2JywgWzg4MTEsIDgyNF1dLCBbJ25oYXJyJywgWzg2MjJdXSwgWyduaEFycicsIFs4NjU0XV0sIFsnbmhwYXInLCBbMTA5OTRdXSwgWyduaScsIFs4NzE1XV0sIFsnbmlzJywgWzg5NTZdXSwgWyduaXNkJywgWzg5NTRdXSwgWyduaXYnLCBbODcxNV1dLCBbJ05KY3knLCBbMTAzNF1dLCBbJ25qY3knLCBbMTExNF1dLCBbJ25sYXJyJywgWzg2MDJdXSwgWydubEFycicsIFs4NjUzXV0sIFsnbmxkcicsIFs4MjI5XV0sIFsnbmxFJywgWzg4MDYsIDgyNF1dLCBbJ25sZScsIFs4ODE2XV0sIFsnbmxlZnRhcnJvdycsIFs4NjAyXV0sIFsnbkxlZnRhcnJvdycsIFs4NjUzXV0sIFsnbmxlZnRyaWdodGFycm93JywgWzg2MjJdXSwgWyduTGVmdHJpZ2h0YXJyb3cnLCBbODY1NF1dLCBbJ25sZXEnLCBbODgxNl1dLCBbJ25sZXFxJywgWzg4MDYsIDgyNF1dLCBbJ25sZXFzbGFudCcsIFsxMDg3NywgODI0XV0sIFsnbmxlcycsIFsxMDg3NywgODI0XV0sIFsnbmxlc3MnLCBbODgxNF1dLCBbJ25MbCcsIFs4OTIwLCA4MjRdXSwgWydubHNpbScsIFs4ODIwXV0sIFsnbkx0JywgWzg4MTAsIDg0MDJdXSwgWydubHQnLCBbODgxNF1dLCBbJ25sdHJpJywgWzg5MzhdXSwgWydubHRyaWUnLCBbODk0MF1dLCBbJ25MdHYnLCBbODgxMCwgODI0XV0sIFsnbm1pZCcsIFs4NzQwXV0sIFsnTm9CcmVhaycsIFs4Mjg4XV0sIFsnTm9uQnJlYWtpbmdTcGFjZScsIFsxNjBdXSwgWydub3BmJywgWzEyMDE1OV1dLCBbJ05vcGYnLCBbODQ2OV1dLCBbJ05vdCcsIFsxMDk4OF1dLCBbJ25vdCcsIFsxNzJdXSwgWydOb3RDb25ncnVlbnQnLCBbODgwMl1dLCBbJ05vdEN1cENhcCcsIFs4ODEzXV0sIFsnTm90RG91YmxlVmVydGljYWxCYXInLCBbODc0Ml1dLCBbJ05vdEVsZW1lbnQnLCBbODcxM11dLCBbJ05vdEVxdWFsJywgWzg4MDBdXSwgWydOb3RFcXVhbFRpbGRlJywgWzg3NzAsIDgyNF1dLCBbJ05vdEV4aXN0cycsIFs4NzA4XV0sIFsnTm90R3JlYXRlcicsIFs4ODE1XV0sIFsnTm90R3JlYXRlckVxdWFsJywgWzg4MTddXSwgWydOb3RHcmVhdGVyRnVsbEVxdWFsJywgWzg4MDcsIDgyNF1dLCBbJ05vdEdyZWF0ZXJHcmVhdGVyJywgWzg4MTEsIDgyNF1dLCBbJ05vdEdyZWF0ZXJMZXNzJywgWzg4MjVdXSwgWydOb3RHcmVhdGVyU2xhbnRFcXVhbCcsIFsxMDg3OCwgODI0XV0sIFsnTm90R3JlYXRlclRpbGRlJywgWzg4MjFdXSwgWydOb3RIdW1wRG93bkh1bXAnLCBbODc4MiwgODI0XV0sIFsnTm90SHVtcEVxdWFsJywgWzg3ODMsIDgyNF1dLCBbJ25vdGluJywgWzg3MTNdXSwgWydub3RpbmRvdCcsIFs4OTQ5LCA4MjRdXSwgWydub3RpbkUnLCBbODk1MywgODI0XV0sIFsnbm90aW52YScsIFs4NzEzXV0sIFsnbm90aW52YicsIFs4OTUxXV0sIFsnbm90aW52YycsIFs4OTUwXV0sIFsnTm90TGVmdFRyaWFuZ2xlQmFyJywgWzEwNzAzLCA4MjRdXSwgWydOb3RMZWZ0VHJpYW5nbGUnLCBbODkzOF1dLCBbJ05vdExlZnRUcmlhbmdsZUVxdWFsJywgWzg5NDBdXSwgWydOb3RMZXNzJywgWzg4MTRdXSwgWydOb3RMZXNzRXF1YWwnLCBbODgxNl1dLCBbJ05vdExlc3NHcmVhdGVyJywgWzg4MjRdXSwgWydOb3RMZXNzTGVzcycsIFs4ODEwLCA4MjRdXSwgWydOb3RMZXNzU2xhbnRFcXVhbCcsIFsxMDg3NywgODI0XV0sIFsnTm90TGVzc1RpbGRlJywgWzg4MjBdXSwgWydOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFsxMDkxNCwgODI0XV0sIFsnTm90TmVzdGVkTGVzc0xlc3MnLCBbMTA5MTMsIDgyNF1dLCBbJ25vdG5pJywgWzg3MTZdXSwgWydub3RuaXZhJywgWzg3MTZdXSwgWydub3RuaXZiJywgWzg5NThdXSwgWydub3RuaXZjJywgWzg5NTddXSwgWydOb3RQcmVjZWRlcycsIFs4ODMyXV0sIFsnTm90UHJlY2VkZXNFcXVhbCcsIFsxMDkyNywgODI0XV0sIFsnTm90UHJlY2VkZXNTbGFudEVxdWFsJywgWzg5MjhdXSwgWydOb3RSZXZlcnNlRWxlbWVudCcsIFs4NzE2XV0sIFsnTm90UmlnaHRUcmlhbmdsZUJhcicsIFsxMDcwNCwgODI0XV0sIFsnTm90UmlnaHRUcmlhbmdsZScsIFs4OTM5XV0sIFsnTm90UmlnaHRUcmlhbmdsZUVxdWFsJywgWzg5NDFdXSwgWydOb3RTcXVhcmVTdWJzZXQnLCBbODg0NywgODI0XV0sIFsnTm90U3F1YXJlU3Vic2V0RXF1YWwnLCBbODkzMF1dLCBbJ05vdFNxdWFyZVN1cGVyc2V0JywgWzg4NDgsIDgyNF1dLCBbJ05vdFNxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODkzMV1dLCBbJ05vdFN1YnNldCcsIFs4ODM0LCA4NDAyXV0sIFsnTm90U3Vic2V0RXF1YWwnLCBbODg0MF1dLCBbJ05vdFN1Y2NlZWRzJywgWzg4MzNdXSwgWydOb3RTdWNjZWVkc0VxdWFsJywgWzEwOTI4LCA4MjRdXSwgWydOb3RTdWNjZWVkc1NsYW50RXF1YWwnLCBbODkyOV1dLCBbJ05vdFN1Y2NlZWRzVGlsZGUnLCBbODgzMSwgODI0XV0sIFsnTm90U3VwZXJzZXQnLCBbODgzNSwgODQwMl1dLCBbJ05vdFN1cGVyc2V0RXF1YWwnLCBbODg0MV1dLCBbJ05vdFRpbGRlJywgWzg3NjldXSwgWydOb3RUaWxkZUVxdWFsJywgWzg3NzJdXSwgWydOb3RUaWxkZUZ1bGxFcXVhbCcsIFs4Nzc1XV0sIFsnTm90VGlsZGVUaWxkZScsIFs4Nzc3XV0sIFsnTm90VmVydGljYWxCYXInLCBbODc0MF1dLCBbJ25wYXJhbGxlbCcsIFs4NzQyXV0sIFsnbnBhcicsIFs4NzQyXV0sIFsnbnBhcnNsJywgWzExMDA1LCA4NDIxXV0sIFsnbnBhcnQnLCBbODcwNiwgODI0XV0sIFsnbnBvbGludCcsIFsxMDc3Ml1dLCBbJ25wcicsIFs4ODMyXV0sIFsnbnByY3VlJywgWzg5MjhdXSwgWyducHJlYycsIFs4ODMyXV0sIFsnbnByZWNlcScsIFsxMDkyNywgODI0XV0sIFsnbnByZScsIFsxMDkyNywgODI0XV0sIFsnbnJhcnJjJywgWzEwNTQ3LCA4MjRdXSwgWyducmFycicsIFs4NjAzXV0sIFsnbnJBcnInLCBbODY1NV1dLCBbJ25yYXJydycsIFs4NjA1LCA4MjRdXSwgWyducmlnaHRhcnJvdycsIFs4NjAzXV0sIFsnblJpZ2h0YXJyb3cnLCBbODY1NV1dLCBbJ25ydHJpJywgWzg5MzldXSwgWyducnRyaWUnLCBbODk0MV1dLCBbJ25zYycsIFs4ODMzXV0sIFsnbnNjY3VlJywgWzg5MjldXSwgWyduc2NlJywgWzEwOTI4LCA4MjRdXSwgWydOc2NyJywgWzExOTk3N11dLCBbJ25zY3InLCBbMTIwMDAzXV0sIFsnbnNob3J0bWlkJywgWzg3NDBdXSwgWyduc2hvcnRwYXJhbGxlbCcsIFs4NzQyXV0sIFsnbnNpbScsIFs4NzY5XV0sIFsnbnNpbWUnLCBbODc3Ml1dLCBbJ25zaW1lcScsIFs4NzcyXV0sIFsnbnNtaWQnLCBbODc0MF1dLCBbJ25zcGFyJywgWzg3NDJdXSwgWyduc3FzdWJlJywgWzg5MzBdXSwgWyduc3FzdXBlJywgWzg5MzFdXSwgWyduc3ViJywgWzg4MzZdXSwgWyduc3ViRScsIFsxMDk0OSwgODI0XV0sIFsnbnN1YmUnLCBbODg0MF1dLCBbJ25zdWJzZXQnLCBbODgzNCwgODQwMl1dLCBbJ25zdWJzZXRlcScsIFs4ODQwXV0sIFsnbnN1YnNldGVxcScsIFsxMDk0OSwgODI0XV0sIFsnbnN1Y2MnLCBbODgzM11dLCBbJ25zdWNjZXEnLCBbMTA5MjgsIDgyNF1dLCBbJ25zdXAnLCBbODgzN11dLCBbJ25zdXBFJywgWzEwOTUwLCA4MjRdXSwgWyduc3VwZScsIFs4ODQxXV0sIFsnbnN1cHNldCcsIFs4ODM1LCA4NDAyXV0sIFsnbnN1cHNldGVxJywgWzg4NDFdXSwgWyduc3Vwc2V0ZXFxJywgWzEwOTUwLCA4MjRdXSwgWydudGdsJywgWzg4MjVdXSwgWydOdGlsZGUnLCBbMjA5XV0sIFsnbnRpbGRlJywgWzI0MV1dLCBbJ250bGcnLCBbODgyNF1dLCBbJ250cmlhbmdsZWxlZnQnLCBbODkzOF1dLCBbJ250cmlhbmdsZWxlZnRlcScsIFs4OTQwXV0sIFsnbnRyaWFuZ2xlcmlnaHQnLCBbODkzOV1dLCBbJ250cmlhbmdsZXJpZ2h0ZXEnLCBbODk0MV1dLCBbJ051JywgWzkyNV1dLCBbJ251JywgWzk1N11dLCBbJ251bScsIFszNV1dLCBbJ251bWVybycsIFs4NDcwXV0sIFsnbnVtc3AnLCBbODE5OV1dLCBbJ252YXAnLCBbODc4MSwgODQwMl1dLCBbJ252ZGFzaCcsIFs4ODc2XV0sIFsnbnZEYXNoJywgWzg4NzddXSwgWyduVmRhc2gnLCBbODg3OF1dLCBbJ25WRGFzaCcsIFs4ODc5XV0sIFsnbnZnZScsIFs4ODA1LCA4NDAyXV0sIFsnbnZndCcsIFs2MiwgODQwMl1dLCBbJ252SGFycicsIFsxMDUwMF1dLCBbJ252aW5maW4nLCBbMTA3MThdXSwgWydudmxBcnInLCBbMTA0OThdXSwgWydudmxlJywgWzg4MDQsIDg0MDJdXSwgWydudmx0JywgWzYwLCA4NDAyXV0sIFsnbnZsdHJpZScsIFs4ODg0LCA4NDAyXV0sIFsnbnZyQXJyJywgWzEwNDk5XV0sIFsnbnZydHJpZScsIFs4ODg1LCA4NDAyXV0sIFsnbnZzaW0nLCBbODc2NCwgODQwMl1dLCBbJ253YXJoaycsIFsxMDUzMV1dLCBbJ253YXJyJywgWzg1OThdXSwgWydud0FycicsIFs4NjYyXV0sIFsnbndhcnJvdycsIFs4NTk4XV0sIFsnbnduZWFyJywgWzEwNTM1XV0sIFsnT2FjdXRlJywgWzIxMV1dLCBbJ29hY3V0ZScsIFsyNDNdXSwgWydvYXN0JywgWzg4NTldXSwgWydPY2lyYycsIFsyMTJdXSwgWydvY2lyYycsIFsyNDRdXSwgWydvY2lyJywgWzg4NThdXSwgWydPY3knLCBbMTA1NF1dLCBbJ29jeScsIFsxMDg2XV0sIFsnb2Rhc2gnLCBbODg2MV1dLCBbJ09kYmxhYycsIFszMzZdXSwgWydvZGJsYWMnLCBbMzM3XV0sIFsnb2RpdicsIFsxMDgwOF1dLCBbJ29kb3QnLCBbODg1N11dLCBbJ29kc29sZCcsIFsxMDY4NF1dLCBbJ09FbGlnJywgWzMzOF1dLCBbJ29lbGlnJywgWzMzOV1dLCBbJ29mY2lyJywgWzEwNjg3XV0sIFsnT2ZyJywgWzEyMDA4Ml1dLCBbJ29mcicsIFsxMjAxMDhdXSwgWydvZ29uJywgWzczMV1dLCBbJ09ncmF2ZScsIFsyMTBdXSwgWydvZ3JhdmUnLCBbMjQyXV0sIFsnb2d0JywgWzEwNjg5XV0sIFsnb2hiYXInLCBbMTA2NzddXSwgWydvaG0nLCBbOTM3XV0sIFsnb2ludCcsIFs4NzUwXV0sIFsnb2xhcnInLCBbODYzNF1dLCBbJ29sY2lyJywgWzEwNjg2XV0sIFsnb2xjcm9zcycsIFsxMDY4M11dLCBbJ29saW5lJywgWzgyNTRdXSwgWydvbHQnLCBbMTA2ODhdXSwgWydPbWFjcicsIFszMzJdXSwgWydvbWFjcicsIFszMzNdXSwgWydPbWVnYScsIFs5MzddXSwgWydvbWVnYScsIFs5NjldXSwgWydPbWljcm9uJywgWzkyN11dLCBbJ29taWNyb24nLCBbOTU5XV0sIFsnb21pZCcsIFsxMDY3OF1dLCBbJ29taW51cycsIFs4ODU0XV0sIFsnT29wZicsIFsxMjAxMzRdXSwgWydvb3BmJywgWzEyMDE2MF1dLCBbJ29wYXInLCBbMTA2NzldXSwgWydPcGVuQ3VybHlEb3VibGVRdW90ZScsIFs4MjIwXV0sIFsnT3BlbkN1cmx5UXVvdGUnLCBbODIxNl1dLCBbJ29wZXJwJywgWzEwNjgxXV0sIFsnb3BsdXMnLCBbODg1M11dLCBbJ29yYXJyJywgWzg2MzVdXSwgWydPcicsIFsxMDgzNl1dLCBbJ29yJywgWzg3NDRdXSwgWydvcmQnLCBbMTA4NDVdXSwgWydvcmRlcicsIFs4NTAwXV0sIFsnb3JkZXJvZicsIFs4NTAwXV0sIFsnb3JkZicsIFsxNzBdXSwgWydvcmRtJywgWzE4Nl1dLCBbJ29yaWdvZicsIFs4ODg2XV0sIFsnb3JvcicsIFsxMDgzOF1dLCBbJ29yc2xvcGUnLCBbMTA4MzldXSwgWydvcnYnLCBbMTA4NDNdXSwgWydvUycsIFs5NDE2XV0sIFsnT3NjcicsIFsxMTk5NzhdXSwgWydvc2NyJywgWzg1MDBdXSwgWydPc2xhc2gnLCBbMjE2XV0sIFsnb3NsYXNoJywgWzI0OF1dLCBbJ29zb2wnLCBbODg1Nl1dLCBbJ090aWxkZScsIFsyMTNdXSwgWydvdGlsZGUnLCBbMjQ1XV0sIFsnb3RpbWVzYXMnLCBbMTA4MDZdXSwgWydPdGltZXMnLCBbMTA4MDddXSwgWydvdGltZXMnLCBbODg1NV1dLCBbJ091bWwnLCBbMjE0XV0sIFsnb3VtbCcsIFsyNDZdXSwgWydvdmJhcicsIFs5MDIxXV0sIFsnT3ZlckJhcicsIFs4MjU0XV0sIFsnT3ZlckJyYWNlJywgWzkxODJdXSwgWydPdmVyQnJhY2tldCcsIFs5MTQwXV0sIFsnT3ZlclBhcmVudGhlc2lzJywgWzkxODBdXSwgWydwYXJhJywgWzE4Ml1dLCBbJ3BhcmFsbGVsJywgWzg3NDFdXSwgWydwYXInLCBbODc0MV1dLCBbJ3BhcnNpbScsIFsxMDk5NV1dLCBbJ3BhcnNsJywgWzExMDA1XV0sIFsncGFydCcsIFs4NzA2XV0sIFsnUGFydGlhbEQnLCBbODcwNl1dLCBbJ1BjeScsIFsxMDU1XV0sIFsncGN5JywgWzEwODddXSwgWydwZXJjbnQnLCBbMzddXSwgWydwZXJpb2QnLCBbNDZdXSwgWydwZXJtaWwnLCBbODI0MF1dLCBbJ3BlcnAnLCBbODg2OV1dLCBbJ3BlcnRlbmsnLCBbODI0MV1dLCBbJ1BmcicsIFsxMjAwODNdXSwgWydwZnInLCBbMTIwMTA5XV0sIFsnUGhpJywgWzkzNF1dLCBbJ3BoaScsIFs5NjZdXSwgWydwaGl2JywgWzk4MV1dLCBbJ3BobW1hdCcsIFs4NDk5XV0sIFsncGhvbmUnLCBbOTc0Ml1dLCBbJ1BpJywgWzkyOF1dLCBbJ3BpJywgWzk2MF1dLCBbJ3BpdGNoZm9yaycsIFs4OTE2XV0sIFsncGl2JywgWzk4Ml1dLCBbJ3BsYW5jaycsIFs4NDYzXV0sIFsncGxhbmNraCcsIFs4NDYyXV0sIFsncGxhbmt2JywgWzg0NjNdXSwgWydwbHVzYWNpcicsIFsxMDc4N11dLCBbJ3BsdXNiJywgWzg4NjJdXSwgWydwbHVzY2lyJywgWzEwNzg2XV0sIFsncGx1cycsIFs0M11dLCBbJ3BsdXNkbycsIFs4NzI0XV0sIFsncGx1c2R1JywgWzEwNzg5XV0sIFsncGx1c2UnLCBbMTA4NjZdXSwgWydQbHVzTWludXMnLCBbMTc3XV0sIFsncGx1c21uJywgWzE3N11dLCBbJ3BsdXNzaW0nLCBbMTA3OTBdXSwgWydwbHVzdHdvJywgWzEwNzkxXV0sIFsncG0nLCBbMTc3XV0sIFsnUG9pbmNhcmVwbGFuZScsIFs4NDYwXV0sIFsncG9pbnRpbnQnLCBbMTA3NzNdXSwgWydwb3BmJywgWzEyMDE2MV1dLCBbJ1BvcGYnLCBbODQ3M11dLCBbJ3BvdW5kJywgWzE2M11dLCBbJ3ByYXAnLCBbMTA5MzVdXSwgWydQcicsIFsxMDkzOV1dLCBbJ3ByJywgWzg4MjZdXSwgWydwcmN1ZScsIFs4ODI4XV0sIFsncHJlY2FwcHJveCcsIFsxMDkzNV1dLCBbJ3ByZWMnLCBbODgyNl1dLCBbJ3ByZWNjdXJseWVxJywgWzg4MjhdXSwgWydQcmVjZWRlcycsIFs4ODI2XV0sIFsnUHJlY2VkZXNFcXVhbCcsIFsxMDkyN11dLCBbJ1ByZWNlZGVzU2xhbnRFcXVhbCcsIFs4ODI4XV0sIFsnUHJlY2VkZXNUaWxkZScsIFs4ODMwXV0sIFsncHJlY2VxJywgWzEwOTI3XV0sIFsncHJlY25hcHByb3gnLCBbMTA5MzddXSwgWydwcmVjbmVxcScsIFsxMDkzM11dLCBbJ3ByZWNuc2ltJywgWzg5MzZdXSwgWydwcmUnLCBbMTA5MjddXSwgWydwckUnLCBbMTA5MzFdXSwgWydwcmVjc2ltJywgWzg4MzBdXSwgWydwcmltZScsIFs4MjQyXV0sIFsnUHJpbWUnLCBbODI0M11dLCBbJ3ByaW1lcycsIFs4NDczXV0sIFsncHJuYXAnLCBbMTA5MzddXSwgWydwcm5FJywgWzEwOTMzXV0sIFsncHJuc2ltJywgWzg5MzZdXSwgWydwcm9kJywgWzg3MTldXSwgWydQcm9kdWN0JywgWzg3MTldXSwgWydwcm9mYWxhcicsIFs5MDA2XV0sIFsncHJvZmxpbmUnLCBbODk3OF1dLCBbJ3Byb2ZzdXJmJywgWzg5NzldXSwgWydwcm9wJywgWzg3MzNdXSwgWydQcm9wb3J0aW9uYWwnLCBbODczM11dLCBbJ1Byb3BvcnRpb24nLCBbODc1OV1dLCBbJ3Byb3B0bycsIFs4NzMzXV0sIFsncHJzaW0nLCBbODgzMF1dLCBbJ3BydXJlbCcsIFs4ODgwXV0sIFsnUHNjcicsIFsxMTk5NzldXSwgWydwc2NyJywgWzEyMDAwNV1dLCBbJ1BzaScsIFs5MzZdXSwgWydwc2knLCBbOTY4XV0sIFsncHVuY3NwJywgWzgyMDBdXSwgWydRZnInLCBbMTIwMDg0XV0sIFsncWZyJywgWzEyMDExMF1dLCBbJ3FpbnQnLCBbMTA3NjRdXSwgWydxb3BmJywgWzEyMDE2Ml1dLCBbJ1FvcGYnLCBbODQ3NF1dLCBbJ3FwcmltZScsIFs4Mjc5XV0sIFsnUXNjcicsIFsxMTk5ODBdXSwgWydxc2NyJywgWzEyMDAwNl1dLCBbJ3F1YXRlcm5pb25zJywgWzg0NjFdXSwgWydxdWF0aW50JywgWzEwNzc0XV0sIFsncXVlc3QnLCBbNjNdXSwgWydxdWVzdGVxJywgWzg3OTldXSwgWydxdW90JywgWzM0XV0sIFsnUVVPVCcsIFszNF1dLCBbJ3JBYXJyJywgWzg2NjddXSwgWydyYWNlJywgWzg3NjUsIDgxN11dLCBbJ1JhY3V0ZScsIFszNDBdXSwgWydyYWN1dGUnLCBbMzQxXV0sIFsncmFkaWMnLCBbODczMF1dLCBbJ3JhZW1wdHl2JywgWzEwNjc1XV0sIFsncmFuZycsIFsxMDIxN11dLCBbJ1JhbmcnLCBbMTAyMTldXSwgWydyYW5nZCcsIFsxMDY0Ml1dLCBbJ3JhbmdlJywgWzEwNjYxXV0sIFsncmFuZ2xlJywgWzEwMjE3XV0sIFsncmFxdW8nLCBbMTg3XV0sIFsncmFycmFwJywgWzEwNjEzXV0sIFsncmFycmInLCBbODY3N11dLCBbJ3JhcnJiZnMnLCBbMTA1MjhdXSwgWydyYXJyYycsIFsxMDU0N11dLCBbJ3JhcnInLCBbODU5NF1dLCBbJ1JhcnInLCBbODYwOF1dLCBbJ3JBcnInLCBbODY1OF1dLCBbJ3JhcnJmcycsIFsxMDUyNl1dLCBbJ3JhcnJoaycsIFs4NjE4XV0sIFsncmFycmxwJywgWzg2MjBdXSwgWydyYXJycGwnLCBbMTA1NjVdXSwgWydyYXJyc2ltJywgWzEwNjEyXV0sIFsnUmFycnRsJywgWzEwNTE4XV0sIFsncmFycnRsJywgWzg2MTFdXSwgWydyYXJydycsIFs4NjA1XV0sIFsncmF0YWlsJywgWzEwNTIyXV0sIFsnckF0YWlsJywgWzEwNTI0XV0sIFsncmF0aW8nLCBbODc1OF1dLCBbJ3JhdGlvbmFscycsIFs4NDc0XV0sIFsncmJhcnInLCBbMTA1MDldXSwgWydyQmFycicsIFsxMDUxMV1dLCBbJ1JCYXJyJywgWzEwNTEyXV0sIFsncmJicmsnLCBbMTAwOTldXSwgWydyYnJhY2UnLCBbMTI1XV0sIFsncmJyYWNrJywgWzkzXV0sIFsncmJya2UnLCBbMTA2MzZdXSwgWydyYnJrc2xkJywgWzEwNjM4XV0sIFsncmJya3NsdScsIFsxMDY0MF1dLCBbJ1JjYXJvbicsIFszNDRdXSwgWydyY2Fyb24nLCBbMzQ1XV0sIFsnUmNlZGlsJywgWzM0Ml1dLCBbJ3JjZWRpbCcsIFszNDNdXSwgWydyY2VpbCcsIFs4OTY5XV0sIFsncmN1YicsIFsxMjVdXSwgWydSY3knLCBbMTA1Nl1dLCBbJ3JjeScsIFsxMDg4XV0sIFsncmRjYScsIFsxMDU1MV1dLCBbJ3JkbGRoYXInLCBbMTA2MDFdXSwgWydyZHF1bycsIFs4MjIxXV0sIFsncmRxdW9yJywgWzgyMjFdXSwgWydyZHNoJywgWzg2MjddXSwgWydyZWFsJywgWzg0NzZdXSwgWydyZWFsaW5lJywgWzg0NzVdXSwgWydyZWFscGFydCcsIFs4NDc2XV0sIFsncmVhbHMnLCBbODQ3N11dLCBbJ1JlJywgWzg0NzZdXSwgWydyZWN0JywgWzk2NDVdXSwgWydyZWcnLCBbMTc0XV0sIFsnUkVHJywgWzE3NF1dLCBbJ1JldmVyc2VFbGVtZW50JywgWzg3MTVdXSwgWydSZXZlcnNlRXF1aWxpYnJpdW0nLCBbODY1MV1dLCBbJ1JldmVyc2VVcEVxdWlsaWJyaXVtJywgWzEwNjA3XV0sIFsncmZpc2h0JywgWzEwNjIxXV0sIFsncmZsb29yJywgWzg5NzFdXSwgWydyZnInLCBbMTIwMTExXV0sIFsnUmZyJywgWzg0NzZdXSwgWydySGFyJywgWzEwNTk2XV0sIFsncmhhcmQnLCBbODY0MV1dLCBbJ3JoYXJ1JywgWzg2NDBdXSwgWydyaGFydWwnLCBbMTA2MDRdXSwgWydSaG8nLCBbOTI5XV0sIFsncmhvJywgWzk2MV1dLCBbJ3Job3YnLCBbMTAwOV1dLCBbJ1JpZ2h0QW5nbGVCcmFja2V0JywgWzEwMjE3XV0sIFsnUmlnaHRBcnJvd0JhcicsIFs4Njc3XV0sIFsncmlnaHRhcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRhcnJvdycsIFs4NjU4XV0sIFsnUmlnaHRBcnJvd0xlZnRBcnJvdycsIFs4NjQ0XV0sIFsncmlnaHRhcnJvd3RhaWwnLCBbODYxMV1dLCBbJ1JpZ2h0Q2VpbGluZycsIFs4OTY5XV0sIFsnUmlnaHREb3VibGVCcmFja2V0JywgWzEwMjE1XV0sIFsnUmlnaHREb3duVGVlVmVjdG9yJywgWzEwNTg5XV0sIFsnUmlnaHREb3duVmVjdG9yQmFyJywgWzEwNTgxXV0sIFsnUmlnaHREb3duVmVjdG9yJywgWzg2NDJdXSwgWydSaWdodEZsb29yJywgWzg5NzFdXSwgWydyaWdodGhhcnBvb25kb3duJywgWzg2NDFdXSwgWydyaWdodGhhcnBvb251cCcsIFs4NjQwXV0sIFsncmlnaHRsZWZ0YXJyb3dzJywgWzg2NDRdXSwgWydyaWdodGxlZnRoYXJwb29ucycsIFs4NjUyXV0sIFsncmlnaHRyaWdodGFycm93cycsIFs4NjQ5XV0sIFsncmlnaHRzcXVpZ2Fycm93JywgWzg2MDVdXSwgWydSaWdodFRlZUFycm93JywgWzg2MTRdXSwgWydSaWdodFRlZScsIFs4ODY2XV0sIFsnUmlnaHRUZWVWZWN0b3InLCBbMTA1ODddXSwgWydyaWdodHRocmVldGltZXMnLCBbODkwOF1dLCBbJ1JpZ2h0VHJpYW5nbGVCYXInLCBbMTA3MDRdXSwgWydSaWdodFRyaWFuZ2xlJywgWzg4ODNdXSwgWydSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODg4NV1dLCBbJ1JpZ2h0VXBEb3duVmVjdG9yJywgWzEwNTc1XV0sIFsnUmlnaHRVcFRlZVZlY3RvcicsIFsxMDU4OF1dLCBbJ1JpZ2h0VXBWZWN0b3JCYXInLCBbMTA1ODBdXSwgWydSaWdodFVwVmVjdG9yJywgWzg2MzhdXSwgWydSaWdodFZlY3RvckJhcicsIFsxMDU3OV1dLCBbJ1JpZ2h0VmVjdG9yJywgWzg2NDBdXSwgWydyaW5nJywgWzczMF1dLCBbJ3Jpc2luZ2RvdHNlcScsIFs4Nzg3XV0sIFsncmxhcnInLCBbODY0NF1dLCBbJ3JsaGFyJywgWzg2NTJdXSwgWydybG0nLCBbODIwN11dLCBbJ3Jtb3VzdGFjaGUnLCBbOTEzN11dLCBbJ3Jtb3VzdCcsIFs5MTM3XV0sIFsncm5taWQnLCBbMTA5OTBdXSwgWydyb2FuZycsIFsxMDIyMV1dLCBbJ3JvYXJyJywgWzg3MDJdXSwgWydyb2JyaycsIFsxMDIxNV1dLCBbJ3JvcGFyJywgWzEwNjMwXV0sIFsncm9wZicsIFsxMjAxNjNdXSwgWydSb3BmJywgWzg0NzddXSwgWydyb3BsdXMnLCBbMTA3OThdXSwgWydyb3RpbWVzJywgWzEwODA1XV0sIFsnUm91bmRJbXBsaWVzJywgWzEwNjA4XV0sIFsncnBhcicsIFs0MV1dLCBbJ3JwYXJndCcsIFsxMDY0NF1dLCBbJ3JwcG9saW50JywgWzEwNzcwXV0sIFsncnJhcnInLCBbODY0OV1dLCBbJ1JyaWdodGFycm93JywgWzg2NjddXSwgWydyc2FxdW8nLCBbODI1MF1dLCBbJ3JzY3InLCBbMTIwMDA3XV0sIFsnUnNjcicsIFs4NDc1XV0sIFsncnNoJywgWzg2MjVdXSwgWydSc2gnLCBbODYyNV1dLCBbJ3JzcWInLCBbOTNdXSwgWydyc3F1bycsIFs4MjE3XV0sIFsncnNxdW9yJywgWzgyMTddXSwgWydydGhyZWUnLCBbODkwOF1dLCBbJ3J0aW1lcycsIFs4OTA2XV0sIFsncnRyaScsIFs5NjU3XV0sIFsncnRyaWUnLCBbODg4NV1dLCBbJ3J0cmlmJywgWzk2NTZdXSwgWydydHJpbHRyaScsIFsxMDcwMl1dLCBbJ1J1bGVEZWxheWVkJywgWzEwNzQwXV0sIFsncnVsdWhhcicsIFsxMDYwMF1dLCBbJ3J4JywgWzg0NzhdXSwgWydTYWN1dGUnLCBbMzQ2XV0sIFsnc2FjdXRlJywgWzM0N11dLCBbJ3NicXVvJywgWzgyMThdXSwgWydzY2FwJywgWzEwOTM2XV0sIFsnU2Nhcm9uJywgWzM1Ml1dLCBbJ3NjYXJvbicsIFszNTNdXSwgWydTYycsIFsxMDk0MF1dLCBbJ3NjJywgWzg4MjddXSwgWydzY2N1ZScsIFs4ODI5XV0sIFsnc2NlJywgWzEwOTI4XV0sIFsnc2NFJywgWzEwOTMyXV0sIFsnU2NlZGlsJywgWzM1MF1dLCBbJ3NjZWRpbCcsIFszNTFdXSwgWydTY2lyYycsIFszNDhdXSwgWydzY2lyYycsIFszNDldXSwgWydzY25hcCcsIFsxMDkzOF1dLCBbJ3NjbkUnLCBbMTA5MzRdXSwgWydzY25zaW0nLCBbODkzN11dLCBbJ3NjcG9saW50JywgWzEwNzcxXV0sIFsnc2NzaW0nLCBbODgzMV1dLCBbJ1NjeScsIFsxMDU3XV0sIFsnc2N5JywgWzEwODldXSwgWydzZG90YicsIFs4ODY1XV0sIFsnc2RvdCcsIFs4OTAxXV0sIFsnc2RvdGUnLCBbMTA4NTRdXSwgWydzZWFyaGsnLCBbMTA1MzNdXSwgWydzZWFycicsIFs4NjAwXV0sIFsnc2VBcnInLCBbODY2NF1dLCBbJ3NlYXJyb3cnLCBbODYwMF1dLCBbJ3NlY3QnLCBbMTY3XV0sIFsnc2VtaScsIFs1OV1dLCBbJ3Nlc3dhcicsIFsxMDUzN11dLCBbJ3NldG1pbnVzJywgWzg3MjZdXSwgWydzZXRtbicsIFs4NzI2XV0sIFsnc2V4dCcsIFsxMDAzOF1dLCBbJ1NmcicsIFsxMjAwODZdXSwgWydzZnInLCBbMTIwMTEyXV0sIFsnc2Zyb3duJywgWzg5OTRdXSwgWydzaGFycCcsIFs5ODM5XV0sIFsnU0hDSGN5JywgWzEwNjVdXSwgWydzaGNoY3knLCBbMTA5N11dLCBbJ1NIY3knLCBbMTA2NF1dLCBbJ3NoY3knLCBbMTA5Nl1dLCBbJ1Nob3J0RG93bkFycm93JywgWzg1OTVdXSwgWydTaG9ydExlZnRBcnJvdycsIFs4NTkyXV0sIFsnc2hvcnRtaWQnLCBbODczOV1dLCBbJ3Nob3J0cGFyYWxsZWwnLCBbODc0MV1dLCBbJ1Nob3J0UmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnU2hvcnRVcEFycm93JywgWzg1OTNdXSwgWydzaHknLCBbMTczXV0sIFsnU2lnbWEnLCBbOTMxXV0sIFsnc2lnbWEnLCBbOTYzXV0sIFsnc2lnbWFmJywgWzk2Ml1dLCBbJ3NpZ21hdicsIFs5NjJdXSwgWydzaW0nLCBbODc2NF1dLCBbJ3NpbWRvdCcsIFsxMDg1OF1dLCBbJ3NpbWUnLCBbODc3MV1dLCBbJ3NpbWVxJywgWzg3NzFdXSwgWydzaW1nJywgWzEwOTEwXV0sIFsnc2ltZ0UnLCBbMTA5MTJdXSwgWydzaW1sJywgWzEwOTA5XV0sIFsnc2ltbEUnLCBbMTA5MTFdXSwgWydzaW1uZScsIFs4Nzc0XV0sIFsnc2ltcGx1cycsIFsxMDc4OF1dLCBbJ3NpbXJhcnInLCBbMTA2MTBdXSwgWydzbGFycicsIFs4NTkyXV0sIFsnU21hbGxDaXJjbGUnLCBbODcyOF1dLCBbJ3NtYWxsc2V0bWludXMnLCBbODcyNl1dLCBbJ3NtYXNocCcsIFsxMDgwM11dLCBbJ3NtZXBhcnNsJywgWzEwNzI0XV0sIFsnc21pZCcsIFs4NzM5XV0sIFsnc21pbGUnLCBbODk5NV1dLCBbJ3NtdCcsIFsxMDkyMl1dLCBbJ3NtdGUnLCBbMTA5MjRdXSwgWydzbXRlcycsIFsxMDkyNCwgNjUwMjRdXSwgWydTT0ZUY3knLCBbMTA2OF1dLCBbJ3NvZnRjeScsIFsxMTAwXV0sIFsnc29sYmFyJywgWzkwMjNdXSwgWydzb2xiJywgWzEwNjkyXV0sIFsnc29sJywgWzQ3XV0sIFsnU29wZicsIFsxMjAxMzhdXSwgWydzb3BmJywgWzEyMDE2NF1dLCBbJ3NwYWRlcycsIFs5ODI0XV0sIFsnc3BhZGVzdWl0JywgWzk4MjRdXSwgWydzcGFyJywgWzg3NDFdXSwgWydzcWNhcCcsIFs4ODUxXV0sIFsnc3FjYXBzJywgWzg4NTEsIDY1MDI0XV0sIFsnc3FjdXAnLCBbODg1Ml1dLCBbJ3NxY3VwcycsIFs4ODUyLCA2NTAyNF1dLCBbJ1NxcnQnLCBbODczMF1dLCBbJ3Nxc3ViJywgWzg4NDddXSwgWydzcXN1YmUnLCBbODg0OV1dLCBbJ3Nxc3Vic2V0JywgWzg4NDddXSwgWydzcXN1YnNldGVxJywgWzg4NDldXSwgWydzcXN1cCcsIFs4ODQ4XV0sIFsnc3FzdXBlJywgWzg4NTBdXSwgWydzcXN1cHNldCcsIFs4ODQ4XV0sIFsnc3FzdXBzZXRlcScsIFs4ODUwXV0sIFsnc3F1YXJlJywgWzk2MzNdXSwgWydTcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZUludGVyc2VjdGlvbicsIFs4ODUxXV0sIFsnU3F1YXJlU3Vic2V0JywgWzg4NDddXSwgWydTcXVhcmVTdWJzZXRFcXVhbCcsIFs4ODQ5XV0sIFsnU3F1YXJlU3VwZXJzZXQnLCBbODg0OF1dLCBbJ1NxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODg1MF1dLCBbJ1NxdWFyZVVuaW9uJywgWzg4NTJdXSwgWydzcXVhcmYnLCBbOTY0Ml1dLCBbJ3NxdScsIFs5NjMzXV0sIFsnc3F1ZicsIFs5NjQyXV0sIFsnc3JhcnInLCBbODU5NF1dLCBbJ1NzY3InLCBbMTE5OTgyXV0sIFsnc3NjcicsIFsxMjAwMDhdXSwgWydzc2V0bW4nLCBbODcyNl1dLCBbJ3NzbWlsZScsIFs4OTk1XV0sIFsnc3N0YXJmJywgWzg5MDJdXSwgWydTdGFyJywgWzg5MDJdXSwgWydzdGFyJywgWzk3MzRdXSwgWydzdGFyZicsIFs5NzMzXV0sIFsnc3RyYWlnaHRlcHNpbG9uJywgWzEwMTNdXSwgWydzdHJhaWdodHBoaScsIFs5ODFdXSwgWydzdHJucycsIFsxNzVdXSwgWydzdWInLCBbODgzNF1dLCBbJ1N1YicsIFs4OTEyXV0sIFsnc3ViZG90JywgWzEwOTQxXV0sIFsnc3ViRScsIFsxMDk0OV1dLCBbJ3N1YmUnLCBbODgzOF1dLCBbJ3N1YmVkb3QnLCBbMTA5NDddXSwgWydzdWJtdWx0JywgWzEwOTQ1XV0sIFsnc3VibkUnLCBbMTA5NTVdXSwgWydzdWJuZScsIFs4ODQyXV0sIFsnc3VicGx1cycsIFsxMDk0M11dLCBbJ3N1YnJhcnInLCBbMTA2MTddXSwgWydzdWJzZXQnLCBbODgzNF1dLCBbJ1N1YnNldCcsIFs4OTEyXV0sIFsnc3Vic2V0ZXEnLCBbODgzOF1dLCBbJ3N1YnNldGVxcScsIFsxMDk0OV1dLCBbJ1N1YnNldEVxdWFsJywgWzg4MzhdXSwgWydzdWJzZXRuZXEnLCBbODg0Ml1dLCBbJ3N1YnNldG5lcXEnLCBbMTA5NTVdXSwgWydzdWJzaW0nLCBbMTA5NTFdXSwgWydzdWJzdWInLCBbMTA5NjVdXSwgWydzdWJzdXAnLCBbMTA5NjNdXSwgWydzdWNjYXBwcm94JywgWzEwOTM2XV0sIFsnc3VjYycsIFs4ODI3XV0sIFsnc3VjY2N1cmx5ZXEnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzJywgWzg4MjddXSwgWydTdWNjZWVkc0VxdWFsJywgWzEwOTI4XV0sIFsnU3VjY2VlZHNTbGFudEVxdWFsJywgWzg4MjldXSwgWydTdWNjZWVkc1RpbGRlJywgWzg4MzFdXSwgWydzdWNjZXEnLCBbMTA5MjhdXSwgWydzdWNjbmFwcHJveCcsIFsxMDkzOF1dLCBbJ3N1Y2NuZXFxJywgWzEwOTM0XV0sIFsnc3VjY25zaW0nLCBbODkzN11dLCBbJ3N1Y2NzaW0nLCBbODgzMV1dLCBbJ1N1Y2hUaGF0JywgWzg3MTVdXSwgWydzdW0nLCBbODcyMV1dLCBbJ1N1bScsIFs4NzIxXV0sIFsnc3VuZycsIFs5ODM0XV0sIFsnc3VwMScsIFsxODVdXSwgWydzdXAyJywgWzE3OF1dLCBbJ3N1cDMnLCBbMTc5XV0sIFsnc3VwJywgWzg4MzVdXSwgWydTdXAnLCBbODkxM11dLCBbJ3N1cGRvdCcsIFsxMDk0Ml1dLCBbJ3N1cGRzdWInLCBbMTA5NjhdXSwgWydzdXBFJywgWzEwOTUwXV0sIFsnc3VwZScsIFs4ODM5XV0sIFsnc3VwZWRvdCcsIFsxMDk0OF1dLCBbJ1N1cGVyc2V0JywgWzg4MzVdXSwgWydTdXBlcnNldEVxdWFsJywgWzg4MzldXSwgWydzdXBoc29sJywgWzEwMTg1XV0sIFsnc3VwaHN1YicsIFsxMDk2N11dLCBbJ3N1cGxhcnInLCBbMTA2MTldXSwgWydzdXBtdWx0JywgWzEwOTQ2XV0sIFsnc3VwbkUnLCBbMTA5NTZdXSwgWydzdXBuZScsIFs4ODQzXV0sIFsnc3VwcGx1cycsIFsxMDk0NF1dLCBbJ3N1cHNldCcsIFs4ODM1XV0sIFsnU3Vwc2V0JywgWzg5MTNdXSwgWydzdXBzZXRlcScsIFs4ODM5XV0sIFsnc3Vwc2V0ZXFxJywgWzEwOTUwXV0sIFsnc3Vwc2V0bmVxJywgWzg4NDNdXSwgWydzdXBzZXRuZXFxJywgWzEwOTU2XV0sIFsnc3Vwc2ltJywgWzEwOTUyXV0sIFsnc3Vwc3ViJywgWzEwOTY0XV0sIFsnc3Vwc3VwJywgWzEwOTY2XV0sIFsnc3dhcmhrJywgWzEwNTM0XV0sIFsnc3dhcnInLCBbODYwMV1dLCBbJ3N3QXJyJywgWzg2NjVdXSwgWydzd2Fycm93JywgWzg2MDFdXSwgWydzd253YXInLCBbMTA1MzhdXSwgWydzemxpZycsIFsyMjNdXSwgWydUYWInLCBbOV1dLCBbJ3RhcmdldCcsIFs4OTgyXV0sIFsnVGF1JywgWzkzMl1dLCBbJ3RhdScsIFs5NjRdXSwgWyd0YnJrJywgWzkxNDBdXSwgWydUY2Fyb24nLCBbMzU2XV0sIFsndGNhcm9uJywgWzM1N11dLCBbJ1RjZWRpbCcsIFszNTRdXSwgWyd0Y2VkaWwnLCBbMzU1XV0sIFsnVGN5JywgWzEwNThdXSwgWyd0Y3knLCBbMTA5MF1dLCBbJ3Rkb3QnLCBbODQxMV1dLCBbJ3RlbHJlYycsIFs4OTgxXV0sIFsnVGZyJywgWzEyMDA4N11dLCBbJ3RmcicsIFsxMjAxMTNdXSwgWyd0aGVyZTQnLCBbODc1Nl1dLCBbJ3RoZXJlZm9yZScsIFs4NzU2XV0sIFsnVGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGV0YScsIFs5MjBdXSwgWyd0aGV0YScsIFs5NTJdXSwgWyd0aGV0YXN5bScsIFs5NzddXSwgWyd0aGV0YXYnLCBbOTc3XV0sIFsndGhpY2thcHByb3gnLCBbODc3Nl1dLCBbJ3RoaWNrc2ltJywgWzg3NjRdXSwgWydUaGlja1NwYWNlJywgWzgyODcsIDgyMDJdXSwgWydUaGluU3BhY2UnLCBbODIwMV1dLCBbJ3RoaW5zcCcsIFs4MjAxXV0sIFsndGhrYXAnLCBbODc3Nl1dLCBbJ3Roa3NpbScsIFs4NzY0XV0sIFsnVEhPUk4nLCBbMjIyXV0sIFsndGhvcm4nLCBbMjU0XV0sIFsndGlsZGUnLCBbNzMyXV0sIFsnVGlsZGUnLCBbODc2NF1dLCBbJ1RpbGRlRXF1YWwnLCBbODc3MV1dLCBbJ1RpbGRlRnVsbEVxdWFsJywgWzg3NzNdXSwgWydUaWxkZVRpbGRlJywgWzg3NzZdXSwgWyd0aW1lc2JhcicsIFsxMDgwMV1dLCBbJ3RpbWVzYicsIFs4ODY0XV0sIFsndGltZXMnLCBbMjE1XV0sIFsndGltZXNkJywgWzEwODAwXV0sIFsndGludCcsIFs4NzQ5XV0sIFsndG9lYScsIFsxMDUzNl1dLCBbJ3RvcGJvdCcsIFs5MDE0XV0sIFsndG9wY2lyJywgWzEwOTkzXV0sIFsndG9wJywgWzg4NjhdXSwgWydUb3BmJywgWzEyMDEzOV1dLCBbJ3RvcGYnLCBbMTIwMTY1XV0sIFsndG9wZm9yaycsIFsxMDk3MF1dLCBbJ3Rvc2EnLCBbMTA1MzddXSwgWyd0cHJpbWUnLCBbODI0NF1dLCBbJ3RyYWRlJywgWzg0ODJdXSwgWydUUkFERScsIFs4NDgyXV0sIFsndHJpYW5nbGUnLCBbOTY1M11dLCBbJ3RyaWFuZ2xlZG93bicsIFs5NjYzXV0sIFsndHJpYW5nbGVsZWZ0JywgWzk2NjddXSwgWyd0cmlhbmdsZWxlZnRlcScsIFs4ODg0XV0sIFsndHJpYW5nbGVxJywgWzg3OTZdXSwgWyd0cmlhbmdsZXJpZ2h0JywgWzk2NTddXSwgWyd0cmlhbmdsZXJpZ2h0ZXEnLCBbODg4NV1dLCBbJ3RyaWRvdCcsIFs5NzA4XV0sIFsndHJpZScsIFs4Nzk2XV0sIFsndHJpbWludXMnLCBbMTA4MTBdXSwgWydUcmlwbGVEb3QnLCBbODQxMV1dLCBbJ3RyaXBsdXMnLCBbMTA4MDldXSwgWyd0cmlzYicsIFsxMDcwMV1dLCBbJ3RyaXRpbWUnLCBbMTA4MTFdXSwgWyd0cnBleml1bScsIFs5MTg2XV0sIFsnVHNjcicsIFsxMTk5ODNdXSwgWyd0c2NyJywgWzEyMDAwOV1dLCBbJ1RTY3knLCBbMTA2Ml1dLCBbJ3RzY3knLCBbMTA5NF1dLCBbJ1RTSGN5JywgWzEwMzVdXSwgWyd0c2hjeScsIFsxMTE1XV0sIFsnVHN0cm9rJywgWzM1OF1dLCBbJ3RzdHJvaycsIFszNTldXSwgWyd0d2l4dCcsIFs4ODEyXV0sIFsndHdvaGVhZGxlZnRhcnJvdycsIFs4NjA2XV0sIFsndHdvaGVhZHJpZ2h0YXJyb3cnLCBbODYwOF1dLCBbJ1VhY3V0ZScsIFsyMThdXSwgWyd1YWN1dGUnLCBbMjUwXV0sIFsndWFycicsIFs4NTkzXV0sIFsnVWFycicsIFs4NjA3XV0sIFsndUFycicsIFs4NjU3XV0sIFsnVWFycm9jaXInLCBbMTA1NjldXSwgWydVYnJjeScsIFsxMDM4XV0sIFsndWJyY3knLCBbMTExOF1dLCBbJ1VicmV2ZScsIFszNjRdXSwgWyd1YnJldmUnLCBbMzY1XV0sIFsnVWNpcmMnLCBbMjE5XV0sIFsndWNpcmMnLCBbMjUxXV0sIFsnVWN5JywgWzEwNTldXSwgWyd1Y3knLCBbMTA5MV1dLCBbJ3VkYXJyJywgWzg2NDVdXSwgWydVZGJsYWMnLCBbMzY4XV0sIFsndWRibGFjJywgWzM2OV1dLCBbJ3VkaGFyJywgWzEwNjA2XV0sIFsndWZpc2h0JywgWzEwNjIyXV0sIFsnVWZyJywgWzEyMDA4OF1dLCBbJ3VmcicsIFsxMjAxMTRdXSwgWydVZ3JhdmUnLCBbMjE3XV0sIFsndWdyYXZlJywgWzI0OV1dLCBbJ3VIYXInLCBbMTA1OTVdXSwgWyd1aGFybCcsIFs4NjM5XV0sIFsndWhhcnInLCBbODYzOF1dLCBbJ3VoYmxrJywgWzk2MDBdXSwgWyd1bGNvcm4nLCBbODk4OF1dLCBbJ3VsY29ybmVyJywgWzg5ODhdXSwgWyd1bGNyb3AnLCBbODk3NV1dLCBbJ3VsdHJpJywgWzk3MjBdXSwgWydVbWFjcicsIFszNjJdXSwgWyd1bWFjcicsIFszNjNdXSwgWyd1bWwnLCBbMTY4XV0sIFsnVW5kZXJCYXInLCBbOTVdXSwgWydVbmRlckJyYWNlJywgWzkxODNdXSwgWydVbmRlckJyYWNrZXQnLCBbOTE0MV1dLCBbJ1VuZGVyUGFyZW50aGVzaXMnLCBbOTE4MV1dLCBbJ1VuaW9uJywgWzg4OTldXSwgWydVbmlvblBsdXMnLCBbODg0Nl1dLCBbJ1VvZ29uJywgWzM3MF1dLCBbJ3VvZ29uJywgWzM3MV1dLCBbJ1VvcGYnLCBbMTIwMTQwXV0sIFsndW9wZicsIFsxMjAxNjZdXSwgWydVcEFycm93QmFyJywgWzEwNTE0XV0sIFsndXBhcnJvdycsIFs4NTkzXV0sIFsnVXBBcnJvdycsIFs4NTkzXV0sIFsnVXBhcnJvdycsIFs4NjU3XV0sIFsnVXBBcnJvd0Rvd25BcnJvdycsIFs4NjQ1XV0sIFsndXBkb3duYXJyb3cnLCBbODU5N11dLCBbJ1VwRG93bkFycm93JywgWzg1OTddXSwgWydVcGRvd25hcnJvdycsIFs4NjYxXV0sIFsnVXBFcXVpbGlicml1bScsIFsxMDYwNl1dLCBbJ3VwaGFycG9vbmxlZnQnLCBbODYzOV1dLCBbJ3VwaGFycG9vbnJpZ2h0JywgWzg2MzhdXSwgWyd1cGx1cycsIFs4ODQ2XV0sIFsnVXBwZXJMZWZ0QXJyb3cnLCBbODU5OF1dLCBbJ1VwcGVyUmlnaHRBcnJvdycsIFs4NTk5XV0sIFsndXBzaScsIFs5NjVdXSwgWydVcHNpJywgWzk3OF1dLCBbJ3Vwc2loJywgWzk3OF1dLCBbJ1Vwc2lsb24nLCBbOTMzXV0sIFsndXBzaWxvbicsIFs5NjVdXSwgWydVcFRlZUFycm93JywgWzg2MTNdXSwgWydVcFRlZScsIFs4ODY5XV0sIFsndXB1cGFycm93cycsIFs4NjQ4XV0sIFsndXJjb3JuJywgWzg5ODldXSwgWyd1cmNvcm5lcicsIFs4OTg5XV0sIFsndXJjcm9wJywgWzg5NzRdXSwgWydVcmluZycsIFszNjZdXSwgWyd1cmluZycsIFszNjddXSwgWyd1cnRyaScsIFs5NzIxXV0sIFsnVXNjcicsIFsxMTk5ODRdXSwgWyd1c2NyJywgWzEyMDAxMF1dLCBbJ3V0ZG90JywgWzg5NDRdXSwgWydVdGlsZGUnLCBbMzYwXV0sIFsndXRpbGRlJywgWzM2MV1dLCBbJ3V0cmknLCBbOTY1M11dLCBbJ3V0cmlmJywgWzk2NTJdXSwgWyd1dWFycicsIFs4NjQ4XV0sIFsnVXVtbCcsIFsyMjBdXSwgWyd1dW1sJywgWzI1Ml1dLCBbJ3V3YW5nbGUnLCBbMTA2NjNdXSwgWyd2YW5ncnQnLCBbMTA2NTJdXSwgWyd2YXJlcHNpbG9uJywgWzEwMTNdXSwgWyd2YXJrYXBwYScsIFsxMDA4XV0sIFsndmFybm90aGluZycsIFs4NzA5XV0sIFsndmFycGhpJywgWzk4MV1dLCBbJ3ZhcnBpJywgWzk4Ml1dLCBbJ3ZhcnByb3B0bycsIFs4NzMzXV0sIFsndmFycicsIFs4NTk3XV0sIFsndkFycicsIFs4NjYxXV0sIFsndmFycmhvJywgWzEwMDldXSwgWyd2YXJzaWdtYScsIFs5NjJdXSwgWyd2YXJzdWJzZXRuZXEnLCBbODg0MiwgNjUwMjRdXSwgWyd2YXJzdWJzZXRuZXFxJywgWzEwOTU1LCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcScsIFs4ODQzLCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcXEnLCBbMTA5NTYsIDY1MDI0XV0sIFsndmFydGhldGEnLCBbOTc3XV0sIFsndmFydHJpYW5nbGVsZWZ0JywgWzg4ODJdXSwgWyd2YXJ0cmlhbmdsZXJpZ2h0JywgWzg4ODNdXSwgWyd2QmFyJywgWzEwOTg0XV0sIFsnVmJhcicsIFsxMDk4N11dLCBbJ3ZCYXJ2JywgWzEwOTg1XV0sIFsnVmN5JywgWzEwNDJdXSwgWyd2Y3knLCBbMTA3NF1dLCBbJ3ZkYXNoJywgWzg4NjZdXSwgWyd2RGFzaCcsIFs4ODcyXV0sIFsnVmRhc2gnLCBbODg3M11dLCBbJ1ZEYXNoJywgWzg4NzVdXSwgWydWZGFzaGwnLCBbMTA5ODJdXSwgWyd2ZWViYXInLCBbODg5MV1dLCBbJ3ZlZScsIFs4NzQ0XV0sIFsnVmVlJywgWzg4OTddXSwgWyd2ZWVlcScsIFs4Nzk0XV0sIFsndmVsbGlwJywgWzg5NDJdXSwgWyd2ZXJiYXInLCBbMTI0XV0sIFsnVmVyYmFyJywgWzgyMTRdXSwgWyd2ZXJ0JywgWzEyNF1dLCBbJ1ZlcnQnLCBbODIxNF1dLCBbJ1ZlcnRpY2FsQmFyJywgWzg3MzldXSwgWydWZXJ0aWNhbExpbmUnLCBbMTI0XV0sIFsnVmVydGljYWxTZXBhcmF0b3InLCBbMTAwNzJdXSwgWydWZXJ0aWNhbFRpbGRlJywgWzg3NjhdXSwgWydWZXJ5VGhpblNwYWNlJywgWzgyMDJdXSwgWydWZnInLCBbMTIwMDg5XV0sIFsndmZyJywgWzEyMDExNV1dLCBbJ3ZsdHJpJywgWzg4ODJdXSwgWyd2bnN1YicsIFs4ODM0LCA4NDAyXV0sIFsndm5zdXAnLCBbODgzNSwgODQwMl1dLCBbJ1ZvcGYnLCBbMTIwMTQxXV0sIFsndm9wZicsIFsxMjAxNjddXSwgWyd2cHJvcCcsIFs4NzMzXV0sIFsndnJ0cmknLCBbODg4M11dLCBbJ1ZzY3InLCBbMTE5OTg1XV0sIFsndnNjcicsIFsxMjAwMTFdXSwgWyd2c3VibkUnLCBbMTA5NTUsIDY1MDI0XV0sIFsndnN1Ym5lJywgWzg4NDIsIDY1MDI0XV0sIFsndnN1cG5FJywgWzEwOTU2LCA2NTAyNF1dLCBbJ3ZzdXBuZScsIFs4ODQzLCA2NTAyNF1dLCBbJ1Z2ZGFzaCcsIFs4ODc0XV0sIFsndnppZ3phZycsIFsxMDY1MF1dLCBbJ1djaXJjJywgWzM3Ml1dLCBbJ3djaXJjJywgWzM3M11dLCBbJ3dlZGJhcicsIFsxMDg0N11dLCBbJ3dlZGdlJywgWzg3NDNdXSwgWydXZWRnZScsIFs4ODk2XV0sIFsnd2VkZ2VxJywgWzg3OTNdXSwgWyd3ZWllcnAnLCBbODQ3Ml1dLCBbJ1dmcicsIFsxMjAwOTBdXSwgWyd3ZnInLCBbMTIwMTE2XV0sIFsnV29wZicsIFsxMjAxNDJdXSwgWyd3b3BmJywgWzEyMDE2OF1dLCBbJ3dwJywgWzg0NzJdXSwgWyd3cicsIFs4NzY4XV0sIFsnd3JlYXRoJywgWzg3NjhdXSwgWydXc2NyJywgWzExOTk4Nl1dLCBbJ3dzY3InLCBbMTIwMDEyXV0sIFsneGNhcCcsIFs4ODk4XV0sIFsneGNpcmMnLCBbOTcxMV1dLCBbJ3hjdXAnLCBbODg5OV1dLCBbJ3hkdHJpJywgWzk2NjFdXSwgWydYZnInLCBbMTIwMDkxXV0sIFsneGZyJywgWzEyMDExN11dLCBbJ3hoYXJyJywgWzEwMjMxXV0sIFsneGhBcnInLCBbMTAyMzRdXSwgWydYaScsIFs5MjZdXSwgWyd4aScsIFs5NThdXSwgWyd4bGFycicsIFsxMDIyOV1dLCBbJ3hsQXJyJywgWzEwMjMyXV0sIFsneG1hcCcsIFsxMDIzNl1dLCBbJ3huaXMnLCBbODk1NV1dLCBbJ3hvZG90JywgWzEwNzUyXV0sIFsnWG9wZicsIFsxMjAxNDNdXSwgWyd4b3BmJywgWzEyMDE2OV1dLCBbJ3hvcGx1cycsIFsxMDc1M11dLCBbJ3hvdGltZScsIFsxMDc1NF1dLCBbJ3hyYXJyJywgWzEwMjMwXV0sIFsneHJBcnInLCBbMTAyMzNdXSwgWydYc2NyJywgWzExOTk4N11dLCBbJ3hzY3InLCBbMTIwMDEzXV0sIFsneHNxY3VwJywgWzEwNzU4XV0sIFsneHVwbHVzJywgWzEwNzU2XV0sIFsneHV0cmknLCBbOTY1MV1dLCBbJ3h2ZWUnLCBbODg5N11dLCBbJ3h3ZWRnZScsIFs4ODk2XV0sIFsnWWFjdXRlJywgWzIyMV1dLCBbJ3lhY3V0ZScsIFsyNTNdXSwgWydZQWN5JywgWzEwNzFdXSwgWyd5YWN5JywgWzExMDNdXSwgWydZY2lyYycsIFszNzRdXSwgWyd5Y2lyYycsIFszNzVdXSwgWydZY3knLCBbMTA2N11dLCBbJ3ljeScsIFsxMDk5XV0sIFsneWVuJywgWzE2NV1dLCBbJ1lmcicsIFsxMjAwOTJdXSwgWyd5ZnInLCBbMTIwMTE4XV0sIFsnWUljeScsIFsxMDMxXV0sIFsneWljeScsIFsxMTExXV0sIFsnWW9wZicsIFsxMjAxNDRdXSwgWyd5b3BmJywgWzEyMDE3MF1dLCBbJ1lzY3InLCBbMTE5OTg4XV0sIFsneXNjcicsIFsxMjAwMTRdXSwgWydZVWN5JywgWzEwNzBdXSwgWyd5dWN5JywgWzExMDJdXSwgWyd5dW1sJywgWzI1NV1dLCBbJ1l1bWwnLCBbMzc2XV0sIFsnWmFjdXRlJywgWzM3N11dLCBbJ3phY3V0ZScsIFszNzhdXSwgWydaY2Fyb24nLCBbMzgxXV0sIFsnemNhcm9uJywgWzM4Ml1dLCBbJ1pjeScsIFsxMDQ3XV0sIFsnemN5JywgWzEwNzldXSwgWydaZG90JywgWzM3OV1dLCBbJ3pkb3QnLCBbMzgwXV0sIFsnemVldHJmJywgWzg0ODhdXSwgWydaZXJvV2lkdGhTcGFjZScsIFs4MjAzXV0sIFsnWmV0YScsIFs5MThdXSwgWyd6ZXRhJywgWzk1MF1dLCBbJ3pmcicsIFsxMjAxMTldXSwgWydaZnInLCBbODQ4OF1dLCBbJ1pIY3knLCBbMTA0Nl1dLCBbJ3poY3knLCBbMTA3OF1dLCBbJ3ppZ3JhcnInLCBbODY2OV1dLCBbJ3pvcGYnLCBbMTIwMTcxXV0sIFsnWm9wZicsIFs4NDg0XV0sIFsnWnNjcicsIFsxMTk5ODldXSwgWyd6c2NyJywgWzEyMDAxNV1dLCBbJ3p3aicsIFs4MjA1XV0sIFsnenduaicsIFs4MjA0XV1dO1xuXG52YXIgYWxwaGFJbmRleCA9IHt9O1xudmFyIGNoYXJJbmRleCA9IHt9O1xuXG5jcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCk7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw1RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hhcjtcbiAgICAgICAgaWYgKGVudGl0eS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGVudGl0eS5jaGFyQXQoMSkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAxNikgOlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMSkpO1xuXG4gICAgICAgICAgICBpZiAoIShpc05hTihjb2RlKSB8fCBjb2RlIDwgLTMyNzY4IHx8IGNvZGUgPiA2NTUzNSkpIHtcbiAgICAgICAgICAgICAgICBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYXIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYXIgfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXJJbmZvID0gY2hhckluZGV4W3N0ci5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgaWYgKGNoYXJJbmZvKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBjaGFySW5mb1tzdHIuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGNoYXJJbmZvWycnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBjaGFySW5mbyA9IGNoYXJJbmRleFtjXTtcbiAgICAgICAgaWYgKGNoYXJJbmZvKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBjaGFySW5mb1tzdHIuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGNoYXJJbmZvWycnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjIDwgMzIgfHwgYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNUVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKytcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGFscGhhSW5kZXggUGFzc2VkIGJ5IHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFySW5kZXggUGFzc2VkIGJ5IHJlZmVyZW5jZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5kZXhlcyhhbHBoYUluZGV4LCBjaGFySW5kZXgpIHtcbiAgICB2YXIgaSA9IEVOVElUSUVTLmxlbmd0aDtcbiAgICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBlID0gRU5USVRJRVNbaV07XG4gICAgICAgIHZhciBhbHBoYSA9IGVbMF07XG4gICAgICAgIHZhciBjaGFycyA9IGVbMV07XG4gICAgICAgIHZhciBjaHIgPSBjaGFyc1swXTtcbiAgICAgICAgdmFyIGFkZENoYXIgPSAoY2hyIDwgMzIgfHwgY2hyID4gMTI2KSB8fCBjaHIgPT09IDYyIHx8IGNociA9PT0gNjAgfHwgY2hyID09PSAzOCB8fCBjaHIgPT09IDM0IHx8IGNociA9PT0gMzk7XG4gICAgICAgIHZhciBjaGFySW5mbztcbiAgICAgICAgaWYgKGFkZENoYXIpIHtcbiAgICAgICAgICAgIGNoYXJJbmZvID0gY2hhckluZGV4W2Nocl0gPSBjaGFySW5kZXhbY2hyXSB8fCB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhcnNbMV0pIHtcbiAgICAgICAgICAgIHZhciBjaHIyID0gY2hhcnNbMV07XG4gICAgICAgICAgICBhbHBoYUluZGV4W2FscGhhXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGFkZENoYXIgJiYgKGNoYXJJbmZvW2NocjJdID0gYWxwaGEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFscGhhSW5kZXhbYWxwaGFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChhZGRDaGFyICYmIChjaGFySW5mb1snJ10gPSBhbHBoYSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEh0bWw1RW50aXRpZXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9odG1sLWVudGl0aWVzL2xpYi9odG1sNS1lbnRpdGllcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJpbmRleC5qcyJ9