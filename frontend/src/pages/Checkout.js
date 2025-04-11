import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RazorpayMock from '../components/RazorpayMock';

const Checkout = () => {
  // For testing, log the cart structure
  const cart = useSelector((state) => state.cart);
  console.log("Cart in checkout:", cart);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'razorpay'
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateTotal = () => {
    if (!cart?.items || cart.items.length === 0) return 0;
    
    const subtotal = cart.items.reduce((total, item) => {
      const product = item.product || item;
      const price = parseFloat(product.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      return total + (price * quantity);
    }, 0);

    const gst = subtotal * 0.18; // 18% GST
    const delivery = 50; // Fixed delivery charge
    return subtotal + gst + delivery;
  };

  const handlePaymentSuccess = (response) => {
    toast.success('Payment successful! Your order has been placed.');
    dispatch({ type: 'cart/clearCart' });
    navigate('/order-success');
  };

  const handlePaymentError = (error) => {
    toast.error('Payment failed. Please try again.');
    console.error('Payment error:', error);
  };

  if (!cart?.items || cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#B4846C] text-white px-6 py-2 rounded-lg hover:bg-[#967259]"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const total = calculateTotal();
  console.log("Calculated total:", total);
  // Convert to paise for Razorpay (multiply by 100)
  const amountInPaise = Math.round(total * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                  required
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                required
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-4">
            {cart.items.map((item, index) => {
              const product = item.product || item;
              let imageUrl = 'https://via.placeholder.com/300x400?text=No+Image';
              
              // Try to get the image URL from different places
              if (product.image) {
                imageUrl = product.image;
              } else if (product.images && product.images.length > 0) {
                imageUrl = product.images[0];
              }
              
              return (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={imageUrl}
                    alt={product.title || 'Product Image'}
                    className="w-20 h-20 object-cover rounded"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-[#B4846C] font-medium">₹{parseFloat(product.price).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{cart.items.reduce((total, item) => {
                const product = item.product || item;
                const price = parseFloat(product.price) || 0;
                const quantity = parseInt(item.quantity) || 1;
                return total + (price * quantity);
              }, 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>GST (18%)</span>
              <span>₹{(cart.items.reduce((total, item) => {
                const product = item.product || item;
                const price = parseFloat(product.price) || 0;
                const quantity = parseInt(item.quantity) || 1;
                return total + (price * quantity);
              }, 0) * 0.18).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>₹50.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6">
            <RazorpayMock
              amount={amountInPaise}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;