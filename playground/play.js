// function binarySearch(arr, value, left = 0, right = arr.length-1){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)

//     if(arr[mid]===value){
//         return mid
//     }else if(arr[mid]<value){
//         return binarySearch(arr, value, left+1, right)
//     }else{
//         return binarySearch(arr, value, left, right-1)
//     }
// }

// console.log(binarySearch([1,2,3,4,5,6], 1));

let arr = [5, 4, 3, 2, 1, 0]

// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp 
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }

// console.log(bubbleSort(arr));


