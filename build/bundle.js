// let cualquierValor;
// cualquierValor = "Hola";
// console.log(cualquierValor.length);
// cualquierValor = false;
// console.log(cualquierValor);
// cualquierValor = 21;
// console.log(cualquierValor);
// console.log("Hola mundo");
// let lista:string[] = ["Pepe","Pedro","Hola"];
// for (const iterator of lista) {
//     console.log(iterator);
// }
// let num = [1,3,2,4,2,""];
// num.push("");
// let nombres:string[] = ["Luis","Pedro","Juan"];
// console.log(nombres[1]);
// let frutas:string[] = ["Manzana","Uva","Pera"];
// let [,,item3] = frutas;
// console.log(item3);
// let estadoCivil:boolean =false;
// if (estadoCivil) {
//     console.log("Esta casado");
// }else{
//     console.log("Esta soltero");
// }
// estadoCivil=obtenerEstadoCivil();
// function obtenerEstadoCivil() {
//     return true;
// }
//  abstract class Animal{
//      abstract Ruido():void;
// }
// class Gato extends Animal{
//     Ruido(): void {
//         console.log("Miau");
//     }
// }
// class Perro extends Animal{
//     Ruido(): void {
//         console.log("Wao");
//     }
// }
// let gato = new Gato()
// gato.Ruido();
// let perro = new Perro()
// perro.Ruido();
// class Persona{
//     nombre:string;
//     apellido:string;
//     edad:number;
//     constructor(nombre: string, apellido: string, edad: number) 
//     {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }
// }
// let personaa = new Persona("Manuel","Hernandez",21);
// const estado:boolean = false;
// // estado = true; NO SE PUEDE CAMBIAR UNA CONST
// if (true) {
//     const estado = true;
// }else{
// }
// for (const iterator of [1,2,3,4,5,6,7]) {
//     console.log(iterator);
// }
// function DecoradorClase(target:Function) {
//     target.prototype.Saludar = function(){
//         console.log("Hola");
//     }
// }
// @DecoradorClase
// class Persona {
//     constructor() {
//     }
// }
// let persona = new Persona();
// persona.Saludar(); tira error pero igual se ve en consola
// // El ? despues del valor del parametro hace que sea opcional este valor
// function ObtenerValores(objeto: {valor1:string, valor2?:number}) {
//     let {valor1, valor2 } = objeto;
//     console.log(valor1);
//     console.log(valor2);
// }
// ObtenerValores({valor1:"camisa",
//                 valor2:23});
// function saludo(mensaje:string, mensaje2?:string) {
//     console.log(mensaje);
// }
// saludo("Hola soy un mensaje");
// var valor1 = 120;
// var valor1 = 23;
// let cadena1 = "Hola";
// // let cadena1 = "Hola" NO SE PUEDE DECLARAR UNA MISMA VARIABLE DENTRO DEL MISMO
// //                      BLOQUE DE CODIGO.
// // NO SE PUEDE USAR LET FUERA DEL MISMO BLOQUE DE CODIGO, EN CASOS DE OCUPARSE 
// // FUERA DEL BLOQUE UTILIZAR VAR
// // for (let index = 0; index <10; index++) {
// //     const element = index;
// //     console.log(element);
// // }
// // console.log(index);
// for (var index = 0; index <10; index++) {
//     const element = index;
//     console.log(element);
// }
// console.log(index);
// enum Estado{
//     activo= "Activo",
//     inactivo= "Inactivo"
// }
// console.log(Estado.inactivo);
// class Cliente {
//     private _nombre : string;
//     public get nombre() : string {
//         if (this._nombre) {
//             return this._nombre;
//         }else{
//             return "No tiene nombre asignado";
//         }
//     }
//     public set nombre(v : string) {
//         this._nombre = v;
//     }
//   constructor(_nombre?: string) {
//     this._nombre = _nombre
//   }
// }
// let cliente = new Cliente();
// console.log(cliente.nombre);
// class Personaa{
//     nombre:string;
//     edad:number;
// }
// class Estudiante extends Personaa{
//     numeroCarnet:number;
//     constructor(numero:number){
//         super();
//         this.numeroCarnet = numero;
//     }
// }
// class Empleado extends Personaa{
//     numeroSeguro:number;
//     constructor(nombreEmpleado:string,edad:number,numero:number){
//         super();
//         this.numeroSeguro=numero;
//         this.nombre = nombreEmpleado;
//         this.edad = edad;
//     }
// }
// let estudiante = new Estudiante(124415);
// let empleado = new Empleado("Manuel",21,121456);
// console.log(empleado);
// interface Ifigura{
//     alto:number;
//     ancho?:number;
// }
// let figura:Ifigura = {alto:15};
// let figura2:Ifigura = {alto:15, ancho:15};
// interface Ipunto{
//     x:string;
//     y:number;
// }
// let punto:Ipunto = {x:"Hola", y:10};
// console.log(figura);
// console.log(figura2);
// console.log(punto);
// interface IMatematicas{
//     total?:number;
//     Sumar(a:number,b:number):number;
//     Restar(a:number,b:number):number;
// }
// class UtilidadMat implements IMatematicas{
//     Sumar(a: number, b: number): number {
//         return a+b;
//     }
//     Restar(a: number, b: number): number {
//         return a-b;
//     }
// }
// interface IFigura1{
//     color:string;
// }
// interface IFigura2 extends IFigura1{
//     alto:string;
// }
// let fig2 = {} as IFigura2;
// fig2.alto="20cm"
// console.log(fig2);
// class Utilidad{
//     static pi:number = 3.1416;
//     static calcularRadioCirculo(radio:number):void{
//         console.log(radio*radio*this.pi);
//     }
// }
// let utilidad = new Utilidad();
// Utilidad.calcularRadioCirculo(3);
// class Libro {
//     readonly autor:string;
//     titulo:string;
//     fechaPublicacion:Date;
// }
// let libro = new Libro();
// // libro.autor = "Manuel";  //NO PUEDE EDITARSE POR PROPIEDAD READONLY
// class Trabajador{
//     protected nombre:string;
//     apellido:string;
//     edad:number;
//     numeroCarnet:number;
//     estado:boolean;
// //   constructor(nombre: string,  apellido: string, edad: number, numeroCarnet: number, estado: boolean) {
// //     this.nombre = nombre
// //     this.apellido = apellido
// //     this.edad = edad
// //     this.numeroCarnet = numeroCarnet
// //     this.estado = estado
// //   }
//     ObtenerNombre(nombre:string,apellido?:string):string{
//         var nombreCompleto:string = `${nombre} ${apellido}`;
//         if (apellido === undefined) {
//             nombreCompleto = `${nombre}`
//         }
//         console.log(nombreCompleto);
//         return nombre + apellido;
//     }
// }
// // let trabajador = new Trabajador("Manuel","Hernandez",21,90401,true);
// // console.log(trabajador);
// class Jefe extends Trabajador{
//     puesto:string;
//   constructor(puesto: string, nombre:string, apellido:string, edad:number,numeroCarnet:number, estado:boolean) {
//     super()
//     this.puesto = puesto;
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.numeroCarnet = numeroCarnet;
//     this.estado = estado;
//   }
// }
// let jefe = new Jefe("Jefe","Manuel","Hernandez",21,941,true);
// console.log(jefe);
// ///<reference path="namespaceCliente.ts"/>
// ///<reference path="namespaceEmpleado.ts"/>
// let clienteMsj = NamespaceCliente.Mensaje();
// let empleadoMsj = NamespaceEmpleado.Mensaje();
// console.log(clienteMsj);
// console.log(empleadoMsj);
var NamespaceCliente;
(function (NamespaceCliente) {
    function Mensaje() {
        return "Hola desde un cliente";
    }
    NamespaceCliente.Mensaje = Mensaje;
})(NamespaceCliente || (NamespaceCliente = {}));
var NamespaceEmpleado;
(function (NamespaceEmpleado) {
    function Mensaje() {
        return "Hola desde un empleado";
    }
    NamespaceEmpleado.Mensaje = Mensaje;
})(NamespaceEmpleado || (NamespaceEmpleado = {}));
// // MONTO ES TIPO OBJECT YA QUE SI SE DEFINIO SU TIPO 
// // VARIABLE POR SER INDEFINIDO ES TIPO UNDEFINED
// let monto:number = null;
// let variable;
// console.log(monto);
// console.log(variable);
// console.log(typeof monto);
// console.log(typeof variable);
// let numero:number =12;
// // let edad:number =18;
// let edad = obtenerEdad();
// if (edad>=18) {
//     console.log("Eres mayor de edad");
// }else{
//     console.log("Eres menor de edad");
// }
// function obtenerEdad() {
//     return 21;
// }
// let individuo = {
//     nombreIndividuo:["Manuel","Hernandez"],
//     edadIndividuo: 21,
//     generoIndividuo: "Masculino",
//     interesesIndividuo: ["Gym", "Fiesta"]
// }
// let {nombreIndividuo:nombreCom, edadIndividuo, generoIndividuo, interesesIndividuo} = individuo;
// let presentacion:[string,number];
// console.log(`Mi nombre es ${nombreCom[0]} ${nombreCom[1]} tengo ${edadIndividuo} años, soy del genero
// ${generoIndividuo} y me gusta ir al ${interesesIndividuo[0]} y me gusta salir de ${interesesIndividuo[1]}`);
// let nombresAgrupar:string[] = ["Manuel","Alejandro","Luis"];
// let numerosAgrupar = [1,2,3,4,5,6,7,8,9,10];
// let agrupar = ["Prueba",100, nombresAgrupar, numerosAgrupar];
// console.log(agrupar);
// let agrupar2 = ["Prueba",100, ...nombresAgrupar, ...numerosAgrupar];
// console.log(agrupar2);
// let librou={
//     autor:"Oscar",
//     titulo:"La perla perdida",
//     fecha: new Date(2020,1,4)
// }
// let vehiculo ={
//     color:"Negro",
//     puerta:"A3",
//     marca:"Toyota"
// }
// let agrupar3= {prueba:"Hola", ...librou, ...vehiculo};
// console.log(agrupar3);
// let nombre:string = "Manuel";
// let apellido:string = "Hernandez";
// // let resultado = nombre + " " + apellido;
// let resultado = `${nombre} ${apellido}`;
// console.log(resultado.toUpperCase());
// let persona:[string[], number, string, string[]];
// persona = [["Manuel","Hernandez"], 21, "masculino",["Gym", "Fiesta"]];
// let [nombree,edadd,genero,interes] = persona;
// console.log(nombree);
// console.log(edadd);
// console.log(genero);
// console.log(interes);
// let nombreCompleto = `Mi nombre es ${nombree[0]} ${nombree[1]} tengo ${edadd} años, soy del genero ${genero} y me gusta el ${interes[0]} y la ${interes[1]}`
// console.log(nombreCompleto);
// let datos:[string,number,boolean];
// datos = ["",12,false];
// console.log(datos[1]);
// let cadena:any = "Hola soy una cadena";
// let result:number = (<string> cadena).length;
// console.log(result);
// let result2:number = (cadena as string).length;
// console.log(result2);
// function saludar():void{
//     console.log("Hola");
// }
// let valor = saludar();
// console.log(valor);
