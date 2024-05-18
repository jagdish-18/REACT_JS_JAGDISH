// javascript dom method

/* innerHTML , textcontent , innertext */

// let dom = document.getElementById("para").innerHTML
// console.log(dom);

// let dom1 = document.getElementById("para").textContent
// console.log(dom1);

// let dom2 = document.getElementById("para").innerText
// console.log(dom2);

// let dom3 = document.getElementById("para")
// console.log(dom3);

// new element using javascript
// 1 createElement
// 2 textContent
// 3 appenChild

// let newElement = document.createElement('marquee')
// newElement.setAttribute("bgcolor" , "green")
// newElement.style.color = "white"
// newElement.textContent = "this is marquee tag"
// document.body.appendChild(newElement)

// let image = document.createElement('img')
// image.setAttribute('src' , 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
// document.body.appendChild(image)

// let dom4 = document.getElementById("demo").style.color = "pink"

// clasname

// let dom5 = document.getElementsByClassName("heading")

// dom5[0].style.color = "red"
// dom5[1].style.color = "red"
// dom5[2].style.color = "red"
// dom5[3].style.color = "red"

// console.log(dom5);

// let array = [1111 , 12 , 1365];
// console.log(array);

// // querySelector , 

// let dom6 = document.querySelector(".heading")
// dom6.style.backgroundColor = "purple"
// console.log(dom6);

// let dom8 = document.querySelector("a[target='_blank']")

// dom8.style.color = "black"

// let dom9 = document.querySelector("input[type='text']")
// let dom10 = document.querySelector("input[type='email']")
// let dom11 = document.querySelector("input[type='password']")

// dom9.style.backgroundColor = "pink"
// dom10.style.backgroundColor = "yellow"
// dom11.style.backgroundColor = "blue"

// querySelectorAll

// let dom12 =document.querySelectorAll(".heading")
// dom12[0].style.color = "pink"
// dom12[1].style.color = "green"

// addEventListener

// document.getElementById('color').addEventListener('mouseover',function(){
//     document.getElementById('demo').style.color = "yellow"
// })

// function color(){
//     document.getElementById("demo").style.color = "orange"
// }

// attributes

// let value = document.getElementById('link')attributes

// console.log(value);

// hasattribute

// let dom5 = document.getElementById('link').hasAttribute('class') 

// console.log(dom5);  // true //false

// hasattributes

// let dom6 = document.body.hasAttributes()

// console.log(dom6);

// document.getElementById('focus').addEventListener('click' , function focus(){
//     document.getElementById('input').focus();

// })
// document.getElementById('blur').addEventListener('click' , blur)

// function focus(){
//     document.getElementById('input').focus();
// }

// function blur(){
//     document.getElementById('input').blur();
// }

// let dom3 = document.getElementById('list').childElementCount

// console.log(dom3);  // 6

// let dom4 = document.getElementById('list').childNodes

// dom4[1].style.color = "orange"
// dom4[3].style.color = "green"

// console.log(dom4);

// classlist

// let dom1 = document.getElementById('demo')
// dom1.className = "heading"
// console.log(dom1);

// dom1.classList.add('heading-1');

// dom1.classList.remove('heading-1')

// function toggle(){
//     let dom1 = document.getElementById('demo')
//     dom1.className = 'heading'
//     dom1.classList.toggle('heading')
//     dom1.classList.add('h-1tag')
// }

    // document.getElementById('checkbox').addEventListener('mouseover', function(){
    //     document.getElementById('checkbox').click()
    // })

    // let list = document.getElementById('list').firstChild.textContent

    // console.log(list);

    // let list1 = document.getElementById('list').firstElementChild.textContent

    // console.log(list1);

let pro = new promise(function(resolve ,reject){
    reject("promise rejected");
}).than(function(result){
    console.log(result);
})
.than(function(){
    console.log('get food');
}).catch(function(error){   
    console.log(error);
})

console.log(pro);

    