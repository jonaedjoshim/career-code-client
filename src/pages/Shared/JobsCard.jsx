import React from 'react';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { title, location, requirements, _id, salaryRange, description, company, company_logo } = job;

    return (
        <div className="card border border-base-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
            <div className="card-body p-6">
                {/* Header: Company Logo & Info */}
                <div className='flex items-start gap-4 mb-4'>
                    {/* Logo Section with Fallback Character */}
                    <div className='p-2 bg-base-200 rounded-lg group-hover:bg-primary/10 transition-colors flex items-center justify-center w-12 h-12 overflow-hidden'>
                        {company_logo ? (
                            <img
                                src={company_logo}
                                className='w-full h-full object-contain'
                                alt={company} 
                            />
                        ) : (
                            <span className="text-xl font-bold text-primary uppercase">
                                {company?.charAt(0)}
                            </span>
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-base-content leading-tight">{company}</h3>
                        <p className='flex gap-1 items-center text-sm text-gray-500 mt-1'>
                            <FaMapMarkerAlt className='text-primary' /> {location}
                        </p>
                    </div>
                </div>

                {/* Job Title */}
                <div className="grow">
                    <h2 className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">
                        {title}
                        <span className="badge badge-sm badge-secondary ml-2 py-2">NEW</span>
                    </h2>
                    <p className='text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed'>
                        {description}
                    </p>
                </div>

                {/* Skills/Requirements */}
                <div className="flex flex-wrap gap-2 my-4">
                    {
                        requirements?.slice(0, 4).map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-base-200 text-xs font-medium rounded-full text-base-content/70 hover:bg-primary hover:text-white transition-all cursor-default"
                            >
                                {skill}
                            </span>
                        ))
                    }
                </div>

                {/* Footer: Salary & Action */}
                <div className="card-actions justify-between items-center mt-auto pt-4 border-t border-base-100">
                    <div className='flex items-center font-semibold text-primary'>
                        <FaDollarSign />
                        <span className='text-lg'>{salaryRange?.min} - {salaryRange?.max}</span>
                        <span className='text-xs text-gray-400 ml-1'>/{salaryRange?.currency}</span>
                    </div>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary btn-sm normal-case hover:px-6 transition-all">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;