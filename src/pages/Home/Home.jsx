import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {

    const jobsPromise = fetch('http://localhost:5000/jobs/').then(res => res.json())

    return (
        <div>
            <Banner />
            <Suspense fallback={'Loading hot jobs...'}>
                <HotJobs jobsPromise={jobsPromise} />
            </Suspense>
        </div>
    );
};

export default Home;