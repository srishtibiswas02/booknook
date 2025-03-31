const mongoose = require('mongoose');
const Blog = require('../models/Blog');

const blogs = [
  {
    title: "The Power of Reading: How Books Transform Lives",
    content: `
      Reading has the power to transform lives in ways we might not even realize. When we immerse ourselves in a book, we're not just passing time – we're expanding our horizons, developing empathy, and gaining new perspectives.

      The benefits of reading extend far beyond entertainment. Studies have shown that regular reading can:
      - Improve cognitive function and memory
      - Reduce stress and anxiety
      - Enhance empathy and emotional intelligence
      - Expand vocabulary and communication skills
      - Provide new perspectives and ideas

      Whether you're diving into fiction or exploring non-fiction, each book offers a unique opportunity for growth and learning. The key is to make reading a regular part of your life, even if it's just a few pages each day.
    `,
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Reading Tips",
    tags: ["reading", "personal growth", "wellness"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Building a Personal Library: A Guide for Book Lovers",
    content: `
      Creating a personal library is more than just collecting books – it's about curating a space that reflects your interests, challenges your thinking, and provides endless opportunities for learning and enjoyment.

      Here's how to build your perfect personal library:

      1. Start with the classics
      Begin with timeless works that have stood the test of time. These books often provide foundational knowledge and cultural references.

      2. Include diverse perspectives
      Make sure your library represents different viewpoints, cultures, and experiences. This helps broaden your understanding of the world.

      3. Mix genres
      Don't limit yourself to one type of book. Include fiction, non-fiction, poetry, and reference materials.

      4. Consider organization
      Whether you organize by genre, author, or color, find a system that works for you and makes it easy to find what you're looking for.

      5. Regular maintenance
      Review your collection periodically. Remove books you no longer need and add new ones that interest you.
    `,
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Library Building",
    tags: ["library", "organization", "book collecting"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The Art of Book Reviewing: A Comprehensive Guide",
    content: `
      Writing a good book review is an art that can help both readers and authors. A well-written review provides valuable insights and helps readers make informed decisions about their next read.

      Here's how to write an effective book review:

      1. Start with a brief summary
      Give readers a general idea of what the book is about without revealing major spoilers.

      2. Discuss the writing style
      Comment on the author's writing style, including aspects like pacing, tone, and language use.

      3. Analyze the content
      Evaluate the book's themes, character development, and overall message.

      4. Share your personal experience
      Describe how the book affected you and what you learned from it.

      5. Provide constructive feedback
      If there are areas for improvement, discuss them respectfully and constructively.

      Remember that your review should be honest but fair, and always avoid personal attacks on the author.
    `,
    author: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Writing Tips",
    tags: ["book reviews", "writing", "criticism"],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const seedBlogs = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect('mongodb+srv://srishtibiswas:srishti02@cluster.a9vvh.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('Cleared existing blogs');

    // Insert new blogs
    const insertedBlogs = await Blog.insertMany(blogs);
    console.log(`Successfully inserted ${insertedBlogs.length} blogs`);

    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedBlogs(); 