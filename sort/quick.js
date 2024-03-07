function quickSort(arr) {
    if(arr.length<=1){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let right = []
    let left = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [-6, 20, 8, -2, 4]

console.log(quickSort(arr));