"use client";

import axios from "axios";
import { useState } from "react";

export default function page() {
    const [user, setUser] = useState({firstName:"",lastName:"",userName:"", email: "", password: "" });
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (user.email && user.password) {
                const res = await axios.post('/api/signup', user);
                alert(res.data.message);
            } else if (!user.email || !user.password) {
                setError("please fill the details")
            }
        } catch (error) { }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md bg-slate-100 rounded p-8">
                    <div className="">
                        <img
                            width={100}
                            height={100}
                            alt="Your Company"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="mx-auto h-10 w-auto"
                        />
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                            Sign up to your account
                        </h2>
                    </div>
                    <div className="mt-10">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label
                                    htmlFor="text"
                                    className="block text-lg font-medium text-gray-900"
                                >
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="First Name"
                                        name="First Name"
                                        type="First Name"
                                        required
                                        className="block w-full rounded-md bg-white text-sm/6 px-3 py-1.5  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        value={user.firstName}
                                        onChange={(e) =>
                                            setUser({ ...user, firstName: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="text"
                                    className="block text-lg font-medium text-gray-900"
                                >
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="lastName"
                                        required
                                        className="block w-full rounded-md bg-white  text-sm/7 px-3 py-1.5  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        value={user.lastName}
                                        onChange={(e) =>
                                            setUser({ ...user, lastName: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="text"
                                    className="block text-lg font-medium text-gray-900"
                                >
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="userName"
                                        name="userName"
                                        type="userName"
                                        required
                                        className="block w-full rounded-md bg-white  text-sm/7 px-3 py-1.5  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        value={user.userName}
                                        onChange={(e) =>
                                            setUser({ ...user, userName: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white text-sm/5 px-3 py-1.5  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        value={user.email}
                                        onChange={(e) =>
                                            setUser({ ...user, email: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-lg font-medium text-gray-900"
                                    >
                                        Password
                                    </label>
                                    {/* <div className="text-xl">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div> */}
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-sm/5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 "
                                        value={user.password}
                                        onChange={(e) =>
                                            setUser({ ...user, password: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={(e) => handleSubmit(e)}
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <span className="mt-2 text-sm font-bold text-red-500 flex justify-center ">
                            {error}
                        </span>

                        <p className="mt-4 text-center text-md text-gray-500">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
