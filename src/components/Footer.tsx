import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, Cpu } from 'lucide-react';

interface FooterProps {
  onHover: (isHovered: boolean) => void;
}

const Footer = ({ onHover }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Mukarrambambot', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/mukarram-bambot-386452282', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:mukbambot@gmail.com', label: 'Email' },
  ];
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-dark-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-accent-cyan" />
              <span className="text-xl font-poppins font-bold gradient-text">Mukarram Bambot</span>
            </div>
            <p className="text-white/70 mb-4">
              Game Developer | Programmer | Tech Enthusiast
            </p>
            <div className="flex gap-3">
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
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent-cyan">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path}
                    className="text-white/70 hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2"
                    onMouseEnter={() => onHover(true)}
                    onMouseLeave={() => onHover(false)}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full"></span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent-cyan">
              Contact
            </h3>
            <p className="text-white/70 mb-3">
              Interested in working together? Feel free to reach out.
            </p>
            <NavLink 
              to="/contact"
              className="btn-secondary inline-block"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
            >
              Get In Touch
            </NavLink>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-white/50 text-sm">
          <p>© {currentYear} Mukarram Bambot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;