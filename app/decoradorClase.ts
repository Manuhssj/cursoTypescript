function DecoradorClase(target:Function) {
    target.prototype.Saludar = function(){
        console.log("Hola");
    }
    
}

@DecoradorClase
class Persona {
    constructor() {
        
    }
}

let persona = new Persona();
// persona.Saludar(); tira error pero igual se ve en consola