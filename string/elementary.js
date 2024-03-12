let str = "apple"

function rotateString(str, k) {
    k = k % str.length
    let arr = str.split('')
    reverse(arr, 0, arr.length-1)
    reverse(arr, 0, k-1)
    reverse(arr, k, arr.length-1)
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

console.log(rotateString(str, 2));


function swapString(str, i, j){
    let arr = str.split('')
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr.join('')
}

console.log(swapString(str, 0, 4));