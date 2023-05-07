// Reset the status of tabs and content blocks
function resetTabs() {
    // Removes 'active' CSS class on active tab 
    document.querySelector("#tabs-links .active").classList.remove("active");

    // Removes 'active' CSS class on active content block
    document.querySelector("#tabs-contents .active").classList.remove("active");
}

// For each tab in the page
document.querySelectorAll("#tabs-links .tabs-link").forEach(tab => {

    // Adding an event listener that fires on click
    tab.addEventListener("click", function() {
        // Disabling previously active tab / content block.
        resetTabs();

        // Adding the 'active' class to the clicked tab.
        this.classList.add("active");
        
        // Adding the 'active' class to the associated block by using the data-tab attribute.
        document.getElementById(this.dataset.tab).classList.add("active");
    });
});