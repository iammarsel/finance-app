const express = require('express');
const router = express.Router();
const { Entries } = require('../models');
router.get('/', async (req,res) => {
  const entries = await Entries.findAll()
  res.json(entries)
})


router.post('/', async (req,res) => {
  const entry = req.body;
  await Entries.create(entry);
  res.json(entry);
})

module.exports = router;
