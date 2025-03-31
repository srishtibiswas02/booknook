const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProductReview,
  getTopProducts
} = require('../controllers/productController');
const { protect } = require('../middleware/auth');

router.get('/', getProducts);
router.get('/top', getTopProducts);
router.get('/:id', getProductById);
router.post('/:id/reviews', protect, createProductReview);

module.exports = router; 