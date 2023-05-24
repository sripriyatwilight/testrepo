const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devagnana.sangeethamohan@twilightsoftwares.com',
    pass: 'SmartWork@135',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendEmail(to, subject, body, html) {
  try {
    await transporter.sendMail({
      from: 'devagnana.sangeethamohan@twilightsoftwares.com',
      to,
      subject,
      body,
      html,
    });

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = {
  sendEmail,
};
