import { Code2, Database, Globe, Server, Cloud, Terminal as TerminalIcon, Wrench, Brain, BarChart3 } from 'lucide-react';

const techStack = {
  technical: [
    { name: 'JavaScript', icon: Code2 },
    { name: 'TypeScript', icon: Code2 },
    { name: 'React', icon: Globe },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: TerminalIcon },
    { name: 'Java', icon: Code2 },
    { name: 'C++', icon: Code2 },
    { name: 'C', icon: Code2 },
    { name: 'HTML5', icon: Code2 },
    { name: 'CSS3', icon: Code2 },
    { name: 'PyTorch', icon: Brain },
    { name: 'REST APIs', icon: Server },
  ],
  tools: [
    { name: 'Git', icon: Wrench },
    { name: 'GitHub', icon: Wrench },
    { name: 'Docker', icon: Cloud },
    { name: 'AWS', icon: Cloud },
    { name: 'MongoDB', icon: Database },
    { name: 'MS SQL', icon: Database },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Tableau', icon: BarChart3 },
    { name: 'VS Code', icon: TerminalIcon },
    { name: 'Linux', icon: TerminalIcon },
  ],
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <div>
            <span className="section-number">03.</span>
            <h2 className="section-title mt-2 flex items-center gap-3">
              <TerminalIcon size={32} className="text-primary" />
              About Me
            </h2>

            <div className="terminal-card mt-8">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-4 font-mono text-xs text-muted-foreground">README.md</span>
              </div>
              <div className="p-6 space-y-4">
                <p className="font-mono text-primary text-sm">
                  # Hello World! 👋
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Full Stack Developer & Data Scientist with expertise in building scalable web applications 
                  and leveraging modern AI to solve real-world problems.
                </p>
                <div className="space-y-2">
                  <p className="font-mono text-sm text-muted-foreground">
                    <span className="text-primary">//</span> Current focus
                  </p>
                  <ul className="space-y-1 text-muted-foreground text-sm pl-4">
                    <li>• Modern AI, LLMs & Deep Learning</li>
                    <li>• Machine Learning & Data Science</li>
                    <li>• Full-stack development with React & Node.js</li>
                    <li>• AI Product Development</li>
                  </ul>
                </div>
                <div className="space-y-2 pt-2">
                  <p className="font-mono text-sm text-muted-foreground">
                    <span className="text-primary">//</span> Goal
                  </p>
                  <p className="text-muted-foreground text-sm">
                    To build intelligent, performant, and user-friendly digital solutions powered by AI & modern technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Tech Stack */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-4">TECHNICAL</h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.technical.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                    >
                      <tech.icon size={20} className="text-muted-foreground" />
                      <span className="font-mono text-xs text-center text-muted-foreground">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-4">TOOLS</h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                    >
                      <tool.icon size={20} className="text-muted-foreground" />
                      <span className="font-mono text-xs text-center text-muted-foreground">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
