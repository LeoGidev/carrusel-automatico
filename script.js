document.addEventListener("DOMContentLoaded", function() {
    const imag = document.querySelectorAll('.carousel-image');
    let distancia = -330; // Ancho de movimiento
    let indiceactual = 0; // Índice actual
    let vuelta = 0;
    let coleros = [];
    let newindex = 0;

    // Función para mover una imagen
    function moveImage(index, callback) {
        let dist = distancia + (index * -330);

        for (let e = 0; e < imag.length; e++) {
            newindex = index + e;

            if (newindex < imag.length) {
                imag[newindex].style.opacity = '1';
                imag[newindex].style.transform = `translateX(${dist}px)`;
            }
        }

        // Callback para indicar que la función moveImage ha terminado
        callback();
    }

    // Función para volver al inicio
    function volverainicio(index) {
        imag[index].style.opacity = '0';
        vuelta = 330 * (imag.length - 1);
        imag[index].style.transform = `translateX(${vuelta}px)`;

        // Manejo de coleros
        if (coleros.length < imag.length) {
            coleros.push(index);
        } else {
            coleros = [index];
        }
    }

    // Función para realizar la animación completa
    function animacionCompleta(index) {
        moveImage(index, function() {
            setTimeout(function() {
                volverainicio(index);
            }, 4000);
        });

        // Actualiza el índice para la siguiente imagen
        indiceactual = (indiceactual + 1) % imag.length;
    }

    // Iniciar el bucle con la primera imagen
    setInterval(function() {
        animacionCompleta(indiceactual);
    }, 8000);
});

  
  
  