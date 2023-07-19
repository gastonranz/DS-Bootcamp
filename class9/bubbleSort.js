//El objetivo de este ejercicio es implementar el algoritmo de ordenamiento Bubble Sort. El Bubble Sort es un algoritmo simple que ordena una lista de elementos comparando pares adyacentes y realizando intercambios si es necesario.
//El objetivo es utilizar el mismo array por lo que está prohibido utilizar un array auxiliar.

let array = [1, 4, 2, 5, -2, 3];
let data = 0;

do{
    for(let i = 0; i < array.length; i++) {
        if(array[i] > array[i + 1]) {
            data = array[i];
            array[i] = array[i + 1];
            array[i + 1] = data;
        }
    }
    console.log(array);
} while(validation(array));

function validation(array) {
    let value = false;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > array[i + 1]) {
            value = true;
        }
    }
    return value;
}



// const a = [7];
// const b = [...a];
// console.log(b);
// b.push(8);
// a.push(10);
// a.push(22);

// console.log(a);
// console.log(b);