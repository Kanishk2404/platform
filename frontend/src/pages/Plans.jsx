import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "Basic AI content generation",
      "1 social account",
      "Limited scheduling",
      "Community support"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: [
      "All Starter features",
      "Up to 5 social accounts",
      "Advanced scheduling",
      "Analytics dashboard",
      "Priority support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Unlimited social accounts",
      "Custom AI modules",
      "Dedicated manager",
      "Custom integrations"
    ],
    highlight: false
  }
];

const Plans = () => (
  <div className="min-h-screen w-full bg-black flex flex-col">
    <Navbar />
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">Plans & Pricing</h1>
      <p className="text-lg text-gray-300 mb-12 text-center opacity-80">Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#181a20] to-[#232323] shadow-xl p-8 flex flex-col items-center transition-all ${plan.highlight ? 'scale-105 border-cyan-400 shadow-cyan-400/20' : ''}`}
          >
            <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
            <div className="text-3xl font-extrabold text-cyan-400 mb-4">{plan.price}</div>
            <ul className="mb-8 space-y-2 text-gray-200 text-left w-full max-w-xs">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-cyan-400">✔</span> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold text-lg transition ${plan.highlight ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:scale-105' : 'bg-cyan-900/20 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-900/40'}`}>
              {plan.price === "Free" ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Plans;
