import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Meeting = () => {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const generateMeetings = () => {
      const today = new Date();
      const books = [
        { title: "The Psychology of Money", author: "Morgan Housel", category: "Finance" },
        { title: "Atomic Habits", author: "James Clear", category: "Self-Development" },
        { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction" },
        { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance" },
        { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", category: "Self-Development" },
        { title: "Think and Grow Rich", author: "Napoleon Hill", category: "Success" },
        { title: "The Power of Now", author: "Eckhart Tolle", category: "Spirituality" },
        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Self-Development" },
        { title: "Deep Work", author: "Cal Newport", category: "Productivity" },
        { title: "The 4-Hour Work Week", author: "Timothy Ferriss", category: "Lifestyle" }
      ];

      const meetingsData = books.map((book, index) => {
        const meetingDate = new Date(today);
        meetingDate.setDate(today.getDate() + (index * 7));
        
        return {
          id: index + 1,
          title: `${book.title} Book Club Discussion`,
          description: `Join us for an engaging discussion about ${book.title} by ${book.author}. We'll explore the key themes and share our insights.`,
          date: meetingDate,
          location: "Virtual Meeting",
          meetingLink: `/meeting/${index + 1}`,
          book: book,
          participants: Math.floor(Math.random() * 50) + 10,
          duration: "1 hour",
          difficulty: ["Beginner", "Intermediate", "Advanced"][Math.floor(Math.random() * 3)]
        };
      });

      setMeetings(meetingsData);
      setLoading(false);
    };

    generateMeetings();
  }, []);

  const categories = ['All', 'Finance', 'Self-Development', 'Fiction', 'Success', 'Spirituality', 'Productivity', 'Lifestyle'];
  
  const filteredMeetings = meetings.filter(meeting => {
    const matchesCategory = selectedCategory === 'all' || meeting.book.category === selectedCategory;
    const matchesSearch = meeting.book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         meeting.book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleJoinMeeting = (meetingId) => {
    navigate(`/meeting/${meetingId}`);
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#113854] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading meetings...</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#113854] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Book Club Meetings</h1>
          <p className="text-lg text-gray-200">Join our vibrant community of readers and engage in meaningful discussions</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#113854] text-white'
                    : 'bg-white text-[#113854] hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search by book title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#113854] focus:border-transparent"
            />
            <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMeetings.map((meeting, index) => (
            <motion.div
              key={meeting.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {meeting.book.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {meeting.difficulty}
                  </span>
                </div>

                <h2 className="text-xl font-semibold mb-2 text-[#113854]">{meeting.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{meeting.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {meeting.date.toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {meeting.duration}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {meeting.participants} participants
                  </div>
                </div>

                <div className="pt-4 border-t mt-auto">
                  <h3 className="font-medium mb-2 text-[#113854]">Featured Book:</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">{meeting.book.title}</p>
                      <p className="text-sm text-gray-500">by {meeting.book.author}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleJoinMeeting(meeting.id)}
                  className="mt-6 w-full bg-[#113854] text-white px-4 py-2 rounded-lg hover:bg-[#0a2740] transition-colors duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Join Meeting
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMeetings.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No meetings found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meeting; 