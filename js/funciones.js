//ESTE ARCHIVO SE USO COMO BORRADOR DE PRACTICA NO TENER EN CUENTA

//////////////////
//alert("Bienvenido a nuestro e commerce");

/* let comenzar = "si";

prompt("desea realizar una compra?");
if (comenzar != "si") {
  alert("te esperamos la proxima!");
} else {
  alert("comencemos!");
};  */

///////////////
/* let inicio = prompt("desea iniciar una compra?")

while (inicio != "si" && inicio != "no") {
  alert("Debes ingresar una respuesta valida!");
  inicio = prompt("desea iniciar una compra?");
}

if(inicio == "si"){
    alert("sumemos productos al carrito")
} else if(inicio == "no"){
  alert("te esperamos la proxima!");
}

let producto = parseInt(prompt("ingrese un numero de productos")); 
let total = producto + buzo ;


for(let buzo = 1; buzo < 8; buzo++){
    if (producto == 8){
    }
    continue;
}


alert(`tienes " ${producto} "en tu carro`); */

/////////
/*let prod1 = "harina"
let prod2 = "fideos";
let prod3 = "carne";
let prod4 = "pollo";
let prod5 = "queso";

if (producto == "harina" || producto == "fideos" || producto == "carne" || producto == "pollo" || producto == "queso" ){
    switch (producto){
        case "harina":
            precio = 150;
        break;
        case "fideos":
            precio = 50;
        break;
        case "carne":
            precio = 1500;
        break;
        case "pollo":
            precio = 2500;
        break;
        case "queso":
            precio = 1200;
        break;
    }
    total.push({producto,precio});
    console.log(total)
   
} */

////////////////////

/* let inicio = prompt("desea iniciar una compra?");

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
    producto = prompt("ingrese el producto a agregar: \n1- remera\n2- buzo\n3- jean\n4- zapatillas\n5- short\n6 salir")
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