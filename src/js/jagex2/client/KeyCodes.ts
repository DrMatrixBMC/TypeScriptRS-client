export type JavaKeyCodes = {
    [key: string]: {
        code: number;
        ch: number;
    };
};

export const CanvasEnabledKeys: string[] = ['F11', 'F12'];

// prettier-ignore
export const KeyCodes: JavaKeyCodes = {
    'Backspace': {code: 8, ch: 8},
    'Enter': {code: 10, ch: 10},
    'Shift': {code: 16, ch: 65535},
    'Escape': {code: 27, ch: 27},
    'Tab': {code: 9, ch: 9},
    'CapsLock': {code: 20, ch: 65535},
    ' ': {code: 32, ch: 32},

    'Control': {code: 17, ch: 65535},
    'Alt': {code: 18, ch: 65535},
    'Meta': {code: 524, ch: 65535},

    'ArrowLeft': {code: 37, ch: 65535},
    'ArrowRight': {code: 39, ch: 65535},
    'ArrowUp': {code: 38, ch: 65535},
    'ArrowDown': {code: 40, ch: 65535},

    'Insert': {code: 155, ch: 65535},
    'Home': {code: 36, ch: 65535},
    'PageUp': {code: 33, ch: 65535},
    'Delete': {code: 127, ch: 127},
    'End': {code: 35, ch: 65535},
    'PageDown': {code: 34, ch: 65535},

    '`': {code: 192, ch: 96},
    '~': {code: 192, ch: 126},
    '!': {code: 49, ch: 33},
    '@': {code: 50, ch: 64},
    '#': {code: 51, ch: 35},
    '$': {code: 52, ch: 36},
    '%': {code: 53, ch: 37},
    '^': {code: 54, ch: 94},
    '&': {code: 55, ch: 38},
    '*': {code: 56, ch: 42},
    '(': {code: 57, ch: 40},
    ')': {code: 48, ch: 41},
    '-': {code: 45, ch: 45},
    '_': {code: 45, ch: 95},
    '=': {code: 61, ch: 61},
    '+': {code: 61, ch: 43},
    '[': {code: 91, ch: 91},
    '{': {code: 91, ch: 123},
    ']': {code: 93, ch: 93},
    '}': {code: 93, ch: 125},
    '\\': {code: 92, ch: 92},
    '|': {code: 92, ch: 124},
    ';': {code: 59, ch: 59},
    ':': {code: 59, ch: 58},
    "'": {code: 222, ch: 39},
    '"': {code: 222, ch: 34},
    ',': {code: 44, ch: 44},
    '<': {code: 44, ch: 60},
    '.': {code: 46, ch: 46},
    '>': {code: 46, ch: 62},
    '/': {code: 47, ch: 47},
    '?': {code: 47, ch: 63},

    'F1': {code: 112, ch: 65535},
    'F2': {code: 113, ch: 65535},
    'F3': {code: 114, ch: 65535},
    'F4': {code: 115, ch: 65535},
    'F5': {code: 116, ch: 65535},
    'F6': {code: 117, ch: 65535},
    'F7': {code: 118, ch: 65535},
    'F8': {code: 119, ch: 65535},
    'F9': {code: 120, ch: 65535},
    'F10': {code: 121, ch: 65535},
    'F11': {code: 122, ch: 65535},
    'F12': {code: 123, ch: 65535},

    '0': {code: 48, ch: 48},
    '1': {code: 49, ch: 49},
    '2': {code: 50, ch: 50},
    '3': {code: 51, ch: 51},
    '4': {code: 52, ch: 52},
    '5': {code: 53, ch: 53},
    '6': {code: 54, ch: 54},
    '7': {code: 55, ch: 55},
    '8': {code: 56, ch: 56},
    '9': {code: 57, ch: 57},

    'a': {code: 65, ch: 97},
    'b': {code: 66, ch: 98},
    'c': {code: 67, ch: 99},
    'd': {code: 68, ch: 100},
    'e': {code: 69, ch: 101},
    'f': {code: 70, ch: 102},
    'g': {code: 71, ch: 103},
    'h': {code: 72, ch: 104},
    'i': {code: 73, ch: 105},
    'j': {code: 74, ch: 106},
    'k': {code: 75, ch: 107},
    'l': {code: 76, ch: 108},
    'm': {code: 77, ch: 109},
    'n': {code: 78, ch: 110},
    'o': {code: 79, ch: 111},
    'p': {code: 80, ch: 112},
    'q': {code: 81, ch: 113},
    'r': {code: 82, ch: 114},
    's': {code: 83, ch: 115},
    't': {code: 84, ch: 116},
    'u': {code: 85, ch: 117},
    'v': {code: 86, ch: 118},
    'w': {code: 87, ch: 119},
    'x': {code: 88, ch: 120},
    'y': {code: 89, ch: 121},
    'z': {code: 90, ch: 122},

    'A': {code: 65, ch: 65},
    'B': {code: 66, ch: 66},
    'C': {code: 67, ch: 67},
    'D': {code: 68, ch: 68},
    'E': {code: 69, ch: 69},
    'F': {code: 70, ch: 70},
    'G': {code: 71, ch: 71},
    'H': {code: 72, ch: 72},
    'I': {code: 73, ch: 73},
    'J': {code: 74, ch: 74},
    'K': {code: 75, ch: 75},
    'L': {code: 76, ch: 76},
    'M': {code: 77, ch: 77},
    'N': {code: 78, ch: 78},
    'O': {code: 79, ch: 79},
    'P': {code: 80, ch: 80},
    'Q': {code: 81, ch: 81},
    'R': {code: 82, ch: 82},
    'S': {code: 83, ch: 83},
    'T': {code: 84, ch: 84},
    'U': {code: 85, ch: 85},
    'V': {code: 86, ch: 86},
    'W': {code: 87, ch: 87},
    'X': {code: 88, ch: 88},
    'Y': {code: 89, ch: 89},
    'Z': {code: 90, ch: 90}
};
