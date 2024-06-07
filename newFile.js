const { addpopupbutton, popupbox, popupoverlay } = require("./script");

addpopupbutton.addEventListener("click", function() {
    popupbox.style.display = "block";
    popupoverlay.style.display = "block";

});