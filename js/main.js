// JS scripts placed here
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

// select images by class name
var img = document.getElementsByClassName('portfolio-image');
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");

// show modal function
var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// bind click event to each img
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}