import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: `${API_URL}/api/users/login`,
  register: `${API_URL}/api/users/register`,
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
};

// Products API
export const productsAPI = {
  getAllProducts: () => api.get('/products'),
  getProductById: (id) => api.get(`/products/${id}`),
  getProductsByCategory: (category) => api.get(`/products/category/${category}`),
  searchProducts: (query) => api.get(`/products/search?q=${query}`),
};

// Cart API
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (productId, quantity) => api.post('/cart', { productId, quantity }),
  updateCartItem: (productId, quantity) => api.put(`/cart/${productId}`, { quantity }),
  removeFromCart: (productId) => api.delete(`/cart/${productId}`),
  clearCart: () => api.delete('/cart'),
};

// Orders API
export const ordersAPI = {
  createOrder: (orderData) => api.post('/orders', orderData),
  getOrders: () => api.get('/orders'),
  getOrderById: (id) => api.get(`/orders/${id}`),
  updateOrderStatus: (id, status) => api.put(`/orders/${id}/status`, { status }),
};

// Payment API
export const paymentAPI = {
  createPaymentIntent: (amount) => api.post('/payment/create-intent', { amount }),
  confirmPayment: (paymentIntentId) => api.post('/payment/confirm', { paymentIntentId }),
};

// Book endpoints
export const bookAPI = {
  books: `${API_URL}/api/books`,
  bookById: (id) => `${API_URL}/api/books/${id}`,
};

// Review endpoints
export const reviewAPI = {
  reviews: `${API_URL}/api/reviews`,
  bookReviews: (bookId) => `${API_URL}/api/reviews/${bookId}`,
};

// Meeting endpoints
export const meetingAPI = {
  meetings: `${API_URL}/api/meetings`,
  meetingById: (id) => `${API_URL}/api/meetings/${id}`,
};

// Blog endpoints
export const blogAPI = {
  blogs: `${API_URL}/api/blogs`,
  blogById: (id) => `${API_URL}/api/blogs/${id}`,
};

export default api; 