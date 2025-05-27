"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
    const [user, setUser] = useState({ userName: "", password: "" });
    const router = useRouter();
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (user.userName && user.password) {
                const res = await axios.post("api/login", user);
                const userData = res.data.user;
                alert(JSON.stringify(userData));
                alert(res.data.message);
                localStorage.setItem("user", JSON.stringify(userData));
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
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
                            Login in to your account
                        </h2>
                    </div>
                    <div className="mt-10">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-gray-900"
                                >
                                    Username or Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="username or email address"
                                        required
                                        autoComplete="current-email"
                                        className="block w-full rounded-md bg-white text-sm/7 px-3 py-1.5  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        value={user.userName}
                                        onChange={(e) =>
                                            setUser({ ...user, userName: e.target.value })
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
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-sm/7 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 "
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
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-md text-gray-500">
                            Don't have a account?{" "}
                            <a
                                href="/signup"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Crate a Account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
