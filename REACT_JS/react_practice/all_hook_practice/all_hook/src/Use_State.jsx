import React from 'react'
import { useState } from 'react'

const Use_State = () => {

    const [Count, setCount] = useState(0)

    function Increment() {
        setCount(Count + 1)
    }



    return (
        <div>
            <div className=' pt-5'>
                <div className='justify-center  flex '>
                    <p className='text-2xl bg-blue-700 rounded-full h-10 w-10 text-white text-center'>{Count}</p>
                </div>
                <div className='justify-center flex pt-5'>
                    <button className='h-10 w-24 bg-purple-900 text-white rounded-lg' onClick={Increment}>Increment</button>
                    <button className='h-10 w-24 bg-purple-900 text-white rounded-lg ms-3' onClick={() => setCount(Count - 1)}>Decrement</button>
                    <button className='h-10 w-24 bg-purple-900 text-white rounded-lg ms-3' onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Use_State
