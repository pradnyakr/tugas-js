function getPrime(num) {
    let temp = [], result = [];
    for (let i=2;; i++) {
        let prime=true
      for (let j=2; j<i; j++) {
          if(i!=j && i%j==0){
              prime=false
          }
      }
      if(prime){
          result.push(i)
      }
      if(result.length==num){
          break;
      }
    }
    return result;
  }
  console.log("\n");
  console.log(getPrime(5));

//   ============================================================================= //
  
function triple(a, b, c){
    let triple = (a * a) + (b * b) ;
    let hitung = c * c;
    if (hitung == triple) {
    return true
}
return false
}
console.log("\n");
console.log(triple(3, 4, 5))
console.log(triple(3, 3, 3))
console.log("\n");

//   ============================================================================= //

function splitToArray(string) {
    a = string.toString();
    var arr=[];
    for (var i =0; i<a.length-1; i++) {
        arr.push(Number(a[i]+''+a[i+1]));
       }
    return arr;
    }
    
function findTheLargest(string){
let arrayNumbers = splitToArray(string);
for(var i=0;i<arrayNumbers.length;i++)
    {
         if(i == 0)
         { 
          var nilai = arrayNumbers[i];
         }
         else
         {
                if(arrayNumbers[i] > nilai)
                {
                    nilai = arrayNumbers[i];
                }
         }
    } 
    return nilai;
}

console.log(findTheLargest("5275789312"));
console.log(findTheLargest("313282787"));
console.log(findTheLargest("19"));
console.log(findTheLargest("7"));
console.log(findTheLargest());