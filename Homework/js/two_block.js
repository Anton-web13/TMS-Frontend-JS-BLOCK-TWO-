const arr = ["723", 632, 394, "928", "232", 688, 0, 230, "526", "403", "hZ", 338, 66, "927", 108, "kFE_T", 775, "120"];

const filter_list = (list) => {

    if (!Array.isArray(list)) return;

    const stringArray = [];

    for (const letter of list) {
        const num = typeof letter !== 'string';
        num && stringArray.push(letter);
        // if (num) stringArray.push(letter);
    }
    return stringArray;


//   return arr.filter((fil) => {
//      const isString = typeof fil !== 'string';
//      return isString;
//   })


}

console.log(filter_list(arr))