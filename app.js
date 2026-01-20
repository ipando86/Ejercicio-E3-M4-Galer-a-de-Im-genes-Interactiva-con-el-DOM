//seleccion de elementos
const imagenPrincipal = document.getElementById("imagen-principal");
const miniaturas = document.querySelectorAll(".thumbnail");
const contenedorPrincipal = document.getElementById("imagen-principal-container");

//Interaccion

miniaturas.forEach((miniatura) => {
    miniatura.addEventListener("click", () => {
        //obtener los datos de las miniaturas clickeadas

        const nuevaRuta = miniatura.src;
        const nuevaDescripcion = miniatura.alt;

        //actualizar el visor principal

        imagenPrincipal.src = nuevaRuta;
        imagenPrincipal.alt = nuevaDescripcion;

        pieDeFoto.textContent = nuevaDescripcion
    })

});

//crear el elemento para el pie de foto

const pieDeFoto = document.createElement('p');
pieDeFoto.id = "pie-de-foto";

contenedorPrincipal.appendChild(pieDeFoto)
