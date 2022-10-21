function validar(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var error = document.getElementById("error");

    error.style.padding = "10px";
    var text;

    if(nombre.length < 5){
      text = "Ingresar un nombre";
      error.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor ingresar un mail valido";
      error.innerHTML = text;
      return false;
    }
    if(mensaje.length < 20){
      text = "Ingresar un mensaje mas largo";
      error.innerHTML = text;
      return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}