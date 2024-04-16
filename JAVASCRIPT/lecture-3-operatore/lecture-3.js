// Assignement operatore 

// 1  Addition and Assignement 
{
    let a = 25;
    let b = 35;


    let z = a+=b;  // a = a + b;

    console.log(z);
    console.log(a);
}

// 2 Abstraction and Assignement
{
    let p = 40;
    let q = 20;
    let r = p-=q;  // p = p - q

    console.log(r);
}

// 3 multiplication and Assignement
{
    let m = 10;
    let n = 20;
    let o = m*=n;  // m = m * n;

    console.log(o);
    console.log(m);  // 200
}

// 4 Division and Assignement
{
    let x = 10;
    let y = 30;
    let z = x/=y;  // x = x / y;

    console.log(z); 0.33333
}

// 5 moduls and Assignement
{
    let r = 20;
    let o = 30;
    let p = r%=o;  // r = r % o;

    console.log(p);
}

// 6 Exponential and Assignement
{
    let n = 5;
    let o = 5;
    let p = n**o;  // n = n**y

    console.log(p);
}

// 7 Camparision operatore

// 1 doible equel to
{
 let a = 10;
 let b = 10;

 console.log(a==b); // true
}

// 2 not equel to
{
    let a = 10;
    let b = 10;
    
    console.log(a!=b);
}

// 3 Strict Equality operatore
{
    let a = 10;
    let b = 10;

    console.log(a===b); // true
}

// 4 Strict not Equality
{
    let a = 10;
    let b = 10;
    
    console.log(a!==b);
}

// 5 Less Than
{
    let a = 9;
    let b = 10;
    
    console.log(a<b); // true
}

// 6 grether than
{
    let a = 15;
    let b = 20;

    console.log(a>b);  //false
}

// 7 Lessthan or Equel
{
    let a = 20;
    let b = 25;

    console.log(a<=b); //true
}

// 8 gretherthan or Equel
{
    let a = 35;
    let b = 40;

    console.log(a>=b); //false

    console.log(b>=a); //true
}

// 8 logical operatore


{
    // 1 logical End &&

    let x = true;
    let y = false;
    let z = false;

    // console.log(x && y && z); //false

    // 2 logical or ||

    // console.log(x || y || z);

    // 3 logical not !

    console.log(!(x && y));

    console.log(!(x || y));

    // 4 ternary operatore

    let text = x ? "Skillqode" : "City Center";  //true

    let text1 = z ? "Skillqode" : "City Center"; // false 

    console.log(text);

    console.log(text1);
}

/*

a = 10;
b = 62;

62/10 = 6.2
6 *10 = 60
62-60 = 2 modu...

10/30 = 0.33
0 * 30 = 0
0-10 = 10

*/

