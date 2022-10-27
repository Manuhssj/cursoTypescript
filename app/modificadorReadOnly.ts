class Libro {
    readonly autor:string;
    titulo:string;
    fechaPublicacion:Date;
}

let libro = new Libro();

// libro.autor = "Manuel";  //NO PUEDE EDITARSE POR PROPIEDAD READONLY
