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
        const letterEachStep = letterArray[i]
        if (letterEachStep === ONE_ELEMENT_OF_ARRAY) {
            newLetterArray.push(letterEachStep.toLowerCase());
        } else {
            newLetterArray.push(letterEachStep.toUpperCase());
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

    const letterEachStep = letterArray.map((val) => {
        const ONE_ELEMENT_OF_ARRAY = val.toUpperCase();
        if (val === ONE_ELEMENT_OF_ARRAY) {
            return (val.toLowerCase());
        }

        return (val.toUpperCase());
    })

    return letterEachStep;
}
console.log(allLetterMap(['a', 'B', 'C', 'LJHHHL', 'GGGGg', 'g', 'EEE']));







// 3)
const numbersArrayFunction = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    const stringNumbersArray = [];
    for (let i = 0; i < value.length; i++) {
        const eachValue = value[i];
        stringNumbersArray.push(`Value: ${eachValue}, Index: ${value.indexOf(eachValue)}, Squared: ${Math.pow(eachValue, 2)}`);
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
        const eachValue = value[i];
        stringNumbersArray.push(`Value: ${eachValue}, Index: ${value.indexOf(eachValue)}, Squared: ${Math.pow(eachValue, 2)}`);
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

    const numberEachStep = value.map((val) => `Value: ${val}, index: ${value.indexOf(val)}, Squared: ${Math.pow(val, 2)}`)

    return numberEachStep;
}
console.log(numbersArrayFunctionMap([3,8,6]));







// 4)
// for
const allValues = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    // const number = 55;
    // const len = Math.ceil(Math.log10(number + 1));
    // console.log(len); // 2
    // console.log(number.length); // undefined
    //     if (value[i].length % 2 === 0) evenValues.push(value[i]);
    //     if (string % 2 === 0) evenValues.push(string);

    const evenValues = [];
    for (let i = 0; i < value.length; i++) {
        const string = value[i];
        if (typeof string === 'string' && string.length % 2 === 0) evenValues.push(string);
    }

    return evenValues;
}

console.log(allValues(["Hiyy", 25, 3, 46, 5, "JSjg", 2, "C+h+ii"]));


// while
const allValuesWhile = (value) => {
    if (!Array.isArray(value)) {
        return;
    }

    let i = 0;
    const evenValues = [];
    while (i < value.length) {
        const string = value[i];
        if (typeof string === 'string' && string.length % 2 === 0) evenValues.push(string);
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
        if (typeof val === 'string' && val.length % 2 === 0) evenValues.push(val);
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
        // return val.length % 2 === 0;
        if (typeof val === 'string' && val.length % 2 === 0) {
            return val;
        }
    })
}

console.log(allValuesFilter(["Hiyy", 25, 3, 46, 5, "JSjg", 2, "C+h+ii"]));


