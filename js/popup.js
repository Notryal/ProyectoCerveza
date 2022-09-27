var yourAge = prompt("Por favor ingresá tu edad: ")
if (yourAge < 18)
   alert("Usuarios menores a 18 años no pueden acceder a esta página");

if (yourAge >= 18)
    alert("Disfrutá!");
if (yourAge < 18)
location.href = ("../home.html");


/* var yourAge = prompt("Please enter your age: ");
if (yourAge < 19) {
   alert("Users under the age of 19 cannot access this page");
   location.href = ("../home.html");
}

if (yourAge >= 19) {
    function wishWell(amsg, callback){
        alert(amsg);
        if(typeof callback == "function") {
            callback();
        }
    }

    wishWell("Enjoy!", function(){
        location.href = ("../home.html");
    });
} */

// Name promt

/* function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Bienvenido de nuevo " + user);
    } else {
       user = prompt("Por favor ingresá tu nombre:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  } */


//Nuevo cookie de Edad

