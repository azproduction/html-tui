var Layer = function () {
    this.boxes = [];
};

Layer.TRANSPARENT_COLORS = {
    'transparent': true,
    'rgba(0, 0, 0, 0)': true
};

Layer.prototype = {
    add: function (box) {
        this.boxes.push(box);
    },
    _mergeSymbols: function (a, b) {
        if (b === ' ') {
            return a;
        }

        if (a === ' ') {
            return b;
        }

        if (a instanceof Symbol && b instanceof Symbol) {
            b.style.backgroundColor = b.style.backgroundColor in Layer.TRANSPARENT_COLORS ?
                a.style.backgroundColor :
                b.style.backgroundColor;

            // transparent background
            if (b.char === ' ') {
                b.char = a.char;
            }
        }

        return b;
    },
    _mergeLayers: function (a, b) {
        var box = [],
            maxWidth = Math.max(a[0] && a[0].length || 0, b[0] && b[0].length || 0),
            maxHeight = Math.max(a.length, b.length);

        for (var y = 0; y < maxHeight; y++) {
            box.push([]);
            for (var x = 0; x < maxWidth; x++) {
                box[y][x] = this._mergeSymbols(a[y] && a[y][x] || ' ', b[y] && b[y][x] || ' ');
            }
        }

        return box;
    },
    toArray: function () {
        var result = [],
            self = this;

        this.boxes.forEach(function (box) {
            result = self._mergeLayers(result, box.toArray());
        });

        return result;
    },
    toString: function () {
        return this.toArray().map(function (row) {
            return row.join('').replace(Box.reBackgroundCharacter, ' ');
        }).join('\n');
    }
};

Layer.fromElement = function (element) {
    var layer = new Layer();
    layer.add(Box.fromElement(element));
    Array.prototype.slice.call(element.querySelectorAll('*'))
    .forEach(function (element) {
        layer.add(Box.fromElement(element));
    });

    return layer;
};
