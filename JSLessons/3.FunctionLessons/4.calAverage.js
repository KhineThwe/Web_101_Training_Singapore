function calAverage(num){
   var total = 0;
   for(var i=0;i<numbers.length;i++){
    total+=numbers[i];
   }
   let avgNo = total/numbers.length;
   return avgNo;
}

var numbers = [1,2,3,4];
var average = calAverage(numbers);
console.log("Average value: ",average);