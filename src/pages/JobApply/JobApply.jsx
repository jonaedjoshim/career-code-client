import React, { useEffect, useState } from 'react'; 
import { Link, useParams, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaLinkedin, FaGithub, FaFilePdf, FaPaperPlane } from 'react-icons/fa';

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${jobId}`)
      .then(res => res.json())
      .then(data => setJob(data))
  }, [jobId])

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
      appliedDate: new Date().toISOString(),
    };

    axios.post('http://localhost:5000/applications', application)
      .then(res => {
        setLoading(false);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Application Submitted!",
            text: "Your professional details have been sent successfully.",
            showConfirmButton: false,
            timer: 2000
          });
          navigate('/myApplications');
        }
      })
      .catch(error => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
        console.error(error);
      });
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto bg-base-100 shadow-2xl rounded-2xl overflow-hidden">

        {/* Header Section */}
        <div className="bg-base-200 p-8 text-primary-content">
          <h2 className="text-3xl font-bold mb-2">Apply for this Position</h2>
          
          <p className="text-xl font-medium text-accent">
            Applying for: <span className="">{job.title || "Loading..."}</span>
          </p>

          <p className="opacity-90 mt-2">Please provide your professional links to proceed with your application.</p>
          <div className="mt-4">
            <Link to={`/jobs/${jobId}`} className="btn btn-sm btn-outline btn-accent">
              View Job Details
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleApplyFormSubmit} className="p-8 space-y-6">

          {/* LinkedIn Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FaLinkedin className="text-blue-600" /> LinkedIn Profile URL
              </span>
            </label>
            <input
              type="url"
              name="linkedIn"
              placeholder="https://linkedin.com/in/yourprofile"
              className="input input-bordered focus:input-primary w-full"
              required
            />
          </div>

          {/* Github Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FaGithub /> GitHub Portfolio URL
              </span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/yourusername"
              className="input input-bordered focus:input-primary w-full"
              required
            />
          </div>

          {/* Resume Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FaFilePdf className="text-red-500" /> Resume / CV Link (Google Drive/Dropbox)
              </span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="https://drive.google.com/..."
              className="input input-bordered focus:input-primary w-full"
              required
            />
            <label className="label">
              <span className="label-text-alt mt-2 text-gray-500">Make sure the link is accessible to anyone with the link.</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary text-lg gap-2 ${loading ? 'loading' : ''}`}
            >
              {!loading && <FaPaperPlane />}
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;