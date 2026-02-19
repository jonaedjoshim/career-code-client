import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaMoneyBillWave, FaTag, FaUserTie, FaEnvelope } from 'react-icons/fa';

const JobDetails = () => {
    const job = useLoaderData();

    const {
        _id, title, location, jobType, category,
        deadline, salaryRange = {},
        description, company,
        requirements = [], responsibilities = [],
        hr_email, hr_name, company_logo
    } = job;

    return (
        <div className="max-w-6xl mx-auto my-14 p-6 lg:p-12 bg-base-100 shadow-2xl rounded-3xl">

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b pb-8">
                <div className="flex items-center gap-5">
                    <img src={company_logo} alt={company} className="w-20 h-20 object-contain rounded-xl shadow-md" />
                    <div>
                        <h1 className="text-3xl font-extrabold text-primary">{title}</h1>
                        <p className="text-lg text-gray-500">{company}</p>
                    </div>
                </div>
                <Link to={`/jobApply/${_id}`}>
                    <button className="btn btn-primary btn-lg px-10 rounded-xl shadow-lg">
                        Apply Now
                    </button>
                </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-6 my-10">
                <div className="info-box"><FaLocationArrow /> {location}</div>
                <div className="info-box"><FaBriefcase /> {jobType}</div>
                <div className="info-box">
                    <FaMoneyBillWave />
                    {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}
                </div>
                <div className="info-box"><FaCalendarAlt /> {deadline}</div>
            </div>

            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold mb-3">Description</h3>
                    <p className="text-gray-600">{description}</p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-3">Requirements</h3>
                    <div className="flex flex-wrap gap-3">
                        {requirements.map((req, idx) => (
                            <span key={idx} className="badge badge-primary badge-outline p-4">
                                {req}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-3">Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul>
                </div>

                <div className="pb-4">
                    <h3 className="text-xl font-bold mb-6 decoration-primary">Quick Summary</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaTag className="text-gray-500" />
                            <p><strong>Category:</strong> {category}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaUserTie className="text-gray-500" />
                            <p><strong>HR Name:</strong> {hr_name}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-gray-500" />
                            <p className="break-all"><strong>Contact:</strong> {hr_email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
