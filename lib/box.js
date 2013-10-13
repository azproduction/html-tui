function Box(properties, style) {
    this.style = style;

    this.properties = properties;
}

Box.backgroundCharacter = '█';
Box.reBackgroundCharacter = /█/g;
Box.borderScheme = {
    'x': {
        'min': {
            'y': {
                'min': {
                    // x─┐
                    // │ │
                    // └─┘
                    'left': {
                        'no': {
                            'top': {
                                'no': Box.backgroundCharacter,
                                'yes': '─'
                            }
                        },
                        'yes': {
                            'top': {
                                'no': '│',
                                'yes': '┌'
                            }
                        }
                    }
                },
                'max': {
                    // ┌─┐
                    // │ │
                    // x─┘
                    'left': {
                        'no': {
                            'bottom': {
                                'no': Box.backgroundCharacter,
                                'yes': '─'
                            }
                        },
                        'yes': {
                            'bottom': {
                                'no': '│',
                                'yes': '└'
                            }
                        }
                    }
                },
                'mid': {
                    // ┌─┐
                    // x │
                    // └─┘
                    'left': {
                        'no': Box.backgroundCharacter,
                        'yes': '│'
                    }
                }
            }
        },
        'mid': {
            'y': {
                'min': {
                    // ┌x┐
                    // │ │
                    // └─┘
                    'top': {
                        'no': Box.backgroundCharacter,
                        'yes': '─'
                    }
                },
                // ┌─┐
                // │x│
                // └─┘
                'mid': Box.backgroundCharacter,
                'max': {
                    // ┌─┐
                    // │ │
                    // └x┘
                    'bottom': {
                        'no': Box.backgroundCharacter,
                        'yes': '─'
                    }
                }
            }
        },
        'max': {
            'y': {
                'min': {
                    // ┌─x
                    // │ │
                    // └─┘
                    'right': {
                        'no': {
                            'top': {
                                'no': Box.backgroundCharacter,
                                'yes': '─'
                            }
                        },
                        'yes': {
                            'top': {
                                'no': '│',
                                'yes': '┐'
                            }
                        }
                    }
                },
                'mid': {
                    // ┌─┐
                    // │ x
                    // └─┘
                    'right': {
                        'no': Box.backgroundCharacter,
                        'yes': '│'
                    }
                },
                'max': {
                    // ┌─┐
                    // │ │
                    // └─x
                    'right': {
                        'no': {
                            'bottom': {
                                'no': Box.backgroundCharacter,
                                'yes': '─'
                            }
                        },
                        'yes': {
                            'bottom': {
                                'no': '|',
                                'yes': '┘'
                            }
                        }
                    }
                }
            }
        }
    }
};

Box.fromElement = function (element) {
    var pointer = element,
        position = [0, 0];

    while (pointer) {
        position[0] += pointer.offsetLeft;
        position[1] += pointer.offsetTop;
        pointer = pointer.offsetParent;
    }

    var css = window.getComputedStyle(element);
    var text = element.firstChild &&
        element.firstChild === element.lastChild &&
        element.firstChild.textContent ||
        void 0;

    var contentWidth = element.offsetWidth,
        contentHeight = element.offsetHeight;

    if (css.boxSizing === 'border-box') {
        contentWidth = contentWidth - parseFloat(css.borderRightWidth) - parseFloat(css.borderLeftWidth);
        contentWidth = contentWidth - parseFloat(css.paddingRight) - parseFloat(css.paddingLeft);
    }

    if (css.boxSizing === 'padding-box') {
        contentWidth = contentWidth - parseFloat(css.paddingRight) - parseFloat(css.paddingLeft);
    }

    return new Box({
        width: Math.round(element.offsetWidth),
        height: Math.round(element.offsetHeight),
        left: Math.round(position[0]),
        top: Math.round(position[1]),
        contentWidth: Math.round(contentWidth),
        contentHeight: Math.round(contentHeight),
        contentLeft: Math.round(element.clientLeft + parseFloat(css.paddingLeft)),
        contentTop: Math.round(element.clientTop + parseFloat(css.paddingTop)),
        // Do not render mixed nodes
        text: text
    }, css);
};

