import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Lightbulb, GraduationCap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SkillBar from '../components/SkillBar';
import MB from '../src/assets/images/MB.jpg'

interface AboutProps {
  onHover: (isHovered: boolean) => void;
}

const About = ({ onHover }: AboutProps) => {
  const skills = [
    { name: "Python", percentage: 45, color: "#3776AB" },
    { name: "C++", percentage: 35, color: "#00599C" },
    { name: "Unreal Engine", percentage: 40, color: "#0E1128" },
    { name: "React", percentage: 25, color: "#61DAFB" },
    { name: "JavaScript", percentage: 30, color: "#F7DF1E" },
    { name: "Game Design", percentage: 20, color: "#FF3860" },
  ];

  const experiences = [
    {
      year: "2022 - 2025",
      title: "BCA Student",
      company: "Patrician College of Arts and Science",
      description: "Pursuing Bachelor of Computer Applications."
    }
  ];

  return (
    <PageTransition>
      <section className="pt-24 pb-16 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-accent-cyan mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] rounded-lg overflow-hidden border border-white/10 neon-border">
                <img 
                  src={MB} 
                  alt="Mukarram Bambot" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent"></div>
              </div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 p-4 bg-dark-200 rounded-lg border border-accent-purple/30 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <span className="block text-3xl font-bold text-accent-purple">1</span>
                  <span className="text-white text-sm">Year of Experience</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-4">Game Developer & Programmer</h2>
              <p className="text-white/70 mb-6">
                Hello! I'm Mukarram Bambot, a passionate game developer and programmer with a love for creating
                immersive digital experiences. Currently pursuing my BCA at Patrician College, I specialize in
                Python, C++, and Unreal Engine development.
              </p>
              <p className="text-white/70 mb-6">
                With over 5 years of coding experience, I've developed numerous projects ranging from simple games
                to complex software solutions. I'm constantly exploring new technologies and pushing my creative boundaries.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-dark-200 p-4 rounded-lg border border-white/5 text-center">
                  <span className="block text-3xl font-bold text-accent-cyan mb-1">6+</span>
                  <span className="text-white/70 text-sm">Projects</span>
                </div>
                <div className="bg-dark-200 p-4 rounded-lg border border-white/5 text-center">
                  <span className="block text-3xl font-bold text-accent-purple mb-1">3+</span>
                  <span className="text-white/70 text-sm">Languages</span>
                </div>
                <div className="bg-dark-200 p-4 rounded-lg border border-white/5 text-center">
                  <span className="block text-3xl font-bold text-accent-orange mb-1">3+</span>
                  <span className="text-white/70 text-sm">Hackathons</span>
                </div>
                <div className="bg-dark-200 p-4 rounded-lg border border-white/5 text-center">
                  <span className="block text-3xl font-bold text-accent-cyan mb-1">2+</span>
                  <span className="text-white/70 text-sm">Clients</span>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="btn-primary"
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
          
          {/* Skills Section */}
          <div className="mb-20">
            <motion.h2 
              className="text-3xl font-poppins font-bold mb-8 relative pb-3 inline-block
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 
              after:bg-gradient-to-r after:from-accent-cyan after:to-accent-purple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              My Skills
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div>
            <motion.h2 
              className="text-3xl font-poppins font-bold mb-8 relative pb-3 inline-block
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 
              after:bg-gradient-to-r after:from-accent-cyan after:to-accent-purple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience & Education
            </motion.h2>
            
            <div className="relative border-l-2 border-accent-cyan/30 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="mb-12 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-12 w-8 h-8 bg-dark-200 rounded-full border-2 border-accent-cyan flex items-center justify-center">
                    <GraduationCap size={16} className="text-accent-cyan" />
                  </div>
                  <span className="text-sm text-accent-cyan font-medium">{exp.year}</span>
                  <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-white/70 mb-2">{exp.company}</p>
                  <p className="text-white/60">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
