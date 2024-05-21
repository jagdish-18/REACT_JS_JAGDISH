import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Com_2 = (props) => {
  return (
    <div>
      <h1 className='text-[50px] text-center text-red-800 font-bold'>React Rendering Practice</h1>
      <ul className='text-center text-2xl text-blue-800 font-bold'>
        <Product name='Oppo' isStoked={true}/>
        <Product name='IPhone' isStoked={false}/>
        <Product name='Nokia' isStoked={false}/>
        <Product name='Samsung' isStoked={true}/>
        <Product name='Vivo' isStoked={true}/>
      </ul>
    </div>
  )
}

export const Product = ({name ,isStoked}) =>{
    return <li>
        {isStoked ? <b> {name + "avilable"} </b>  :  <del>{name + "NotAvilable"}</del>}
        </li>
}

export default Com_2

// {isStoked ? name + <FontAwesomeIcon icon={faCheck} : name + <FontAwesomeIcon className='text-red-900' icon={faXmark} />/>}