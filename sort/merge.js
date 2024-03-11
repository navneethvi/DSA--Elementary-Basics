function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return mergeInPlace(left, right, arr)
}

function mergeInPlace(left, right, arr) {
    let i = 0
    let j = 0
    let k = 0
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++]
        } else {
            arr[k++] = right[j++]
        }
    }

    while (i < left.length) {
        arr[k++] = left[i++]
    }

    while (j < right.length) {
        arr[k++] = right[j++]
    }
    return arr
}

const array = [8, 3, 5, 1, 9, 2, 7, 4, 6];
console.log("Original array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);