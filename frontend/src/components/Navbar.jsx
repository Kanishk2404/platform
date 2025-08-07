import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';


function Navbar(){
    const [isVisible, setIsVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [loginMessage, setLoginMessage] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 800); // Match the typewriter delay
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginMessage('');
        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: loginForm.email, password: loginForm.password })
            });
            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem('token', data.token);
                setIsLoggedIn(true);
                setShowLoginModal(false);
                setLoginForm({ email: '', password: '' });
                setLoginMessage('');
                // Try to get name from response, fallback to email
                setUserName(data.name || data.username || data.email || 'User');
            } else {
                setLoginMessage(data.error || 'Login failed');
            }
        } catch (err) {
            setLoginMessage('Network error');
        }
    };

    // On mount, check for token and decode username
    useEffect(() => {
        const token = localStorage.getItem('token');
        let valid = false;
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                if (!payload.exp || payload.exp * 1000 > Date.now()) {
                    setUserName(payload.name || payload.username || payload.email || 'User');
                    valid = true;
                }
            } catch {
                setUserName('User');
            }
        }
        setIsLoggedIn(valid);
    }, []);

return (
    <>
        <nav className={`flex justify-between items-center p-4 bg-transparent border-b border-cyan-400 text-white shadow-lg relative z-50 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>        
            <div className='logo'>
                <img src="https://via.placeholder.com/40x40/00FFFF/000000?text=L" alt="Logo" />
            </div>
            
{/* Hamburger Menu Button - Mobile Only */}
<button 
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="md:hidden flex flex-col space-y-1 p-2"
    aria-label="Toggle Menu">
    <div className="w-6 h-0.5 bg-white"></div>
    <div className="w-6 h-0.5 bg-white"></div>
    <div className="w-6 h-0.5 bg-white"></div>

</button>

            <div className='links hidden md:flex space-x-8'>
                <Link to="/" className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Home</Link>
                <Link to="/plans-and-services" className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Plans & Services</Link>
                <a href="/blog" className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Blog</a>
                <Link to="/about" className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">About</Link>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Contact Us</Link>
            </div>
            
            <div className='user-profile hidden md:flex items-center space-x-4'>
                {!isLoggedIn ? (
                    <button onClick ={() => setShowLoginModal(true)}
                    className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                        Login
                    </button>
                ) : (
                    <div className="flex items-center space-x-4">
                        <span className="text-cyan-400 font-semibold">Welcome, {userName}</span>
                        <button 
                            onClick={() => setIsLoggedIn(false)}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>

        {/* Mobile Menu Overlay */}
{isMobileMenuOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
        <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 border-l border-cyan-400 transform transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-cyan-400 text-xl"
            >
                ✕
            </button>
            
            {/* Mobile Menu Content */}
            <div className="flex flex-col p-6 pt-16 space-y-6">
                <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
                <Link to="/plans-and-services" className="text-white hover:text-cyan-400 transition-colors">Plans & Services</Link>
                <a href="/blog" className="text-white hover:text-cyan-400 transition-colors">Blog</a>
                <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
                <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact Us</Link>
                
                {/* Mobile Login Button */}
                <div className="pt-4 border-t border-gray-700">
                    {!isLoggedIn ? (
                        <button 
                            onClick={() => {
                                setShowLoginModal(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className="w-full py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                        >
                            Login
                        </button>
                    ) : (
                        <div className="space-y-4">
                            <p className="text-cyan-400 font-semibold">Welcome, {userName}</p>
                            <button 
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
)}

{/* Login Modal */}
{showLoginModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-900 border border-cyan-400 rounded-lg p-8 w-96 relative">
            <h2 className="text-2xl text-cyan-400 mb-6 text-center">Login</h2>
            {/* Close Button */}
            <button 
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 text-white hover:text-cyan-400 text-xl"
            >
                ✕
            </button>
            {/* Login Form */}
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={loginForm.email}
                        onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                        className="w-full p-3 bg-black border border-cyan-400 rounded text-white placeholder-gray-400"
                        required
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={loginForm.password}
                        onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                        className="w-full p-3 bg-black border border-cyan-400 rounded text-white placeholder-gray-400"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full py-3 bg-cyan-400 text-black rounded hover:bg-cyan-500 transition-colors duration-300 mt-6"
                >
                    Login
                </button>
                {loginMessage && <div className="text-center text-sm text-cyan-400">{loginMessage}</div>}
                <div className="text-center mt-2">
                  <a href="/forgot-password" className="text-cyan-400 hover:underline text-sm">Forgot password?</a>
                </div>
            </form>
            <div className="my-4">
                <button
                    className="w-full flex items-center justify-center gap-3 bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold py-2 px-4 rounded-lg transition-all border border-white/20"
                    onClick={() => window.location.href = `${API_URL}/api/auth/google`}
                    type="button"
                >
                    {/* Google Icon */}
                    <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.021 35.596 44 30.138 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                    Sign in with Google
                </button>
            </div>
            {/* Not Registered Link */}
            <p className="text-center mt-4 text-gray-400">
                Not registered? 
                <button className="text-cyan-400 hover:underline ml-1" onClick={() => { setShowLoginModal(false); window.location.href = '/signup'; }}>
                    Sign up here
                </button>
            </p>
        </div>
    </div>
)}
    </>
);

}

export default Navbar;