const TNA = 137.5;
//const TEA = 267.92;
//const CFTEA = 375.6;
const descuento_cumple = 10;
const monto_Solicitado_tope = 2000000;
//et interesPaquete;
let interesCuota;
let cumple = "NO";

// Preguntar si sos Estudiante de Coder
let tu_cumple = ingresar_cumple();

// Preguntar por tu Tipo de Paquete
//let tipoPaquete = ingresarTipoPaquete();
//interesPaquete = calcularInteresPaquete(tipoPaquete);

// Preguntar por el Monto del Préstamo
let monto_solicitado = ingresar_monto_solicitado();

// Preguntar por la Cantidad de Cuotas
let cuotas = solicitarCuotas();
interesCuota = calcularInteresCuota(cuotas);

// Cálculos de Interes
let valorCuota = calculoValorCuota();

// Salida
let salida = informarCalculoPrestamo();
alert(salida);
console.log(salida);
