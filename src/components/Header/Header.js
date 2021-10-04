import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="container">
            <div>
                <h2 className="logo"><span className="text-success">you</span>Speak</h2>
            </div>
            <div>
                <NavLink to="/home" className="nav-item">Home</NavLink>
                <NavLink to="/about" className="nav-item">About US</NavLink>
                <NavLink to="/courses" className="nav-item">Courses</NavLink>
                <NavLink to="/contact" className="nav-item">Contact</NavLink>
            </div>
        </nav>
    );
};

export default Header;