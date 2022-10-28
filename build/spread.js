let nombresAgrupar = ["Manuel", "Alejandro", "Luis"];
let numerosAgrupar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let agrupar = ["Prueba", 100, nombresAgrupar, numerosAgrupar];
console.log(agrupar);
let agrupar2 = ["Prueba", 100, ...nombresAgrupar, ...numerosAgrupar];
console.log(agrupar2);
let librou = {
    autor: "Oscar",
    titulo: "La perla perdida",
    fecha: new Date(2020, 1, 4)
};
let vehiculo = {
    color: "Negro",
    puerta: "A3",
    marca: "Toyota"
};
let agrupar3 = Object.assign(Object.assign({ prueba: "Hola" }, librou), vehiculo);
console.log(agrupar3);
