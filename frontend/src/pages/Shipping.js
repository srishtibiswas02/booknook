import React from 'react';
import { Truck, Package, Globe, HelpCircle, Mail } from 'lucide-react';

const ShippingMethod = ({ icon, title, details }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-[#B4846C]"></div>
    <div className="flex items-center space-x-4">
      <div className="text-[#B4846C]">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-[#113854]">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-700 text-sm">{detail}</p>
        ))}
      </div>
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
    <div className="min-h-screen bg-gradient-to-b from-[#ede3d3] to-[#e5d9c9] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#B4846C] mb-4 font-serif">
            Shipping Information
          </h1>
          <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
            Everything you need to know about getting your books delivered to your doorstep
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl overflow-hidden mb-12 border-t-4 border-[#113854]">
          {/* Shipping Methods Section */}
          <div className="p-10 border-b border-gray-100">
            <h2 className="text-3xl font-bold text-[#113854] mb-6 flex items-center">
              <Truck className="mr-4 text-[#B4846C]" size={36} />
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
          <div className="grid md:grid-cols-2 gap-8 p-10">
            <div>
              <h2 className="text-2xl font-bold text-[#113854] mb-4 flex items-center">
                <Package className="mr-3 text-[#B4846C]" size={28} />
                Processing Time
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We strive for quick turnaround. Orders are processed within 1-2 business days 
                after payment confirmation. You'll receive a shipping confirmation email with 
                tracking details as soon as your package is on its way.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#113854] mb-4 flex items-center">
                <Globe className="mr-3 text-[#B4846C]" size={28} />
                Shipping Restrictions
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Size and weight may limit shipping for some items</li>
                <li>International shipping has product limitations</li>
                <li>Hazardous materials are not permitted</li>
                <li>Remote locations may incur additional fees</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-10 text-center">
            <h2 className="text-3xl font-bold text-[#113854] mb-4 flex justify-center items-center">
              <HelpCircle className="mr-4 text-[#B4846C]" size={36} />
              Need Assistance?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our customer service team is ready to help you with any shipping questions or concerns.
            </p>
            <a 
              href="mailto:shipping@booknook.com" 
              className="bg-[#113854] hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center max-w-md mx-auto"
            >
              <Mail className="mr-3" size={24} />
              Contact Shipping Support
            </a>
          </div>
        </div>

        {/* Tracking Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-10 transform transition duration-300 hover:shadow-xl border-t-4 border-[#ede3d3]">
          <h2 className="text-3xl font-bold text-[#113854] mb-6 flex items-center">
            <Package className="mr-4 text-[#B4846C]" size={36} />
            Track Your Order
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Once your order ships, you'll receive a unique tracking number via email. 
            Use this number to monitor your package's journey on our website or through 
            the shipping carrier's tracking system. Stay informed every step of the way!
          </p>
        </div>

        {/* Enhanced Quote section */}
        <div className="mt-24 bg-white p-12 rounded-lg shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#B4846C]"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-[#B4846C]"></div>
          <svg className="absolute text-[#ede3d3] fill-current w-16 h-16 top-8 left-8 opacity-25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
              "We believe that great books should travel as quickly and safely as possible to reach the hands of eager readers."
            </p>
            <p className="font-semibold text-[#113854]">— BookNook Shipping Team</p>
          </div>
        </div>
        
        {/* Footer with enhanced attribution */}
        <div className="mt-20 text-center text-[#113854] pt-8 border-t border-[#ede3d3]">
          <p>
            <span className="font-semibold">BookNook</span> — By Srishti Biswas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;