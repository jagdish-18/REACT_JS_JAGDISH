// JavaScript Array

let NewArray = Array(10);
let ArrayNew = new Array(10,10,10);
let Arrays = [10];

console.log(typeof NewArray);
console.log(typeof ArrayNew);
console.log(typeof Arrays);

console.log(NewArray.length);
console.log(ArrayNew.length);
console.log(Arrays.length);

console.log(NewArray[0]);
console.log(ArrayNew[0]);
console.log(Arrays[0]);

// Javascript method pop And push

{
    let Array = []
    console.log(Array.length);
    Array[0] = "p. Rupala";
    console.log(Array.length);
    Array.length = 10;
    console.log(Array.length);
    console.log(Array);
    Array[1] = " p.modi";
    console.log(Array);
    console.log(Array.length);
    console.log(Array[1]);

    // 1 push method

    Array.push("A. shah");
    Array.push("c.patil");
    Array.push("Rahul Gandhi")
    Array.push("soniya gandhi")
    console.log(Array);
    console.log(Array.length);
    Array[1] = "p.modi";
    console.log(Array);
    Array[3] = "javascript";
    console.log(Array);
    Array[6] = "html";
    console.log(Array);

    // 2 pop method

    // Array.pop();
    // Array.pop();
    // Array.pop();
    // Array.pop();
    console.log(Array);  // last delete

    // 3 shift method

    // Array.shift()
    // Array.shift();
    // Array.shift();;
    // Array.shift();
    // Array.shift();
    // Array.shift();
    // Array.shift();
    // Array.shift();
    // Array.shift();
    // Array.shift();
    // Array.shift();
    console.log(Array); // first delete

    // 4 unshift method

    Array.unshift("Reactjs");
    Array.unshift("Html");
    Array.unshift("Bootstrap");
    Array.unshift("Sass");
    Array.unshift("SQL");
    Array.unshift("CSS");
    Array.unshift("python");
    Array.unshift("69");
    console.log(Array);  // first add

    // 5 includes method

    let check = Array.includes("html");
    console.log(check); // true

    let check1 = Array.includes("kejrival");
    console.log(check1);  // false

    // 6 forEach method 

    Array.forEach((item) => console.log(item));

    Array.forEach((item2) => console.log(item2));  // all array values print

    // 7 ToString method

    let string = Array.toString()
    console.log(Array)
    console.log(string);
    console.log(typeof string);  // 
 
    // 8 Toreverse method

    Array.reverse();
    console.log(Array);

    // 9 Join method

    let join = Array.join("+");
    console.log(Array);
    console.log(join);
    console.log(typeof join);

    let join1 = Array.join("*")
    console.log(join1);

    // 10 concat method

    let item = ['Sharpner' , 'pencile' , 'Eraser' , 'Scale' , 'compass'];

    let NewArray = Array.concat(item);
    console.log(Array);
    console.log(NewArray);
    NewArray.unshift("PenBox");
    console.log(NewArray);
    console.log(Array);

    // Basic function

    function jaggi(){
        console.log("Hey jaggi");
    }

    jaggi();

    //Arroe Function

    // const jaggi2 = () => console.log(b);

    // jaggi2(10)
    

}