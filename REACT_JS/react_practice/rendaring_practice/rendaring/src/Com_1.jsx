import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Com_1 = () => {
  return (
    <div>
      <h1 className='text-[50px] text-center text-red-800 font-bold'>React Rendering Practice</h1>
      <ul className='text-center text-2xl text-blue-800 font-bold'>
        <ProductList name='Oppo' isStoked={true}/>
        <ProductList name='IPhone' isStoked={false}/>
        <ProductList name='Vivo' isStoked={true}/>
        <ProductList name='Nokia' isStoked={false}/>
        <ProductList name='Samsung' isStoked={true}/>
      </ul>
    </div>
  )
}

export const ProductList = ({name , isStoked}) =>{
  if(isStoked){
       return <li>{name} + 'Stock is avilable' <FontAwesomeIcon icon={faCheck} /> </li>
  }
     return <li>{name} + 'Stock Not avilable' <FontAwesomeIcon className='text-red-900' icon={faXmark} /></li>
}

export default Com_1
