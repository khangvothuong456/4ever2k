var HEART_BEATS = {
    _heart: '',
    _size: 200,
    _minSize: 28,
    _maxSize: 100,
    _topPosition: 0,
    _leftPosition: 0,
    _bgElement: '#app',
    _setSize: function (size) {
        this._size = size;
    },
    _getSize: function () {
        return this._size;
    },
    _setTopPosition: function (topPosition) {
        this._topPosition = topPosition;
    },
    _getTopPosition: function () {
        return this._topPosition;
    },
    _setLeftPosition: function (leftPosition) {
        this._leftPosition = leftPosition;
    },
    _getLeftPosition: function () {
        return this._leftPosition;
    },
    _setBgElement: function (bgElement) {
        this._bgElement = bgElement;
    },
    _getBgElement: function () {
        return this._bgElement;
    },
    _setRandomSize: function () {
        this._size = Math.floor(Math.random() * (this._maxSize - this._minSize + 1)) + this._minSize;
    },
    _createHeartBeat: function () {
        // Create a heart tag
        this._heart = `<div class="heart">
                            <div class="heart__partial heart__left"></div>
                            <div class="heart__partial heart__right"></div>
                        </div>`;

        // Determine size and position
        this._heart = $(this._heart).css({
            'top': this.genRandomInteger(0, 100) + '%',
            'left': this.genRandomInteger(0, 100) + '%',
            'width': `${this._size}px`,
            'height': `${this._size}px`,
            'opacity': '0.' + this.genRandomInteger(17, 35),
        });
        $(this._heart).find('.heart__partial').css({
            'top': `${(this._size * 40 / 200)}px`,
            'width': `${(this._size * 70 / 200)}px`,
            'height': `${(this._size * 125 / 200)}px`
        });
        $(this._heart).find('.heart__partial.heart__left').css({
            'left': `${(this._size * 45 / 200)}px`,
        });
        $(this._heart).find('.heart__partial.heart__right').css({
            'right': `${(this._size * 45 / 200)}px`,
        });
    },
    genRandomInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    render: function (qty = 1) {
        let i = 0;
        while (i < qty) {
            this._setRandomSize();
            this._createHeartBeat();
            $(this._bgElement).append(this._heart);
            i++;
        }
    },
    display: function (qty) {
        this.render(this.genRandomInteger(100, 200));
        setTimeout(() => $('.heart').remove(), 2500);
        setInterval(() => {
            this.render(this.genRandomInteger(100, 200));
            setTimeout(() => $('.heart').remove(), 2500);
        }, 3500);
    },
};
HEART_BEATS.display(100);
