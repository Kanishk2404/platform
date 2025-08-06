import React from "react";

export default function AgencyServices() {
  React.useEffect(() => {
    document.title = "Agency Services | Modular AI Hub";
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-white font-sans antialiased">
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* 🟣 1. Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Built Tools. Delivering Outcomes.</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">We’re not just another agency. We’ve built our own content automation tools — and now we use them to accelerate growth for creators, startups, and businesses like yours.</p>
          <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold px-8 py-3 rounded-xl text-lg shadow hover:scale-105 transition">Request a Consultation</a>
        </section>

        {/* 🟠 2. Why Work With Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Not Just an Agency. We Built the Stack.</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">Most agencies start from scratch. We start with an edge — Tweet Genie, LinkedIn Genie, WordPress Writer, and other AI-native modules we've already built in-house.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-cyan-400/20 shadow-xl flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🧩</span>
              <h3 className="font-bold text-lg text-white mb-2">Modular by Design</h3>
              <p className="text-gray-300">Every service we offer is powered by reusable components and automation logic.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-cyan-400/20 shadow-xl flex flex-col items-center text-center">
              <span className="text-4xl mb-3">⚡</span>
              <h3 className="font-bold text-lg text-white mb-2">Built-in Efficiency</h3>
              <p className="text-gray-300">Our tools accelerate workflows, cut costs, and scale seamlessly across clients.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-cyan-400/20 shadow-xl flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🛠️</span>
              <h3 className="font-bold text-lg text-white mb-2">Full-Stack Execution</h3>
              <p className="text-gray-300">From frontend design to DevOps to SEO, our team delivers real results.</p>
            </div>
          </div>
        </section>

        {/* 🟡 3. What We Offer */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* SEO & Content Growth */}
            <div className="bg-white/5 rounded-2xl p-8 border border-cyan-400/10 shadow flex flex-col">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">💡 SEO & Content Growth Services</h3>
              <ul className="list-disc pl-5 text-gray-200 mb-4 space-y-2">
                <li>Full SEO strategy: technical audits, keyword research, on-page optimization</li>
                <li>Content execution using our in-house modules</li>
                <li>SEO-optimized blog/article creation (via WordPress Writer)</li>
                <li>Performance tracking and optimization</li>
                <li>Platform-agnostic support: WordPress, Webflow, Ghost, custom CMS</li>
              </ul>
              <p className="text-gray-400 mt-auto">We use our tools to publish smarter, rank faster, and grow bigger.</p>
            </div>
            {/* Website & Cloud Dev */}
            <div className="bg-white/5 rounded-2xl p-8 border border-cyan-400/10 shadow flex flex-col">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🖥️ Website & Cloud Development</h3>
              <ul className="list-disc pl-5 text-gray-200 mb-4 space-y-2">
                <li>Custom frontend & full-site builds (React, Next.js, etc.)</li>
                <li>Backend development: Node.js, Python, REST/GraphQL APIs</li>
                <li>DevOps: Docker, Jenkins, GitHub Actions</li>
                <li>Cloud deployment: AWS, GCP, DigitalOcean</li>
                <li>Uptime monitoring, autoscaling, cloud security</li>
              </ul>
              <p className="text-gray-400 mt-auto">We deploy modern infrastructure with enterprise readiness from day one.</p>
            </div>
          </div>
        </section>

        {/* 🔵 4. Custom AI Module Development */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Workflow We Don’t Offer Yet?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">From Zapier-like automations to full AI content pipelines — if we haven’t built it, we will. You get a team of developers, designers, and AI enthusiasts ready to turn your problem into a scalable product.</p>
          <ul className="list-disc pl-5 text-gray-200 mb-8 max-w-xl mx-auto text-left space-y-2">
            <li>Custom APIs or integrations</li>
            <li>Internal dashboards with GPT/Claude/Perplexity logic</li>
            <li>Workflow-specific toolchains</li>
            <li>Chatbots, scrapers, and ML inference modules</li>
          </ul>
          <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold px-8 py-3 rounded-xl text-lg shadow hover:scale-105 transition">Get a Custom Quote</a>
        </section>

        {/* 🟢 5. Testimonials (Optional) */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Trusted by Builders Like You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-6 border border-cyan-400/10 shadow flex flex-col items-center text-center">
              <p className="text-gray-200 mb-2">“They handled our SEO and scaled content production 10x.”</p>
              <span className="text-cyan-400 font-semibold">— Marketing Head, B2B SaaS</span>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-cyan-400/10 shadow flex flex-col items-center text-center">
              <p className="text-gray-200 mb-2">“The AI tools they built are better than anything we’ve seen on the market.”</p>
              <span className="text-cyan-400 font-semibold">— Indie Creator</span>
            </div>
          </div>
        </section>

        {/* ⚫ 6. Final CTA Section */}
        <section className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Let’s Build Smarter, Together.</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Skip the fluff. Whether you need more traffic, better infra, or a custom AI workflow — we’ve already built the backbone. Let’s put it to work for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold px-8 py-3 rounded-xl text-lg shadow hover:scale-105 transition">Book a Discovery Call</a>
            <a href="/plans-and-services" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl text-lg font-bold hover:bg-cyan-900/20 transition">Explore the Platform</a>
          </div>
        </section>
      </main>
    </div>
  );
}
