import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  lastAddedItem: null, // Track the last added item for notifications
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      
      // Ensure product has required fields
      if (!product || !product.id) {
        console.error('Invalid product data:', product);
        return;
      }

      // Save this product as the last added item for notifications
      state.lastAddedItem = {
        product: {
          id: product.id || product._id,
          title: product.title,
          image: product.image || (product.images && product.images.length > 0 ? product.images[0] : ''),
        },
        quantity
      };

      // Find if the product already exists in cart
      const existingItemIndex = state.items.findIndex(item => 
        (item.product.id && item.product.id === product.id) || 
        (item.product._id && item.product._id === product._id)
      );

      if (existingItemIndex !== -1) {
        // Update existing item
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // Add new item with all necessary product details
        state.items.push({ 
          product: {
            id: product.id || product._id, // Ensure we capture the ID consistently
            _id: product._id || product.id, // Store both ID formats for safety
            title: product.title,
            author: product.author,
            price: product.price || 0,
            image: product.image || (product.images && product.images.length > 0 ? product.images[0] : ''),
            description: product.description
          }, 
          quantity 
        });
      }

      // Recalculate total
      state.total = state.items.reduce((total, item) => {
        const itemPrice = item.product.price || 0;
        return total + (itemPrice * item.quantity);
      }, 0);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => 
        !(
          (item.product.id && item.product.id === productId) || 
          (item.product._id && item.product._id === productId)
        )
      );
      
      // Recalculate total
      state.total = state.items.reduce((total, item) => {
        const itemPrice = item.product.price || 0;
        return total + (itemPrice * item.quantity);
      }, 0);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => 
        (item.product.id && item.product.id === productId) || 
        (item.product._id && item.product._id === productId)
      );

      if (item) {
        item.quantity = quantity;
        // Recalculate total
        state.total = state.items.reduce((total, item) => {
          const itemPrice = item.product.price || 0;
          return total + (itemPrice * item.quantity);
        }, 0);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.lastAddedItem = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer; 