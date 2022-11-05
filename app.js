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
let farmerHP = 8;

/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    //   - User has supplied a name and submitted the form
    const data = new FormData(formEl);

    //   - Make a new chick object with the user input
    const newChick = {
        // id: currentId,
        name: data.get('chick-name'),
        hp: Math.ceil(Math.random() * 5),
    };
    // currentId++;

    //   - Add that object to the array of chicks in state
    chicks.push(newChick);

    displayChicks();
});

function chickClickHandler(chickData) {
    if (chickData.hp <= 0) return;
    if (Math.random() < 0.33) {
        chickData.hp--;
        alert('You warmed ' + chickData.name);
    } else {
        alert('You tried to warm ' + chickData.name + ' but the heat lamp broke');
    }
    //  - possibly decrement player HP
    if (Math.random() < 0.5) {
        farmerHP--;
        alert(chickData.name + ' rolled away from you! You chase after it!');
    } else {
        alert(chickData.name + ' tried to roll away but there was a pebble in the way');
    }

    // if (chickData.hp === 0) {
    //     defeatedChicksCount++;
    // }

    if (farmerHP === 0) {
        farmerImgEl.classList.add('game-over');
        alert('GAME OVER');
    }
    //     - update the DOM with new chick, player, and defeated chick state.
    // farmerHPEl.textContent = farmerHP;
    // defeatedNumberEl.textContent = defeatedchicksCount;

    const hpEl = document.getElementById(`chick-hp-${chickData.id}`);
    hpEl.textContent = chickData.hp < 0 ? 0 : chickData.hp;

    const eggEl = document.getElementById(`chick-${chickData.id}`);
    eggEl.textContent = chickData.hp > 0 ? '🥚' : '🐣';
}

/* Display Functions */
function displayChicks() {
    chickListEl.textContent = '';

    //     - loop through the chicks
    for (let chick of chicks) {
        //     - render a new chick DOM element for each item
        const chickEl = renderChick(chick);
        // - append that element to the HTML

        // now that we have a chick element, we can make each chick clickable like so
        // this is a DYNAMIC EVENT LISTENER. we make a new event listener for every chick!
        // an event listener is a property just like anything else. just like text content, just like style. we add it to elements.
        chickEl.addEventListener('click', () => {
            chickClickHandler(chick);
        });

        chickListEl.append(chickEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayChicks();
