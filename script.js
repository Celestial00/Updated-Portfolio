
// navbar

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{

    anchor.addEventListener("click", function(e){

        e.preventDefault();

     document.querySelector(this.getAttribute("href")).scrollIntoView({

        behavior : "smooth"

    })



    })

})

//animated counters






// testimonial slide bar 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

// form email sending 

subtn = document.getElementById("btnform");

subtn.onclick = () => { 


  let userName = document.getElementById("UserName");
  let email = document.getElementById("Email");
  let txt = document.getElementById("text");

 sendMail(userName, email);


}

function sendMail(userName , email1){

  


}

// 

var numbers = document.querySelectorAll(".nums");
timeinterval = 5000;



numbers.forEach(value =>{

  let startvalue = 0;
  let endvalue = parseInt(value.getAttribute("data-val"));

  let duration = Math.floor(timeinterval / endvalue) ;  

  let counter = setInterval(function () {

    startvalue += 1;
    value.textContent = startvalue;

    if(startvalue == endvalue){

      clearInterval(counter);

    }

  }, duration);




})

