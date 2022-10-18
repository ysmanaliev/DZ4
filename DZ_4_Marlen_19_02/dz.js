//1---------------------------------------------------------
function checkMax(a,b){
    if(a,b){
        return a
    } else {
        return b
    }
}
console.log(checkMax(5 , 10 ));

//2----------------------------------------------------

function findLetter(arg,b){
    var result = 0
        for(let a of arg){
        if(a.toLowerCase() === b){
            result+=1
        }
    }
    return result
}

console.log(findLetter('interpretin','e'))

// // 3--------------------------------------------------


function arifmetich(a,b){
    return (a+b)/2
}

console.log(arifmetich(344,432434))

// //4------------------------------------------------------------

var MN = [1,2,3,4,5,6,7,8,9]

function bigger(arr){
     return arr.filter(function(n){
       if(n>5){
        return n
       }
    })
}

console.log(bigger(MN));

// // 5 -------------------------------------------------------------------------------

var INNN = ["00101202215478","12504200000025","79451789841256","012375449753475635"]

 function checkInn(arr){
    arr.filter(function(inn){
        if((inn.length===14) && (inn[0]==='1' || inn[0]==='0'||inn[0]==='2')){
            return console.log(inn) ;
        }
    })
 }
 console.log(checkInn(INNN));

// //6 -----------------------------------------------------------
function reverse(arg){
    var newArr = [];
    for(var i = arg.length -1 ; i >= 0; i--){
        newArr.push(arg[i]);
    }
    return newArr.join('');
}
console.log(reverse('Hello'))