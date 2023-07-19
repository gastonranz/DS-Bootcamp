let num = 0;
let limit = 100;

console.log("hi");

for(let i = 0; i < limit; i++) {
    num++;
    let modulo3 = num % 3 === 0;
    let modulo5 = num % 5 === 0;
    
    if(modulo3 && modulo5) {
        console.log("FizzBuzz")
    } else if(modulo3) {
        console.log("Fizz");
    } else if(modulo5) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
