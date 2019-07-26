const express = require('express');
const router = express.Router();
// Require user model
// Add bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
// Add passport 
const passport = require('passport');
const User = require('../models/User');

router.get('/login', (req, res, next) => {
  res.render('./admin/login', { message: req.flash('error') });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
  passReqToCallback: true,
}));

router.get('/dashboard', (req, res, next) => {
  res.render('./admin/dashboard');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;