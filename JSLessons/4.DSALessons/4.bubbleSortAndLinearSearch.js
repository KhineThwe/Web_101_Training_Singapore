function bubbleSort(numbers){
    let n = numbers.length;
    for(var i=0;i<n;i++){
        for(var j=0;j<(n-i-1);j++){
            if(numbers[j] > numbers[j+1]){
                [numbers[j],numbers[j+1]] = [numbers[j+1],numbers[j]]
            }
        }
}
}

function linearSearch(numbers,targetNumber){
   for(let number of numbers){
    if(number === targetNumber){
        return true;
    }
   }
   return false;
}

let numberList = [5,2,8,1,3,9]
let targetNumber = 99
bubbleSort(numberList);
console.log("After sorting list: ",numberList);
let isFound = linearSearch(numberList,targetNumber);

if(isFound){
    console.log(`The number ${targetNumber} is found in the list`);
}else{
    console.log(`The number ${targetNumber} is not found in the list: `);
}
