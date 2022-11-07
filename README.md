# Goblin Fighter Planning

### HTML Elements (on page load)

-   input for adding new goblins
-   button for adding new goblins
-   span for tracking defeated goblins
-   span for tracking player HP
-   `<div>` for our goblin list

### State

-   array of goblins (id, name, health points)
-   number of defeated goblins (derived from array of goblins OR just store as variable)
-   player hp

Goblin objects will look like this:
{id: 1, name: 'Professor Goblin', hp: 4}

### Functions

-   `displayGoblins` -- clear out the list, and render a goblin element for each goblin in your list of goblins
-   `renderGoblin(goblin)` - create a goblin element for specific goblin object
-   `goblinClickHandler` - takes care of the game logic when goblins are clicked

### Events

-   form submit
-   chick click (click handler function)
