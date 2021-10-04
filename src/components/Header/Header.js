import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar">
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
        </div>
    );
};

export default Header;