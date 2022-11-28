// debugger

// 1)
// filter
const filterUserListFilter = (users, letterUsers) => {
    if (!Array.isArray(users)) {
        return;
    }

    return users.filter((user) => {
        const firstUser = user[0].toLowerCase();

        for (const letter of letterUsers) {
            if (firstUser.includes(letter)) {
                return;
            }
        }

        return user;

    });

};
console.log(filterUserListFilter(["Alex", "alex", "Max", "Via", "Petr", "Alexandra"], ['a','p']));









// 2)
// for
const allLetterFor = (letterArray) => {
    if (!Array.isArray(letterArray)) {
        return;
    }

    const newLetterArray = [];

    for (let i = 0; i < letterArray.length; i++) {
        const ONE_ELEMENT_OF_ARRAY = letterArray[i].toUpperCase();
        if (letterArray[i] === ONE_ELEMENT_OF_ARRAY) {
            newLetterArray.push(letterArray[i].toLowerCase());
        } else {
            newLetterArray.push(letterArray[i].toUpperCase());
        }
    }

    return newLetterArray;
}
console.log(allLetterFor(['a', 'B', 'C', 'L', 'g']));


// while
const allLetterWhile = (letterArray) => {
    if (!Array.isArray(letterArray)) {
        return;
    }

    const newLetterArray = [];
    let i = 0;
    while (i < letterArray.length) {
        const ONE_ELEMENT_OF_ARRAY = letterArray[i].toUpperCase();
        if (letterArray[i] === ONE_ELEMENT_OF_ARRAY) {
            newLetterArray.push(letterArray[i].toLowerCase());
        } else {
            newLetterArray.push(letterArray[i].toUpperCase());
        }
        i++
    }

    return newLetterArray;
}
console.log(allLetterWhile(['a', 'B', 'C', 'L', 'g', 'g', 'EEE']));


// for of
const allLetterForOf = (letterArray) => {
    if (!Array.isArray(letterArray)) {
        return;
    }

    const newLetterArray = [];
    for (const letter of letterArray) {
        const ONE_ELEMENT_OF_ARRAY = letter.toUpperCase();
        if (letter === ONE_ELEMENT_OF_ARRAY) {
            newLetterArray.push(letter.toLowerCase());
        } else {
            newLetterArray.push(letter.toUpperCase());
        }
    }

    return newLetterArray;
}
console.log(allLetterForOf(['a', 'B', 'C', 'L', 'GGGGg', 'g', 'EEE']));


// map
const allLetterMap = (letterArray) => {
    if (!Array.isArray(letterArray)) {
        return;
    }

    const stringNumbersArray = letterArray.map((val) => {
        const ONE_ELEMENT_OF_ARRAY = val.toUpperCase();
        if (val === ONE_ELEMENT_OF_ARRAY) {
            return (val.toLowerCase());
        } else {
            return (val.toUpperCase());
        }
    })

    return stringNumbersArray;
}
console.log(allLetterMap(['a', 'B', 'C', 'LJHHHL', 'GGGGg', 'g', 'EEE']));







// 3)
const numbersArrayFunction = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    const stringNumbersArray = []
    for (let i = 0; i < value.length; i++) {
        stringNumbersArray.push(`Value: ${value[i]}, Index: ${value.indexOf(value[i])}, Squared: ${Math.pow(value[i], 2)}`);
    }

    return stringNumbersArray;
}
console.log(numbersArrayFunction([3,4,6]));

// while
const numbersArrayFunctionWhile = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    let i = 0;
    const stringNumbersArray = [];
    while (i < value.length) {
        stringNumbersArray.push(`Value: ${value[i]}, Index: ${value.indexOf(value[i])}, Squared: ${Math.pow(value[i], 2)}`);
        i++;
    }

    return stringNumbersArray;
}
console.log(numbersArrayFunctionWhile([3,4,6]));


// for of
const numbersArrayFunctionForOf = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    const stringNumbersArray = [];
    for (const val of value) {
        stringNumbersArray.push(`Value: ${val}, Index: ${value.indexOf(val)}, Squared: ${Math.pow(val, 2)}`);
    }

    return stringNumbersArray;
}
console.log(numbersArrayFunctionForOf([3,4,6]));


// map
const numbersArrayFunctionMap = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    const stringNumbersArray = value.map((val) => {
        return `Value: ${val}, index: ${value.indexOf(val)}, Squared: ${Math.pow(val, 2)}`;
    })

    return stringNumbersArray;
}
console.log(numbersArrayFunctionMap([3,48,6]));







// 4)
// for
const allValues = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    const evenValues = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i].length % 2 === 0) evenValues.push(value[i]);
    }

    return evenValues;
}

console.log(allValues(["Hiyy", 25, 3, 46, 5, "JSdg", 2, "C+h+ii"]));


// while
const allValuesWhile = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    let i = 0;
    const evenValues = [];
    while (i < value.length) {
        if (value[i].length % 2 === 0) evenValues.push(value[i]);
        i++;
    }

    return evenValues;
}

console.log(allValuesWhile(["Hiyy", 25, 3, 46, 5, "JSjg", 2, "C+h+ii"]));


// for of
const allValuesForOf = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    const evenValues = [];

    for (const val of value) {
        if (val.length % 2 === 0) evenValues.push(val);
    }

    return evenValues;
}

console.log(allValuesForOf(["Hiyy", 25, 3, 46, 5, "JSjg", 2, "C+h+ii"]));


// filter
const allValuesFilter = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    return value.filter((val) => {
        return val.length % 2 === 0;
    })
}

console.log(allValuesFilter(["Hiyy", 25, 3, 46, 5, "JSjg", 2, "C+h+ii"]));


