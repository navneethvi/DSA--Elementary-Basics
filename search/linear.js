let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 10

// Linear Search using iteration

function linearSearch(arr, data) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === data) return i;
    }
    return -1
}

console.log(linearSearch(arr, target));


// Linear Search using recursion

function linearSearchRecursive(arr, data, index = 0) {
    if (index >= arr.length) {
        return -1
    }
    if (arr[index] === data) {
        return index
    }
    return linearSearchRecursive(arr, data, index + 1)
}

console.log(linearSearchRecursive(arr, target));