//Crea un programa que permita desordenar un cubo mágico. Crea una estructura de datos para un cubo mágico de 3x3. Luego rellena tu estructura de datos de forma aleatoria cada una de las caras con seis colores: blanco, amarillo, azul, verde, rojo y naranja. Por último imprime todas las caras del cubo en este formato

//##Cara Frontal
// Rojo Blanco Verde
// Azul Rojo Azul
// Amarillo Verde Blanco

// ##Cara Superior
// Verde Verde Blanco
// Azul Azul Naranja
// Naranja Blanco Naranja

// ##Cara Inferior
// etc etc etc
// etc etc etc
// etc etc etc

// ##Genera tu lenguaje y tus movimientos
const colors = ["white", "yellow", "blue", "green", "red", "orange", "white", "yellow", "blue", "green", "red", "orange", "white", "yellow", "blue", "green", "red", "orange", "white", "yellow", "blue", "green", "red", "orange", "white", "yellow", "blue", "green", "red", "orange", "white", "yellow", "blue", "green", "red", "orange", "white", "yellow", "blue", "green", "red", "orange", "white", "yellow", "blue", "green", "red", "orange", "white", "yellow", "blue", "green", "red", "orange"];

const frontalCube = newArrayCube();
const rightCube = newArrayCube();
const leftCube = newArrayCube();
const upCube = newArrayCube();
const downCube = newArrayCube();
const backCube = newArrayCube();
const cube = [frontalCube, rightCube, leftCube, upCube, downCube, backCube];
let index = 0;

while(index < cube.length) {
    for(let j = 0; j < cube[index].length; j++) {
        let random = Math.floor(Math.random * 9);
        while(random >= colors.length) {
            random = Math.floor(Math.random * 9);
        }
        cube[index][j] = colors.splice(random, 1);
    }
    index++;
}

move(frontalCube, leftCube, backCube, rightCube);

function validation(data) {
    let regex = /\d/;
    const result = data.some((element) => {
    return regex.test(element);
    });
    return result;
}

function newArrayCube() {
    const cube = new Array(9);
    cube.fill(0);
    return cube;
}

function move(frontalCube, leftCube, backCube, rightCube) {
    const down = 3;
    const array = [];
    change(array, frontalCube, down);
    frontalCube = unshift(leftCube.splice(0, down), frontalCube);
    leftCube = unshift(backCube.splice(0, down), leftCube);
    backCube = unshift(rightCube.splice(0, down), backCube);
    rightCube = unshift(array.splice(0, down), rightCube);
    console.log(frontalCube);
    console.log(rightCube);
    console.log(leftCube);
    console.log(backCube);
}

function change(array, cube, down) {
    for(let i = 0; i < down; i++) {
        array[i] = cube.splice(i, down);
    }
}

// function unshift(array, array2) {
//     for(let i = 2; i >= 0; i--) {
//         array2.unshift(array[i]);
//     }
//     return array2;
// }

console.log(frontalCube);
console.log(rightCube);
console.log(leftCube);
console.log(backCube);
console.log(upCube);
console.log(downCube);
console.log(colors.length);
//hi

// while(validation(frontalCube) || validation(rightCube) || validation(leftCube) || validation(upCube) || validation(downCube) || validation(backCube)) {
//     let regex = /\d/;
//     let random = Math.floor(Math.random() * 9);
//     let random2 = Math.floor(Math.random() * 6);
//     while(random >= colors.length) {
//         random = Math.floor(Math.random() * 9);
//     }
//     if(regex.test(cube[random2][random]) && validation(cube[random2])) {
//         cube[random2][random] = colors.splice(random, 1);
//     }
//     if(colors.length === 1) {
//         let i = 0;
//         while(i < cube.length) {
//             for(let j = 0; j < cube[i].length; j++) {
//                 if(regex.test(cube[i][j])) {
//                     cube[i][j] = colors.splice(0, 1);
//                 }
//             }
//         }
//     }
// }