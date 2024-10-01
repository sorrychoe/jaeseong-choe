const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

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

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Email options
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

        // Send email
        let info = await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'There was an error sending your message. Please try again later.' });
    }
};

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
