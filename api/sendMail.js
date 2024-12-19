import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {
    // Configure Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Set email options
    const mailOptions = {
      from: `"Your Name" <${process.env.GMAIL_USER}>`,
      to: email, // Replace with the recipient's email
      subject: 'New Form Submission',
      text: `Email: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Failed to send email ${error}` });
  }
}
