import React from 'react';
import { Truck, Package, Globe, HelpCircle, Mail } from 'lucide-react';

const ShippingMethod = ({ icon, title, details }) => (
  <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg hover:shadow-sm transition-all">
    <div className="text-amber-600">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600 text-sm">{detail}</p>
      ))}
    </div>
  </div>
);

const Shipping = () => {
  const shippingMethods = [
    {
      icon: <Truck size={40} />,
      title: 'Standard Shipping',
      details: [
        '3-5 business days',
        'Free on orders over ₹1499',
        ]
    },
    {
      icon: <Package size={40} />,
      title: 'Express Shipping',
      details: [
        '1-2 business days',
        '₹1899 flat rate'
      ]
    },
    {
      icon: <Globe size={40} />,
      title: 'International Shipping',
      details: [
        '7-14 business days',
        'Rates vary by country'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#EDE3D3] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Shipping Information
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about getting your books delivered to your doorstep
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Shipping Methods Section */}
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Truck className="mr-4 text-amber-600" size={36} />
              Shipping Methods
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {shippingMethods.map((method, index) => (
                <ShippingMethod 
                  key={index} 
                  icon={method.icon} 
                  title={method.title} 
                  details={method.details} 
                />
              ))}
            </div>
          </div>

          {/* Additional Shipping Details */}
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Package className="mr-3 text-amber-600" size={28} />
                Processing Time
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We strive for quick turnaround. Orders are processed within 1-2 business days 
                after payment confirmation. You'll receive a shipping confirmation email with 
                tracking details as soon as your package is on its way.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Globe className="mr-3 text-amber-600" size={28} />
                Shipping Restrictions
              </h2>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Size and weight may limit shipping for some items</li>
                <li>International shipping has product limitations</li>
                <li>Hazardous materials are not permitted</li>
                <li>Remote locations may incur additional fees</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex justify-center items-center">
              <HelpCircle className="mr-4 text-amber-600" size={36} />
              Need Assistance?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our customer service team is ready to help you with any shipping questions or concerns.
            </p>
            <a 
              href="mailto:shipping@booknook.com" 
              className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors flex items-center justify-center max-w-md mx-auto"
            >
              <Mail className="mr-3" size={24} />
              Contact Shipping Support
            </a>
          </div>
        </div>

        {/* Tracking Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Package className="mr-4 text-amber-600" size={36} />
            Track Your Order
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Once your order ships, you'll receive a unique tracking number via email. 
            Use this number to monitor your package's journey on our website or through 
            the shipping carrier's tracking system. Stay informed every step of the way!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;