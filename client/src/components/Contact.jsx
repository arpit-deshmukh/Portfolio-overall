import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://portfolio-overall.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error: ' + data.message);
      }
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <section id="contact" className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-label">Let's connect</p>
        <h2 className="section-heading mb-4">Get In Touch</h2>
        <p className="text-gray-500 text-base mb-12 max-w-xl">
          I'm always open to new opportunities, collaborations, or just a good conversation about tech. Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <div className="card p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Email</p>
                <a href="mailto:arpit.deshmukh@email.com" className="text-white text-sm hover:text-blue-400 transition-colors">
                  arpit.deshmukh@email.com
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Location</p>
                <p className="text-white text-sm">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="card p-6 flex gap-4">
              <a href="https://github.com/arpit-deshmukh" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2 border border-zinc-800 rounded-xl text-gray-400 hover:text-white hover:border-blue-500/40 transition-all text-sm font-medium">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/arpit-deshmukh-08877227a/" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2 border border-zinc-800 rounded-xl text-gray-400 hover:text-white hover:border-blue-500/40 transition-all text-sm font-medium">
                LinkedIn
              </a>
            </div>
          </div>

          <form className="card p-8 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-2 block">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-base" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-2 block">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-base" placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-2 block">Message</label>
              <textarea rows={4} name="message" value={formData.message} onChange={handleChange} required className="input-base resize-none" placeholder="What's on your mind?" />
            </div>
            <button type="submit" className="btn-primary justify-center mt-2">
              {status === 'Sending...' ? 'Sending...' : <>Send Message <Send size={16} /></>}
            </button>
            {status && status !== 'Sending...' && <p className="text-sm mt-2 text-center text-gray-400">{status}</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
