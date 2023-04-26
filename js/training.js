/* ------------------------------------ */
/* --- Exercice 1 --- */
const textGhost = document.getElementById("text-ghost");
const button = document.getElementById("btn");

function ghostTheText(event) {
    textGhost.classList.toggle("ghost-text")
}
button.addEventListener('click', ghostTheText);




console.log(textGhost);
/* ------------------------------------ */
/* --- Exercice 2 --- */
const scrollValue = document.getElementById("ex2-scroll-value");
function scrolling(event){
    scrollValue.innerText = window.scrollY;
}
window.addEventListener('scroll', scrolling)


/* ------------------------------------ */
/* --- Exercice 3 --- */
const listOfAnimals = document.querySelector('#ex3-animals');
const button2 = document.querySelector('#button2');

function moveTheAnimals(event) {
    listOfAnimals.appendChild(listOfAnimals.firstElementChild)
}
button2.addEventListener('click', moveTheAnimals)
/* ------------------------------------ */
/* --- Exercice 4 --- */
const buttonForColor = document.querySelector('#buttons')

function clickTheButton(event) {
    buttonForColor.classList.toggle("blue");
    buttonForColor.classList.toggle("red");
    buttonForColor.classList.toggle("green");
}
buttonForColor.addEventListener('click', clickTheButton)

/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
