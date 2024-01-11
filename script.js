document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-image');
  
    let currentIndex = 0; // Indice actual del carrusel
    const slideWidth = 330; // Ancho de cada imagen + margen
  
    // Función para mover el carrusel
    function moveCarousel() {
      currentIndex = (currentIndex + 1) % images.length; // Actualiza el índice
      const newPosition = -currentIndex * slideWidth; // Calcula la nueva posición
  
      slide.style.transform = `translateX(${newPosition}px)`; // Aplica la nueva posición
    }
  
    // Configuración del intervalo para mover automáticamente el carrusel
    setInterval(moveCarousel, 2000); // Mueve cada 2 segundos
  });
  
  