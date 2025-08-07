import React, { useState } from 'react';
import { API_URL } from '../api';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Password reset successful! You can now log in.');
      } else {
        setMessage(data.error || 'Failed to reset password.');
      }
    } catch {
      setMessage('Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-black border border-cyan-400 rounded text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            required
            className="w-full p-3 bg-black border border-cyan-400 rounded text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
            className="w-full p-3 bg-black border border-cyan-400 rounded text-white placeholder-gray-400"
          />
          <button type="submit" className="w-full py-3 bg-cyan-400 text-black rounded hover:bg-cyan-500 transition-colors font-bold">Reset Password</button>
        </form>
        {message && <div className="mt-4 text-center text-cyan-300">{message}</div>}
      </div>
    </div>
  );
};

export default ResetPassword;
