import React, { useState } from 'react';
import { toast } from 'react-toastify';
import RazorpayErrorMock from './RazorpayErrorMock';

const RazorpayMock = ({ amount, onSuccess, onError, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  
  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  // Format expiry date
  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length > 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Validate card details
    if (cardNumber.replace(/\s+/g, '').length !== 16) {
      showError('Please enter a valid 16-digit card number');
      return;
    }
    
    if (expiryDate.length !== 5) {
      showError('Please enter a valid expiry date (MM/YY)');
      return;
    }
    
    if (cvv.length !== 3) {
      showError('Please enter a valid 3-digit CVV');
      return;
    }
    
    if (name.trim() === '') {
      showError('Please enter the name on card');
      return;
    }
    
    // Simulate payment processing
    setTimeout(() => {
      // Test card number: 4111 1111 1111 1111 - success
      // Any other card number - failure
      if (cardNumber.replace(/\s+/g, '') === '4111111111111111') {
        handleSuccess();
      } else {
        handleError();
      }
      setIsProcessing(false);
    }, 2000);
  };
  
  const handleSuccess = () => {
    toast.success('Payment successful! Your order has been placed.');
    setIsOpen(false);
    if (onSuccess) {
      onSuccess({
        razorpay_payment_id: 'pay_' + Math.random().toString(36).substr(2, 9),
        razorpay_order_id: 'order_' + Math.random().toString(36).substr(2, 9),
        razorpay_signature: 'signature_' + Math.random().toString(36).substr(2, 16)
      });
    }
  };
  
  const handleError = () => {
    setShowErrorModal(true);
    if (onError) {
      onError({
        code: 'BAD_REQUEST_ERROR',
        description: 'The card was declined. Please try another payment method.'
      });
    }
  };
  
  const showError = (message) => {
    setIsProcessing(false);
    toast.error(message);
  };
  
  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };
  
  const closeErrorModal = () => {
    setShowErrorModal(false);
    setIsOpen(false);
  };
  
  const openRazorpay = () => {
    setIsOpen(true);
    setShowErrorModal(false);
  };
  
  if (showErrorModal) {
    return <RazorpayErrorMock onClose={closeErrorModal} />;
  }
  
  if (!isOpen) {
    return (
      <button
        onClick={openRazorpay}
        className="w-full bg-[#B4846C] text-white py-3 px-6 rounded-lg hover:bg-[#967259] transition-colors"
      >
        Pay Now
      </button>
    );
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose}></div>
      
      <div className="bg-white rounded-lg p-5 w-full max-w-md relative z-10 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-[#B4846C] rounded-md flex items-center justify-center text-white font-bold">B</div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold">BookNook</h3>
              <p className="text-gray-500 text-sm">Secure Checkout</p>
            </div>
          </div>
          <div>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Amount */}
        <div className="mb-5 text-center">
          <p className="text-gray-500">Amount</p>
          <h2 className="text-2xl font-bold">₹{(amount/100).toFixed(2)}</h2>
        </div>
        
        {/* Payment Methods */}
        <div className="mb-5 grid grid-cols-4 gap-2">
          <button 
            className={`flex flex-col items-center p-2 rounded ${paymentMethod === 'card' ? 'bg-blue-50 border border-blue-500' : 'border'}`}
            onClick={() => setPaymentMethod('card')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-xs mt-1">Card</span>
          </button>
          <button 
            className={`flex flex-col items-center p-2 rounded ${paymentMethod === 'upi' ? 'bg-blue-50 border border-blue-500' : 'border'}`}
            onClick={() => setPaymentMethod('upi')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-xs mt-1">UPI</span>
          </button>
          <button 
            className={`flex flex-col items-center p-2 rounded ${paymentMethod === 'netbanking' ? 'bg-blue-50 border border-blue-500' : 'border'}`}
            onClick={() => setPaymentMethod('netbanking')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-xs mt-1">Bank</span>
          </button>
          <button 
            className={`flex flex-col items-center p-2 rounded ${paymentMethod === 'wallet' ? 'bg-blue-50 border border-blue-500' : 'border'}`}
            onClick={() => setPaymentMethod('wallet')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs mt-1">Wallet</span>
          </button>
        </div>
        
        {/* Card Form */}
        {paymentMethod === 'card' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                className="w-full p-2 border rounded-md"
                required
              />
              
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Expiry Date</label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                  placeholder="MM/YY"
                  maxLength="5"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                  placeholder="123"
                  maxLength="3"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Name on Card</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Srishti Biswas"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : `Pay ₹${(amount/100).toFixed(2)}`}
            </button>
          </form>
        )}
        
        {/* Other payment methods (simplified) */}
        {paymentMethod === 'upi' && (
          <div className="space-y-4">
            <p className="text-center text-gray-600">Enter your UPI ID to make payment</p>
            <div>
              <input
                type="text"
                placeholder="yourname@upi"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Verify & Pay
            </button>
          </div>
        )}
        
        {paymentMethod === 'netbanking' && (
          <div className="space-y-4">
            <p className="text-center text-gray-600">Select your bank</p>
            <div className="grid grid-cols-2 gap-3">
              {['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank'].map((bank) => (
                <button key={bank} className="border p-3 rounded-md hover:bg-gray-50">
                  {bank}
                </button>
              ))}
            </div>
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Continue
            </button>
          </div>
        )}
        
        {paymentMethod === 'wallet' && (
          <div className="space-y-4">
            <p className="text-center text-gray-600">Select your wallet</p>
            <div className="grid grid-cols-2 gap-3">
              {['Paytm', 'PhonePe', 'Amazon Pay', 'Mobikwik'].map((wallet) => (
                <button key={wallet} className="border p-3 rounded-md hover:bg-gray-50">
                  {wallet}
                </button>
              ))}
            </div>
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Continue
            </button>
          </div>
        )}
        
        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            100% secure payments powered by Razorpay
          </p>
          <div className="flex justify-center mt-2">
            <img src="https://cdn.razorpay.com/logo.svg" alt="Razorpay" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazorpayMock; 