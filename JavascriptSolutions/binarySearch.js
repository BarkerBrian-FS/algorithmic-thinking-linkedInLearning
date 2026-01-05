function binarySearch(arr, target){
    lowVal = 0;
    highVal = arr.length - 1;
    while (lowVal <= highVal){
        let midPoint = Math.floor((lowVal + highVal) /2)
        if (arr[midPoint] === target){
            return arr[midPoint]
        }else if(arr[midPoint] < target){
            lowVal = arr[midPoint] +1
        } else{
            highVal = arr[midPoint] -1
        }
    }
    return -1
}