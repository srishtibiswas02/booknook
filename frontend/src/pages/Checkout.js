import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { items, total } = useSelector((state) => state.cart);
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  
  // GST calculation (18% is standard GST rate in India for most goods)
  const gstRate = 0.18;
  const gstAmount = total * gstRate;
  const grandTotal = total + gstAmount;
  
  // Delivery costs
  const deliveryCosts = {
    standard: 40,
    express: 100,
    premium: 200
  };
  
  const finalTotal = grandTotal + deliveryCosts[deliveryMethod];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50">
      <h1 className="text-5xl font-bold text-[#B4846C] mb-4 font-serif">
            Checkout
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Shipping Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
                placeholder="+91"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select State</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CG">Chhattisgarh</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UK">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                  maxLength="6"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                  defaultValue="India"
                  readOnly
                />
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3 border-b pb-2">Delivery Options</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="standard"
                    name="deliveryMethod"
                    type="radio"
                    checked={deliveryMethod === 'standard'}
                    onChange={() => setDeliveryMethod('standard')}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="standard" className="ml-3 block text-sm font-medium text-gray-700">
                    Standard Delivery (3-5 business days) - ₹40
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="express"
                    name="deliveryMethod"
                    type="radio"
                    checked={deliveryMethod === 'express'}
                    onChange={() => setDeliveryMethod('express')}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="express" className="ml-3 block text-sm font-medium text-gray-700">
                    Express Delivery (1-2 business days) - ₹100
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="premium"
                    name="deliveryMethod"
                    type="radio"
                    checked={deliveryMethod === 'premium'}
                    onChange={() => setDeliveryMethod('premium')}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="premium" className="ml-3 block text-sm font-medium text-gray-700">
                    Premium Delivery (Same day for select locations) - ₹200
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Order Summary</h2>
            {items.length === 0 ? (
              <p className="text-gray-500 italic">Your cart is empty</p>
            ) : (
              <>
                <div className="max-h-64 overflow-y-auto mb-4">
                  {items.map((item) => (
                    <div key={item.product._id} className="flex justify-between py-2 border-b">
                      <div className="flex-1">
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-medium">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span>₹{gstAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span>₹{deliveryCosts[deliveryMethod]}</span>
                  </div>
                </div>
                
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total (Inc. GST)</span>
                    <span>₹{finalTotal.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    *Invoice will include GSTIN details
                  </p>
                </div>
                
                <div className="mt-6 space-y-4">
                  <h3 className="font-medium">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border rounded p-2 text-center cursor-pointer hover:bg-gray-50">
                      <span className="block font-medium">UPI</span>
                    </div>
                    <div className="border rounded p-2 text-center cursor-pointer hover:bg-gray-50">
                      <span className="block font-medium">Cards</span>
                    </div>
                    <div className="border rounded p-2 text-center cursor-pointer hover:bg-gray-50">
                      <span className="block font-medium">Net Banking</span>
                    </div>
                    <div className="border rounded p-2 text-center cursor-pointer hover:bg-gray-50">
                      <span className="block font-medium">COD</span>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-600 mt-6 py-3 rounded-md text-white font-medium hover:bg-indigo-700 transition duration-200"
                >
                  Confirm Order
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By placing this order, you agree to our Terms of Service and Privacy Policy
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;