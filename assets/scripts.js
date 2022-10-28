/**
 * Screen Size View
 * Google Chrome Extention
 * @type {Element}
 */

// declare variable
let btn = document.querySelector("#btn");
let reset = document.querySelector('#reset');



// on click to showing screen size
btn.addEventListener("click", (event) => {
    let text = "<ul class='list-unstyled'><li>Total Width x Height:    <b>" + screen.width + "</b>x<b>" + screen.height + "</b></li><br>" +
        "<li>Available Width x Height:    <b>" + screen.availWidth + "</b>x<b>" + screen.availHeight + "</b> </li><br> " +
        "<li>Color depth: " + screen.colorDepth + "</li><br>" +
        "<li>Color resolution: " + screen.pixelDepth + "</li></ul>";
    document.getElementById("calculation").innerHTML= text;

});

// reset button click to reset previous data
reset.addEventListener("click", (event) => {
    document.getElementById("calculation").innerHTML = null;

});

