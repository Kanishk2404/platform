import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const user = "Alex";
  const [showNotification, setShowNotification] = React.useState(true);

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Scrollable Content Wrapper */}
      <div className="relative z-10 h-screen overflow-y-auto px-4 md:px-8 lg:px-16">
        <Navbar />

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

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center w-full px-0 pt-8 gap-8">
          <div className="w-full flex flex-col justify-center items-center space-y-6 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/30 shadow-lg">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent text-center">
              <span className="text-white">
                Welcome to Your Modular AI Content Hub
              </span>
            </h1>
            <h2 className="text-3xl font-semibold text-cyan-400 text-center">
              <span className="text-white">
                Automate Your Content Creation, Not Your Creativity.
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-center">
              Generate. Schedule. Automate.
              <br />
              Across any channel, with any AI — all from one powerful workspace.
            </p>
            <button className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition-all text-xl">
              <a href="/dashboard">Launch Your Dashboard</a>
            </button>
          </div>
        </div>

        {/* Features Card Section */}
        <div className="w-full px-4 py-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/30 shadow-2xl">
            <div className="flex flex-col items-start p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                One Dashboard, Every Channel
              </h3>
              <p className="text-gray-200 text-base">
                Seamlessly write, schedule, and publish across Twitter, LinkedIn,
                WordPress, and more—no more toggling between ten different tools.
              </p>
            </div>
            <div className="flex flex-col items-start p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                Always On, Never Offline
              </h3>
              <p className="text-gray-200 text-base">
                Our intelligent multi-AI fallback engine automatically routes your
                request to the fastest, most reliable model—so you never hit a
                dead end.
              </p>
            </div>
            <div className="flex flex-col items-start p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                Your Voice, Amplified
              </h3>
              <p className="text-gray-200 text-base">
                Fine-tune tone, length, and format for each network. Whether you
                need a snappy thread, a professional article, or SEO-optimized
                blog, your unique brand always shines through.
              </p>
            </div>
            <div className="flex flex-col items-start p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                Built for Growth
              </h3>
              <p className="text-gray-200 text-base">
                Bulk scheduling, analytics roadmap, and encrypted API-key
                management streamline every step, empowering you to scale from
                solo creator to full agency in minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="backdrop-blur-md rounded-2xl px-8 py-10 border border-cyan-400/40 shadow-xl max-w-xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white mb-6">
              Elevate your content game with our free tier{' '}
              <span className="font-bold text-cyan-400">25 tokens</span> with
              built-in AI calls, plus{' '}
              <span className="font-bold text-cyan-400">75 tokens</span> with your
              own API keys.
            </p>
            <a
              href="/help"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl text-xl transition-all shadow-lg"
            >
              Get Started &rarr;
            </a>
          </div>
        </div>

        {/* Deep Dive Section: Problem, Solution, Comparison, Features */}
        <section className="w-full max-w-5xl mx-auto mt-16 mb-12 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-2xl text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Tired of the Content Treadmill?
          </h2>
          <p className="text-lg mb-6 text-center">
            We get it. The pressure to create high-quality, consistent content
            across multiple platforms is relentless. Today's tools promise to
            help, but they often create more work by forcing you into a fragmented
            and inefficient workflow.
          </p>
          <p className="text-lg mb-8 text-center font-semibold">
            We built this platform to fix that.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">😩</span>
              <h3 className="font-bold mb-2 text-lg">The Old Way</h3>
              <p className="text-gray-200 text-sm text-center">
                Juggling separate apps for ideas (ChatGPT), images (Canva), and
                scheduling (Hootsuite). It's slow, expensive, and error-prone.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">✅</span>
              <h3 className="font-bold mb-2 text-lg">The New Way</h3>
              <p className="text-gray-200 text-sm text-center">
                One prompt, one platform. Our AI generates, optimizes, and schedules
                your content across all your channels from a single, powerful
                dashboard.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">✨</span>
              <h3 className="font-bold mb-2 text-lg">The Result</h3>
              <p className="text-gray-200 text-sm text-center">
                Save hours every week, publish higher-quality content that engages
                your audience, and get back to focusing on your core business.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-10 text-center">
            The Core Problem: A Workflow Stuck in the Past
          </h3>
          <ul className="list-disc pl-6 text-gray-200 mb-8 space-y-2">
            <li>
              <b>Tool Sprawl:</b> You're forced to switch between separate,
              non-integrated apps for content generation, image creation,
              scheduling, and analytics.
            </li>
            <li>
              <b>Provider Lock-In:</b> You're dependent on a single, costly AI
              provider. If their service has an issue, your entire content pipeline
              grinds to a halt.
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

          <h3 className="text-2xl font-bold mb-4 mt-10 text-center">
            How We Compare to the Tools You're Already Using
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-cyan-400/10">
                  <th className="px-4 py-2 font-bold">Tool</th>
                  <th className="px-4 py-2 font-bold">Key Features</th>
                  <th className="px-4 py-2 font-bold">Limitations</th>
                  <th className="px-4 py-2 font-bold">Pricing (Entry)</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr className="border-b border-cyan-400/20">
                  <td className="px-4 py-2">Sprout Social</td>
                  <td className="px-4 py-2">AI Scheduling, Analytics</td>
                  <td className="px-4 py-2">
                    High cost; No multi-LLM fallback; No user-key option
                  </td>
                  <td className="px-4 py-2">$249/mo</td>
                </tr>
                <tr className="border-b border-cyan-400/20">
                  <td className="px-4 py-2">Hootsuite</td>
                  <td className="px-4 py-2">Bulk Scheduling, Teams</td>
                  <td className="px-4 py-2">
                    No native generation; Limited free tier; Single-AI
                  </td>
                  <td className="px-4 py-2">$99/mo</td>
                </tr>
                <tr className="border-b border-cyan-400/20">
                  <td className="px-4 py-2">SocialPilot</td>
                  <td className="px-4 py-2">Bulk Upload, AI Assistant</td>
                  <td className="px-4 py-2">AI is a paid add-on; No fallback logic</td>
                  <td className="px-4 py-2">$30/mo</td>
                </tr>
                <tr className="border-b border-cyan-400/20">
                  <td className="px-4 py-2">Agorapulse</td>
                  <td className="px-4 py-2">AI Writing Assistant</td>
                  <td className="px-4 py-2">
                    High entry price; Limited API flexibility
                  </td>
                  <td className="px-4 py-2">$69/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">n8n</td>
                  <td className="px-4 py-2">Visual Workflow Editor</td>
                  <td className="px-4 py-2">
                    General purpose; Requires heavy custom setup for AI
                  </td>
                  <td className="px-4 py-2">Free (Self-Hosted)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-10 text-center">
            The Features You've Been Missing
          </h3>
          <ul className="list-disc pl-6 text-cyan-200 mb-8 space-y-2">
            <li>
              <b>✅ Unmatched Reliability via Multi-LLM Fallback:</b> Our system
              automatically routes requests between AI providers (like Perplexity,
              OpenAI, and Gemini) to ensure you are never offline.
            </li>
            <li>
              <b>✅ True End-to-End Automation:</b> Go beyond simple scheduling. We
              offer bulk content generation, integrated AI image creation, post
              history tracking, and more in a single, unified workflow.
            </li>
            <li>
              <b>✅ Total Control & Cost Savings:</b> We are the only platform that
              allows you to bring your own API key. This gives you full control
              and can dramatically reduce your costs.
            </li>
            <li>
              <b>✅ Secure by Design:</b> Your keys are your own. We use
              state-of-the-art encryption to ensure your data and content remain
              private and secure.
            </li>
          </ul>

          <div className="text-center mt-8">
            <span className="text-xl font-bold text-cyan-400">
              Stop Juggling Tabs. Start Publishing.
            </span>
            <p className="text-lg text-white mt-2">
              Creating content shouldn’t feel like assembling a puzzle.
            </p>
            <p className="text-base text-gray-200 mt-1">
              Let the AI handle the busywork. You stay focused on growth,
              creativity, and strategy.
            </p>
          </div>
        </section>

        {/* Spacer for scrolling */}
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default Home;
