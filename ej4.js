//Función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido
function receiveArray(number) {
    let aReceived = Array(number);
    for (let i = 0; i <= number; i++) {
        aReceived[i] = i;        
     }
     console.log(aReceived);
    }  

    receiveArray(10);

