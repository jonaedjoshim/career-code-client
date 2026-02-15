import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user } = use(AuthContext)
    if (!user) {
        <Navigate to="/signIn" />
    }

    return children;
};

export default PrivateRoute;