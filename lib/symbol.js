function Symbol(char, style) {
    this.char = char;
    this.style = style;
}

Symbol.mode = 'ascii' || 'html';

// TODO omg...
Symbol.styles = {
    //styles
    'bold'      : ['\x1B[1m',  '\x1B[22m'],
    'italic'    : ['\x1B[3m',  '\x1B[23m'],
    'underline' : ['\x1B[4m',  '\x1B[24m'],
    'inverse'   : ['\x1B[7m',  '\x1B[27m'],
    'strikethrough' : ['\x1B[9m',  '\x1B[29m'],
    //text colors
    //grayscale
    'rgb(255, 255, 255)'     : ['\x1B[37m', '\x1B[39m'],
    'rgb(128, 128, 128)'      : ['\x1B[90m', '\x1B[39m'],
    'rgb(0, 0, 0)'     : ['\x1B[30m', '\x1B[39m'],
    //colors
    'rgb(0, 0, 255)'      : ['\x1B[34m', '\x1B[39m'],
    'rgb(0, 255, 255)'      : ['\x1B[36m', '\x1B[39m'],
    'rgb(0, 128, 0)'     : ['\x1B[32m', '\x1B[39m'],
    'magenta'   : ['\x1B[35m', '\x1B[39m'],
    'rgb(255, 0, 0)'       : ['\x1B[31m', '\x1B[39m'],
    'rgb(255, 255, 0)'    : ['\x1B[33m', '\x1B[39m'],
    'rgba(0, 0, 0, 0)': ['', ''],
    //background colors
    //grayscale
    'rgb(255, 255, 255)BG'     : ['\x1B[47m', '\x1B[49m'],
    'rgb(0, 0, 0)BG'      : ['\x1B[49;5;8m', '\x1B[49m'],
    'rgb(128, 128, 128)BG'     : ['\x1B[40m', '\x1B[49m'],
    //colors
    'rgb(0, 0, 255)BG'      : ['\x1B[44m', '\x1B[49m'],
    'rgb(0, 255, 255)BG'      : ['\x1B[46m', '\x1B[49m'],
    'rgb(0, 128, 0)BG'     : ['\x1B[42m', '\x1B[49m'],
    'magentaBG'   : ['\x1B[45m', '\x1B[49m'],
    'rgb(255, 0, 0)BG'       : ['\x1B[41m', '\x1B[49m'],
    'rgb(255, 255, 0)BG'    : ['\x1B[43m', '\x1B[49m'],
    'rgba(0, 0, 0, 0)BG': ['', '']
};

Symbol.prototype = {
    _wrapSymbol: function (symbol, color) {
        var style = Symbol.styles[color];
        if (!style) {
            console.log(color);
            return symbol;
        }

        return style[0] + symbol + style[1];
    },

    toHtmlString: function () {
        var styles = [
            this.style.color ? 'color:' + this.style.color : void 0,
            this.style.backgroundColor ? 'background-color:' + this.style.backgroundColor : void 0
        ].join(';');

        return '<span style="' + styles + '">' + this.char + '</span>';
    },

    toAsciiString: function () {
        var symbol = this._wrapSymbol(this.char, this.style.color);
        symbol = this._wrapSymbol(symbol, this.style.backgroundColor + 'BG');

        return symbol;
    },

    toString: function () {
        switch (Symbol.mode) {
            case 'html':
                return this.toHtmlString();
            case 'ascii':
                return this.toAsciiString();
            default:
                return this.char;
        }
    }
};
