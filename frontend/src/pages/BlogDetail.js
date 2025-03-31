import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`/api/blogs/${id}`);
        setBlog(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching blog post');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!blog) return <div className="text-center">Blog post not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{blog.author}</span>
            </div>
            
            <div className="prose max-w-none">
              {blog.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t">
              <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blog.relatedPosts?.map((post) => (
                  <div key={post._id} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 