



document.getElementById('myfunction').onclick = function(){

  // const formi = document.getElementById('form');
  const errorName = document.getElementById('error-name');
  const  userName = document.getElementById('user-name');
  const errorLastName=document.getElementById('error-last-name');
  const userLastName = document.getElementById('user-last-name');
  const errorEmail = document.getElementById('error-email');
  const email = document.getElementById('email')

    if(userName.value.length === 0){
      errorName.style.display='block';
      errorName.style.color= 'red'
      userName.style.border = '1px solid red'
    }else{
      errorName.style.display='none';
      userName.style.border = '1px solid green'
    }
  
    
    if(userLastName.value.length === 0){
      errorLastName.style.display='block';
      errorLastName.style.color= 'red'
      userLastName.style.border = '1px solid red'
    }else{
      errorLastName.style.display='none';
      userLastName.style.border = '1px solid green'
    }
  
  
    if(email.value.length === 0){
      errorEmail.style.display='block';
    errorEmail.style.color= 'red'
      email.style.border = '1px solid red'
    }else{
      errorEmail.style.display='none';
      email.style.border = '1px solid green'
    }
  

  const formi = document.getElementById('form');
   const errorPassword = document.getElementById('error-password');
  const password = document.getElementById('password');
  const span = document.getElementById('span');
 const certificationPasswordText = document.getElementById('error-password2');
   const lastSpan = document.getElementById('lastSpan');
   const certificationPassword = document.getElementById('lastPassword');

  const errorPassword2 = document.getElementById('error-password2');


if(password.value.length == 0){
      errorPassword.style.display='block';
    errorPassword.style.color= 'red'
      password.style.border = '1px solid red'
    }else{
      errorPassword.style.display='none';
    
    }
  
    if(certificationPassword.value.length == 0){
       errorPassword2.style.display='block';
      errorPassword2.style.color= 'red'
     certificationPassword.style.border = '1px solid red'
      }else{
        errorPassword2.style.display='none';
    
      }

  formi.addEventListener('input', () => {
 if(password.value.length > 0){
   errorPassword.style.display = 'none'
   span.innerHTML = ' არანაკლებ 8 სიმბოლო'
   span.style.color = "#ffbb2a"
   password.style.border = "1px solid #ffbb2a"
 }

 if(password.value.length >= 8){
  span.innerHTML = ' პაროლი სწორია'
   span.style.color = "green"
   password.style.border = "1px solid green"
 }
 if(password.value.length == 0){

 span.style.display = "none"
 errorPassword.style.display = 'none'


 }else{
  span.style.display = "block"
 
 }



if(password.value.length === certificationPassword .value.length){

  lastSpan.innerHTML= "პაროლი სწორია "
  lastSpan.style.color = 'green'
  certificationPassword .style.border= "1px solid green"

}else{
  lastSpan.innerHTML= ""
  certificationPassword .style.border= "1px solid red"
 
}

 if(certificationPassword .value.length > 0){
  certificationPasswordText.style.display = 'none'
 }


  });



}

