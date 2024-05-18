var istatus = document.querySelector("h5")
var btn = document.querySelector(".add")

var frd = 0

btn.addEventListener("click" ,function(){
    if(frd == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color ="green"
        btn.innerHTML = "Remove Friend"
        frd = 1

    }else{
        istatus.innerHTML = "Strenger"
        istatus.style.color ="red"
        btn.innerHTML = "Add Friend"
        frd = 0
    }
})

