function rotateArray(arr, k){
    k = k%arr.length
    for(i=0;i<k;i++){
        const back = arr.pop()
        arr.unshift(back)
    }
    return arr
}

console.log(rotateArray([1,2,3,4,5], 2));