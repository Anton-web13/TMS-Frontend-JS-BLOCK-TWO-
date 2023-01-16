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

// 2)
const solutions = async () => {

    try {

        const result = [];

        const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())

        const getUsers  = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

        // console.log(getUsers);

        console.log(getPosts);

        // for (const post of getPosts) {
        //
        //     const getUser  = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        //         .then(response => response.json())
        //
        //     result.push(getUser)
        // }

        for (const user of getUsers) {

            // console.log(user.id)

            const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`)
                .then(response => response.json())

            result.push(getPosts)
        }

        console.log(result)

    }
    catch (error) {
        console.log(error.message)
    }
};

console.log(solutions());


