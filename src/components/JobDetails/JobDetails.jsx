import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import JobsDetailsData from '../JobsDetailsData/JobsDetailsData';
const JobDetails = () => {
    const { id } = useParams();
    const features = useLoaderData();
    const data = features.find((feature) => feature.id === parseInt(id));
    return (
        <div className='w-4/5 mx-auto'>
            <h2 className="text-center py-10 text-4xl text-gray-900 font-bold">Job Details</h2>
            <JobsDetailsData key={data.id} data={data}></JobsDetailsData>

        </div>

    );
};

export default JobDetails;