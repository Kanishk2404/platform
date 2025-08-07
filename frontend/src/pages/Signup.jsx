import React, { useState } from 'react';
import { API_URL } from '../api';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Signup successful! Please verify OTP sent to your email.');
        setTimeout(() => {
          window.location.href = '/verify-otp';
        }, 1200);
      } else {
        setMessage(data.error || 'Signup failed');
      }
    } catch (err) {
      setMessage('Network error');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-white font-sans antialiased flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl grid md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Left Side: Value Proposition & Social Proof */}
        <div className="hidden md:flex flex-col justify-between p-8 bg-gray-800/30 backdrop-blur-lg">
            <div>
                <h1 className="text-3xl font-bold text-white mb-4">
                    Join the Future of Content Creation
                </h1>
                <p className="text-gray-400 mb-8">
                    You're one step away from a smarter, faster workflow.
                </p>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Save up to 10 hours a week</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Replace 4+ expensive tools</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span>Never hit a dead end with Multi-AI fallback</span>
                    </li>
                </ul>
            </div>
            
        </div>

        {/* Right Side: Signup Form */}
        <div className="w-full bg-[#1b1b1b] p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Create your free account</h2>
            <p className="text-gray-400 mb-6">Start with our generous free plan. No credit card required.</p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                    <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="mt-1 block w-full bg-black/30 border border-white/20 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 transition"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="mt-1 block w-full bg-black/30 border border-white/20 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 transition"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                    <input
                        required
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={e => setForm({ ...form, password: e.target.value })}
                        className="mt-1 block w-full bg-black/30 border border-white/20 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 transition"
                    />
                </div>
                <div>
                    <button type="submit" className="w-full mt-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                        Create Free Account
                    </button>
                </div>
                {message && <div className="text-center text-sm text-cyan-400">{message}</div>}
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-[#1b1b1b] px-2 text-gray-500">OR</span>
                </div>
            </div>

            <div>
                <button
                    className="w-full flex items-center justify-center gap-3 bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold py-2 px-4 rounded-lg transition-all border border-white/20"
                    onClick={() => window.location.href = `${API_URL}/api/auth/google`}
                    type="button"
                >
                    {/* Google Icon */}
                    <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.021 35.596 44 30.138 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                    Sign up with Google
                </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-6">
                By creating an account, you agree to our <a href="#" className="text-cyan-400 hover:underline">Terms of Service</a> and <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a>.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
