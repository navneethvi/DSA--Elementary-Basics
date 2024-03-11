// Array Traversal

// function myArray(arr){
//     for(let i=0;i<arr.length-;i++){
//         console.log(arr[i]);
//     }
// }

// Array Insertion

// function myArray(arr){
//     let elem = 10
//     let pos = 2
//     for(let i=arr.length-1;i>=pos;i--){
//         arr[i]=arr[i-1]
//     }
//     arr[pos-1] = elem
//     console.log(arr);
// }   

// Array Deletion

// function myArray(arr){
//     let pos = 3
//     for(i=pos;i<arr.length;i++){
//         arr[i] = arr[i+1]
//     }
//     arr.length = arr.length-1
//     console.log(arr);
// }

// Array Search 

// function myArray(arr) {
//     let elem = 5
//     for (i = 0; i < arr.length; i++) {
//         if(arr[i]===elem) return i
//     }
//     return -1
// }

// Array Update

// function myArray(arr){
//     let pos = 2
//     let val = 10
//     arr[pos-1] = val
//     console.log(arr);
// }

// function will output pairs of numbers whose sum equals val

// function myArray(arr){
//     let val = 10
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i] + arr[j] === val){
//                 console.log(arr[i], " ", arr[j]);
//             }
//         }
//     }
// }



// SecondLargest element

// (1) Brute Force Approch


// function secondLargest(arr) {
//     let uniqueArray = Array.from(new Set(arr))
//     uniqueArray.sort((a, b)=>b-a)
//     if (uniqueArray.length >= 2) {
//         return uniqueArray[1]
//     } else {
//         return -1
//     }
// }

// (2) Optimised Approch

// function secondLargest(arr) {
//     let largest = Number.NEGATIVE_INFINITY
//     let secondLargest = Number.NEGATIVE_INFINITY
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondLargest = largest
//             largest = arr[i]
//         }else if(arr[i]!==largest && arr[i] > secondLargest){
//             secondLargest = arr[i]
//         }
//     }
//     return secondLargest
// }



// Swapping elements in an array

// function swap(arr, index1, index2) {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
// }


// Rotating an array by swapping elements

// function rotateArray(arr, k) {
//     k = k % arr.length
//     for(i=0;i<k;i++){
//         let back = arr.pop()
//         arr.unshift(back)
//     }
//     return arr
// }

// Pure Rotating an array by swapping elements

// function rotateArrayPure(arr, k){
//     k = k % arr.length
//     for(let i=0;i<k;i++){
//         let temp = arr[i]
//         for(let j=1;j<arr.length;j++){
//             arr[j-1] = arr[j]
//         }
//         arr[arr.length-1] = temp
//     }
//     return arr
// }

