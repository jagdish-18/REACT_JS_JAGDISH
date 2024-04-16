// Javascript Function

// Basic Function In Javascript

function jaggi(){
    return (10 + 50)
}

console.log(jaggi());

function sum(a ,b){
    return a + b;
}

console.log("sum of A and B is",sum(10 ,10));

// Es6 Arrow Function

const sumof = () => 20 + 50;

console.log(sumof());

const addof = () => 25 + 25;

console.log(addof());

const multiof = () => 5 * 5;

console.log(multiof());

const subtof = () => 500 - 300;

console.log(subtof());

const multi = a => a * a;

console.log(multi(4));

const multipara = (a , b) => {
    console.log("hello");
    return a = a * b;
}

console.log(multipara(5 ,5));

// Es6 CallBack Function

function sayHello(){
    console.log("Hi , Hello!");
}

function sayBuy(){
    console.log("Buy Mango Immidiately ! Season has been gone");
}

function Multicall(){
    sayHello();
    sayBuy();
    return 10
}

console.log(Multicall());

// CallBack With Parameters

function sayHello(){
    console.log("hi , Hello");
}

function sayBuy(){
    console.log("Buy mango immidiately! Season has been gone");
}

function Multicall(a , b){
    sayHello();
    return a * b;
}

console.log(Multicall(5 , 5));
console.log(Multicall(10 ,10));

function Multicall1(a , b , CallBack){
    CallBack()
    return a * b;
}

console.log(Multicall1(5 , 10 ,sayBuy));

console.log(Multicall1(20 , 20 , sayHello));


// Es6 IIFE(immidiately invoked Function Expression)

// (
//     function sir(b){
//         return console.log(b *b)
//     }
// )(10)

// (
//     function sum(a ,b){
//         return console.log(a + b);
//     }
// )(10 , 20)


{
    const friendlyFunction = (
        function (){
            let greetCount = 10 ;
            return function () {
                console.log(`Hello ${greetCount} A`);
                return greetCount--;
            };
        }
    )();
   

    friendlyFunction();
    friendlyFunction()
}

