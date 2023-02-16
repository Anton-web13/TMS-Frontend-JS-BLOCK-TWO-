// 2)
alert("Welcome to game!");

const getRandomNumber = () => {
    const random = Math.floor(Math.random() * 100);

    return random;
};
const random = getRandomNumber();

const setHeader = () => {
    const header = document.createElement("div");
    const div = document.createElement("div");
    const p = document.createElement('p');
    const input = document.createElement('input');
    const reset = document.createElement('button');
    const get = document.createElement('button');

    div.classList.add('header');
    p.classList.add('p');
    input.classList.add('inputUsers');
    reset.classList.add('resetUsers');
    get.classList.add('resetUsers','getValues');

    p.textContent = "The number of users:";
    reset.textContent = "Reset";
    get.textContent = "Get";

    div.append(p);
    div.append(input);
    div.append(reset);
    div.append(get);
    header.append(div);

    document.body.append(header);
};
setHeader();

const numbersOfUsers = document.querySelector('.inputUsers');

const setMainSection = () => {
    const section = document.createElement("div");
    section.classList.add('section');
    document.body.append(section);
};
setMainSection();


const addElement = (numberOfUser) => {
    const mainSection = document.querySelector(".section")

    const div = document.createElement("div");
    const inputOfNAme = document.createElement('input');
    const inputOfNumber = document.createElement('input');
    const p = document.createElement('p');

    inputOfNAme.classList.add('inputSettings', 'name');
    inputOfNAme.placeholder = "Name:";
    inputOfNumber.classList.add('inputSettings', 'number');
    inputOfNumber.placeholder = "The value of number:";

    p.classList.add('p');
    div.classList.add('user', `user_${numberOfUser}`);

    p.textContent = `The player ${numberOfUser}:`;

    div.append(p);
    div.append(inputOfNAme);
    div.append(inputOfNumber);

    mainSection.append(div);
};

const cloneOfUsers = (numberOfUsers) => {
    for (let i = 1; i <= numberOfUsers; i++) {
        addElement(i);

    }
};

const getNumberOfUsers = () => {
    numbersOfUsers.addEventListener("change", () => {
        remove();
        cloneOfUsers(numbersOfUsers.value);
    })
};
getNumberOfUsers();

const remove = () => {
    document.querySelectorAll('.user').forEach(el => {
        el.remove();
    })
};

const removeOfUsers = () => {
    const clickButton = document.querySelector('.resetUsers');

    clickButton.addEventListener("click", (even) => {
        if (even.target === clickButton) {
            remove();
            numbersOfUsers.value = "";
        }

    })

};
removeOfUsers();

const getResult = () => {
    const result = document.querySelector(".getValues");

    result.addEventListener("click", (item) => {
        const numbersNamesValues = [];
        const objectArray = [];

        Array.from(document.querySelectorAll(".number, .name")).forEach(value => {
            numbersNamesValues.push(value.value);
        });


        for(let i = 0; i < numbersNamesValues.length - 1; i+=2){
            objectArray.push({"name": numbersNamesValues[i], "value": numbersNamesValues[i+1]})
        }

        for (const key of objectArray) {
            if (random === Number(key.value)) {
                alert(`The winner is ${key.name}`)
            } else if (random > Number(key.value)) {
                alert("The number must be greater");
            } else if (random < Number(key.value)) {
                alert("The number must be less");
            }
        }
    });
};

getResult();

const button = document.querySelector('.getValues');

function count() {
    let counter = 0;
    return function() {
        return counter+=1;
    };
}



// const level = () => {
//
//     for (let i = 1; i <= 1; i++) {
//         let numberOfLevel = i;
//         let counter;
//
//         if (i === 1) {
//             counter = 3;
//         } else if (i === 2) {
//             counter = 2;
//         } else if (i === 3) {
//             counter = 1;
//         }
//
//         alert(`You are at ${numberOfLevel} level and you have just ${counter} attempts`);
//
//         const randomFunction = () => {
//             const random = Math.floor(Math.random() * 100);
//
//             return random;
//         };
//
//         const random = randomFunction();
//
//
//         const myFunction = (randomNumber) => {
//
//             console.log(`randomNumber: ${randomNumber}`);
//
//             console.log(counter);
//             const userNumber = Number(prompt('What number is given?'));
//
//             console.log(`userNumber: ${userNumber}`);
//
//             if (userNumber === randomNumber) {
//                 alert("Is found");
//             } else {
//
//                 counter--
//
//                 alert(`Not found and you have just ${counter} attempts`);
//
//                 if (userNumber > randomNumber && counter >= 1) {
//                     alert("The number must be less");
//                 } else if (userNumber < randomNumber && counter >= 1) {
//                     alert("The number must be greater");
//                 } else if (counter === 0) {
//                     alert("The time is out");
//                     return;
//                 }
//
//                 myFunction(random);
//             }
//
//         };
//
//         myFunction(random);
//     }
// };
//
// level();
