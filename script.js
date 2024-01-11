document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-image');
  
    let intervalId;
    
    // Función para desplazar el carrusel
    function moveCarousel() {
      const firstImage = slide.firstElementChild;
      slide.style.transition = "transform 0.3s ease-in-out";
      slide.style.transform = "translateX(-330px)"; // Desplaza 330px para mostrar 3 imágenes
      slide.appendChild(firstImage);
    }
  
    // Iniciar desplazamiento automático
    intervalId = setInterval(moveCarousel, 2000); // Cambia cada 2 segundos
  
    // Detener desplazamiento al hacer clic en una imagen
    images.forEach(image => {
      image.addEventListener('click', function() {
        clearInterval(intervalId); // Detiene el desplazamiento automático
        slide.style.transition = "transform 0.3s ease-in-out";
        slide.style.transform = "translateX(0px)"; // Regresa al inicio
        slide.insertBefore(image, slide.firstElementChild); // Coloca la imagen al principio
      });
    });
  });
  