"use strict";
// El ? despues del valor del parametro hace que sea opcional este valor
function ObtenerValores(objeto) {
    let { valor1, valor2 } = objeto;
    console.log(valor1);
    console.log(valor2);
}
ObtenerValores({ valor1: "camisa",
    valor2: 23 });
function saludo(mensaje, mensaje2) {
    console.log(mensaje);
}
saludo("Hola soy un mensaje");
