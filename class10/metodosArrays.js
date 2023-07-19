//POP method: Elimina el último elemento de un array y lo devuelve.
// const array = [1, 2, 3, "Hi"];
// const lastElement = array.pop();
// console.log(lastElement); // ["Hi"]
// console.log(array); // -> [1, 2, 3]

//UNSHIFT: Puedo agregar 1 o más elementos al INICIO de un array y obtener la nueva longitud del array.
// const array = [1, 2, 3];
// array.unshift(10, 28);
// console.log(array); // [10, 28, 1, 2, 3]

//SHIFT: Elimina el PRIMER elemento de un array y lo devuelve.
// const array = [1, 2, 3];
// const firstElement = array.shift();
// console.log(firstElement); // -> 1
// console.log(array); // [2, 3]

//CONCAT: Me permite combinar 2 o más arrays y devuelve un nuevo array.
// const array = [1, 2, 3];
// const array2 = [20, 21, 22];
// const arrayConcat = array.concat(array2); // El método concat() me está devolviendo un valor.
// const array2Concat = array2.concat(array);
// console.log(arrayConcat); // [1, 2, 3, 20, 21, 22]
// console.log(array2Concat); // [20, 21, 22, 1, 2, 3]

//SLICE: Puedo obtener una copia superficial de una PORCIÓN ESPECÍFICA de un array en un nuevo array.
//Nota: Debo indicar el índice de "Inicio" y el índice de "Fin".
// const array = [1, 2, 3, 4, 5, 6];
// const slice = array.slice(2, 4);
// console.log(slice); // [3, 4];

//INDEXOF: Busca la 1° APARICIÓN de un elemento en un array y devuelve su ÍNDICE correspondiente. Si el elemento se encuentra en el array, el método devuelve el índice de la PRIMERA APARICIÓN, si no se encuentra en el array, el método devuelve -1.
//Important! Realiza una BÚSQUEDA ESTRICTA, lo que significa que compara los valores utilizando el operador de igualdad estricta (===).

// const array = [1, 3, 8, "Hi", "@", 100];
// const search = 3;
// const index = array.indexOf(search);
// console.log(array.toString()); // 1,3,8,Hi,@,100
// const value = array.toString().toLowerCase().indexOf("hi,@,100");
// console.log(value); // 6

// if(index === -1) {
//     console.log(`${search} it's not inside the Array.`)
// } else {
//     console.log(index) // 3
// }


//----------ITERACIONES----------
//Nos permiten recorrer y tranformar los elementos de un array de manera efectiva.

//FOREACH
// const array = [1, 2, 3];
// array.forEach((element) => {
//     console.log(element * 20); // [20, 40, 60]
// });

//MAP
//Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array. Es útil cuando queremos transformar los elementos del array.
// const array = [2, 3, 5, 6, 8, 10];
// const result = array.map((element) => {
//     return element * 10;
// });
// console.log(result); // [20, 30, 50, 60, 80, 100]

//FILTER
//Crea un nuevo array con todos los elementos que CUMPLAN LA CONDICIÓN ESPECIFICADA. Nos ayuda a FILTRAR los elementos del array.
// const ARRAY = [2, 10, "Gaston", "Lucas", "Kim", "Helen"];
// const VALUE = ARRAY.filter((element) => {
//     return element !== 2;
// });
// console.log(VALUE); // [10, "Gaston", "Lucas", "Kim", "Helen"]

//REDUCE
//Aplica una función a un ACUMULADOR y a cada elemento del array (de izquierda a derecha) para reducirlos a un único valor. Es útil cuando queremos realizar CÁLCULOS O AGREGACIONES.
// const array = [2, 3 , 6, 10];
// const result = array.reduce((acumulator, element) => {
//     return acumulator * element;
// }, 20); //Notese la coma y el número luego del bloque de código.Aquí la operación comienza desde el número 20, si este N° no está se interpreta como 0.
// console.log(result); // 7200 -> 20 * 2 * 3 * 6 * 10 = 7200;

//SOME
//Comprueba si al menos 1 ELEMENTO DEL ARRAY cumple una CONDICIÓN ESPECIFICADA. Retorna un valor BOOLEANO.
// const array = [2, 8, "USA", 100];
// const result = array.some((element) => {
//     return element === "USA";
// });
// console.log(result); //true

//EVERY
//Comprueba si TODOS los elementos del array cumplen una CONDICIÓN ESPECIFICADA. Retorna un valor BOOLEANO. Similar al método "some()";
// const array = [1, 2, 3, 4, 100];
// const result = array.every((element) => {
//     return element < 200;
// });
// console.log(result); // true