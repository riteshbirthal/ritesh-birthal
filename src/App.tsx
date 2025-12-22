import { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import LoadingScreen from './components/LoadingScreen';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 10, -10]} intensity={0.3} color="#f472b6" />
      <AnimatedSphere />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Environment preset="night" />
    </>
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
          <div className="three-canvas-container">
            <Canvas>
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
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
