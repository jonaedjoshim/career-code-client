import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import signInLottie from "../../lotties/SignIn.json";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';

const SignIn = () => {

    const { signInUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(() => {
                alert("Sign In Successfully!");
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl grid lg:grid-cols-2 gap-12 items-center mx-auto">

                {/* Animation Section */}
                <div className="flex justify-center order-1 lg:order-2">
                    <div className="w-52 sm:w-64 md:w-72 lg:w-80">
                        <Lottie animationData={signInLottie} loop={true} />
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full max-w-md mx-auto rounded-xl shadow-md p-8 order-2 lg:order-1">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Sign In
                    </h2>

                    <form onSubmit={handleSignIn} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="label text-sm font-medium">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full h-12"
                                required
                            />
                        </div>

                        {/* Password with Show/Hide */}
                        <div className="relative">
                            <label className="label text-sm font-medium">Password</label>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="input input-bordered w-full h-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9.5 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>

                        {/* Button */}
                        <button className="btn btn-primary w-full mt-4">
                            Sign In
                        </button>
                    </form>

                    {/* Divider and Social Login Button placed here */}
                    <div className="divider">OR</div>
                    <SocialLogin from={from} />

                    <p className="text-sm text-center mt-6">
                        Don't have an account? <Link to="/register" className="hover:link cursor-pointer text-blue-600">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;