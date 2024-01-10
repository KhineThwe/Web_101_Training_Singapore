let name = "Mg Mg";
console.log(name[0]);

let names = ["Mg Mg", "Aung Aung", "Su Su", 20, true];

console.log(names[2]);

console.log(names.length);

let twod_array = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(twod_array.length);
console.log(twod_array[0][1]);
console.log(twod_array[1][2]);

let new_array = new Array("car", "airplane");
console.log(new_array);
new_array.push("bus"); //adding element at the end
console.log("After pushing", new_array);
new_array.unshift("jet"); //adding element at starting place
console.log("After unshifting", new_array);
// [ 'jet', 'car', 'airplane', 'bus' ]
new_array[4] = "train";
console.log("Index 4 ->element", new_array);
new_array[6] = "shinkansen";
console.log("Index 6 ->element", new_array);
// Index 6 ->element [
//   'jet',
//   'car',
//   'airplane',
//   'bus',
//   'train',
//   <1 empty item>,
//   'shinkansen'
// ]
// Removing element
new_array.pop();
console.log(new_array);
new_array.shift();
console.log(new_array);
