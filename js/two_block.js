//  1)
const helloOleg = function(value) {

    if(value === 'Mark') {
        console.log(`Hi, ${value}`)
    } else {
        console.log(`Hello, ${value}`)
    }
}

helloOleg('Pol');


//  2)
const hypotenuse = function(n, m) {

    const result = (n*n) + (m*m);
    console.log(Math.sqrt(result));
}

hypotenuse(4, 4);


// 3)
const min = function(a ,b) {
    let minValue = 0;
    let maxValue = 0;
    if(a < b) {
        minValue = a;
        maxValue = b;
    } else {
        minValue = b;
        maxValue = a;
    }

    console.log(minValue);
}

min(3, -1)

// 4 )
const isEven = function(value) {
    if(value % 2 === 0) {
        value = 'true';
    } else {
        value = 'false';
    }

    console.log(value);
}

isEven(98);

// 5)
const deleteChars = function() {
    const stringValue = 'Hello';
    console.log(stringValue.slice(1, -1));
}

deleteChars();

// 6)
const stringValue = function(value) {
    const resultOneLetter = value[0].toUpperCase();
    const resultAllLetter = value.slice(1).toLowerCase();
    const resultAllLetterWhitoutLastLetter = value.slice(1, -1).toLowerCase();
    let lastLetter = value.slice(value.length -1);

    if(value.length % 2 === 0) {
        lastLetter = lastLetter.toUpperCase();
        console.log(`${resultOneLetter}${resultAllLetterWhitoutLastLetter}${lastLetter}`);
    } else {
        console.log(`${resultOneLetter}${resultAllLetter}`);
    }

}

stringValue('helflo');

// 7)
const checkLetterCase = function(value) {
    if(value.toUpperCase() === value) {
        console.log("Оууу май, большая буква!")
    } else {
        console.log("Нет уж, маленькие буквы - скучно")
    }
}

checkLetterCase('F');

// 8)
const concatenateOfWords = function(firstWord, secondtWord) {
    console.log(`${firstWord} ${secondtWord}`);
}

concatenateOfWords('Hello', 'World');


// 9)
const checkStringLength = function(string, number) {
    if(string.length > number) {
        console.log('String is too long!');
    } else if (string.length < number) {
        console.log('String is too little!');
    } else {
        console.log(string);
    }
}

checkStringLength('Hello my friend', 16);








