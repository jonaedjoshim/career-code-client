import React from "react";
import Lottie from "lottie-react";
import registerLottie from "../../lotties/Register.json";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const user = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        }
        console.log(user)
    }


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
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label text-sm font-medium">Password</label>
                            <input
                                name="password"
                                type="text"
                                placeholder="Enter your password"
                                className="input input-bordered w-full h-12"
                            />
                        </div>

                        {/* Button */}
                        <button className="btn w-full mt-4">
                            Register
                        </button>
                    </form>

                    <p className="text-sm text-center mt-6">
                        Already have an account? <span className="hover:link">Login</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;
