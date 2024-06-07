document.addEventListener("DOMContentLoaded", function() {
    var popupoverlay = document.querySelector(".popup-overlay");
    var popupbox = document.querySelector(".popup-box");
    var addpopupbutton = document.querySelector(".add-button");
    addpopupbutton.addEventListener("click", function() {
        popupbox.style.display = "block";
        popupoverlay.style.display = "block";
    });

    var cancelbutton = document.querySelector(".cancelbook");
    cancelbutton.addEventListener("click", function(event) {
        event.preventDefault();
        popupbox.style.display = "none";
        popupoverlay.style.display = "none";
    });

    var container = document.querySelector(".container");
    var addbook = document.querySelector(".addbook");
    var booktitle = document.querySelector(".booktitle-input");
    var bookauthor = document.querySelector(".bookauthor-input");
    var description = document.querySelector(".bookdescription-input");

    addbook.addEventListener("click", function(event) {
        event.preventDefault();
        var div = document.createElement("div");
        div.setAttribute("class", "book-container");
        div.innerHTML = `<h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${description.value}</p>
        <button onclick="deletebook(this)">Delete</button>`;
        container.append(div);
        popupbox.style.display = "none";
        popupoverlay.style.display = "none";
    });
});

function deletebook(button) {
    button.parentElement.remove();
}