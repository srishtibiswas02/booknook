const Razorpay = require('razorpay');
const crypto = require('crypto');

// Initialize Razorpay with your key_id and key_secret
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_oZbmBGkiBovZvt',
    key_secret: process.env.RAZORPAY_KEY_SECRET || '6VYiYclELkBZ1Lgei05HTGOW'
});

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        // Skip auth check in development
        console.log('User from request:', req.user);
        
        const { amount, currency, items } = req.body;

        if (!amount) {
            return res.status(400).json({
                success: false,
                error: 'Amount is required'
            });
        }

        console.log('Creating order with amount:', amount);
        console.log('Items in the order:', items);
        
        const options = {
            amount: Math.round(amount), // Amount should already be in paise
            currency: currency || 'INR',
            receipt: 'order_' + Date.now(),
            payment_capture: 1,
            notes: {
                items_count: items ? items.length : 0
            }
        };

        const order = await razorpay.orders.create(options);
        console.log('Order created:', order);

        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Something went wrong'
        });
    }
};

// Verify payment signature
exports.verifyPayment = async (req, res) => {
    try {
        // Skip auth check in development
        console.log('User from request:', req.user);
        
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        console.log('Verification payload:', {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        });

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }

        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '6VYiYclELkBZ1Lgei05HTGOW')
            .update(sign)
            .digest('hex');

        console.log('Expected signature:', expectedSign);
        console.log('Received signature:', razorpay_signature);

        if (razorpay_signature === expectedSign) {
            // Payment is successful
            // Would normally update the order in the database here
            console.log('Payment verified successfully!');
            
            return res.status(200).json({
                success: true,
                message: 'Payment verified successfully',
                paymentId: razorpay_payment_id,
                orderId: razorpay_order_id
            });
        } else {
            // Log the mismatch for debugging
            console.error('Signature verification failed! Mismatch between expected and received signatures.');
            
            return res.status(400).json({
                success: false,
                error: 'Invalid signature',
                details: 'Payment verification failed due to signature mismatch'
            });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Something went wrong',
            details: 'Server error during payment verification'
        });
    }
};

// Get Razorpay Key
exports.getRazorpayKey = (req, res) => {
    console.log('Returning Razorpay key:', process.env.RAZORPAY_KEY_ID || 'rzp_test_oZbmBGkiBovZvt');
    
    res.status(200).json({
        success: true,
        key: process.env.RAZORPAY_KEY_ID || 'rzp_test_oZbmBGkiBovZvt'
    });
}; 