import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onHover: (isHovered: boolean) => void;
}

const ProjectCard = ({ project, onHover }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <motion.div 
      className="bg-dark-200 rounded-lg overflow-hidden h-full flex flex-col border border-white/5 hover:border-accent-cyan/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-transparent p-4 flex items-end justify-between opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="flex gap-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-300/80 text-white hover:text-accent-cyan transition-colors duration-300"
                aria-label="GitHub Repository"
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-300/80 text-white hover:text-accent-cyan transition-colors duration-300"
                aria-label="Live Demo"
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-poppins font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-white/70 text-sm mb-4">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-dark-300 text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;