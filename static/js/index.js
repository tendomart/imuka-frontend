let showBox = ()=>{
    const x = document.getElementById('popup_container');
    x.style.display="block";
}
let hideBox = ()=>{
    let shut = document.getElementById("popup_container");
    shut.addEventListener("click",()=>{
        x = shut.style.display="none";
    })

}

//image slider rules
var slideIndex = 1;
//invoking the showSlides function
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// show slides function to make the images slide
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].classList.add("active");
}
class human{
constructor(name, age){
this.name = name;
this.age= age;

}
talk(){

}

}
