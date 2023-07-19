//Dado un array sumar los 2 valores más altos continuos
// [2, 3, 6, 8, 1] = 14 (el 6 y 8)
// [1, 2, 1, 6, 2] = 8 (el 6 y 2)

const array = [2, 3, 6, 8, 1];
let numMayor = 0;
let numMedio = 0;
let count = 0;
let result = 0;

array.forEach((element) => {
    while(count < array.length) {
        if(array[count] > numMayor) {
            numMayor = array[count];
        }
        count++;
    }
    if(element < numMayor && element > numMedio) {
        numMedio = element;
    }
});
result = numMedio + numMayor;

console.log(result);