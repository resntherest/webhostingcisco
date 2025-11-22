// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the image by its id
    var spinImage = document.getElementById('spinImage');

    // Add a click event listener to the image
    spinImage.addEventListener('click', function () {
        // Toggle a class to initiate or stop the spin animation
        spinImage.classList.toggle('spin-animation');
    });
});


