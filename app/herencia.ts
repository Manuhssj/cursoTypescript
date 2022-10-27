class Persona{
    nombre:string;
    edad:number;
}



class Estudiante extends Persona{
    numeroCarnet:number;
    constructor(numero:number){
        super();
        this.numeroCarnet = numero;
    }
}

class Empleado extends Persona{
    
    numeroSeguro:number;
    constructor(nombreEmpleado:string,edad:number,numero:number){
        super();
        this.numeroSeguro=numero;
        this.nombre = nombreEmpleado;
        this.edad = edad;
    }
}

let estudiante = new Estudiante(124415);
let empleado = new Empleado("Manuel",21,121456);

console.log(empleado);

