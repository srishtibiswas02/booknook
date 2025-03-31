import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  StarIcon,
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  XMarkIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import bm1 from '../assets/bm1.webp';
import powerless from '../assets/powerless.jpg';
import powerless2 from '../assets/powerless_2.jpg';
import powerless3 from '../assets/powerless_3.jpg';
import divine from '../assets/divine.jpg';
import divine2 from '../assets/divine_2.jpg';
import divine3 from '../assets/divine_3.jpg';
import goodgirl from '../assets/goodgirl.jpg';
import goodgirl2 from '../assets/goodgirl_2.jpg'; 
import goodgirl3 from '../assets/goodgirl_3.jpg';
import silent from '../assets/silent.jpg';
import silent2 from '../assets/silent_2.jpg';
import silent3 from '../assets/silent3.jpg';
import badblood from '../assets/badblood.jpg';
import badblood2 from '../assets/badblood_2.jpg';
import badblood3 from '../assets/badblood_3.jpg';
import atomic from '../assets/atomic.jpeg';
import atomic2 from '../assets/atomic_2.jpeg';
import atomic3 from '../assets/atomic_3.jpeg';
import fit from '../assets/fit.png';
import fit2 from '../assets/fit_2.jpeg';
import fit3 from '../assets/fit_3.jpeg';
import ikigai from '../assets/ikigai.jpeg';
import ikigai2 from '../assets/ikigai_2.jpeg';
import ikigai3 from '../assets/ikigai_3.jpeg';
import money from '../assets/money.jpeg';
import money2 from '../assets/money_2.jpeg';
import money3 from '../assets/money_3.jpeg';
import sapiens from '../assets/sapiens.jpg';
import sapiens2 from '../assets/sapiens_2.jpg';
import sapiens3 from '../assets/sapiens_3.jpg';
import bc from '../assets/bc.jpeg';
import bc2 from '../assets/bc_2.jpeg';
import bc3 from '../assets/bc_3.jpeg';
import bs from '../assets/bs.jpeg';
import bs2 from '../assets/bs_2.jpeg';
import bs3 from '../assets/bs_3.jpeg';
import bl from '../assets/bl.jpeg';
import bl2 from '../assets/bl_1.jpeg';
import bl3 from '../assets/bl_3.jpeg';


