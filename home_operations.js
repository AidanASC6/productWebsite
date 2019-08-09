let slideIndex = 0;
// var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  console.log(n);
  
  showSlides(slideIndex = n);// this is weird
}

showSlides();

// modal references
let modalStuff = document.getElementById("modalStuff");
let modalButton = document.getElementById("modalButton");
let modalExit = document.getElementById("modalExit");
// onclick functions for the contact window and closing out of it
modalButton.onclick = function(){
  modalStuff.style.display = "block";
}
modalExit.onclick = function(){
  modalStuff.style.display = "none";
}
function showSlides(n) {
  
    var i;
    // get elements
    let slides = document.getElementsByClassName("fade");
    var dots = document.getElementsByClassName("dot");

//this logics that the previous slides disappear
    if (n > slides.length) {slideIndex = 0} 
  
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    

    
    slides[slideIndex-1].style.display = "block"; 
    
    dots[slideIndex-1].className += " active";
}


//automatic slideshow
// var slideIndex = 0;
rotateSlides();

function rotateSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // makes the images repeat after it reaches the max length of the slides array
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  // 
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(rotateSlides, 3000); // Change image every 3 seconds
}