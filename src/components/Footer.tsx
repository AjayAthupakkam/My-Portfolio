import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg">
              {'<'}
              <span className="text-primary">Dev</span>
              {' />'}
            </span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} All systems nominal.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AjayAthupakkam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-athupakkam-11691a249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ajayofficial08@outlook.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Status */}
          <div className="status-badge">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
