var valor1 = 120;
var valor1 = 23;
let cadena1 = "Hola";
// let cadena1 = "Hola" NO SE PUEDE DECLARAR UNA MISMA VARIABLE DENTRO DEL MISMO
//                      BLOQUE DE CODIGO.
// NO SE PUEDE USAR LET FUERA DEL MISMO BLOQUE DE CODIGO, EN CASOS DE OCUPARSE 
// FUERA DEL BLOQUE UTILIZAR VAR
// for (let index = 0; index <10; index++) {
//     const element = index;
//     console.log(element);
// }
// console.log(index);
for (var index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
console.log(index);
