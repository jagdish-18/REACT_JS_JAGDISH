/* Javascript Object Method */

/* Object.freeze Method */

{
    // const obj = {key1:"javascript" , key2:"html" , key3:"css" , key4:"tailwindCss"}

    // console.log(obj.key1);
    // console.log(obj.key2);
    // console.log(obj.key3);
    // console.log(obj["key4"]);

    // obj.key4 = "nodejs"

    // console.log(obj.key4);

    // Object.freeze(obj)

    // obj.key4 = "bootstrap5"

    // console.log(obj.key4);

    // /* isFrozen */

    // let Frozen = Object.isFrozen(obj)

    // console.log(Frozen);
}

// Object.entries()

{
    // const obj = {key1:"javascript" , key2:"html" , key3:"css" , key4:"tailwindCss"}

    // for(const [key , value] of Object.entries(obj)){
    //     console.log(`this object key is ${key} and its value is ${value}`);
    // }
}

// Object.hasOwn() Method 

{
    // const obj = {key1:"javascript" , key2:"html" , key3:"css" , key4:"tailwindCss"}

    // let Data = obj.hasOwnProperty("key1")

    // console.log(Data);

}

// Object.is() Method 

{
    // let obj = {key1:45  , key1:65 , key3:78}
    // let obj1 = {key1:45  , key2:65 , key3:78}

    // console.log(Object.is(obj , obj1));

    // let data = Object.is(1,"1")

    // console.log(data);
}

// Object.seal()

{
    // let obj = {key1:45  , key2:65 , key3:78}

    // delete obj.key1

    // console.log(obj);

    // Object.seal(obj)

    // delete obj.key2

    // console.log(obj);

    //is.sealed

    // let data = Object.isSealed(obj)

    // console.log(data);
}
// Object.keys()

{
    // let obj = {key1:45  , key2:65 , key3:78}
    // let data = Object.keys(obj)
    // console.log(data);
}

// Object.values()

{
    // let obj = {key1:45  , key2:65 , key3:78}
    // let data = Object.values(obj)
    // console.log(data);
}

// Object.groupBy() method 

{
    const inventory = [
        { name: "asparagus", type: "vegetables", quantity: 5 },
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "cherries", type: "fruit", quantity: 5 },
        { name: "fish", type: "meat", quantity: 22 },
      ];

      let data = Object.groupBy(inventory , ({type}) => type)

    //   console.log(data);

      function callBack({quantity}){
        return quantity > 5 ? "Stock Is Available" : "ReStock"
      }

      let Data2 = Object.groupBy(inventory , callBack)

      console.log(Data2);

}

/* valueOf And toString */
{
    let obj = {key1:45  , key2:65 , key3:78}

    let Value = Object.valueOf(obj)
    let string = Object.toString(obj)

    console.log(Value);
    console.log(string);

}