function ingresar_cumple() {
  let tu_cumple = prompt("cumplis años este mes?\n1- Sí\n2- No");

  while (tu_cumple != 1 && tu_cumple != 2) {
    alert("Solo es posible indicar 1- Si o 2- NO");
    tu_cumple = prompt("cumplis años este mes?\n1- Sí\n2- No");
  }
  console.log("es tu cumple?: " + tu_cumple);

  return tu_cumple;
}

/* function ingresarTipoPaquete() {
  let tipoPaquete = prompt(
    "Ingrese el Tipo de Paquete: Identite/Gold/Otro:"
  ).toUpperCase();

  return tipoPaquete;
} */

/* function calcularInteresPaquete(tipoPaquete) {
  if (tipoPaquete == "IDENTITE") {
    interesPaquete = 30;
  } else if (tipoPaquete == "GOLD") {
    interesPaquete = 40;
  } else {
    interesPaquete = 50;
  }

  return interesPaquete;
} */

function ingresar_monto_solicitado() {
  let monto_solicitado = parseFloat(
    prompt(
      "Ingrese el Monto del Préstamo: (Máx: $" + ingresar_monto_solicitado + ")"
    )
  );

  while (monto_solicitado > monto_Solicitado_tope) {
    alert(
      "Superaste el Monto Máximo permitido! Máx: $" + monto_Solicitado_tope
    );
    monto_solicitado = parseFloat(
      prompt(
        "Ingrese el Monto del Préstamo: (Máx: $" + monto_Solicitado_tope + ")"
      )
    );
  }

  return monto_solicitado;
}

/* function solicitarCuotas() {
  let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48")); //17

  while (cuotas != 12 && cuotas != 24 && cuotas != 36 && cuotas != 48) {
    alert("Solo es posible solicitar en 12/24/36/48 Cuotas!");
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48"));
  }

  return cuotas;
}

function calcularInteresCuota(cuotas) {
  if (cuotas == 12) {
    interesCuota = 80;
  } else if (cuotas == 24) {
    interesCuota = 160;
  } else if (cuotas == 36) {
    interesCuota = 240;
  } else {
    interesCuota = 320;
  }

  return interesCuota;
}

function calculoValorCuota() {
  let cuotaPura = montoSolicitado / cuotas; //83.333
  let interesPaqueteCuota = interesPaquete / cuotas;
  let interesCuotaCuota = interesCuota / cuotas;
  let tnaCuota = TNA / cuotas;
  let teaCuota = TEA / cuotas;
  let cfteaCuota = CFTEA / cuotas;

  let cuotaPuraInteresPaqueteCuota = (cuotaPura * interesPaqueteCuota) / 100;
  let cuotaPuraInteresCuotaCuota = (cuotaPura * interesCuotaCuota) / 100;
  let cuotaPuraTnaCuota = (cuotaPura * tnaCuota) / 100;
  let cuotaPuraTeaCuota = (cuotaPura * teaCuota) / 100;
  let cuotaPuraCfteaCuota = (cuotaPura * cfteaCuota) / 100;

  let valorCuota =
    cuotaPura +
    cuotaPuraInteresPaqueteCuota +
    cuotaPuraInteresCuotaCuota +
    cuotaPuraTnaCuota +
    cuotaPuraTeaCuota +
    cuotaPuraCfteaCuota;
  console.log("Valor de Cuota: $" + valorCuota);

  return valorCuota;
}

function informarCalculoPrestamo() {
  // Verificar si soy Estudiante de Coder, realizo descuento
  if (sosEstudiante == 1) {
    valorCuota = valorCuota - (valorCuota * descuentoEstudiante) / 100;
    console.log("Descuento aplicado: $" + valorCuota);
    estudiante = "SÍ";
  }

  let salida = "SIMULADOR DE PRÉSTAMO:\n\n";
  salida += "Sos Estudiante: " + estudiante + "\n";
  salida += "Tipo de Paquete: " + tipoPaquete + "\n";
  salida += "Monto del Préstamo: $" + montoSolicitado + "\n";
  salida += "Cuotas: " + cuotas + "\n\n";
  salida += "Total a Pagar:\n";
  salida += cuotas + " cuotas de $" + valorCuota.toFixed(2);

  return salida;
}
 */