import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Create axios instance with base URL
const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// Hardcoded Razorpay key for development
const RAZORPAY_KEY_ID = 'rzp_test_oZbmBGkiBovZvt';

const Payment = ({ amount, onSuccess, onError }) => {
    const [loading, setLoading] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const navigate = useNavigate();
    const { user, token } = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);

    // Load Razorpay script
    useEffect(() => {
        const loadRazorpay = () => {
            return new Promise((resolve) => {
                if (window.Razorpay) {
                    setScriptLoaded(true);
                    resolve(true);
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.async = true;
                
                script.onload = () => {
                    setScriptLoaded(true);
                    resolve(true);
                };
                
                script.onerror = () => {
                    console.error('Failed to load Razorpay script');
                    toast.error('Failed to load payment gateway. Please try again.');
                    resolve(false);
                };
                
                document.body.appendChild(script);
            });
        };

        loadRazorpay();
    }, []);

    const handlePayment = async () => {
        if (!scriptLoaded) {
            toast.error('Payment gateway is still loading. Please try again in a moment.');
            return;
        }

        try {
            setLoading(true);
            
            // For demo purposes: check if we have items in the cart
            if (!cart.items || cart.items.length === 0) {
                throw new Error('Your cart is empty. Please add items to your cart.');
            }
            
            // Check if amount is valid
            if (!amount || amount <= 0) {
                throw new Error('Invalid amount. Please try again.');
            }

            console.log('Creating order with amount:', amount);
            
            // Create order on backend
            const orderResponse = await api.post('/payment/create-order', {
                amount: Math.round(amount * 100), // Convert to paise
                currency: 'INR',
                items: cart.items.map(item => {
                    const product = item.product || item;
                    return {
                        id: product.id || product._id,
                        name: product.title,
                        price: parseFloat(product.price) || 0,
                        quantity: parseInt(item.quantity) || 1
                    };
                })
            });
            
            if (!orderResponse.data.success) {
                throw new Error(orderResponse.data.error || 'Failed to create order');
            }
            
            console.log('Order created successfully:', orderResponse.data.order);
            
            // Configure Razorpay options
            const options = {
                key: RAZORPAY_KEY_ID,
                amount: orderResponse.data.order.amount,
                currency: orderResponse.data.order.currency,
                name: 'BookNook',
                description: 'Purchase from BookNook',
                image: 'https://via.placeholder.com/150x50?text=BookNook',
                order_id: orderResponse.data.order.id,
                handler: async function(response) {
                    try {
                        console.log('Payment success response:', response);
                        
                        // Verify the payment
                        const verifyResponse = await api.post('/payment/verify', {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        });
                        
                        if (verifyResponse.data.success) {
                            toast.success('Payment successful! Your order has been placed.');
                            onSuccess && onSuccess(response);
                        } else {
                            throw new Error(verifyResponse.data.error || 'Payment verification failed');
                        }
                    } catch (error) {
                        console.error('Payment verification error:', error);
                        toast.error(error.message || 'Payment verification failed. Please contact support.');
                        onError && onError(error);
                    }
                },
                prefill: {
                    name: user?.name || 'Customer Name',
                    email: user?.email || 'customer@example.com',
                    contact: user?.phone || '9999999999'
                },
                notes: {
                    address: 'BookNook Headquarters',
                    items_count: cart.items.length
                },
                theme: {
                    color: '#B4846C'
                },
                modal: {
                    ondismiss: function() {
                        toast.info('Payment cancelled. Your cart is still available.');
                        setLoading(false);
                    },
                    confirm_close: true,
                    escape: true
                }
            };
            
            // Create Razorpay checkout form
            const razorpay = new window.Razorpay(options);
            
            // Handle payment failures
            razorpay.on('payment.failed', function(response) {
                console.error('Payment failed:', response.error);
                
                // Different error messages based on error code
                let errorMessage = 'Payment failed. ';
                
                switch(response.error.code) {
                    case 'BAD_REQUEST_ERROR':
                        errorMessage += 'Invalid request. Please try again.';
                        break;
                    case 'GATEWAY_ERROR':
                        errorMessage += 'Payment gateway error. Please try again later.';
                        break;
                    case 'SERVER_ERROR':
                        errorMessage += 'Server error. Please try again later.';
                        break;
                    default:
                        errorMessage += response.error.description || 'Please try again or use a different payment method.';
                }
                
                toast.error(errorMessage);
                onError && onError(response.error);
            });
            
            // Open Razorpay checkout form
            razorpay.open();
            
        } catch (error) {
            console.error('Payment error:', error);
            toast.error(error.message || 'Payment failed. Please try again.');
            onError && onError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={loading || !scriptLoaded}
            className={`w-full bg-[#B4846C] text-white py-3 px-6 rounded-lg hover:bg-[#967259] transition-colors ${
                loading || !scriptLoaded ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
            {loading ? (
                <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                </span>
            ) : (
                'Pay Now'
            )}
        </button>
    );
};

export default Payment; 