import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
const AppliedJobsDetails = ({ job }) => {
    console.log(job.company_name)
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, salary, location } = job
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mt-12">
                <figure><img src={company_logo} className='w-full h-[50px]' /></figure>
                <div className="card-body relative">
                    <h2 className="card-title text-2xl">{job_title}</h2>
                    <h2 className="card-title text-xl">{company_name}</h2>
                    <div className='flex justify-start w-1/3 gap-5'><span className='px-5 py-2.5 border border-2 rounded border-violet-600
                 text-violet-500'>{remote_or_onsite}</span>
                        <span className='border border-2 px-5 py-2.5  rounded border-violet-600 
                 text-violet-500'>{fulltime_or_parttime}</span></div>
                    <div className='flex justify-start w-2/4'>
                        <p className=''><MapPinIcon className="h-6 w-6 text-violet-400 inline-block" />{location}</p>
                        <p ><CurrencyDollarIcon className="h-6 w-6 text-violet-400 inline-block" />{salary}</p>
                    </div>
                    <div className="card-actions bottom-1/2 right-12 absolute">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AppliedJobsDetails;