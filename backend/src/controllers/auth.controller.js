const bcrypt = require('bcrypt');
const crypto = require('crypto');
const ejs = require('ejs');
const jwt = require('jsonwebtoken');
const { authService } = require('../services');
const { emailService } = require('../services');
const db = require('../../models/index');

const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const usr = {
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt),
  };
  const createdUser = await authService.registercreate(usr);

  const emailTemplate = await ejs.renderFile(`D:\\lmsfinal\\lms\\backend\\registration-success.ejs`, 'utf-8');
  // const emailTemplate = await ejs.renderFile(`/home/tlspc-099/Desktop/New lms/lms/backend/registration-success.ejs`, 'utf-8');
  const to = req.body.email;
  const subject = 'Welcome to our application';
  const body = 'Thank you for registering.';
  const html = emailTemplate;

  await emailService.sendEmail(to, subject, body, html);
  res.status(201).json(createdUser);
};

const login = async (req, res) => {
  const user = await authService.loginservice({ where: { email: req.body.email } });
  if (user) {
    // eslint-disable-next-line camelcase
    const password_valid = await (req.body.password, user.password);
    // eslint-disable-next-line camelcase
    if (password_valid) {
      // eslint-disable-next-line no-undef
      token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET);
      // eslint-disable-next-line object-shorthand, no-undef
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ error: 'Password Incorrect' });
    }
  } else {
    res.status(404).json({ error: 'User does not exist' });
  }
};

const loginme = async (req, res) => {
  try {
    let token = req.headers['authorization'].split(' ')[1];
    let decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    // console.log('catch');

    res.status(401).json({ msg: 'Couldnt Authenticate' });
  }
  // eslint-disable-next-line no-unused-expressions, no-shadow
  async (req, res) => {
    const user = await authService.loginservice({ where: { id: req.user.id }, attributes: { exclude: ['password'] } });

    if (user === null) {
      res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  };
};

const forgotpswd = async (req, res) => {
  const { email } = req.body;
  const user = await db.users.findOne({ where: { email } });
  // console.log('user', user);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const resetTokenExpiration = new Date(Date.now() + 3600000); // Token expiration time in 1 hour
  //console.log('resetTokenExpiration', resetTokenExpiration);
  const resetToken = crypto.randomBytes(20).toString('hex');
  await db.users.update(
    { resetToken: resetToken, resetTokenExpiration: resetTokenExpiration },
    { where: { email: user.email } }
  );

  // Send email with reset password link containing resetToken
  // const currentYear = new Date().getFullYear();
  // const username = req.body.email;

  const emailTemplate = await ejs.renderFile(`D:\\lmsfinal\\lms\\backend\\forgotPasswordEmail.ejs`, 'utf-8', {
    // username: { email },
    // currentYear: { currentYear },
  });
  const to = req.body.email;
  const subject = 'Password Reset';
  const body = 'Here is your password reset link:';
  const html = emailTemplate;

  await emailService.sendEmail(to, subject, body, html);

  res.json({ message: 'Reset password link has been sent to your email', resetToken });
};

const resetpswd = async (req, res) => {
  const { resetToken, newPassword } = req.body;
  const user = await authService.loginservice({ where: { resetToken: req.body.resetToken } });
  console.log('user', user);

  if (!user) {
    return res.status(404).json({ message: 'Invalid or expired token' });
  }
  if (user.resetTokenExpiration < new Date()) {
    return res.status(404).json({ message: 'Invalid or expired token' });
  }
  await user.update(
    { password: newPassword, resetToken: null, resetTokenExpiration: null },
    { where: { resetToken: user.resetToken } }
  );
  res.json({ message: 'Password has been reset successfully' });
};

module.exports = {
  register,
  login,
  loginme,
  forgotpswd,
  resetpswd,
};
