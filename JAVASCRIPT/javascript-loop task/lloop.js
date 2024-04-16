
// 1st Print the numbers from 0 to 15.

// while

{
    // let a = 0;
    // let b = 15;

    // while(a <= b){
    //     console.log(a);
    //     a++;
    // }
}
   
// 2nd Print the numbers from 12 to 24.

// do - while

{
    // let x = 12;
    // let y = 24;

    // do{
    //     console.log(x);
    //     x++;
    // }
    // while(x <= y);
}

// 3rd  Print the ODD numbers from 7 to 31.

{
    // for(let p = 7; p <= 31; p+=2){
    //     console.log(p);
    // }
}

// 4th  Print the EVEN numbers from 10 to -20.

{
    // for(let q = 10; q >= -20; q-=2){
    //     console.log(q)
    // }
}

// 5th —Iterate through all numbers from 1 to 45. Print the
// following:


let y = 1;
let z = 45;

for(y = 1; y <= z ; y++){
    if(y % 3 == 0){
        console.log("fizz");
    }
    else if(y % 5 == 0){
        console.log("buzz");
    }
    else if(y % 3 == 0 && y % 5 == 0){
        console.log("fizzbuzz");
    }
    else{
        console.log(y);
    }
}