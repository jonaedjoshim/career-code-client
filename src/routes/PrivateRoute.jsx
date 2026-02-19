import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className='w-fit mx-auto mt-52'>
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;