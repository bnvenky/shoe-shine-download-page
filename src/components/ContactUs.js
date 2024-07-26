/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_spd3y44', 'template_ebb3fq8', form.current, 'ckVWmgUefAt8SEZCK')
            .then(
                () => {
                    alert('Email sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send email. Please try again.');
                    form.current.reset();
                }
            );
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Contact us</h1>
                <p>
                    Need to get in touch with us? Either fill out the form with your inquiry or
                    find the <a href="#">department email</a> you'd like to contact below.
                </p>
            </div>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group flex">
                        <input
                            type="text"
                            name="from_firstname"
                            placeholder="First name*"
                            required
                            className='m-1'
                        />
                        <input
                            type="text"
                            name="from_lastname"
                            placeholder="Last name"
                            className='m-1'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Email*"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="from_phone"
                            placeholder="Phone"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="What can we help you with?"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
