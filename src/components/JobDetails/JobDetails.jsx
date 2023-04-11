import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, AtSymbolIcon, MapPinIcon } from '@heroicons/react/24/solid'
const JobDetails = () => {
    const { id } = useParams();
    const features = useLoaderData();
    const data = features.find((feature) => feature.id === parseInt(id));
    console.log(data)
    return (
        <div className='w-4/5 mx-auto'>
            <h2 className="text-center py-10 text-4xl text-gray-900 font-bold">Job Details</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-5 py-12">
                <div class="col-span-3 md:col-span-3 bg-slate-300 p-4 rounded">
                    <p><strong>Job Description: </strong>{data.job_description}</p> <br />
                    <p><strong>Job Responsibility:</strong>{data.job_responsibility}</p> <br />
                    <p><strong>Educational Requirements:</strong> <br /> <br />{data.educational_requirements}</p> <br />
                    <p><strong>Experiences:</strong> <br /> <br />{data.experiences}</p>
                </div>
                <div class="col-span-1 mx-auto md:col-span-1 bg-gray-200 p-4 rounded">
                    <div>
                        <h4 className='text-lg font-sans border-b border-gray-400'><strong>Job Details</strong></h4>
                        <p className='mt-6'><strong><CurrencyDollarIcon className="h-6 w-6 text-violet-400 inline-block" /> Salary:</strong> {data.salary}</p> <br />
                        <p><strong><CalendarDaysIcon className="h-6 w-6 text-violet-400 inline-block"></CalendarDaysIcon> Job title:</strong> {data.job_title}</p> <br />
                        <h4 className='text-lg font-sans border-b border-gray-400'><strong>Contact Information</strong></h4>
                        <p className='mt-6'><strong><PhoneIcon className="h-6 w-6 text-violet-400 inline-block" /> Phone:</strong> {data.contact_information.phone}</p>
                        <p className='mt-6'><strong><AtSymbolIcon className="h-6 w-6 text-violet-400 inline-block" />E-mail:</strong> {data.contact_information.email}</p>
                        <p className='mt-6'><strong><MapPinIcon className="h-6 w-6 text-violet-400 inline-block" />Address:</strong> {data.location}</p> <br />
                    </div>
                    <button class="w-full btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>

    );
};

export default JobDetails;