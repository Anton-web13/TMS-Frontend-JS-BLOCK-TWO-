//  1)
const sayHello = function(name) {
    const SPECIAL_NAME = 'mark';
    const isMark = name.toLowerCase() === SPECIAL_NAME;

    if(isMark) {
        return `Hi, ${name}`;
    }

    return `Hello, ${name}`;
}

console.log(sayHello('Mark'));


//  2)
const hypotenuse = function(n, m) {
    return Math.sqrt( Math.pow(n,2) + Math.pow(m,2));
}

console.log(hypotenuse(4, 4));


// 3)
const min = function(a ,b) {

    if(a < b) {
        return a;
    } else if (a > b){
        return b;
    }

    return 'Numbers are equal'
}

console.log(min(3, 5));

// 4 )
const isEven = function(value) {
    return value % 2 === 0;
}

console.log(isEven(97));

// 5)
const deleteChars = function(value) {
    return value.slice(1, -1);
}

console.log(deleteChars('Hello'));

// 6)
const stringValue = function(value) {
    const firstCapitalLetter = value[0].toUpperCase();
    const isCharsAmountEven = value.length % 2 === 0;

    if(isCharsAmountEven) {
        const restWord = value.slice(1, -1).toLowerCase();
        const lastCapitalLetter = value[value.length - 1].toUpperCase();

        return `${firstCapitalLetter}${restWord}${lastCapitalLetter}`;
    }

    return `${firstCapitalLetter}${value.slice(1).toLowerCase()}`;
}

console.log(stringValue('helflw'));

// 7)
const checkLetterCase = function(value) {
    if(value.toUpperCase() === value) {
        return "Оууу май, большая буква!";
    }

    return "Нет уж, маленькие буквы - скучно";
}

console.log(checkLetterCase('F'));

// 8)
const concatenateOfWords = function(firstWord, secondWord) {
    return `${firstWord} ${secondWord}`;
}

console.log(concatenateOfWords('Hello', 'World'));


// 9)
const checkStringLength = function(string, number) {
    return string.length > number ? 'String is too long!' : 'String is too little!';
}

console.log(checkStringLength('Hello my friend', 16));








