import Com_A from './Com_A'
import React, { useCallback, useState } from 'react'

const UseCallBack = () => {

    const[add ,setAdd] = useState(0)
    const[count ,setCount] = useState(0)

    const learning = useCallback(
         () =>{
            // some operation
        },[count])

  return (
    <div className='text-center'>
      <h1>lerning UseCallback</h1>
      <Com_A learning={learning} count1={count}/>
      <h1>{add}</h1>
      <button className='bg-purple-500 p-2 rounded-lg' onClick={() =>setAdd(add + 1)}>Addition</button>
      <h1>{count}</h1>
      <button className='bg-purple-500 p-2 rounded-lg ms-4' onClick={() =>setCount(count + 2)}>count</button>
    </div>
  )
}

export default UseCallBack
