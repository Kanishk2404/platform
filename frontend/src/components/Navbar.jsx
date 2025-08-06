import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Navbar(){
    const [isVisible, setIsVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 800); // Match the typewriter delay
        return () => clearTimeout(timer);
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
                        <span className="text-cyan-400 font-semibold">Welcome, User</span>
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
                            <p className="text-cyan-400 font-semibold">Welcome, User</p>
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
                    <div className="space-y-4">
                        <div>
                            <input 
                                type="email" 
                                placeholder="Email"
                                className="w-full p-3 bg-black border border-cyan-400 rounded text-white placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                placeholder="Password"
                                className="w-full p-3 bg-black border border-cyan-400 rounded text-white placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button 
                        onClick={() => {
                            setIsLoggedIn(true);
                            setShowLoginModal(false);
                        }}
                        className="w-full py-3 bg-cyan-400 text-black rounded hover:bg-cyan-500 transition-colors duration-300 mt-6"
                    >
                        Login
                    </button>
                    
                    {/* Not Registered Link */}
                    <p className="text-center mt-4 text-gray-400">
                        Not registered? 
                        <button className="text-cyan-400 hover:underline ml-1">
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