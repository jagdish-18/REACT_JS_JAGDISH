// console.log(null == undefined);
// console.log(null == NaN);
// console.log(undefined == NaN);
// console.log(undefined == undefined);
// console.log(undefined == false);
// console.log(null == false);
// console.log(NaN == false);
// console.log(undefined == true);
// console.log(NaN == true);
// console.log(NaN == NaN);
// console.log(null);
// console.log(NaN);
// console.log(undefined);

// let x = "10";
// let y = "10";
// let z = x*y;


// let a = 10;
// let b = 10;
// let c = a*b;

// console.log(x);
// console.log(y);
// console.log(z == c);

// javascript map object

// let object = {id : 1 , firstName : "joe", LastName: "biden"};

// console.log(object);
// object.gender = "male";
// console.log(object);
// object.Age = 56;
// console.log(object);
// object.gender = "female";
// console.log(object); 

// let Data1 = object.gender;
// console.log(Data1);


// New map

let Mapobject = new Map([['option1' , 1], ['option2' , 2], ['option3' , 3] , ['option4' , {}]]);

// let Mapobject = new Map();

// console.log(Mapobject);

// set method

Mapobject.set("lastName", "joe");
Mapobject.set("Age", "69");
// Mapobject.set("firstName", "jaggi");
console.log(Mapobject);

// Size method

console.log(Mapobject.size);

// Delete method

 let MapData1 = Mapobject.delete("Age");
 console.log(MapData1);

console.log(Mapobject);

//  let MapData2 = Mapobject.delete("firstName");
//  console.log(MapData2);

// console.log(Mapobject);

// has method

let MapData3 = Mapobject.has("option1");
console.log(MapData3);

// key method

let MapData4 = Mapobject.keys();
console.log(MapData4);
console.log(MapData4.next().value);
// console.log(MapData4.next().value);
// console.log(MapData4.next().value);
// console.log(MapData4.next().value);


// values method

// let MapData5 = Mapobject.values();
// console.log(MapData5);
// console.log(MapData5.next().value);
// console.log(MapData5.next().value);
// console.log(MapData5.next().value);
// console.log(MapData5.next().value);
// console.log(MapData5.next().value);
// console.log(MapData5.next().value);
// console.log(MapData5.next().value);


// foreach method

// let Mapobject = new Map([['option1' , 1], ['option2' , 2], ['option3' , 3] ,['option4', 4] , ['option5' , {}], ['option6' , "jaggi"]]).forEach(printData);

// function printData(key,value){
//     console.log(`${key} = ${value}`);
// }


// entries method

// let Mapobject = new Map([['option1' , 1], ['option2' , 2], ['option3' , 3] ,['option4', 4] , ['option5' , {}], ['option6' , "jaggi"]])

// let MapData6 = Mapobject.entries();

// console.log(MapData6);
// console.log(MapData6.next().value);
// console.log(MapData6.next().value);
// console.log(MapData6.next().value);
// console.log(MapData6.next().value);
// console.log(MapData6.next().value);
// console.log(MapData6.next().value);
// console.log(MapData6.next().value);


// javascript set object

// let NewSet = new Set(["mango" , "orange" , "banana" , "apple"]);

// console.log(NewSet);

// let Setobject = new Set();

// Setobject.add("kiwi");
// Setobject.add("chiku");
// Setobject.add("watermelon");
// Setobject.add("banana");
// Setobject.add("orange");

// console.log(Setobject);

// size method

// let SetData1 = Setobject.size
// console.log(SetData1);

// delete method

// let SetData2 = Setobject.delete("orange");
// console.log(SetData2);

// console.log(Setobject);


// has method

// let SetData3 = Setobject.has("chiku");
// let SetData4 = Setobject.has("orange");

// console.log(SetData3);
// console.log(SetData4);

// values method

// let SetData5 = Setobject.values();

// console.log(SetData5.next().value);
// console.log(SetData5.next().value);
// console.log(SetData5.next().value);
// console.log(SetData5.next().value);
// console.log(SetData5.next().value);

 // keys method

// let SetData6 = Setobject.keys();

// console.log(SetData6.next().value);
// console.log(SetData6.next().value);
// console.log(SetData6.next().value);
// console.log(SetData6.next().value);
// console.log(SetData6.next().value);

// foreach method

// let NewSet = new Set(["mango" , "orange" , "banana" , "apple" , "kiwi"]).forEach(SetData)

// function SetData(value){
//     console.log(`${value}`);
// }

// entries method

// let NewSet = new Set(["mango" , "orange" , "banana" , "apple" , "kiwi"])

// let SetData7 = NewSet.entries();

// console.log(NewSet);
// console.log(SetData7.next().value);
// console.log(SetData7.next().value);
// console.log(SetData7.next().value);
// console.log(SetData7.next().value);
// console.log(SetData7.next().value);
// console.log(SetData7.next().value);

