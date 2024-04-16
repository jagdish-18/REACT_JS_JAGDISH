// 5 slice method un Array

{
    // let Array = ["html" , "css" , 456 , "boot" , "react" , false , null]

    // let arrays = Array.slice(5);
    // console.log(arrays);

    // let arrays1 = Array.slice(3)
    // console.log(arrays1);

    // let arrays2 = Array.slice(1)
    // console.log(arrays2);

    // let arrays3 = Array.slice(1 , 3)
    // console.log(arrays3);

    // let arrays4 = Array.slice(2 , 5)
    // console.log(arrays4);

    // let arrays5 = Array.slice(1 , 6)
    // console.log(arrays5);
}

// 6 splice method in Array

{
    // let Array = ["html" , "css" , 456 , "boot" , "react" , false , "sass"];

    // let x = Array.splice(5);
    // console.log(x);

    // let y = Array.splice(2 , 5);
    // console.log(y);

    // let z = Array.splice(1 , 3 , "hey");   //
    // console.log(z);

    // console.log(Array);

    // Array.splice(2 , 5 , "tail");
    // console.log(Array);
   
}

// 7 every method in Array

{
    // let a = [12 , 14 , 15 , 17 , 25 , 22 , 65 , 69 ];

    // let x = a.every(item => item == 12);
    
    // console.log(x);  // false

    // let a1 = [12 , 12 , 12 , 12 , 12 , 12 ];

    // let y = a1.every(any => any == 12);

    // console.log(y);  // true
}
 
// 8 find method in Array

{
    // let a = [12 , 14 , 15 , 17 , 25 , 22 , 25 , 69 ];

    //find method

    // let p = a.find(any => any == 10); // undefiend

    // console.log(p);

    // let q = a.find(sum => sum == 25);

    // console.log(q);

    // let r = a.find(sum => sum === "12"); // undefiend

    // console.log(r);


    // findindex

    // let o = a.findIndex(any => any == 45);  // -1

    // console.log(o);

    // let p = a.findIndex(any => any === 65);  // index no: 6

    // console.log(p);

    //findlastindex

    // let h = a.findLastIndex(any => any == 25); // index no:6

    // console.log(h);

    // let i = a.findLastIndex(any => any == 5);  // -1

    // console.log(i);

    // let j = a.findLastIndex(any => any == "25"); // index no: 6

    // console.log(j);


}

// 9 copywithin method in Array

{
    // let num = [12 , 14 , 15 , 17 , 25 , 22 , 65 , 69];

    // let p = num.copyWithin(5);
    // console.log(p);

    // let q = num.copyWithin(1 , 3); // 12 17 25 22 65 69 65 69
    // console.log(q);

    // let r = num.copyWithin(2 ,5); // 12 14 22 65 69 22 65 69
    // console.log(r);

    // let s = num.copyWithin(3 , 6); // 12 14 15 69 69 69 69 69
    // console.log(s);

    // let d = num.copyWithin(1 , 3 , 5);   // 12 17 25 17 25 22 65 69
    // console.log(d);

    // let e = num.copyWithin(2 , 4 ,6);  // 
    // console.log(e);

    // console.log( 0.1 + 0.2);
    // console.log(0.1 + 0.2 == 0.3);

    // console.log(1 + "2" + "2");
    // console.log(1 + +"2" + "2");
    // console.log(1 + -"1" + "2");
    // console.log(+"1" + "1" +"2");
    // console.log("a" - "b" + "2");
    // console.log("a" - "b" + 2);

    // let a = ["apple" , "banana"];
    // console.log(typeof a);
}

// 10 reduce And reduceRight method in Array

{
    // let num = [2, 6 , 6 , 8 , 10];

    // let x = num.reduce((current , previous) => current + previous);
    // let y = num.reduceRight((current , previous) => current + previous);

    // console.log(x);
    // console.log(y);
}

// 11 entries() , keys() , values()

{
    // let array = ["html" , "css" , "465" , "boot" , "react" , false , null]

    // let x = array.entries();
    // console.log(x.next().value);
    // console.log(x.next().value);
    // console.log(x.next().value);

    // let y = array.keys();
    // console.log(y.next().value);
    // console.log(y.next().value);
    // console.log(y.next().value);
    // console.log(y.next().value);

    // let z = array.values();
    // console.log(z.next().value);
    // console.log(z.next().value);
    // console.log(z.next().value);
    // console.log(z.next().value);
    // console.log(z.next().value);
    
}

// 12 isArray method

{
    // let x = "Array";
    // let y = ["array"];

    // let Arrays1 = Array.isArray(x);
    // console.log(Arrays1);

    // let Arrays2 = Array.isArray(y);
    // console.log(Arrays2);
}

// 13 Sorting in Array

{
    // let array = ["html" , "css" , 465 , "boot" , "react" , false , null , "azex"]

    // let a = array.sort();

    // console.log(a);

    // let num = [10,5 ,7 ,12 ,25 ,90 ,95 ,105 ,50 ,69 ,3];

    // let b = num.sort();

    // console.log(b);

    // let c = num.sort((a , b) => a - b);

    // console.log(c);

}

// 14 Fill method in Array

{
    // let array = ["html" , "css" , 465 , "boot" , "react" , false , null , "azex"]

    // let x = array.fill(69);

    // console.log(x);

    // console.log(array);

}

// 15 Flat And Flatmap Method in Array

{
    let array = ["html" , "css" , 465 , "boot" , "react" , false , null , "azex"]

    console.log(array);

    let arrays = [102 , 12 , 45 , 69 , 32 ];

    let p = arrays.flat(4);

    console.log(p);
    
    console.log(arrays);

    let arrays2 = [["html" , "javascript"] [45 , 69]]

    let q = arrays2.flatMap((any) => any === 22 ? [2 , 12]: 45)

    console.log(q);
    
}


