import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard, { Project } from '../components/ProjectCard';

// Import images
import patricDashboard from '../assets/images/patric_hall_booking_dashboard.png';
import aluDashboard from '../assets/images/aluoptimize_dashboard.png';
import sSafeInterface from '../assets/images/s_safe_security_interface.png';

interface PortfolioProps {
  onHover: (isHovered: boolean) => void;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Polished Profile",
    description: "A resume-building tool to auto-generate polished CVs online. Collaborative project with Cleven Michael Raj.",
    image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg",
    tags: ["React", "TypeScript", "Resume Builder"],
    category: "Web Dev",
    githubUrl: "https://github.com/MukarramBambot/Polished_Profile",
    liveUrl: "https://mukarrambambot.github.io/Polished_Profile/"
  },
  {
    id: 2,
    title: "AI Career Compass",
    description: "AI-powered career path recommendation system based on skills and interests. Team project with Gowtham S, Sai Naveen K, and Sabari Nathan M.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    tags: ["AI", "React", "Career Guidance"],
    category: "AI/ML",
    githubUrl: "https://github.com/MukarramBambot/AI_Career_Compass",
    liveUrl: "https://ai-career-compass-snowy.vercel.app/"
  },
  {
    id: 3,
    title: "Crypto Knights",
    description: "Smart personal finance tracker with excellent UI/UX design. Award-winning project at Loyola College Hackathon.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    tags: ["Finance", "React", "UI/UX"],
    category: "Full Stack",
    githubUrl: "https://github.com/MukarramBambot/CRYPTO_KNIGHTS",
    liveUrl: "https://crypto-knights.vercel.app/"
  },
  {
    id: 4,
    title: "PatriGuide",
    description: "Interactive campus navigation system for Patrician College with voice assistance and QR guidance.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg",
    tags: ["Navigation", "Voice AI", "QR Code"],
    category: "Full Stack",
    githubUrl: "https://github.com/MukarramBambot/PatriGuide",
    liveUrl: "https://patriguide.vercel.app/"
  },
  {
    id: 5,
    title: "Litter Cam",
    description: "AI-powered system that detects and penalizes littering behavior via image recognition. Ongoing project with Shalini S.",
    image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg",
    tags: ["Python", "AI", "Image Recognition"],
    category: "AI/ML",
    githubUrl: "https://github.com/MukarramBambot/Litter_Cam"
  },
  {
    id: 6,
    title: "Vortex Mate",
    description: "Modern UI Chess game developed in Python. Features an intuitive interface and engaging gameplay.",
    image: "https://images.pexels.com/photos/411195/pexels-photo-411195.jpeg",
    tags: ["Python", "Game Dev", "UI Design"],
    category: "Game Dev",
    githubUrl: "https://github.com/MukarramBambot/Vortex_Mate"
  },
  {
    id: 7,
    title: "Solar Commute",
    description: "Smart IoT system for solar-powered public buses. Currently under development.",
    image: "https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg",
    tags: ["IoT", "Solar", "Hardware"],
    category: "IoT",
    githubUrl: "https://github.com/MukarramBambot/Solar-Commute"
  },
  {
    id: 8,
    title: "Patric Hall Booking System",
    description: "Full-stack campus hall booking system that allows HODs to request halls and admins to manage approvals with complete transparency.",
    image: patricDashboard,
    tags: ["React", "Node.js", "Full Stack"],
    category: "Full Stack",
    githubUrl: "https://github.com/MukarramBambot/Patric_Hall_Booking",
    liveUrl: "https://patricspace.netlify.app/"
  },
  {
    id: 9,
    title: "AluOptimize",
    description: "AI-driven industrial platform to predict production output, reduce waste, and improve energy efficiency in aluminum manufacturing.",
    image: aluDashboard,
    tags: ["AI", "React", "Industrial"],
    category: "AI/ML",
    githubUrl: "https://github.com/MukarramBambot/AluOptimize"
  },
  {
    id: 10,
    title: "S-SAFE",
    description: "AI-powered multi-agent system to help students detect fake internships, job scams, and financial fraud using contextual analysis.",
    image: sSafeInterface,
    tags: ["AI", "Security", "FastAPI"],
    category: "AI/ML",
    githubUrl: "https://github.com/MukarramBambot/S-SAFE-Student-Scam-Fraud-Eliminator"
  }
];

const categories = ["All", "Web Dev", "Full Stack", "AI/ML", "IoT", "Game Dev", "Visual Design"];

const Portfolio = ({ onHover }: PortfolioProps) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? allProjects
      : allProjects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <PageTransition>
      <section className="pt-24 pb-16 min-h-screen relative overflow-hidden">
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
              My Projects
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
              Explore my latest projects and creations. From web applications to AI solutions, these projects showcase my skills and passion for development.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${activeFilter === category
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onHover={onHover} />
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Portfolio;