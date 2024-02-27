function binarySearch(arr, value, left = 0, right = arr.length-1){
    if(left>right){
        return -1
    }
    let mid = Math.floor((left+right)/2)

    if(arr[mid]===value){
        return mid
    }else if(arr[mid]<value){
        return binarySearch(arr, value, left+1, right)
    }else{
        return binarySearch(arr, value, left, right-1)
    }
}

console.log(binarySearch([1,2,3,4,5,6], 1));