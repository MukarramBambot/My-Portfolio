import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

interface ContactFormProps {
  onHover: (isHovered: boolean) => void;
}

const ContactForm = ({ onHover }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = async (data: typeof formData) => {
    const message = `New Contact Form Submission\n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`;
    const whatsappUrl = `https://wa.me/918925769787?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      // Send to WhatsApp
      await sendToWhatsApp(formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <motion.div 
      className="bg-dark-200 rounded-lg p-6 border border-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {submitStatus === 'success' ? (
        <div className="text-center py-10">
          <motion.div 
            className="inline-block p-4 rounded-full bg-green-500/20 text-green-500 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Send size={32} />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
          <p className="text-white/70">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      ) : submitStatus === 'error' ? (
        <div className="text-center py-10">
          <motion.div 
            className="inline-block p-4 rounded-full bg-red-500/20 text-red-500 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Send size={32} />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Oops! Something went wrong</h3>
          <p className="text-white/70">Please try again or contact directly via WhatsApp.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-300 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 text-white"
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-300 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 text-white"
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-dark-300 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 text-white"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-dark-300 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 text-white resize-none"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;