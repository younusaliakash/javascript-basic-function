///**Argument of Function */

function fcb ( a, b ,c){
    var result = a +  b + c
    console.log(result)
}

fcb( 6 ,4, 6)

var arr1 = [ 3,4,5]
var arr2 = [ 5,6,7,9]
var arr3 = [ 4,8,4,7]
var arr4 = [1,2]

// var sum = 0
// for( i = 0 ; i< arr1.length; i++){
//     sum += arr1[i]
// }
// console.log(sum)

function cal (arr){
    var sum = 0
for( i = 0 ; i< arr.length; i++){
    sum += arr[i]
}
console.log(sum)
}

cal (arr1)
cal (arr3)