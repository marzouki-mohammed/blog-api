const express = require('express');
const passport = require('./config/passport');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(express.json());

// Session (nécessaire pour Passport, même si JWT sera utilisé ensuite)
app.use(session({
  secret: process.env.JWT_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes placeholder
app.get('/', (req, res) => {
  res.send('API Blog sécurisée - Node.js/Express/Sequelize/Passport');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
