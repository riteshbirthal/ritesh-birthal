import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

const floatingSymbolsData = [
  { symbol: '</', left: 5, delay: 0, duration: 25, size: 1.2, opacity: 0.15 },
  { symbol: '/>', left: 15, delay: 3, duration: 22, size: 1.0, opacity: 0.12 },
  { symbol: '{', left: 25, delay: 7, duration: 28, size: 1.4, opacity: 0.18 },
  { symbol: '}', left: 35, delay: 2, duration: 20, size: 0.9, opacity: 0.14 },
  { symbol: '()', left: 45, delay: 12, duration: 30, size: 1.1, opacity: 0.16 },
  { symbol: '=>', left: 55, delay: 5, duration: 24, size: 1.3, opacity: 0.13 },
  { symbol: '[]', left: 65, delay: 9, duration: 26, size: 1.0, opacity: 0.17 },
  { symbol: '&&', left: 75, delay: 15, duration: 22, size: 1.2, opacity: 0.11 },
  { symbol: '||', left: 85, delay: 1, duration: 28, size: 0.85, opacity: 0.15 },
  { symbol: '===', left: 95, delay: 8, duration: 32, size: 1.1, opacity: 0.14 },
  { symbol: 'const', left: 10, delay: 18, duration: 35, size: 0.9, opacity: 0.12 },
  { symbol: 'let', left: 30, delay: 11, duration: 27, size: 1.0, opacity: 0.16 },
  { symbol: 'function', left: 50, delay: 4, duration: 30, size: 0.8, opacity: 0.13 },
  { symbol: 'return', left: 70, delay: 14, duration: 25, size: 0.85, opacity: 0.15 },
  { symbol: 'import', left: 90, delay: 6, duration: 28, size: 0.9, opacity: 0.11 },
  { symbol: 'async', left: 20, delay: 16, duration: 32, size: 1.0, opacity: 0.14 },
  { symbol: 'await', left: 40, delay: 10, duration: 26, size: 0.95, opacity: 0.17 },
  { symbol: '< >', left: 60, delay: 13, duration: 24, size: 1.15, opacity: 0.12 },
  { symbol: '{ }', left: 80, delay: 19, duration: 29, size: 1.05, opacity: 0.16 },
  { symbol: '//', left: 8, delay: 17, duration: 31, size: 1.1, opacity: 0.13 },
];

const FloatingSymbols = () => {
  return (
    <div className="floating-symbols">
      {floatingSymbolsData.map((item, index) => (
        <span 
          key={index} 
          className="floating-symbol"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}rem`,
            opacity: item.opacity,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="app-container">
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}

      {!loading && (
        <>
          <div className="background-container">
            <div className="grid-overlay"></div>
            <FloatingSymbols />
            <div className="gradient-orbs">
              <div className="orb orb-1"></div>
              <div className="orb orb-2"></div>
              <div className="orb orb-3"></div>
            </div>
          </div>

          <div className="overlay-content">
            <div className="nav-container">
              <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
              </button>

              <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <button onClick={() => handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
                <button onClick={() => handleNavClick('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
                <button onClick={() => handleNavClick('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button>
                <button onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
                <button onClick={() => handleNavClick('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
                <button onClick={() => handleNavClick('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>Achievements</button>
                <button onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
              </nav>
            </div>

            <div className="section-content">
              {activeSection === 'about' && <About />}
              {activeSection === 'experience' && <Experience />}
              {activeSection === 'education' && <Education />}
              {activeSection === 'projects' && <Projects />}
              {activeSection === 'skills' && <Skills />}
              {activeSection === 'achievements' && <Achievements />}
              {activeSection === 'contact' && <Contact />}
            </div>

            <footer className="footer">
              <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Ritesh Birthal. All Rights Reserved.</p>
                <p className="footer-tagline">Built with passion and creativity</p>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
