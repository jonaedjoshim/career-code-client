import React, { use, useState } from "react";
import Lottie from "lottie-react";
import registerLottie from "../../lotties/Register.json";
import { AuthContext } from "../../AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        };
        console.log(user);

        createUser(user.email, user.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="py-16 px-4">
            <div className="w-11/12 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Animation Section */}
                <div className="flex justify-center order-1 lg:order-2">
                    <div className="w-52 sm:w-64 md:w-72 lg:w-80">
                        <Lottie animationData={registerLottie} loop />
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full max-w-md mx-auto rounded-xl shadow-md p-8 order-2 lg:order-1">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Create Account
                    </h2>

                    <form onSubmit={handleRegister} className="space-y-5">

                        {/* Name */}
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
                            {/* icon */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9.5 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>

                        {/* Button */}
                        <button className="btn w-full mt-4">
                            Register
                        </button>
                    </form>

                    <p className="text-sm text-center mt-6">
                        Already have an account? <span className="hover:link cursor-pointer">Login</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;
