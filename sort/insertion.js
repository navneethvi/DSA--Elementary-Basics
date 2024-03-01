let arr = [3, 2, 6, 4, 7, 8, 1, 5]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j+1] = temp
    }
    return arr
}

console.log(insertionSort(arr));