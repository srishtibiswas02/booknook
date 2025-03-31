import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const Author = () => {
  const { authorName } = useParams();
  const dispatch = useDispatch();
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll use mock data
        const mockAuthors = {
          'holly-jackson': {
            name: 'Holly Jackson',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            description: 'Holly Jackson is the bestselling author of the A Good Girl\'s Guide to Murder series. Her debut novel was an instant success and has been translated into multiple languages.',
            books: [
              {
                id: 1,
                title: 'A Good Girl\'s Guide to Murder',
                price: 299,
                image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
                description: 'The first book in the series that follows Pip Fitz-Amobi as she investigates a murder case for her school project.'
              },
              {
                id: 2,
                title: 'Good Girl, Bad Blood',
                price: 299,
                image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
                description: 'The second book in the series where Pip investigates a missing person case.'
              }
            ]
          },
          'lauren-roberts': {
            name: 'Lauren Roberts',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            description: 'Lauren Roberts is known for her contemporary romance novels that have captured the hearts of readers worldwide.',
            books: [
              {
                id: 3,
                title: 'Powerless',
                price: 399,
                image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
                description: 'A thrilling romance set in a world where power is everything.'
              }
            ]
          },
          'rebecca-ross': {
            name: 'Rebecca Ross',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            description: 'Rebecca Ross is the author of the Elements of Cadence duology and other fantasy novels.',
            books: [
              {
                id: 4,
                title: 'Divine Rivals',
                price: 349,
                image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
                description: 'A story of love and war in a world where gods walk among mortals.'
              }
            ]
          },
          'alex-michaelides': {
            name: 'Alex Michaelides',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            description: 'Alex Michaelides is the bestselling author of The Silent Patient and other psychological thrillers.',
            books: [
              {
                id: 5,
                title: 'The Silent Patient',
                price: 399,
                image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
                description: 'A woman shoots her husband dead. She never speaks another word.'
              }
            ]
          }
        };

        const authorData = mockAuthors[authorName];
        if (authorData) {
          setAuthor(authorData);
          setBooks(authorData.books);
        } else {
          setError('Author not found');
        }
      } catch (err) {
        setError('Failed to load author data');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorData();
  }, [authorName]);

  const handleAddToCart = (book) => {
    const product = {
      id: book.id,
      title: book.title,
      author: author.name,
      price: book.price,
      image: book.image,
      description: book.description
    };
    dispatch(addToCart({ product, quantity: 1 }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EDE3D3] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B4846C]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#EDE3D3] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDE3D3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center space-x-6">
              <img
                src={author.image}
                alt={author.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{author.name}</h1>
                <p className="mt-2 text-gray-600">{author.description}</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Books by {author.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{book.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-900">₹{book.price}</p>
                  <button
                    onClick={() => handleAddToCart(book)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#B4846C] hover:bg-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4846C]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author; 