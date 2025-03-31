import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  SpeakerWaveIcon,
  ShoppingBagIcon,
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  StarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import heroImage from '../assets/bgimg.jpg';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import powerless from '../assets/powerless.jpg';
import powerless2 from '../assets/powerless_2.jpg';
import divine from '../assets/divine.jpg';
import goodgirl from '../assets/goodgirl.jpg';
import goodgirl2 from '../assets/goodgirl_2.jpg'; 
import silent from '../assets/silent.jpg';
import silent2 from '../assets/silent_2.jpg';
import badblood from '../assets/badblood.jpg';

import bm1 from '../assets/bm1.webp';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import axios from 'axios';

// Animation utility
const fadeIn = (element) => {
  element.style.opacity = 0;
  let opacity = 0;
  const timer = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 50);
};

const categories = [
  {
    name: 'Books',
    icon: BookOpenIcon,
    link: '/category/books',
    description: 'Discover our curated collection of physical books',
    image: book1,
    bgColor: 'from-amber-700 to-amber-900'
  },
  {
    name: 'Novels',
    icon: BookmarkIcon,
    link: '/category/novels',
    description: 'Explore timeless classics and contemporary fiction',
    image: book2,
    bgColor: 'from-emerald-700 to-emerald-900'
  },
  {
    name: 'Audiobooks',
    icon: SpeakerWaveIcon,
    link: '/category/audiobooks',
    description: 'Listen to professionally narrated stories',
    image: bm1,
    bgColor: 'from-blue-700 to-blue-900'
  },
  {
    name: 'Accessories',
    icon: ShoppingBagIcon,
    link: '/category/accessories',
    description: 'Enhance your reading experience',
    image: book1,
    bgColor: 'from-purple-700 to-purple-900'
  }
];

