// javascript object and its method

// const obj = {};

// console.log(obj);

// const Newobj = new Object();

// console.log(Newobj);

// const obj1 = {key1:"skillqode" , key2:"creative" , key3:"jbs" ,key4:"lope"}

// console.log(obj1);

// console.log(obj1.key1);
// console.log(obj1.key2);
// console.log(obj1.key5);  //undefiend

// console.log(obj1["key1"]);

// const objectArray = {
//     Array1:{id:1 , FirstName:"jaggi" , LastName:"shiyal" , Age:23 , Gender:"Male"},
//     Array2:{id:2 , FirstName:"munno" , LastName:"savaliya" , Age:17 , Gender:"Male"}
// }

// console.log(objectArray);

// console.log(objectArray["Array2"] ["FirstName"]);

// console.log(objectArray["Array1"] ["Gender"]);

// console.log(objectArray["Array2"] ["Age"]);

// 1 object assign() method
{
// const obj1 = {key1:"skillqode" , key2:"creative" , key3:"jbs" ,key4:"lope"}

// const num = {key1:11 , key2:22 , key3:33 , key4:44}

// const Assign = Object.assign(obj1 , num)

// console.log(Assign);

// console.log(obj1);

// console.log(Assign === obj1);

}

// 2 object.create() method
{
    const obj1 = {
        key1:"skillqode",
        key2:"creative",
        key3:function(){
            console.log(`this is ${this.key1} and this branch above ${this.key1}`);
        }
    }

    const Newobj = Object.create(obj1)

    Newobj.key4 = "lope";
    Newobj.key5 = "red&white"

    console.log(obj1);
    console.log(Newobj);
    console.log(obj1.key3());
    console.log(obj1.key1);
}
