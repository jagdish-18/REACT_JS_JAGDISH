import React from 'react'
import { useEffect ,useState} from 'react'
import axios from "axios"


const UseEffect = () => {

  const[userData , setData] = useState([])

    useEffect(() =>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            console.log(response.data);
            setData(response.data)
        })
    },[])

  return (
    <div>
       {
        userData.map((data) =>{
          return(
            <div>{data.name}</div>
          )
        })
       }
    </div>
  )
}

export default UseEffect
