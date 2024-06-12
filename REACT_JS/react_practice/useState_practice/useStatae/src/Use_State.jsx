import React from 'react'
import { useState } from 'react'

const initialState = 10

const Use_State = () => {

  const [state, setState] = useState(initialState)

  const hendleIncrement = () => {
    setState(state + 1)
  }

  const hendleDecrement = () =>{
    setState(state - 1)
  }

  const hendleReset = () =>{
    setState(initialState)
  }


  return (
    <div>
      <h1 className='text-center text-3xl text-green-800 bg-blue-500 p-4 font-bold'>React Hooks UseState</h1>
      <div className='justify-center flex pt-10'>
        <span className='bg-slate-400 p-4'>
          StateOfHook :-{state}
        </span>
      </div>
        <div className='justify-center flex pt-5'>
            <button className='h-10 w-28  bg-blue-700 text-white rounded-lg' onClick={hendleIncrement}>Increment</button>
            <button className='h-10 w-28  bg-blue-700 text-white rounded-lg ms-6' onClick={hendleDecrement}>Decrement</button>
            <button className='h-10 w-28  bg-blue-700 text-white rounded-lg ms-6' onClick={hendleReset}>Reset</button>
        </div>

    </div>
  )
}

export default Use_State
