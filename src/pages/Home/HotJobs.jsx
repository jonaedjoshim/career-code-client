import React, { use } from 'react';
import JobCard from '../Shared/JobsCard';

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);

    return (
        <section className='py-12'>
            <div className='px-4'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl font-bold text-base-content mb-2'>Hot Jobs of the Day</h2>
                    <p className='text-gray-500'>Find your next career move from top companies</p>
                    <div className='w-24 h-1 bg-primary mx-auto mt-4 rounded-full'></div>
                </div>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        jobs.map(job => <JobCard key={job._id} job={job} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default HotJobs;