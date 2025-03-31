// Footer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  ArrowRightIcon,
  MapPinIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Here you would typically call an API to handle the subscription
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#EDE3D3] text-gray-800 font-[Inter] mt-20 relative">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#EDE3D3" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#EDE3D3" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#EDE3D3"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* About Section - 4 columns */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={logo} alt="BookNook Logo" className="h-16 w-22 transition-transform duration-300 group-hover:scale-110" />
              
            </Link>
            <p className="text-gray-600 mt-6">
              Your premier destination for books, bringing stories and knowledge to life through curated collections and personalized recommendations.
            </p>
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://twitter.com/booknook" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#B4846C] hover:text-[#967259] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a 
                href="https://instagram.com/booknook" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#B4846C] hover:text-[#967259] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
              </a>
              <a 
                href="https://github.com/booknook" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#B4846C] hover:text-[#967259] transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          {/* Newsletter - 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest releases, promotions, and reading recommendations.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#B4846C] focus:outline-none transition-colors duration-200"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#B4846C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#967259] transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <br></br>
                  <span>Subscribe</span>
                  <br></br>
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-green-600 text-sm flex items-center animate-fadeIn">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-2">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/new-releases" className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 flex items-center group">
                  <BookOpenIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">New Releases</span>
                </Link>
              </li>
              <li>
                <Link to="/best-sellers" className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 flex items-center group">
                  <BookOpenIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Best Sellers</span>
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 flex items-center group">
                  <BookOpenIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Coming Soon</span>
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 flex items-center group">
                  <HeartIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Gift Cards</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="group">
                <a 
                  href="mailto:hello@booknook.com" 
                  className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 flex items-center"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-3 text-[#B4846C] group-hover:animate-bounce" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">booknook@gmail.com</span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="tel:+9876543210" 
                  className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 flex items-center"
                >
                  <PhoneIcon className="h-5 w-5 mr-3 text-[#B4846C] group-hover:animate-bounce" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">+91 9876543210</span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 flex items-center"
                >
                  <MapPinIcon className="h-5 w-5 mr-3 text-[#B4846C] group-hover:animate-bounce" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Find a Store</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} BookNook. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-gray-600 hover:text-[#B4846C] transition-colors duration-200 text-sm">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      {/* Add CSS animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;