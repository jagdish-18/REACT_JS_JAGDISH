import React from 'react'
import { useRef } from 'react'

const RefTutorial = () => {

    const inputRef = useRef(null);

    function hendleChange(){
         inputRef.current.value = "";
    }

  return (
    <div>
      <h1>pedro</h1>
      <input type="text" placeholder='Ex....'  ref={inputRef}/>
      <button className='bg-purple-500 p-2' onClick={hendleChange}>Change Name</button>
    </div>
  )
}

export default RefTutorial
