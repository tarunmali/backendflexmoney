const express = require('express');
const router = express.Router();
const Enrollment = require('../DB/enrollments'); // Adjust the path

// Route to get enrollments by email
router.get('/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const enrollments = await Enrollment.find({ email });
    console.log(enrollments);
    


    res.json(enrollments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
