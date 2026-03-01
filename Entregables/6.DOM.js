const boton = document.getElementById('agregar');
const inputTexto = document.getElementById('texto');
const listaComentarios = document.getElementById('comentarios');
boton.addEventListener('click', () => {
    const contenido = inputTexto.value.trim(); 