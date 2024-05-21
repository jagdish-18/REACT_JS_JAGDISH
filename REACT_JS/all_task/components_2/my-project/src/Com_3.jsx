import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

const Com_3 = ({name ,heading}) => {
  return (
    <div>
      <div className="w-[350px] h-[550px] border border-gray-950 rounded-lg shadow-xl ms-6">
        <div className="">
          <img
            className="w-[350px] h-[250px] object-cover"
            src="https://t4.ftcdn.net/jpg/05/64/31/67/240_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg"
            alt=""
          />
        </div>
        <div className="mt-10">
          <h1 className="text-black font-bold text-2xl">{name}</h1>
          <p className="mt-4 text-gray-600 font-bold">{heading}</p>
        </div>
        <div className="m-4 mt-3">
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            doloremque quasi.
          </p>
        </div>
        <div className="mt-8 flex justify-center ">
          <span><a className="rounded-full bg-blue-400 flex  h-12 w-12 justify-center items-center " href=""><FontAwesomeIcon className="text-[30px] " icon={faYoutube} /></a></span>
          <span><a className="h-12 w-12 rounded-full bg-blue-400 flex justify-center items-center ms-4 " href=""> <FontAwesomeIcon className="text-[30px]"icon={faSquareTwitter} /></a></span>
          <span> <a className="h-12 w-12 rounded-full bg-blue-400 flex justify-center items-center ms-4" href=""> <FontAwesomeIcon className="text-[30px]" icon={faFacebook}  /></a></span>
        </div>
      </div>
    </div>
  );
};

export default Com_3;
