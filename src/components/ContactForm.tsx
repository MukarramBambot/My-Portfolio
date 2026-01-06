import { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:mukbambot@gmail.com?subject=${encodeURIComponent(formData.subject || 'New Contact from Portfolio')}&body=${mailtoBody}`;

    window.location.href = mailtoLink;

    // Reset form after opening email client
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 500);
  };

  const sendViaWhatsApp = () => {
    const message = `*New Contact from Portfolio*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/918925769787?text=${message}`;

    window.open(whatsappUrl, '_blank');

    // Reset form after opening WhatsApp
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <motion.div
      className="bg-dark-200 rounded-lg p-6 border border-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <form onSubmit={sendViaEmail}>
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

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={!isFormValid}
            className="btn-primary flex items-center justify-center gap-2 flex-1"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <Mail size={18} />
            <span>Send via Email</span>
          </button>

          <button
            type="button"
            onClick={sendViaWhatsApp}
            disabled={!isFormValid}
            className="btn-secondary flex items-center justify-center gap-2 flex-1"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <MessageCircle size={18} />
            <span>Send via WhatsApp</span>
          </button>
        </div>

        <p className="text-white/50 text-xs mt-3 text-center">
          <Mail size={12} className="inline mr-1" />
          Email will open your default email app. Please click Send to complete.
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;