import React from 'react';
const Header = () => {
    return (
        <header className='md:max-h-[730px] overflow-hidden p-10 md:px-72 md:flex justify-between items-center gap-4  bg-my-color-2 bg-opacity-20'>
            <div className='space-y-4'>
                <h1 className='text-3xl text-center md:text-left md:text-7xl text-dark-1 font-bold'>Search For Your <span className='text-my-color-1'> Awesome Careers</span></h1>
                
                <p className='text-dark-3 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-primary'>Start Now</button>
            </div>
            <img className='object-cover' src='https://i.ibb.co/wCYwp53/header-Img.png' alt="" />
        </header>
    );
};

export default Header;