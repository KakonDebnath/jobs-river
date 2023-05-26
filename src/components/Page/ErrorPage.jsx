import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();

    return (
        <div className='p-10 bg-my-color-1 bg-opacity-30 md:mx-72 min-h-screen md:flex justify-center items-center '>
            <div className='space-y-10 text-center'>
                <h2 className='text-my-color-2 text-3xl md:text-7xl'>Page Not Fount</h2>
                <h2 className='text-dark-7 font-bold text-5xl md:text-7xl bg-dark-4 inline-block p-10 md:p-20 rounded-full '>{status?status:"404"}</h2>
                <h3 className='text-dark-1 text-3xl md:text-5xl'>{error?.message||"Page Not Found"}</h3>
                <Link to='/' ><p className='btn-primary inline-block mt-10'>Back to home</p></Link>
            </div>
        </div>
    );
};

export default ErrorPage;