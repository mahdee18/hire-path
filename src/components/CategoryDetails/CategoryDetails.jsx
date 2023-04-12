import React from 'react';

const CategoryDetails = ({ data }) => {
    return (
        <div>
            <div className="card w-60 h-auto bg-slate-200 shadow-xl">
                <div className="card-body">
                    <img src={data.logo} className='w-1/5' alt="" />
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.job_available}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;