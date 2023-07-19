
const text = process.argv[2];
console.log(text);

let suma = text.match(/(suma|plus|sumar|sumes|sumame|\+)\s*[porcon\s\-$%_#><\!\?\d]*\d+/ig);
let resta = text.match(/(resta|restar|restame|restes|\-)\s*[porymascon\s\-$%_#><\!\?\d]*\d+/ig);
let multiplicacion = text.match(/(multiplicar|multiplicacion|multiplo|múltiplo|multiplicación|multipliques|\*)(\s|por|con|y|\d)*\d+/ig);
let division = text.match(/(división|division|dividir|dividime|divídeme|divideme|dividas\/)(\s|por|con|y|\d)*\d+/ig);

const regex = /\d/g;
const regex2 = /\d{2,}/;
let result = 0;
let numbers = [];
let numSuma = [];
let numResta = [];
let numMultiplo = [];

if(suma && resta && multiplicacion) {
    let sumaResult = 0;
    let restaResult = 0;
    let multiploResult = 0;

    for(let i = 0; i < suma.length; i++) {
        numbers = suma[i].match(regex);
        numSuma.push(numbers);
        sumaResult += parseFloat(numSuma[i]);
    }
    for(let i = 0; i < resta.length; i++) {
        if(regex2.test(resta[i])) {
            restaResult = "";
            numbers = resta[i].match(regex);
            for(let i = 0; i < numbers.length; i++) {
                let num = [];
                num = numbers[i].match(regex);
                numResta.push(num);
                restaResult += parseFloat(numResta[i]);
            }
            result = sumaResult - parseFloat(restaResult);
        } else {
            for(let i = 0; i < resta.length; i++) {
                numbers = resta[i].match(regex);
                numResta.push(numbers);
                restaResult += parseFloat(numResta[i]);
            }
            result = sumaResult - restaResult;
        }
        
    }
    for(let i = 0; i < multiplicacion.length; i++) {
        if(regex2.test(multiplicacion[i])) {
            multiploResult = "";
            numbers = multiplicacion[i].match(regex);
            for(let i = 0; i < numbers.length; i++) {
                let num = [];
                num = numbers[i].match(regex);
                numMultiplo.push(num);
                multiploResult += parseFloat(numMultiplo[i]);
            }
            result = (sumaResult * parseFloat(multiploResult)) - restaResult;
        } else {
            for(let i = 0; i < multiplicacion.length; i++) {
                numbers = multiplicacion[i].match(regex);
                numMultiplo.push(numbers);
                multiploResult += parseFloat(numMultiplo[i]); //parseFloat gets a "String" value
                result = (sumaResult * multiploResult) - restaResult;
            }
        }
    }  
} else if(suma && resta) {
    let sumaResult = 0;
    let restaResult = 0;

    for(let i = 0; i < suma.length; i++) {
        numbers = suma[i].match(regex);
        numSuma.push(numbers);
        sumaResult += parseFloat(numSuma[i]);
    }
    for(let i = 0; i < resta.length; i++) {
        if(regex2.test(resta[i])) {
            restaResult = "";
            numbers = resta[i].match(regex);
            for(let i = 0; i < numbers.length; i++) {
                let num = [];
                num = numbers[i].match(regex);
                numResta.push(num);
                restaResult += parseFloat(numResta[i]);
            }
            result = sumaResult - parseFloat(restaResult);
        } else {
            for(let i = 0; i < resta.length; i++) {
                numbers = resta[i].match(regex);
                numResta.push(numbers);
                restaResult += parseFloat(numResta[i]);
            }
            result = sumaResult - restaResult;
        }
    }
} else if(suma && multiplicacion) {
    let sumaResult = 0;
    let multiplicacion = 0;

    for(let i = 0; i < suma.length; i++) {
        numbers = suma[i].match(regex);
        numSuma.push(numbers);
        sumaResult += parseFloat(numSuma[i]);
    }
    for(let i = 0; i < multiplicacion.length; i++) {
        if(regex2.test(multiplicacion[i])) {
            multiploResult = "";
            numbers = multiplicacion[i].match(regex);
            for(let i = 0; i < numbers.length; i++) {
                let num = [];
                num = numbers[i].match(regex);
                numMultiplo.push(num);
                multiploResult += parseFloat(numMultiplo[i]);
            }
            result = sumaResult * parseFloat(multiploResult);
        } else {
            for(let i = 0; i < multiplicacion.length; i++) {
                numbers = multiplicacion[i].match(regex);
                numMultiplo.push(numbers);
                multiploResult += parseFloat(numMultiplo[i]);
                result = sumaResult * multiploResult;
            }
        }
    } 
} else if(suma) {
    for(let i = 0; i < suma.length; i++) {
        numbers = suma[i].match(regex);
        numSuma.push(numbers);
        result += parseFloat(numSuma[i]);
    }
}
console.log("Your operation result is: " + result);