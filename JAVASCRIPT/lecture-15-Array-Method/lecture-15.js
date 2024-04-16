// javascript array method

// 1 Map Method In Array

{
    // let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'graps' , 'banana'];

    // let forarray = array.forEach((item) => console.log(item + item));

    // console.log(forarray);

    // let maparray = array.map((any) => any +any)

    // console.log(maparray);

    // console.log(maparray[0] = "paineple");

    // console.log(maparray);

    // console.log(maparray[4] = "chiku");

    // console.log(maparray);

    // console.log(array);

    // let Number = [10 ,20 ,30 ,40 ,50 ,60 , 70 , 80 , 90 , 100];

    // let NewArray = Number.map((num) => num*2);

    // console.log(Number);

    // console.log(NewArray);
}

// 2 filter methed in array

{
    // let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'graps' , 'banana','apple'];
 
    // let filter1 = array.filter((evrey) => evrey ==  "apple");

    // let filter2 = array.filter((per) => per !== "kiwi");

    // console.log(filter1);

    // console.log(filter2);

    // let arrays = [
    //     {id:1,type:"mobile",name:"iphone",color:"white"},
    //     {id:2,type:"mobile",name:"iphone",color:"white",storage:"256GB"},
    //     {id:3,type:"mobile",name:"iphone",color:"green",storage:"128GB"},
    //     {id:1,type:"mobile",name:"iphone",color:"black",storage:"128GB"},
    //     {id:1,type:"laptop",name:"lenovo",color:"black"},
    //     {id:1,type:"laptop",name:"dell",color:"white"},
    //     {id:1,type:"laptop",name:"hp",color:"blue"},
    //     {id:3,type:"laptop",name:"hp",color:"black"}

    // ]

    // let typefilter = arrays.filter((item) => item.type === "laptop");

    // console.log(typefilter);

    // let typefilter2 = arrays.filter((fill) => fill.name === "hp");

    // console.log(typefilter2);

    // let typefilter3 = arrays.filter((serch) => serch.id == 3);

    // console.log(typefilter3);

    // let typefilter4 = arrays.filter((color) => color.color == "black");

    // console.log(typefilter4);
}

//  3 Indexof / Lastindexof methed in array

{
    // let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'graps' , 'banana','apple' ];

    // let indexArray = array.indexOf("orange");
    
    // console.log(indexArray);  // index number 

    // let indexArray1 = array.indexOf("graps",5);

    // console.log(indexArray1);

    // let indexArray2 = array.indexOf("orange",2);

    // console.log(indexArray2); // index number 3

}

// 4 some method in Array

{
    let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'graps' , 'banana' ,'apple' ];

    let some = array.some((item) => item === "chiku")  // false

    let some1 = array.some((item) => item === "chiku")

    let some2 = array.includes("apple");

    console.log(some);

    console.log(some1);

}
