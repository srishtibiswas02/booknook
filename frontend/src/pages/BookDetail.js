import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import { addToCart } from '../features/cartSlice';

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState(null);
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      const { data } = await axios.get(`/api/books/${id}`);
      setBook(data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching book details');
      setLoading(false);
    }
  };

  const fetchUserReviews = async () => {
    try {
      const { data } = await axios.get(`/api/reviews/${id}`);
      setUserReviews(data);
    } catch (err) {
      console.error('Error fetching user reviews:', err);
    }
  };

  useEffect(() => {
    fetchBook();
    fetchUserReviews();
  }, [id]);

  const handleReviewSubmitted = (newReview) => {
    setUserReviews(prev => [newReview, ...prev]);
    fetchBook(); // Refresh book data to update rating
  };

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book));
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!book) return <div className="text-center">Book not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Book Image */}
        <div className="rounded-lg overflow-hidden">
          <img src={book.image} alt={book.title} className="w-full h-auto" />
        </div>

        {/* Book Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">By {book.author}</p>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">({book.numReviews} reviews)</span>
          </div>

          <p className="text-2xl font-bold text-primary mb-4">₹{book.price}</p>
          <p className="text-gray-700 mb-6">{book.description}</p>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Stock Status:</p>
            <p className={book.stock > 0 ? 'text-green-600' : 'text-red-600'}>
              {book.stock > 0 ? `In Stock (${book.stock} available)` : 'Out of Stock'}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={book.stock === 0}
            className={`w-full btn btn-primary ${book.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {book.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        
        {/* Review Form */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
          <ReviewForm 
            bookId={id} 
            bookTitle={book.title}
            onReviewSubmitted={handleReviewSubmitted} 
          />
        </div>

        {/* User Reviews */}
        <div className="space-y-6">
          {userReviews.map((review) => (
            <div key={review._id} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{review.userName}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetail; 