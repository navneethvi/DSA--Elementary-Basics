let arr = [9, 2, 4, 5, 3, 2, 7, 6, 10, 4, 12, 4]

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

// console.log(bubbleSort(arr));

