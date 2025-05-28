import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onHover: (isHovered: boolean) => void;
}

const Navbar = ({ onHover }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Mukarrambambot', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/mukarram-bambot-386452282', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:mukbambot@gmail.com', label: 'Email' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink 
          to="/" 
          className="text-2xl font-poppins font-bold flex items-center gap-2"
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          <Code className="text-accent-cyan" />
          <span className="gradient-text">MB</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `relative py-2 px-1 font-medium transition-colors duration-300 
                    ${isActive ? 'text-accent-cyan' : 'text-white/80 hover:text-white'} 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                    after:bg-accent-cyan after:origin-left after:scale-x-0 
                    ${isActive ? 'after:scale-x-100' : ''} hover:after:scale-x-100 
                    after:transition-transform after:duration-300`
                  }
                  onMouseEnter={() => onHover(true)}
                  onMouseLeave={() => onHover(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-accent-cyan hover:text-accent-cyan transition-colors duration-300"
                aria-label={link.label}
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div 
        className={`md:hidden fixed inset-0 bg-dark z-40 pt-20 px-6`}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: isOpen ? '0%' : '100%', opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ul className="flex flex-col gap-6 items-center text-xl">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `block text-center py-3 px-4 rounded-md w-full ${
                    isActive ? 'bg-dark-300 text-accent-cyan' : 'text-white hover:bg-dark-300/50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-6 mt-8">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:border-accent-cyan hover:text-accent-cyan transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;