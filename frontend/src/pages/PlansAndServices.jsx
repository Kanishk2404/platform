import React, { useState } from "react";

const faqs = [
  {
    q: "What are ‘credits’?",
    a: "Credits are the units used for AI-powered content generation. Each action (tweet, LinkedIn post, blog, etc.) consumes a set number of credits."
  },
  {
    q: "Can I use my own API key?",
    a: "Yes! Our platform supports BYOK (Bring Your Own Key) for maximum flexibility and cost control."
  },
  {
    q: "Is the free plan really free forever?",
    a: "Yes, the Creator plan is free for life with generous monthly limits."
  },
  {
    q: "Can I switch between plans?",
    a: "Absolutely. You can upgrade, downgrade, or switch between plans at any time."
  }
];

const modules = [
  {
    icon: "🐦",
    title: "Tweet Genie",
    desc: "Threads, images, bulk scheduling"
  },
  {
    icon: "🔗",
    title: "LinkedIn Genie",
    desc: "Long-form, optimized LinkedIn posts"
  },
  {
    icon: "✍️",
    title: "WordPress Writer",
    desc: "Full-length SEO blogs, ready to publish"
  },
  {
    icon: "🧠",
    title: "Coming Soon: Custom LLM",
    desc: "Optimized content tailored to your tone & platform"
  }
];

const creditPacks = [
  { size: 25, price: "₹45", },
  { size: 50, price: "₹75", },
  { size: 80, price: "₹100", }
];

