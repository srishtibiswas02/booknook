import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MeetingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Generate static meeting data (same as in Meeting.js)
  const generateMeetingData = (meetingId) => {
    const today = new Date();
    const books = [
      { title: "The Psychology of Money", author: "Morgan Housel" },
      { title: "Atomic Habits", author: "James Clear" },
      { title: "The Alchemist", author: "Paulo Coelho" },
      { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
      { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey" },
      { title: "Think and Grow Rich", author: "Napoleon Hill" },
      { title: "The Power of Now", author: "Eckhart Tolle" },
      { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson" },
      { title: "Deep Work", author: "Cal Newport" },
      { title: "The 4-Hour Work Week", author: "Timothy Ferriss" }
    ];

    const index = parseInt(meetingId) - 1;
    if (index < 0 || index >= books.length) return null;

    const book = books[index];
    const meetingDate = new Date(today);
    meetingDate.setDate(today.getDate() + (index * 7));

    return {
      id: meetingId,
      title: `${book.title} Book Club Discussion`,
      description: `Join us for an engaging discussion about ${book.title} by ${book.author}. We'll explore the key themes and share our insights.`,
      date: meetingDate,
      location: "Virtual Meeting",
      book: book,
      discussionPoints: [
        "Key themes and main ideas",
        "Personal takeaways and reflections",
        "Practical applications in daily life",
        "Questions and discussions",
        "Connections to other books or experiences"
      ],
      nextMeeting: index < books.length - 1 ? {
        title: books[index + 1].title,
        author: books[index + 1].author,
        date: new Date(meetingDate.getTime() + 7 * 24 * 60 * 60 * 1000)
      } : null
    };
  };

  const meeting = generateMeetingData(id);
  if (!meeting) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Meeting not found</h2>
          <button
            onClick={() => navigate('/meeting')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Back to Meetings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/meeting')}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Meetings
        </button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">{meeting.title}</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Meeting Details</h2>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Date:</span> {meeting.date.toLocaleDateString()}</p>
                <p><span className="font-medium">Time:</span> {meeting.date.toLocaleTimeString()}</p>
                <p><span className="font-medium">Location:</span> {meeting.location}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Featured Book</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium">{meeting.book.title}</h3>
                <p className="text-gray-600">by {meeting.book.author}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Discussion Points</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {meeting.discussionPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {meeting.nextMeeting && (
              <div className="mt-8 pt-8 border-t">
                <h2 className="text-xl font-semibold mb-2">Next Meeting</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">{meeting.nextMeeting.title}</h3>
                  <p className="text-gray-600">by {meeting.nextMeeting.author}</p>
                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">Date:</span> {meeting.nextMeeting.date.toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetail; 