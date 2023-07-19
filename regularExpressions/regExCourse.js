// const regex = /^a.+$/;
// const text = "ai my name is Gastón Rana";
// const validation = regex.test(text);

// if (validation) {
//     console.log("--- Correct ---");
// } else {
//     console.log("--- Incorrect ---");
// }

// const regex2 = /<hi>.*?<\/hi>/g;
// const text2 = "<hi>hola</hi><hi>hola2</hi><hi>hola3</hi>";

// console.log(text2.match(regex2));

// const regex3 = /(Kim|Mitchelle)(?=\s\w+)/g;
// const text3 = "Kim Wilde, Kim Basinger, Kim Carnes, Mitchelle Pfeiffer";

// console.log(text3.match(regex3));

const text = "Este es un texto";
const regex = /^[a-zA-Z\u00E0-\u00FC ]+$/;

if(regex.test(text)) {
    console.log("This is a text")
} else {
    console.log("This is not a text")
}

const dirtyText = "Este es un texto 98242498 2942479827 que 24234234tiene 2342342342 23423 234234  más23423 texto 23423423 aquí."
const cleanText = dirtyText.replaceAll(/\d+/g,"");
cleanText.replaceAll(/ +/g,"");

console.log(cleanText);

const saludo = "<greetings>" + 
    "<wave>hi</wave>" +
    "<wave>hi2</wave>" +
    "<wave>hi3</wave>" +
    "<wave>hi4</wave>" +
    "<wave></wave>" +
"</greetings>";

const waves = saludo.match(/<wave>.*?<\/wave>/g);
waves.map(e=>e.replace(/<wave>|<\/wave>/g,""));

console.log(waves);

const text4 = "This 2is3 a 3tex3t that 3con3tai2ns2 2a2 2lot2 2of5 i5nf5ormation.";
console.log(text4.match(/\d[a-zA-Z]{2}\d/g).length);