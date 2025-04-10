import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ede3d3] to-[#e5d9c9] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#B4846C] mb-4 font-serif">Privacy Policy</h1>
          <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
            How we protect and handle your personal information
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#113854]">
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">Information We Collect</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Shipping and billing addresses</li>
                  <li>Order history</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We also collect information automatically when you visit our website, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited</li>
                  <li>Time spent on site</li>
                  <li>Device information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Process your orders and payments</li>
                <li>Send you order confirmations and shipping updates</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Improve our website and customer experience</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Service providers who assist in our operations</li>
                <li>Payment processors for secure transactions</li>
                <li>Shipping carriers for order delivery</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information,
                including encryption, secure servers, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience,
                analyze site traffic, and personalize content. You can control cookie settings
                through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not intended for children under 13. We do not knowingly collect
                personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any
                changes by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#113854] mb-6">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at{' '}
                <a href="mailto:privacy@booknook.com" className="text-[#B4846C] hover:text-[#967259] transition-colors">
                  privacy@booknook.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Last updated: June 7, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 