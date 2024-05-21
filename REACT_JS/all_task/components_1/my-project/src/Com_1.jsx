import React from "react";

const Com_1 = (props) => {
  return (
    <div className="w-[300px] h-[500px] border border-gray-950 rounded-lg shadow-xl ">
            <div className="">
              <img
                className="w-[300px]"
                src="https://images.unsplash.com/photo-1542219535-b0d9d996a602?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  );
};

export default Com_1;
