import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user } = use(AuthContext)
    const location = useLocation()
    
    if (!user) {
       return <Navigate to="/signIn" state={location.pathname} />
    }

    return children;
};

export default PrivateRoute;