// 1 currentdate getDate
{
    let date = new Date();

    let currenDate = date.getDate();

   console.log(currenDate); //output ->2
}


// Date

let date = new Date();

console.log(date); 

// getMonth

let month = date.getMonth()

console.log(month); //output->4

// getFullyear

let Fullyer = date.getFullYear();

console.log(Fullyer);  // output->2024

// 2 calculate number left until next charistmas

let day = new Date();

var charistmasdate = new Date(day.getFullYear(),11, 25);

if (charistmasdate < day) {

    charistmasdate.setFullYear(charistmasdate.getFullYear() + 1);
}

console.log(charistmasdate);