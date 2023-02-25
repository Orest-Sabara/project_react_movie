import React, { useState } from "react";

const UserInfo = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuClick = () => {
        setShowMenu(false);
    };

    return (
        <div className="flex items-center">
            <img
                onClick={toggleMenu}
                src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                alt="User Avatar"
                className="w-8 h-8 rounded-full mr-2 cursor-pointer"
            />
            {showMenu && (
                <div className="absolute right-0 top-6 mt-10 w-48 bg-green rounded-md shadow-lg z-10">
                    <ul>
                        <li
                            className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
                            onClick={handleMenuClick}
                        >
                            Orest Sabara
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
                            onClick={handleMenuClick}
                        >
                            Settings
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
                            onClick={handleMenuClick}
                        >
                            Log Out
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export { UserInfo };



