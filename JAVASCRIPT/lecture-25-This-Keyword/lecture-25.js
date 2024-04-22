// This keyword in javascript

// this in globle  Scope

// let user = this

// console.log(user);

// this inner function

// function greet(){
//     console.log(this);
// }

// greet();

// this inside arrow function

// let good = () => console.log(this);

// good();

// this inner object
// {
//     let project = {
//         FirstName:"jigs",
//         LastName:"gohil",
//         gender:"male",
//         Age:25,
    
//         Intro(){
//             console.log(this.FirstName);
//             console.log(this.Age);
//             console.log(this.gender);
//         }
//     }
    
//     project.Intro()
// }

// this inner object and inner function
// {
//     let user = {
//         FirstName:"Viart",
//         LastName:"Kohli",
//         gender:"Male",
//         Age:"36",


//         greet(){
//             console.log(this);
//             console.log(this.FirstName);

//             function innerfunction(){
//                 console.log(this);
//                 console.log(this.LastName);   //undefiend
//             }

//             innerfunction();
//         }
//     }

//     user.greet();
// } 

// this inner object and inner arrow function

// let goods = {
//     FirstName:"jaggi",
//     LastName:"Shiyl",
//     Age:22,
//     Address:"Mahuva",

//     person:function(){
//         console.log(this);
//         console.log(this.FirstName);

//         let user = () => {
//             console.log(this);
//             console.log(this.Address);
//         }

//         user();
//     }

   
// }

// goods.person();

// HTML DOm Method

//Document object method

//Section method

let user = "Minesh"

function StyleNode(){
    document.getElementById("demo").innerHtml = user;
    document.getElementById("demo").style.color = "white"
    document.getElementById("demo").style.backgroundColor = "green"
    document.getElementById("demo").style.fontSize = "50px"
    document.getElementById("demo").style.textAlign = "center"
}


