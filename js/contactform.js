function validar(){
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const error = document.getElementById("error");

    error.style.padding = "10px";
    var text;

    if(nombre.length == 0){
      text = "Ingresar un nombre";
      error.innerHTML = text;
      return false;
    }
    if(email.length < 6){
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