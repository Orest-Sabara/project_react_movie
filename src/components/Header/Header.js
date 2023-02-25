import React from "react";
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";

function Header() {

    return (
        <header className="bg-gray-800">
            <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex items-center justify-between h-16">
                    <li>
                        <NavLink to={'/'} className="text-gray-300 hover:text-white">
                            Main Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'info'} className="text-gray-300 hover:text-white">
                            Movie Genres
                        </NavLink>
                    </li>
                    <li className="relative">
                        <input
                            type="text"
                            placeholder="Search Movies"
                            className="px-3 py-2 w-64 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline"
                        />
                        <button className="absolute top-0 right-0 mt-3 mr-2">
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.5 17A7.5 7.5 0 102 9.5 7.5 7.5 0 009.5 17zM18 19.5l3.5 3.5-1.5 1.5L16.5 21l-3.5 3.5-1.5-1.5L14.5 21l-3.5-3.5 1.5-1.5L14.5 19l3.5-3.5 1.5 1.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <UserInfo/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