const featuredBooks = [
  {
    id: 1,
    title: 'A Good Girl\'s Guide to Murder',
    author: 'Holly Jackson',
    image: goodgirl,
    price: '₹299',
    rating: 4.5,
    discount: '',
    newRelease: false,
    bestSeller: true,
  },
  {
    id: 2,
    title: 'Good Girl, Bad Blood',
    author: 'Holly Jackson',
    image: badblood,
    price: '₹499',
    rating: 4.3,
    discount: '',
    newRelease: false,
    bestSeller: true,
  },
  {
    id: 3,
    title: 'Powerless',
    author: 'Lauren Roberts',
    image: powerless,
    price: '₹399',
    rating: 4.7,
    discount: '',
    newRelease: true,
    bestSeller: false,
  },
  {
    id: 4,
    title: 'Divine Rivals',
    author: 'Rebecca Ross',
    image: divine,
    price: '₹349',
    rating: 4.6,
    discount: '',
    newRelease: true,
    bestSeller: false,
  },
  {
    id: 5,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    image: silent,
    price: '₹399',
    rating: 4.4,
    discount: '',
    newRelease: false,
    bestSeller: true,
  }
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "BookNook transformed my reading journey! Their personalized recommendations always match my taste perfectly.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    text: "The collection at BookNook is unparalleled. I've discovered so many hidden gems I wouldn't have found elsewhere.",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
  },
  {
    id: 3,
    name: "Ananya Patel",
    text: "Fast delivery, beautiful packaging, and excellent customer service. BookNook is my go-to for all my reading needs.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroTextRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [nextMeeting, setNextMeeting] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', name: '' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalAuthors: 0,
    happyReaders: 0,
    customerSatisfaction: 0
  });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (heroTextRef.current) {
      fadeIn(heroTextRef.current);
    }
    
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Calculate next meeting (every Monday at 7 PM)
    const calculateNextMeeting = () => {
      const now = new Date();
      const nextMonday = new Date(now);
      nextMonday.setDate(now.getDate() + ((1 + 7 - now.getDay()) % 7));
      nextMonday.setHours(19, 0, 0, 0);
      
      if (nextMonday < now) {
        nextMonday.setDate(nextMonday.getDate() + 7);
      }
      
      setNextMeeting(nextMonday);
    };

    calculateNextMeeting();
    // Update every minute
    const interval = setInterval(calculateNextMeeting, 60000);
    return () => clearInterval(interval);
  }, []);

  // Update countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      if (!nextMeeting) return;

      const now = new Date();
      const difference = nextMeeting - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If meeting time has passed, calculate next meeting
        const nextMonday = new Date(now);
        nextMonday.setDate(now.getDate() + ((1 + 7 - now.getDay()) % 7));
        nextMonday.setHours(19, 0, 0, 0);
        setNextMeeting(nextMonday);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [nextMeeting]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [booksRes, blogsRes] = await Promise.all([
          axios.get('/api/books/featured'),
          axios.get('/api/blogs')
        ]);

        setFeaturedBooks(booksRes.data);
        setBlogs(blogsRes.data);

        // Calculate stats
        const totalBooks = 23000;
        const uniqueAuthors = 100;
        const totalReviews = 100000;
        const avgRating = 4.5;

        setStats({
          totalBooks,
          totalAuthors: uniqueAuthors,
          happyReaders: totalReviews,
          customerSatisfaction: Math.round(avgRating * 20) // Convert 5-star rating to percentage
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Load reviews from localStorage
    const savedReviews = JSON.parse(localStorage.getItem('bookReviews') || '[]');
    setReviews(savedReviews);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const toggleFavorite = (id, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((fav) => fav !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleAddToWishlist = (product) => {
    const isInWishlist = wishlistItems.some(item => item.id === product.id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    const review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString(),
    };
    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, comment: '', name: '' });
    setShowReviewForm(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon 
          key={i} 
          className={`h-4 w-4 ${i <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  // Famous author quotes
  const authorQuotes = [
    {
      quote: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
      author: "George R.R. Martin",
      book: "A Dance with Dragons"
    },
    {
      quote: "Books are a uniquely portable magic.",
      author: "Stephen King",
      book: "On Writing"
    },
    {
      quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      author: "Dr. Seuss",
      book: "I Can Read With My Eyes Shut!"
    },
    {
      quote: "Reading is essential for those who seek to rise above the ordinary.",
      author: "Jim Rohn",
      book: "The Art of Exceptional Living"
    }
  ];

  return (
    <div className="font-[Inter]">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#113854] to-[#1a4f7a] overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Discover Your Next <span className="text-[#B4846C]">Literary Adventure</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our curated collection of books that will transport you to different worlds and expand your horizons.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/category/fiction"
                className="bg-[#B4846C] text-white px-8 py-3 rounded-lg hover:bg-[#A3735B] transition-colors font-medium"
              >
                Browse Books
              </Link>
              {isAuthenticated && (
                <Link
                  to="/book-reviews"
                  className="bg-white text-[#113854] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Write Reviews
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <div className="bg-[#2D3142] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-medium">Fast Delivery</h3>
              <p className="text-sm text-gray-300">Within 48 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-medium">Secure Payment</h3>
              <p className="text-sm text-gray-300">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <h3 className="font-medium">Easy Returns</h3>
              <p className="text-sm text-gray-300">7-day return policy</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="font-medium">24/7 Support</h3>
              <p className="text-sm text-gray-300">Always available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Readers Say
          </h2>
          <div className="relative h-64">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  idx === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : idx < currentTestimonial 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-[#EDE3D3] rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-4"
                  />
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <h4 className="font-medium text-[#B4846C]">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`h-3 w-3 rounded-full mx-2 transition-all duration-300 ${
                  idx === currentTestimonial ? 'bg-[#B4846C] w-6' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section with Animation */}
      <div className="py-20 bg-gradient-to-b from-white to-[#EDE3D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2D3142] to-[#4F5D75] rounded-2xl p-12 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
                <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="max-w-2xl mx-auto text-center relative z-10">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">Join Our Community</span>
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with BookNook
              </h2>
              <p className="text-gray-200 mb-8">
                Subscribe to our newsletter for curated reading lists, author
                interviews, and exclusive offers. Be the first to know about new releases!
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-transparent focus:border-[#B4846C] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#B4846C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#967259] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-gray-300">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
            </div>
          </div>
        </div>
      </div>

      {/* App Promo Section */}
      <div className="py-20 bg-[#EDE3D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Download Our Mobile App
              </h2>
              <p className="text-gray-700 mb-6">
                Take your reading experience to the next level with our mobile app. 
                Track your reading progress, discover new books, and join reading 
                challenges - all on the go!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <div>
                    <span className="text-xs">Download on the</span>
                    <p className="font-medium">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    <path d="M7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" />
                    <path d="M10 6a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z" />
                  </svg>
                  <div>
                    <span className="text-xs">GET IT ON</span>
                    <p className="font-medium">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#B4846C] to-[#967259] rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-white rounded-2xl p-3 shadow-lg">
                  <img 
                    src={heroImage} 
                    alt="BookNook Mobile App" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-xl">
                    <p className="text-white font-medium">BookNook Mobile App</p>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i}
                            className="h-4 w-4 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-white ml-2">4.9 (2.5k+ reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#113854] mb-12 text-center">
            Books That Inspire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-[#EDE3D3] rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl font-bold text-[#113854] mb-2">2000+</div>
              <p className="text-gray-700">Books in Collection</p>
            </div>
            <div className="bg-[#EDE3D3] rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl font-bold text-[#113854] mb-2">100+</div>
              <p className="text-gray-700">Authors Featured</p>
            </div>
            <div className="bg-[#EDE3D3] rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl font-bold text-[#113854] mb-2">500+</div>
              <p className="text-gray-700">Happy Readers</p>
            </div>
            <div className="bg-[#EDE3D3] rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl font-bold text-[#113854] mb-2">95%</div>
              <p className="text-gray-700">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Club Banner with Dynamic Countdown */}
      <div className="py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2D3142] to-[#4F5D75] p-10 md:p-16">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">Join Our Reading Club</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Monthly Book Club Meetings
                </h2>
                <p className="text-gray-200 mb-6 max-w-lg">
                  Connect with fellow book lovers, join engaging discussions, and discover new perspectives. 
                  Our book club meets monthly with both online and offline options.
                </p>
                <Link
                  to="/meeting"
                  className="inline-block bg-[#B4846C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#967259] transition-all duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Join Next Meeting
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full md:w-auto">
                <div className="text-white text-center">
                  <h3 className="font-medium text-xl mb-2">Next Meeting</h3>
                  {nextMeeting && (
                    <p className="text-gray-200 mb-4">
                      {nextMeeting.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} at {nextMeeting.toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit' 
                      })}
                    </p>
                  )}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-4xl font-bold">{timeLeft.days}</div>
                      <div className="text-xs">Days</div>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-4xl font-bold">{timeLeft.hours}</div>
                      <div className="text-xs">Hours</div>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-4xl font-bold">{timeLeft.minutes}</div>
                      <div className="text-xs">Minutes</div>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-4xl font-bold">{timeLeft.seconds}</div>
                      <div className="text-xs">Seconds</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-200">
                    Currently discussing: "The Midnight Library" by Matt Haig
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Preview Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-[#B4846C] pb-2 inline-block">
              From Our Blog
            </h2>
            <Link to="/blog" className="flex items-center text-[#B4846C] hover:text-[#967259] transition-colors duration-200">
              View All Posts
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F0E8] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={book1} alt="Blog Post" className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-[#B4846C] text-white text-xs px-3 py-1 rounded-full">
                  Author Spotlight
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 hover:text-[#B4846C] transition-colors duration-200">
                  An Afternoon with Arundhati Roy
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our exclusive interview with the Booker Prize winner about her creative process and upcoming works.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">March 15, 2025</span>
                  <Link to="/blog/1" className="text-[#B4846C] text-sm font-medium hover:text-[#967259] transition-colors duration-200">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F0E8] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={book2} alt="Blog Post" className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-[#2D3142] text-white text-xs px-3 py-1 rounded-full">
                  Reading Tips
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 hover:text-[#B4846C] transition-colors duration-200">
                  10 Ways to Create the Perfect Reading Nook
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Transform any corner of your home into a cozy sanctuary for your reading sessions.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">March 10, 2025</span>
                  <Link to="/blog/2" className="text-[#B4846C] text-sm font-medium hover:text-[#967259] transition-colors duration-200">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F0E8] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={bm1} alt="Blog Post" className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
                  Book Reviews
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 hover:text-[#B4846C] transition-colors duration-200">
                  March's Most Anticipated New Releases
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our editors have curated a list of the most exciting books hitting shelves this month.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">March 5, 2025</span>
                  <Link to="/blog/3" className="text-[#B4846C] text-sm font-medium hover:text-[#967259] transition-colors duration-200">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section with Animation */}
      <div className="py-20 bg-gradient-to-b from-white to-[#EDE3D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#B4846C] to-[#967259] rounded-2xl p-12 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
                <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="max-w-2xl mx-auto text-center relative z-10">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">Gift Cards Available</span>
              <h2 className="text-3xl font-bold text-white mb-4">
                Give the Gift of Reading
              </h2>
              <p className="text-gray-100 mb-8">
                BookNook gift cards are perfect for any occasion. Let your loved ones choose their next literary adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/gift-cards"
                  className="bg-white text-[#B4846C] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Purchase Gift Card
                </Link>
                <Link
                  to="/redeem"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Redeem Gift Card
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="py-16 bg-[#f8f5f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#113854] mb-12 text-center">What Our Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#B4846C]">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({review.date})</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#113854]">{review.userName}</p>
                    <p className="text-sm text-gray-600">{review.bookTitle}</p>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <HeartIcon className="h-5 w-5" />
                    <span className="ml-1 text-sm">{review.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Literary Wisdom Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#113854] mb-16 text-center">
            Literary Wisdom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authorQuotes.map((quote, index) => (
              <div
                key={index}
                className="bg-[#EDE3D3] rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <p className="text-xl text-[#113854] italic mb-6">"{quote.quote}"</p>
                <p className="text-[#B4846C] font-medium">- {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#113854] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Reading Community</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for book recommendations, exclusive offers, and literary insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B4846C]"
              />
              <button
                type="submit"
                className="bg-[#B4846C] px-8 py-4 rounded-lg hover:bg-[#A3735B] transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;