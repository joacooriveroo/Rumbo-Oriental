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

        mensajeFormulario.focus({
            preventScroll: true
        });
    });
}

/* Animaciones sutiles al entrar en pantalla */

const reducirMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!reducirMovimiento && "IntersectionObserver" in window) {
    const elementosAnimados = document.querySelectorAll(
        [
            ".encabezado-seccion",
            ".tarjeta-beneficio",
            ".tarjeta-destino",
            ".resumen-paquete",
            ".tarjeta-paquete",
            ".elemento-galeria",
            ".tarjeta-experiencia",
            ".tarjeta-contacto",
            ".panel-contacto",
            ".ubicacion-ilustrativa",
            ".contenido-eleccion",
            ".contenido-invitacion"
        ].join(", ")
    );

    const observadorAnimaciones = new IntersectionObserver(
        function (entradas, observador) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observador.unobserve(entrada.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    elementosAnimados.forEach(function (elemento, indice) {
        elemento.classList.add("animar-entrada");
        elemento.style.setProperty(
            "--retardo-animacion",
            `${(indice % 4) * 70}ms`
        );
        observadorAnimaciones.observe(elemento);
    });
}
