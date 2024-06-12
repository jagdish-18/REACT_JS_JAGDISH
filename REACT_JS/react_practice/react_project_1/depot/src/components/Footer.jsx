import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='container mx-auto border-t flex mt-10'>
                <div className='mt-5 ms-16'>
                    <div>
                        <h4 className='footer-title'>CUSTOMER SERVICE</h4>
                    </div>
                    <div className='mt-5 '>
                        <p className='service'><a href="">Help & Contact</a></p>
                        <p className='service'><a href="">Returns $ Refund</a></p>
                        <p className='service'><a href="">Online Stores</a></p>
                        <p className='service'><a href="">Terms & Conditions</a></p>
                    </div>
                </div>
                <div className='mt-5 ms-40'>
                    <div>
                        <h4 className='footer-title'>COMPANY</h4>
                    </div>
                    <div className='mt-5'>
                        <p className='service'><a href="">What We Do</a></p>
                        <p className='service'><a href="">Available Services</a></p>
                        <p className='service'><a href="">Latest Posts</a></p>
                        <p className='service'><a href="">FAQs</a></p>
                    </div>
                </div>
                <div className='mt-5 ms-40'>
                    <div>
                        <h4 className='footer-title'>SOCIAL MEDIA</h4>
                    </div>
                    <div className='mt-5'>
                        <p className='service'><a href="">Twitter</a></p>
                        <p className='service'><a href="">Instagram</a></p>
                        <p className='service'><a href="">Tumblr</a></p>
                        <p className='service'><a href="">Pinterest</a></p>
                    </div>
                </div>
                <div className='mt-5 ms-40'>
                    <div>
                        <h4 className='footer-title'>PROFILE</h4>
                    </div>
                    <div className='mt-5'>
                        <p className='service'><a href="">My Account</a></p>
                        <p className='service'><a href="">Checkout</a></p>
                        <p className='service'><a href="">Order Tracking</a></p>
                        <p className='service'><a href="">Help & Support</a></p>
                    </div>
                </div>
            </div>
            <div className='border-t mt-32 justify-between flex'>
                <div>
                <div className='mt-5'>
                    <p className='qode ms-20'>@ 2021 Qode Interactive. All Right Reserved </p>
                </div>
                </div>
                <div className='flex mt-5 gap-x-5 mb-5'>
                     <h5 className='text-[12px] text-gray-500'>Follow Us</h5>
                    <ul className='flex gap-x-5 me-[90px]'>
                        <li><p><span><TiSocialTwitter className='size-4'/></span></p></li>
                        <li><p><span><FaInstagramSquare className='size-4' /></span></p></li>
                        <li><p><span><FaFacebookF className='size-4 '/></span></p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
