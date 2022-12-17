// 1)
const numberFunction = (nums) => {

    return nums.map(number => number % 2 === 0 ? number + 1 : number - 1)
}

console.log(numberFunction([1,2,3]))


// 2)
const wordsFunction = (words) => {

    return words.map((word) => {
        const firstLetter = word[0].toUpperCase();
        const othersLetters = word.slice(1).toLowerCase();

        return `${firstLetter}${othersLetters}`
    })
}

console.log(wordsFunction(['hellO', 'wOrLD']));


// 3)
const users = [
    {
        id: 1,
        name: 'Alex',
    },
    {
        id: 2,
        name: 'Tomara',
    },
    {
        id: 3,
        name: 'Max',
    },
]

const usersFunction = (users, ids) => {

    return users.filter(({id}) => {

        return !ids.includes(id)
    });
}

console.log(usersFunction(users, [2,3]));


// 4)
const isPalindrome = (word) => {

    const lowerCaseWord = word.toLowerCase();
    const wordToReverse = word.split("").reverse().join("").toLowerCase();

    return lowerCaseWord === wordToReverse;
}
// Привет Шалаш
console.log(isPalindrome('Шалаш i Шалаш'));


// 5)
const usersPeople = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
    },
    {
        id: 3,
        first_name: 'Maria',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Female',
        ip_address: '229.179.4.212',
    },
];

const splitByGender = (users) => {
    const WOMEN = 'Female';

    return users.reduce((gendersCollection, user) => {
        const isWomen = user.gender === WOMEN;
        const userToPush = {
            id: user.id,
            fullName: `${user.first_name} ${user.last_name}`,
            email: user.email,
            gender: user.gender,
            ip_address: user.ip_address,
        }

        if (isWomen) {
            gendersCollection.women.push(userToPush);
        } else {
            gendersCollection.men.push(userToPush);
        }

        return gendersCollection;


    }, { men: [], women: [] })
};


console.log(splitByGender(usersPeople))


// 6)
const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [ {id: 432534, time: 65876586 }]
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [ {id: 432534, time: 65876586 }]
    }
];

const releases = (newReleases) => {

    return newReleases.map(({id, title, boxart, uri, rating, bookmark}) => {

        return {
            id,
            title,
        }
    })
}

console.log(releases(newReleases));


// 7)
const videoIds = (newReleases) => {

    return newReleases.reduce((result, {id, rating}) => {
        if (rating[0] === 5.0) {
            result.push(id);
        }

        return result
    }, [])

}

console.log(videoIds(newReleases));


