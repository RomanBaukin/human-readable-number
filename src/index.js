module.exports = function toReadable(number) {
    let result = '';
    const humanNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    function humanDozens(num) {
        if (num <= 20 || num % 10 === 0) {
            return humanNumbers[num];
        } else {
            return `${humanNumbers[Math.floor(num / 10) * 10]} ${humanNumbers[num % 10]}`
        }
    }

    if (number < 100) {
        result = humanDozens(number);
    } else if (number % 100 === 0) {
        result = `${humanNumbers[Math.floor(number / 100)]} hundred`;
    } else {
        result = `${humanNumbers[Math.floor(number / 100)]} hundred ${humanDozens(number % 100)}`;
    }

    return result
}
