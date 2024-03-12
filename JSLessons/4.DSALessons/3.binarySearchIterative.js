function binarySearch(arr,x){
    let start =0,end=arr.length - 1;

    while(start <= end){
        let mid = Math.floor(((start+end)/2));

        if(arr[mid] === x) return mid;
        else if(arr[mid] <x ){ 
           start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}
let arr = [1,3,5,7,8,9]
let x = 9;

let result = binarySearch(arr,x) ;
if(result === -1){
    console.log("Element not found");
}else{
    console.log("Element found at index"+result);
}
//iterative approach