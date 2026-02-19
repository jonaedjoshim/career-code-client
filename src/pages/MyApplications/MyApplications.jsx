import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import { myApplicationsPromise } from '../../api/applicationApi';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {

    const { user } = useAuth();

    return (
        <div>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}
                />
            </Suspense>
        </div>
    );
};

export default MyApplications;