// PSEUDOCODE no 1
// STORE variable watches WITH array ["Swiss Army", "Daniel Wellington", "Dublot"]
// STORE variable temp WITH ""
// for looping i EQUAL 0, i LESS THAN length of variable watches, increment i
// IF i EQUAL length of variable watches SUBTRACTION 1
// variable temp EQUAL temp ADD "dan" ADD variable watches[i] ADD "."
// ELSE 
// variable temp ADD variable watches[i] ADD ", "
// DISPLAY "saya punya jam" ADD variable temp

let watches= ["Swiss Army", "Daniel Wellington", "Dublot"];
let temp = "";
for ( i = 0; i < watches.length; i++){
    if (i == watches.length - 1){
        temp = temp + "dan " + watches[i] + "."
    }
    else {
    temp = temp + watches[i] +  ", " 
}
}
console.log('saya punya jam ' + temp + "\n");

// PSEUDOCODE no 2
// STORE variable fruits WITH array ["cherry","blueberry","avocado","apple","cranberry"]
// STORE variable map EQUAL ((m, a) => (a.forEach(s => {
//     buat variable a samadengan m.get(s[0]) || [];
//     m.set(s[0], (a.push(s), a));
//   }), m))(new Map(), fruits);
// DISPLAY map get variable a
// DISPLAY map get variable b
// DISPLAY map get variable c


let fruits = ["cherry","blueberry","avocado","apple","cranberry"]
let map = ((m, a) => (a.forEach(s => {
    let a = m.get(s[0]) || [];
    m.set(s[0], (a.push(s), a));
  }), m))(new Map(), fruits);
  
  console.log(map.get("a"));
  console.log(map.get("b"));
  console.log(map.get("c"));

// PSEUDOCODE no 3
// STORE variable kalimat WITH "belajar bersama dunia coding yuk"
// STORE variable tempStr WITH ""
// STORE variable tempArray = []
// FOR variable i EQUAL 0; i LESS THAN length of variable kalimat; INCREMENT i
// IF kalimat[i] NOT EQUAL TO " "
// variable tempstr ADD EQUAL TO kalimat[i]
// ELSE 
// variable tempArray.push(tempstr)
// variable tempStr = ""

// IF i EQUAL TO length of variable kalimat subtraction 1
// variable tempArray.push(tempstr)
// variable tempStr = ""

// DISPLAY variable tempArray

var kalimat = "belajar bersama dunia coding yuk";
var tempStr = "";
var tempArray = []

for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== " ") {
        tempStr += kalimat[i]
    } else {
        tempArray.push(tempStr)
        tempStr = ""
    }
    if (i === kalimat.length - 1) {
        tempArray.push(tempStr)
        tempStr = ""
    }
}
console.log("\n" + tempArray)