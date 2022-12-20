// 1)
const camelCase = (string) => {
    const getStringWithSpace = string.split(/(?=[A-Z])/).join(" ");

    return getStringWithSpace;
}

// console.log(camelCase("helloMyDearFriend"));

// OK_OK
const dropTheCamelCase = (string) => {
    let result = '';

    for (const letter of string) {
        const isBigLetter = letter === letter.toUpperCase();

        // if (isBigLetter) {
        //     result += ` ${letter}`;
        // } else {
        //     result += letter;
        // }

        result += `${isBigLetter ? " " : ""}${letter}`;
    }

    return result;
};

// console.log(dropTheCamelCase("helloWorld"));
// OK_OK /


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


// OK_OK
const findMissingNumber = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const nextNumber = numbers[i + 1];
        const numberAfterNextNumber = numbers[i + 2];

        const currentDifference = nextNumber - currentNumber;
        const nextDifference = numberAfterNextNumber - nextNumber;

        if (currentDifference !== nextDifference) {
            return currentNumber + nextDifference;
        }
    }
};

// console.log(findMissingNumber([2, 4, 8, 10]));
// OK_OK /

// OK_OK
const findMissingTerm = (arithmeticProgression) => {
    const firstTermOfProgression = arithmeticProgression[0];
    const lastTermOfProgression = arithmeticProgression.at(-1);
    const termsQuantity = arithmeticProgression.length;

    const arithmeticProgressionStep =
        (lastTermOfProgression - firstTermOfProgression) / termsQuantity;

    for (let i = 0; i < arithmeticProgression.length; i++) {
        if (
            arithmeticProgression[i] + arithmeticProgressionStep !==
            arithmeticProgression[i + 1]
        ) {
            return arithmeticProgression[i] + arithmeticProgressionStep;
        }
    }
};

// console.log(findMissingTerm([1, 3, 7, 9]));
// OK_OK /

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

const getDecimalNumeral = (allNumeral, numbers) => {

    const numbersToArray = Array.from(numbers);

    const numbersToObject = numbersToArray.reduce((result, number) => {
        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }

        return result;
    }, {});

    const entries = Object.entries(numbersToObject);

    let decimalCentury = 0;
    for (const [symbolOfDate, repeatOfDate] of entries) {

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


// OK_OK
const convertRomanianNumbers = (romanianNumbers) => {
    const RomanianNumbersMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < romanianNumbers.length; i++) {
        const currentSymbol = romanianNumbers[i];
        const nextSymbol = romanianNumbers[i + 1];

        const currentValue = RomanianNumbersMap[currentSymbol];
        const nextValue = RomanianNumbersMap[nextSymbol];

        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
};

// console.log(convertRomanianNumbers("XIX"));
// OK_OK /


// 4)
const colorsOfGloves = ["red", "green", "red", "blue", "blue"];

const getPairsOfGloves = (colors) => {

    const colorsToObject = colors.reduce((result, color) => {
        if (result[color]) {
            result[color] += 1;
        } else {
            result[color] = 1;
        }

        return result;
    }, {});

    const entries = Object.entries(colorsToObject);

    const sumOfPairs = [];
    let valueOfPairs = 0;
    for (const [colorOfPairs, numberOfPairs] of entries) {

        if (numberOfPairs % 2 === 0) {
            sumOfPairs.push(` Pairs of ${colorOfPairs}: ${numberOfPairs / 2}`);
            valueOfPairs += numberOfPairs;
        }
    }

    return `${valueOfPairs / 2}. ${sumOfPairs}`;
};

// console.log(getPairsOfGloves(colorsOfGloves));

// ["red", "green", "red", "blue", "blue"];
// ["red", "red", "red", "red", "red", "red"];
// ["red", "green", "green", "red", "blue", "blue"];


// OK_OK
const finsGlovesPairs = (gloves) =>{
    const GlovesAmountMap = new Map();

    gloves.forEach(glove => {
       if (GlovesAmountMap.has(glove)) {
           GlovesAmountMap.set(glove, GlovesAmountMap.get(glove) + 1);
       } else {
           GlovesAmountMap.set(glove, 1)
       }
    });

    // return Array.from(GlovesAmountMap).reduce((result, [_, amount]) => {
    //     return result + Math.floor(amount / 2);
    // }, 0)

    return Array.from(GlovesAmountMap).reduce((result, [gloveColor, amount]) => {
        if (amount > 1) {
            const pairs = Math.floor(amount / 2);
            result[gloveColor] = {
                pairs,
                extra: amount - pairs * 2
            };
        }

        return result
    }, {})
};

// console.log(finsGlovesPairs(["red", "green", "red", "blue", "blue"]));
// OK_OK /




// 5)
const getFactorial = (number) => {
    if (number === 0) {
        return 1;
    }

    return number * getFactorial(number - 1);
}

// console.log(getFactorial(5))

// OK_OK
const findFactorial = (number) => {
    if (number === 0) return 1;

    return number * findFactorial(number - 1);
    // return number !== 1 ? number * findFactorial(number - 1) : 1;
};

console.log(findFactorial(0))
// OK_OK /








