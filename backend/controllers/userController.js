const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get user profile by email
router.get('/', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email });

    if (user) {
      res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        country: user.country,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user profile
router.put('/', async (req, res) => {
  const { email, firstName, lastName, phoneNumber, address, country } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.phoneNumber = phoneNumber || user.phoneNumber;
      user.address = address || user.address;
      user.country = country || user.country;

      const updatedUser = await user.save();
      res.json({
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        phoneNumber: updatedUser.phoneNumber,
        address: updatedUser.address,
        country: updatedUser.country,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
