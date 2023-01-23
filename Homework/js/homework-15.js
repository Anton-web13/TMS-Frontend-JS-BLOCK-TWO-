// 2)
const setHeader = () => {
    const header = document.createElement("div");
    const div = document.createElement("div");
    const p = document.createElement('p');
    const input = document.createElement('input');
    const reset = document.createElement('button');

    div.classList.add('header');
    p.classList.add('p');
    input.classList.add('inputUsers');
    reset.classList.add('deleteUsers');

    p.textContent = "The number of users:";
    reset.textContent = "Reset";

    div.append(p);
    div.append(input);
    div.append(reset);
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


const addElement = () => {
    const mainSection = document.querySelector(".section")

    const div = document.createElement("div");
    const inputOfNAme = document.createElement('input');
    const inputOfNumber = document.createElement('input');
    const p = document.createElement('p');

    inputOfNAme.classList.add('inputSettings');
    inputOfNAme.placeholder = "Name:";
    inputOfNumber.classList.add('inputSettings');
    inputOfNumber.placeholder = "The value of number:";

    p.classList.add('p');
    div.classList.add('user');

    p.textContent = "The player one:";

    div.append(p);
    div.append(inputOfNAme);
    div.append(inputOfNumber);

    mainSection.append(div)

    // setMainSection(div);
};


// const setMainSection = (div) => {
//     const section = document.createElement("div");
//
//     section.classList.add('section');
//
//     section.append(div);
//
//     document.body.append(section);
// };
//
// // setMainSection();


const cloneOfUsers = (numberOfUsers) => {
    console.log(numberOfUsers);

    for (let i = 0; i < numberOfUsers; i++) {
        setMainSection();
        addElement();
    }
};

const getNumberOfUsers = () => {
    numbersOfUsers.addEventListener("change", () => {
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
    const clickButton = document.querySelector('.deleteUsers');

    clickButton.addEventListener("click", (even) => {
        if (even.target === clickButton) {
            remove();
            numbersOfUsers.value = "";
        }

    })

};

removeOfUsers();










// const level = () => {

//     for (let i = 1; i <= 1; i++) {
//         let numberOfLevel = i;
//         let counter;

//         if (i === 1) {
//             counter = 3;
//         } else if (i === 2) {
//             counter = 2;
//         } else if (i === 3) {
//             counter = 1;
//         }

//         alert(`You are at ${numberOfLevel} level and you have just ${counter} attempts`);

//         const randomFunction = () => {
//             const random = Math.floor(Math.random() * 100);

//             return random;
//         };

//         const random = randomFunction();


//         const myFunction = (randomNumber) => {

//             console.log(`randomNumber: ${randomNumber}`);

//             console.log(counter);
//             const userNumber = Number(prompt('What number is given?'));

//             console.log(`userNumber: ${userNumber}`);

//             if (userNumber === randomNumber) {
//                 alert("Is found");
//             } else {

//                 counter--

//                 alert(`Not found and you have just ${counter} attempts`);

//                 if (userNumber > randomNumber && counter >= 1) {
//                     alert("The number must be less");
//                 } else if (userNumber < randomNumber && counter >= 1) {
//                     alert("The number must be greater");
//                 } else if (counter === 0) {
//                     alert("The time is out");
//                     return;
//                 }

//                 myFunction(random);
//             }

//         };

//         myFunction(random);
//     }
// };

// level();
