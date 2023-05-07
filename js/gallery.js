// Select all thumbnails
const pics = document.querySelectorAll("#gallery-thumbs .thumbs-img");
// Retrieve the main picture
const frame = document.getElementById("gallery-picture");


// Foreach picture
pics.forEach(function(pic) {

    // Adding an event listener on the picture that fires when hovering
    pic.addEventListener("mouseover", function(event) {
        // Apply the thumbnail picture URL to the main image.
        frame.setAttribute("src", this.getAttribute("src"));
        // frame.src = this.src;

        // Displaying the title associated to the current picture.
        document.getElementById("gallery-title").textContent = this.dataset.title;

        // Displaying the descitpion associated to the current picture.
        document.getElementById("gallery-description").textContent = this.dataset.description;
    })
});