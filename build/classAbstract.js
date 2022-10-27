class Animal {
}
class Gato extends Animal {
    Ruido() {
        console.log("Miau");
    }
}
class Perro extends Animal {
    Ruido() {
        console.log("Wao");
    }
}
let gato = new Gato();
gato.Ruido();
let perro = new Perro();
perro.Ruido();