const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items || []);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 4;
  const [filters, setFilters] = useState({
    priceRange: 'all',
    format: 'all',
    language: 'all',
    rating: 'all',
  });

  // Mock products data
  useEffect(() => {
    // In a real app, this would be an API call
    const mockProducts = [
      // Fiction books
      {
        id: 1,
        title: 'A Good Girl\'s Guide to Murder',
        author: 'Holly Jackson',
        price: 349,
        originalPrice: 449,
        image: goodgirl,
        additionalImages: [goodgirl2, goodgirl3],
        rating: 4.7,
        reviews: 217,
        format: 'Paperback',
        language: 'English',
        description: 'Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. Everyone knows he did it. But Pip isn\'t so sure...',
        inStock: true,
        discountPercentage: 22,
        category: 'fiction'
      },
      {
        id: 3,
        title: 'Powerless',
        author: 'Lauren Roberts',
        price: 499,
        originalPrice: 699,
        image: powerless,
        additionalImages: [powerless2, powerless3],
        rating: 4.5,
        reviews: 128,
        format: 'Paperback',
        language: 'English',
        description: 'Enter a world where magic determines your fate...',
        inStock: true,
        discountPercentage: 29,
        category: 'fiction'
      },
      {
        id: 4,
        title: 'Divine Rivals',
        author: 'Rebecca Ross',
        price: 399,
        originalPrice: 499,
        image: divine,
        additionalImages: [divine2, divine3],
        rating: 4.8,
        reviews: 256,
        format: 'Hardcover',
        language: 'English',
        description: 'When two young rival journalists find love through a magical connection...',
        inStock: true,
        discountPercentage: 20,
        category: 'fiction'
      },
      {
        id: 5,
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        price: 349,
        originalPrice: 449,
        image: silent,
        additionalImages: [silent2, silent3],
        rating: 4.6,
        reviews: 189,
        format: 'Paperback',
        language: 'English',
        description: 'A shocking psychological thriller of a woman\'s act of violence...',
        inStock: false,
        discountPercentage: 22,
        category: 'fiction'
      },
      {
        id: 2,
        title: 'Bad Blood',
        author: 'Holly Jackson',
        price: 499,
        originalPrice: 599,
        image: badblood,
        additionalImages: [badblood2, badblood3],
        rating: 4.9,
        reviews: 312,
        format: 'Hardcover',
        language: 'English',
        description: 'The explosive conclusion to the A Good Girl\'s Guide to Murder series...',
        inStock: true,
        discountPercentage: 17,
        category: 'fiction'
      },
      // Non-Fiction books
      {
        id: 6,
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 1199,
        originalPrice: 1499,
        image: atomic,
        additionalImages: [atomic2, atomic3],
        rating: 4.8,
        reviews: 527,
        format: 'Hardcover',
        language: 'English',
        description: 'An easy and proven way to build good habits and break bad ones. Tiny changes, remarkable results.',
        inStock: true,
        discountPercentage: 20,
        category: 'non-fiction'
      },
      {
        id: 7,
        title: 'Ikigai',
        author: 'Héctor García & Francesc Miralles',
        price: 899,
        originalPrice: 999,
        image: ikigai,
        additionalImages: [ikigai2, ikigai3],
        rating: 4.6,
        reviews: 385,
        format: 'Paperback',
        language: 'English',
        description: 'The Japanese secret to a long and happy life. Discover how to live with purpose and joy every day.',
        inStock: true,
        discountPercentage: 10,
        category: 'non-fiction'
      },
      {
        id: 8,
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        price: 1299,
        originalPrice: 1599,
        image: sapiens,
        additionalImages: [sapiens2, sapiens3],
        rating: 4.7,
        reviews: 642,
        format: 'Hardcover',
        language: 'English',
        description: 'A brief history of humankind. The groundbreaking narrative of humanity\'s creation and evolution.',
        inStock: true,
        discountPercentage: 19,
        category: 'non-fiction'
      },
      {
        id: 9,
        title: 'Psychology of Money',
        author: 'Morgan Housel',
        price: 999,
        originalPrice: 1299,
        image: money,
        additionalImages: [money2, money3],
        rating: 4.7,
        reviews: 412,
        format: 'Hardcover',
        language: 'English',
        description: 'Timeless lessons on wealth, greed, and happiness. How to better understand one\'s relationship with money.',
        inStock: true,
        discountPercentage: 23,
        category: 'non-fiction'
      },
      {
        id: 10,
        title: 'The Fitness Mindset',
        author: 'Brian Keane',
        price: 849,
        originalPrice: 999,
        image: fit,
        additionalImages: [fit2, fit3],
        rating: 4.5,
        reviews: 256,
        format: 'Paperback',
        language: 'English',
        description: 'Eat for energy, train for tension, manage your mindset, and reap the results. Transform your body and mind.',
        inStock: true,
        discountPercentage: 15,
        category: 'non-fiction'
      },
      // Audiobooks
      {
        id: 11,
        title: 'Atomic Habits (Audiobook)',
        author: 'James Clear',
        price: 699,
        originalPrice: 899,
        image: atomic,
        additionalImages: [atomic2, atomic3],
        rating: 4.9,
        reviews: 312,
        format: 'Audiobook',
        language: 'English',
        description: 'The audio version of the bestselling book on habit formation. Listen on the go.',
        inStock: true,
        discountPercentage: 22,
        category: 'audiobooks'
      },
      {
        id: 12,
        title: 'The Silent Patient (Audiobook)',
        author: 'Alex Michaelides',
        price: 599,
        originalPrice: 749,
        image: silent,
        additionalImages: [silent2, silent3],
        rating: 4.7,
        reviews: 185,
        format: 'Audiobook',
        language: 'English',
        description: 'The audio version of the psychological thriller that took the world by storm.',
        inStock: true,
        discountPercentage: 20,
        category: 'audiobooks'
      },
      {
        id: 13,
        title: 'Sapiens (Audiobook)',
        author: 'Yuval Noah Harari',
        price: 799,
        originalPrice: 999,
        image: sapiens,
        additionalImages: [sapiens2, sapiens3],
        rating: 4.8,
        reviews: 276,
        format: 'Audiobook',
        language: 'English',
        description: 'The audio journey through the history of humankind. Perfect for commutes.',
        inStock: true,
        discountPercentage: 20,
        category: 'audiobooks'
      },
      {
        id: 14,
        title: 'Psychology of Money (Audiobook)',
        author: 'Morgan Housel',
        price: 649,
        originalPrice: 799,
        image: money,
        additionalImages: [money2, money3],
        rating: 4.6,
        reviews: 198,
        format: 'Audiobook',
        language: 'English',
        description: 'Listen to timeless lessons about wealth and happiness. An enlightening audio experience.',
        inStock: true,
        discountPercentage: 19,
        category: 'audiobooks'
      },
      // Accessories
      {
        id: 15,
        title: 'Premium Bookmark Set',
        author: 'BookWorm Accessories',
        price: 299,
        originalPrice: 399,
        image: bm1,
        additionalImages: [bm1, bm1],
        rating: 4.4,
        reviews: 87,
        format: 'Accessory',
        language: 'N/A',
        description: 'Set of 5 premium bookmarks with different designs. Perfect for avid readers.',
        inStock: true,
        discountPercentage: 25,
        category: 'accessories'
      },
      {
        id: 16,
        title: 'Book Stand',
        author: 'ReadEasy',
        price: 499,
        originalPrice: 699,
        image: bs,
        additionalImages: [bs2, bs3],
        rating: 4.3,
        reviews: 65,
        format: 'Accessory',
        language: 'N/A',
        description: 'Adjustable book stand for comfortable reading. Foldable and portable.',
        inStock: true,
        discountPercentage: 29,
        category: 'accessories'
      },
      {
        id: 17,
        title: 'Book Light',
        author: 'LiteBright',
        price: 349,
        originalPrice: 449,
        image: bl,
        additionalImages: [bl3, bl2],
        rating: 4.5,
        reviews: 112,
        format: 'Accessory',
        language: 'N/A',
        description: 'Rechargeable LED book light with multiple brightness levels. Read in the dark without disturbing others.',
        inStock: true,
        discountPercentage: 22,
        category: 'accessories'
      },
      {
        id: 18,
        title: 'Book Cover (Medium)',
        author: 'CoverCraft',
        price: 199,
        originalPrice: 249,
        image: bc,
        additionalImages: [bc2, bc3],
        rating: 4.2,
        reviews: 54,
        format: 'Accessory',
        language: 'N/A',
        description: 'Stretchable fabric book cover to protect your books. Fits most paperbacks.',
        inStock: true,
        discountPercentage: 20,
        category: 'accessories'
      }
    ];

    // Filter products based on the selected category
    let categoryProducts;
    if (category && category.toLowerCase() !== 'all') {
      categoryProducts = mockProducts.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
      );
    } else {
      categoryProducts = mockProducts;
    }

    setProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
    setLoading(false);
  }, [category]);

  // Apply filters and sort
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply price filter
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under-200':
          result = result.filter(p => p.price < 200);
          break;
        case '200-500':
          result = result.filter(p => p.price >= 200 && p.price <= 500);
          break;
        case '500-1000':
          result = result.filter(p => p.price > 500 && p.price <= 1000);
          break;
        case 'over-1000':
          result = result.filter(p => p.price > 1000);
          break;
      }
    }
    
    // Apply format filter
    if (filters.format !== 'all') {
      result = result.filter(p => p.format.toLowerCase() === filters.format.toLowerCase());
    }
    
    // Apply language filter
    if (filters.language !== 'all') {
      result = result.filter(p => p.language.toLowerCase() === filters.language.toLowerCase());
    }
    
    // Apply rating filter
    if (filters.rating !== 'all') {
      const minRating = parseInt(filters.rating);
      result = result.filter(p => p.rating >= minRating);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // In a real app, you would sort by date
        break;
      default: // featured or any other option
        // Default sorting (could be based on some featured score in a real app)
        break;
    }
    
    setFilteredProducts(result);
    
    // Calculate total pages
    setTotalPages(Math.ceil(result.length / productsPerPage));
    
    // Reset to page 1 when filters change
    setCurrentPage(1);
    
    // Check if any filters are applied
    setIsFiltersApplied(
      filters.priceRange !== 'all' || 
      filters.format !== 'all' || 
      filters.language !== 'all' || 
      filters.rating !== 'all' ||
      searchQuery !== ''
    );
  }, [products, filters, sortBy, searchQuery]);

  // Update display products when filtered products or current page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setDisplayProducts(filteredProducts.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product, event) => {
    if (event) event.preventDefault();
    if (!product) return;
    
    dispatch(addToCart({ 
      id: product.id,
      title: product.title,
      author: product.author,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      quantity: 1 
    }));
    
    setNotification({
      show: true,
      message: `${product.title} added to cart!`,
      type: 'success'
    });
    
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleWishlist = (product, event) => {
    if (event) event.preventDefault();
    
    // Check if product is already in wishlist
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      setNotification({
        show: true,
        message: `${product.title} removed from wishlist!`,
        type: 'info'
      });
    } else {
      dispatch(addToWishlist(product));
      setNotification({
        show: true,
        message: `${product.title} added to wishlist!`,
        type: 'success'
      });
    }
    
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const resetFilters = () => {
    setFilters({
      priceRange: 'all',
      format: 'all',
      language: 'all',
      rating: 'all',
    });
    setSearchQuery('');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      i < Math.floor(rating) ? 
        <StarSolidIcon key={i} className="h-4 w-4 text-yellow-400" /> : 
        i < rating ? 
          <div key={i} className="relative">
            <StarIcon className="h-4 w-4 text-gray-300" />
            <div 
              className="absolute top-0 left-0 overflow-hidden" 
              style={{ width: `${(rating - Math.floor(rating)) * 100}%` }}
            >
              <StarSolidIcon className="h-4 w-4 text-yellow-400" />
            </div>
          </div> : 
          <StarIcon key={i} className="h-4 w-4 text-gray-300" />
    ));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Create an array of page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5; // Show at most 5 page buttons
    
    if (totalPages <= maxPageButtons) {
      // If total pages is less than max buttons, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end page numbers to display
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're at the beginning or end
      if (currentPage <= 2) {
        endPage = 4;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle page numbers
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B4846C]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notification */}
        {notification.show && (
          <div 
            className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-all duration-300 transform translate-y-0 ${
              notification.type === 'success' ? 'bg-green-50 border border-green-200' : 
              notification.type === 'error' ? 'bg-red-50 border border-red-200' : 
              'bg-blue-50 border border-blue-200'
            }`}
          >
            {notification.type === 'success' && <CheckIcon className="h-5 w-5 text-green-500" />}
            {notification.type === 'error' && <XMarkIcon className="h-5 w-5 text-red-500" />}
            {notification.type === 'info' && <span className="h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">i</span>}
            <p className={`text-sm font-medium ${
              notification.type === 'success' ? 'text-green-800' : 
              notification.type === 'error' ? 'text-red-800' : 
              'text-blue-800'
            }`}>{notification.message}</p>
            <button 
              onClick={() => setNotification({ show: false, message: '', type: '' })}
              className="text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">{category} Books</h1>
            <p className="mt-2 text-gray-600">
              Discover our hand-picked collection of {category.toLowerCase()} books
            </p>
          </div>
          <div className="mt-4 md:mt-0 relative rounded-md shadow-sm max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:ring-[#B4846C] focus:border-[#B4846C] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search by title or author"
            />
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap justify-between items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#B4846C] transition-colors"
              >
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
                <span className="font-medium">Filters</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border-gray-300 shadow-sm text-sm focus:border-[#B4846C] focus:ring-[#B4846C]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            
            {isFiltersApplied && (
              <div className="flex items-center justify-between px-2 py-2 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 mr-2">Active filters:</span>
                  <div className="flex flex-wrap gap-2">
                    {filters.priceRange !== 'all' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Price: {filters.priceRange.replace('-', ' to ').replace('under', 'Under ₹').replace('over', 'Over ₹')}
                        <button onClick={() => setFilters({...filters, priceRange: 'all'})}>
                          <XMarkIcon className="ml-1 h-3 w-3 text-gray-500" />
                        </button>
                      </span>
                    )}
                    {filters.format !== 'all' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Format: {filters.format}
                        <button onClick={() => setFilters({...filters, format: 'all'})}>
                          <XMarkIcon className="ml-1 h-3 w-3 text-gray-500" />
                        </button>
                      </span>
                    )}
                    {filters.language !== 'all' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Language: {filters.language}
                        <button onClick={() => setFilters({...filters, language: 'all'})}>
                          <XMarkIcon className="ml-1 h-3 w-3 text-gray-500" />
                        </button>
                      </span>
                    )}
                    {filters.rating !== 'all' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Rating: {filters.rating}★+
                        <button onClick={() => setFilters({...filters, rating: 'all'})}>
                          <XMarkIcon className="ml-1 h-3 w-3 text-gray-500" />
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Search: "{searchQuery}"
                        <button onClick={() => setSearchQuery('')}>
                          <XMarkIcon className="ml-1 h-3 w-3 text-gray-500" />
                        </button>
                        </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={resetFilters}
                  className="text-xs font-medium text-[#B4846C] hover:text-[#9e6e5a] transition-colors"
                >
                  Reset all
                </button>
              </div>
            )}
            
            {/* Expanded Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 pb-2 border-t border-gray-200">
                {/* Price Range Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === 'all'}
                        onChange={() => setFilters({...filters, priceRange: 'all'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === 'under-200'}
                        onChange={() => setFilters({...filters, priceRange: 'under-200'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Under ₹200</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === '200-500'}
                        onChange={() => setFilters({...filters, priceRange: '200-500'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">₹200 - ₹500</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === '500-1000'}
                        onChange={() => setFilters({...filters, priceRange: '500-1000'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">₹500 - ₹1000</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === 'over-1000'}
                        onChange={() => setFilters({...filters, priceRange: 'over-1000'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Over ₹1000</span>
                    </label>
                  </div>
                </div>

                {/* Format Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Format</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="format"
                        checked={filters.format === 'all'}
                        onChange={() => setFilters({...filters, format: 'all'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="format"
                        checked={filters.format === 'paperback'}
                        onChange={() => setFilters({...filters, format: 'paperback'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Paperback</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="format"
                        checked={filters.format === 'hardcover'}
                        onChange={() => setFilters({...filters, format: 'hardcover'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Hardcover</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="format"
                        checked={filters.format === 'audiobook'}
                        onChange={() => setFilters({...filters, format: 'audiobook'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Audiobook</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="format"
                        checked={filters.format === 'accessory'}
                        onChange={() => setFilters({...filters, format: 'accessory'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Accessory</span>
                    </label>
                  </div>
                </div>

                {/* Language Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Language</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="language"
                        checked={filters.language === 'all'}
                        onChange={() => setFilters({...filters, language: 'all'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="language"
                        checked={filters.language === 'english'}
                        onChange={() => setFilters({...filters, language: 'english'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">English</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="language"
                        checked={filters.language === 'hindi'}
                        onChange={() => setFilters({...filters, language: 'hindi'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Hindi</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="language"
                        checked={filters.language === 'n/a'}
                        onChange={() => setFilters({...filters, language: 'n/a'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Not Applicable</span>
                    </label>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Rating</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === 'all'}
                        onChange={() => setFilters({...filters, rating: 'all'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === '4'}
                        onChange={() => setFilters({...filters, rating: '4'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">4★ & above</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === '3'}
                        onChange={() => setFilters({...filters, rating: '3'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">3★ & above</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === '2'}
                        onChange={() => setFilters({...filters, rating: '2'})}
                        className="h-4 w-4 text-[#B4846C] focus:ring-[#B4846C] border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">2★ & above</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {displayProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <img 
              src={book1} 
              alt="No results" 
              className="h-24 w-auto mx-auto mb-4 opacity-50" 
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">We couldn't find any products that match your current filters.</p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-[#B4846C] text-white rounded-md hover:bg-[#9e6e5a] transition-colors"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/product/${product.id}`} className="block relative h-64 overflow-hidden">
                  <img
                    src={hoveredProduct === product.id && product.additionalImages?.length > 0 ? product.additionalImages[0] : product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                  {product.discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discountPercentage}% OFF
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <span className="text-white font-medium px-3 py-1 border border-white rounded-sm">Out of Stock</span>
                    </div>
                  )}
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-2 hover:text-[#B4846C] transition-colors">{product.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{product.author}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                  </Link>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      disabled={!product.inStock}
                      className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${
                        product.inStock 
                          ? 'bg-[#B4846C] text-white hover:bg-[#9e6e5a]' 
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      } transition-colors`}
                    >
                      <ShoppingCartIcon className="h-4 w-4 mr-1" />
                      Add to Cart
                    </button>
                    <button
                      onClick={(e) => handleWishlist(product, e)}
                      className="p-2 text-gray-400 hover:text-[#B4846C] border border-gray-300 rounded-md transition-colors"
                    >
                      {isInWishlist(product.id) ? (
                        <HeartSolidIcon className="h-5 w-5 text-[#B4846C]" />
                      ) : (
                        <HeartIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-1" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Previous
              </button>
              
              {getPageNumbers().map((page, index) => (
                typeof page === 'number' ? (
                  <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === page 
                        ? 'bg-[#B4846C] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ) : (
                  <span key={index} className="px-3 py-1 text-gray-500">
                    {page}
                  </span>
                )
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;