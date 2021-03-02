///*Expression*/
///**Normal Funtction */
// function add (a, b){
//     return a+b
// }

///**Expression Function */

var addition = function (a,b){
    return a+b
}

addition ( 15, 20)

setTimeout( function () {
    console.log('Result   show after 5 sec')
}, 5000)

var another = addition
console.log(another(50, 50))