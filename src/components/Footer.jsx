import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import '../styles/components/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">DevPortfolio</div>
                    <p className="footer-description">
                        Building digital experiences with passion and precision.
                    </p>
                    <div className="footer-socials">
                        <a href="#" aria-label="Github"><Github size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="mailto:hello@example.com" aria-label="Email"><Mail size={20} /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
