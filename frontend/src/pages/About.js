import React from 'react';

const About = () => {
  // Store location data for Delhi, India
  const storeLocation = {
    lat: 28.6139, // Delhi, India coordinates
    lng: 77.2090,
    address: "Connaught Place, New Delhi, 110001, India",
    phone: "+91 9876543210",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    googleMapsUrl: "https://maps.google.com/maps?q=Connaught+Place,+New+Delhi,+110001,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ede3d3] to-[#e5d9c9] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Header with new style */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-[#B4846C] mb-4 font-serif">
            About BookNook
          </h1>
          <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
            Your trusted destination for quality books and reading experiences
          </p>
        </div>

        {/* Main content with refined cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#113854]">
            <h2 className="text-3xl font-bold text-[#113854] mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Founded in 2025, BookNook emerged from a passion for literature and a desire to create a welcoming space for book lovers. What started as a small local bookstore has grown into a thriving online community of readers, writers, and book enthusiasts.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to make quality books accessible to everyone while fostering a love for reading and learning. We believe in the power of stories to connect people, inspire change, and enrich lives.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl border-t-4 border-[#ede3d3]">
            <h2 className="text-3xl font-bold text-[#113854] mb-6">
              Our Values
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-[#113854] mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-[#113854] mb-1">Quality</h3>
                  <p className="text-gray-700 leading-relaxed">We carefully curate our collection to ensure every book meets our high standards.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#113854] mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-[#113854] mb-1">Community</h3>
                  <p className="text-gray-700 leading-relaxed">We foster a welcoming environment where readers can connect and share their love for books.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#113854] mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-[#113854] mb-1">Sustainability</h3>
                  <p className="text-gray-700 leading-relaxed">We're committed to environmentally responsible practices in our operations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#113854] mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-[#113854] mb-1">Innovation</h3>
                  <p className="text-gray-700 leading-relaxed">We continuously improve our services to better serve our customers.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Visit Our Store with Google Maps */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#B4846C] mb-2 font-serif">
              Visit Our Store
            </h2>
            <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
              Experience the BookNook atmosphere in person at our Delhi location
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Store Information Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl lg:col-span-1 border-t-4 border-[#113854]">
              <div className="w-16 h-16 bg-[#113854] rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#113854] mb-4 text-center">Find Us</h3>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <span className="text-[#113854] mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <p className="text-gray-700">{storeLocation.address}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#113854] mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <p className="text-gray-700">{storeLocation.phone}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#113854] mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <p className="text-gray-700">{storeLocation.hours}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${storeLocation.lat},${storeLocation.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#113854] hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="lg:col-span-2 h-full">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full border-t-4 border-[#ede3d3]">
                <div className="w-full h-80 rounded-lg overflow-hidden border-4 border-white shadow-inner">
                  <iframe 
                    src={storeLocation.googleMapsUrl}
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

        {/* Why Choose Us - Replacement for Join Our Community */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#B4846C] mb-2 font-serif">
              Why Choose Us
            </h2>
            <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
              What makes BookNook special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#B4846C]"></div>
              <div className="w-16 h-16 bg-[#B4846C] rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#113854] mb-4 text-center">Best Prices</h3>
              <p className="text-gray-700 text-center">We offer competitive prices with special discounts for members and regular promotions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#B4846C]"></div>
              <div className="w-16 h-16 bg-[#B4846C] rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#113854] mb-4 text-center">Hand-picked Selection</h3>
              <p className="text-gray-700 text-center">Every book in our collection is personally selected by our team of experienced bibliophiles.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#B4846C]"></div>
              <div className="w-16 h-16 bg-[#B4846C] rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#113854] mb-4 text-center">Free Delivery</h3>
              <p className="text-gray-700 text-center">Enjoy free delivery on orders above ₹499, with trackable shipping and secure packaging.</p>
            </div>
          </div>
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
              "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers."
            </p>
            <p className="font-semibold text-[#113854]">— Charles W. Eliot</p>
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

export default About;