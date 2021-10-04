import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="text-center error">
            <h1 className="text-danger">404</h1>
            <h3>The page you have searched is not found</h3>
        </div>
    );
};

export default NotFound;