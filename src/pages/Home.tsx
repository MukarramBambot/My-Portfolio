import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import AnimatedHeading from '../components/AnimatedHeading';

interface HomeProps {
  onHover: (isHovered: boolean) => void;
}

const Home = ({ onHover }: HomeProps) => {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-accent-cyan/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                className="mb-4 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="px-4 py-2 bg-dark-200 border border-accent-cyan/30 rounded-full text-sm font-medium text-accent-cyan">
                  Hello, I'm
                </span>
              </motion.div>
              
              <AnimatedHeading 
                text="Mukarram Bambot"
                className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 gradient-text"
              />
              
              <motion.h2 
                className="text-xl md:text-2xl text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Game Developer | Programmer | Tech Enthusiast
              </motion.h2>
              
              <motion.p 
                className="text-white/60 text-lg mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I create immersive gaming experiences and innovative software solutions.
                Passionate about pushing the boundaries of technology and crafting engaging digital worlds.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link 
                  to="/portfolio" 
                  className="btn-primary"
                  onMouseEnter={() => onHover(true)}
                  onMouseLeave={() => onHover(false)}
                >
                  View My Work
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-secondary flex items-center gap-2"
                  onMouseEnter={() => onHover(true)}
                  onMouseLeave={() => onHover(false)}
                >
                  Contact Me <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            >
              <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-white/10 neon-border">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Developer workspace with computer screens showing game development" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
                
                {/* Tech icons or badges could go here */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-dark-300/80 backdrop-blur-sm text-white text-sm rounded-full border border-white/10">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-dark-300/80 backdrop-blur-sm text-white text-sm rounded-full border border-white/10">
                    C++
                  </span>
                  <span className="px-3 py-1 bg-dark-300/80 backdrop-blur-sm text-white text-sm rounded-full border border-white/10">
                    Unreal Engine
                  </span>
                  <span className="px-3 py-1 bg-dark-300/80 backdrop-blur-sm text-white text-sm rounded-full border border-white/10">
                    React
                  </span>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-5 -right-5 p-3 bg-dark-200 rounded-lg border border-accent-cyan/30 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <span className="text-accent-cyan text-sm font-medium">5+ Years Experience</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -left-5 p-3 bg-dark-200 rounded-lg border border-accent-purple/30 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-accent-purple text-sm font-medium">10+ Projects Completed</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-white/50 text-sm mb-2">Scroll Down</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home;