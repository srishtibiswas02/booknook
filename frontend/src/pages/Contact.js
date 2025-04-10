import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ede3d3] to-[#e5d9c9] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#B4846C] mb-4 font-serif">Contact Us</h1>
          <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
            We're here to help! Get in touch with our customer service team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#113854]">
            <h2 className="text-3xl font-bold text-[#113854] mb-6">Customer Service</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#113854] mb-2">Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM IST</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#113854] mb-2">Contact Methods</h3>
                <p className="text-gray-700">Email: support@booknook.com</p>
                <p className="text-gray-700">Phone: 9876543210</p>
                <p className="text-gray-700">Live Chat: Available during business hours</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#113854] mb-2">Address</h3>
                <p className="text-gray-700">BookNook Headquarters</p>
                <p className="text-gray-700">Connaught Place, New Delhi</p>
                <p className="text-gray-700">India</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#113854] mb-2">Common Topics</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/shipping" className="text-[#B4846C] hover:text-[#967259] transition-colors">
                      Shipping Information
                    </a>
                  </li>
                  <li>
                    <a href="/returns" className="text-[#B4846C] hover:text-[#967259] transition-colors">
                      Returns & Exchanges
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-[#B4846C] hover:text-[#967259] transition-colors">
                      Frequently Asked Questions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#ede3d3]">
            <h2 className="text-3xl font-bold text-[#113854] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C] px-4 py-2 border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C] px-4 py-2 border"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C] px-4 py-2 border"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Status</option>
                  <option value="shipping">Shipping</option>
                  <option value="returns">Returns</option>
                  <option value="product">Product Information</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B4846C] focus:ring-[#B4846C] px-4 py-2 border"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#B4846C] hover:bg-[#967259] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4846C] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#B4846C] mb-2 font-serif">Our Location</h2>
            <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
              Visit our flagship store in the heart of Delhi
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#ede3d3]">
            <div className="w-full h-80 rounded-lg overflow-hidden border-4 border-white shadow-inner">
              <iframe 
                src="https://maps.google.com/maps?q=Connaught+Place,+New+Delhi,+110001,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BookNook Store Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="text-center mt-4 text-sm text-gray-500">
              Find us in the heart of Connaught Place, Delhi's premier shopping and business district
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 