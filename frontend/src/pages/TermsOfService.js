import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg">
        <p className="mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using BookNook, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information or software) on BookNook's website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Account</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Product Information</h2>
          <p>
            We strive to display accurate product information, including prices and availability. However, we do not guarantee that product descriptions or prices are accurate, complete, reliable, current, or error-free.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
          <p>
            All payments are processed securely through our payment processor. We accept various payment methods as indicated on the checkout page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Shipping and Delivery</h2>
          <p>
            We will make every effort to deliver your order within the estimated time frame. However, we are not responsible for delays beyond our control.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
          <p>
            We offer a 30-day return policy for most items. Items must be unused and in their original packaging. Refunds will be processed according to our refund policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2">
            Email: legal@booknook.com<br />
            Address: 123 Book Street, Reading City, RC 12345
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService; 