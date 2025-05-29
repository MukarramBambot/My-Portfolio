import { motion } from 'framer-motion';
import { Github, ExternalLink, Trophy, Medal, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface AchievementsProps {
  onHover: (isHovered: boolean) => void;
}

const Achievements = ({ onHover }: AchievementsProps) => {
  const achievements = [
    {
      title: "Mind Over Machine - Loyola College",
      position: "First Place",
      icon: <Trophy className="text-accent-cyan" size={24} />,
      project: "Crypto Knights",
      description: "Best UI/UX Design Award for innovative personal finance tracker",
      team: ["Mukarram T Bambot", "Cleven Michael Raj", "Harish"],
      links: {
        github: "https://github.com/MukarramBambot/CRYPTO_KNIGHTS",
        live: "https://crypto-knights.vercel.app/"
      },
      date: "2024"
    },
    {
      title: "SciSynergy'24 - Stella Maris College",
      subtitle: "Cyber Quiz Competition",
      position: "Third Place",
      icon: <Award className="text-accent-orange\" size={24} />,
      description: "Demonstrated extensive knowledge in cybersecurity concepts and current technological trends",
      date: "2024",
      team: ["Mukarram T Bambot", "Hussain Abbas bhai Dhinojwala"]
    },
    {
      title: "Regaaliya'24 - Ethiraj College",
      subtitle: "Tech Buzzword Competition",
      position: "Third Place",
      icon: <Award className="text-accent-orange" size={24} />,
      description: "Showcased comprehensive technical vocabulary and quick thinking skills in competitive rounds",
      date: "2024",
      team: ["Mukarram T Bambot", "Hussain Abbas bhai Dhinojwala"]
    }
  ];

  return (
    <PageTransition>
      <section className="pt-24 pb-16 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/3 left-[-10%] w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Achievements
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-accent-cyan mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-accent-cyan/30">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative before:content-[''] before:absolute before:left-[-2.1rem] before:top-0 before:w-4 before:h-4 before:bg-dark before:border-2 before:border-accent-cyan before:rounded-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-dark-200 rounded-lg p-6 border border-white/5 hover:border-accent-cyan/30 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-dark-300 rounded-full">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                        {achievement.subtitle && (
                          <p className="text-white/80 text-sm mb-1">{achievement.subtitle}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <span className="text-accent-cyan font-medium">{achievement.position}</span>
                          <span className="text-white/50">•</span>
                          <span className="text-white/70">{achievement.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/70 mb-4">{achievement.description}</p>

                    {achievement.project && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Project: {achievement.project}</h4>
                        <div className="flex gap-3">
                          <a
                            href={achievement.links?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-white/70 hover:text-accent-cyan transition-colors duration-300"
                            onMouseEnter={() => onHover(true)}
                            onMouseLeave={() => onHover(false)}
                          >
                            <Github size={16} />
                            GitHub
                          </a>
                          <a
                            href={achievement.links?.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-white/70 hover:text-accent-cyan transition-colors duration-300"
                            onMouseEnter={() => onHover(true)}
                            onMouseLeave={() => onHover(false)}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    )}

                    {achievement.team && (
                      <div className="flex flex-wrap gap-2">
                        <span className="text-white/50 text-sm">Team:</span>
                        {achievement.team.map((member, idx) => (
                          <span
                            key={idx}
                            className="text-sm px-2 py-1 rounded-full bg-dark-300 text-white/80"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Achievements;