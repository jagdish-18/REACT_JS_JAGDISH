import React from 'react'
import { useState } from 'react'

const initialState = 10

const UseState_Task_1 = () => {

  const [state, setState] = useState(10)

  const hendleIncrement = () => {
    setState(state + 1)
  }

  const hendleDecrement = () => {
    if (state > 0) {
      setState(state - 1)

    }
    else {
      setState(0)
    }
  }

  const hendleReset = () => {
    setState(initialState)
  }

  return (
    <div>
      <div className='flex justify-center h-screen items-center'>
        <div className='h-[300px] w-[600px] border-2 border-blue-700 rounded-lg shadow-lg shadow-blue-700'>
          <div className=' flex justify-center pt-2'>
            <h1 className=' text-center text-3xl text-green-800 bg-blue-500 p-4 font-bold w-[400px] '>React UseState Task 1</h1>
          </div>
          <div className='justify-center flex pt-10'>
            <span className='bg-slate-400 items-center flex justify-center rounded-lg h-14 w-14 text-xl'>
              {state}
            </span>
          </div>
          <div className='justify-center flex pt-5'>
            <button className='h-10 w-28  bg-blue-700 text-white rounded-lg' onClick={hendleIncrement}>Increment</button>
            <button className='h-10 w-28  bg-blue-700 text-white rounded-lg ms-6' onClick={hendleDecrement}>Decrement</button>
            <button className='h-10 w-28  bg-blue-700 text-white rounded-lg ms-6' onClick={hendleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseState_Task_1
