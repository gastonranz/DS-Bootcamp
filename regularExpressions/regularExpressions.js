// contraseña simple numeros y letras
// contraseña media numeros, letras y al menos una mayuscula
// contraseña alta numeros, letras, al menos una mayuscula y caracter especial

// const password = "el que quieran"

function showExpRegPasswords() {
    const regularExpression = new RegExp("^[a-z0-9áéíóú]{5,15}$");
    const regularExpression2 = new RegExp("^(?=.*[0-9a-záéíóúA-ZÁÉÍÓÚ]){5,15}[0-9a-zA-ZáéíóúÁÉÍÓÚ]$");
    const regularExpression3 = new RegExp("^[0-9a-zA-ZáéíóúÁÉÍÓÚ]{5,15}$");
    const password = "ajssadjso3";
    const password2 = "";
    const password3 = "";

    console.log("Password 1: " + regularExpression.test(password) + "\nPassword 2: " + regularExpression2.test(password2) + "\nPassword 3: " + regularExpression3);
}

showExpRegPasswords();

var a = new RegExp("^at?e$");
var b = /Gas?ton(?! Ranz)/;
var c = /^[A-C]\w+\ses\s\w+/

console.log(a.test("ate"));
console.log(b.test("Gaston Ranz"));
console.log(c.test("Adriano es guapo"));



const dayOfWeek = "Tuesdayy";

switch (dayOfWeek) {
    case "Monday":
        console.log("Today is Monday, your week has just started!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    case "Wednesday":
        console.log("It's Wednesday!");
        break;
    case "Thursday":
        console.log("It's Thursday!");
        break;
    case "Friday":
        console.log("It's Friday!");
        break;
    default:
        console.log("It's weekend!!!");
}

let text = process.argv[2];
console.log(text);



// function showRegularExpression() {
//     var regularExpression = new RegExp("as?.a");
//     var text = "casamentero";
//     var message = "Patrón: \"as?.a\" ";
//     message += "¿Contiene \"casamentero\" el patrón (sub cadena)?: " + regularExpression.test(text) + "\n";
//     message += "¿Contiene \"Sabina\" el patrón (sub cadena)?: " + regularExpression.test("Sabina") + "\n";
//     message += "¿Contiene \"asa\" el patrón (sub cadena)?: " + regularExpression.test("asa") + "\n";
//     message += "¿Contiene \"as\" el patrón (sub cadena)?: " + regularExpression.test("as") + "\n";
//     message += "¿Contiene \"jksaslkjfoa\" el patrón (sub cadena)?: " + regularExpression.test("jksaslkjfoa");
//     return message;
// }

// console.log(showRegularExpression());
