import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import '../styles/components/Navbar.css';

import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Code className="logo-icon" />
                    <span className="logo-text">DevPortfolio</span>
                </div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <X /> : <Menu />}
                </div>

                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
