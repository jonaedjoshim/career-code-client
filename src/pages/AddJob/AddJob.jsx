import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);

  const handleAddAJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = data;

    if (parseInt(min) > parseInt(max)) {
      return Swal.fire({
        icon: "warning",
        title: "Invalid Salary Range",
        text: "Minimum salary cannot be greater than maximum.",
      });
    }

    newJob.salaryRange = {
      min: parseInt(min),
      max: parseInt(max),
      currency,
    };

    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());

    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";
    newJob.createdAt = new Date();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/jobs",
        newJob
      );

      if (res.data.insertedId) {
        await Swal.fire({
          icon: "success",
          title: "Job Published!",
          text: "Your listing is now live.",
          confirmButtonColor: "#6366f1",
        });

        form.reset();
        navigate("/"); // change if needed
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">
            Create Job Posting
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in the details below to publish your job opportunity.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl">
          <form onSubmit={handleAddAJob} className="p-8 space-y-10">

            {/* Basic Info */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2">
                Basic Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Job Title"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Company Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Location"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  name="company_logo"
                  required
                  placeholder="Company Logo URL"
                  className="input input-bordered w-full"
                />
              </div>
            </section>

            {/* Configuration */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2">
                Job Configuration
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <select
                  name="jobType"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="On-Site">On-Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>

                <select
                  name="category"
                  className="select select-bordered w-full"
                >
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Design</option>
                </select>

                <input
                  type="date"
                  name="deadline"
                  required
                  className="input input-bordered w-full"
                />
              </div>
            </section>

            {/* Salary */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2">
                Salary & Compensation
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="number"
                  name="min"
                  required
                  placeholder="Minimum Salary"
                  className="input input-bordered w-full"
                />

                <input
                  type="number"
                  name="max"
                  required
                  placeholder="Maximum Salary"
                  className="input input-bordered w-full"
                />

                <select
                  name="currency"
                  className="select select-bordered w-full"
                >
                  <option value="BDT">BDT (৳)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>
            </section>

            {/* Details */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2">
                Job Details
              </h2>

              <div>
                <textarea
                  name="description"
                  required
                  maxLength="500"
                  onChange={(e) =>
                    setDescriptionLength(e.target.value.length)
                  }
                  placeholder="Describe the role..."
                  className="textarea textarea-bordered w-full h-32"
                ></textarea>

                <p className="text-right text-sm text-gray-400">
                  {descriptionLength}/500 characters
                </p>
              </div>

              <textarea
                name="requirements"
                required
                placeholder="Requirements (comma separated)"
                className="textarea textarea-bordered w-full h-24"
              ></textarea>

              <textarea
                name="responsibilities"
                required
                placeholder="Responsibilities (comma separated)"
                className="textarea textarea-bordered w-full h-24"
              ></textarea>
            </section>

            {/* HR Info */}
            <section className="space-y-6 border-t pt-6">
              <h2 className="text-xl font-bold">
                HR Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="hr_name"
                  placeholder="HR Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  name="hr_email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered bg-base-200 cursor-not-allowed w-full"
                />
              </div>
            </section>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full h-14 text-lg font-bold rounded-xl mt-6"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Publishing...
                </>
              ) : (
                "Publish Job"
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
