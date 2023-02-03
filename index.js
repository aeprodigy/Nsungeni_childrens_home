const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

//


//The line above deals with the hamburger.
humburger = document.querySelector(".humburger");
humburger.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};


//reveal of the website's contents
window.addEventListener('scroll', reveal);

function reveal(){

    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowheight- revealPoint){
            reveals[i].classList.add("active");

        }
        else{
            reveals[i].classList.remove("active");
        }
    }
}
//EH REVEAL ENDS HERE

//Navbar/Hamburger Toggler 
function toggleMobileMenu(menu){
  menu.classList.toggle('open');
}

//Popup
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
}

//PARTNERS AUTOPLAY SLIDES
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);

}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if(n > slides.length){slideIndex =1;}
  if(n<1){slideIndex = slides.length }

  for(i=0; i< slides.length; i++){slides[i].style.display = "none";}
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";

}