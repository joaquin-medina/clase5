//Recibir arreglo, verificar, eliminar ultimos tres 
function greaterThanFive(array) {
      
    if ( array.length < 5 )
        console.log("El arreglo debe contener mas de 5 elementos.")    
    else {
        array.splice(-3)        
        console.log(array);    
    }
}

greaterThanFive([1, 2, 3, 4, 5]);
