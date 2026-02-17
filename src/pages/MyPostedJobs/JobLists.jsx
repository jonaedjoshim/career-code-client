import React, { use } from 'react';
import { Link } from 'react-router-dom';

const JobLists = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise)

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">
                Jobs created by you: <span className="text-primary">{jobs.length}</span>
            </h2>

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
                                    <td className="font-medium">{job.title}</td>
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
        </div>
    );
};

export default JobLists;
