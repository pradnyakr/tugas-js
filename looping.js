var num = 10;
var temp = "";

for(var i = 1; i <= num; i++) {

    if(num % i == 0) {
       var temp = temp + "," + i
       var hasil = temp.substring(1)
    }
}
console.log("=================================\n")
console.log("Results\n"  + hasil + "\n")

console.log("=================================\n")

var n = 5; 
var temp = "";
for(var i = 0; i < n; i++){
    for(var j = 0; j <= i; j++){
    if (j % 2 === 0) {
        temp =  temp + "#";
    }
    else {
        temp = temp + "X";
}
}
console.log(temp + "\n")
temp=""
}

console.log("=================================\n")

var input = 5;
var temp = "";
for(var i = 0; i < input; i++){
    for(var j = 0; j < input; j++){
         if (i >= 1  && j >= 1 && j < 4 && i <= 3) {
            temp =  temp + " ";
    }
    else {
        temp = temp + "#";
}
}
    console.log(temp)
    temp = ""
}
console.log("\n=================================\n")