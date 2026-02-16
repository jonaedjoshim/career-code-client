import React from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import { myApplicationsPromise } from '../../api/applicationApi'
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {

    const { user } = useAuth()

    return (
        <div>
            <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)} />
        </div>
    );
};

export default MyApplications;