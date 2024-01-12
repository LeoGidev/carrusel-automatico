document.addEventListener("DOMContentLoaded", function() {
    
    const imag = document.querySelectorAll('.carousel-image');
    let distancia = -330; // ancho de moviemiento
    let indiceactual = 0; // Indice actual
    let vuelta = 930;
    let a = 0;

    for(let i=0;i<imag.length;i++){
        if (i<3){
        mov = 930;
        }else{mov = -330;}
        imag[i].style.transform = `translateX(${mov}px)`;
        a = a +1;


    }
  
    
  
  
    
    // Función para mover una imagen
    function moveImage(index) {
        
         
        
       
      
     function muevete(){
        imag[index].style.opacity='1';
        imag[index].style.transform = `translateX(${distancia}px)`;}

     
     setTimeout(muevete, 2000);
     

        function ocultar(){
            imag[index].style.opacity='1';
        }
        setTimeout(ocultar,4000);
      
   
        function volverainicio(){
            //vuelta = (distancia*-1);

            imag[index].style.transform = `translateX(${vuelta}px)`;
        }
        setTimeout(volverainicio, 5000);

        
        indiceactual = (indiceactual + 1) % imag.length; // Actualiza el índice para la siguiente imagen
        //distancia= -330*(indiceactual+1);
    }
  
    // Iniciar el bucle con la primera imagen
    setInterval(() => {
        moveImage(indiceactual);
        },2000); 
  });
  
  
  