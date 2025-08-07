import React from "react";

// Example icon imports (replace with your actual icon/image paths)
import { FaTwitter, FaLinkedin, FaWordpress, FaLock } from "react-icons/fa";

const modules = [
  {
    name: "LinkedIn Genie",
    description: (
      <>
        <span>Professional LinkedIn posts & articles, optimized for engagement.</span>
        <ul className="list-disc pl-5 mt-2 text-gray-200 text-base text-left">
          <li>AI-powered post generation</li>
          <li>Bulk scheduling</li>
          <li>History & analytics</li>
          <li>Image generation</li>
        </ul>
      </>
    ),
    icon: <FaLinkedin className="text-cyan-400 text-5xl mb-4" />,
    link: "/linkedin-genie"
  },
  {
    name: "Twitter Genie",
    description: (
      <>
        <span>Tweets, threads, bulk scheduling, history, and delete controls, image generation.</span>
        <ul className="list-disc pl-5 mt-2 text-gray-200 text-base text-left">
          <li>Tweets & threads</li>
          <li>Bulk scheduling</li>
          <li>History & delete controls</li>
          <li>Image generation</li>
        </ul>
      </>
    ),
    icon: <FaTwitter className="text-cyan-400 text-5xl mb-4" />,
    // link: "https://tweet-automation-docker-production-7b60.up.railway.app/"
    link: null // We'll handle navigation with token
  },
  {
    name: "WordPress Blogs (Under Development)",
    description: (
      <>
        <span>SEO-optimized blog articles, direct WordPress publishing. (Coming Soon)</span>
        <ul className="list-disc pl-5 mt-2 text-gray-200 text-base text-left">
          <li>AI-powered blog writing</li>
          <li>SEO optimization</li>
          <li>Direct WordPress publishing</li>
        </ul>
      </>
    ),
    icon: <FaWordpress className="text-cyan-400 text-5xl mb-4" />,
    link: "#"
  },
  
];

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-transparent overflow-y-auto font-sans">
      <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-cyan-400/30 shadow-2xl">
            <h1 className="text-5xl font-extrabold text-white mb-8 tracking-tight text-center drop-shadow-lg">Your Dashboard Modules</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {modules.map((mod, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:scale-[1.04] hover:shadow-cyan-400/30 transition-transform min-h-[480px] w-full relative">
                  <div className="absolute top-6 right-6">
                    <FaLock className="text-cyan-300 text-xl" title="Encrypted API Storage" />
                  </div>
                  {mod.icon}
                  <h2 className="text-2xl font-bold text-white mb-4 text-center font-sans tracking-tight">{mod.name}</h2>
                  <div className="text-white text-base mb-8 text-left w-full">{mod.description}</div>
                  {mod.name === "Twitter Genie" ? (
                    <button
                      className="mt-auto bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl text-lg transition-all shadow-lg w-full text-center"
                      onClick={() => {
                        const token = localStorage.getItem('token');
                        if (token) {
                          const url = `https://tweet-automation-docker-production-7b60.up.railway.app/?token=${encodeURIComponent(token)}`;
                          window.open(url, '_blank');
                        } else {
                          alert('You must be logged in to access Tweet Genie.');
                        }
                      }}
                    >
                      Get Started &rarr;
                    </button>
                  ) : (
                    <a href={mod.link} className={`mt-auto bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl text-lg transition-all shadow-lg w-full text-center ${mod.link === '#' ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}>Get Started &rarr;</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Social Proof & Footer */}
        <div className="flex flex-col items-center mt-16">
          <div className="flex items-center gap-4 mb-4">
            {/* Example avatars, replace with real user images */}
            <img src="/images/user1.webp" alt="User 1" className="h-10 w-10 rounded-full border-2 border-cyan-400" />
            <img src="/images/user2.webp" alt="User 2" className="h-10 w-10 rounded-full border-2 border-cyan-400" />
            <img src="/images/user3.webp" alt="User 3" className="h-10 w-10 rounded-full border-2 border-cyan-400" />
            <span className="text-cyan-300 font-semibold">Join 50+ Creators</span>
          </div>
          <div className="text-white text-sm mb-2">Multi-LLM Architecture • Kota Innovation</div>
          <div className="text-white text-xs">Proudly built in Kota, Rajasthan 🇮🇳</div>
        </div>
        {/* Spacer for scrolling */}
        <div className="h-24"></div>
      </div>
    </div>
    
  );
};

export default Dashboard;
