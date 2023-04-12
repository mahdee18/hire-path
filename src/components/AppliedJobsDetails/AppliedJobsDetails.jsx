import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
const AppliedJobsDetails = ({ job }) => {
    console.log(job);
    const {
        id,
        company_logo,
        job_title,
        company_name,
        remote_or_onsite,
        fulltime_or_parttime,
        salary,
        location,
    } = job;
    return (
        <div className="flex flex-col mb-6">
            <div className="relative max-w-full border border-1 border-gray-300 py-4 px-2 sm:py-6 sm:px-4 rounded">
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                    <div className="w-full sm:w-[240px] h-[240px] bg-[#F4F4F4] flex justify-center items-center mb-4 sm:mb-0">
                        <img className="w-[145px] h-[49px]" src={company_logo} alt="" />
                    </div>
                    <div className="flex flex-col flex-grow ml-0 sm:ml-8">
                        <h3 className="text-[#474747] font-bold text-xl sm:text-2xl mb-2">
                            {job_title}
                        </h3>
                        <p className="text-[#757575] font-semibold text-lg sm:text-xl mb-2">
                            {company_name}
                        </p>
                        <span className="flex items-center gap-2 mb-2">
                            <div className="w-[109px] h-[48px] rounded border border-1 border-[#7e90fe] text-[#7e90fe] flex justify-center items-center font-bold text-sm sm:text-base">
                                {remote_or_onsite}
                            </div>
                            <div className="w-[109px] h-[48px] rounded border border-1 border-[#7e90fe] text-[#7e90fe] flex justify-center items-center font-bold text-sm sm:text-base">
                                {fulltime_or_parttime}
                            </div>
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center">
                                <MapPinIcon className="h-6 w-6 text-violet-400 inline-block" />
                                <p className="text-base sm:text-xl">{location}</p>
                            </span>
                            <span className="flex items-center">
                                <CurrencyDollarIcon className="h-6 w-6 text-violet-400 inline-block" />
                                <p className="text-base sm:text-xl">Salary: {salary}</p>
                            </span>
                        </div>
                    </div>
                </div>

                <Link to={`/jobdetails/${id}`}>
                    <button className="block mx-auto mt-4 px-4 py-2.5 flex justify-center items-center font-bold text-base rounded-[4px] text-white bg-gradient-to-r from-blue-400 to-purple-600 sm:hidden">
                        View Details
                    </button>
                    <button className="hidden absolute right-0 mr-[47px] top-1/2 px-4 py-2.5 flex justify-center items-center font-bold text-base rounded-[4px] text-white bg-gradient-to-r from-blue-400 to-purple-600 sm:block">
                        View Details
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default AppliedJobsDetails;