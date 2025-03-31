import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import { TrashIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#EDE3D3] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Add some books to your cart to see them here.</p>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#B4846C] hover:bg-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4846C]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDE3D3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id || item.product._id} className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-24 h-32 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.product.title}</h3>
                    <p className="text-sm text-gray-500">by {item.product.author}</p>
                    <p className="mt-1 text-lg font-medium text-[#B4846C]">
                      ₹{(item.product.price || 0) * item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => handleQuantityChange(item.product.id || item.product._id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-900"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id || item.product._id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.product.id || item.product._id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Total</h3>
                <p className="text-2xl font-bold text-[#B4846C]">₹{total}</p>
              </div>
              <Link
                to="/checkout"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#B4846C] hover:bg-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4846C]"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 