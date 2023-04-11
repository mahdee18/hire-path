import React, { useEffect, useState } from 'react';
import AppliedJobsDetails from '../AppliedJobsDetails/AppliedJobsDetails';
import Banner from '../../assets/All Images/Vector.png'
import Banner1 from '../../assets/All Images/Vector-1.png'

const Appliedjobs = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedButton, setSelectedButton] = useState(null);

    useEffect(() => {
        const jobsData = JSON.parse(localStorage.getItem("jobs")) || [];
        setJobs(jobsData);
    }, []);

    const handleOnsiteClick = () => {
        setSelectedButton('onsite');
        const onsiteJobs = jobs.filter(job => job.remote_or_onsite === 'Onsite');
        const remoteJobs = jobs.filter(job => job.remote_or_onsite === 'Remote');
        setJobs([...onsiteJobs, ...remoteJobs]);
    }

    const handleRemoteClick = () => {
        setSelectedButton('remote');
        const remoteJobs = jobs.filter(job => job.remote_or_onsite === 'Remote');
        const onsiteJobs = jobs.filter(job => job.remote_or_onsite === 'Onsite');
        setJobs([...remoteJobs, ...onsiteJobs]);
    }

    return (
        <div className='w-4/5 mx-auto relative'>
            <div className='h-[298px] w-full relative flex justify-center items-center'>
                <img src={Banner1} className='absolute top-0 right-0' />
                <h1 className='text-[32px] font-bold'>Applied Jobs</h1>
                <img src={Banner} className='absolute bottom-0 left-0' />
            </div>
            <div className='flex justify-center gap-4'>
                <button className={`btn ${selectedButton === 'onsite' ? 'btn-primary' : ''}`} onClick={handleOnsiteClick}>Onsite</button>
                <button className={`btn ${selectedButton === 'remote' ? 'btn-primary' : ''}`} onClick={handleRemoteClick}>Remote</button> 
            </div>
            <div>
                {
                    jobs.map(job => <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;
