import React, { useContext, useState } from 'react';
import { FaLocationArrow, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { JobsContext } from '../../../App';


const FeaturedJob = () => {
    const allData = useContext(JobsContext||[])

    const [isFourCard, setIsFourCard] = useState(true);

    return (

        <div className='p-10 md:mx-72 md:pb-32 space-y-7'>
            <h2 className='text-dark-1 text-3xl md:text-5xl text-center font-bold'>Featured Jobs</h2>
            <p className='text-dark-3 mb-8 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                {
                    isFourCard ?
                        allData.slice(0, 4).map(job =>
                            <div
                                className='shadow-xl p-4 md:p-10 rounded-md space-x-2 md:space-y-4 relative top-0 transition-all duration-300 hover:-top-4' key={job.id}>
                                <img src={job?.logo} alt="" />
                                <h2 className='text-2xl'>{job?.job_title}</h2>
                                <h3 className='text-xl'>{job?.company_name}</h3>
                                <div className='space-x-2 md:space-x-4'>
                                    <button className='btn-outline '>Remote</button>
                                    <button className='btn-outline'>Full Time</button>
                                </div>
                                <div className='flex items-center py-4 md:py-2'>
                                    <p className='md:pr-20'><FaLocationArrow className='inline mr-4' />{job?.location}</p>
                                    <p><FaDollarSign className='inline' /> Salary : {job?.salary}</p>
                                </div>
                                <Link to={`/jobDetails/${job.id}`} className='btn-primary pt-4 inline-block'>View Details</Link>
                            </div>) :
                        allData.map(job =>
                            <div
                                className='shadow-xl p-10 rounded-md space-y-4 relative top-0 transition-all duration-300 hover:-top-4' key={job.id}>
                                <img src={job?.logo} alt="" />
                                <h2 className='text-2xl'>{job?.job_title}</h2>
                                <h3 className='text-xl'>{job?.company_name}</h3>
                                <div className='space-x-4'>
                                    <button className='btn-outline '>Remote</button>
                                    <button className='btn-outline'>Full Time</button>
                                </div>
                                <div className='flex items-center py-3'>
                                    <p className='pr-20'><FaLocationArrow className='inline mr-4' />{job?.location}</p>
                                    <p><FaDollarSign className='inline' /> Salary : {job?.salary}</p>
                                </div>
                                <Link to={`/jobDetails/${job.id}`} className='btn-primary pt-4 inline-block'>View Details</Link>
                            </div>)
                }

            </div>
            {
                isFourCard && <button onClick={() => setIsFourCard(!isFourCard)} className='btn-primary block mx-auto'>See All Jobs</button>
            }
        </div>

    );
};

export default FeaturedJob;