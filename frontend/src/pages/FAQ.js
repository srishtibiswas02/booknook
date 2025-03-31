import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, browse our products, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards through our secure payment processor, Stripe.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location and the shipping method chosen. Standard shipping typically takes 3-5 business days.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be unused and in their original packaging.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email that you can use to track your package.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 