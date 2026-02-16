import React, { useEffect, useState } from 'react';
import JobApplicationRow from './JobApplicationRow';
import { FaBriefcase } from 'react-icons/fa';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const email = "jamim5790@gmail.com"; // আপনার ডাইনামিক ইমেইল এখানে বসবে

    useEffect(() => {
        fetch(`http://localhost:5000/applications?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setApplications(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching applications:", err);
                setLoading(false);
            });
    }, [email]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-ring loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-10 bg-base-100 shadow-xl rounded-2xl my-10 border border-base-200">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary p-3 rounded-lg text-white">
                    <FaBriefcase size={24} />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-base-content">My Applications</h3>
                    <p className="text-gray-500">You have applied for {applications.length} positions</p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-base-200 text-base-content uppercase text-xs">
                            <th className="rounded-l-lg">#</th>
                            <th>Company & Role</th>
                            <th>Applied Date</th>
                            <th>Status & Links</th>
                            <th className="rounded-r-lg text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length > 0 ? (
                            applications.map((application, index) => (
                                <JobApplicationRow
                                    key={application._id}
                                    index={index}
                                    application={application}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-10 text-gray-400">
                                    No applications found. Start applying!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;