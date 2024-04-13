function biggestHalf(input) {
 let sorted = input.sort((a,b) => a-b)
let final = sorted.slice(sorted.length/2)
return final
   
}
console.log(biggestHalf([3, 19, 14, 7, 2, 19, 6]));
//biggestHalf();