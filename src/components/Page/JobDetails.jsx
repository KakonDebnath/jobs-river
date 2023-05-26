import { Link, useLoaderData, useParams } from 'react-router-dom';
import SubHeader from '../SubHeader';
import { useContext, useEffect, useState } from 'react';
import { FunctionContext, JobsContext } from '../../App';
import { CurrencyDollarIcon, AcademicCapIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'


const JobDetails = () => {
    const [findData, setFindData] = useState({});
    const allData = useContext(JobsContext || []);
    const handleApply = useContext(FunctionContext);
    const { id } = useParams();
    useEffect(() => {
        const data = allData.find(item => item.id == id);
        setFindData(data);
    }, [])

    const { job_description, job_responsibility, educational_requirement, experiences, salary, job_title, contact_information } = findData;
    return (
        <>
            <SubHeader>Job Details</SubHeader>
            <div className='p-10 md:mx-72 md:my-32 md:flex justify-between gap-7 '>
                <div className='md:w-7/12 space-y-6'>
                    <div className="space-y-5">
                        <h3 className="text-dark-1 font-medium text-2xl text-justify">Job Description:</h3>
                        <p className='text-lg'>{job_description}</p>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-dark-1 font-medium text-2xl">Job Responsibility:</h3>
                        <ul className='text-dark-2'>
                            {job_responsibility?.map((res, index) => <li className='text-lg' key={index}>{`${index + 1}) ${res}`}</li>)}
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-dark-1 font-medium text-2xl">Educational Requirements:</h3>
                        <ul className='text-dark-2'>
                            {
                                educational_requirement?.map((edu, index) => <li className='text-lg' key={index}>{`${index + 1}) ${edu}`}</li>)
                            }
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-dark-1 font-medium text-2xl">Experiences:</h3>
                        <p className='text-dark-2 text-lg'>{experiences} in this field.</p>
                    </div>
                </div>
                <div className='  md:w-5/12  space-y-6 mt-10'>
                    <div className='bg-my-color-1 bg-opacity-10 rounded-md p-5 space-y-4'>
                        <div className='space-y-5'>
                            <h2 className='text-dark-1 text-xl font-bold'>Job Details</h2>
                            <hr />
                            <div>
                                <p className='text-dark-2 text-xl font-semibold mt-3 flex items-center'>
                                    <CurrencyDollarIcon className="h-6 w-6 text-blue-500 mr-3" />Salary : <span className='text-dark-3 font-normal'>{salary} (Per Month)</span></p>
                                <p className='text-dark-2 text-xl font-semibold mt-3 flex items-center'>
                                    <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-3" />Job Title :
                                    <span className='text-dark-3 font-normal'>{job_title}</span></p>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <h2 className='text-dark-1 text-xl font-bold'>Contact Information</h2>
                            <hr />

                            <div>
                                <p className='text-dark-2 text-xl font-semibold mt-3 flex items-center'>
                                    <PhoneIcon className="h-6 w-6 text-blue-500 mr-3" />Phone :
                                    <span className='text-dark-3 font-normal'>{contact_information?.phone}</span></p>

                                <p className='text-dark-2 text-xl font-semibold mt-3 flex items-center'>
                                    <EnvelopeIcon className="h-6 w-6 text-blue-500 mr-3" />Email : {contact_information?.email}<span className='text-dark-3 font-normal'></span></p>
                                    <p className='text-dark-2 text-xl font-semibold mt-3 flex items-center'>
                                    <MapPinIcon className="h-6 w-6 text-blue-500 mr-3" />Address : {contact_information?.address}<span className='text-dark-3 font-normal'></span></p>
                            </div>
                        </div>
                    </div>
                    <Link onClick={() => handleApply(id)} ><p className='btn-primary text-center mt-5'>Apply now</p></Link>
                </div>

            </div>
        </>
    );
};

export default JobDetails;