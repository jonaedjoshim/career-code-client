import React, { use, useState } from "react";
import Lottie from "lottie-react";
import registerLottie from "../../lotties/Register.json";
import { AuthContext } from "../../AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Register = () => {
    const { createUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                alert("Account Created Successfully!");
                form.reset();
                navigate("/");
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

                <div className="flex justify-center order-1 lg:order-2">
                    <div className="w-52 sm:w-64 md:w-72 lg:w-80">
                        <Lottie animationData={registerLottie} loop={true} />
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto rounded-xl shadow-md p-8 order-2 lg:order-1">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Create Account
                    </h2>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label className="label text-sm font-medium">Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full h-12"
                                required
                            />
                        </div>

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
                                className="absolute right-3 top-11.5 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>

                        <button className="btn btn-primary w-full mt-4">
                            Register
                        </button>
                    </form>

                    <p className="text-sm text-center mt-6">
                        Already have an account? <Link to="/signIn" className="hover:link cursor-pointer text-blue-600">Sign In</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;
