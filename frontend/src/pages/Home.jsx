// --- Animation Styles (add to Home page for demo; move to global CSS for production) ---
const animationStyles = `
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes fadein-up {
  0% { opacity: 0; transform: translateY(32px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadein {
  animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1) both;
}
.animate-fadein-up {
  animation: fadein-up 1.2s cubic-bezier(0.4,0,0.2,1) both;
}
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
`;

import React from "react";
import FeatureAccordion from '../components/FeatureAccordion';
import FadeInSection from '../components/FadeInSection';

const Home = () => {
  const user = "Alex";
  const [showNotification, setShowNotification] = React.useState(true);

  return (
    <div className="min-h-screen w-full bg-black">
      <style>{animationStyles}</style>
      <div className="relative z-10 px-4 md:px-8 lg:px-16">
        {/* Notification Toast */}
        {showNotification && (
          <div className="fixed top-6 right-6 z-50">
            <div className="flex items-center bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-cyan-400/40 shadow-lg">
              <span className="text-xl mr-3 text-cyan-300">🎉</span>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-semibold text-white">
                  Welcome back, {user}.
                </span>
                <span className="text-white text-sm md:text-base">
                  Ready to automate your next post?
                </span>
              </div>
              <button
                className="ml-4 text-cyan-300 hover:text-white text-lg font-bold focus:outline-none"
                onClick={() => setShowNotification(false)}
                aria-label="Dismiss notification"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Hero Section - Expanded, Animated, Modernized */}
        <FadeInSection>
          <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 bg-black overflow-hidden mb-24">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-cyan-900 via-black to-violet-900 opacity-70 blur-2xl" style={{ pointerEvents: 'none' }}></div>
          {/* Subtle AI SVG or Lottie Placeholder */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 opacity-40 select-none pointer-events-none">
            {/* Replace with Lottie/SVG for real animation */}
            <svg width="400" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="200" cy="60" rx="180" ry="40" fill="url(#aiGradient)" />
              <defs>
                <linearGradient id="aiGradient" x1="0" y1="0" x2="400" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl py-20 animate-fadein-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 drop-shadow-xl tracking-tight leading-tight max-w-2xl md:max-w-3xl animate-fadein-up delay-100">
              Welcome to Your Modular<br />
              AI Content Hub
            </h1>
            <h2 className="text-3xl font-semibold text-white text-center mb-2 animate-fadein-up delay-200">
              Automate Your Content Creation, Not Your Creativity.
            </h2>
          
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center animate-fadein-up delay-300">
              <a href="/signup" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-5 rounded-2xl shadow-xl text-2xl flex items-center gap-3 transition-all">
                <span className="text-2xl">🚀</span> Try Free
              </a>
              <a href="/dashboard" className="border-2 border-cyan-300 text-white px-10 py-5 rounded-2xl text-2xl hover:bg-white/10 flex items-center gap-3 transition-all shadow-xl">
                <span className="text-2xl">📊</span> <a href="/dashboard">View Dashboard</a>
              </a>
            </div>
          </div>
        </section>
        </FadeInSection>

        {/* Section Divider */}
        <div className="w-full flex justify-center my-12">
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-60"></div>
        </div>

        {/* Features Card Section */}
        <FadeInSection>
          <section className="w-full px-4 py-12">
            <h2 className="text-4xl font-bold text-white text-center mb-12 tracking-tight">Why Creators Love Our Platform</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-cyan-400/30 shadow-2xl">
              <div className="flex flex-col items-start p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg min-h-[220px] animate-fadein-up delay-100">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">One Dashboard, Every Channel</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  Access a growing library of purpose-built modules for your favorite social media platforms, blogs, and content channels. <span className="font-semibold text-cyan-300">Replace at least 4 separate tool subscriptions</span> and consolidate your entire workflow.
                </p>
              </div>
              <div className="flex flex-col items-start p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg min-h-[220px] animate-fadein-up delay-200">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Always On, Never Offline</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  Our intelligent multi-AI fallback engine automatically routes your request to the fastest, most reliable model—ensuring <span className="font-semibold text-cyan-300">99.9% uptime</span> for your content generation so you never hit a dead end.
                </p>
              </div>
              <div className="flex flex-col items-start p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg min-h-[220px] animate-fadein-up delay-300">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Your Voice, Amplified</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  Launch the right module for the job. We understand the unique nuances of every content format, from snappy social updates to in-depth, SEO-optimized articles. <span className="font-semibold text-cyan-300">Your unique brand will always shine through.</span>
                </p>
              </div>
              <div className="flex flex-col items-start p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg min-h-[220px] animate-fadein-up delay-400">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Built for Growth</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  Each module is designed to streamline your workflow, from bulk scheduling and analytics to encrypted API-key management. <span className="font-semibold text-cyan-300">Scale from solo creator to full agency</span> with tools built for efficiency.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Section Divider */}
        <div className="w-full flex justify-center my-16">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-60"></div>
        </div>

        {/* Deep Dive Section: Problem, Solution, Comparison, Features */}
        <FadeInSection>
          <section className="w-full max-w-5xl mx-auto mb-16 p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-2xl text-white">
            <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight">Tired of the Content Treadmill?</h2>
            <p className="text-xl mb-8 text-center leading-relaxed">
              We get it. The <span className="font-semibold text-cyan-300">average creator spends over 10 hours a week just managing the logistics of content</span>. Today's tools promise to help, but they often create more work by forcing you into a fragmented and inefficient workflow.
            </p>
            <p className="text-xl mb-12 text-center font-bold text-cyan-200">
              We built this platform to fix that.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center min-h-[200px] shadow-lg">
                <span className="text-4xl mb-3">😩</span>
                <h3 className="font-bold mb-3 text-2xl text-cyan-300 tracking-tight">The Old Way</h3>
                <p className="text-gray-200 text-base text-center leading-relaxed">
                  Juggling separate apps for ideas (ChatGPT), images (Canva), and scheduling (Hootsuite). It's slow, expensive, and error-prone.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center min-h-[200px] shadow-lg">
                <span className="text-4xl mb-3">✅</span>
                <h3 className="font-bold mb-3 text-2xl text-cyan-300 tracking-tight">The New Way</h3>
                <p className="text-gray-200 text-base text-center leading-relaxed">
                  One platform, powerful modules. Choose your channel, generate optimized content, and schedule your posts, saving <span className="font-semibold text-cyan-300">₹8,000–₹25,000/month</span> on tool subscriptions.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center min-h-[200px] shadow-lg">
                <span className="text-4xl mb-3">✨</span>
                <h3 className="font-bold mb-3 text-2xl text-cyan-300 tracking-tight">The Result</h3>
                <p className="text-gray-200 text-base text-center leading-relaxed">
                  Save hours every week, publish higher-quality content that engages your audience, and get back to focusing on your core business.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-extrabold mb-6 mt-14 text-center tracking-tight text-white">
              The Core Problem: A Workflow Stuck in the Past
            </h3>
            <ul className="list-disc pl-8 text-gray-200 mb-12 space-y-3 text-lg">
              <li>
                <b>Tool Sprawl:</b> You're forced to switch between separate apps, costing you 5-10 hours of productive time every single week.
              </li>
              <li>
                <b>Provider Lock-In:</b> You're dependent on a single, costly AI provider whose retail prices can be 2-5x higher than direct API costs.
              </li>
              <li>
                <b>Clunky Automation:</b> Most tools offer basic scheduling but lack
                true end-to-end automation, leaving you to handle the most
                time-consuming steps manually.
              </li>
              <li>
                <b>Manual Errors:</b> Every time you copy, paste, and reformat content
                between platforms, you introduce the risk of errors, slowing down
                delivery and damaging your brand's consistency.
              </li>
            </ul>

            {/* Features Accordion + Visual Preview Section (interactive, single instance) */}
            {(() => {
              const features = [
                {
                  title: "Unmatched Reliability via Multi-LLM Fallback",
                  desc: "Our system automatically routes requests between AI providers (like Perplexity, OpenAI, and Gemini) to ensure you are never offline.",
                  img: "/fallback mechanism.png",
                },
                {
                  title: "Beyond Scheduling: Real Automation",
                  desc: "Go beyond simple scheduling. Our platform offers dedicated modules for bulk content generation, integrated AI image creation, post history tracking, and more.",
                  img: "/automation.png",
                },
                {
                  title: "Total Control & Cost Savings",
                  desc: "We are the only platform that allows you to bring your own API key, allowing you to reduce your AI generation costs by up to 80%. You get full control and maximum savings.",
                  img: "/total cost saving.png",
                },
                {
                  title: "Secure by Design",
                  desc: "Your keys are your own. We use state-of-the-art encryption to ensure your data and content remain private and secure.",
                  img: "/secure.png",
                },
                {
                  title: "Personalized LLM (Coming Soon)",
                  desc: (
                    <>
                      <strong>Coming Soon: Our Own AI Model</strong><br />
                      We’re excited to announce that soon we’ll be rolling out our own Large Language Model (LLM) purpose-built for content creators.<br /><br />
                      Our LLM will be optimized for:
                      <ul className="list-disc pl-6 mb-2">
                        <li>Twitter content & viral captions</li>
                        <li>LinkedIn posts & articles</li>
                        <li>WordPress & normal blogs</li>
                        <li>SEO-optimized writing</li>
                        <li>Real-time data integration</li>
                      </ul>
                      Stay tuned for a new era of AI-powered content generation—faster, smarter, and tailored for your needs.
                    </>
                  ),
                  img: "/own llm updated.png",
                },
              ];
              const [openIndex, setOpenIndex] = React.useState(null);
              return (
                <section className="flex flex-col md:flex-row gap-8 items-start justify-center w-full max-w-6xl mx-auto py-12">
                  {/* Left: Accordion */}
                  <div className="flex-1 min-w-[300px]">
                    <h3 className="text-2xl font-bold mb-6 text-white">The Features You've Been Missing</h3>
                    <FeatureAccordion
                      features={features}
                      openIndex={openIndex}
                      setOpenIndex={setOpenIndex}
                    />
                  </div>
                  {/* Right: Visual Preview */}
                  <div className="flex-1 flex items-center justify-center min-w-[300px]">
                    <img
                      src={
                        openIndex === null
                          ? "/summarized.png"
                          : features[openIndex]?.img || "/dashboard-preview.png"
                      }
                      alt="Feature Preview"
                      className="rounded-xl shadow-lg w-full max-w-md border border-white/10 transition-all duration-500"
                    />
                  </div>
                </section>
              );
            })()}

            <div className="text-center mt-16 mb-8">
              <span className="text-2xl font-bold text-white">
                Stop Juggling Tabs. Start Building Your Brand.
              </span>
              <p className="text-xl text-white mt-4">
                Creating content shouldn’t feel like assembling a puzzle.
              </p>
              <p className="text-lg text-gray-200 mt-2">
                Launch the right module for the job. Let us handle the busywork. You stay focused on growth, creativity, and strategy.
              </p>
            </div>

          </section>
        </FadeInSection>

        {/* Section Divider */}
        <div className="w-full flex justify-center my-20">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-60"></div>
        </div>

        {/* Final CTA Section */}
        <FadeInSection>
          <div className="w-full flex flex-col items-center justify-center ">
            <div className="backdrop-blur-md rounded-3xl px-12 py-14 border-2 border-cyan-400/40 shadow-2xl max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Ready to Get Started?</h2>
              <p className="text-2xl text-white mb-8 leading-relaxed">
                Elevate your content game with our free tier <span className="font-bold text-cyan-400">25 tokens</span> with built-in AI calls, plus <span className="font-bold text-cyan-400">75 tokens</span> with your own API keys.
              </p>
              <a
                href="/signup"
                className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-12 py-5 rounded-2xl text-2xl transition-all shadow-xl"
              >
                Get Started &rarr;
              </a>
            </div>
          </div>
        </FadeInSection>

      </div>

    </div>
  );
};

export default Home;

