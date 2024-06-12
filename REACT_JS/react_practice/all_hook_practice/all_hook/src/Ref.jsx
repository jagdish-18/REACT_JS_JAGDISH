import React, { useState } from 'react'
import { useRef } from 'react'

const Ref = () => {

    const refElement = useRef("")
    const[name ,setName] = useState("jaggi")
    console.log(refElement);

    function Reset(){
        setName("")
        refElement.current.focus()
    }

    function hendleChange(){
        refElement.current.style.color="red" 
        refElement.current.value='shiyal'
    }

  return (
    <div>
      <h1>Learing UseRef</h1>
      <input type="text" ref={refElement} value={name} onChange={(e) => setName(e.target.value)} />
      <button className='bg-purple-400 p-2 ms-4 rounded-md'onClick={Reset}>Reset</button>
      <button  className='bg-green-400 p-2 ms-4 rounded-md'onClick={hendleChange}>hendleChange</button>
    </div>
  )
}

export default Ref
