import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const location = useLocation();
  const [cursorHovered, setCursorHovered] = useState(false);
  
  // Handle cursor hover state
  const handleCursorHover = (isHovered: boolean) => {
    setCursorHovered(isHovered);
  };
  
  // Apply hover event listeners to interactive elements
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    
    const handleMouseEnter = () => setCursorHovered(true);
    const handleMouseLeave = () => setCursorHovered(false);
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor hovered={cursorHovered} />
      <Navbar onHover={handleCursorHover} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home onHover={handleCursorHover} />} />
            <Route path="/about" element={<About onHover={handleCursorHover} />} />
            <Route path="/portfolio" element={<Portfolio onHover={handleCursorHover} />} />
            <Route path="/achievements" element={<Achievements onHover={handleCursorHover} />} />
            <Route path="/contact" element={<Contact onHover={handleCursorHover} />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer onHover={handleCursorHover} />
    </div>
  );
}

export default App;