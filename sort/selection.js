function selectionSort(arr){
    for(i=0;i<arr.length;i++){
        let minIndex = i
        for(j=1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
    }
}