import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'projects', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-lg border border-border rounded-full px-2 shadow-lg' 
          : 'top-0 left-0 right-0 bg-transparent'
      }`}
      style={isScrolled ? { boxShadow: '0 0 30px hsl(0 0% 0% / 0.5)' } : {}}
    >
      <div className={`${isScrolled ? 'px-4' : 'container mx-auto px-6'}`}>
        <div className={`flex items-center ${isScrolled ? 'justify-center gap-6 h-12' : 'justify-between h-16'}`}>
          {/* Logo */}
          <a href="#home" className="font-mono text-lg font-bold text-foreground">
            {'<'}
            <span className="text-primary">Dev</span>
            {' />'}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Status Badge - only when not scrolled */}
          {!isScrolled && (
            <div className="hidden md:flex items-center">
              <div className="status-badge">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>SYSTEM_ONLINE</span>
              </div>
            </div>
          )}

          {/* Mobile Menu Button - only when not scrolled */}
          {!isScrolled && (
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`nav-link text-left py-2 ${
                    activeSection === link.href.slice(1) ? 'active' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="status-badge w-fit mt-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>SYSTEM_ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
