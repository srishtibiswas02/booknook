const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment, getRazorpayKey } = require('../controllers/paymentController');
const auth = require('../middleware/auth');

// Get Razorpay API key (public endpoint)
router.get('/key', getRazorpayKey);

// Create order (protected endpoint)
router.post('/create-order', auth, createOrder);

// Verify payment (protected endpoint)
router.post('/verify', auth, verifyPayment);

module.exports = router; 