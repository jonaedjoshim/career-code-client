import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import JobDetails from '../pages/jobDetails/JobDetails';
import JobApply from '../pages/JobApply/JobApply';
import PrivateRoute from '../routes/PrivateRoute';
import MyApplications from '../pages/MyApplications/MyApplications';
import AddJob from '../pages/AddJob/AddJob';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';
import ViewApplications from '../pages/ViewApplications/ViewApplications';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, element: <Home /> },
            { path: '/register', element: <Register /> },
            { path: '/signIn', element: <SignIn /> },
            {
                path: '/jobs/:id',
                element: <JobDetails />,
                loader: async ({ params }) => {
                    const res = await fetch(`https://career-code-server-jonaed.vercel.app/jobs/${params.id}`);
                    return res.json();
                }
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
                path: 'myApplications',
                element: <PrivateRoute><MyApplications /></PrivateRoute>,
            },
            {
                path: 'addJob',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: 'myPostedJob',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: 'applications/:job_id',
                element: <PrivateRoute><ViewApplications /></PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`https://career-code-server-jonaed.vercel.app/applications/job/${params.job_id}`)
            }
        ]
    }
])

export default router;
