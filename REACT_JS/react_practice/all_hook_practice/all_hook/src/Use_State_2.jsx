import React from 'react'
import { useState } from 'react'

const Use_State_2 = () => {

    const [inputvalue, setInputVaalue] = useState("pedro")

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputVaalue(newValue)
    }

    return (
        <div className='justify-center flex pt-10'>
            <input type="text" placeholder='Enter Something...' onChange={onChange} />{inputvalue}

        </div>
    )
}

export default Use_State_2
