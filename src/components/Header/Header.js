import React from "react";
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css'

function Header() {

    return (
        <header className="bg-gray-800">
            <nav className="mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex items-center justify-between h-16 w-full">
                    <li className="relative">
                        <NavLink to={'/'} className="text-gray-300 hover:text-white">
                            <img className={css.imgLogo}
                                 src="https://cdn-icons-png.flaticon.com/512/777/777242.png"
                                 alt="logo"/>
                        </NavLink>
                    </li>
                    <li className="relative">
                        <UserInfo/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

