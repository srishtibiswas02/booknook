import React, { useState } from 'react';

const About = () => {
  // Store location data for Delhi, India
  const [storeLocation] = useState({
    lat: 28.6139, // Delhi, India coordinates
    lng: 77.2090,
    address: "42 Literary Lane, Connaught Place, New Delhi, 110001, India",
    phone: "+91 (11) 4567-8910",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm"
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header with animated underline */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            About BookNook
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Your trusted destination for quality books and reading experiences
          </p>
        </div>

        {/* Main content with refined cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-blue-600 pb-3 inline-block">
              Our Story
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Founded in 2024, BookNook emerged from a passion for literature and a desire to create a welcoming space for book lovers. What started as a small local bookstore has grown into a thriving online community of readers, writers, and book enthusiasts.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to make quality books accessible to everyone while fostering a love for reading and learning. We believe in the power of stories to connect people, inspire change, and enrich lives.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-amber-500 pb-3 inline-block">
              Our Values
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-amber-500 mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-1">Quality</h3>
                  <p className="text-gray-700 leading-relaxed">We carefully curate our collection to ensure every book meets our high standards.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-1">Community</h3>
                  <p className="text-gray-700 leading-relaxed">We foster a welcoming environment where readers can connect and share their love for books.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-1">Sustainability</h3>
                  <p className="text-gray-700 leading-relaxed">We're committed to environmentally responsible practices in our operations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-1">Innovation</h3>
                  <p className="text-gray-700 leading-relaxed">We continuously improve our services to better serve our customers.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* UPDATED SECTION: Visit Our Store with Interactive Map */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-2 relative inline-block">
              Visit Our Store
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
              Experience the BookNook atmosphere in person at our Delhi location
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Store Information Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Find Us</h3>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <p className="text-gray-700">{storeLocation.address}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <p className="text-gray-700">{storeLocation.phone}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <p className="text-gray-700">{storeLocation.hours}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </button>
              </div>
            </div>
            
            {/* Interactive Map Component - Improved Version */}
            <div className="lg:col-span-2 h-full">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                {/* Interactive Map Component using SVG for actual interactive map */}
                <div className="relative w-full h-80 rounded-lg overflow-hidden border-4 border-white shadow-inner">
                  <InteractiveMap location={storeLocation} />
                </div>
                <div className="text-center mt-4 text-sm text-gray-500">
                  Find us in the heart of Connaught Place, Delhi's premier shopping and business district
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Community section with improved cards */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-2 relative inline-block">
              Join Our Community
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Book Club</h3>
              <p className="text-gray-700 text-center">Join our monthly book club meetings to discuss your favorite reads with fellow book lovers.</p>
              <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-300">Learn More</button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Newsletter</h3>
              <p className="text-gray-700 text-center">Subscribe to our newsletter for updates on new releases, special offers, and reading recommendations.</p>
              <div className="mt-6">
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">Subscribe</button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-6 flex items-center justify-center text-white shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Events</h3>
              <p className="text-gray-700 text-center">Participate in author meetups, reading challenges, and other literary events.</p>
              <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-300">View Calendar</button>
            </div>
          </div>
        </div>
        
        {/* Footer with attribution */}
        <div className="mt-20 text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>Designed by Srishti Biswas</p>
        </div>
      </div>
    </div>
  );
};

// Interactive Map Component
const InteractiveMap = ({ location }) => {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Handle zoom in
  const handleZoomIn = () => {
    if (zoom < 2) {
      setZoom(zoom + 0.2);
    }
  };

  // Handle zoom out
  const handleZoomOut = () => {
    if (zoom > 0.5) {
      setZoom(zoom - 0.2);
    }
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      });
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Calculate transform style based on zoom and position
  const mapTransform = {
    transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
    transformOrigin: 'center',
    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
  };

  return (
    <div className="w-full h-full bg-blue-50 relative overflow-hidden cursor-move"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      
      {/* Map Content */}
      <div style={mapTransform} className="w-full h-full">
        {/* Base Map */}
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute inset-0">
          {/* Background */}
          <rect width="800" height="600" fill="#e6f2ff" />
          
          {/* Major Roads */}
          <g className="roads">
            {/* Horizontal Roads */}
            <rect x="0" y="150" width="800" height="12" fill="#f0f0f0" stroke="#cccccc" />
            <rect x="0" y="300" width="800" height="15" fill="#e0e0e0" stroke="#cccccc" />
            <rect x="0" y="450" width="800" height="12" fill="#f0f0f0" stroke="#cccccc" />
            
            {/* Vertical Roads */}
            <rect x="200" y="0" width="12" height="600" fill="#f0f0f0" stroke="#cccccc" />
            <rect x="400" y="0" width="15" height="600" fill="#e0e0e0" stroke="#cccccc" />
            <rect x="600" y="0" width="12" height="600" fill="#f0f0f0" stroke="#cccccc" />
            
            {/* Road Markings */}
            <g stroke="#ffffff" strokeWidth="2" strokeDasharray="10 10">
              <line x1="0" y1="156" x2="800" y2="156" />
              <line x1="0" y1="307" x2="800" y2="307" />
              <line x1="0" y1="456" x2="800" y2="456" />
              <line x1="206" y1="0" x2="206" y2="600" />
              <line x1="407" y1="0" x2="407" y2="600" />
              <line x1="606" y1="0" x2="606" y2="600" />
            </g>
          </g>
          
          {/* Districts and Landmarks */}
          <g className="districts">
            {/* Connaught Place - Central Circle */}
            <circle cx="400" cy="300" r="50" fill="#e9ecef" stroke="#ced4da" strokeWidth="2" />
            <circle cx="400" cy="300" r="30" fill="#f8f9fa" stroke="#ced4da" strokeWidth="1" />
            
            {/* Parks and Green Areas */}
            <rect x="100" y="100" width="80" height="80" rx="5" fill="#c6e5b1" stroke="#a5d28f" strokeWidth="1" />
            <rect x="600" y="400" width="100" height="60" rx="5" fill="#c6e5b1" stroke="#a5d28f" strokeWidth="1" />
            <rect x="500" y="150" width="70" height="40" rx="5" fill="#c6e5b1" stroke="#a5d28f" strokeWidth="1" />
            
            {/* Building Blocks */}
            <g className="buildings" fill="#dfe5ea" stroke="#ced4da" strokeWidth="1">
              <rect x="250" y="350" width="40" height="30" />
              <rect x="250" y="390" width="40" height="30" />
              <rect x="300" y="350" width="40" height="70" />
              <rect x="350" y="350" width="30" height="30" />
              <rect x="350" y="390" width="30" height="30" />
              
              <rect x="450" y="350" width="30" height="30" />
              <rect x="450" y="390" width="30" height="30" />
              <rect x="490" y="350" width="40" height="70" />
              <rect x="540" y="350" width="40" height="30" />
              <rect x="540" y="390" width="40" height="30" />
              
              <rect x="250" y="200" width="40" height="30" />
              <rect x="250" y="160" width="40" height="30" />
              <rect x="300" y="160" width="40" height="70" />
              <rect x="350" y="200" width="30" height="30" />
              <rect x="350" y="160" width="30" height="30" />
              
              <rect x="450" y="200" width="30" height="30" />
              <rect x="450" y="160" width="30" height="30" />
              <rect x="490" y="160" width="40" height="70" />
              <rect x="540" y="200" width="40" height="30" />
              <rect x="540" y="160" width="40" height="30" />
            </g>
            
            {/* Water Bodies */}
            <ellipse cx="150" cy="450" rx="40" ry="30" fill="#b3d9ff" stroke="#80c1ff" strokeWidth="1" />
          </g>
          
          {/* Labels */}
          <g className="labels" fontSize="12" fontFamily="Arial, sans-serif" textAnchor="middle">
            <rect x="350" y="245" width="100" height="20" rx="5" fill="white" fillOpacity="0.8" />
            <text x="400" y="260" fontWeight="bold" fill="#333">Connaught Place</text>
            
            <rect x="100" y="95" width="80" height="20" rx="5" fill="white" fillOpacity="0.8" />
            <text x="140" y="110" fill="#333">Lodhi Gardens</text>
            
            <rect x="600" y="395" width="100" height="20" rx="5" fill="white" fillOpacity="0.8" />
            <text x="650" y="410" fill="#333">India Gate Lawns</text>
            
            <rect x="500" y="145" width="70" height="20" rx="5" fill="white" fillOpacity="0.8" />
            <text x="535" y="160" fill="#333">Jantar Mantar</text>
            
            <rect x="150" y="425" width="80" height="20" rx="5" fill="white" fillOpacity="0.8" />
            <text x="190" y="440" fill="#333">Nehru Park Lake</text>
            
            <rect x="150" y="145" width="80" height="20" rx="5" fill="white" fillOpacity="0.8" />
            <text x="190" y="160" fill="#333">Janpath</text>
            
            <rect x="410" y="425" width="80" height="20" rx="5" fill="white" fillOpacity="0.8" />
            <text x="450" y="440" fill="#333">Mandi House</text>
          </g>
          
          {/* BookNook Store Location Marker */}
          <g className="store-marker" transform="translate(400, 300)">
            {/* Animated Ring */}
            <circle r="15" fill="#ff5252" fillOpacity="0.2">
              <animate attributeName="r" from="15" to="25" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="0.2" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle r="10" fill="#ff5252" fillOpacity="0.4">
              <animate attributeName="r" from="10" to="20" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="0.4" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            
            {/* Main Marker */}
            <g>
              <circle r="8" fill="#ff3333" stroke="#ffffff" strokeWidth="2" />
              <path d="M0,-8 L4,0 L0,8 L-4,0 Z" fill="#ffffff" />
            </g>
            
            {/* Label */}
            <g transform="translate(0, -25)">
              <rect x="-50" y="-15" width="100" height="22" rx="5" fill="white" stroke="#ff3333" strokeWidth="2" />
              <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fontWeight="bold" fontSize="12" fill="#333">BookNook</text>
            </g>
          </g>
        </svg>
      </div>
      
      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-10">
        <button 
          className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
          onClick={handleZoomIn}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button 
          className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
          onClick={handleZoomOut}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
          </svg>
        </button>
      </div>
      
      {/* Map Info */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-70 p-2 rounded-lg text-xs text-gray-600 z-10">
        <div>Lat: {location.lat.toFixed(4)}</div>
        <div>Lng: {location.lng.toFixed(4)}</div>
        <div className="mt-1 text-xs">Drag to move, use buttons to zoom</div>
      </div>
    </div>
  );
};

export default About;