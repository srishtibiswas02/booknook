const express = require('express');
const router = express.Router();
const UserReview = require('../models/UserReview');
const Book = require('../models/Book');

// Get all reviews (for homepage stats)
router.get('/', async (req, res) => {
  try {
    const reviews = await UserReview.find()
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Get all reviews for a specific book
router.get('/:bookId', async (req, res) => {
  try {
    const reviews = await UserReview.find({ bookId: req.params.bookId })
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching book reviews:', error);
    res.status(500).json({ message: 'Error fetching book reviews' });
  }
});

// Create a new review
router.post('/', async (req, res) => {
  try {
    const { bookId, bookTitle, userName, rating, comment, userEmail } = req.body;

    console.log('Received review data:', req.body); // Debug log

    // Validate required fields
    if (!bookId || !bookTitle || !userName || !rating || !comment || !userEmail) {
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          bookId: !bookId,
          bookTitle: !bookTitle,
          userName: !userName,
          rating: !rating,
          comment: !comment,
          userEmail: !userEmail
        }
      });
    }

    // Create new review
    const review = new UserReview({
      bookId,
      bookTitle,
      userName,
      rating: Number(rating),
      comment,
      userEmail,
      createdAt: new Date()
    });

    // Save review
    const savedReview = await review.save();
    console.log('Review saved to database:', savedReview); // Debug log

    // Update book's average rating and number of reviews
    const book = await Book.findOne({ _id: bookId });
    if (book) {
      book.numReviews = (book.numReviews || 0) + 1;
      book.rating = ((book.rating || 0) * (book.numReviews - 1) + Number(rating)) / book.numReviews;
      await book.save();
      console.log('Book updated:', book); // Debug log
    }

    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(400).json({ 
      message: 'Error saving review',
      error: error.message 
    });
  }
});

module.exports = router; 