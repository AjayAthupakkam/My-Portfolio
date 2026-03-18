import { Github, Linkedin, Mail, Code2, FileText, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import ajayPhoto from '@/assets/ajayPhoto.png';

const roles = ['Data Science', 'Full Stack Developer', 'Data Analyst', 'Programmer'];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="status-badge w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Available for work</span>
            </div>

            <h1 className="font-mono text-5xl md:text-7xl font-bold leading-tight">
              AJAY
              <br />
              <span className="text-primary">ATHUPAKKAM</span>
            </h1>

            <div className="font-mono text-xl md:text-2xl text-muted-foreground">
              <span className="text-primary">{'>'}</span> {displayText}
              <span className="cursor-blink" />
            </div>

            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Passionate developer crafting elegant solutions for complex problems.
              Transforming ideas into scalable, user-friendly applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={scrollToProjects} className="btn-outline">
                <Code2 size={18} />
                View Work
              </button>
              <a href="#contact" className="btn-primary">
                <Mail size={18} />
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/AjayAthupakkam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-athupakkam-11691a249"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:ajayofficial08@outlook.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={22} />
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/bharatho8eq?tab=activity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="GeeksForGeeks"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.677h3.679a.499.499 0 0 0 .5-.5c0-.274-.227-.5-.5-.5h-3.679c.018-.225.066-.447.16-.677a3.79 3.79 0 0 1 2.135-2.078 4.51 4.51 0 0 1 3.116-.016c.412.17.789.406 1.104.695.231.213.422.465.565.745a.5.5 0 0 0 .848-.53 4.227 4.227 0 0 0-.728-.96 4.703 4.703 0 0 0-1.41-.888 5.48 5.48 0 0 0-3.821.023 4.803 4.803 0 0 0-2.7 2.632 4.66 4.66 0 0 0-.264 1.054H12.5a.5.5 0 0 0 0 1h1.264c.06.362.147.71.264 1.054a4.803 4.803 0 0 0 2.7 2.632 5.48 5.48 0 0 0 3.821.023 4.703 4.703 0 0 0 1.41-.888c.282-.27.527-.593.728-.96a.5.5 0 1 0-.848-.53zM2.552 14.315c.143.28.334.532.565.745.315.289.692.525 1.104.695a4.51 4.51 0 0 0 3.116.016 3.79 3.79 0 0 0 2.135-2.078c.117-.344.204-.692.264-1.054H11.5a.5.5 0 0 0 0-1H9.736a4.66 4.66 0 0 0-.264-1.054 4.803 4.803 0 0 0-2.7-2.632 5.48 5.48 0 0 0-3.821-.023 4.703 4.703 0 0 0-1.41.888 4.227 4.227 0 0 0-.728.96.5.5 0 0 0 .848.53c.143-.28.334-.532.565-.745.315-.289.692-.525 1.104-.695a4.51 4.51 0 0 1 3.116.016 3.79 3.79 0 0 1 2.135 2.078c.094.23.142.452.16.677H5.062a.499.499 0 0 0-.5.5c0 .274.227.5.5.5h3.679a3.571 3.571 0 0 1-.16.677 3.79 3.79 0 0 1-2.135 2.078 4.51 4.51 0 0 1-3.116.016 3.691 3.691 0 0 1-1.104-.695 2.636 2.636 0 0 1-.565-.745.5.5 0 1 0-.848.53c.201.367.446.69.728.96.418.383.898.688 1.41.888a5.48 5.48 0 0 0 3.821-.023 4.803 4.803 0 0 0 2.7-2.632z"/>
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/AJAY0811/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="LeetCode"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 .406.978l4.084 3.895a1.38 1.38 0 0 0 1.946-.025 1.384 1.384 0 0 0-.025-1.952l-4.083-3.895a1.376 1.376 0 0 0-.948-.383z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Photo Card */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="terminal-card max-w-xs w-full">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
                  <img src={ajayPhoto} alt="Ajay Athupakkam" className="w-[200%] h-[200%] object-cover object-top scale-50" />
                </div>
              </div>
              {/* Bottom Actions */}
              <div className="flex items-center justify-center gap-6 p-4 border-t border-border">
                <a href="/AJAY-SD-RESUME.pdf" download className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <FileText size={16} />
                  <span className="font-mono text-sm">RESUME</span>
                </a>
                <a href="#contact" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Mail size={16} />
                  <span className="font-mono text-sm">CONTACT</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
