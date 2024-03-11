function rotateArray(arr, k) {
    k = k % arr.length
    for (i = 0; i < k; i++) {
        const back = arr.pop()
        arr.unshift(back)
    }
    return arr
}

// console.log(rotateArray([1,2,3,4,5], 2));

function rotateArrayPure(arr, k) {
    k = k % arr.length
    for (let i = 0; i < k; i++) {
        let temp = arr[0]
        for (let j = 1; j < arr.length; j++) {
            arr[j - 1] = arr[j]
        }
        arr[arr.length - 1] = temp
    }
    return arr
}

console.log(rotateArrayPure([1,2,3,4,5,6], 1));
