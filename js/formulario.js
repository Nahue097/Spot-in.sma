const form=document.getElementById('form')
const usuario=document.getElementById('username')
const email = document.getElementById("email");
const password=document.getElementById('password')
const password2=document.getElementById('password2')


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkInputs();

});

function checkInputs(){
   const usuarioValue= usuario.value.trim();
   const emailValue = email.value.trim();
   const passwordValue= password.value.trim();
   const password2Value= password2.value.trim();
  
   if(usuarioValue===""){
    setErrorFor(usuario, 'Debe escribir nombre de usuario');
   } else{
    setSuccessFor(usuario);
   }

   if(emailValue===""){
      setErrorFor(email, 'Debe escribir un email valido');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email no valido');
    }else{
        setSuccessFor(email);
    }

    if(passwordValue===""){

    setErrorFor(password, 'Debe escribir una contraseña');

    } else{

    setSuccessFor(password);

    }

    if(password2Value===""){

    setErrorFor(password2, 'Debe repetir la contraseña');

    }else if(password2Value!==passwordValue){

    setErrorFor(password2, 'Las contraseñas no coinciden');

    }
    else{

    setSuccessFor(password2);

    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText=message;
}

function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
