const arr = [10, 5, 4, 3, 2, 1]

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}

console.log(bubbleSort(arr));