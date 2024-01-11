document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-image');
    const slideWidth = 300; // Ancho de cada imagen a mover
    const moveDistance = -300; // Distancia para mover la imagen
    const hidePosition = 600; // Posición para ocultar la imagen
    
    let currentIndex = 0; // Indice actual
    var indexpos1=0;
    let indexpos2=0;
  
    // Función para mover una imagen
    function moveImage(index) {
        
        
        //console.log(images.length);
      if(index < images.length-2){
        indexpos1=index+1;
        indexpos2=index+2;
      }
      else if(index < images.length-1){
        indexpos1=index+1;
        indexpos2=0;
        //console.log("index+2 = que length");
        //console.log(index+2, images.length);
        
      }else{
        indexpos1=0;
        indexpos2=1;

      }
    // Paso 1: Mover la imagen -300px con transición suave
           setTimeout(() => {
      images[index].style.transform = `translateX(${moveDistance}px)`;
      
      images[indexpos1].style.transform=`translateX(${moveDistance}px)`;
      
      images[indexpos2].style.transform=`translateX(${moveDistance}px)`;
      
      

      },1000);

      // Paso 2: Ocultar la imagen
      setTimeout(() => {
        images[index].style.opacity = '0';
      }, 3000); // Después de 3 segundos (tiempo de transición)
  
      // Paso 3: Ubicar la imagen a +930px y hacerla visible
     // setTimeout(() => {
       // images[index].style.transform = `translateX(${hidePosition}px)`;
        
      //}, 2000); // Después de 2 segundos (tiempo de transición + 1 segundo)
  
      // Paso 4: Mover la imagen a -300 con transición suave y comenzar el bucle nuevamente
      setTimeout(() => {
        //images[index].style.opacity = '1';
        //image.style.transition = 'none'; // Quita la transición para mover instantáneamente
       // images[index].style.transform = `translateX(${moveDistance}px)`;
        currentIndex = (currentIndex + 1) % images.length; // Actualiza el índice para la siguiente imagen
        //setTimeout(() => moveImage(currentIndex), 1000); // Llama a la función de nuevo después de 1 segundo
      }, 3000); // Después de 3 segundos (tiempo total)
    }
  
    // Iniciar el bucle con la primera imagen
    setInterval(() => {
        moveImage(currentIndex);
        },2000); 
  });
  
  
  