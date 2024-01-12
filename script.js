document.addEventListener("DOMContentLoaded", function() {
    
    const imag = document.querySelectorAll('.carousel-image');
    let distancia = -330; // ancho de moviemiento
    let indiceactual = 0; // Indice actual
    let vuelta = 0;
  
    

  
    
    // Función para mover una imagen
    function moveImage(index) {
        
       
      
     function muevete(){
        imag[index].style.opacity='1';
        imag[index].style.transform = `translateX(${distancia}px)`;}

     
     setTimeout(muevete, 2000);
     

        function ocultar(){
            imag[index].style.opacity='0';
        }
        setTimeout(ocultar,4000);
      
   
        function volverainicio(){
            vuelta = (distancia*-1);

            imag[index].style.transform = `translateX(${vuelta}px)`;
        }
        setTimeout(volverainicio, 5000);

        distancia=distancia - 330;
        indiceactual = (indiceactual + 1) % imag.length; // Actualiza el índice para la siguiente imagen
      
    }
  
    // Iniciar el bucle con la primera imagen
    setInterval(() => {
        moveImage(indiceactual);
        },2000); 
  });
  
  
  