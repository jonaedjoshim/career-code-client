import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();

    console.log("Console-e Data:", job);

    return (
        <div className="p-10">
            {/* <h1>Job Title: {job.title}</h1>
            <p>Company: {job.company}</p> */}
        </div>
    );
};

export default JobDetails;