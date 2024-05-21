import React from 'react'
import Button from './Button'

const Com_2 = ({title , heading}) => {
  return (
    <div>
      <div className="w-[350px] h-[550px] border border-gray-950 rounded-lg shadow-xl ms-6 ">
            <div className="">
              <img
                className="w-[350px] h-[250px] object-cover" src="https://cancer.osu.edu/-/media/images/cancer/website/blog/2019/june/fruit-spread.jpeg" alt="" />
            </div>
            <div className="mt-4 text-start ms-4">
              <p className='text-8 text-rose-600 font-bold text-xl'>{title}</p>
              <h1 className="text-black-800 font-bold text-2xl mt-2">{heading}</h1>
            </div>
            <div className="text-start ms-4 mt-3">
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis doloremque quasi mollitia? Maxime ullam porro earum
              </p>
            </div>
            <Button/>
          </div>
    </div>
  )
}

export default Com_2
