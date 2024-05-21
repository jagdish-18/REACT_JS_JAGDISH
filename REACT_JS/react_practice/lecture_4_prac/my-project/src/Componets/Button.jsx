import React from 'react'

 export const ButtonHome = () => {
  return (
    <div>
      <div className='bg-purple-500 px-4 py-2 rounded-sm'>
        <a className='text-white font-bold' href="">contact</a>
      </div>
    </div>
  )
}

const ButtonAbout = () => {
    return (
      <div>
        <div className='bg-green-500 px-4 py-2 rounded-sm'>
          <a className='text-white font-bold' href="">contact</a>
        </div>
        <ButtonHome/>
      </div>
    )
  }

export default ButtonAbout
