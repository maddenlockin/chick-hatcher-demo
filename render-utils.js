export function renderChick(chickData) {
    const chickEl = document.createElement('div');
    const eggEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    chickEl.classList.add('chick');

    nameEl.textContent = chickData.name;
    hpEl.id = `chick-hp-${chickData.id}`;
    hpEl.textContent = chickData.hp < 0 ? 0 : chickData.hp;

    // use a weird "ternary" to set the face
    // if the chick lives, do a imp emoji, else do a fire emoji
    eggEl.id = `chick-${chickData.id}`;
    eggEl.textContent = chickData.hp > 0 ? '🥚' : '🐣';
    eggEl.ariaLabel = chickData.hp > 0 ? 'egg emoji' : 'hatched chick emoji';

    if (chickData.hp < 0) {
        chickEl.classList.add('hatched');
    }

    chickEl.append(nameEl, eggEl, hpEl);

    return chickEl;
}
