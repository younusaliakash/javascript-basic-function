///**inner function */

// function something(msg, name){
//     function sayhi(){
//         console.log( msg, name)
//     }
//     sayhi()
// }

// something('Good Evening', 'Younus Ali')

function something(msg, name){
    function getFristName(){
        if(name){
            return name.split(' ') [0]
        } else{
            return ' '
        }
    }
    var massage = msg + ' ' + getFristName()
    console.log(massage)
}

something('Good Evening', 'Tanvir Reza Tonmoy')
