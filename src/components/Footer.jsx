import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black text-white p-10 md:px-72 md:py-32 '>
            <div className='divide-white grid grid-cols-1 md:grid-cols-6 gap-6 border border-b-dark-2 border-t-0 border-l-0 border-r-0 pb-12'>
                <div className='col-span-2 space-y-4'>
                    <h2 className='text-3xl'>jobsRiver</h2>
                    <p className='text-dark-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolores eos laudantium sapiente omnis sed cum repellat rem aperiam</p>
                    <ul className='flex'>
                        <li className='px-3'><FaFacebook /></li>
                        <li className='px-3'><FaInstagram /></li>
                        <li className='px-3'><FaTwitter /></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-xl'>Company</h3>
                    <p className='text-dark-4'>About Us</p>
                    <p className='text-dark-4'>Works</p>
                    <p className='text-dark-4'>Latest News</p>
                    <p className='text-dark-4'>Careers</p>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-xl'>Product</h3>
                    <p className='text-dark-4'>Prototype</p>
                    <p className='text-dark-4'>Plans & Pricing</p>
                    <p className='text-dark-4'>Customers</p>
                    <p className='text-dark-4'>Integrations</p>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-xl'>Support</h3>
                    <p className='text-dark-4'>Help Desk</p>
                    <p className='text-dark-4'>Sales</p>
                    <p className='text-dark-4'>Become a Partner</p>
                    <p className='text-dark-4'>Developers</p>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-xl'>Contact</h3>
                    <p className='text-dark-4'>12/20, Panthopath, Dhaka</p>
                    <p className='text-dark-4'>01700-123456</p>
                </div>
            </div>
            <div className='flex justify-between items-center text-dark-3 pt-12'>
                <h2>@2023 jobsRiver All Rights Reserved</h2>
                <h2>Powered by jobsRiver</h2>
            </div>


        </div>
    );
};

export default Footer;