class Persona {
}
class Estudiante extends Persona {
    constructor(numero) {
        super();
        this.numeroCarnet = numero;
    }
}
class Empleado extends Persona {
    constructor(nombreEmpleado, edad, numero) {
        super();
        this.numeroSeguro = numero;
        this.nombre = nombreEmpleado;
        this.edad = edad;
    }
}
let estudiante = new Estudiante(124415);
let empleado = new Empleado("Manuel", 21, 121456);
console.log(empleado);
