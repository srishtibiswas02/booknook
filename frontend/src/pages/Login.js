import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/slices/authSlice';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'https://booknook-zmhm.onrender.com';
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token and user data
      dispatch(setCredentials(data));
      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EDE3D3] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#B4846C_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-[1.01] relative z-10 border-2 border-[#B4846C]/20">
        {/* Decorative Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B4846C] to-[#EDE3D3]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#B4846C] to-[#EDE3D3]"></div>

        <div className="text-center relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#B4846C]/10 rounded-full blur-2xl"></div>
          <h2 className="mt-6 text-center text-4xl font-bold text-gray-900 tracking-tight relative z-10">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a 
              href="/register" 
              className="font-semibold text-[#B4846C] hover:text-[#8B5E3C] transition-colors duration-200 relative group"
            >
              Create an account
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B4846C] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded-r-lg animate-shake" role="alert">
              <p className="font-medium">{error}</p>
            </div>
          )}
          <div className="space-y-4">
            <div className="relative group">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#B4846C] transition-colors" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B4846C] focus:border-transparent sm:text-sm transition-all duration-300 ease-in-out"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative group">
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#B4846C] transition-colors" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B4846C] focus:border-transparent sm:text-sm transition-all duration-300 ease-in-out"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#B4846C] transition-colors group"
              >
                {showPassword ? <EyeOff className="h-5 w-5 group-hover:rotate-12 transition-transform" /> : <Eye className="h-5 w-5 group-hover:rotate-12 transition-transform" />}
              </button>
            </div>
          </div>

          <div className="text-sm">
            <a 
              href="/forgot-password" 
              className="font-medium text-[#B4846C] hover:text-[#8B5E3C] transition-colors relative group"
            >
              Forgot password?
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B4846C] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-[#B4846C] hover:bg-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4846C] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out relative group overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;