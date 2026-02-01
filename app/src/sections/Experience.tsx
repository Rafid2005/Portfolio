import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Building2, Rocket, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: 'Head of Digital Marketing',
    company: 'Shohozbibaho.com',
    period: '2025 – Present',
    description: 'Leading digital marketing strategies and brand growth initiatives for Bangladesh\'s leading wedding platform. Managing multi-channel campaigns, SEO, and performance marketing.',
    icon: Building2,
    type: 'work',
    featured: true,
  },
  {
    id: 2,
    role: 'Digital Marketing & AI Intern',
    company: 'SR Dream IT',
    period: '2025 – Present',
    description: 'Gaining hands-on experience in digital marketing campaigns, AI implementation, and data-driven decision making processes.',
    icon: GraduationCap,
    type: 'internship',
    featured: false,
  },
  {
    id: 3,
    role: 'Founder',
    company: 'Rubie Corp',
    period: 'January 2026',
    description: 'Founded an AI service company focused on building SaaS products and smart applications using cutting-edge AI technologies.',
    icon: Rocket,
    type: 'founder',
    featured: true,
  },
  {
    id: 4,
    role: 'Freelance Digital Marketing & AI Consultant',
    company: 'Self-Employed',
    period: 'Ongoing',
    description: 'Serving international and local clients on Fiverr and other platforms, delivering results-driven marketing and AI solutions.',
    icon: Briefcase,
    type: 'freelance',
    featured: false,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.experience-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.experience-heading',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.timeline-dot',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="experience-heading text-center mb-20">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-emerald-400 mb-4">
            My Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Professional milestones and career growth
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative">
          {/* Center Line - Desktop */}
          <div className="hidden md:block timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-gold-500 to-emerald-500 transform -translate-x-1/2 origin-top" />

          {/* Mobile Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-gold-500 to-emerald-500" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 to-gold-400 transform -translate-x-1/2 z-10 shadow-glow-emerald">
                  {exp.featured && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-gold-400 animate-ping opacity-50" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className={`glass-card p-6 rounded-2xl group hover:border-emerald-500/40 transition-all duration-300 ${
                    exp.featured ? 'border-emerald-500/30' : ''
                  }`}>
                    {/* Featured Badge */}
                    {exp.featured && (
                      <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                        <span className="text-xs font-medium text-gold-400">Featured</span>
                      </div>
                    )}

                    {/* Header */}
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                        <exp.icon className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-gold-400">{exp.period}</span>
                    </div>

                    {/* Role */}
                    <h3 className="font-display text-xl font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p className="text-emerald-400 font-medium mb-3">{exp.company}</p>

                    {/* Description */}
                    <p className="text-sm text-white/50 leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
