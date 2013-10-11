function Symbol(char, style) {
    this.char = char;
    this.style = style;
}

Symbol.prototype = {
    toString: function () {
        var styles = [
            this.style.color ? 'color:' + this.style.color : void 0,
            this.style.backgroundColor ? 'background-color:' + this.style.backgroundColor : void 0
        ].join(';');

        return '<span style="' + styles + '">' + this.char + '</span>';
    }
};
