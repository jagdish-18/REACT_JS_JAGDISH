// javascript CallBack Function

// function sum(function_call){
//     console.log("main function");
//     function_call();
// }

// function callBack(){
//     console.log("callback function")
// }

// sum(callBack);

// const box = (callBack) =>{
//     console.log("main arrow function");
//     callBack();
// }

// const boxse = () => console.log("callback arrow function");

// box(boxse)

// CallBack Hell

// production // Backend

const productionprocess = {
    stock: ['Stock is Here'],
    production: ['Production Started'],
    clean : ['Wash Mangos','Clorineted Water', 'Plain water'],
    sort: ['Sorting With Ripness'],
    peel: ['Peel Mangos'],
    cut: ['Cut Small Pieces'], 
    pulp: ['Use Pulping Machine'],
    sieving : ['Remove impurities and fibers'],
    heating: ['Heating the pulp to a high temprature toincrease shelf life and remove bacteria'],
    packing: ['Packing the pulp in cans or aseptic bags and storing in a cool,dry place']

}

// kitchen  // Frontend

/* 1, 2, 2, 2, 1, 1, 1, 1, 5, 5, */

let stock = true

// function process(){
//     if(stock === true){
//         setTimeout(() => {
//             console.log(`${productionprocess.production[0]}`)
//             setTimeout(() =>{
//                 console.log(`${productionprocess.clean[0]}`)
//                 setTimeout(() =>{
//                     console.log(`${productionprocess.clean[1]}`)
//                     setTimeout(() =>{
//                         console.log(`${productionprocess.clean[2]}`)
//                         setTimeout(() =>{
//                             console.log(`${productionprocess.sort[0]}`)
//                             setTimeout(() =>{
//                                 console.log(`${productionprocess.peel[0]}`)
//                                 setTimeout(() =>{
//                                     console.log(`${productionprocess.cut[0]}`)
//                                     setTimeout(() =>{
//                                         console.log(`${productionprocess.pulp[0]}`)
//                                         setTimeout(() =>{
//                                             console.log(`${productionprocess.sieving[0]}`)
//                                             setTimeout(() =>{
//                                                 console.log(`${productionprocess.heating[0]}`)
//                                                 setTimeout(() =>{
//                                                     console.log(`${productionprocess.packing}`);
//                                                 },5000)
//                                             },5000)
//                                         },1000)
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },2000)
//                 },2000)
//             },2000)
//         },1000)
//     }
// }

// process();

// promise 

function process_production(time,process){
    return new Promise(function(resolve , reject){
        if(stock == true){
            setTimeout(() =>{
                process()
                resolve('Production started')
            },time)
        }else{
            reject("production failed")
        }
    })
}

process_production(1000, () => console.log(`${productionprocess.production[0]}`))

process_production(2000, () => console.log(`${productionprocess.clean[0]}`))

process_production(3000, () => console.log(`${productionprocess.clean[1]}`))

process_production(4000, () => console.log(`${productionprocess.clean[2]}`))

process_production(5000 , () => console.log(`${productionprocess.sort[0]}`))

process_production(6000 , () => console.log(`${productionprocess.peel[0]}`))

process_production(7000 , () => console.log(`${productionprocess.cut[0]}`))

process_production(8000 , () => console.log(`${productionprocess.pulp[0]}`))

process_production(9000 , () => console.log(`${productionprocess.sieving[0]}`))

process_production(11000 , () => console.log(`${productionprocess.heating[0]}`))

process_production(12000 , () => console.log(`${productionprocess.packing[0]}`))









