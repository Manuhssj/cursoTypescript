class Utilidad {
    static calcularRadioCirculo(radio) {
        console.log(radio * radio * this.pi);
    }
}
Utilidad.pi = 3.1416;
let utilidad = new Utilidad();
Utilidad.calcularRadioCirculo(3);
