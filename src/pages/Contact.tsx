import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';

interface ContactProps {
  onHover: (isHovered: boolean) => void;
}

const Contact = ({ onHover }: ContactProps) => {
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-accent-purple" />,
      title: "Email",
      details: "mukbambot@gmail.com"
    },
    {
      icon: <Github size={24} className="text-accent-cyan" />,
      title: "GitHub",
      details: "github.com/Mukarrambambot"
    },
    {
      icon: <Linkedin size={24} className="text-accent-orange" />,
      title: "LinkedIn",
      details: "Mukarram Bambot"
    }
  ];

  return (
    <PageTransition>
      <section className="pt-24 pb-16 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px]"></div>
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
              Get In Touch
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
              Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="bg-dark-200 p-6 rounded-lg border border-white/5 hover:border-accent-cyan/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                        <p className="text-white/70">{info.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm onHover={onHover} />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;