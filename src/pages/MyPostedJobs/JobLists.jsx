import React, { use } from 'react';
import { Link } from 'react-router-dom';

const JobLists = ({ jobsCreatedByPromise }) => {

    const data = use(jobsCreatedByPromise);

    // ensure array
    const jobs = Array.isArray(data) ? data : data?.data || [];

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">
                Jobs created by you: 
                <span className="text-primary ml-2">
                    {jobs.length}
                </span>
            </h2>

            {
                jobs.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                        No jobs found.
                    </div>
                ) : (
                    <div className="overflow-x-auto rounded-xl shadow">
                        <table className="table table-zebra">
                            <thead className="bg-base-300">
                                <tr>
                                    <th>#</th>
                                    <th>Job Title</th>
                                    <th>Deadline</th>
                                    <th>Applications</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    jobs.map((job, index) => (
                                        <tr key={job._id} className="hover">
                                            <th>{index + 1}</th>
                                            <td className="font-medium">
                                                {job.title}
                                            </td>
                                            <td>{job.deadline}</td>
                                            <td>
                                                <span className="badge badge-secondary">
                                                    {job.application_count || 0}
                                                </span>
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/applications/${job._id}`}
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    View Applications
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default JobLists;