Box.prototype = {
    _lookupCharacter: function (data, scheme) {
        var propertyName = Object.keys(scheme)[0],
            value = scheme[propertyName];

        if (typeof value !== 'object') {
            return value;
        } else {
            value = value[data[propertyName]];
            if (typeof value !== 'object') {
                return value;
            }
            return this._lookupCharacter(data, value);
        }
    },
    _lookupCharacterStyle: function (scheme) {
        var color = this.style.color,
            backgroundColor = this.style.backgroundColor;

        if (scheme.x === 'min') {
            color = this.style.borderLeftColor;
        }

        if (scheme.x === 'max') {
            color = this.style.borderRightColor;
        }

        if (scheme.y === 'min' && scheme.x === 'mid') {
            color = this.style.borderTopColor;
        }

        if (scheme.y === 'max' && scheme.x === 'mid') {
            color = this.style.borderBottomColor;
        }

        return {
            color: color,
            backgroundColor: backgroundColor
        };
    },
    _characterAt: function(x, y) {
        var width = this.properties.width;
        var height = this.properties.height;
        var scheme = {
            'x': x === 0 ? 'min' : x === width - 1 ? 'max' : 'mid',
            'y': y === 0 ? 'min' : y === height - 1 ? 'max' : 'mid',
            'top': parseInt(this.style.borderTopWidth) ? 'yes' : 'no',
            'right': parseInt(this.style.borderRightWidth) ? 'yes' : 'no',
            'bottom': parseInt(this.style.borderBottomWidth) ? 'yes' : 'no',
            'left': parseInt(this.style.borderLeftWidth) ? 'yes' : 'no'
        };
        var char = this._lookupCharacter(scheme, Box.borderScheme);
        var style = this._lookupCharacterStyle(scheme);
        // If no background -> do not place cell
        if (style.backgroundColor === 'rgba(0, 0, 0, 0)' && char === Box.backgroundCharacter) {
            char = ' ';
        }

        return new Symbol(char, style);
    },
    _renderBox: function () {
        var box = [];
        for (var y = 0; y < this.properties.height; y++) {
            box.push([]);
            for (var x = 0; x < this.properties.width; x++) {
                box[y][x] = this._characterAt(x, y);
            }
        }
        return box;
    },
    _renderText: function (box) {
        var width = this.properties.contentWidth,
            left = this.properties.contentLeft,
            top = this.properties.contentTop,
            text = this.properties.text,
            align = this.style.textAlign,
            symbols = [],
            offset = 0;

        if (typeof text !== 'string') {
            return box;
        }

        // TODO render multiline strings
        var line = text.split('').slice(0, width);

        if (align === 'left' || align === 'start' || align === '-webkit-auto') {
            offset = left;
            symbols = box[top].slice(offset, offset + line.length)
        }

        // TODO render aligned text
        if (align === 'right') {
            offset = width + left - line.length;
            symbols = box[top].slice(offset, offset + line.length);
        }

        if (align === 'center') {
            offset = (width - line.length) >> 1;
            symbols = box[top].slice(offset, offset + line.length);
        }

        symbols.forEach(function (symbol, index) {
            symbol.char = line[index];
        });

        return box;
    },
    _shiftBox: function (box) {
        var width = this.properties.width,
            left = this.properties.left,
            top = this.properties.top,
            paddingLeft = new Array(left + 1).join(' ').split(''),
            paddingTop = new Array(left + width + 1).join(' ').split('');

        box.forEach(function (row) {
            row.unshift.apply(row, paddingLeft);
        });

        for (;top--;) {
            box.unshift(paddingTop);
        }

        return box;
    },
    toArray: function () {
        return this._shiftBox(this._renderText(this._renderBox()));
    },
    toString: function () {
        return this.toArray().map(function (row) {
            return row.join('').replace(Box.reBackgroundCharacter, ' ');
        }).join('\n');
    }
};
