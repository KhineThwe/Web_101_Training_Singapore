let fruits = ["apple", "mango", "cherry"];
let juice = ["orange juice"];
// fruits.sort() // ascending order
fruits.sort().reverse(); //descending order
console.log(fruits);

let position = fruits.indexOf("mango");
console.log(position);

let concat_array = fruits.concat(juice);
console.log(concat_array);

console.log(fruits);
let slicing_result = fruits.slice(1);
console.log(slicing_result);
slicing_result.splice(1, 0, "Kiwi", "Lemon");
console.log("After Slicing : ", slicing_result);

slicing_result.splice(1, 2);
console.log("After Removing: ", slicing_result);
