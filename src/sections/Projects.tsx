import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'KarigorAI',
    subtitle: 'AI Career Assistant',
    description: 'An intelligent career guidance platform powered by AI that helps professionals make informed career decisions through personalized recommendations.',
    image: '/project-karigorai.jpg',
    tags: ['AI', 'Career Tech', 'React', 'Node.js'],
    featured: true,
  },
  {
    id: 2,
    title: 'Hishab Nikash',
    subtitle: 'Expense Tracker App',
    description: 'A comprehensive personal finance management application with intuitive tracking, budget planning, and insightful analytics.',
    image: '/project-hishab.jpg',
    tags: ['FinTech', 'Mobile', 'Flutter', 'Firebase'],
    featured: false,
  },
  {
    id: 3,
    title: 'Rubie Corp SaaS',
    subtitle: 'AI Service Platform',
    description: 'Enterprise-grade AI tools and services platform offering automated solutions for businesses of all sizes.',
    image: '/project-rubiecorp.jpg',
    tags: ['SaaS', 'AI', 'Next.js', 'Python'],
    featured: true,
  },
  {
    id: 4,
    title: 'Marketing Dashboard',
    subtitle: 'Analytics & Reporting',
    description: 'Real-time marketing analytics dashboard with comprehensive data visualization, campaign tracking, and automated reporting.',
    image: '/project-dashboard.jpg',
    tags: ['Data', 'Marketing', 'Vue.js', 'D3.js'],
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-heading',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="projects-heading text-center mb-16">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-emerald-400 mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Innovative solutions and successful campaigns I've worked on
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card group relative glass-card rounded-2xl overflow-hidden ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-80' : 'h-64'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 glass rounded-full">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span className="text-xs font-medium text-white">Featured Project</span>
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 glass hover:bg-white/10 text-white rounded-full font-medium transition-colors">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium glass rounded-full text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>

                {/* Subtitle */}
                <p className="text-emerald-400 text-sm font-medium mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="glass px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group">
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
