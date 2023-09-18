/* alert("Bienvenido a nuestro e commerce");

let inicio = prompt("desea iniciar una compra?");

while (inicio != "si" && inicio != "no") {
  alert("Debes ingresar una respuesta valida!");
  inicio = prompt("desea iniciar una compra?");
}

if (inicio == "si") {
  alert("sumemos productos al carrito");

  let producto = prompt(
    "ingrese el producto a agregar: \n1- remera\n2- buzo\n3- jean\n4- zapatillas\n5- short"
  );

  while (inicio === "si") {
    producto = prompt(
      "ingrese el producto a agregar: \n1- remera\n2- buzo\n3- jean\n4- zapatillas\n5- short\n6 salir"
    );
    switch (producto) {
      case "remera":
        let prod_agregados = producto + 1;
        break;
      case "buzo":
        alert("agrego buzo al carrito");
        break;
      case "jean":
        alert("agrego jean al carrito");
        break;
      case "zapatillas":
        alert("agrego zapatillas al carrito");
        break;
      case "short":
        alert("agrego short al carrito");
        break;
      case "salir":
        alert("finalizando compra");
        break;
      default:
        alert("no se encontro producto");
        break;
    }
  }
} else if (inicio == "no") {
  alert("te esperamos la proxima!");
}
 */


//PRACTICA DE CLASE
/* let peso= parseFloat(prompt("ingrese su peso:"));
let altura= parseFloat(prompt("ingrese su altura:"));
let imc= peso / (altura*altura) ;

let resultado = "imc " + imc.toFixed(2) + "%";

if (imc < 18.5) {
  alert("tu peso es inferior al normal");
} else if (imc > 18.5 && imc < 24.9) {
  alert("su imc es normal");
} else if (imc > 25 && imc < 29.9) {
  alert("su imc es superior al normal");
} else {
  alert("tiene obesidad");
};
 */

