import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const JobItem = ({ data, handleViewDetails }) => {

    const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = data
    return (
        <div className='p-12 h-[400px] border rounded relative'>
            <img className=' w-1/3' src={company_logo} alt="" />
            <h2 className='pt-8 text-2xl'>{job_title}</h2>
            <p className='py-3'>{company_name}</p>
            <div className='flex'>
                <p className='border border-2 rounded border-violet-600 me-5
                 text-violet-500 px-3'>{remote_or_onsite}</p>
                <p className='border border-2 rounded border-violet-600 
                 text-violet-500 px-3'>{fulltime_or_parttime}</p>
            </div>
            <div className='flex my-4'>
                <p className='me-5'><MapPinIcon className="h-6 w-6 text-violet-400 inline-block" />{location}</p>
                <p ><CurrencyDollarIcon className="h-6 w-6 text-violet-400 inline-block" />{salary}</p>
            </div>
            <Link to={`/jobdetails/${id}`}>
                <button
                    onClick={() => {
                        handleViewDetails(data);
                    }}
                    className="px-4 py-2.5 absolute flex justify-center items-center font-bold text-base rounded-[4px] text-white bg-gradient-to-r from-blue-400 to-purple-600 bottom-0 mb-5"
                >
                    View Details
                </button>
            </Link>


        </div>

    );
};

export default JobItem;