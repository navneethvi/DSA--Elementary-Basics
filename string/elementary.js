let str = "apple"

function rotateString(str, k) {
    k = k % str.length
    let arr = str.split('')
    for(let i=0;i<k;i++){
        let temp = arr[i]
        for(let j=1;j<arr.length;j++){
            arr[j] = arr[j+1]
        }
        arr[arr.length-1] = temp
    }
    return arr.join('')
}

function reverse(arr, start, end){
    while(start<end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}

console.log(rotateString(str, 1));


function swapString(str, i, j){
    let arr = str.split('')
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr.join('')
}

console.log(swapString(str, 0, 4));