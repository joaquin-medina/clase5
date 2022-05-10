//Eliminar primer elemento del arreglo.

const delFirstE = (array) => {    //Ingresar arreglo por parametro
    
    console.log("Arreglo original " , array);

    let element = array.shift();

    console.log("Nuevo arreglo" , array);

    console.log("Elemento eliminado: ", element);
}

delFirstE([15, 12, 24, 65, 75, 80]);
