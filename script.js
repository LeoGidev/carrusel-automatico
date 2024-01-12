document.addEventListener("DOMContentLoaded", function() {
    
    const imag = document.querySelectorAll('.carousel-image');
    let distancia = -330; // ancho de moviemiento
    let indiceactual = 0; // Indice actual
    let vuelta = 990;
    let a = 0;
    let c =0;

    for(let i=0;i<imag.length;i++){
        if (i<1){
        mov = 990;
       
        }else if(i<2){
            mov = 660;
            

        }
        else if(i<3){
            mov = 330;
            a=-1;
        }
        else{mov = -330 * a;}
        //console.log("valor de i:", i, "valor de a:", a, "valor de mov", mov);
        imag[i].style.transform = `translateX(${mov}px)`;
        a = a +1;


    }
  
    
  
  
    
    // Función para mover una imagen
    function moveImage(index) {
        
         
        
       
      
     function muevete(){
        for(let e=0;e<imag.length;e++){
        imag[e].style.opacity='1';
        imag[e].style.transform = `translateX(${distancia*e}px)`;}
    }

     
     setTimeout(muevete, 2000);
     

        function ocultar(){
            imag[index].style.opacity='1';
        }
        setTimeout(ocultar,4000);
      
   
        function volverainicio(){
            if (index<1){
                vuelta = 990;
               
                }else if(index<2){
                    vuelta = 660;
                    
        
                }
                else if(index<3){
                    vuelta = 330;
                    c=-1;
                }
                else{vuelta = -330 * c;}

            imag[index].style.transform = `translateX(${vuelta}px)`;
            c= c + 1 ;
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
  
  
  