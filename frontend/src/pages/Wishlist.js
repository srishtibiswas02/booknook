import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import { HeartIcon as HeartSolidIcon, TrashIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#EDE3D3] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <HeartSolidIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Your wishlist is empty</h2>
            <p className="mt-1 text-sm text-gray-500">
              Start adding items to your wishlist to save them for later.
            </p>
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#B4846C] hover:bg-[#967259] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4846C]"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDE3D3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Wishlist</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-center object-cover"
                />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors duration-200"
                  >
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${item.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.author}</p>
                </div>
                <p className="text-sm font-medium text-[#B4846C]">{item.price}</p>
              </div>
              <div className="mt-4">
                <button
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#B4846C] hover:bg-[#967259] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4846C]"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist; 