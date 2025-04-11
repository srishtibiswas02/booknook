const Razorpay = require('razorpay');
const crypto = require('crypto');

// Initialize Razorpay with your key_id and key_secret
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { amount } = req.body;

        const options = {
            amount: amount * 100, // Razorpay expects amount in paise
            currency: 'INR',
            receipt: 'receipt_' + Math.random().toString(36).substring(7),
            payment_capture: 1
        };

        const order = await razorpay.orders.create(options);

        res.json({
            success: true,
            order
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            error: 'Something went wrong'
        });
    }
};

// Verify payment signature
exports.verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign)
            .digest('hex');

        if (razorpay_signature === expectedSign) {
            // Payment is successful
            // Update your database here
            return res.status(200).json({
                success: true,
                message: 'Payment verified successfully'
            });
        } else {
            return res.status(400).json({
                success: false,
                error: 'Invalid signature'
            });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({
            success: false,
            error: 'Something went wrong'
        });
    }
};

// Get Razorpay Key
exports.getRazorpayKey = (req, res) => {
    res.json({
        key: process.env.RAZORPAY_KEY_ID
    });
}; 