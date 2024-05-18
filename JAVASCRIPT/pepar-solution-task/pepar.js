{
                var a = "Hello";
                var sum = 0;
                for(var i = 0; i < a.length;i++){
                    sum += (a.charCodeAt(i) - 'a'.charCodeAt(0));
                }
                console.log(sum); // 15
}

{
    const obj1 = {name:"hello",age:16};

    const obj2 = {name:"hello",age:16};

    console.log(obj1 == obj2);  // false
}

{
    function show(...args){
        let sum = 0;
        for(let i in args){
            sum += args[i];
            console.log("total is" , sum);
        }
    }

   show(40,11,5)
//    total is 40
//    total is 51
//    total is  56
}

{
    // let a = [11,22,33,44];

    // let b = [...a];

    // b.push(66);
    
    // console.log(a.length === b.length);  //false
}

{
    var fruits = ["apple" , "mango" , "watermelon" , "orange"];

    var fruits_len = fruits.map((ele) => ele.length);

    console.log(fruits_len);
}

{
    let chars = ['A','B','A','C','B' ,'E' ,'D' ,'E'];

    let uniqueChars = [...new Set(chars)];

    console.log(uniqueChars); // a,b,c,e,d--output
}

{
// var a = "Scaler";
// var result = a.substring(2, 4);
// document.write(result);
// console.log(result);  //al

}

// 1 polindrome string

// dad -> dad ->true  -> polindrome string 
// level -> level -> true
// noon -> noon -> true
// jaggi -> iggaj -> false ->not polindrome string

//case 1
// function isPal(str){
// let reverse = str.split("").reverse().join("");

// return str.toLowerCase() === reverse.toLowerCase();
// }
// console.log(isPal("level")); 

// case 2

// function isPal2(str){
//   let newstr = str.toLowerCase();

//   let left = 0;
//   let right = newstr.length -1;

//   while(left < right){
//     if(newstr[left] !== newstr[right]) return false;

//     left++;
//     right--;
// }
// return true;
// }
// console.log(isPal2("suresh"));

// 2 maximun number in array
// {
//     let array = [10 , 20 , 5 ,3 ,45 , 99, 30 , 40 , 50]
//     let max = array[0]

//     for(let i = 0 ; i < array.length;i++){
//         if(max<array[i]){
//             max = array[i]
//         }
//     }
//     console.log("max number is" + " " + max);
// }

// max  min
{
    const someNumber = [12, 32, 43 , 85 , 65, 75];

    const min = Math.min(...someNumber);
    const max = Math.max(...someNumber);

    console.log("min" , min);
    console.log("max" , max);
}





{
    // (function(){
    //     setTimeout(()=> console.log(1),2000);
    //     console.log(2);
    //     setTimeout(()=> console.log(3),0);
    //     console.log(4);
    //    })();
}

// if statements
{
    // let Age = 18;

    // if(Age < 18){
    //     console.log("you are not eligible for driving");
    // }
}
// if else statements
{
    // let age = 18;

    // if(age >= 18){
    //     console.log("you are mature");
    // }
    // else{
    //     console.log("you are child");
    // }
}
// if else if statements
{
//     let age = 19;
//     let votingcard = false;

//     if(age > 18){
//         console.log("you are eligible for voting!");
//     }
//    else if(votingcard){
//         console.log("you are not eligible for  voting ");
//     }
//     else{
//         console.log("you are voting right now");
//     }
}
// for loop
{
    // for(let i = 0;i <= 10;i++){
    //     console.log("i am jaggi" + i);
    // }
}

// while loop
{
    // let n = 0;
    // let x = 10;

    // while(n<=x){
    //     console.log("hello sir !" + n);
    //     n++;
    // }
}

// do while loop
{
    // let i = 10;
    // let x = 0;

    // do{
    //     console.log("hello javascript!" + x);
    //     x++;
    // }
    // while(x <= i);
}

// for in loop
{
    // const object1 = {
    //     Fname:"jaggi",
    //     Lname:"shiyal",
    //     Age:22
    // }
    // console.log(object1);
    // let data1 = object1["Lname"]
    // console.log(data1);

    // let key = "";

    // for(key in object1){
    //     console.log(`${key} :${object1[key]}`);
    // }
}

// javascript pepar solution 02-05-24

// 1 
{
    var x = 5;
    var y = "5";
    if(x===y){
        console.log("Equal");
    }else{
        console.log("not equal");
    }
}

// 4
{
    var x = 5;
    x++;
    console.log(x);
}// 6 
{
    var arr1 = [1,2,3];
    var arr2 = arr1;
    arr1.push(4)
    console.log(arr2);
}   