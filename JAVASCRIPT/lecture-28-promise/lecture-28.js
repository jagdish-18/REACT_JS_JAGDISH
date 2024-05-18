// javascript promise

// Asyncronous Action

// let timeOutId = setTimeout(() => console.log("hello"), 3000);

// console.log(timeOutId);

// clearTimeout(timeOutId)

// console.log('hi');

// let clearentervalid = setInterval(() => console.log('javascript') ,4000);

// console.log(clearentervalid);

// clearInterval(clearentervalid);

// promise

{
    // let promise = new Promise(function(resolve , reject){
    //     setTimeout(function(){
    //         console.log('promise Called!');
    //         resolve({firstName:"jaggi",lastName:"shiyal"})
    //     } , 3000)
    // }).then(function(result){
    //     console.log(result.firstName);
    // }).then(function(){
    //     console.log('name called!');
    // })

    // console.log(promise);
}

{
    // let promise = new Promise(function(resolve , reject){
    //     setTimeout(function(){
    //         console.log('promise called');
    //         reject('promise rejected');
    //     },3000)
    // }).then(function(result){
    //     console.log(result);
    // }).then(function(){
    //     console.log('Name called');
    // }).catch(function(error){
    //     console.log(error);
    // })
}

{
    // let promise = new Promise(function(resolve , reject){
    //     setTimeout(function(){
    //         console.log('promise called');
    //         reject("promise rejected");
    //     },3000)
    // }).then(function(result){
    //          console.log(result);
    // }).then(function(){
    //     console.log('Name called');
    // }).catch(function(error){
    //     console.log(error);
    // }).finally(function(){
    //     console.log('promise now complated!');
    // })

} 

{
    let promise = new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log('promise called');
            reject('promise rejected')
        },2000)
    }).then(function(result){
        console.log(result);
    }).then(function(){
        console.log('Name called');
    }).catch(function(error){
        console.log(error);
    }).finally(function(){
        setTimeout(() => console.log('promise now complated!'))
    })
}



// javascript class with constructore

{
    // class sum{
    //     constructor(){
    //         this.num = 10;
    //         this.num1 = 20;
    //     }
        
    // }
    // let sums = new sum()
    // console.log(sums.num1);
}

// (function(a){
//     return (function(){
//       console.log(a);
//       a = 6;
//     })()
//    })(21);

   function solve(arr, rotations){
    if(rotations == 0) return arr;
    for(let i = 0; i < rotations; i++){
      let element = arr.pop();
      arr.unshift(element);
    }
    return arr;
   }

   solve([44, 1, 22, 111], 5);

   solve()



   let promise = new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log("promise called");
        reject("promise rejected")
    },2000)
   }).than(function(result){
    console.log(result);
   }).than(function(){
    console.log("name called");
   }).catch(function(error){
    console.log(error);
   }).finally(function(){
    console.log("promise is complated");
   })