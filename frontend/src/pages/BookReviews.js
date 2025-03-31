import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
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
import lagoon from '../assets/lagoon.jpeg';

const BookReviews = () => {
  const { user } = useSelector((state) => state.auth);
  const [selectedBook, setSelectedBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [likedReviews, setLikedReviews] = useState([]);
  const [books, setBooks] = useState([]);

  // Colors
  const colors = {
    primary: '#113854', // Deep navy blue
    secondary: '#B4846C', // Existing brown color
    background: '#EDE3D3', // Existing light beige
    accent: '#5B88A5', // Lighter shade of primary for accents
    text: {
      dark: '#113854', // Using primary as text color
      light: '#FFFFFF', // White text
      muted: '#6B7280' // Gray text
    }
  };

  // Mock data for books (replace with API call in production)
  const initialBooks = [
    {
      id: 1,
      title: 'A Good Girl\'s Guide to Murder',
      author: 'Holly Jackson',
      image: goodgirl,
      description: 'The first book in the series that follows Pip Fitz-Amobi as she investigates a murder case for her school project.',
      rating: 4.5,
      numReviews: 120,
    },
    {
      id: 2,
      title: 'Good Girl, Bad Blood',
      author: 'Holly Jackson',
      image: badblood,
      description: 'The second book in the series where Pip investigates a missing person case.',
      rating: 4.3,
      numReviews: 98,
    },
    {
      id: 3,
      title: 'Powerless',
      author: 'Lauren Roberts',
      image: powerless,
      description: 'A thrilling romance set in a world where power is everything.',
      rating: 4.7,
      numReviews: 150,
    },
    {
      id: 4,
      title: 'Divine Rivals',
      author: 'Rebecca Ross',
      image: divine,
      description: 'A story of love and war in a world where gods walk among mortals.',
      rating: 4.6,
      numReviews: 85,
    },
    {
      id: 5,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      image: silent,
      description: 'A woman shoots her husband dead. She never speaks another word.',
      rating: 4.4,
      numReviews: 200,
    },
    {
      id: 6,
      title: 'Atomic Habits',
      author: 'James Clear',
      image: atomic,
      description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
      rating: 4.8,
      numReviews: 250,
    },
    {
      id: 7,
      title: 'Ikigai',
      author: 'Héctor García and Francesc Miralles',
      image: ikigai,
      description: 'The Japanese Secret to a Long and Happy Life.',
      rating: 4.2,
      numReviews: 180,
    },
    {
      id: 8,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      image: money,
      description: 'Timeless lessons on wealth, greed, and happiness.',
      rating: 4.6,
      numReviews: 160,
    },
    {
      id: 9,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      image: sapiens,
      description: 'A Brief History of Humankind.',
      rating: 4.7,
      numReviews: 300,
    },
    {
      id: 10,
      title: 'The Blue Lagoon',
      author: 'Henry De Vere Stacpoole',
      image: lagoon,
      description: 'A story of survival and love on a tropical island.',
      rating: 4.0,
      numReviews: 90,
    }
  ];

  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  // Define the missing functions
  const fetchBook = () => {
    // Implementation for fetching a book
    console.log("Fetching book details for:", selectedBook);
    // You would typically make an API call here
  };

  const fetchUserReviews = () => {
    // Implementation for fetching user reviews
    console.log("Fetching reviews for book:", selectedBook);
    // You would typically make an API call here
  };

  // Fix the useEffect with the missing dependencies
  useEffect(() => {
    if (selectedBook) {
      fetchBook();
      fetchUserReviews();
    }
  }, [selectedBook]);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    // In a real app, fetch reviews for this book from an API
    setReviews([
      {
        id: 1,
        user: 'Prajakta Sharma',
        rating: 5,
        comment: 'A gripping mystery that kept me on the edge of my seat!',
        date: '2024-03-15',
        likes: Math.floor(Math.random() * 50) + 10
      },
      {
        id: 2,
        user: 'Rishabh Pant',
        rating: 4,
        comment: 'Great character development and plot twists.',
        date: '2024-03-14',
        likes: Math.floor(Math.random() * 50) + 10
      },
      {
        id: 3,
        user: 'Ananya Patel',
        rating: 5,
        comment: 'One of the best books I\'ve read this year!',
        date: '2024-03-13',
        likes: Math.floor(Math.random() * 50) + 10
      },
      {
        id: 4,
        user: 'Aditya Kumar',
        rating: 4,
        comment: 'The ending was unexpected but satisfying.',
        date: '2024-03-12',
        likes: Math.floor(Math.random() * 50) + 10
      }
    ]);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in to submit a review');
      return;
    }

    try {
      const newReviewData = {
        id: Date.now(), // Generate a unique ID
        bookId: selectedBook.id,
        bookTitle: selectedBook.title,
        userName: user.name,
        rating: newReview.rating,
        comment: newReview.comment,
        userEmail: user.email,
        date: new Date().toLocaleDateString(),
        likes: 0
      };

      // Store the review in localStorage
      const existingReviews = JSON.parse(localStorage.getItem('bookReviews') || '[]');
      existingReviews.unshift(newReviewData); // Add new review at the beginning
      localStorage.setItem('bookReviews', JSON.stringify(existingReviews));

      // Update local state with the new review
      setReviews([newReviewData, ...reviews]);
      setNewReview({ rating: 5, comment: '' });

      // Update book's rating and review count
      const updatedBook = {
        ...selectedBook,
        numReviews: selectedBook.numReviews + 1,
        rating: ((selectedBook.rating * selectedBook.numReviews) + newReview.rating) / (selectedBook.numReviews + 1)
      };
      setSelectedBook(updatedBook);
      
      // Update the book in the books list
      setBooks(prevBooks => 
        prevBooks.map(book => 
          book.id === selectedBook.id ? updatedBook : book
        )
      );

      alert('Review submitted successfully!');

    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  const handleLikeReview = (reviewId) => {
    setReviews(prevReviews => 
      prevReviews.map(review => {
        if (review.id === reviewId) {
          const isLiked = likedReviews.includes(reviewId);
          return {
            ...review,
            likes: isLiked ? review.likes - 1 : review.likes + 1
          };
        }
        return review;
      })
    );

    setLikedReviews(prev => {
      if (prev.includes(reviewId)) {
        return prev.filter(id => id !== reviewId);
      }
      return [...prev, reviewId];
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <StarIconSolid
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDE3D3] to-[#d7cdc0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#113854] mb-8 border-b-2 border-[#B4846C] pb-4">Book Reviews</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Books List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#113854]">
              <h2 className="text-xl font-semibold text-[#113854] mb-4">Select a Book</h2>
              <div className="space-y-4">
                {books.map((book) => (
                  <button
                    key={book.id}
                    onClick={() => handleBookSelect(book)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 border ${
                      selectedBook?.id === book.id
                        ? 'bg-[#113854] text-white border-[#113854]'
                        : 'bg-gray-50 hover:bg-[#EDE3D3] border-gray-200 hover:border-[#B4846C]'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-16 h-24 object-cover rounded shadow-sm"
                      />
                      <div>
                        <h3 className={`font-medium ${selectedBook?.id === book.id ? 'text-white' : 'text-[#113854]'}`}>
                          {book.title}
                        </h3>
                        <p className={`text-sm ${selectedBook?.id === book.id ? 'text-gray-200' : 'text-gray-600'}`}>
                          {book.author}
                        </p>
                        <div className="flex items-center mt-1">
                          {renderStars(book.rating)}
                          <span className={`ml-2 text-sm ${selectedBook?.id === book.id ? 'text-gray-200' : 'text-gray-600'}`}>
                            ({book.numReviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="lg:col-span-2">
            {selectedBook ? (
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#B4846C]">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6 mb-8">
                  <div className="mb-4 md:mb-0">
                    <img
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      className="w-32 h-48 object-cover rounded-lg shadow-md border border-gray-200"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#113854]">{selectedBook.title}</h2>
                    <p className="text-[#5B88A5] font-medium">{selectedBook.author}</p>
                    <div className="flex items-center mt-2">
                      {renderStars(selectedBook.rating)}
                      <span className="ml-2 text-gray-600">
                        ({selectedBook.numReviews} reviews)
                      </span>
                    </div>
                    <p className="mt-4 text-gray-700 bg-[#f8f5f1] p-4 rounded-md border-l-4 border-[#B4846C]">
                      {selectedBook.description}
                    </p>
                  </div>
                </div>

                {/* Review Form */}
                {user && (
                  <form onSubmit={handleSubmitReview} className="mb-8 bg-[#f8f5f1] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#113854] mb-4 border-b border-[#B4846C] pb-2">
                      Write a Review
                    </h3>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-[#113854] mb-2">Rating</label>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview({ ...newReview, rating: star })}
                            className="focus:outline-none"
                          >
                            <StarIconSolid
                              className={`h-6 w-6 ${
                                star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-[#113854] mb-2">Your Review</label>
                      <textarea
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#113854] focus:ring-[#113854]"
                        placeholder="Share your thoughts about the book..."
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[#113854] to-[#5B88A5] text-white px-6 py-2 rounded-md hover:from-[#0a2c45] hover:to-[#4a7794] transition-colors duration-200 shadow-md"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                )}

                {/* Reviews List */}
                <div>
                  <h3 className="text-lg font-semibold text-[#113854] mb-4 border-b border-[#B4846C] pb-2">
                    Reviews
                  </h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <span className="ml-2 text-sm font-medium text-[#5B88A5]">
                              by {review.user}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2 bg-[#f8f5f1] p-3 rounded-md">{review.comment}</p>
                        <button
                          onClick={() => handleLikeReview(review.id)}
                          className="flex items-center text-sm text-gray-500 hover:text-[#B4846C]"
                        >
                          {likedReviews.includes(review.id) ? (
                            <HeartSolidIcon className="h-5 w-5 text-[#B4846C]" />
                          ) : (
                            <HeartIcon className="h-5 w-5" />
                          )}
                          <span className="ml-1">{review.likes}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-10 text-center border-t-4 border-[#B4846C]">
                <div className="text-[#113854] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-[#113854] font-medium">Select a book to view and write reviews</p>
                <p className="text-gray-500 mt-2">Browse our collection from the list on the left</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReviews;