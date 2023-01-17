// 1)
const letters = ['a', 'b', 'c', 'd'];

const lettersToEven = (letters, size) => {
    let subarray = [];

    for (let i = 0; i < Math.ceil(letters.length/size); i++){
        subarray[i] = letters.slice((i * size), (i * size) + size);
    }

    return subarray
};

// console.log(lettersToEven(letters, 3));


const chunk = (array, size) => {
    const result = [];

    let stack = [];

    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];

        stack.push(currentItem);

        if (stack.length === size || i === array.length -1) {
            result.push(stack);
            stack = [];
        }
    }

    return result;
};

// console.log(chunk(letters, 3))


// 2)
const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";

// const aggreateUsersAndPosts = async () => {
//     try {
//         const [users, posts] = await Promise.all([
//             fetch(`${BASE_URL}/users`).then(response => response.json()),
//             fetch(`${BASE_URL}/posts`).then(response => response.json()),
//         ]);
//
//         const UserIdPostMap = new Map();
//
//         posts.forEach((post) => {
//             if (!UserIdPostMap.has(post.userId)) {
//                 UserIdPostMap.set(post.userId, []);
//             }
//
//             UserIdPostMap.get(post.userId).push(post);
//         })
//
//         return users.map((user) => ({
//             ...user,
//             myPosts:UserIdPostMap.get(user.id),
//         }))
//     }
//     catch (error) {
//     } finally {
//     }
// };
//
// (async () => {
//     const data = await aggreateUsersAndPosts();
//
//     console.log(data);
// })();

((url) => {
    console.log(url)
})(BASE_URL);



// 3)
const customEntries = (obj) => {
    const result = [];

    for (const key in obj) {
        const chunk = [key, obj[key]]

        result.push(chunk);
    };

    return result;
};

console.log(customEntries({a: 1, b: 2}));


// 4)
const customFromEntries = (list) => {
    return list.reduce((result, [key, value]) => {
        result[key] = value;

        return result
    }, {});
};


console.log(customFromEntries([
    [ 'a', 1 ],
    [ 'b', 2 ]
]));















