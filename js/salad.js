
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];


// -----------------------
// FUNCTIONS
// -----------------------

// Update the ingredient counter
function countIngredients() {
    document.getElementById("salad-count").innerText = saladFinal.childElementCount;
}


// Add to the salad an ingredient that has been clicked
function addSalad() {
    // If there is 5 or more ingredients has been picked, do nothing
    if (saladFinal.childElementCount >= 5) return;

    // Move the LI (button parent) to the UL salad
    saladFinal.append(this.parentElement);

    // Update the ingredient counter
    countIngredients();

    // Disabling event listener to add the ingredient
    this.removeEventListener("click", addSalad);

    // Enabling event listener to remove the ingredient on click
    this.addEventListener("click", removeSalad);
}


// Remove from the salad an ingredient that has been clicked
function removeSalad(){
    // Move the LI (button parent) to the first UL
    saladIng.append(this.parentElement);

    // Update the ingredient counter
    countIngredients();
    
    // Enabling event listener to add the ingredient
    this.addEventListener("click", addSalad);

    // Disabling event listener to remove the ingredient on click
    this.removeEventListener("click", removeSalad);
}


/**
 * Create and get an LI>BUTTON with the ingredient given
 * 
 * @param {string} ingredient The text of the ingredient to display
 * @return {Element} The created LI element
 */ 
function createNewLiIngredient(ingredient) {
    // Create the LI
    const li = document.createElement("li");
    // Create the BUTTON
    const button = document.createElement("button");
    // Add 'button' class to the BUTTON
    button.classList.add("button");
    // Append the BUTTON into the LI
    li.appendChild(button);
    // Add given text to the BUTTON
    button.innerText = ingredient;
    // Enable an event listener to add the ingredient to the salad on click
    button.addEventListener("click", addSalad);

    // Returns the created LI
    return li;
}


// -----------------------
// SCRIPT
// -----------------------

// Select the final salad UL
const saladFinal = document.getElementById("salad-final");

// Select the ingredient list UL
const saladIng = document.getElementById("salad-ingredients")

// For each ingredient ...
ingredients.forEach(function(ingredient) {

    // Create a new LI element ...
    const li = createNewLiIngredient(ingredient);

    // and add it to the ingredient list
    document.getElementById("salad-ingredients").appendChild(li);
});
