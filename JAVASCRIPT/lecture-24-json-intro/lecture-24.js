// json Data

// stringify method


    let obj = {
        Id:1,
        FirstName:"Jaggi",
        LastName:"Shiyal",
        Age:22,
        City:"Surat"
    }
    
    let json = JSON.stringify(obj);
    
    console.log(json)


// parse

let objectData = '{"Id":2,"FirstName":"Jigs","LastName":"Gohil","City":"Bhavnagar","Age":25}'

let object = JSON.parse(objectData);

console.log(object);

console.log(obj);


