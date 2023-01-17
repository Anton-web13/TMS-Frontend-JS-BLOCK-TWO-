// 1)
const letters = ['a', 'b', 'c', 'd'];

const lettersToEven = (letters, size) => {
    let subarray = [];

    for (let i = 0; i < Math.ceil(letters.length/size); i++){
        subarray[i] = letters.slice((i * size), (i * size) + size);
    }

    return subarray
};

console.log(lettersToEven(letters, 3));


