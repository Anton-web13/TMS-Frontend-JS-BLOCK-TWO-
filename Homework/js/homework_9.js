// 1)
const videos = [
    {
        id: 65432445,
        title: "The Chamber",
    },
    {
        id: 675465,
        title: "The Chamber",
    },
    {
        id: 70111470,
        title: "Die Hard",
    },
    {
        id: 654356453,
        title: "Bad Boys",
    },
]

const getVideosOnId = (videos) => {
    return videos.reduce((result, {id, title}) => {
        result[id] = title;

        return result;
    }, {});
};

console.log(getVideosOnId(videos));


// 2)
const boxarts = [
    {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
    },
    {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
    },
    {
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
    },
    {
        width: 425,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
    },
]

const areaBox = (boxs) => {
    return boxs.reduce((maxSize, {width, height, url}) => {
        const videoSquare = width * height;

        if (maxSize === Math.max(videoSquare)) {
            maxSize.push(url)
        }

        return url;
    });
};

console.log(areaBox(boxarts));


// 3)
const moreThanOne = (oneArray) => {

    const newArray = oneArray.reduce((result, number) => {

        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }

        return result;
    }, {});

    const entries = Object.entries(newArray);

    entries.sort(([prevKey, prevValue], [nextKey, nextValue]) => nextValue - prevValue);

    return +entries[0][0]
};

console.log(moreThanOne([5,5,2,2,2,2,3,3,3,3,3,3,3,3,3,3]));


// 4)
const filterFunction = (obj) => {
    const entries = Object.entries(obj);

    return entries.reduce((result, [key, value]) => {
       if (value) {
           result[key] = value
       }

       return result
    }, {});
};

console.log(filterFunction({ a: 1, b: "Hello", c: null, z: undefined}));
// console.log(filterFunction({name: "alex", age: 10, friends: [], address: null}));


// 5)
const numberIsOne = (oneArray) => {
    const newArray = oneArray.reduce((result, number) => {

        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }

        return result;
    }, {});

    const entries = Object.entries(newArray);

    return entries.find((number) => {

        if (number[1] !== 1) {
            return;
        }

        return number[0]
    });
};

const result = numberIsOne([1,1,2,2,9,3,3,4,4]);
console.log(result[0])


// 6)
const cutString = (string, availableChars) => {
    if (string.length > availableChars) {
        return `${string.slice(0, availableChars)}...`
    };

    return string;
};

console.log(cutString("Hello", 3));


// 7)
Array.prototype.customMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const currentItem = this[i];

        const newItem = callback(currentItem, i, this);

        result.push(newItem);
    }

    return result;
}

const x = [1,2,3];
console.log(x.customMap((item) => item * 2));


// 8)
Array.prototype.customFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const currentItem = this[i];

        const isAcceptable = callback(currentItem, i, this);

        if (isAcceptable) {
            result.push(currentItem);
        }
    }

    return result;
}

const xs = [1,2,3];
console.log(xs.customFilter((item) => item >= 2));








