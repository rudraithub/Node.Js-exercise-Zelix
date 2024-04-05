//signup
const express = require('express');
const router = express.Router();
const User = require('../module/user');

router.use(express.json()); 

router.post('/', async (req, res) => {
  try {
    const { name, city } = req.body;
    const newUser = await User.create({ name, city });
    res.status(201).json(newUser);
    console.log('hello'); 
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.error(error);
  }
});

module.exports = router;