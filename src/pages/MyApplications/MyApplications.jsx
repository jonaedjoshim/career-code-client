import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import { myApplicationsPromise } from '../../api/applicationApi';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {

    const { user } = useAuth();

    console.log('token firebase token', user.accessToken)

    return (
        <div>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}
                >
                </ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;