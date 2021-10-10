var HEART_BEATS = {
    _heart: '',
    _size: 200,
    _minSize: 28,
    _maxSize: 100,
    _topPosition: 0,
    _leftPosition: 0,
    _bgElement: '#bg-animation',
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

var _typingText = '';
var _typingSpeed = 69;
var _typingCharPosition = 0;

// Màn 1: Lời nói thâm tình
function screen1() {
    _typingText = `Cục dàng thân ái!

Tụi mình quen nhau thấm thoắt trôi qua cũng hơn 3 năm rồi nhỉ?
    
Quen nhau lâu thế mà anh lại rất ít có dịp để tặng quà cho em, mà tính anh thì nói lời đường mật thì thôi bỏ đi =]]z
    
Nên nay sẵn nhân dịp 20-10, thì anh cũng sẵn làm ra website bốc đầu... ý nhầm là bốc thăm trúng thưởng để tặng em một món quà hên xui may rủi kkk...
    
Thôi không dông dài chi nữa, mình vào thử vận luôn nha!`;

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen.screen-1 .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            $('.screen.screen-1 button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 2: Giới thiệu sơ về trò chơi
function screen2() {
    _typingText = `Trò chơi này nhìn phát biết ngay rồi e ha =]]z

Ở đây, anh có chuẩn bị cho em ba lá phiếu tượng trưng cho 3 món quà và 1 phiếu bé ngoan...

Là chúc bé may mắn lần sau đó kkk...

Tỷ lệ bốc dính tận 75% nên anh sẽ không nghĩ nữ thần may mắn của anh lại hên đến thế... lại nhầm rồi

Phải là sao có thể xui đến thế chứ kkk!`;

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen.screen-2 .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            $('.screen.screen-2 button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 3: Bốc thăm => Bốc ra phiếu bé ngoan (vì mình đã chuẩn bị sẵn quà =]]z)
var isGiftSelected = false;
function selectGift() {
    isGiftSelected = true;
    setInterval(() => {
        if (isGiftSelected) {
            $('.game-wrapper').addClass('d-none');
            $('.troll').removeClass('d-none');
        }
    }, 1000);
}
function screen3() {
    $('.box-gift img').on('click', event => {
        $('.box-gift img').addClass('d-none');
        $(event.target).removeClass('d-none').addClass('active');
        $(event.target).parent().addClass('active');
    });
    $('#confirmModal').on('hidden.bs.modal', function (e) {
        if (!isGiftSelected) {
            $('.box-gift img').removeClass('d-none').removeClass('active');
            $('.box-gift').removeClass('active');
        }
    });
}

// Màn 4: Chọc quê và hứa tặng món quà khuyễn khích =]]z
function screen4() {
    _typingText = `U là trời, đúng là bé ngoan mà =]]z
    
Tỷ lệ 25% mà cũng chọn được nữa =]]z

Thôi thì chấp nhận số phận là 20-10 năm nay mình hổng có quà nhé cục dàng =]]z

Sang năm mình bốc 8 hộp để tỷ lệ chọn dính phiếu bé ngoan nhỏ lại ha <3`;

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen.screen-4 .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            // $('.screen.screen-4 button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 5: Cho thêm cơ hội
var isCorretAnswer = false;
function selectAnswer(flg) {
    isCorretAnswer = flg;
    changeScreen(6);
}
function screen5() {
    _typingText = `Ơ mà khoan đã nào!

Nếu có 8 hộp quà mà chỉ có một hộp trống không thì tỷ lệ là nhiêu vậy nè?

Nếu trả lời đúng thì anh sẽ phát quà khuyến khích ha =]]z`;

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen.screen-5 .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            $('.screen.screen-5 button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 6: Kết quả câu hỏi khuyến khích
function screen6() {
    if (isCorretAnswer) {
        _typingText = `Ahaha, cuối cùng cũng tính đúng...
        
Cứ ngỡ em lại sẽ để giành cơ hội cho năm sau nữa chứ =]]z 

Không hổ là cục dàng của ta

Ú khặc khặc...

Thế là 20-10 năm nay bé Khánh cũng có quà rồi ha

Thôi trò chơi bốc thăm trúng thưởng đến đây là kết thúc òi <3

Chúc eiu luôn vui vẻ, hạnh phúc bên người thân và anh he, lúc nào cũng tươi cười, lạc quan, xinh đẹp nè

Và quan trọng hơn hết là luôn luôn bên cạnh anh ha (ôi dồi sến súa quá =]]z)

À và một điều quan trọng nữa là cứ chọc t quạo t đá chít mọe nha <3`;
    } else {
        _typingText = ``;
    }

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen.screen-6 .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            // $('.screen.screen-5 button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

/*==================== CHANGE SCREEN ====================*/
var currentScreen = 1;
function changeScreen(screenNumber = 1) {
    currentScreen = screenNumber;

    $(`.screen:not(.screen-${currentScreen})`).addClass('d-none');

    $(`.screen.screen-${currentScreen}`).removeClass('d-none');

    switch (currentScreen) {
        case 1:
            screen1();
            break;
        case 2:
            screen2();
            break;
        case 3:
            screen3();
            break;
        case 4:
            screen4();
            break;
        case 5:
            screen5();
            break;
        case 6:
            screen6();
            break;
    };
}
changeScreen();
/*==================== CHANGE SCREEN ====================*/