var _currentScreen = 0;
var _typingText = '';
var _typingSpeed = 50;
var _typingCharPosition = 0;

changeNextScreen(false);

// Màn 0
function screen0() {
    $('.btn-open-door').on('click', function () {
        let screenDiv = $(this).parent();
        $(this).addClass('--open');
        screenDiv.find('.door-partial').addClass('--open');
    
        // Lên nhạc và chuyển sang màn 1;
        $('audio').get(0).play();
        changeNextScreen();
    });
}

// Màn 1: Nhìn lại những ngày tháng bên nhau
function screen1() {
    setTimeout(() => $('video').get(0).play(), 2000);
    $('video').get(0).onended = function () {
        setTimeout(changeNextScreen, 1000);
    };
}

// Màn 2: Lời nói thâm tình
function screen2() {
    _typingText = `Cục dàng thân ái!

Tụi mình quen nhau thấm thoắt trôi qua cũng hơn 3 năm rồi nhỉ?

Quen nhau lâu thế mà anh lại rất ít có dịp để tặng quà cho em, mà tính anh thì nói lời đường mật thì thôi bỏ đi =]]z

Nên nay sẵn nhân dịp 20-10, thì anh cũng sẵn làm ra website bốc đầu... ý nhầm là bốc thăm trúng thưởng để tặng em một món quà hên xui may rủi kkk...

Thôi không dông dài chi nữa, mình vào thử vận luôn nha!`;

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen-' + _currentScreen + ' .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            $('.screen-' + _currentScreen + ' button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 3: Giới thiệu sơ về trò chơi
function screen3() {
    _typingText = `Trò chơi này nhìn phát biết ngay rồi e ha =]]z

Ở đây, anh có chuẩn bị cho em ba hộp quà tượng trưng cho 3 món quà và 1 phiếu bé ngoan...

Là chúc bé may mắn lần sau đó kkk...

Tỷ lệ bốc dính tận 75% nên anh sẽ không nghĩ nữ thần may mắn của anh lại hên đến thế... lại nhầm rồi

Phải là sao có thể xui đến thế chứ kkk!`;

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen-' + _currentScreen + ' .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            $('.screen-' + _currentScreen + ' button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 4: Bốc thăm => Bốc ra phiếu bé ngoan (vì mình đã chuẩn bị sẵn quà =]]z)
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
function screen4() {
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

// Màn 5: Chọc quê và hứa tặng món quà khuyễn khích =]]z
function screen5() {
    _typingText = `U là trời, đúng là bé ngoan mà =]]z

Tỷ lệ 25% mà cũng chọn được nữa =]]z

Thôi thì chấp nhận số phận là 20-10 năm nay mình hổng có quà nhé cục dàng =]]z

Sang năm mình bốc 8 hộp để tỷ lệ chọn dính phiếu bé ngoan nhỏ lại ha <3`;

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen-' + _currentScreen + ' .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            $('.screen-' + _currentScreen + ' button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 6: Cho thêm cơ hội
var isCorretAnswer = false;
function selectAnswer(flg) {
    isCorretAnswer = flg;
    changeNextScreen();
}
function screen6() {
    _typingText = `Ơ mà khoan đã nào!

Nếu có 8 hộp quà mà chỉ có một hộp trống không thì tỷ lệ là nhiêu vậy nè?

Nếu trả lời đúng thì anh sẽ phát quà khuyến khích ha =]]z`;

    _typingCharPosition = 0;

    let _typeWriterEffect = () => {
        if (_typingCharPosition < _typingText.length) {
            document.querySelector('.screen-' + _currentScreen + ' .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            $('.screen-' + _currentScreen + ' button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 7: Kết quả câu hỏi khuyến khích
function screen7() {
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
            document.querySelector('.screen-' + _currentScreen + ' .typewriter').innerHTML += _typingText.charAt(_typingCharPosition);
            _typingCharPosition++;
            setTimeout(_typeWriterEffect, _typingSpeed);
        } else {
            $('.screen-' + _currentScreen + ' button[type="button"]').removeClass('d-none');
        }
    };

    _typeWriterEffect();
}

// Màn 8

// Màn 9

/*==================== START: Chuyển màn ====================*/
function changeNextScreen(isNext = true) {

    if (isNext) {
        $('.screen.screen-' + _currentScreen).addClass('d-none');

        _currentScreen += 1;

        $('.screen.screen-' + _currentScreen).removeClass('d-none');
    } else {
        $('.screen.screen-' + _currentScreen).removeClass('d-none');
    }

    switch (_currentScreen) {
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
        case 7:
            screen7();
            break;
        case 8:
            screen8();
            break;
        case 9:
            screen9();
            break;
        default:
            screen0();
            break;
    };
}
/*==================== END: Chuyển màn ====================*/

/*==================== START: ====================*/
var HEART_BEAT = {
    _heart: '',
    _size: null,
    _minSize: 15,
    _maxSize: 85,
    _setRandomSize: function () {
        this._size = this.getRandomInteger(this._minSize, this._maxSize);
    },
    getRandomInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    createHeart: function () {
        // Khai báo và khởi tạo các thành phần của 1 heart
        let heartDiv = document.createElement('div');
        let heartLeftPartialDiv = document.createElement('div');
        let heartRightPartialDiv = document.createElement('div');

        // Thêm các class css vào từng thành phần
        heartDiv.classList.add('heart');
        heartDiv.style.top = Math.random() * 100 + '%';
        heartDiv.style.left = Math.random() * 100 + '%';
        heartDiv.style.width = this._size + 'px';
        heartDiv.style.height = this._size + 'px';
        heartDiv.style.opacity = '0.' + this.getRandomInteger(2, 4);
        heartLeftPartialDiv.classList.add('heart-partial', 'heart-partial__left');
        heartLeftPartialDiv.style.top = (this._size * 40 / 200) + 'px';
        heartLeftPartialDiv.style.left = (this._size * 45 / 200) + 'px';
        heartLeftPartialDiv.style.width = (this._size * 70 / 200) + 'px';
        heartLeftPartialDiv.style.height = (this._size * 125 / 200) + 'px';
        heartRightPartialDiv.classList.add('heart-partial', 'heart-partial__right');
        heartRightPartialDiv.style.top = (this._size * 40 / 200) + 'px';
        heartRightPartialDiv.style.right = (this._size * 45 / 200) + 'px';
        heartRightPartialDiv.style.width = (this._size * 70 / 200) + 'px';
        heartRightPartialDiv.style.height = (this._size * 125 / 200) + 'px';

        // Hoàn thiện
        heartDiv.appendChild(heartLeftPartialDiv);
        heartDiv.appendChild(heartRightPartialDiv);
        this._heart = heartDiv;
    },
    render: function (numberOfHeart) {
        for (let count = 0; count < numberOfHeart; count++) {
            this._setRandomSize();
            this.createHeart();
            document.getElementById('app__bg-animation').appendChild(this._heart);
        }
    },
    display: function () {
        const MIN_HEART = 75;
        const MAX_HEART = 150;

        this.render(this.getRandomInteger(MIN_HEART, MAX_HEART));
        setTimeout(() => $('.heart').remove(), 2500);
        setInterval(() => {
            this.render(this.getRandomInteger(MIN_HEART, MAX_HEART));
            setTimeout(() => $('.heart').remove(), 2500);
        }, 3500);
    }
};
HEART_BEAT.display();
/*==================== END: ====================*/
