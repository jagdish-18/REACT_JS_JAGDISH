import React from 'react'

const Com_3 = (props) => {
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

export const Product = ({name , isStoked}) => {
    return <li>{name} {isStoked && "IsStoked"}</li>
}

export default Com_3
