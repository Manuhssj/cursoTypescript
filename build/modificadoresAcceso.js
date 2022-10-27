class Trabajador {
    //   constructor(nombre: string,  apellido: string, edad: number, numeroCarnet: number, estado: boolean) {
    //     this.nombre = nombre
    //     this.apellido = apellido
    //     this.edad = edad
    //     this.numeroCarnet = numeroCarnet
    //     this.estado = estado
    //   }
    ObtenerNombre(nombre, apellido) {
        var nombreCompleto = `${nombre} ${apellido}`;
        if (apellido === undefined) {
            nombreCompleto = `${nombre}`;
        }
        console.log(nombreCompleto);
        return nombre + apellido;
    }
}
// let trabajador = new Trabajador("Manuel","Hernandez",21,90401,true);
// console.log(trabajador);
class Jefe extends Trabajador {
    constructor(puesto, nombre, apellido, edad, numeroCarnet, estado) {
        super();
        this.puesto = puesto;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.numeroCarnet = numeroCarnet;
        this.estado = estado;
    }
}
let jefe = new Jefe("Jefe", "Manuel", "Hernandez", 21, 941, true);
console.log(jefe);
