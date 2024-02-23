//spread operator 
let arr = [1,2,3]
let arr2 = [4,5]

let new_array = arr + arr2;

let new_spread_array = [...arr,...arr2];

console.log(new_array);
console.log(new_spread_array);
new_spread_array.push(6);
console.log(new_spread_array);

let arr3 = [...arr,7,8];
console.log(arr3);