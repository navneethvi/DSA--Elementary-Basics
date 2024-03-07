function partition(arr, start, end) {
    let pivot = arr[end]
    let i = start - 1
    for (let j = start; j < end; j++) {
        if(arr[j]<pivot){
            i++
            swap(arr, i, j)
        }
    }
    swap(arr, i+1, end)
    return i+1
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function quickSort(arr, start = 0, end = arr.length - 1){
    if(start < end){
        const pivotIndex = partition(arr, start, end)
        quickSort(arr, start, pivotIndex - 1); 
        quickSort(arr, pivotIndex + 1, end); 
    }
}


let arr = [-6, 20, 8, -2, 4];
quickSort(arr);
console.log(arr);