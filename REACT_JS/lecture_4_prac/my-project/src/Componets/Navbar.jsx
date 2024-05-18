import React from 'react'
import { ButtonHome } from './Button'
import ButtonAbout from './Button'

const Navbar = () => {
  return (
    <div className='bg-gray-500 p-4 flex justify-around items-center  mx-auto '>
      <div>
        <img className='w-24' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1715689836~exp=1715693436~hmac=33e05bf7b01bd1b1373d1063d4041daddfd5793edf6ae23b8ebae48cf8178bfc&w=740" alt="" />
      </div>
      <div>
        <nav>
            <ul className='flex'>
                <li className='ms-16'><a className='text-white font-bold' href="">Home</a></li>
                <li className='ms-16'><a className='text-white font-bold' href="">About</a></li>
                <li className='ms-16'><a className='text-white font-bold' href="">Pages</a></li>
                <li className='ms-16'><a className='text-white font-bold' href="">ContactUs</a></li>
                <li className='ms-16'><a className='text-white font-bold' href="">FaQ</a></li>
            </ul>
        </nav>
      </div>
      <ButtonHome/>
      <ButtonAbout/>
    </div>
  )
}

export default Navbar
