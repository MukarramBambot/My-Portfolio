import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard, { Project } from '../components/ProjectCard';

interface PortfolioProps {
  onHover: (isHovered: boolean) => void;
}

const Portfolio = ({ onHover }: PortfolioProps) => {
  // Sample projects data
  const allProjects: Project[] = [
    {
      id: 1,
      title: "Nebula Quest",
      description: "A space exploration game with procedurally generated worlds and strategic combat.",
      image: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Unreal Engine", "C++", "Game Dev"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      title: "EcoSystem Simulator",
      description: "A simulation of natural ecosystems with AI-driven creatures and environmental factors.",
      image: "https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Unity", "C#", "AI"],
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and modern web technologies.",
      image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "Shadow Tactics",
      description: "A stealth strategy game where players control a team of specialized agents.",
      image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Unreal Engine", "Blueprint", "Game Dev"],
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "AI Chess Companion",
      description: "A chess application with integrated AI opponent and learning assistant.",
      image: "https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "TensorFlow", "AI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 6,
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with analytics and predictions.",
      image: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];
  
  // Filter categories
  const categories = ["All", "Game Dev", "Web", "AI", "Mobile"];
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Filtered projects
  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(project => {
        if (activeFilter === "Game Dev") return project.tags.some(tag => ["Game Dev", "Unreal Engine", "Unity"].includes(tag));
        if (activeFilter === "Web") return project.tags.some(tag => ["React", "TypeScript", "Node.js"].includes(tag));
        if (activeFilter === "AI") return project.tags.some(tag => ["AI", "TensorFlow"].includes(tag));
        if (activeFilter === "Mobile") return project.tags.some(tag => ["Mobile", "React Native"].includes(tag));
        return false;
      });

  return (
    <PageTransition>
      <section className="pt-24 pb-16 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-1/3 right-[-10%] w-[600px] h-[600px] bg-accent-orange/10 rounded-full blur-[150px]"></div>
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
              My Portfolio
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-accent-cyan mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.p 
              className="max-w-2xl mx-auto mt-4 text-white/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore my latest projects and creations. From games to web applications, these projects showcase my skills and passion for development.
            </motion.p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-accent-cyan text-dark font-medium' 
                    : 'bg-dark-200 text-white/80 hover:bg-dark-300'
                }`}
                onClick={() => setActiveFilter(category)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onHover={onHover} />
            ))}
          </motion.div>
          
          {/* Show More Button (could be functional with pagination) */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button 
              className="btn-secondary"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
            >
              View More Projects
            </button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Portfolio;