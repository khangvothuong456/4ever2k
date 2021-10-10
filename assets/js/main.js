var heart = {
    element: '',
    size: 200,
    topPosition: 0,
    leftPosition: 0,
    createDOM: function () {
        this.element = `<div class="heart">
                            <div class="heart__partial heart__left"></div>
                            <div class="heart__partial heart__right"></div>
                        </div>`;
        this.element = $(this.element).css({
            'top': `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}%`,
            'left': `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}%`,
            'width': `${this.size}px`,
            'height': `${this.size}px`
        });
        $(this.element).find('.heart__partial').css({
            'top': `${(this.size * 40 / 200)}px`,
            'width': `${(this.size * 70 / 200)}px`,
            'height': `${(this.size * 125 / 200)}px`
        });
        $(this.element).find('.heart__partial.heart__left').css({
            'left': `${(this.size * 45 / 200)}px`,
        });
        $(this.element).find('.heart__partial.heart__right').css({
            'right': `${(this.size * 45 / 200)}px`,
        });
    },
    setSize: function (size) {
        if (size) {
            this.size = size;
        } else {
            this.size = Math.floor(Math.random() * (120 - 40 + 1)) + 40;
        }
    },
    display: function () {
        this.createDOM();
        $('#app').append(this.element);
    },
};

function drawHeartBeats(qty = 1, size = null) {
    if (qty == '' || qty == null || isNaN(qty)) {
        return;
    }

    for (let i = 0; i < qty; i++) {
        heart.setSize(size);
        heart.display();
    }
}
