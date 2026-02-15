import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';

const MyApplications = () => {
    return (
        <div>
            <ApplicationStats />
            <Suspense fallback={<div className='w-fit mx-auto mt-52'>
                <span className="loading loading-ring loading-xl"></span>
            </div>}>
                <ApplicationList />
            </Suspense>
        </div>
    );
};

export default MyApplications;