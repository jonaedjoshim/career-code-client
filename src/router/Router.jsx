import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import JobDetails from '../pages/jobDetails/JobDetails';
import JobApply from '../pages/JobApply/JobApply';
import PrivateRoute from '../routes/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/jobs/:id',
                element: <JobDetails />,
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:5000/jobs/${params.id}`);
                    return res.json();
                }
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoute><JobApply /></PrivateRoute>
            }
        ]
    }
])

export default router;