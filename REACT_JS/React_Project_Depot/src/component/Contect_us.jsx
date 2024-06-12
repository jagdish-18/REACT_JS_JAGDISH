import { IoIosArrowDropright } from "react-icons/io";


const Contect_us = () => {
  return (
    <>
      <div>

        <div> <div className="">
            <div className="flex justify-center items-center bg-image">
                <h1 className="text-6xl text-center text-white font-bold">
                Contect US
                </h1>
            </div>
            </div></div>

        <div className="flex justify-around mt-28 ">
          <div className="flex space-x-7 w-3/12 ">
            <div>
              <IoIosArrowDropright className="text-5xl" />
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold tracking-wider">PARIS STORE</h1>
              <p className="text-gray-400 text-lg font-light">
                86 rue de Raymond Poincaré, ParisMonday to Friday: 9am to 8pm
                depot@qodeinteractive.com
              </p>
            </div>
          </div>

          <div className="flex space-x-7 w-3/12">
            <div>
              <IoIosArrowDropright className="text-5xl" />
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold tracking-wider">MADRID STORE</h1>
              <p className="text-gray-400 text-lg font-light">
                86 rue de Raymond Poincaré, ParisMonday to Friday: 9am to 8pm
                depot@qodeinteractive.com
              </p>
            </div>
          </div>

          <div className="flex space-x-7 w-3/12 ">
            <div>
              <IoIosArrowDropright className="text-5xl" />
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold tracking-wider">BERLIN STORE</h1>
              <p className="text-gray-400 text-lg font-light">
                86 rue de Raymond Poincaré, ParisMonday to Friday: 9am to 8pm
                depot@qodeinteractive.com
              </p>
            </div>
          </div>
        </div>

        <hr className="border-0.5 mx-16 mt-20 border-gray-200" />

        <div className="text-center px-[20%] h-auto mt-20">
          <h1 className="text-lg font-bold tracking-wider">
            SUBSCRIBE TO NEWSLETTER
          </h1>
          <p className="text-3xl mt-8 text-gray-400 font-light ">
            Your brand’s power lies in dominance. It is better to have 50% of
            one market, instead of 10% of five markets.
          </p>
          <div className="mt-10 flex -space-x-2">
            <input
              type="search"
              className="border-2 w-full py-4 text-sm ps-5"
              placeholder="Email Address"
              value=""
              name=""
              title=""
            />
            <button className=" py-5 px-12 font-semibold hover:text-white bg-black text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Contect_us;
