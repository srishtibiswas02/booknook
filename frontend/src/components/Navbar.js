// Navbar.js
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { 
  ShoppingCartIcon, 
  UserIcon, 
  Bars3Icon,
  HeartIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);
  const userMenuTimeoutRef = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleUserMenuMouseEnter = () => {
    if (userMenuTimeoutRef.current) {
      clearTimeout(userMenuTimeoutRef.current);
    }
    setIsUserMenuOpen(true);
  };

  const handleUserMenuMouseLeave = () => {
    userMenuTimeoutRef.current = setTimeout(() => {
      setIsUserMenuOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const policies = [
    { name: 'Shipping', path: '/shipping' },
    { name: 'Returns', path: '/returns' },
    { name: 'Privacy', path: '/privacy' },
  ];

  const categories = ['Fiction', 'Non Fiction', 'Audiobooks', 'Accessories'];

  return (
    <nav className="bg-gradient-to-r from-[#0A2A43] to-[#154870] text-white sticky top-0 z-50 font-[Inter] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="BookNook Logo"
              className="w-48 h-48 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              to="/about"
              className="text-gray-100 hover:text-white hover:underline decoration-[#B4846C] decoration-2 underline-offset-8 transition-all duration-200 text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-100 hover:text-white hover:underline decoration-[#B4846C] decoration-2 underline-offset-8 transition-all duration-200 text-sm font-medium"
            >
              Contact
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-100 hover:text-white hover:underline decoration-[#B4846C] decoration-2 underline-offset-8 transition-all duration-200 text-sm font-medium"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button
              onClick={toggleSearch}
              className="text-gray-100 hover:text-white transition-colors duration-200 focus:outline-none"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>

            {/* Wishlist Icon */}
            <Link 
              to="/wishlist" 
              className="relative group flex items-center text-gray-100 hover:text-white transition-colors duration-200"
              aria-label="Wishlist"
            >
              <HeartIcon className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B4846C] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium shadow-md">
                  {wishlistItems.length}
                </span>
              )}
              <span className="sr-only">Wishlist</span>
            </Link>

            {/* Cart Icon */}
            <Link 
              to="/cart" 
              className="relative group flex items-center text-gray-100 hover:text-white transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B4846C] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium shadow-md">
                  {items.length}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>

            {/* User Menu */}
            {user ? (
              <div 
                className="relative"
                onMouseEnter={handleUserMenuMouseEnter}
                onMouseLeave={handleUserMenuMouseLeave}
              >
                <button
                  className="flex items-center space-x-2 text-gray-100 hover:text-white transition-colors duration-200"
                  aria-label="User Menu"
                >
                  <UserIcon className="h-5 w-5" />
                </button>
                {isUserMenuOpen && (
                  <div 
                    className="absolute right-0 w-56 mt-4 py-2 bg-white rounded-lg shadow-xl z-20 border border-gray-100 transform transition-all duration-200"
                    onMouseEnter={handleUserMenuMouseEnter}
                    onMouseLeave={handleUserMenuMouseLeave}
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-800">{user.name || 'User'}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email || ''}</p>
                    </div>
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#113854] transition-colors duration-200"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#113854] transition-colors duration-200"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    {policies.map((policy) => (
                      <Link
                        key={policy.name}
                        to={policy.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#113854] transition-colors duration-200"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        {policy.name}
                      </Link>
                    ))}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#113854] transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div 
                className="relative"
                onMouseEnter={handleUserMenuMouseEnter}
                onMouseLeave={handleUserMenuMouseLeave}
              >
                <button
                  className="flex items-center space-x-2 text-gray-100 hover:text-white transition-colors duration-200"
                  aria-label="User Menu"
                >
                  <UserIcon className="h-5 w-5" />
                </button>
                {isUserMenuOpen && (
                  <div 
                    className="absolute right-0 w-56 mt-4 py-2 bg-white rounded-lg shadow-xl z-20 border border-gray-100 transform transition-all duration-200"
                    onMouseEnter={handleUserMenuMouseEnter}
                    onMouseLeave={handleUserMenuMouseLeave}
                  >
                    <Link 
                      to="/login" 
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#113854] transition-colors duration-200"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/register" 
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#113854] transition-colors duration-200"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-100 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="py-4 px-4 bg-[#0A2A43]/90 backdrop-blur-sm transition-all duration-300 ease-in-out">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for books, authors, or genres..."
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B4846C] placeholder-gray-400"
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#B4846C] px-6 py-3 rounded-r-lg hover:bg-[#A3735B] transition-colors text-white font-medium"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 px-4 bg-[#0A2A43]/95 backdrop-blur-sm border-t border-white/10 transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-white py-2 hover:text-[#B4846C] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white py-2 hover:text-[#B4846C] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="border-t border-white/10 my-2"></div>
            
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white py-2 hover:text-[#B4846C] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
            
            <div className="border-t border-white/10 my-2"></div>
            
            {policies.map((policy) => (
              <Link
                key={policy.name}
                to={policy.path}
                className="text-white py-2 hover:text-[#B4846C] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {policy.name}
              </Link>
            ))}
            
            <div className="border-t border-white/10 my-2"></div>
            
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-white py-2 hover:text-[#B4846C] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  className="text-white py-2 hover:text-[#B4846C] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Orders
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-white py-2 hover:text-[#B4846C] transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-3 pt-2">
                <Link
                  to="/login"
                  className="bg-white text-[#113854] px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-[#B4846C] text-white px-4 py-3 rounded-lg hover:bg-[#A3735B] transition-colors text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;