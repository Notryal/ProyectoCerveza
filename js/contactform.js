function validar(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var error = document.getElementById("error").value;

    error.style.padding = "10px";

    var text;

    if(nombre.length < 5){
        text = "Por favor ingresa un nombre correcto";
        error.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Por favor ingresa un email correcto";
        error.innerHTML = text;
        return false;
    }
    
    if(message.length <= 20){
        text = "Tu mensaje es muy corto!";
        error.innerHTML = text;
        return false;
      }
    
    alert("Mensaje enviado! Muchisimas gracias!");
    return true;

}