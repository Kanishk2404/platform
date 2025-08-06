import HyperspeedBackground from './components/HyperspeedBackground';
import TypewriterText from './components/TypewriterText';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <HyperspeedBackground />
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center z-10">
        <TypewriterText 
          text="Welcome to the new age of content creation and marketing"
          speed={60}
          delay={800}
        />
      </div>
    </div>
  );
}

export default App;
