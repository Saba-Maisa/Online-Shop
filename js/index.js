function headerIcon(){
  const container = document.getElementById("registration");
    if(container.style.display ==='block'){
      container.style.display ='none'
    }else{
      container.style.display ='block'
    }
  }


setTimeout(() => {
  var text = document.getElementById('application');
  text.style.display = 'block';
   
 }, 4000);
 
 function times(){
   document.getElementById('application').style.display='none';
 }
 
 setTimeout(() => {

  const speed= document.getElementById('write');
  const text = 'მოგესალმებით, გისურვებთ მშვიდობიან ქვეყანაში ცხოვრებას';
  let index=0;
   const write=() =>{
     speed.innerHTML=text.slice(0,index);
     index++;
     if(index>text.length){
     
     }
     setTimeout(write,100);
   }
  write();

  
  }, 4800);
  

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function chat() {
  document.getElementById("mychat").classList.toggle("show");
}


function modal(){
  document.getElementById('modal').style.display='block';

}

function modal2() {
  document.getElementById('modal').style.display= "none"
}


function openNav() {
  document.getElementById("mymenu").style.display = "block";
 
}

function closeNav() {
  document.getElementById("mymenu").style.display= "none";
 
}


 
document.addEventListener('scroll', function (){
  var scrol = scrollY;
  if (scrol > 300 ){
        document.getElementById('top').style.display='block'
  }else{
    document.getElementById('top').style.display='none'
  } 
});
function topp(){
  window.scrollTo({
top:0,
left:0,
behavior:"smooth"
  }
  );
}









  

