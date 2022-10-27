let nombresAgrupar:string[] = ["Manuel","Alejandro","Luis"];
let numerosAgrupar = [1,2,3,4,5,6,7,8,9,10];

let agrupar = ["Prueba",100, nombresAgrupar, numerosAgrupar];
console.log(agrupar);

let agrupar2 = ["Prueba",100, ...nombresAgrupar, ...numerosAgrupar];
console.log(agrupar2);



let libro={
    autor:"Oscar",
    titulo:"La perla perdida",
    fecha: new Date(2020,1,4)
}

let vehiculo ={
    color:"Negro",
    puerta:"A3",
    marca:"Toyota"
}

let agrupar3= {prueba:"Hola", ...libro, ...vehiculo};

console.log(agrupar3);