'use strict';
const Bool = (value = 0) => {
    value = value ? 1 : 0;
    return {
        get _bitLength() {
            return 1;
        },
        get $() {
            return value;
        },
        set $(n) {
            value = n ? 1 : 0;
        }
    };
};
const BoolArray = length => {
    const values = Array(length);
    const arr = {
        get _bitLength() {
            return length;
        },
        get length() {
            return length;
        }
    };
    for (let i = 0; i < length; i++) {
        values[i] = Bool();
        Object.defineProperty(arr, i, {
            get() {
                return values[i].$;
            },
            set(v) {
                values[i].$ = v;
            }
        });
    }
    return arr;
};
const IntFactory = bitLength => {
    const Int = (value = 0) => {
        value = ensureSigned(value, bitLength);
        return {
            get _bitLength() {
                return bitLength;
            },
            get $() {
                return value;
            },
            set $(n) {
                value = ensureSigned(n, bitLength);
            }
        };
    };
    return Int;
};
const ensureSigned = (value, bitLength) => {
    const maxUint = maxValue(bitLength);
    const maxInt = Math.floor(maxUint / 2 - 1);
    const minInt = Math.floor(maxUint / 2) * -1;
    if (value && typeof value !== 'number' && '$' in value)
        value = value.$;
    assertNumber(value);
    value = ~~value;
    while (value < minInt) {
        value += maxUint;
    }
    while (value > maxInt) {
        value -= maxUint;
    }
    return value;
};
const UintFactory = bitLength => {
    const Uint = (value = 0) => {
        value = ensureUnsigned(value, bitLength);
        return {
            get _bitLength() {
                return bitLength;
            },
            get $() {
                return value;
            },
            set $(n) {
                value = ensureUnsigned(n, bitLength);
            }
        };
    };
    return Uint;
};
const ensureUnsigned = (value, bitLength) => {
    const maxUint = maxValue(bitLength);
    if (value && typeof value !== 'number' && '$' in value)
        value = value.$;
    assertNumber(value);
    value = ~~value;
    while (value >= maxUint) {
        value -= maxUint;
    }
    while (value < 0) {
        value += maxUint;
    }
    return value;
};
const IntArrayFactory = bitLength => {
    const Int = IntFactory(bitLength);
    const IntArray = length => {
        const values = Array(length);
        const arr = {
            get _bitLength() {
                return bitLength * length;
            },
            get length() {
                return length;
            }
        };
        for (let i = 0; i < length; i++) {
            values[i] = Int();
            Object.defineProperty(arr, i, {
                get() {
                    return values[i].$;
                },
                set(v) {
                    values[i].$ = v;
                }
            });
        }
        return arr;
    };
    return IntArray;
};
const UintArrayFactory = bitLength => {
    const Uint = UintFactory(bitLength);
    const UintArray = length => {
        const values = Array(length);
        const arr = {
            get _bitLength() {
                return bitLength * length;
            },
            get length() {
                return length;
            }
        };
        for (let i = 0; i < length; i++) {
            values[i] = Uint();
            Object.defineProperty(arr, i, {
                get() {
                    return values[i].$;
                },
                set(v) {
                    values[i].$ = v;
                }
            });
        }
        return arr;
    };
    return UintArray;
};
const assertNumber = value => {
    if (typeof value === 'boolean')
        return;
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
        throw Error('Expected a number');
    }
};
const maxValue = bitLength => Math.pow(2, bitLength);
const Int2 = IntFactory(2);
const Uint2 = UintFactory(2);
const Int2Arr = IntArrayFactory(2);
const Uint2Arr = UintArrayFactory(2);
const Int3 = IntFactory(3);
const Uint3 = UintFactory(3);
const Int3Arr = IntArrayFactory(3);
const Uint3Arr = UintArrayFactory(3);
const Int4 = IntFactory(4);
const Uint4 = UintFactory(4);
const Int4Arr = IntArrayFactory(4);
const Uint4Arr = UintArrayFactory(4);
const Int5 = IntFactory(5);
const Uint5 = UintFactory(5);
const Int5Arr = IntArrayFactory(5);
const Uint5Arr = UintArrayFactory(5);
const Int6 = IntFactory(6);
const Uint6 = UintFactory(6);
const Int6Arr = IntArrayFactory(6);
const Uint6Arr = UintArrayFactory(6);
const Int7 = IntFactory(7);
const Uint7 = UintFactory(7);
const Int7Arr = IntArrayFactory(7);
const Uint7Arr = UintArrayFactory(7);
const Int8 = IntFactory(8);
const Uint8 = UintFactory(8);
const Int8Arr = IntArrayFactory(8);
const Uint8Arr = UintArrayFactory(8);
const Int9 = IntFactory(9);
const Uint9 = UintFactory(9);
const Int9Arr = IntArrayFactory(9);
const Uint9Arr = UintArrayFactory(9);
const Int10 = IntFactory(10);
const Uint10 = UintFactory(10);
const Int10Arr = IntArrayFactory(10);
const Uint10Arr = UintArrayFactory(10);
const Int11 = IntFactory(11);
const Uint11 = UintFactory(11);
const Int11Arr = IntArrayFactory(11);
const Uint11Arr = UintArrayFactory(11);
const Int12 = IntFactory(12);
const Uint12 = UintFactory(12);
const Int12Arr = IntArrayFactory(12);
const Uint12Arr = UintArrayFactory(12);
const Int13 = IntFactory(13);
const Uint13 = UintFactory(13);
const Int13Arr = IntArrayFactory(13);
const Uint13Arr = UintArrayFactory(13);
const Int14 = IntFactory(14);
const Uint14 = UintFactory(14);
const Int14Arr = IntArrayFactory(14);
const Uint14Arr = UintArrayFactory(14);
const Int15 = IntFactory(15);
const Uint15 = UintFactory(15);
const Int15Arr = IntArrayFactory(15);
const Uint15Arr = UintArrayFactory(15);
const Int16 = IntFactory(16);
const Uint16 = UintFactory(16);
const Int16Arr = IntArrayFactory(16);
const Uint16Arr = UintArrayFactory(16);
const Int17 = IntFactory(17);
const Uint17 = UintFactory(17);
const Int17Arr = IntArrayFactory(17);
const Uint17Arr = UintArrayFactory(17);
const Int18 = IntFactory(18);
const Uint18 = UintFactory(18);
const Int18Arr = IntArrayFactory(18);
const Uint18Arr = UintArrayFactory(18);
const Int19 = IntFactory(19);
const Uint19 = UintFactory(19);
const Int19Arr = IntArrayFactory(19);
const Uint19Arr = UintArrayFactory(19);
const Int20 = IntFactory(20);
const Uint20 = UintFactory(20);
const Int20Arr = IntArrayFactory(20);
const Uint20Arr = UintArrayFactory(20);
const Int21 = IntFactory(21);
const Uint21 = UintFactory(21);
const Int21Arr = IntArrayFactory(21);
const Uint21Arr = UintArrayFactory(21);
const Int22 = IntFactory(22);
const Uint22 = UintFactory(22);
const Int22Arr = IntArrayFactory(22);
const Uint22Arr = UintArrayFactory(22);
const Int23 = IntFactory(23);
const Uint23 = UintFactory(23);
const Int23Arr = IntArrayFactory(23);
const Uint23Arr = UintArrayFactory(23);
const Int24 = IntFactory(24);
const Uint24 = UintFactory(24);
const Int24Arr = IntArrayFactory(24);
const Uint24Arr = UintArrayFactory(24);
const Int25 = IntFactory(25);
const Uint25 = UintFactory(25);
const Int25Arr = IntArrayFactory(25);
const Uint25Arr = UintArrayFactory(25);
const Int26 = IntFactory(26);
const Uint26 = UintFactory(26);
const Int26Arr = IntArrayFactory(26);
const Uint26Arr = UintArrayFactory(26);
const Int27 = IntFactory(27);
const Uint27 = UintFactory(27);
const Int27Arr = IntArrayFactory(27);
const Uint27Arr = UintArrayFactory(27);
const Int28 = IntFactory(28);
const Uint28 = UintFactory(28);
const Int28Arr = IntArrayFactory(28);
const Uint28Arr = UintArrayFactory(28);
const Int29 = IntFactory(29);
const Uint29 = UintFactory(29);
const Int29Arr = IntArrayFactory(29);
const Uint29Arr = UintArrayFactory(29);
const Int30 = IntFactory(30);
const Uint30 = UintFactory(30);
const Int30Arr = IntArrayFactory(30);
const Uint30Arr = UintArrayFactory(30);
const Int31 = IntFactory(31);
const Uint31 = UintFactory(31);
const Int31Arr = IntArrayFactory(31);
const Uint31Arr = UintArrayFactory(31);
const Int32 = IntFactory(32);
const Uint32 = UintFactory(32);
const Int32Arr = IntArrayFactory(32);
const Uint32Arr = UintArrayFactory(32);
const $maxMemory = 64;
const $addressSize = 16;
const $used = [0];
const $allocate = yukiValue => {
    $used[$used.length - 1] += yukiValue._bitLength;
    const bytes = Math.ceil($used[$used.length - 1] / 8);
    if (bytes > $maxMemory)
        throw Error('Out of memory');
    return yukiValue;
};
const $enter = () => {
    $used[$used.length] = $used[$used.length - 1];
};
const $exit = count => {
    for (let i = 0; i < count; i++) {
        $used.pop();
    }
};
const size = arr => arr.length;
'use strict';
const width = 128;
const height = 64;
const $backgrounds = new Array(height);
const $pixels = new Array(width * height);
const $canvas = document.getElementById('c');
const $context = $canvas.getContext('2d');
const $imageData = new ImageData(width, height);
$canvas.width = width;
$canvas.height = height;
const $palette = {
    lightGrey: [
        224,
        224,
        224
    ],
    lightGreen: [
        145,
        255,
        166
    ],
    lightBlue: [
        206,
        208,
        255
    ],
    black: [
        16,
        16,
        16
    ],
    red: [
        255,
        49,
        83
    ],
    green: [
        2,
        204,
        93
    ],
    blue: [
        75,
        63,
        243
    ],
    white: [
        252,
        252,
        252
    ]
};
const $background = [
    'lightGrey',
    'lightGreen',
    'lightBlue',
    'black'
];
const $foreground = [
    'red',
    'green',
    'blue',
    'white'
];
const $blit = () => {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = y * width + x;
            const index = i * 4;
            const [r, g, b] = $pixels[i] || $palette.black;
            $imageData.data[index] = r;
            $imageData.data[index + 1] = g;
            $imageData.data[index + 2] = b;
            $imageData.data[index + 3] = 255;
        }
    }
    $context.putImageData($imageData, 0, 0);
};
const $draw = () => {
    tick();
    $blit();
    requestAnimationFrame($draw);
};
let $isUp1 = false;
let $isDown1 = false;
let $isLeft1 = false;
let $isRight1 = false;
let $isUp2 = false;
let $isDown2 = false;
let $isLeft2 = false;
let $isRight2 = false;
document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'w')
        $isUp1 = true;
    if (e.key.toLowerCase() === 's')
        $isDown1 = true;
    if (e.key.toLowerCase() === 'a')
        $isLeft1 = true;
    if (e.key.toLowerCase() === 'd')
        $isRight1 = true;
    if (e.key === 'ArrowUp')
        $isUp2 = true;
    if (e.key === 'ArrowDown')
        $isDown2 = true;
    if (e.key === 'ArrowLeft')
        $isLeft2 = true;
    if (e.key === 'ArrowRight')
        $isRight2 = true;
});
document.addEventListener('keyup', e => {
    if (e.key.toLowerCase() === 'w')
        $isUp1 = false;
    if (e.key.toLowerCase() === 's')
        $isDown1 = false;
    if (e.key.toLowerCase() === 'a')
        $isLeft1 = false;
    if (e.key.toLowerCase() === 'd')
        $isRight1 = false;
    if (e.key === 'ArrowUp')
        $isUp2 = false;
    if (e.key === 'ArrowDown')
        $isDown2 = false;
    if (e.key === 'ArrowLeft')
        $isLeft2 = false;
    if (e.key === 'ArrowRight')
        $isRight2 = false;
});
const $init = () => {
    $draw();
};
function up1() {
    return $isUp1;
}
function down1() {
    return $isDown1;
}
function left1() {
    return $isLeft1;
}
function right1() {
    return $isRight1;
}
function up2() {
    return $isUp2;
}
function down2() {
    return $isDown2;
}
function left2() {
    return $isLeft2;
}
function right2() {
    return $isRight2;
}
function rnd(value) {
    return Math.floor(Math.random() * value);
}
function setBackground(row, backgroundColor) {
    row = ensureUnsigned(row, 6);
    backgroundColor = ensureUnsigned(backgroundColor, 2);
    $backgrounds[row] = backgroundColor;
}
function setPixel(x, y, color) {
    x = ensureUnsigned(x, 7);
    y = ensureUnsigned(y, 6);
    const i = y * width + x;
    color = ensureUnsigned(color, 2);
    if (color === 3) {
        color = $palette[$background[$backgrounds[y]]];
    } else if ($backgrounds[y] === 3) {
        color = $palette.white;
    } else {
        color = $palette[$foreground[color]];
    }
    $pixels[i] = color;
}
const xMax = 127;
const yMax = 63;
const viewWidth = 102;
const viewHeight = 58;
const viewLeft = 13;
const viewTop = 3;
const playfieldWidth = 63;
const playfieldHeight = 46;
const playfieldTop = 6;
const playfieldBottom = 51;
const playfieldLeft = 32;
const playfieldRight = 94;
const subgridWidth = 189;
const subgridHeight = 132;
const centerX = 63;
const centerY = 27;
const scoreTop = 54;
const textSprites = Object.freeze([
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1
]);
let x = $allocate(Uint7());
let y = $allocate(Uint6());
let x1 = $allocate(Uint7());
let y1 = $allocate(Uint6());
let x2 = $allocate(Uint7());
let y2 = $allocate(Uint6());
let spriteIndex = $allocate(Uint4());
let spriteWidth = $allocate(Uint4());
let spriteHeight = $allocate(Uint4());
let p1Y = $allocate(Int9());
let p2Y = $allocate(Int9());
let p1Speed = $allocate(Uint4());
let p2Speed = $allocate(Uint4());
let ballX = $allocate(Int9());
let ballY = $allocate(Int9());
let ballSpeedX = $allocate(Int4());
let ballSpeedY = $allocate(Int4());
let ballPlayer = $allocate(Bool());
let yOffset = $allocate(Int9());
let volleyCount = $allocate(Int3());
let score1 = $allocate(Uint4());
let score2 = $allocate(Uint4());
let winScreen = $allocate(Bool());
function clearScreen(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    {
        $enter();
        for (y.$ = 0;; y.$++) {
            $enter();
            setBackground(y.$, y.$ < scoreTop ? 1 : 3);
            {
                $enter();
                for (x.$ = 0;; x.$++) {
                    $enter();
                    setPixel(x.$, y.$, y.$ < scoreTop ? color.$ : 3);
                    if (x.$ === xMax) {
                        $enter();
                        $exit(2);
                        break;
                        $exit(1);
                    }
                    $exit(1);
                }
                $exit(1);
            }
            if (y.$ === yMax) {
                $enter();
                $exit(2);
                break;
                $exit(1);
            }
            $exit(1);
        }
        $exit(1);
    }
    $exit(1);
}
function drawSprite(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    {
        $enter();
        for (y.$ = 0; y.$ < spriteHeight.$; y.$++) {
            $enter();
            {
                $enter();
                for (x.$ = 0; x.$ < spriteWidth.$; x.$++) {
                    $enter();
                    if (textSprites[spriteIndex.$ * spriteWidth.$ * spriteHeight.$ + y.$ * spriteWidth.$ + x.$]) {
                        $enter();
                        setPixel(x.$ + x1.$, y.$ + y1.$, color.$);
                        $exit(1);
                    }
                    $exit(1);
                }
                $exit(1);
            }
            $exit(1);
        }
        $exit(1);
    }
    $exit(1);
}
function drawLineHorizontal(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    {
        $enter();
        for (x.$ = x1.$; x.$ <= x2.$; x.$++) {
            $enter();
            setPixel(x.$, y1.$, color.$);
            $exit(1);
        }
        $exit(1);
    }
    $exit(1);
}
function drawLineVertical(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    {
        $enter();
        for (y.$ = y1.$; y.$ <= y2.$; y.$++) {
            $enter();
            setPixel(x1.$, y.$, color.$);
            $exit(1);
        }
        $exit(1);
    }
    $exit(1);
}
function drawPlayfield(...$args) {
    $enter();
    $allocate($addressSize);
    y1.$ = playfieldTop;
    x1.$ = playfieldLeft;
    x2.$ = playfieldRight;
    drawLineHorizontal(1);
    y1.$ = playfieldBottom;
    drawLineHorizontal(1);
    {
        $enter();
        for (x.$ = 0; x.$ < 5; x.$++) {
            $enter();
            x1.$ = centerX;
            y1.$ = x.$ * 9 + playfieldTop + 2;
            y2.$ = y1.$ + 5;
            drawLineVertical(1);
            $exit(1);
        }
        $exit(1);
    }
    $exit(1);
}
function drawScore(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    spriteWidth.$ = 5;
    spriteHeight.$ = 5;
    y1.$ = scoreTop + 1;
    spriteIndex.$ = score1.$ < 10 ? 0 : 1;
    x1.$ = 35;
    drawSprite(color.$);
    spriteIndex.$ = score1.$ < 10 ? score1.$ : score1.$ - 10;
    x1.$ = 41;
    drawSprite(color.$);
    spriteIndex.$ = score2.$ < 10 ? 0 : 1;
    x1.$ = 81;
    drawSprite(color.$);
    spriteIndex.$ = score2.$ < 10 ? score2.$ : score2.$ - 10;
    x1.$ = 87;
    drawSprite(color.$);
    $exit(1);
}
function drawPlayer1(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    x1.$ = playfieldLeft;
    y1.$ = p1Y.$ / 3 + playfieldTop + 1;
    y2.$ = y1.$ + 5;
    drawLineVertical(color.$);
    $exit(1);
}
function drawPlayer2(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    x1.$ = playfieldRight;
    y1.$ = p2Y.$ / 3 + playfieldTop + 1;
    y2.$ = y1.$ + 5;
    drawLineVertical(color.$);
    $exit(1);
}
function drawBall(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    x1.$ = ballX.$ / 3 + playfieldLeft;
    y1.$ = ballY.$ / 3 + playfieldTop + 1;
    y2.$ = y1.$ + 1;
    drawLineVertical(color.$);
    x1.$++;
    drawLineVertical(color.$);
    $exit(1);
}
function resetBall1(...$args) {
    $enter();
    $allocate($addressSize);
    ballX.$ = 3;
    ballY.$ = p1Y.$ + 6;
    ballSpeedX.$ = 1;
    ballSpeedY.$ = 0;
    volleyCount.$ = 0;
    ballPlayer.$ = 0;
    $exit(1);
}
function resetBall2(...$args) {
    $enter();
    $allocate($addressSize);
    ballX.$ = subgridWidth - 3;
    ballY.$ = p2Y.$ + 6;
    ballSpeedX.$ = -1;
    ballSpeedY.$ = 0;
    volleyCount.$ = 0;
    ballPlayer.$ = 1;
    $exit(1);
}
function setBallSpeedY(...$args) {
    $enter();
    $allocate($addressSize);
    if (yOffset.$ < 3) {
        $enter();
        ballSpeedY.$ = -3;
        $exit(1);
    } else if (yOffset.$ < 6) {
        $enter();
        ballSpeedY.$ = -2;
        $exit(1);
    } else if (yOffset.$ < 9) {
        $enter();
        ballSpeedY.$ = -1;
        $exit(1);
    } else if (yOffset.$ < 14) {
        $enter();
        ballSpeedY.$ = 0;
        $exit(1);
    } else if (yOffset.$ < 17) {
        $enter();
        ballSpeedY.$ = 1;
        $exit(1);
    } else if (yOffset.$ < 20) {
        $enter();
        ballSpeedY.$ = 2;
        $exit(1);
    } else {
        $enter();
        ballSpeedY.$ = 3;
        $exit(1);
    }
    $exit(1);
}
function win(...$args) {
    $enter();
    $allocate($addressSize);
    let color = $allocate(Uint2($args[0]));
    winScreen.$ = 1;
    clearScreen(color.$);
    drawScore(color.$);
    $exit(1);
}
function winP1(...$args) {
    $enter();
    $allocate($addressSize);
    win(0);
    $exit(1);
}
function winP2(...$args) {
    $enter();
    $allocate($addressSize);
    win(2);
    $exit(1);
}
function updateBall(...$args) {
    $enter();
    $allocate($addressSize);
    ballX.$ += ballSpeedX.$;
    ballY.$ += ballSpeedY.$;
    if (ballY.$ < 0) {
        $enter();
        ballY.$ = 0;
        ballSpeedY.$ *= -1;
        $exit(1);
    } else if (ballY.$ > subgridHeight - 6) {
        $enter();
        ballY.$ = subgridHeight - 6;
        ballSpeedY.$ *= -1;
        $exit(1);
    }
    if (ballSpeedX.$ > 0) {
        $enter();
        if (ballX.$ > subgridWidth - 9) {
            $enter();
            yOffset.$ = ballY.$ - p2Y.$ + 5;
            if (yOffset.$ >= 0 && yOffset.$ < 23) {
                $enter();
                ballX.$ = subgridWidth - 9;
                setBallSpeedY();
                if (ballSpeedX.$ < 3) {
                    $enter();
                    volleyCount.$++;
                    if (volleyCount.$ === 3) {
                        $enter();
                        ballSpeedX.$++;
                        volleyCount.$ = 0;
                        $exit(1);
                    }
                    $exit(1);
                }
                ballSpeedX.$ *= -1;
                ballPlayer.$ = 1;
                $exit(1);
            } else {
                $enter();
                score1.$++;
                resetBall1();
                if (score1.$ === 11) {
                    $enter();
                    winP1();
                    $exit(1);
                }
                $exit(1);
            }
            $exit(1);
        }
        $exit(1);
    } else {
        $enter();
        if (ballX.$ < 3) {
            $enter();
            yOffset.$ = ballY.$ - p1Y.$ + 5;
            if (yOffset.$ >= 0 && yOffset.$ < 23) {
                $enter();
                ballX.$ = 3;
                setBallSpeedY();
                if (ballSpeedX.$ > -3) {
                    $enter();
                    volleyCount.$++;
                    if (volleyCount.$ === 3) {
                        $enter();
                        ballSpeedX.$--;
                        volleyCount.$ = 0;
                        $exit(1);
                    }
                    $exit(1);
                }
                ballSpeedX.$ *= -1;
                ballPlayer.$ = 0;
                $exit(1);
            } else {
                $enter();
                score2.$++;
                resetBall2();
                if (score2.$ === 11) {
                    $enter();
                    winP2();
                    $exit(1);
                }
                $exit(1);
            }
            $exit(1);
        }
        $exit(1);
    }
    $exit(1);
}
function handleInput(...$args) {
    $enter();
    $allocate($addressSize);
    if (up1() || down1()) {
        $enter();
        if (up1()) {
            $enter();
            p1Y.$ -= p1Speed.$ / 3;
            $exit(1);
        }
        if (down1()) {
            $enter();
            p1Y.$ += p1Speed.$ / 3;
            $exit(1);
        }
        if (p1Y.$ < 3) {
            $enter();
            p1Y.$ = 3;
            $exit(1);
        }
        if (p1Y.$ > subgridHeight - 18) {
            $enter();
            p1Y.$ = subgridHeight - 18;
            $exit(1);
        }
        if (p1Speed.$ < 15) {
            $enter();
            p1Speed.$++;
            $exit(1);
        }
        $exit(1);
    } else {
        $enter();
        p1Speed.$ = 0;
        $exit(1);
    }
    if (up2() || down2()) {
        $enter();
        if (up2()) {
            $enter();
            p2Y.$ -= p2Speed.$ / 3;
            $exit(1);
        }
        if (down2()) {
            $enter();
            p2Y.$ += p2Speed.$ / 3;
            $exit(1);
        }
        if (p2Y.$ < 3) {
            $enter();
            p2Y.$ = 3;
            $exit(1);
        }
        if (p2Y.$ > subgridHeight - 18) {
            $enter();
            p2Y.$ = subgridHeight - 18;
            $exit(1);
        }
        if (p2Speed.$ < 15) {
            $enter();
            p2Speed.$++;
            $exit(1);
        }
        $exit(1);
    } else {
        $enter();
        p2Speed.$ = 0;
        $exit(1);
    }
    $exit(1);
}
function start(...$args) {
    $enter();
    $allocate($addressSize);
    winScreen.$ = 0;
    p1Y.$ = 51;
    p2Y.$ = 51;
    score1.$ = 0;
    score2.$ = 0;
    clearScreen(3);
    if (rnd(2)) {
        $enter();
        resetBall1();
        $exit(1);
    } else {
        $enter();
        resetBall2();
        $exit(1);
    }
    $exit(1);
}
function tick(...$args) {
    $enter();
    $allocate($addressSize);
    if (winScreen.$) {
        $enter();
        if (left1() || right1() || left2() || right2()) {
            $enter();
            start();
            $exit(1);
        } else {
            $enter();
            return $exit(3);
        }
        $exit(1);
    }
    drawPlayfield();
    drawPlayer1(3);
    drawPlayer2(3);
    drawBall(3);
    drawScore(3);
    handleInput();
    updateBall();
    if (winScreen.$) {
        $enter();
        return $exit(2);
    }
    drawPlayer1(0);
    drawPlayer2(2);
    drawBall(ballPlayer.$ ? 2 : 0);
    drawScore(ballPlayer.$ ? 2 : 0);
    $exit(1);
}
start();
$init();