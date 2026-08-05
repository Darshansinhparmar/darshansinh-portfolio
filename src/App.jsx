import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import CinematicHero from './sections/CinematicHero';
import About from './sections/About';
import CaseStudies from './sections/CaseStudies';
import Skills from './sections/Skills';
import Methods from './sections/Methods';
import Certifications from './sections/Certifications';
import Status from './sections/Status';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden selection:bg-blue-600 selection:text-white bg-[#09090E]">
      <CustomCursor />
      <Background />
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full">
          <CinematicHero />
          <About />
          <CaseStudies />
          <Skills />
          <Methods />
          <Certifications />
          <Status />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

