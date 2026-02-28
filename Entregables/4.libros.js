let librosLeidos = []; //arreglo vacio donde se almacenaran los libros

function agregarLibro(titulo){
    librosLeidos.push(titulo);
    console.log(`Libro "${titulo}" agregado`);
    return librosLeidos; 
}

agregarLibro("Harry potter");
agregarLibro("Maravilloso desastre");
agregarLibro("El principito"); 
agregarLibro("El retrato de dorian gray");  
agregarLibro("Moby dick"); 

function mostrarLibros(){
console.log(librosLeidos);
}

mostrarLibros();
