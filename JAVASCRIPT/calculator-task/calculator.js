let string = "";

let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) =>{
    button.addEventListener("click" , (e) =>{
        if(e.target.innerHTML == "="){
            string = eval(string);
        document.querySelector("input").value = string;
       }
       else if(e.target.innerHTML == "CE"){
       string = " ";
       document.querySelector("input").value = string;
       }
       else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
        
    })
})

// {
//eval youtube

// let add = "10 + 10 ";

// // console.log(add);

// let result = eval(add)


// console.log(result);

// let input = document.querySelector(".input");
// let button = document.querySelector(".button");
// let pri = document.querySelector(".print");

// button.addEventListener("click",function(){
//     let result = eval(input.value);
//     // console.log(result);
//     pri.innerHTML = result;
// })




