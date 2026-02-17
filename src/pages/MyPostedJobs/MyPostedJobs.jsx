import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/jobsApi.js'

const MyPostedJobs = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    My Posted Jobs
                </h2>

                <Suspense fallback={<span className="loading loading-spinner loading-lg mx-auto block"></span>}>
                    <JobLists
                        jobsCreatedByPromise={jobsCreatedByPromise(user.email, user.accessToken)}
                    />
                </Suspense>
            </div>
        </div>
    );
};

export default MyPostedJobs;
