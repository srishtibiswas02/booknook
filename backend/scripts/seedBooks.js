const mongoose = require('mongoose');
const Book = require('../models/Book');

const books = [
  // Non-Fiction Books
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth, greed, and happiness.",
    price: 499,
    image: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Non Fiction",
    rating: 4.5,
    numReviews: 12,
    isFeatured: true,
    stock: 15,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "John Doe",
        rating: 5,
        comment: "A must-read for anyone interested in personal finance."
      }
    ]
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    price: 599,
    image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Non Fiction",
    rating: 4.8,
    numReviews: 25,
    isFeatured: true,
    stock: 20,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Jane Smith",
        rating: 5,
        comment: "Life-changing book that helped me build better habits."
      }
    ]
  },
  {
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    description: "The Japanese secret to a long and happy life",
    price: 399,
    image: "https://m.media-amazon.com/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Non Fiction",
    rating: 4.3,
    numReviews: 18,
    isFeatured: true,
    stock: 12,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Mike Johnson",
        rating: 4,
        comment: "Insightful book about finding purpose in life."
      }
    ]
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A Brief History of Humankind",
    price: 699,
    image: "https://m.media-amazon.com/images/I/41d1gVUK1yL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Non Fiction",
    rating: 4.7,
    numReviews: 30,
    isFeatured: true,
    stock: 8,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Sarah Wilson",
        rating: 5,
        comment: "Fascinating perspective on human history."
      }
    ]
  },

  // Fiction Books
  {
    title: "The Blue Lagoon",
    author: "Henry De Vere Stacpoole",
    description: "A classic romance novel set on a tropical island",
    price: 299,
    image: "https://m.media-amazon.com/images/I/41d1gVUK1yL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    rating: 4.2,
    numReviews: 15,
    isFeatured: true,
    stock: 10,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Emily Brown",
        rating: 4,
        comment: "A beautiful story of love and survival."
      }
    ]
  },
  {
    title: "Powerless",
    author: "Lauren Roberts",
    description: "A thrilling fantasy novel about a world where power is everything",
    price: 449,
    image: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    rating: 4.6,
    numReviews: 22,
    isFeatured: true,
    stock: 15,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Alex Turner",
        rating: 5,
        comment: "An engaging fantasy read with complex characters."
      }
    ]
  },
  {
    title: "Divine Rivals",
    author: "Rebecca Ross",
    description: "A magical tale of love and rivalry in a world of gods and mortals",
    price: 399,
    image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    rating: 4.7,
    numReviews: 28,
    isFeatured: true,
    stock: 18,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Rachel Green",
        rating: 5,
        comment: "Beautifully written with an enchanting plot."
      }
    ]
  },
  {
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    description: "A gripping mystery that will keep you guessing until the end",
    price: 349,
    image: "https://m.media-amazon.com/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    rating: 4.5,
    numReviews: 35,
    isFeatured: true,
    stock: 20,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "David Miller",
        rating: 4,
        comment: "A page-turner with unexpected twists."
      }
    ]
  },
  {
    title: "Good Girl, Bad Blood",
    author: "Holly Jackson",
    description: "The thrilling sequel to A Good Girl's Guide to Murder",
    price: 349,
    image: "https://m.media-amazon.com/images/I/41d1gVUK1yL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    rating: 4.4,
    numReviews: 20,
    isFeatured: true,
    stock: 15,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Lisa Chen",
        rating: 4,
        comment: "Just as gripping as the first book!"
      }
    ]
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A woman shoots her husband dead. She never speaks another word.",
    price: 399,
    image: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Fiction",
    rating: 4.6,
    numReviews: 42,
    isFeatured: true,
    stock: 25,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Tom Wilson",
        rating: 5,
        comment: "A psychological thriller that will keep you on the edge of your seat."
      }
    ]
  },

  // Audiobooks
  {
    title: "Atomic Habits (Audiobook)",
    author: "James Clear",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones - Unabridged",
    price: 799,
    image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Audiobooks",
    rating: 4.8,
    numReviews: 15,
    isFeatured: true,
    stock: 10,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Mark Thompson",
        rating: 5,
        comment: "Excellent narration and production quality."
      }
    ]
  },
  {
    title: "The Silent Patient (Audiobook)",
    author: "Alex Michaelides",
    description: "A woman shoots her husband dead. She never speaks another word. - Unabridged",
    price: 699,
    image: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Audiobooks",
    rating: 4.7,
    numReviews: 18,
    isFeatured: true,
    stock: 8,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Sarah Parker",
        rating: 5,
        comment: "The narrator's performance adds an extra layer of suspense."
      }
    ]
  },

  // Accessories
  {
    title: "Premium Wooden Book Stand",
    description: "Elegant wooden book stand with adjustable angle and page holder",
    price: 999,
    image: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Accessories",
    rating: 4.6,
    numReviews: 25,
    isFeatured: true,
    stock: 15,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Robert Brown",
        rating: 5,
        comment: "Beautiful and sturdy, perfect for reading."
      }
    ]
  },
  {
    title: "Classic Leather Bookmark Set",
    description: "Set of 5 premium leather bookmarks with unique designs",
    price: 299,
    image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Accessories",
    rating: 4.4,
    numReviews: 30,
    isFeatured: true,
    stock: 50,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Emma Wilson",
        rating: 4,
        comment: "Beautiful bookmarks, great gift idea."
      }
    ]
  },
  {
    title: "LED Book Light",
    description: "Rechargeable LED book light with adjustable brightness and flexible neck",
    price: 499,
    image: "https://m.media-amazon.com/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Accessories",
    rating: 4.5,
    numReviews: 40,
    isFeatured: true,
    stock: 20,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "James Smith",
        rating: 5,
        comment: "Perfect for reading in bed, very comfortable on the eyes."
      }
    ]
  },
  {
    title: "Premium Book Cover",
    description: "Water-resistant book cover with elastic closure",
    price: 399,
    image: "https://m.media-amazon.com/images/I/41d1gVUK1yL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Accessories",
    rating: 4.3,
    numReviews: 15,
    isFeatured: true,
    stock: 30,
    reviews: [
      {
        user: new mongoose.Types.ObjectId(),
        name: "Linda Chen",
        rating: 4,
        comment: "Great protection for my books, fits perfectly."
      }
    ]
  }
];

const seedBooks = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect('mongodb+srv://srishtibiswas:srishti02@cluster.a9vvh.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');

    // Clear existing books
    await Book.deleteMany({});
    console.log('Cleared existing books');

    // Insert new books
    const insertedBooks = await Book.insertMany(books);
    console.log(`Successfully inserted ${insertedBooks.length} books`);

    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedBooks(); 