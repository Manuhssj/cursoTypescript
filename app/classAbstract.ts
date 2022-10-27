 abstract class Animal{
     abstract Ruido():void;
}


class Gato extends Animal{
    Ruido(): void {
        console.log("Miau");
    }
}

class Perro extends Animal{
    Ruido(): void {
        console.log("Wao");
    }
}

let gato = new Gato()

gato.Ruido();

let perro = new Perro()

perro.Ruido();
