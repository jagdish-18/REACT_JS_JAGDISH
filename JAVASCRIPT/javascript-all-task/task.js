
// JavaScript All Task

// 1  javascript get today’s date 
{
    // let todayDAte = new Date();

    // console.log(todayDAte);
}

// 2 Reverse String in JavaScript
{
//     let string = "jagdish";

//    console.log(string);

//    let str = string.split('').reverse();

//    console.log(str);
}

// 3 Reverse array javascript
{
    // let arr = [1 ,2 ,3 ,4 , 5 ,6];

    // let x = arr.reverse();
    
    // console.log(x);
}

// 4 Break and Continue in JavaScript
{

    // Break Statements
    // for(let p = 0; p < 10; p++){
    //     if(p == 4){
    //         break;
    //     }
    //     console.log("Break Statements" +" " + p);
    // }

    // continue Statements

    // for(let a = 0; a < 10; a++){
    //     if(a == 5){
    //         continue;
    //     }
    //     console.log("Contunue Statements" +" " + a);
    // }
}

// Call() method

const person1 = {
    Fname:"jaggi",
    Lname:"shiyal",
    FullName:function (hometown ,country){
        return this.Fname +  " "  + this.Lname + " " +hometown + " " +country
    }
}

const person2 = {
    Fname:"suru",
    Lname:"gohil",
    
}

console.log(person1.FullName.call(person2,"surat" , "india"));

