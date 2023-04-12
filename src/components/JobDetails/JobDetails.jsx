import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../../assets/All Images/Vector.png'
import Banner1 from '../../assets/All Images/Vector-1.png'
import JobsDetailsData from '../JobsDetailsData/JobsDetailsData';
const JobDetails = () => {
    const { id } = useParams();
    const features = useLoaderData();
    const data = features.find((feature) => feature.id === parseInt(id));
    return (
        <div className='w-4/5 mx-auto'>
            <div className='h-[298px] w-full relative flex justify-center items-center'>
                <img src={Banner1} className='absolute top-0 right-0' />
                <h1 className='text-[32px] font-bold'>Job Details</h1>
                <img src={Banner} className='absolute bottom-0 left-0' />
            </div>
            <JobsDetailsData key={data.id} data={data}></JobsDetailsData>

        </div>

    );
};

export default JobDetails;