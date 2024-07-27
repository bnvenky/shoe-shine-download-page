/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
        <Container className="contact-container d-flex flex-row justify-content-between">
            <Row className="w-100">
                <Col md={6} className="contact-content d-flex flex-column justify-content-center">
                    <h1>Contact us</h1>
                    <p>
                        Need to get in touch with us? Either fill out the form with your inquiry or
                        find the <a href="#">department email</a> you'd like to contact below.
                    </p>
                </Col>
                <Col md={6} className="contact-form">
                    <Form ref={form} onSubmit={sendEmail}>
                        <Row className="form-group">
                            <Col xs={12} md={6}>
                                <Form.Control
                                    type="text"
                                    name="from_firstname"
                                    placeholder="First name*"
                                    required
                                    className='m-1'
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Control
                                    type="text"
                                    name="from_lastname"
                                    placeholder="Last name*"
                                    required
                                    className='m-1'
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={12}>
                                <Form.Control
                                    type="email"
                                    name="from_email"
                                    placeholder="Email*"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={12}>
                                <Form.Control
                                    type="tel"
                                    name="from_phone"
                                    placeholder="Phone"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={12}>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    placeholder="What can we help you with?"
                                    required
                                />
                            </Col>
                        </Row>
                        <Button type="submit" className="submit-btn">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
