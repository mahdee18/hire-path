import React, { useEffect, useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const Category = () => {
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        fetch("category.json")
            .then((res) => res.json())
            .then((data) => setJobData(data));
    }, []);
    return (
        <section className="max-w-7xl py-24 mx-auto px-4">
            <h2 className="text-center text-4xl text-gray-900 font-bold">
                Job Category List
            </h2>
            <p className="text-[#757575;] mt-[16px] text-center">
                Explore thousands of job opportunities with all the information you
                need. Its your future
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 rounded-lg mt-8">
                {jobData.map((data) => (
                    <CategoryDetails key={data.id} data={data} />
                ))}
            </div>

        </section>
    );
};

export default Category;