import React from 'react';

const RazorpayErrorMock = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="bg-white rounded-lg p-5 w-full max-w-md relative z-10 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 pb-3 border-b">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-[#B4846C] rounded-md flex items-center justify-center text-white font-bold">B</div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold">BookNook</h3>
              <p className="text-gray-500 text-sm">Payment Failed</p>
            </div>
          </div>
          <div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Error icon */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Payment Failed</h3>
        </div>
        
        {/* Error message */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                Your card was declined. Please try another payment method.
              </p>
            </div>
          </div>
        </div>
        
        {/* Error details */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Error Details:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Card authentication failed</li>
            <li>Bank declined the transaction</li>
            <li>Error code: E1001</li>
          </ul>
        </div>
        
        {/* Possible solutions */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Possible Solutions:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Use a different card</li>
            <li>Try another payment method like UPI or Net Banking</li>
            <li>Contact your bank if the issue persists</li>
          </ul>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col space-y-2">
          <button 
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            onClick={onClose}
          >
            Try Again
          </button>
          <button 
            className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors"
            onClick={onClose}
          >
            Cancel Payment
          </button>
        </div>
        
        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            For assistance, please contact support@booknook.com
          </p>
          <div className="flex justify-center mt-2">
            <img src="https://cdn.razorpay.com/logo.svg" alt="Razorpay" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazorpayErrorMock; 