/* Declare and initialize global variables */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) {
    // Loop through the three range inputs and for each one, add an onchange event listener
    sliders[i].onchange = function () {
        // If an input range slider is moved, grab its id attribute value
        var whichSlider = this.getAttribute("id");
        // Also, grab the numerical value that it is set to
        var sliderValue = this.value;
        // Declare a new variable to hold the new RGB value by calling a function that updates the global rgb variable
        var newRgb = changeRgb(whichSlider, sliderValue);
        // Call a function to build a new CSS background-color property
        var newCSS = writeCSS(newRgb);
        // Directly change the background-color of the page using the new CSS rgb value
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions */

// Function to update RGB values based on the slider being adjusted
function changeRgb(channel, value) {
    // Update the appropriate global rgb array element
    switch (channel) {
        case "red":
            rgb[0] = value;
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    // Return the updated rgb array back to the event handler
    return rgb;
}

// Function to build a new CSS background-color property
function writeCSS(newRgb) {
    // Declare a new local variable to contain the new string for the CSS property
    var newColor = 'rgb(';
    
    // Initialize an index variable
    var i = 0;
    
    // Creating a while loop that iterates through the array passed into this function
    while (i < newRgb.length) {
        // Adding red, green, and blue values to the string, each followed by a comma
        newColor += newRgb[i];
        
        // Check if it's not the last element of the array, then add a comma
        if (i < newRgb.length - 1) {
            newColor += ',';
        }
        
        // Increment the index
        i++;
    }
    
    // Finish off the string by adding the closing ')'
    newColor += ')';
    
    // Return the string back to the event handler
    return newColor;
}

// Enjoy the application in your browser!

// This page inspired by https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
