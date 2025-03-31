import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      
      // Ensure product has required fields
      if (!product || !product.id) {
        console.error('Invalid product data:', product);
        return;
      }

      const existingItem = state.items.find(item => 
        item.product.id === product.id || item.product._id === product._id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ 
          product: {
            id: product.id,
            title: product.title,
            author: product.author,
            price: product.price || 0,
            image: product.image,
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
        item.product.id !== productId && item.product._id !== productId
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
        item.product.id === productId || item.product._id === productId
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