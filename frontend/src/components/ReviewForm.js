import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ bookId, bookTitle, onReviewSubmitted }) => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    rating: 0,
    comment: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      setError('Please select a rating');
      return;
    }

    try {
      const response = await axios.post('/api/reviews', {
        bookId,
        bookTitle,
        userName: formData.userName,
        userEmail: formData.userEmail,
        rating: formData.rating,
        comment: formData.comment
      });

      console.log('Review submitted:', response.data); // Add this for debugging
      setSuccess(true);
      setError('');
      setFormData({
        userName: '',
        userEmail: '',
        rating: 0,
        comment: ''
      });
      if (onReviewSubmitted) {
        onReviewSubmitted(response.data);
      }
    } catch (err) {
      console.error('Error submitting review:', err); // Add this for debugging
      setError(err.response?.data?.message || 'Error submitting review');
      setSuccess(false);
    }
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">Review submitted successfully!</div>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <input
          type="text"
          value={formData.userName}
          onChange={(e) => setFormData(prev => ({ ...prev, userName: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
        <input
          type="email"
          value={formData.userEmail}
          onChange={(e) => setFormData(prev => ({ ...prev, userEmail: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingClick(star)}
              className="focus:outline-none"
            >
              <svg
                className={`w-6 h-6 ${
                  star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
        <textarea
          value={formData.comment}
          onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
          rows="4"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm; 