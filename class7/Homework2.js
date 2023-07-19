// En el rango de 0 a 10000 la idea es que la máquina encuentre un número ingresado por el usuario desde la consola en la menor cantidad de intentos posibles.
// tarea para entregar en clase 9.

let num = process.argv[2]; //Better -> let num = process.argv[2].toString();
let limit = 10000;
let count = 0;
let digit = 9;
let numbers = [];
let result = [];
let numStr = num.toString();

for(let i = 0; i < numStr.length; i++) {
    numbers.push(parseInt(numStr.charAt(i)));
    //numbers[i] = parseInt(numStr.charAt(i)); -> It's the same.
}    

if(num <= limit) {
    for(let i = 0; i < numbers.length; i++) {
        let j = 0;
        while(numbers[i] != j) {
            count++;
            j++;
        }
        result[i] = numbers[i];
        count++;
    }
    console.log(`----- Count was used ${count} times -----`);
} else {
    console.log(`Please, type a number among 0 and 10000.`)
}


// count = 0;
// for(let i = 0; i <= limit; i++) {
//     if(i === parseInt(num)) {
//         console.log(`The number was: ${i}`);
//         console.log(`----- Count was used ${count} times -----`)
//     }
//     count++;
// }

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}