import React, { useMemo } from 'react'
import { useState } from 'react'

const Memo = () => {

    const [add ,setAdd] = useState(0)
    const [minus ,setminus] = useState(100)

    const multi = useMemo(
        function Multiply(){
            console.log("Multiply");
           return add*10;
        },[add])


  return (
    <div className='text-center'>
      <h1>Learing UseMemo</h1>
      {multi}<br/>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span><br/>
      <button onClick={() => setminus(minus - 1)}>SubStration</button>
      <span>{minus}</span>

    </div>
  )
}

export default Memo
