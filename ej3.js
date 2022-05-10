//Sumar numero a cada elemento del arreglo
function arrayAndNumber(array, num){  
  array.forEach((element, index) => array[index] = element + num);
  console.log(array);    
       
}  

arrayAndNumber([1,2,3,4,5,6,7,8], 2);

//NO SUMA LOS NUMEROS AL ARREGLO