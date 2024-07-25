const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
        return res.status(400).send({ message: 'First name, email, and message are required.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptionsToSelf = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Contact Form Submission',
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    const mailOptionsToUser = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Contact Form Submission Received',
        text: `Dear ${firstName},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nYour Company`
    };

    transporter.sendMail(mailOptionsToSelf, (error, info) => {
        if (error) {
            console.error('Error sending email to self:', error);
            return res.status(500).send({ message: 'Error sending email to self', error });
        } else {
            transporter.sendMail(mailOptionsToUser, (error, info) => {
                if (error) {
                    console.error('Error sending confirmation email to user:', error);
                    return res.status(500).send({ message: 'Error sending confirmation email to user', error });
                } else {
                    console.log('Emails sent successfully:', info.response);
                    return res.status(200).send({ message: 'Emails sent successfully' });
                }
            });
        }
    });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
