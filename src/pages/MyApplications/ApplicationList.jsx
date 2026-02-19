import React, { useEffect, useState } from 'react';
import JobApplicationRow from './JobApplicationRow';
import ApplicationStats from './ApplicationStats';
import { FaBriefcase, FaInbox } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const ApplicationList = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email || !user?.accessToken) return;

        setLoading(true);

        fetch(`http://localhost:5000/applications?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setApplications(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));

    }, [user?.email, user?.accessToken]);


    if (!user?.email) {
        return (
            <div className="flex justify-center items-center">
                <p className="text-xl font-bold">Please login to see your applications.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className='w-fit mx-auto mt-52'>
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-10 my-10">
            <ApplicationStats applications={applications} />

            <div className="bg-base-100 shadow-xl rounded-3xl border-gray-200 border overflow-hidden mt-10">
                <div className="p-6 md:p-8 bg-base-200/40 border-b border-base-200 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                            <FaBriefcase size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-base-content">My Job Applications</h3>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Manage and Track</p>
                        </div>
                    </div>
                    <div className="badge badge-primary badge-outline p-4 font-bold">
                        {applications.length} Applied
                    </div>
                </div>

                <div className="p-4 md:p-6 overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-gray-400 text-xs uppercase font-bold tracking-tighter">
                                <th>#</th>
                                <th>Role & Company</th>
                                <th>Date Applied</th>
                                <th>Social Connects</th>
                                <th className="text-center">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.length > 0 ? (
                                applications.map((app, index) => (
                                    <JobApplicationRow
                                        key={app._id}
                                        index={index}
                                        application={app}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-24">
                                        <div className="flex flex-col items-center opacity-30">
                                            <FaInbox size={64} className="mb-4" />
                                            <p className="text-2xl font-black">No Applications Found!</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ApplicationList;