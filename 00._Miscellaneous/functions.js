'use strict';

const random_number = random(3,4); // hoisting (lift up)
console.log(random_number);

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) - min);
}

const anonymousFunction = function(min,max){
    return Math.floor(Math.random() * (max - min + 1) - min);
};


const arrowFunction = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

const arrowFunction2 = (min,max) => Math.floor(Math.random() * (max - min + 1) - min);


function genericActionPerfomer(genericAction,genericName){
    return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting.`;
const walk = (name) => `${name} is walking.`;
const read = (name) => `${name} is reading.`;


const getSubtractName = genericActionPerfomer(subtract,"Tobias");
const getWalkingName = genericActionPerfomer(walk,"Nicolas");
const getReadingName = genericActionPerfomer(read,"Andrea");

console.log(getSubtractName);
console.log(getWalkingName);

