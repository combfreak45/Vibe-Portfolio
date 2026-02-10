import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import '../styles/sections/Contact.css';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <SectionHeader
                title="Get In Touch"
                subtitle="Have a project in mind or just want to say hi?"
            />

            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="icon-box"><Mail /></div>
                        <div>
                            <h3>Email</h3>
                            <p>hello@alexdev.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon-box"><Phone /></div>
                        <div>
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon-box"><MapPin /></div>
                        <div>
                            <h3>Location</h3>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your message here..."></textarea>
                    </div>
                    <Button type="submit" style={{ width: '100%' }}>Send Message</Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
