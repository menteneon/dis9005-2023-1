
console.log("123");

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML = "hola belleza " + nombre.value;
}


// para un mensaje cuantico
console.log ( "mensaje" ); //Mostrará el mensaje en forma de error, resaltado en rojo.



let day; 
// codigo extraido de  https://www.w3schools.com/js/tryit.asp?filename=tryjs_switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;


// mouseX and mouseY

strokeWeight(3);
stroke(57, 0, 214);
fill(0, 210, 247);


draw = function() {
    
    
    background(255, 255, 255);
    
    ellipse(mouseY, mouseX, 30, 30);
    
};