import React from 'react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ede3d3] to-[#e5d9c9] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#B4846C] mb-4 font-serif">
            Returns & Exchanges
          </h1>
          <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
            Our hassle-free return policy ensures your satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#113854]">
            <h2 className="text-3xl font-bold text-[#113854] mb-6">
              Return Policy
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                We offer a 30-day return window for all unopened items in their original packaging.
                For opened items, we accept returns within 14 days of purchase.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                To initiate a return, please visit your order history and select the items you wish to return.
                You'll receive a return shipping label via email.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#ede3d3]">
            <h2 className="text-3xl font-bold text-[#113854] mb-6">
              Return Process
            </h2>
            <ol className="space-y-4">
              {[
                "Log in to your account and go to your order history",
                "Select the items you want to return",
                "Print the provided return shipping label",
                "Package your items securely in their original packaging",
                "Drop off the package at any authorized shipping location",
                "Track your return through the provided tracking number"
              ].map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-[#B4846C] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#113854]">
            <h2 className="text-3xl font-bold text-[#113854] mb-6">
              Refund Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Once we receive your return, we'll process your refund within 5-7 business days.
                The refund will be issued to your original payment method.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Shipping charges are non-refundable unless the item was received damaged or incorrect.
                Return shipping is free with our provided shipping label.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#ede3d3]">
            <h2 className="text-3xl font-bold text-[#113854] mb-6">
              Exchange Policy
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We offer exchanges for items that are damaged during shipping or incorrect items.
              To request an exchange, please contact our customer service team within 48 hours
              of receiving your order.
            </p>
            <div className="mt-8">
              <a 
                href="mailto:returns@booknook.com"
                className="w-full bg-[#113854] hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Returns Department
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden relative col-span-full lg:col-span-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#B4846C]"></div>
            <div className="w-16 h-16 bg-[#B4846C] rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#113854] mb-4 text-center">Non-Returnable Items</h3>
            <ul className="space-y-2">
              {[
                "Personal care items",
                "Digital products (e-books, audiobooks)",
                "Items marked as \"Final Sale\"",
                "Damaged items due to customer misuse",
                "Items without original packaging"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#113854] mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg lg:col-span-2 border-t-4 border-[#ede3d3]">
            <h3 className="text-2xl font-semibold text-[#113854] mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                {
                  question: "How long do refunds take to process?",
                  answer: "Once we receive your return, refunds are typically processed within 5-7 business days. The time it takes for the refund to appear in your account may vary depending on your payment method and financial institution."
                },
                {
                  question: "Can I return a gift?",
                  answer: "Yes, gifts can be returned. You'll need the order number or gift receipt. The refund will be issued as a store credit to the gift recipient."
                },
                {
                  question: "What if my item arrives damaged?",
                  answer: "Please contact us within 48 hours of receiving a damaged item. We recommend taking photos of the damage for faster processing of your claim."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-lg font-semibold text-[#113854] mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        
        <div className="mt-20 text-center text-[#113854] pt-8 border-t border-[#ede3d3]">
          <p>
            <span className="font-semibold">BookNook</span> — By Srishti Biswas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Returns; 