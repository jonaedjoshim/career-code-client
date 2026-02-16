import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobApplicationRow = ({ application, index }) => {
    const {
        jobId,
        company,
        title,
        company_logo,
        appliedDate,
        linkedIn,
        github,
        resume
    } = application;

    const formattedDate = new Date(appliedDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    return (
        <tr className="hover:bg-base-200 transition-colors border-b border-base-200">
            <th className="font-medium text-gray-400">{index + 1}</th>

            {/* Company Info */}
            <td>
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 bg-white border p-1">
                            <img
                                src={company_logo}
                                alt={company}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-base-content">{title}</div>
                        <div className="text-sm opacity-60 flex items-center gap-1">
                           {company}
                        </div>
                    </div>
                </div>
            </td>

            {/* Applied Date */}
            <td>
                <span className="badge badge-ghost bg-transparent border-transparent font-medium">{formattedDate}</span>
            </td>

            {/* Links with Icons */}
            <td>
                <div className="flex gap-3">
                    <a href={linkedIn} target="_blank" rel="noreferrer" className="tooltip" data-tip="LinkedIn">
                        <FaLinkedin className="text-blue-600 text-xl hover:scale-110 transition-transform" />
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" className="tooltip" data-tip="GitHub">
                        <FaGithub className="text-base-content text-xl hover:scale-110 transition-transform" />
                    </a>
                    <a href={resume} target="_blank" rel="noreferrer" className="tooltip" data-tip="Resume">
                        <FaFileAlt className="text-red-500 text-xl hover:scale-110 transition-transform" />
                    </a>
                </div>
            </td>

            {/* Action */}
            <td className="text-center">
                <Link to={`/jobs/${jobId}`} className="btn btn-primary btn-sm btn-outline gap-2 normal-case">
                    Details <FaExternalLinkAlt size={12} />
                </Link>
            </td>
        </tr>
    );
};

export default JobApplicationRow;