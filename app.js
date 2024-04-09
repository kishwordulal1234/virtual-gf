const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/report_bug.html');
});

// POST route to handle form submission
app.post('/report', (req, res) => {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your_email@gmail.com', // Your Gmail address
            pass: 'your_password' // Your Gmail password
        }
    });

    // Mail options
    let mailOptions = {
        from: '"Bug Report" <your_email@gmail.com>',
        to: 'recipient_email@example.com', // Your email address where you want to receive bug reports
        subject: 'Bug Report from ' + name,
        text: 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error: Unable to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Bug report submitted successfully!');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
