import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

const Com_1 = ({name , biss}) => {
  return (
    <div className="w-[350px] h-[550px] border border-gray-950 rounded-lg shadow-xl ">
      <div className="">
        <img
          className="w-[350px] h-[250px] object-cover "
          src="https://i0.wp.com/www.macfarlane-chard.co.uk/wp-content/uploads/2021/05/alice-1-e1688384889355.jpg?w=430&ssl=1"
          alt=""
        />
      </div>
      <div className="mt-6">
        <h1 className="text-black font-bold text-2xl">{name}</h1>
        <p className="mt-4 text-blue-900 font-bold text-xl">{biss}</p>
      </div>
      <div className="m-4 mt-3">
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          doloremque quasi mollitia? Maxime ullam porro earum eius.
        </p>
      </div>
      <div className="mt-8 justify-center flex ">
        <span><a href=""><FontAwesomeIcon className="text-[40px]  " icon={faYoutube} /></a></span>
        <span><a href=""><FontAwesomeIcon className="text-[40px] ms-4" icon={faSquareTwitter} /></a></span>
        <span><a href=""><FontAwesomeIcon className="text-[40px] ms-4 " icon={faFacebook} /></a></span>
      </div>
    </div>
  );
};

export default Com_1;
