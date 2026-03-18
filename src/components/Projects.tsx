import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.',
    image: '/placeholder.svg',
    tags: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team chat, and automated workflows.',
    image: '/placeholder.svg',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'PRISMA'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot powered by machine learning for customer support automation.',
    image: '/placeholder.svg',
    tags: ['PYTHON', 'FASTAPI', 'OPENAI'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Portfolio Template',
    description: 'Modern developer portfolio template with terminal-inspired design and smooth animations.',
    image: '/placeholder.svg',
    tags: ['REACT', 'TAILWIND', 'FRAMER'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const cardClasses = project.featured ? 'md:col-span-2 md:row-span-2' : '';
  return (
    <div className={`project-card group ${cardClasses}`}>
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="ml-auto font-mono text-xs text-muted-foreground">
          {project.title.toLowerCase().replace(/\s+/g, '-')}.dev
        </span>
      </div>
      
      <div className="relative overflow-hidden">
        <div className={`bg-gradient-to-br from-secondary to-muted ${project.featured ? 'aspect-video' : 'aspect-[4/3]'}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-mono text-lg md:text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              <ExternalLink size={14} />
              View Site
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="section-number">02.</span>
          <h2 className="section-title mt-2">Selected Work</h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            A collection of projects exploring web development, AI, and system architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
          >
            <Github size={18} />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
