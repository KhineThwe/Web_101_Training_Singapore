const person = {fname:"John",lname:"Doe",age:25}
let text = "";

for(let x in person){
    text += person[x];
}
console.log(text);


const numbers = [45,9,4,16,25];
let txt = "";
for(let x in numbers){
    txt += numbers[x];
}
console.log(txt);