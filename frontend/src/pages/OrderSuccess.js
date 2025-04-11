import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>
        <div className="space-y-4">
          <Link
            to="/profile"
            className="block w-full bg-[#B4846C] text-white py-2 px-4 rounded-lg hover:bg-[#967259] transition-colors"
          >
            View Order
          </Link>
          <Link
            to="/"
            className="block w-full border border-[#B4846C] text-[#B4846C] py-2 px-4 rounded-lg hover:bg-[#B4846C] hover:text-white transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess; 