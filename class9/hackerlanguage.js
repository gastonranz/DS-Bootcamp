let word3 = process.args[2];
let word = "ai my name is Gaston Ranz";
let word2 = "";
const abc = "abcdefghijklmnopqrstuvwxyz"

for(let i = 0; i < word.length; i++) {
    let j = 0;
    while(word[i].toLowerCase() != abc[j]) {
        j++;
    }
    word2 += conversor(j);
}

console.log(word2);

function conversor(j) {
    const abcArray = words();
    if(abc[j] === "a") {
        word2 = abcArray.a[numRandom(abcArray.a)];
    } else {
        word2 = abcArray.c[2];
    }
    return word2;
}

function words() {
    const abcArray = {
        a : [4, "/\\", "@", "/-\\", "^", "aye", "(L", "Д"],
        b : ["I3", 13, "|3", "ß", "!3", "(3", "/3", ")3", "|-]", "j3"],
        c : [")", "|)", "(|", "[)", "I>", "|>", "T)", "I7", "cl"],
        d : ["[", "¢", "{", "<", "(", "©"],
        e : ["3", "&", "£", "€", "ë", "[", "|=-"],
        f : ["|=", "ƒ", "|#", "ph", "/=", "v"],
        g : ["&", "6", "(_+", "9", "C-", "ge", "(?", "[,", "<-", "(."],
        h : ["#", "/-/", "[-]", "]-[", ")-(", "(-)", ":-:", "|~|", "|-|", "]~["],
        i : ["1" ,"[" ,"|" ,"!" ,"e" ,"3" ,"]["],
        j : [",_|", "_|", "._|", "._]", "_]", ",_]", "]", ";", "1"],
        k : [">|", "|<", "/<", "1<", "|c", "|(", "|{"],
        l : ["1", "£", "7", "|_", "|"],
        m : ["/\\/\\", "/V\\", "JVI", "[V]", "[]V[]", "|\\/|", "^^", "<\\/>", "{V}", "(v)"],
        n : ["^/", "|\\|", "/\\/", "[\\]", "<\\>", "{\\}", "|V", "/V", "И", "^"],
        o : ["0", "Q", "()", "oh", "[]", "p", "<>", "Ø"],
        p : ["|*", "|o", "|º", "?", "|^", "|>", "|", "9", "[]D", "|°"],
        q : ["(_,)", "9", "()_", "2", "0_", "<|", "&"],
        r : ["I2", "|`", "|~", "|?", "/2", "|^", "lz", "|9", "2", "12"],
        s : ["5", "$", "z", "§", "ehs", "es", "2"],
        t : ["7", "+", "-|-", "']['", "†", "\"|\"", "~|~"],
        u : ["(_)", "|_|", "v", "L|", "µ", "บ"],
        v : ["\\/", "|/", "\\|"],
        w : ["\\/\\/", "VV", "\\N", "'//", "\\\\'", "\\^/", "(n)", "\\V/", "\\X/", "\\|/"],
        x : ["><", "Ж", "}{", "ecks", "×", "?", ")(", "]["],
        y : ["j", "`/", "Ч", "7", "\\|/", "¥", "\\//"],
        z : ["2", "7_", "-/_", "%", ">_", "s", "~/_", "-\\_", "-|_"]
    };
    return abcArray;
}

function numRandom(letter) {
    let random = parseInt(Math.random() * letter.length);
    return random;
}

// function numRandom(letter) {
//     let random = parseInt(Math.random() * 10);
        
//     while(random >= letter.length) {
//         random = parseInt(Math.random() * 10);
//     }
//     return random;
// }