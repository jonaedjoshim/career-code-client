import React from 'react';
import { FaBriefcase, FaCheckCircle, FaUserCheck } from 'react-icons/fa';

const ApplicationStats = ({ applications }) => {
    const totalApplied = applications?.length || 0;
    const successRate = totalApplied > 0 ? 100 : 0; 

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Total Applied Card */}
            <div className="stats shadow bg-base-100 border border-gray-200 p-2">
                <div className="stat">
                    <div className="stat-figure text-primary opacity-80">
                        <FaBriefcase size={32} />
                    </div>
                    <div className="stat-title font-bold text-gray-500 uppercase tracking-wider text-xs">Total Applied</div>
                    <div className="stat-value text-primary py-1">{totalApplied}</div>
                    <div className="stat-desc font-medium">Jobs applied so far</div>
                </div>
            </div>

            {/* Response Rate Card */}
            <div className="stats shadow bg-base-100 border border-gray-200 p-2">
                <div className="stat">
                    <div className="stat-figure text-secondary opacity-80">
                        <FaCheckCircle size={32} />
                    </div>
                    <div className="stat-title font-bold text-gray-500 uppercase tracking-wider text-xs">Response Rate</div>
                    <div className="stat-value text-secondary py-1">{successRate}%</div>
                    <div className="stat-desc font-medium">Based on your activity</div>
                </div>
            </div>

            {/* Profile Status Card */}
            <div className="stats shadow bg-base-100 border border-gray-200 p-2">
                <div className="stat">
                    <div className="stat-figure text-accent opacity-80">
                        <FaUserCheck size={32} />
                    </div>
                    <div className="stat-title font-bold text-gray-500 uppercase tracking-wider text-xs">Profile Status</div>
                    <div className="stat-value text-accent py-1">Active</div>
                    <div className="stat-desc font-medium">Looking for new roles</div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationStats;