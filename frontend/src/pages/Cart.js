import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, addToCart } from '../store/slices/cartSlice';
import { TrashIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#ede3d3] to-[#e5d9c9] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#B4846C] mb-4 font-serif">Your cart is empty</h1>
            <p className="mt-4 text-xl text-[#113854] max-w-2xl mx-auto">
              Looks like you haven't added any books to your cart yet.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#113854] hover:bg-opacity-90 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ede3d3] to-[#e5d9c9] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#B4846C] mb-4 font-serif">
            Shopping Cart
          </h1>
          <p className="text-xl text-[#113854] max-w-2xl mx-auto mt-6">
            Review your items before checkout
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl overflow-hidden border-t-4 border-[#113854] mb-8">
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8">
              {items.map((item) => (
                <div key={item.product.id || item.product._id} className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-24 h-36 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="flex-grow md:flex md:justify-between md:items-center">
                    <div className="space-y-1">
                      <h3 className="text-xl font-medium text-[#113854]">{item.product.title}</h3>
                      <p className="text-sm text-gray-600">by {item.product.author}</p>
                      <p className="text-lg font-semibold text-[#B4846C]">
                        ₹{item.product.price} × {item.quantity} = ₹{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() => handleQuantityChange(item.product.id || item.product._id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-[#113854] font-medium transition-colors"
                        >
                          -
                        </button>
                        <span className="w-10 text-center py-1 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id || item.product._id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-[#113854] font-medium transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.product.id || item.product._id)}
                        className="text-red-600 hover:text-red-800 rounded-full p-2 hover:bg-red-50 transition-colors"
                        aria-label="Remove item"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-medium text-[#113854]">Order Summary</h3>
                <p className="text-sm text-gray-600 mt-1">Total Items: {items.reduce((acc, item) => acc + item.quantity, 0)}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-2xl font-bold text-[#113854]">₹{total.toFixed(2)}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link 
                to="/checkout"
                className="w-full block text-center bg-[#B4846C] text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition duration-300 font-medium shadow-sm"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/books"
                className="w-full block text-center mt-4 text-[#113854] py-2 px-4 rounded-lg border border-[#113854] hover:bg-[#113854] hover:text-white transition duration-300 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Quote section */}
        <div className="mt-16 bg-white p-12 rounded-lg shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#B4846C]"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-[#B4846C]"></div>
          <svg className="absolute text-[#ede3d3] fill-current w-16 h-16 top-8 left-8 opacity-25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
              "A reader lives a thousand lives before he dies. The man who never reads lives only one."
            </p>
            <p className="font-semibold text-[#113854]">— George R.R. Martin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 