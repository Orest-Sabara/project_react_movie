import React from 'react';
import {NavLink} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="bg-gray-300 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-gray-600">The page you are looking for does not exist.</p>
            <NavLink to="" className="text-2xl font-bold text-gray-500 mt-4">Back</NavLink>
        </div>
    );
};

export {NotFoundPage}