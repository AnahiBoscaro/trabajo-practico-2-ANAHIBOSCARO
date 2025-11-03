document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todas las secciones
  const secciones = document.querySelectorAll("section");

  secciones.forEach(seccion => {
    const contenedorOriginal = seccion.querySelector(".contenedor-original img");
    const variaciones = seccion.querySelectorAll(".contenedor-variaciones .img-variacion");

    variaciones.forEach(img => {
      img.addEventListener("click", () => {
        // Cambia la imagen del contenedor original
        contenedorOriginal.src = img.src;
        contenedorOriginal.alt = img.alt;

        // Quita borde de todas las miniaturas
        variaciones.forEach(v => v.classList.remove("seleccionada"));

        // Agrega borde a la seleccionada
        img.classList.add("seleccionada");
      });
    });
  });
});
