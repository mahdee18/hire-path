import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobItem from '../JobItem/JobItem';

const FeaturedJob = () => {
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch('jobData.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div>
            <div className="max-w-7xl pb-32 mx-auto px-4">
                <h2 className="text-center text-4xl text-gray-900 font-bold">
                    Featured Jobs
                </h2>
                <p className="text-[#757575;] mt-[16px] text-center">
                    Explore thousands of job opportunities with all the information you
                    need. Its your future
                </p>
            </div>
            <div className='w-4/5 mx-auto'>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {
                        job.map(data => <JobItem key={data.id} data={data}></JobItem>
                        )
                    }
                </div>
                <div className='text-center pt-12'>
                <button className='btn btn-primary'>See All jobs </button>
                </div>
            </div>

        </div>
    );
};

export default FeaturedJob;