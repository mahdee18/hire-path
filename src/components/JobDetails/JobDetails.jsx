import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();
    const features = useLoaderData();
    const data = features.find((feature) => feature.id === parseInt(id));
    console.log(data)
    return (
        <div>
            <p>{data.job_title}</p>
        </div>
    );
};

export default JobDetails;