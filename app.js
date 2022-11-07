/* Imports */
import { renderChick } from './render-utils.js';
/* Get DOM Elements */
const chickListEl = document.querySelector('.chicks');
const formEl = document.querySelector('form');
/* State */

const chicks = [
    { id: 1, name: 'Peep', hp: 1 },
    { id: 2, name: 'Harry', hp: 4 },
    { id: 3, name: 'Shellie', hp: 1 },
    { id: 4, name: 'Tabitha', hp: 2 },
];
let currentId = 5;
let farmerHP = 10;
let hatchedCount = 0;

/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    // - Make a new chick object with the user input
    const newChick = {
        id: currentId,
        name: data.get('chick-name'),
        hp: Math.ceil(Math.random() * 5),
    };

    currentId++;

    // Add newChick object to the array of chicks in state
    chicks.push(newChick);
    // be sure to call display function again!
    displayChicks();
});

function chickClickHandler(chickData) {
    // if chick HP is 0, exit click handler function
    if (chickData.hp <= 0) return;

    //give a 1/3 chance of farmer warming chick
    if (Math.random() < 0.33) {
        chickData.hp--;
        alert('You warmed ' + chickData.name);
    } else {
        alert('You tried to warm ' + chickData.name + ' but the heat lamp broke');
    }
    // give a 50% chance of chick rolling away
    // possibly decrement player HP
    if (Math.random() < 0.5) {
        farmerHP--;
        alert(chickData.name + ' rolled away from you! You chase after it!');
    } else {
        alert(chickData.name + ' tried to roll away but there was a pebble in the way');
    }

    // what happens when chickHP is 0
    if (chickData.hp === 0) {
        hatchedCount++;
    }

    // what happens when farmerHP is 0?
    if (farmerHP === 0) {
        farmerImgEl.classList.add('game-over');
        alert('GAME OVER');
    }
}
/* Display Functions */
function displayChicks() {
    chickListEl.textContent = '';

    for (let chick of chicks) {
        const chickEl = renderChick(chick);
        chickListEl.append(chickEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayChicks();
