/* Javascript Object Method */

/* Object.freeze Method */

// {
//     const obj1 = {
//         key1:"javascript",
//         key2:"html",
//         key3:"Css",
//         key4:"taildwinds"
//     }

//     console.log(obj1.key1);
//     console.log(obj1.key2);
//     console.log(obj1.key3);
//     console.log(obj1["key4"]);

//     obj1.key4 = "python";

//     console.log(obj1.key4);

//     console.log(obj1);

//     Object.freeze(obj1);

//     obj1.key4 = "Sass";

//     console.log(obj1.key4);

//     obj1.key5 = "munno";

//     console.log(obj1.key5);

// /* isFrozen */
 
//    let Freez = Object.isFrozen(obj1);

//    console.log(Freez);


// }

// object.entries() method
{
    // const obj1 = {
    //     key1:"javascript",
    //     key2:"html",
    //     key3:"Css",
    //     key4:"taildwinds"
    // }

    // for(const [key , value] of Object.entries(obj1)){
    //     console.log(`this object key is ${key} and its value is${value}`);
    // }


    // const obj2 = {
    //     1:"apple",
    //     2:"kiwi",
    //     3:"sugercan",
    //     4:"watermelon",
    //     5:"orange"
    // }
    // for(const [key ,value] of Object.entries(obj2)){
    //     console.log(`this obj2 key is ${key} and its value is ${value}`);
    // }

    
}

// object.hasown() method
// {
//     const obj2 = {
//         key1:"apple",
//         key2:"kiwi",
//         key3:"sugercan",
//         key4:"watermelon",
//         key5:"orange"
//     } 

//     let Data = obj2.hasOwnProperty("key1") 

//     console.log(Data); // true

//     let Data1 = obj2.hasOwnProperty("key6")

//     console.log(Data1);  //false
// }

 // object.is() method
//  {
//     let ob = {key1:25 , key2:45 , key3:69 , key4:79}

//     let obj = {key1:25 , key2:45 , key3:69 , key4:79}

//     console.log(Object.is(ob , obj)); // false

//     let abs = Object.is(1 , "1");

//     console.log(abs);  //false

//     let ab = Object.is(NaN , NaN);

//     console.log(ab); //true

//     let Data2 = Object.is(Object , Object);  //true

//     console.log(Data2);
//  }

 // Object.seal() method
 {
    // let ob = {key1:25 , key2:45 , key3:69 , key4:79}

    // delete ob.key1;

    // console.log(ob);

    // delete ob.key3;

    // console.log(ob);

    // Object.seal(ob)

    // delete ob.key2;

    // console.log(ob);

    // Object.isSealed() method

    // let Data = Object.isSealed(ob);

    // console.log(Data); //true   
 }

 // Object.keys() method
 {
    // let ob = {key1:25 , key2:45 , key3:69 , key4:79}

    // let obj = Object.keys(ob);

    // console.log(obj);
    
 }

 // Object.values() method
 {
    // let ob = {key1:25 , key2:45 , key3:69 , key4:79}
 
    // let obj1 = Object.values(ob);

    // console.log(ob);

 }

 // Object .groupBy() method
 {
    // const inventory = [
    //     { name: "asparagus", type: "vegetables", quantity: 5 },
    //     { name: "bananas", type: "fruit", quantity: 0 },
    //     { name: "goat", type: "meat", quantity: 23 },
    //     { name: "goat", type: "fruit", quantity: 5 },
    //     { name: "fish", type: "meat", quantity: 22 },
    //   ];

    //   let ob = Object.groupBy(inventory , ({name}) => name);

    //   console.log(ob);

    // function callBack({quantity}){
    //     return quantity > 5 ? "Stock is Available" : "ReStock";

    // }

    // let ob2 = Object.groupBy(inventory ,callBack);

    // console.log(ob2);
 }