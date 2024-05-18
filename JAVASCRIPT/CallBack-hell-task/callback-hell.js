// Chocolate Making Process

// fronted

const chocolateMakingProcess = {
    step1: ["Cleaning. ..."],
    step2: ["Roasting. ..."],
    step3: ["Shell Removal. ..."],
    step4: ["Nibs are ground. ..."],
    step5: ["Cocoa is separated from Cocoa Butter. ..."],
    step6: ["Other ingredients are added to the Chocolate Liquor. ..."],
    step7: ["Conching machines knead the Chocolate Paste."]
}

let chocolate = true;

//backend

// function chocolateprocess(){
//     if(chocolate = true){
//         setTimeout(() => {
//             console.log(`${chocolateMakingProcess.step1[0]}`)
//             setTimeout(() =>{
//                 console.log(`${chocolateMakingProcess.step2[0]}`)
//                 setTimeout(() =>{
//                     console.log(`${chocolateMakingProcess.step3[0]}`)
//                     setTimeout(() =>{
//                         console.log(`${chocolateMakingProcess.step4[0]}`)
//                         setTimeout(() =>{
//                             console.log(`${chocolateMakingProcess.step5[0]}`)
//                             setTimeout(() =>{
//                                 console.log(`${chocolateMakingProcess.step6[0]}`)
//                                 setTimeout(() =>{
//                                     console.log(`${chocolateMakingProcess.step7[0]}`);
//                                 },7000)
//                             },6000)
//                         },5000)
//                     },4000)
//                 },3000)
//             },2000)
//         },1000)
//     }
// }

// chocolateprocess();

function Process_product(time , Process){
    return new Promise(function(resolve , reject){
        if(chocolate == true){
            setTimeout(() =>{
                Process()
                resolve("Process Started");
            },time)
        }else{
            reject("Process Rejected");
        }
     })
}

Process_product(1000, () => console.log(`${chocolateMakingProcess.step1[0]}`))


Process_product();