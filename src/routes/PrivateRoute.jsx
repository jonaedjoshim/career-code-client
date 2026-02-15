import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='w-fit mx-auto mt-52'> 
                <span className="loading loading-ring loading-xl"></span>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;