const PlansAndServices = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        {/* 1. Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tools for Creators. Services for Innovators.</h1>
          <p className="text-lg text-gray-300 mb-8 opacity-80 max-w-2xl mx-auto">Whether you’re building alone or scaling with a team — choose the tools you need, or let our experts handle the rest.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold px-8 py-3 rounded-xl text-lg shadow hover:scale-105 transition">Start for Free</a>
            <a href="/contact" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl text-lg font-bold hover:bg-cyan-900/20 transition">Book a Consultation</a>
          </div>
        </section>

        {/* 2. Plan Tiers */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Creator */}
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#181a20] to-[#232323] shadow-xl p-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Creator <span className="text-xs bg-cyan-700/20 text-cyan-400 px-2 py-1 rounded ml-2">Free</span></h2>
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">₹0<span className="text-base font-normal text-gray-400">/month</span></div>
              <div className="text-gray-400 mb-4">Best for hobbyists and first-time users</div>
              <ul className="mb-8 space-y-2 text-gray-200 text-left w-full max-w-xs">
                <li>✅ 50 monthly credits (built-in AI)</li>
                <li>✅ 75 BYOK calls</li>
                <li>✅ All modules access</li>
                <li>✅ Community support</li>
              </ul>
              <a href="/signup" className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold py-3 rounded-xl text-lg shadow hover:scale-105 transition text-center">Start for Free</a>
            </div>
            {/* Pro */}
            <div className="rounded-3xl border-2 border-cyan-400 bg-gradient-to-br from-[#181a20] to-[#232323] shadow-xl p-8 flex flex-col items-center scale-105 relative">
              <span className="absolute -top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">🔥 Most Popular</span>
              <h2 className="text-2xl font-bold text-white mb-2">Pro <span className="text-xs bg-blue-700/20 text-blue-400 px-2 py-1 rounded ml-2">Coming Soon</span></h2>
              <div className="text-3xl font-extrabold text-blue-400 mb-2">₹TBD<span className="text-base font-normal text-gray-400">/month</span></div>
              <div className="text-gray-400 mb-4">Best for teams and daily creators</div>
              <ul className="mb-8 space-y-2 text-gray-200 text-left w-full max-w-xs">
                <li>✅ Unlimited BYOK usage</li>
                <li>✅ Priority support</li>
                <li>✅ Analytics (soon)</li>
                <li>✅ Increased built-in credits</li>
              </ul>
              <a href="#waitlist" className="w-full bg-blue-900/30 text-blue-400 border border-blue-400/30 font-bold py-3 rounded-xl text-lg hover:bg-blue-900/50 transition text-center">Join Waitlist</a>
            </div>
            {/* Professional Services */}
            <div className="rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-[#181a20] to-[#232323] shadow-xl p-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Professional Services</h2>
              <div className="text-3xl font-extrabold text-yellow-400 mb-2">Custom Quote</div>
              <div className="text-gray-400 mb-4">Best for businesses & growth-focused teams</div>
              <ul className="mb-8 space-y-2 text-gray-200 text-left w-full max-w-xs">
                <li>✅ Dedicated AI strategy & module setup</li>
                <li>✅ SEO growth services</li>
                <li>✅ Web dev and Cloud </li>
                <li>✅ Full-service execution</li>
              </ul>
              <a href="/contact" className="w-full bg-yellow-500/90 text-black font-bold py-3 rounded-xl text-lg hover:bg-yellow-400 transition text-center">Book Consultation</a>
            </div>
          </div>
        </section>

        {/* 3. Pay-As-You-Go Section */}
        <section className="mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Top-Up Only When You Need To</h2>
          <p className="text-gray-300 mb-8">No commitment. Buy credits anytime to keep creating.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-4">
            {creditPacks.map((pack) => (
              <div key={pack.size} className="bg-white/5 rounded-2xl p-6 flex flex-col items-center border border-cyan-400/10 shadow text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{pack.size} Credits</div>
                <div className="text-lg text-white mb-1">{pack.price}</div>
                <div className="text-gray-400 mb-4">{pack.usage}</div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold py-2 rounded-xl text-base shadow hover:scale-105 transition">Buy</button>
              </div>
            ))}
          </div>
          <div className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
            <span className="block mb-1">💡 1 tweet = 1 credit</span>
            <span className="block mb-1">1 LinkedIn post = 1.6 credits (up to 3k chars)</span>
            <span className="block">1 blog = 2.1 credits (up to 1300 words)</span>
          </div>
        </section>

        {/* 4. Platform Modules Overview */}
        <section className="mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Purpose-Built Modules, Designed for Speed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {modules.map((mod) => (
              <div key={mod.title} className="bg-white/5 rounded-2xl p-6 flex flex-col items-center border border-cyan-400/10 shadow text-center">
                <span className="text-4xl mb-3">{mod.icon}</span>
                <h3 className="font-bold text-lg text-white mb-2">{mod.title}</h3>
                <p className="text-gray-300 text-sm">{mod.desc}</p>
              </div>
            ))}
          </div>
          <a href="/modules" className="mt-8 inline-block bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold px-8 py-3 rounded-xl text-lg shadow hover:scale-105 transition">See All Modules</a>
        </section>

        {/* 5. Agency & Professional Services */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Your Growth, Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SEO & Digital Growth */}
            <div className="bg-white/5 rounded-2xl p-8 border border-cyan-400/10 shadow flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🟢</span>
                <h3 className="text-xl font-bold text-white">SEO & Digital Growth</h3>
              </div>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>Keyword Research</li>
                <li>Technical Audit</li>
                <li>AI-Powered Blog Strategy</li>
                <li>Full Execution</li>
              </ul>
            </div>
            {/* Web Dev + Cloud */}
            <div className="bg-white/5 rounded-2xl p-8 border border-cyan-400/10 shadow flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔵</span>
                <h3 className="text-xl font-bold text-white">Web Dev + Cloud</h3>
              </div>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>Website/App Development</li>
                <li>CI/CD with Docker, Jenkins</li>
                <li>AWS/Kubernetes Deployment</li>
                <li>Custom Module Integration</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold px-8 py-3 rounded-xl text-lg shadow hover:scale-105 transition">Request Custom Quote</a>
            <div className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">Need something custom? We'll design it, build it, and integrate it into your existing workflow.</div>
          </div>
        </section>

        {/* 6. FAQ Section */}
        <section className="mb-20 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/5 rounded-xl border border-cyan-400/10">
                <button
                  className="w-full text-left px-6 py-4 text-lg font-semibold text-cyan-400 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span>{openFaq === i ? "-" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-300 text-base">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 7. Final Call-to-Action */}
        <section className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Create More in Less Time?</h2>
          <p className="text-lg text-gray-300 mb-8 opacity-80 max-w-2xl mx-auto">Start with our free plan, scale with credits, or partner with our team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold px-8 py-3 rounded-xl text-lg shadow hover:scale-105 transition">Start for Free</a>
            <a href="/contact" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl text-lg font-bold hover:bg-cyan-900/20 transition">Book Consultation</a>
            <a href="/modules" className="border border-violet-400 text-violet-400 px-8 py-3 rounded-xl text-lg font-bold hover:bg-violet-900/20 transition">View Modules</a>
          </div>
        </section>
      </main>
      {/* Footer is now handled globally in App.jsx */}
    </div>
  );
};

export default PlansAndServices;
