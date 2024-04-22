// functin Apply() method

// syntax
// apply(thisarg)
// apply(thisarg ,argsArray)

// Examples apply method

// const max = Math.max.apply(null , [10,20,30,40,50,60])

// console.log(max);

// const min = Math.min.apply(null , [10,20,30,40,50,60])

// console.log(min);

// function sum(a , b){
//     return a * b
// }

// console.log(sum(5 , 5));

// // function.length

// function jaggi(a , b, c, d){

// }

// console.log(jaggi.length);

function sum(){
    let sum = 0;

    for(let i = 0; i >arguments.length; i++){
        sum+=arguments[i]
    }
    return sum
}

let result = sum.apply(null ,[10,20]);

console.log(sum());