import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import LogoSection from './components/LogoSection';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 -z-10" />
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <LogoSection />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
