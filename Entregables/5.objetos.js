const libro = { //objeto libro con propiedades
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    disponible: true,
};

function describirLibro(libro) {  //metodo que recibe un objeto libro como parámetro
    console.log(`Título: ${libro.titulo}, escrito por ${libro.autor} en el año ${libro.año}. Disponible: ${libro.disponible ? "Sí" : "No"}`);
}

let mostrarInfo = describirLibro(libro);