import React from 'react';
import { Link } from 'react-router-dom';

const JobItem = ({ data }) => {
    console.log(data)
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = data
    return (
        <div className="w-3/4 mx-auto">
            <div style={{ height: '450px' }} className="card bg-slate-200 shadow-xl">
                <img src={company_logo} alt="" className="w-2/5 md:w-2/3 pt-2 pl-2 h-2/3" />
                <div className="card-body flex flex-col">
                    <div>
                        <h2 className="card-title text-2xl">{job_title}</h2>
                        <p className="card-subtitle text-xl py-2">{company_name}</p>
                        <div className="card-actions flex flex-col md:flex-row">
                            <button className="btn btn-primary mb-2 md:mr-2 h-10">{remote_or_onsite}</button>
                            <button className="btn btn-primary h-10">{fulltime_or_parttime}</button>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <span><img src={location} />{location}</span>
                        <span>{salary}</span>
                    </div>
                    <Link to={{
                        pathname: '/jobDetails',
                        state: { data }
                    }}>
                        <div className="card-actions">
                            <button className="btn btn-primary h-10">View Details</button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default JobItem;