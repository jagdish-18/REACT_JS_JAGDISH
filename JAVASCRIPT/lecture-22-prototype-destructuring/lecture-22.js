// Javascript Prototype And Destructuring

// Function .tostring()

// function greet(){
//     console.log("Hi, I am ");

// }

// console.log(greet());

// Function Constructor

// let result =new Function( "a" , "b" , "c" ,"return a + b + c ");

// console.log(result(10 ,25 ,10));
// console.log(result("hello" ," "+ "Sir" , " " +"madam"));

// new Array ,new object , new String ,new function()

// Function .name

// let Name = function good(){}
// let names = function (){}

// console.log(Name.name);
// console.log(names.name);

// let sum = function greet(){

// }

// console.log(sum.name);

// Function Apply() , Call() And Bind() method

{
    // let num1 = [10,20,30,40,50]
    // let num2 = [60,70,80,90,100]

    // console.log(num1.concat(num2));
    // console.log(num1);
    // console.log(num2);
}

{
    // let num1 = [10,20,30,40,50]
    // let num2 = [60,70,80,90,100]

    // let result = num1.push(60);

    // console.log(result);

    // console.log(num1);
}

// Spred opr......

//[....arr,obj]
{
    // let num1 = [10,20,30,40,50]
    // let num2 = [60,70,80,90,100]

    // let result = num1.push(...num2);

    // console.log(result);

    // console.log(num1);

    // console.log(num2);
}

{
    // let num1 = [10,20,30,40,50]
    // let num2 = [60,70,80,90,100]

    // let result = num1.push.apply(num1 , num2);

    // console.log(result);

    // console.log(num1);

    // console.log(num2);
}

{
    // let num1 = [10,20,30,40,50]
    // let num2 = [60,70,80,90,100]

    // let result = num2.push.apply(num2 , num1);

    // console.log(result);

    // console.log(num1);

    // console.log(num2);
}

// Array Destructuring

{
    // let num1 = [10,20,30,40,50]
    // let num2 = [60,70,80,90,100]

    // const [count1 , count2 ,count3 ,] = num1

    // console.log(count1);
    // console.log(count2);
    // console.log(count3);
    
    // let [counter1 , counter2 , counter3] = num2

    // console.log(counter1);
    // console.log(counter2);
    // console.log(counter3);
}

// Apply () method

// const person1 = {
//     FirstName:"jaggi",
//     LastName:"shiyal"
// }

// const person2 = {
//     FirstName:"mihir",
//     LastName:"gohil"
// }

// function intro(message1 ,message2){
//     return message1 + " " + this.FirstName  + " " + this.LastName + " " + message2
// }

// console.log(intro.apply(person1 ,['Hi ,I Am' , "I Am devloper"]));

// console.log(intro.apply(person2 ,['Hi , I Am' , 'I Am Cricketer']));

// function int(){
//     return this.FirstName +" " + this.LastName
// }

// console.log(int.apply(person1));

// Call () method

{
    // function sum(a,b){
    //     return a + b
    // }

    // let result = sum.call(this,10 ,20);

    // console.log(result); // 30

    // let result2 = sum(10,20)

    // console.log(result2);  //30

}

{
    // const human = {
    //     FirstName:"Anil",
    //     LastName:"kumble",
    //     Age:65
    // }

    // // console.log(human);

    // function intro(){
    //     console.log(`My Name is ${this.FirstName} And My Last is ${this.LastName} And my age is ${this.Age}`);
    // }

    // // console.log(intro.call(human));

    // intro.call(human)
}

// Bind() Method

{
    function sum(a,b){
        return a + b
    }

    let result = sum.bind(this ,25 ,25)

    console.log(result); // function prototype

    console.log(sum( 10 ,20)); // 30
}
{
    const student1 = {
        name:"jacks",
        grade:"A++",
        intro:function(){
            console.log(this.name+ " " +'Student in grade' + " " +this.grade);
        }
    }

    const student2 = {
        name:"curan",
        grade:"A++"

    }

    let result = student1.intro.bind(student1);

    console.log(result());

    let result2 = student1.intro.bind(student2)

    console.log(result2());
}

{
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

// aplly 

console.log(person1.FullName.apply(person2 ,["baroda" , "india"])); 

//bind

const result = person1.FullName.bind(person2,"Mumbai", "india")

console.log(result);

console.log(result());
}

// Asyncronous Function

{
    // function sum(a,b){
    //     return a + b
    // }

    setTimeout(() => {console.log('Hello')} , 5000)

    setInterval(() => {console.log('hey ,budy')} ,1000)  //continue
}

// console.log(sum(5,5));





