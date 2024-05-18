// javascript Asyncronous Function

// 1 setTimeout

{
    // function printData(){
    //     let datetime = new Date();

    //     let time = datetime.toLocaleTimeString();

    //     console.log(time);
    // }

    // setTimeout(printData ,2000);
}

// 2  setInterval

{
    // function print(){
    //     let datetime = new Date();

    //     let times = datetime.toLocaleTimeString();
        
    //     console.log(times);
    // }

    // setInterval(print ,2000);
}

// 3 clearTimeout
{
    // function pri(){
    //     let datetime = new Date();

    //     let  timing = datetime.toLocaleTimeString()

    //     console.log(timing);
    // }

    // let IntervalId = setTimeout(pri , 5000);

    // console.log('Id:' , IntervalId);

    // clearInterval(IntervalId);

    // console.log("stopped setTimeout");
}

// clearInterval
{
    // function printdata(){
    //     let datetime = new Date();

    //     let time = datetime.toLocaleTimeString()

    //     console.log(time);
    // }

    // let IntervalId = setInterval(printdata , 5000);

    // console.log('Id:' ,IntervalId);

    // clearInterval(IntervalId);

    // console.log("Stopped SetInterval");

}

// Conter

// let count = 0 

// let interval = setInterval(function(){
//     count+=1;

//     if(count == 5){
//         clearInterval(interval)
//     }
//     console.log(count);
    
// } ,5000)

function printime(){
    let datetime = new Date()

    let time = datetime.toLocaleTimeString()

    console.log(time);
}

setTimeout(printime , 2000)