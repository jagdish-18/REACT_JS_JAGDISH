import React from 'react'
import Navbar from '../Componets/Navbar'

const ContactUs = () => {

    const Data = {
       FirstName:"jaggi",
       LastName:"shiyal",
       Age:22,
       City:"surat"
    }
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl text-blue-950 text-center'>this is contactUs page</h1>
      <p>{Data.FirstName}</p>
      <p>{Data.LastName}</p>
      <p>{Data.Age}</p>
      <p>{Data.City}</p>
    </div>
  )
}

export default ContactUs
