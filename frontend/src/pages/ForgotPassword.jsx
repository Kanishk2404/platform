import React, { useState } from 'react';
import { API_URL } from '../api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Check your email for the OTP and reset instructions.');
      } else {
        setMessage(data.error || 'Failed to send reset email.');
      }
    } catch {
      setMessage('Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-black border border-cyan-400 rounded text-white placeholder-gray-400"
          />
          <button type="submit" className="w-full py-3 bg-cyan-400 text-black rounded hover:bg-cyan-500 transition-colors font-bold">Send Reset Email</button>
        </form>
        {message && <div className="mt-4 text-center text-cyan-300">{message}</div>}
        <div className="mt-4 text-center">
          <span className="text-gray-400 text-sm">Already have an OTP?</span>
          <a href="/reset-password" className="ml-2 text-cyan-400 hover:underline text-sm">Reset your password</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
