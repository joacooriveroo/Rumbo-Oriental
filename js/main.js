<<<<<<< HEAD
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* Modal de la galería */

const modalGaleria = document.getElementById("modalGaleria");

if (modalGaleria) {
    modalGaleria.addEventListener("show.bs.modal", function (evento) {
        const boton = evento.relatedTarget;
        const imagenSeleccionada = boton.getAttribute("data-imagen");
        const tituloSeleccionado = boton.getAttribute("data-titulo");

        const imagenModal =
            document.getElementById("imagenModalGaleria");

        const tituloModal =
            document.getElementById("tituloModalGaleria");

        imagenModal.src = imagenSeleccionada;
        imagenModal.alt = tituloSeleccionado;
        tituloModal.textContent = tituloSeleccionado;
    });
}


/* Formulario de contacto demostrativo */

const formularioContacto =
    document.getElementById("formularioContacto");

const mensajeFormulario =
    document.getElementById("mensajeFormulario");

if (formularioContacto && mensajeFormulario) {
    formularioContacto.addEventListener("submit", function (evento) {
        evento.preventDefault();

        mensajeFormulario.classList.remove("d-none");
        formularioContacto.reset();

        mensajeFormulario.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
=======
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* Modal de la galería */

const modalGaleria = document.getElementById("modalGaleria");

if (modalGaleria) {
    modalGaleria.addEventListener("show.bs.modal", function (evento) {
        const boton = evento.relatedTarget;
        const imagenSeleccionada = boton.getAttribute("data-imagen");
        const tituloSeleccionado = boton.getAttribute("data-titulo");

        const imagenModal =
            document.getElementById("imagenModalGaleria");

        const tituloModal =
            document.getElementById("tituloModalGaleria");

        imagenModal.src = imagenSeleccionada;
        imagenModal.alt = tituloSeleccionado;
        tituloModal.textContent = tituloSeleccionado;
    });
}


/* Formulario de contacto demostrativo */

const formularioContacto =
    document.getElementById("formularioContacto");

const mensajeFormulario =
    document.getElementById("mensajeFormulario");

if (formularioContacto && mensajeFormulario) {
    formularioContacto.addEventListener("submit", function (evento) {
        evento.preventDefault();

        mensajeFormulario.classList.remove("d-none");
        formularioContacto.reset();

        mensajeFormulario.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
>>>>>>> 0506df9cda542e93aa1d75c97e8b510fa3d07124
}