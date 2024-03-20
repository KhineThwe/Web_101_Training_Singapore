function swap(arr,min,i){
    [arr[min],arr[i]]=[arr[i],arr[min]]
}
function selectionSort(arr,n){
    let min;
    for(let i =0;i<n-1;++i){
        min = i;
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min!=i){
            swap(arr,min,i);
        }
    }
}
var arr = [64,25,12,22,11]
var n = arr.length;
console.log("Original array: ",arr);
selectionSort(arr,n);
console.log("After sorting: ",arr);
