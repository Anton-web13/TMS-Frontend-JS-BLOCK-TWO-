// 1)
const camelCase = (string) => {
    const getStringWithSpace = string.split(/(?=[A-Z])/).join(" ");

    return getStringWithSpace;
}

// console.log(camelCase("helloMyDearFriend"));

// 2)
const findMissing = (numbers) => {
    const maxValue = Math.max(...numbers);

    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0 && !numbers.includes(i)) {
            return i;
        }
    }

    return "Nothing is found!"
};

// console.log(findMissing([1, 3, 5, 9, 11]));


// 3)
const romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

const getDecimalNumeral = (allNumeral, date) => {

    const dateToArray = Array.from(date);

    const dateToObject = dateToArray.reduce((result, number) => {
        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }

        return result;
    }, {});

    const entries = Object.entries(dateToObject);

    let decimalCentury = 0;
    for (const value of entries) {
        const symbolOfDate = value[0];
        const repeatOfDate = value[1];

        decimalCentury += (allNumeral[symbolOfDate]) * (repeatOfDate);
    }

    const numberToString = String(decimalCentury);

    if (numberToString.length > 2) {
        return `${decimalCentury} year`;
    }

    return `${decimalCentury} century`;
};

// console.log(getDecimalNumeral(romanNumeral, "VIIII"));

// MDCLXVI  MMVIII  XXIII  XXI  MMXXII  VIIII


// 4)
const colorsOfGloves = ["red", "green", "red", "blue", "blue"];

const getPairsOfGloves = (colors) => {

    const colorsToObject = colors.reduce((result, number) => {
        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }

        return result;
    }, {});

    const entries = Object.entries(colorsToObject);

    const sumOfPairs = [];
    let valueOfPairs = 0;
    for (const value of entries) {
        const colorOfPairs = value[0];
        const numberOfPairs = value[1];

        if (numberOfPairs % 2 === 0) {
            sumOfPairs.push(` Pairs of ${colorOfPairs}: ${numberOfPairs / 2}`);
            valueOfPairs += numberOfPairs;
        }
    }

    return `${valueOfPairs / 2}. ${sumOfPairs}`;
};

console.log(getPairsOfGloves(colorsOfGloves));

// ["red", "green", "red", "blue", "blue"];
// ["red", "red", "red", "red", "red", "red"];
// ["red", "green", "green", "red", "blue", "blue"];


// 5)
const getFactorial = (number) => {
    if (number === 0) {
        return 1;
    }

    return number * getFactorial(number - 1);
}

// console.log(getFactorial(5))










