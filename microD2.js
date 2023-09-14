/* let pagoMes = 20000;
let consumoKWH =500;

if (consumoKWH > 300) {
pagoMes = pagoMes + (pagoMes * 20/100); 
console.log("su nuevo pago es de" + " " + pagoMes);
}
else {
    console.log("Se mantiene su pago actual de" + " " + pagoMes);
} */

let pagoMes = 20000;
let consumoKWH = 200;

let aumento = consumoKWH > 300 ? pagoMes + (pagoMes * 20/100) : pagoMes;

let mensaje = consumoKWH > 300 ?
"Debido a que su hogar tuvo un consumo de" + " " + consumoKWH + "KWH" +
"en base al ajuste (tarifario hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%)" +
"cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + aumento :
"Como su consumo mensual no supero los 300KWH su monto mensual de pago se mantiene el total a pagar es de $" + pagoMes;

console.log(mensaje);

