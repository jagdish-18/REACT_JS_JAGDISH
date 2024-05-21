import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Task_1 = (props) => {
  return (
    <div>
      <h1 className='text-[50px] text-center text-red-800 font-bold'>Sally Ride's Packing List</h1>
      <ul className='text-center text-3xl text-black font-bold'>
        <PackingLis name='Space suit' packed={true}/>
        <PackingLis name='Helmet with a golden leaf' packed={true}/>
        <PackingLis name='Photo of Tam' packed={false}/>
      </ul>
    </div>
  )
}

export const PackingLis = ({name , packed}) =>{
    return <li> {name} {packed ? <FontAwesomeIcon className='text-black font-bold' icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} /> }</li>}

export default Task_1
