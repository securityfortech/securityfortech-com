
import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github, MessageSquareText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.success('Message sent successfully!', {
      description: 'We will get back to you soon.',
    });

    setEmail('');
    setMessage('');
  };

  return (
    <section id="get-in-touch" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">
            Get in Touch
          </h2>
          <p className="text-cyber-light/80 font-exo text-lg">
            Have a project or collaboration in mind? Let's discuss how we can help secure your technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="text-cyber-light font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:contact@securityfortech.com" 
                    className="text-cyber-light/70 hover:text-cyber-primary transition-colors"
                  >
                    contact@securityfortech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyber-primary/10 rounded-md text-cyber-primary">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="text-cyber-light font-medium mb-1">Location</h4>
                  <p className="text-cyber-light/70">Europe, Middle East and North Africa</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-orbitron font-semibold mb-6 text-cyber-light">Connect With Us</h3>
              <div className="flex gap-6">
                <a 
                  href="https://www.linkedin.com/company/securityfortech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" aria-hidden="true" />
                </a>
                <a 
                  href="https://x.com/agenticsecurity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                  aria-label="X (formerly Twitter)"
                >
                  <Twitter className="w-6 h-6" aria-hidden="true" />
                </a>
                <a 
                  href="https://github.com/securityfortech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-cyber-dark border border-cyber-primary/30 rounded-md text-cyber-light/70 hover:text-cyber-primary hover:border-cyber-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-cyber-light/80 font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-primary" size={20} />
                <Input 
                  type="email" 
                  id="email"
                  placeholder="your@email.com" 
                  className="pl-10 bg-cyber-dark/50 border-cyber-primary/30 focus:ring-cyber-primary text-cyber-light"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-cyber-light/80 font-medium">
                Your Message
              </label>
              <div className="relative">
                <MessageSquareText className="absolute left-3 top-3 text-cyber-primary" size={20} />
                <Textarea 
                  id="message"
                  placeholder="Tell us about your security needs..." 
                  className="pl-10 bg-cyber-dark/50 border-cyber-primary/30 focus:ring-cyber-primary text-cyber-light min-h-[120px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-cyber-primary hover:bg-cyber-primary/90 text-cyber-dark"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
