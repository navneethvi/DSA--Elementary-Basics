let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 2

function binarySearch(arr, data) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        
        if (arr[mid] === data) {
            return mid
        } else if (arr[mid] < data) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

console.log(binarySearch(arr, target));