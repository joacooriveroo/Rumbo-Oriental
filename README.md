# Rumbo Oriental

Rumbo Oriental es un sitio web académico dedicado al turismo en Uruguay. Su objetivo es presentar distintos destinos del país, propuestas de viaje, paquetes turísticos e imágenes representativas mediante una interfaz clara, atractiva y adaptable a diferentes dispositivos.

El proyecto fue realizado durante el curso de Desarrollo Web y reúne los contenidos aprendidos en sus diferentes etapas: HTML semántico, CSS, Box Model, Flexbox, CSS Grid, diseño responsive, Bootstrap y JavaScript.

## Objetivo del proyecto

El objetivo principal fue construir un sitio completo de cinco páginas que mantuviera la misma identidad visual y una navegación funcional. También se buscó que el contenido fuera accesible, estuviera organizado semánticamente y pudiera visualizarse correctamente en celulares, tablets y computadoras.

## Desarrollo del sitio

### Estructura HTML

Primero desarrollé la estructura base de los cinco archivos HTML. Para organizar el contenido utilicé etiquetas semánticas como `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption` y `footer`.

Cada página cuenta con su propio título principal, secciones informativas, imágenes con texto alternativo y un menú que permite desplazarse por todo el sitio sin rutas rotas.

### Identidad visual con CSS

Después incorporé una hoja de estilos externa compartida por todas las páginas. Allí definí la paleta de colores, la tipografía Montserrat de Google Fonts, los fondos, los tamaños de texto y los estilos generales de Rumbo Oriental.

También apliqué Box Model para controlar los márgenes, el `padding`, los bordes y el espacio interno de cada contenedor. Se utilizó una regla global para evitar diferencias provocadas por los estilos predeterminados del navegador.

### Flexbox y distribución del contenido

Flexbox fue utilizado para organizar la navegación, alinear verticalmente sus elementos y distribuir el contenido de distintas secciones. La propiedad `gap` permitió mantener una separación uniforme entre enlaces, tarjetas y otros componentes.

### CSS Grid y diseño responsive

En las secciones más complejas implementé CSS Grid y `grid-template-areas`. El diseño fue trabajado con una estrategia mobile-first: la versión base está pensada para celulares y posteriormente se transforma mediante media queries.

Se agregó un breakpoint con `min-width: 1024px` para aprovechar mejor el espacio disponible en computadoras y organizar el contenido en varias columnas utilizando unidades flexibles.

### Integración de Bootstrap

Bootstrap 5.3.3 fue integrado mediante CDN en los cinco archivos HTML. Se utilizó una navbar responsiva que se transforma en menú hamburguesa en pantallas pequeñas, además de componentes como carousel, tarjetas, botones, alertas, formularios y el sistema de grillas de Bootstrap.

Los componentes fueron personalizados desde el CSS propio para conservar la paleta de colores y la identidad visual del sitio.

### Interactividad y JavaScript

Los enlaces, botones y tarjetas incluyen estados `:hover`, `:focus` y `:active`, acompañados de transiciones para generar cambios suaves.

El archivo JavaScript se utiliza para actualizar automáticamente el año del copyright y para mostrar el mensaje de confirmación del formulario. El formulario es demostrativo y no envía información a un servidor.

También se incorporaron enlaces a Instagram, Facebook y X en el footer, además de un acceso flotante a WhatsApp.

## Páginas

- **Inicio:** presenta el proyecto, sus beneficios principales, destinos destacados y un carousel de imágenes.
- **Destinos:** muestra diferentes lugares turísticos de Uruguay mediante tarjetas con imágenes e información.
- **Paquetes:** presenta propuestas y experiencias de viaje organizadas.
- **Galería:** reúne fotografías de distintos destinos y paisajes del país.
- **Contacto:** incluye información de atención y un formulario demostrativo para realizar consultas.

## Tecnologías utilizadas

- HTML5
- CSS3
- Box Model
- Flexbox
- CSS Grid
- Media Queries
- Bootstrap 5.3.3
- JavaScript
- Google Fonts

## Control de versiones

El proyecto utiliza Git para el control de versiones y GitHub para alojar el repositorio. Los cambios realizados durante el desarrollo se registran mediante commits descriptivos desde la terminal.

## Sitio web

El proyecto se encuentra publicado mediante GitHub Pages.

[Ver Rumbo Oriental] (https://joacooriveroo.github.io/Rumbo-Oriental/)