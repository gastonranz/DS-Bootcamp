//1. Imagina que res un chef y tienes un pedido de 100 galletitas para enviar. Tienes el problema que en tu horno solamente entra 1 sola bandeja donde caben 10 galletitas. Tu trabajo como chef será ir horneando tandas de 10 en 10 hasta completar el pedido de 100 galletitas.

//2. El local ha comprado un nuevo horno, por lo cual el chef puede cocinar 20 galletitas en simultáneo, modifica tu programa para que soporte este nuevo número de producción de galletitas.

//3. El juego consiste en que el usuario debe adivinar un número entre 0 y 100.
//Cada vez que el usuario ingresa un número la aplicación debe indicar:
//El número {numero_ingresado} es mayor al que debes adivinar.
//El número {numero_ingresado} es menor al que debes adivinar.
//Ganaste: El número era {numero_ingresado} y lo hiciste en {intentos} intentos.

//1.
let total = 100;
let cookies = 0;
let bandeja = 10;
let i = 0;

while(cookies < total) {
    cookies += bandeja;
    i++;
}
console.log(`La cantidad de tandas que tuve que hornear del total de ${cookies} galletitas fueron ${i} tandas de 10 galletas en cada bandeja para completar el pedido.`);

//2.
cookies = 0;
bandeja = 20;
i = 0;
while(cookies < total) {
    cookies += bandeja;
    i++;
}
console.log(i)

//3.
let numbers = 100;
let player = parseInt(process.argv[2]);
let pc = parseInt(process.argv[3]);
let count = 0;

if(player >= 0 && player <= 100 && pc >= 0 && pc <= 100) {
    
        if(player > pc) {
            console.log("Your number is bigger than mine, try again!")
            player = process.argv[2];
        } else if(player < pc) { 
            console.log("Your number is smaller than mine, try again!")
            player = process.argv[2];
        } else {
            console.log("Congratulations, you've reached the same number as mine!")
        }
} else if(player < 0 || player > 100) {
    console.log("Please, type a player number among \"0\" and \"100\"!")
} else {
    console.log("Please, type a pc number among \"0\" and \"100\"!")
}




// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let numbers = 100;
// let player = parseInt(process.argv[2]);
// let pc = parseInt(process.argv[3]);
// let count = 0;

// if (player >= 0 && player <= 100 && pc >= 0 && pc <= 100) {
//   rl.setPrompt('Enter your number: ');

//   rl.on('line', (input) => {
//     const newNumber = parseInt(input);

//     if (newNumber >= 0 && newNumber <= 100) {
//       count++;

//       if (newNumber > pc) {
//         console.log("Your number is bigger than mine, try again!");
//       } else if (newNumber < pc) {
//         console.log("Your number is smaller than mine, try again!");
//       } else {
//         console.log("Congratulations! You guessed the number.");
//         rl.close();
//       }

//       if (count >= 10) {
//         console.log("You've reached the maximum number of attempts. Exiting the game.");
//         rl.close();
//       } else {
//         rl.prompt();
//       }
//     } else {
//       console.log("Please, type a number among \"0\" and \"100\"!");
//       rl.prompt();
//     }
//   });

//   rl.prompt();
// } else if (player < 0 || player > 100) {
//   console.log("Please, type a player number among \"0\" and \"100\"!");
// } else {
//   console.log("Please, type a pc number among \"0\" and \"100\"!");
// }