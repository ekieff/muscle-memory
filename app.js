var nuts = ['peanut', 'cashew', 'almond'];
console.log(nuts);

var statement = 'I like to play boardgames';
console.log(statement);

var relationship = {
    partner: 'felipe',
    time: 5,
    vacations: ['Paris', 'Spain'],
    areTheBest: true
};
console.log(relationship);

let doesThisWork = true;
console.log(doesThisWork);

var numberOfDogs = 2;
console.log(numberOfDogs);

function food(object){
    console.log(object[1]);
}

// function dtr(array){
//     array.pop();
// }
// dtr(relationship);

function moreDogs(element){
    return element + 1
}
console.log(moreDogs);

function returnDog(callback, num){
    let result = callback - num;
    console.log(result);
}
returnDog(moreDogs, returnDog);


//DOM
const sectionOne = document.getElementById('section-one');
console.log(sectionOne);
const sectionTwo = document.getElementById('section-two');
console.log(sectionTwo);
const sectionThree = document.querySelector('#section-three');
console.log(sectionThree);
const sectionFour = document.querySelector('#section-four');
console.log(sectionFour);
const sectionFive = document.querySelector('#section-five');
console.log(sectionFive);

sectionOne.textContent = 'Felipe';
sectionTwo.textContent = 'Elaine';
sectionThree.textContent = 'Pierre';
sectionFour.textContent = 'Mia';
sectionFive.textContent = 'tv';

const paraOne = document.querySelector('.paragraph-one');
console.log(paraOne);

paraOne.textContent = 'Lerner';

const paraTwo = document.querySelector('.paragraph-two');
console.log(paraTwo);
paraTwo.textContent = 'Lerner';

const paraThree = document.querySelector('.paragraph-three');
console.log(paraThree);
paraThree.textContent = 'Lerner';

const paraFour = document.querySelector('.paragrah-four');
console.log(paraFour);
paraFour.textContent = 'Kieffer';

const paraFive = document.querySelector('.paragraph-five');
console.log(paraFive);
paraFive.textContent = 'Samsung';
