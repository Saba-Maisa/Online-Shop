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
  var slides = document.getElementsByClassName("mySlides-fade");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display ="block";  
  dots[slideIndex-1].className += " active";
}





function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



function chat() {
  document.getElementById("mychat").classList.toggle("show");
}










var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}









var modal = document.getElementById('id02');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



  var modalmodal = document.getElementById('id03');


window.onclick = function(event) {
    if (event.target == modalmodal) {
        modalmodal.style.display = "none";
    }
}


function openNav() {
  document.getElementById("mySidenav").style.display = "block";
 
}

function closeNav() {
  document.getElementById("mySidenav").style.display= "none";
 
}




