document.getElementById("sea_ic").onclick = function(){myfunction()}
function myfunction(){
   document.getElementsById("searchingg").classList.toggle("show");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
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


const multipleItemCarousel = document.querySelector('#carouselExampleIndicators');
if(window.matchMedia("(min-width: 576px)").matches){
const carousel = new bootstrap.Carousel(multipleItemCarousel, {
  interval: false
})

var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();
var scrollPosition = 0;
$('.carousel-control-next').on('click', function(){
  if(scrollPosition < (carouselWidth - (cardWidth * 4))){
  console.log('next');
  scrollPosition = scrollPosition + cardWidth;
  $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
  }
});
$('.carousel-control-prev').on('click', function(){
  if(scrollPosition > 0){
  console.log('prev');
  scrollPosition = scrollPosition - cardWidth;
  $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
  }
});
}else{
  $(multipleItemCarousel).addClass('slide');
}
