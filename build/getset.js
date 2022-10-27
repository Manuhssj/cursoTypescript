class Cliente {
    constructor(_nombre) {
        this._nombre = _nombre;
    }
    get nombre() {
        if (this._nombre) {
            return this._nombre;
        }
        else {
            return "No tiene nombre asignado";
        }
    }
    set nombre(v) {
        this._nombre = v;
    }
}
let cliente = new Cliente();
console.log(cliente.nombre);
