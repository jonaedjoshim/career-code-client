import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'https://career-code-server-jonaed.vercel.app/',
});

const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth();

    useEffect(() => {

        const requestInterceptor = axiosInstance.interceptors.request.use(
            config => {
                if (user?.accessToken) {
                    config.headers.authorization = `Bearer ${user.accessToken}`;
                }
                return config;
            }
        );

        const responseInterceptor = axiosInstance.interceptors.response.use(
            response => response,
            error => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    signOutUser()
                        .then(() => console.log('User signed out due to unauthorized access'))
                        .catch(err => console.log(err));
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };

    }, [user, signOutUser]);

    return axiosInstance;
};

export default useAxiosSecure;
