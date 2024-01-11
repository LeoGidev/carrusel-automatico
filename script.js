document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-image');
    const slideWidth = 300; // Ancho de cada imagen a mover
    const moveDistance = -300; // Distancia para mover la imagen
    const hidePosition = 600; // Posición para ocultar la imagen
    
    let currentIndex = 0; // Indice actual
  
    // Función para mover una imagen
    function moveImage(index) {
      //const image = images[index];
  
      // Paso 1: Mover la imagen -300px con transición suave
      images[index].style.transition = 'transform 2s ease-in-out';
      setTimeout(() => {
      images[index].style.transform = `translateX(${moveDistance}px)`;
      },1000);
      // Paso 2: Ocultar la imagen
      setTimeout(() => {
        images[index].style.opacity = '0';
      }, 1000); // Después de 1 segundo (tiempo de transición)
  
      // Paso 3: Ubicar la imagen a +600px y hacerla visible
      setTimeout(() => {
        images[index].style.transform = `translateX(${hidePosition}px)`;
        
      }, 2000); // Después de 2 segundos (tiempo de transición + 1 segundo)
  
      // Paso 4: Mover la imagen a -300 con transición suave y comenzar el bucle nuevamente
      setTimeout(() => {
        images[index].style.opacity = '1';
        //image.style.transition = 'none'; // Quita la transición para mover instantáneamente
        images[index].style.transform = `translateX(${moveDistance}px)`;
        currentIndex = (currentIndex + 1) % images.length; // Actualiza el índice para la siguiente imagen
        setTimeout(() => moveImage(currentIndex), 1000); // Llama a la función de nuevo después de 1 segundo
      }, 3000); // Después de 3 segundos (tiempo total)
    }
  
    // Iniciar el bucle con la primera imagen
    moveImage(currentIndex);
  });
  
  
  