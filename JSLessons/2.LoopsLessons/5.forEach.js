let ary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
let new_array = ary.split(" ");
new_array.forEach(myFunction);//callback function

function myFunction(item,index,arr){
//    console.log(index + ": "+ item);
   arr[index] = "Hello" + item;
}

console.log(new_array);
//https://www.hackerrank.com/domains/tutorials/10-days-of-javascript