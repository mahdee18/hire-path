import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 max-w-7xl mx-auto flex justify-between items-center px-4 w-4/5 top-0">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link
                                className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                                to="/statistics"
                            >
                                Statistics
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                                to="/appliedJobs"
                            >
                                AppliedJobs
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="text-2xl text-[#1A1919;] font-extrabold">
                    HirePath
                </Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="flex items-center gap-6 px-1">
                    <li>
                        <Link
                            className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                            to="/statistics"
                        >
                            Statistics
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                            to="/appliedJobs"
                        >
                            AppliedJobs
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
            <button className="w-[145px] h-[55px] flex justify-center items-center font-bold text-[17px] rounded-[8px] text-white  bg-violet-600">
                <Link>Star Applying</Link>
            </button>
        </nav>
    );
};

export default Navbar;