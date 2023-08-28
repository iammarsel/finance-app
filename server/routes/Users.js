const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");

const {sign} = require('jsonwebtoken');

router.post('/', async (req,res) => {
  const {username,email, password} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash
    })
    res.json("SUCCESS")
  });
});

router.post('/login', async (req,res) => {
  const {username, email, password} = req.body;
  const user = await Users.findOne({ where: {username: username, email: email}});

  if (!user || !email) {
    res.json({error: "User/Email not found"})
    return 
  };

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({error: "Incorrect Password"});
      return
  }
    const accessToken = sign({username: user.username, id: user.id}, "importantsecret")
    res.json(accessToken);
  });

})

module.exports = router;
