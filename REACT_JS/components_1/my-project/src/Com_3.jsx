import React from 'react'

const Com_3 = (props) => {
  return (
    <div>
      <div className="w-[300px] h-[500px] border border-gray-950 rounded-lg shadow-xl ms-6">
            <div className="">
              <img
                className="w-[300px]"
                src="https://t4.ftcdn.net/jpg/05/64/31/67/240_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg"
                alt=""
              />
            </div>
            <div className="mt-10">
              <h1 className="text-gray-800 text-2xl">{props.title}</h1>
            </div>
            <div className="m-4 mt-3">
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis doloremque quasi mollitia? Maxime ullam porro earum
                eius atque quam quisquam, voluptatibus provi.
              </p>
            </div>
            <div className="mt-6">
              <button className="border-2 border-blue-500 h-10 w-36 rounded-lg">
                Go AnyWhwere
              </button>
            </div>
          </div>
    </div>
  )
}

export default Com_3


