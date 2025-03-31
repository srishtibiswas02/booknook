const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const auth = require('../middleware/auth');

// Get all books with pagination and filters
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 12, category, search, sort } = req.query;
    const query = {};

    // Apply filters
    if (category) {
      query.category = category;
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } }
      ];
    }

    // Apply sorting
    let sortOption = {};
    if (sort) {
      switch (sort) {
        case 'price-asc':
          sortOption = { price: 1 };
          break;
        case 'price-desc':
          sortOption = { price: -1 };
          break;
        case 'rating-desc':
          sortOption = { rating: -1 };
          break;
        case 'newest':
          sortOption = { createdAt: -1 };
          break;
        default:
          sortOption = { createdAt: -1 };
      }
    }

    // Execute query with pagination
    const books = await Book.find(query)
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // Get total count for pagination
    const total = await Book.countDocuments(query);

    res.json({
      books,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get featured books
router.get('/featured', async (req, res) => {
  try {
    const featuredBooks = await Book.find({ isFeatured: true })
      .sort({ rating: -1 })
      .limit(8);
    res.json(featuredBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get books by category
router.get('/category/:category', async (req, res) => {
  try {
    const { page = 1, limit = 12, sort } = req.query;
    const query = { category: req.params.category };

    // Apply sorting
    let sortOption = {};
    if (sort) {
      switch (sort) {
        case 'price-asc':
          sortOption = { price: 1 };
          break;
        case 'price-desc':
          sortOption = { price: -1 };
          break;
        case 'rating-desc':
          sortOption = { rating: -1 };
          break;
        case 'newest':
          sortOption = { createdAt: -1 };
          break;
        default:
          sortOption = { createdAt: -1 };
      }
    }

    const books = await Book.find(query)
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Book.countDocuments(query);

    res.json({
      books,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get books by search query
router.get('/search/:query', async (req, res) => {
  try {
    const searchQuery = req.params.query;
    const books = await Book.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { author: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } }
      ]
    }).limit(10);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get books by stock status
router.get('/stock/:status', async (req, res) => {
  try {
    const status = req.params.status;
    let query = {};
    
    switch (status) {
      case 'low':
        query = { stock: { $lte: 5 } };
        break;
      case 'out':
        query = { stock: 0 };
        break;
      case 'in':
        query = { stock: { $gt: 0 } };
        break;
      default:
        return res.status(400).json({ message: 'Invalid stock status' });
    }

    const books = await Book.find(query);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/books/:id/reviews
// @desc    Add a review to a book
// @access  Private
router.post('/:id/reviews', auth, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    const { rating, comment } = req.body;

    // Check if user has already reviewed
    const alreadyReviewed = book.reviews.find(
      review => review.user.toString() === req.user.id
    );

    if (alreadyReviewed) {
      return res.status(400).json({ message: 'Book already reviewed' });
    }

    // Add review
    book.reviews.push({
      user: req.user.id,
      rating: Number(rating),
      comment
    });

    // Update book rating
    book.numReviews = book.reviews.length;
    book.rating = book.reviews.reduce((acc, item) => item.rating + acc, 0) / book.reviews.length;

    await book.save();
    res.status(201).json({ message: 'Review added' });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 