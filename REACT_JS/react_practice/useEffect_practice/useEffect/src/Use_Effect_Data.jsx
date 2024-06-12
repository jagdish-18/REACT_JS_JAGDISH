import React from 'react'
import { useState , useEffect } from 'react'

const Use_Effect_Data = () => {

    const[data , setData] = useState()
    
    console.log("state" ,data);

    // useEffect(() => {

    // })

    const Todolist = async() =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        
    }

    
  return (
    <div>
      <button onClick={Todolist}>OnClick</button>
      <ul>
           {
            // data.map((item) => <li>{item.id}</li>)
           }
      </ul>
    </div>
  )
}

export default Use_Effect_Data
