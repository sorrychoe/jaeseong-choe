const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
        return;
    }
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ success: false, message: 'All fields are required.' });
        return;
    }

    let transporter;
    try {
        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT == 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    } catch (error) {
        console.error('Error creating transporter:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
        return;
    }

    // Verify connection configuration
    try {
        await transporter.verify();
    } catch (error) {
        console.error('Error verifying transporter:', error);
        res.status(500).json({ success: false, message: 'Failed to connect to email server.' });
        return;
    }

    let mailOptions = {
        from: `"${name}" <${email}>`, 
        to: process.env.RECEIVER_EMAIL,
        subject: 'New Contact Form Submission',
        text: `
            You have a new contact form submission:

            Name: ${name}
            Email: ${email}
            Message:
            ${message}
        `,
        html: `
            <p>You have a new contact form submission:</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'There was an error sending your message. Please try again later.' });
    }
};