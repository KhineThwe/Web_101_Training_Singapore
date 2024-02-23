// let array = ["two","thousand","twenty","four"];

// let lengths = array.map((s)=>s.length);


// console.log(lengths);

//another example
let arr = [3,4,5,6];

// function modify(num){
//     return num*10;
// }

// let modified_array = arr.map(modify);

// console.log(modified_array);

//another
// let modified_array1 = arr.map(function modify(num){
//     return num*10;
// })
// console.log(modified_array1);


//another with arrow function

let modified_array2 = arr.map(num=>num*10);
console.log(modified_array2);


let arr1 = [2, 3, 5, 7]

arr1.map(function(element, index, array){
    console.log(element);
    return element;
}, 80);