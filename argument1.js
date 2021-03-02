function cal (){
    var sum = 0
for( i = 0 ; i< arguments.length; i++){
    sum += arguments[i]
}
console.log(sum)
}

cal (2,3,4)