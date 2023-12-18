const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { selectedYear, selectedMonth, selectedSlot, email, amount } = req.body;
    
  // Implement your actual payment processing logic here
//   const paymentSuccess = Math.random() < 0.8; // 80% success rate
  const paymentSuccess = true; // always happpen
  res.json({ success: paymentSuccess });
});

module.exports = router;