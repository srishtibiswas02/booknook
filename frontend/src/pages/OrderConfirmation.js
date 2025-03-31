import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-[#EDE3D3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-gray-600 mb-8">
            Your order has been successfully placed. We'll send you an email with your order details and tracking information.
          </p>
          <div className="space-y-4">
            <Link
              to="/orders"
              className="inline-block w-full sm:w-auto bg-[#B4846C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8B5E3C] transition-colors duration-200"
            >
              View Order Status
            </Link>
            <Link
              to="/"
              className="inline-block w-full sm:w-auto bg-white text-[#B4846C] border-2 border-[#B4846C] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 