import React, { useEffect, useState } from 'react';
import AppliedJobsDetails from '../AppliedJobsDetails/AppliedJobsDetails';
import Banner from '../../assets/All Images/Vector.png';
import Banner1 from '../../assets/All Images/Vector-1.png';

const Appliedjobs = () => {
  const [selectedSortOption, setSelectedSortOption] = useState('all');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const jobsData = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(jobsData);
    setFilteredJobs(jobsData);
  }, []);

  useEffect(() => {
    if (selectedSortOption === 'all') {
      setFilteredJobs(jobs);
    } else if (selectedSortOption === 'onsite') {
      const onsiteJobs = jobs.filter(job => job.remote_or_onsite === 'Onsite');
      setFilteredJobs(onsiteJobs);
    } else if (selectedSortOption === 'remote') {
      const remoteJobs = jobs.filter(job => job.remote_or_onsite === 'Remote');
      setFilteredJobs(remoteJobs);
    }
  }, [selectedSortOption, jobs]);

  const handleSortOptionChange = e => {
    setSelectedSortOption(e.target.value);
  };

  return (
    <div className="w-4/5 mx-auto relative">
      <div className="h-[298px] w-full relative flex justify-center items-center">
        <img src={Banner1} className="absolute top-0 right-0" />
        <h1 className="text-[32px] font-bold">Applied Jobs</h1>
        <img src={Banner} className="absolute bottom-0 left-0" />
      </div>
      <div className="flex justify-end items-center gap-4 p-8">
        <h2 className='text-xl'>Sort By:</h2>
        <select className="btn" value={selectedSortOption} onChange={handleSortOptionChange}>
          <option value="all">All</option>
          <option value="onsite">Onsite</option>
          <option value="remote">Remote</option>
        </select>
      </div>
      <div>
        {filteredJobs.map(job => (
          <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>
        ))}
      </div>
    </div>
  );
};

export default Appliedjobs;
