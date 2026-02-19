import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();

    const handleStatusChange = (e, app_id) => {
        axios.patch(`https://career-code-server-jonaed.vercel.app/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application status updated.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Header Card */}
                <div className="bg-base-200 rounded-3xl shadow-xl p-8 mb-8 text-center">
                    <h2 className="text-4xl font-bold mb-2">
                        {applications.length} Applications
                    </h2>
                    <p className="text-base-content/70">
                        Manage and update applicant status easily
                    </p>
                </div>

                {/* Table Card */}
                <div className="bg-base-200 rounded-3xl shadow-xl p-6">

                    {
                        applications.length === 0 ? (
                            <div className="text-center py-16">
                                <h3 className="text-2xl font-semibold mb-2">
                                    No Applications Yet
                                </h3>
                                <p className="text-base-content/60">
                                    Applicants will appear here once they apply.
                                </p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    <thead className="bg-base-300">
                                        <tr>
                                            <th className="w-16">#</th>
                                            <th>Name</th>
                                            <th className="w-64">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            applications.map((application, index) => (
                                                <tr key={application._id} className="hover">
                                                    <th>{index + 1}</th>

                                                    <td>
                                                        <div className="font-semibold">
                                                            {application.applicant}
                                                        </div>
                                                        <div className="text-sm opacity-60">
                                                            {application.applicant_email}
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <select
                                                            onChange={e => handleStatusChange(e, application._id)}
                                                            defaultValue={application.status}
                                                            className="select select-bordered select-sm w-full"
                                                        >
                                                            <option disabled>Update Status</option>
                                                            <option>Pending</option>
                                                            <option>Interview</option>
                                                            <option>Hired</option>
                                                            <option>Rejected</option>
                                                        </select>
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

            </div>
        </div>
    );
};

export default ViewApplications;
