//Escribe un script que comience con una variable llamada hasta y cree un array con losprimeros números de la secuencia de Fibonacci. La secuencia de Fibonacci siempre comienza con los números 0 y 1, y cada número subsiguiente se calcula sumando los dosnúmeros anteriores.

const selection = parseInt(process.argv[2]);
let numbers = new Array(selection);
let num = 0;
numbers.fill(0);

for(let i = 0; i < numbers.length; i++) {
    if(num === 0) {
        numbers[i] = num;
        num++;
    } else if(num == 1) {
        numbers[i] = num + numbers[i - 1];
        num += numbers[i];
    } else {
        numbers[i] = numbers[i - 2] + numbers[i - 1];
    }
}

numbers.forEach((element) => {
    console.log(element); 
});

console.log(numbers);