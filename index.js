




setTimeout(() => {
  var ukraina= document.getElementById('ukraina');
  ukraina.style.display = 'block';
   
 }, 4000);
 
 function times(){
   document.getElementById('ukraina').style.display='none';
 }





let cifri = 1

function plus(){
  cifri ++
  maisa.textContent=cifri 
}

function minus(){
  if(cifri > 1)
  cifri --
  maisa.textContent=cifri 
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


  
document.addEventListener('scroll', function (){
  var scrol = scrollY;
  console.log(scrol);

  if (scrol > 300 || scrol > 300  ){
        document.getElementById('top').style.display='block'
  }else{
    document.getElementById('top').style.display='none'
  }
  
})
function topp(){
  window.scrollTo(0,0);
  window.scroll(options);
}

