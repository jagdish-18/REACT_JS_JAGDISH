import React from 'react'
import { useState , useEffect } from 'react'

const UseEffect = () => {

    const [Count, setCounter] = useState(0)
    const [Data , setData] = useState("Ram")

    useEffect( () =>{
        console.log("Component Mounted");
    },[Count])

    function updateCount() {
        setCounter(Count + 1)
    }

    function updateData(){
        setData("seeta")
    }

    return (
        <div>
            <div className='text-center pt-10'>
                <h1>Button Clickes {Count} Times</h1>
                <button className='h-14 w-24 bg-green-800 text-white font-bold rounded-lg' onClick={updateCount}>Click</button>
                <button className='h-14 w-28 bg-green-800 text-white font-bold rounded-lg ms-3' onClick={updateData}>Updat VAlue</button>
            </div>
        </div>
    )
}

export default UseEffect
