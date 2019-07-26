const express = require('express');
const router  = express.Router();
const Stores = require('../models/stores');
const User = require('../models/User');
const nodemailer = require('nodemailer');

// let transport = nodemailer.createTransport({
//   host: "smtp.sparkpostmail.com",
//   port: 587,
//   auth: {
//     user: "SMTP_Injection",
//     pass: "452d52801b88584c40c03c698255951ff9e061c0"
//   }
// });

let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "92121f81fcb375",
    pass: "2444fd8df5ec83"
  }
});

/* GET home page and send store info */
router.get('/', (req, res) => {

  res.render('index', { GMAPS: process.env.GMAPS });

  Stores.find()
    .then((store) => {
      console.log(store)
      res.render('index', { store, GMAPS: process.env.GMAPS });
      console.log(store);
    })
    .catch((err) => {
      throw new Error(err)
    });
  

});

// Get info from store db
router.get('/api', (req, res, next) => {
  Stores.find().then(store => {
    res.send(store);
  }).catch(err => console.log(err));
});

module.exports = router;
router.post('/getCoupon', (req, res) => {
  const { name, email } = req.body;
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let confirmationCode = '';
  for (let i = 0; i < 10; i++) {
    confirmationCode += characters[Math.floor(Math.random() * characters.length )];
  }
  if (name === '' || email === '') {
    res.render('index', { message: 'Indicate name and email' });
    return;
  }

  User.findOne({ email }, 'email', (err, user) => {
    if (user !== null) {
      res.render('index', { message: 'You have already redeemed your coupon' });
      return;
    }

    const newUser = new User({
      name,
      status: 'Pending Confirmation',
      email,
      confirmationCode,
    });
    newUser.save()
      .then(() => {
        transport.sendMail({
          // nomedoprojeto@ironhackers.dev
          from: '"Your coupon is here!" <37a6f5540d-35e0ea@inbox.mailtrap.io>',
          to: email, 
          subject: 'Get your coupon', 
          text: `Here is your coupon!
        Click here: http://localhost:3000/auth/confirm/${confirmationCode}`,
          html: `<html>
        <style>
          @import url('https://fonts.googleapis.com/css?family=DM+Serif+Text&display=swap');
          img {
            width: 250px;
            height: auto;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          * {
            font-family: 'DM Serif Text', serif;
          }

        </style>
        <div>
        <img src="https://secure.meetupstatic.com/photos/event/d/9/3/e/600_473815614.jpeg" alt="Ironhack">
        <h1>Your coupon is here!</h1>
        <h2>Hello, ${name}!</h2>
        <p>Take this QR code to the nearest store and get 20% OFF your first purchase!</p>
        <img src="${'https://res.cloudinary.com/stefdev/image/upload/v1564149103/frame_l8cq5m.png'}">
        <p>Can't wait to meet you there! 😻</p>
        </div>
        </html>`
        })
          .then(info => console.log(info))
          .catch(error => console.log(error));
        res.redirect('/');
      })
      .catch((err) => {
        res.render('index', { message: 'Something went wrong' });
      });
  });
});

module.exports = router;
