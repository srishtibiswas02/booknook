import React from 'react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-[#EDE3D3] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
          <p className="text-xl text-gray-600">Our hassle-free return policy ensures your satisfaction</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Policy</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We offer a 30-day return window for all unopened items in their original packaging.
                  For opened items, we accept returns within 14 days of purchase.
                </p>
                <p className="text-gray-600">
                  To initiate a return, please visit your order history and select the items you wish to return.
                  You'll receive a return shipping label via email.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Process</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                <li>Log in to your account and go to your order history</li>
                <li>Select the items you want to return</li>
                <li>Print the provided return shipping label</li>
                <li>Package your items securely in their original packaging</li>
                <li>Drop off the package at any authorized shipping location</li>
                <li>Track your return through the provided tracking number</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Information</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Once we receive your return, we'll process your refund within 5-7 business days.
                  The refund will be issued to your original payment method.
                </p>
                <p className="text-gray-600">
                  Shipping charges are non-refundable unless the item was received damaged or incorrect.
                  Return shipping is free with our provided shipping label.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Returnable Items</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal care items</li>
                <li>Digital products (e-books, audiobooks)</li>
                <li>Items marked as "Final Sale"</li>
                <li>Damaged items due to customer misuse</li>
                <li>Items without original packaging</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchange Policy</h2>
              <p className="text-gray-600">
                We offer exchanges for items that are damaged during shipping or incorrect items.
                To request an exchange, please contact our customer service team within 48 hours
                of receiving your order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-600">
                If you have any questions about returns or exchanges, please contact our customer service team at{' '}
                <a href="mailto:returns@booknook.com" className="text-amber-600 hover:text-amber-700">
                  returns@booknook.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns; 