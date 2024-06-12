import React from 'react'
import img_1 from '/src/assets/Product_1.jpeg'
import img_2 from '/src/assets/Product_2.jpeg'
import img_3 from '/src/assets/Product_3.jpeg'
import img_4 from '/src/assets/Product_4.jpeg'
import img_5 from '/src/assets/Product_5.jpeg'
import img_6 from '/src/assets/Product_6.jpeg'
import img_7 from '/src/assets/Product_7.jpeg'
import img_8 from '/src/assets/Product_8.jpeg'
import { IoMdArrowDropdown } from "react-icons/io";

const ProductCard = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-between mt-11'>
                <ul className='flex gap-11 product ms-[60px]'>
                    <li className='hover:text-black text-gray-500'><span>All</span></li>
                    <li className='hover:text-black text-gray-500'><span>HOME DECOR</span></li>
                    <li className='hover:text-black text-gray-500'><span>LIGHTING</span></li>
                    <li className='hover:text-black text-gray-500'><span>DECORATION</span></li>
                    <li className='hover:text-black text-gray-500'><span>VASES</span></li>
                    <li className='hover:text-black text-gray-500'><span>BASICS</span></li>
                </ul>
                <div className='me-[58px]'>
                    <h6 className='flex'>Filter <span className='mt-1 ms-3'><IoMdArrowDropdown /></span></h6>
                </div>
            </div>
            <Card />
        </div>
    )
}

export const Card = () => {
    return (
        <div className='mt-5 container m-auto'>
            <div className=' flex  gap-x-10  ms-[60px] flex-wrap'>
                <div className=' '>
                    <img className='w-[260px] h-[320px]' src={img_1} alt="" />
                    <div className='text-center mt-4'>
                        <h2 className='text-[14px] text-black'>BASKET WITH HANDLES</h2>
                        <p className='text-gray-500 text-[13px]'>$160</p>
                    </div>
                </div>
                <div className=''>
                    <img className='w-[260px] h-[320px]' src={img_2} alt="" />
                    <div className='text-center mt-4'>
                        <h2 className='text-[14px] text-black'>FLOWER VASE</h2>
                        <p className='text-gray-500 text-[13px]'> <del className='me-2'>$210</del>$170</p>
                    </div>
                </div>
                <div>
                    <img className='w-[260px] h-[320px]' src={img_3} alt="" />
                    <div className='text-center mt-4'>
                        <h2 className='text-[14px] text-black'>DECO ACCESSORY</h2>
                        <p className='text-gray-500 text-[13px]'>$15</p>
                    </div>
                </div>
                <div>
                    <img className='w-[260px] h-[320px]' src={img_4} alt="" />
                    <div className='text-center mt-4'>
                        <h2 className='text-[14px] text-black'>WALL CLOCK</h2>
                        <p className='text-gray-500 text-[13px]'>$110</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-10 ms-[60px] mt-10 flex-wrap'>
                    <div>
                        <img className='w-[260px] h-[320px]' src={img_5} alt="" />
                        <div className='text-center mt-4'>
                        <h2 className='text-[14px] text-black'>NEWSPAPER STORAGE</h2>
                        <p className='text-gray-500 text-[13px]'>$90</p>
                    </div>
                    </div>
                    <div>
                        <img className='w-[260px] h-[320px]' src={img_6} alt="" />
                        <div className='text-center mt-4'>
                        <h2 className='text-[14px] text-black'>POTTERY VASE</h2>
                        <p className='text-gray-500 text-[13px]'>$60</p>
                    </div>
                    </div>
                    <div>
                        <img className='w-[260px] h-[320px]' src={img_7} alt="" />
                        <div className='text-center mt-4'>
                        <h2 className='text-[14px] text-black'>ROSE HOLDBACK</h2>
                        <p className='text-gray-500 text-[13px]'> <del className='me-2'>$300</del>$24</p>
                    </div>
                    </div>
                    <div>
                        <img className='w-[260px] h-[320px]' src={img_8} alt="" />
                        <div className='text-center mt-4'>
                        <h2 className='text-[14px] text-black'>TABLE LAMP</h2>
                        <p className='text-gray-500 text-[13px]'>$240</p>
                    </div>
                    </div>
                </div>
        </div>
    )
}


export default ProductCard
