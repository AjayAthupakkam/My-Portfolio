import { useState } from 'react';
import { Mail, MessageSquare, Github, Linkedin, ArrowRight, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactChannels = [
    { icon: Phone, label: 'Phone', value: '+91 7826042995', href: 'tel:+917826042995' },
    { icon: Mail, label: 'Email', value: 'ajayofficial08@outlook.com', href: 'mailto:ajayofficial08@outlook.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ajay-athupakkam', href: 'https://www.linkedin.com/in/ajay-athupakkam-11691a249' },
    { icon: Github, label: 'GitHub', value: 'github.com/AjayAthupakkam', href: 'https://github.com/AjayAthupakkam' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-number">04.</span>
          <h2 className="section-title mt-2 inline-flex items-center gap-3">
            Get In Touch
            <MessageSquare size={32} className="text-primary" />
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Contact Channels */}
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
            </div>
            <div className="p-6">
              <p className="font-mono text-sm text-primary mb-6">
                {'>'}_CONTACT_CHANNELS
              </p>
              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <channel.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-mono text-sm text-foreground">{channel.label}</p>
                      <p className="text-muted-foreground text-xs">{channel.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
