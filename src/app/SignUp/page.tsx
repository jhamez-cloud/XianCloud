"use client";

import React, { useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const SignUp = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Signup Data:", form);
        // Handle signup API call
    };

    return (
        <div className="w-full min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-24">
            <NavBar />
            <main className="flex-1 flex flex-col md:flex-row mt-24 md:mt-20">
                {/* Left Side - Branding */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-violet-600 to-blue-500 text-white p-6 sm:p-8 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
                    <img src="/logos/logo-icon-dark-transparent.png" alt="Company Logo" className="w-24 sm:w-32 mb-4 sm:mb-6" />
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Welcome to Xian Cloud</h1>
                    <p className="text-sm sm:text-base md:text-lg text-center mt-3 sm:mt-4 max-w-sm">
                        `— WHERE HUMANITY TOUCHES THE CLOUD.`
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 sm:p-8 md:p-12 rounded-b-lg md:rounded-b-none md:rounded-r-lg shadow-md">
                    <div className="w-full max-w-md">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                            Create Your Account
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <button
                                type="submit"
                                className="w-full py-2 sm:py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition"
                            >
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-4 sm:mt-6 text-center text-gray-500 text-xs sm:text-sm">
                            Already have an account?{" "}
                            <a
                                href="/SignIn"
                                className="text-violet-600 hover:underline font-medium"
                            >
                                Sign In
                            </a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SignUp;
