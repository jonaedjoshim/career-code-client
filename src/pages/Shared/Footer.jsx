import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-primary">
                        Career Codeer
                    </h2>
                    <p className="mt-3 text-sm text-base-content/70">
                        Connecting talented developers with amazing career opportunities.
                        Build your future with confidence.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="#" className="hover:text-primary transition">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-primary transition">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-primary transition">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* For Candidates */}
                <div>
                    <h6 className="footer-title">For Candidates</h6>
                    <Link to="/" className="link link-hover block">Browse Jobs</Link>
                    <Link to="/myApplications" className="link link-hover block">My Applications</Link>
                    <Link to="/register" className="link link-hover block">Create Account</Link>
                </div>

                {/* For Recruiters */}
                <div>
                    <h6 className="footer-title">For Recruiters</h6>
                    <Link to="/addJob" className="link link-hover block">Post a Job</Link>
                    <Link to="/myPostedJob" className="link link-hover block">Manage Jobs</Link>
                </div>

                {/* Legal */}
                <div>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Privacy Policy</a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-base-300 text-center py-4 text-sm text-base-content/60">
                © {new Date().getFullYear()} Career Codeer. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
