import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaMoneyBillWave, FaEnvelope, FaUserTie } from 'react-icons/fa';

const JobDetails = () => {
    // লোডার থেকে সব ডাটা ডিস্ট্রাকচার করে নেওয়া হলো
    const { 
        _id, title, location, jobType, category, applicationDeadline, 
        salaryRange, description, company, requirements, responsibilities, 
        hr_email, hr_name, company_logo 
    } = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto my-10 p-5 lg:p-10 bg-base-100 shadow-xl rounded-2xl border border-gray-200">
            {/* Header Section: Company Logo and Title */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b pb-8">
                <div className="flex items-center gap-5">
                    <img src={company_logo} alt={company} className="w-20 h-20 object-contain rounded-lg shadow-sm" />
                    <div>
                        <h1 className="text-3xl font-bold text-primary">{title}</h1>
                        <p className="text-xl font-medium text-gray-500">{company}</p>
                    </div>
                </div>
                <Link to={`/jobApply/${_id}`}>
                    <button className="btn btn-primary btn-lg px-10 shadow-md">Apply Now</button>
                </Link>
            </div>

            {/* Info Grid: Key details at a glance */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <FaLocationArrow className="text-primary" />
                    <div><p className="text-xs text-gray-400">Location</p><p className="font-semibold">{location}</p></div>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <FaBriefcase className="text-primary" />
                    <div><p className="text-xs text-gray-400">Job Type</p><p className="font-semibold">{jobType}</p></div>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <FaMoneyBillWave className="text-primary" />
                    <div><p className="text-xs text-gray-400">Salary Range</p><p className="font-semibold">{salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}</p></div>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <FaCalendarAlt className="text-primary" />
                    <div><p className="text-xs text-gray-400">Deadline</p><p className="font-semibold">{applicationDeadline}</p></div>
                </div>
            </div>

            {/* Main Content: Description, Requirements, and Responsibilities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h3 className="text-2xl font-bold mb-3 border-l-4 border-primary pl-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold mb-3 border-l-4 border-primary pl-3">Requirements</h3>
                        <div className="flex flex-wrap gap-2">
                            {requirements.map((req, idx) => (
                                <div key={idx} className="badge badge-outline badge-primary p-4">{req}</div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold mb-3 border-l-4 border-primary pl-3">Responsibilities</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {responsibilities.map((resp, idx) => <li key={idx}>{resp}</li>)}
                        </ul>
                    </section>
                </div>

                {/* Sidebar: HR Contact Info */}
                <div className="bg-base-200 p-8 rounded-2xl h-fit border border-base-300 shadow-inner">
                    <h3 className="text-xl font-bold mb-6 text-center">Contact HR</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaUserTie className="text-gray-500" />
                            <p><strong>Name:</strong> {hr_name}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-gray-500" />
                            <p className="break-all"><strong>Email:</strong> {hr_email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;