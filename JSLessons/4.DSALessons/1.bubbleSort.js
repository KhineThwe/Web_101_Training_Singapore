function bubbleSort(arr){
   for(var i=0;i<arr.length;i++){
    for(var j=0;j<(arr.length-i-1);j++){
        if(arr[j] > arr[j+1]){
            //swap
            //234 j -> 43 j+1
            var temp = arr[j]//234
            arr[j]= arr[j+1]// 43 43
            arr[j+1] = temp// 43 234
        }
    }
   }
   console.log(arr);
}
var arr = [234,43,55,63,5,6,235,547]

bubbleSort(arr);




