import TuiSymbol from '../tui-symbol';
import {BACKGROUND_CHARACTER, BORDER, SCROLL} from '../characters';
import Serializer from './serializer';

export default class DefaultSerializer extends Serializer {
    constructor(tuiElement, options) {
        super(tuiElement, options);

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
    /**
     * @param {ObjectClientRect} clientRect
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    fillBox(clientRect) {
        var width = clientRect.width;
        var height = clientRect.height;

        var background = new TuiSymbol(BACKGROUND_CHARACTER, {
            color: this.style.color,
            backgroundColor: this.style.backgroundColor
        });

        var box = new Array(height);
        for (let y = 0; y < height; y++) {
            box[y] = new Array(width);
            for (let x = 0; x < width; x++) {
                box[y][x] = background;
            }
        }

        return box;
    }

    /**
     * @param {Array<Array<(TuiSymbol)>>} box
     * @param {ObjectClientRect} clientRect
     */
    fillLeftBorder(box, clientRect) {
        if (!this.style.borderLeftWidth) {
            return;
        }

        var leftBorder = new TuiSymbol(BORDER.SOLID.LEFT, {
            color: this.style.borderLeftColor,
            backgroundColor: this.style.backgroundColor
        });

        var height = clientRect.height;

        for (let y = 0; y < height; y++) {
            box[y][0] = leftBorder;
        }
    }

    /**
     * @param {Array<Array<(TuiSymbol)>>} box
     * @param {ObjectClientRect} clientRect
     */
    fillRightBorder(box, clientRect) {
        if (!this.style.borderRightWidth) {
            return;
        }

        var rightBorder = new TuiSymbol(BORDER.SOLID.RIGHT, {
            color: this.style.borderRightColor,
            backgroundColor: this.style.backgroundColor
        });

        var height = clientRect.height;
        var width = clientRect.width;

        for (let y = 0; y < height; y++) {
            box[y][width - 1] = rightBorder;
        }
    }

    /**
     * @param {Array<Array<(TuiSymbol)>>} box
     * @param {ObjectClientRect} clientRect
     */
    fillTopBorder(box, clientRect) {
        if (!this.style.borderTopWidth) {
            return;
        }

        var topBorder = new TuiSymbol(BORDER.SOLID.TOP, {
            color: this.style.borderTopColor,
            backgroundColor: this.style.backgroundColor
        });

        var height = clientRect.height;
        var width = clientRect.width;

        for (let x = 1; x < width - 1; x++) {
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

    /**
     * @param {Array<Array<(TuiSymbol)>>} box
     * @param {ObjectClientRect} clientRect
     */
    fillBottomBorder(box, clientRect) {
        if (!this.style.borderBottomWidth) {
            return;
        }

        var bottomBorder = new TuiSymbol(BORDER.SOLID.BOTTOM, {
            color: this.style.borderBottomColor,
            backgroundColor: this.style.backgroundColor
        });

        var height = clientRect.height;
        var width = clientRect.width;

        for (let x = 1; x < width - 1; x++) {
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

    /**
     * @param {ObjectClientRect} clientRect
     * @returns {boolean}
     */
    hasHorizontalScrollBars(clientRect) {
        var  overflow = this.style.overflow;

        if (overflow === 'visible' || overflow === 'hidden') {
            return false;
        }

        return this.scroll.scrollWidth > clientRect.width;
    }

    /**
     * @param {ObjectClientRect} clientRect
     * @returns {boolean}
     */
    hasVerticalScrollBars(clientRect) {
        var  overflow = this.style.overflow;

        if (overflow === 'visible' || overflow === 'hidden') {
            return false;
        }

        return this.scroll.scrollHeight > clientRect.height;
    }

    /**
     * @param {Number} borderSize
     * @returns {Number}
     */
    getTuiBorderSize(borderSize) {
        if (borderSize > 0) {
            return 1;
        }

        return 0;
    }

    /**
     * @param {Array<Array<(TuiSymbol)>>} box
     * @param {ObjectClientRect} clientRect
     */
    renderVerticalScrollBar(box, clientRect) {
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

        var trackHeight = Math.max(Math.floor((height / scrollHeight) * availableScrollHeight), 1);
        var trackTop = Math.floor((scrollTop / scrollHeight) * availableScrollHeight);
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

    /**
     * @param {Array<Array<(TuiSymbol)>>} box
     * @param {ObjectClientRect} clientRect
     */
    renderHorizontalScrollBar(box, clientRect) {
        if (!this.hasHorizontalScrollBars(clientRect)) {
            return;
        }

        return box;
    }

    /**
     * @param {ObjectClientRect} clientRect
     * @param {Boolean} hasLeftBorder
     * @param {Boolean} hasRightBorder
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    renderBox(clientRect, {hasLeftBorder, hasRightBorder}) {
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

    /**
     * @returns {Array<Array<Array<(TuiSymbol)>>>}
     */
    renderBoxes() {
        return this.clientRects.map((clientRect, index, {length}) => {
            var hasLeftBorder = index === 0;
            var hasRightBorder = index === length - 1;
            return this.renderBox(clientRect, {hasLeftBorder, hasRightBorder});
        });
    }

    /**
     *
     * @param {Number} bottom
     * @param {Number} right
     * @param {Number} top
     * @param {Number} left
     * @returns {Function}
     */
    cropBoxUsing({bottom, right, top, left}) {
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

    /**
     * @returns {Function} crop function
     */
    cropBoxFactory() {
        // Do not crop
        if (this.style.overflow === 'visible') {
            return (box) => box;
        }

        var bottom = this.boundingBox.bottom - this.getTuiBorderSize(this.style.borderBottomWidth);
        var right = this.boundingBox.right - this.getTuiBorderSize(this.style.borderRightWidth);
        var top = this.boundingBox.top + this.getTuiBorderSize(this.style.borderTopWidth);
        var left = this.boundingBox.left + this.getTuiBorderSize(this.style.borderLeftWidth);

        return this.cropBoxUsing({bottom, right, top, left});
    }

    /**
     * @returns {Array<Array<Array<(TuiSymbol)>>>}
     */
    renderContent() {
        return this.content
            .map((item) => item.toArray())
            .map(this.cropBoxFactory());
    }

    /**
     * @returns {Array<Array<(TuiSymbol)>>}
     */
    serialize() {
        var boxes = this.renderBoxes();
        var content = this.renderContent();

        return boxes.concat(content).reduce(this.mergeBoxes.bind(this), []);
    }
}
