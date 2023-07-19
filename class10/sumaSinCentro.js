//Dado un array de números sumar todos los elementos a excepción del valor del centro.
// [1, 2, 3, 4, 5] = 12 (se elimina el 3)
// [1, 2, 3, 4, 5, 6] = 14 (se eliminan 3 y 4)

const array = [100, 1, 2, 3, 5, 22, 10, 4, 5];
let newArray = [];
let result = 0;

if(array.length % 2 === 0) {
    let index = Math.floor(array.length / 2);
    newArray = array.splice(index - 1, 2);
    result = array.reduce((acumulator, element) => {
        return acumulator + element;
    })
} else {
    let index = Math.floor(array.length / 2);
    newArray = array.splice(index, 1);
    result = array.reduce((acumulator, element) => {
        return acumulator + element;
    });
}
console.log(array);
console.log(newArray);
console.log(result);



// const array3 = [2, 3, 4, 5, 6, 7, 8];
// let num = Math.floor(array3.length / 2);
// let resultado = array3.splice(num - 1, 3);
// let imprimir = array3.reduce((acumulator, element) => {
//     return acumulator + element;
// });
// console.log(resultado);
// console.log(array3);
// console.log(imprimir);

// const array2 = [1, 2, 3, 4, 6];
// let result2 = [];
// result2 = array2.map((element) => {
//     return element;
// });
// console.log(result2);