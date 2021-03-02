///**resturn */

function cal (){
    var sum = 0
for( i = 0 ; i< arguments.length; i++){
    sum += arguments[i]
}
return sum
}

var result = cal ( 1,10,500)
console.log(result)

function info( name, email){
    return{
        Name : name,
        Email: email

    }
}

var information = info( 'Younus ALi Akash ' , 'younusaliakash8@gmail.com')
console.log(information)