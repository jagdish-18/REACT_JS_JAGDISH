import React from 'react'
import { useReducer } from 'react'

const reducer = (State , action) => {
    switch(action.type){
        case "Inrement":
            return {Count: State.Count +1 , showText:State.showText}
        case "toggleShowtext":
            return {Count: State.Count +1, showText: !State.showText}
        default:
            return State;     
    }
}

const Reduce = () => {

   const[State , dispatch] = useReducer(reducer , {Count: 0 , showText:true})


    return (
        <div className='text-center'>
            <div>
                <h1>{State.Count}</h1>
            </div>
            <div>
                <button className='bg-blue-500 p-2 rounded-lg' onClick={() => {
                    dispatch({type: "Inrement"});
                    dispatch({type: "toggleShowtext"});
                }}>Click Here</button>
                {State.showText && <p>This Is A text</p>}
            </div>
        </div>
    )
}


export default Reduce
