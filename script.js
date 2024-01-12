document.addEventListener("DOMContentLoaded", function() {
    
    const imag = document.querySelectorAll('.carousel-image');
    let distancia = -330; // ancho de moviemiento
    let indiceactual = 0; // Indice actual
    let vuelta = 0;
    let a = 0;
    let c =0;
    let coleros=[];
    let newindex=0;

   // for(let i=0;i<imag.length;i++){
     //   if (i<1){
       // mov = 990;
       
        //}else if(i<2){
          //  mov = 660;
            

      //  }
    //    else if(i<3){
        //    mov = 330;
          //  a=-1;
       // }
       // else{mov = -330 * a;}
        //console.log("valor de i:", i, "valor de a:", a, "valor de mov", mov);
        //imag[i].style.transform = `translateX(${mov}px)`;
        //a = a +1;


    //}
  
    
  
  
    
    // Función para mover una imagen
    function moveImage(index) {
        
         
        
       
      
     function muevete(){
        let dist = distancia + (index*-330);

        for(let e=0;e<imag.length;e++){
            newindex = index+e;
            
            if (newindex < imag.length){

        imag[newindex].style.opacity='1';
        imag[newindex].style.transform = `translateX(${dist}px)`; 
               
            }
            }
            console.log(coleros.length);
            if(coleros.length!=0 && coleros.length<imag.length){
                for(ind=0;ind<coleros.length;ind++){
                    diferencia = (imag.length-coleros.length);
                    console.log("dif:", diferencia);
                   let xx = (diferencia*330)-330;
                   console.log("distanciaxx: ", xx);
                   console.log("valor de ind:", ind, "valor del largo de coleros:", coleros.length, "valor de el largo de imag:", imag.length);
                imag[ind].style.transform = `translateX(${xx}px)`;
                    }

            }
    }
    

     
     setTimeout(muevete, 2000);
     

        function ocultar(){
            imag[index].style.opacity='0.5';
        }
        setTimeout(ocultar,4000);
      
   
        function volverainicio(){
           
            vuelta = 330*(imag.length-1);
            imag[index].style.transform = `translateX(${vuelta}px)`;
            if(coleros.length<imag.length){
            coleros.push(index);}
            else{coleros=[];
            coleros.push(index);}
           
            }
        setTimeout(volverainicio, 6000);

        
        indiceactual = (indiceactual + 1) % imag.length; // Actualiza el índice para la siguiente imagen
        
    }
  
    // Iniciar el bucle con la primera imagen
    setInterval(() => {
        moveImage(indiceactual);
        },6000); 
  });
  
  
  