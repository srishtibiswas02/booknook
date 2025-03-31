import React from 'react';
import { CheckCircle, Star, Crown, Gift } from 'lucide-react';

const MembershipTier = ({ title, price, features, isPopular }) => (
  <div className={`bg-white rounded-2xl p-8 shadow-lg ${isPopular ? 'border-2 border-[#B4846C]' : ''}`}>
    {isPopular && (
      <div className="bg-[#B4846C] text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <div className="text-4xl font-bold text-[#B4846C] mb-6">
      ₹{price}
      <span className="text-lg text-gray-500">/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <CheckCircle className="h-5 w-5 text-[#B4846C] mr-3" />
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
        isPopular
          ? 'bg-[#B4846C] text-white hover:bg-[#967259]'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}
    >
      Get Started
    </button>
  </div>
);

const Membership = () => {
  const tiers = [
    {
      title: 'Basic Reader',
      price: '499',
      features: [
        '10% off on all books',
        'Free shipping on orders over ₹999',
        'Access to monthly book recommendations',
        'Basic reading challenges'
      ]
    },
    {
      title: 'Premium Reader',
      price: '999',
      features: [
        '15% off on all books',
        'Free shipping on all orders',
        'Priority access to new releases',
        'Exclusive reading challenges',
        'Monthly book club access',
        'Early access to sales'
      ],
      isPopular: true
    },
    {
      title: 'Book Club Elite',
      price: '1999',
      features: [
        '20% off on all books',
        'Free shipping on all orders',
        'Priority access to new releases',
        'Exclusive reading challenges',
        'Monthly book club access',
        'Early access to sales',
        'Personal book recommendations',
        'Author meet & greet events',
        'Exclusive member-only events'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#EDE3D3] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join BookNook Membership</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock exclusive benefits and enhance your reading experience with our membership tiers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <MembershipTier key={index} {...tier} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Membership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-[#B4846C] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Discounts</h3>
              <p className="text-gray-600">Get special member-only discounts on all books and accessories</p>
            </div>
            <div className="text-center">
              <Crown className="h-12 w-12 text-[#B4846C] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Priority Access</h3>
              <p className="text-gray-600">Be the first to access new releases and special editions</p>
            </div>
            <div className="text-center">
              <Gift className="h-12 w-12 text-[#B4846C] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Perks</h3>
              <p className="text-gray-600">Receive monthly book recommendations and exclusive member gifts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership; 