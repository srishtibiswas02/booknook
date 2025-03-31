const mongoose = require('mongoose');
const Meeting = require('./models/Meeting');

// Sample meeting data
const meetings = [
  {
    title: "The Psychology of Money Book Club Discussion",
    description: "Join us for an engaging discussion about Morgan Housel's insights on money, wealth, and happiness. We'll explore the timeless lessons about wealth, greed, and happiness.",
    date: new Date('2024-04-15T15:00:00.000Z'),
    location: "Virtual Meeting",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    book: "65f2d8b3c4e5f6a7b8c9d0e1" // Replace with actual book ID from your database
  },
  {
    title: "Atomic Habits Deep Dive",
    description: "Let's discuss James Clear's transformative book on building good habits and breaking bad ones. We'll share personal experiences and practical applications.",
    date: new Date('2024-04-22T16:00:00.000Z'),
    location: "Virtual Meeting",
    meetingLink: "https://meet.google.com/xyz-uvwx-yz",
    book: "65f2d8b3c4e5f6a7b8c9d0e2" // Replace with actual book ID from your database
  },
  {
    title: "The Alchemist Book Club",
    description: "Join us for a magical journey through Paulo Coelho's masterpiece. We'll discuss the universal themes of following your dreams and finding your personal legend.",
    date: new Date('2024-04-29T14:00:00.000Z'),
    location: "Virtual Meeting",
    meetingLink: "https://meet.google.com/mno-pqrs-tu",
    book: "65f2d8b3c4e5f6a7b8c9d0e3" // Replace with actual book ID from your database
  },
  {
    title: "Rich Dad Poor Dad Discussion",
    description: "Let's explore Robert Kiyosaki's insights on financial education and building wealth. We'll discuss the key concepts and share personal financial strategies.",
    date: new Date('2024-05-06T15:30:00.000Z'),
    location: "Virtual Meeting",
    meetingLink: "https://meet.google.com/vwx-yzab-cd",
    book: "65f2d8b3c4e5f6a7b8c9d0e4" // Replace with actual book ID from your database
  },
  {
    title: "The 7 Habits of Highly Effective People",
    description: "Join us for a discussion on Stephen Covey's timeless principles for personal and professional effectiveness. We'll explore how to apply these habits in our daily lives.",
    date: new Date('2024-05-13T16:00:00.000Z'),
    location: "Virtual Meeting",
    meetingLink: "https://meet.google.com/efg-hijk-lm",
    book: "65f2d8b3c4e5f6a7b8c9d0e5" // Replace with actual book ID from your database
  }
];

// Connect to MongoDB
mongoose.connect('mongodb+srv://srishtibiswas:srishti02@cluster.a9vvh.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');
  
  // Clear existing meetings
  await Meeting.deleteMany({});
  console.log('Cleared existing meetings');
  
  // Insert new meetings
  const insertedMeetings = await Meeting.insertMany(meetings);
  console.log(`Successfully inserted ${insertedMeetings.length} meetings`);
  
  // Close the connection
  await mongoose.connection.close();
  console.log('Database connection closed');
})
.catch((error) => {
  console.error('Error:', error);
  process.exit(1);
}); 