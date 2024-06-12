import React from 'react'
import { useState, useEffect } from 'react'


const UseEffect = () => {

    const [Count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count is ${Count}`
    }, [Count])

    return (
        <div>
            <h1 className='text-center bg-red-800 text-white font bold p-2 text-2xl'>React UseEffect Hook</h1>
            <div className='pt-5'>
                <span className='text-xl'>{Count}</span>
                <button className='h-12 w-24 bg-purple-950 rounded-lg text-white' onClick={() => setCount(Count + 1)}>Increment</button> 
            </div>
        </div>
    )
}

export default UseEffect
