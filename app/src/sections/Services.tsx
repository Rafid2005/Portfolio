import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp,
  Target,
  Search,
  Bot,
  Rocket,
  Palette,
  FileText,
  Users,
  ArrowUpRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing Strategy',
    description: 'Data-driven strategies that align with your business goals and maximize ROI through comprehensive market analysis.',
    color: 'from-emerald-500 to-teal-500',
    glow: 'emerald',
  },
  {
    icon: Target,
    title: 'Facebook & Google Ads',
    description: 'Expert campaign management for optimal reach, engagement, and conversion rates across all major platforms.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'blue',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic growth with technical and content SEO expertise.',
    color: 'from-purple-500 to-pink-500',
    glow: 'purple',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Streamline operations with intelligent automation solutions powered by cutting-edge AI technologies.',
    color: 'from-amber-500 to-orange-500',
    glow: 'amber',
  },
  {
    icon: Rocket,
    title: 'SaaS Growth Consulting',
    description: 'Scale your SaaS product with proven growth strategies, user acquisition, and retention tactics.',
    color: 'from-rose-500 to-red-500',
    glow: 'rose',
  },
  {
    icon: Palette,
    title: 'Branding & Funnel Building',
    description: 'Create compelling brand experiences that convert visitors into loyal customers through strategic funnels.',
    color: 'from-indigo-500 to-violet-500',
    glow: 'indigo',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Engage your audience with valuable, relevant content that builds authority and drives conversions.',
    color: 'from-green-500 to-emerald-500',
    glow: 'green',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Build pipelines of qualified leads for your business using multi-channel acquisition strategies.',
    color: 'from-cyan-500 to-sky-500',
    glow: 'cyan',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-heading',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="services-heading text-center mb-16">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-gold-400 mb-4">
            What I Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Services That{' '}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative glass-card p-6 rounded-2xl cursor-pointer overflow-hidden ${
                index % 2 === 1 ? 'lg:mt-8' : ''
              }`}
              style={{ perspective: '1000px' }}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color} blur-2xl`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
