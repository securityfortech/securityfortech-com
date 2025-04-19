
import React, { useState } from 'react';
import { Mail, MessageSquareText } from 'lucide-react';
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

    // TODO: Implement actual form submission logic
    toast.success('Message sent successfully!', {
      description: 'We will get back to you soon.',
    });

    // Reset form
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact-us" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold mb-4 text-glow text-cyber-light">
            Contact Us
          </h2>
          <p className="text-cyber-light/80 font-exo text-lg">
            Have a project or collaboration in mind? Let's discuss how we can help secure your technology.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
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
    </section>
  );
};

export default ContactUs;
