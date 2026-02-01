import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles, TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const stats = [
  { value: '1+', label: 'Years Experience', icon: Briefcase },
  { value: '50+', label: 'Projects Done', icon: TrendingUp },
  { value: '30+', label: 'Happy Clients', icon: Users },
  { value: '15+', label: 'Certifications', icon: Award },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tag animation
      gsap.fromTo(
        '.hero-tag',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 }
      );

      // Name character animation
      gsap.fromTo(
        '.hero-name-char',
        { opacity: 0, y: 80, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.03,
          delay: 0.7,
        }
      );

      // Subtitle animation
      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 1.2 }
      );

      // CTA buttons
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 1.4 }
      );

      // Stats
      gsap.fromTo(
        '.hero-stat',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.1, delay: 1.6 }
      );

      // Portrait
      gsap.fromTo(
        '.hero-portrait',
        { opacity: 0, x: 100, rotateY: 30 },
        { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
      );

      // Floating badges
      gsap.fromTo(
        '.floating-badge',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.15, delay: 1.8 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const name = "Afrain Kabir Rafid";

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating Orbs */}
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Tag */}
            <div className="hero-tag inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-white/80">Digital Marketing Expert & AI Consultant</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight perspective-1000">
              {name.split('').map((char, index) => (
                <span
                  key={index}
                  className={`hero-name-char inline-block ${
                    char === ' ' ? 'w-4' : ''
                  } ${index >= 7 && index <= 11 ? 'text-emerald-400' : ''} ${
                    index >= 12 ? 'text-gold-400' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-xl sm:text-2xl text-white/70 max-w-xl mx-auto lg:mx-0">
              Transforming Brands Through{' '}
              <span className="text-emerald-400">Data-Driven Marketing</span> &{' '}
              <span className="text-gold-400">AI Innovation</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="hero-cta btn-primary flex items-center gap-2 group"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="hero-cta glass px-8 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                View My Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="hero-stat glass-card p-4 rounded-xl text-center group hover:border-emerald-500/50 transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="hero-portrait relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-gold-500/20 rounded-full blur-3xl" />

              {/* Portrait Container */}
              <div className="relative">
                <div className="image-frame relative w-80 h-96 sm:w-96 sm:h-[28rem] rounded-3xl overflow-hidden">
                  <img
                    src="portrait.jpg""
                    alt="Afrain Kabir Rafid"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
                </div>

                {/* Floating Badges */}
                <div className="floating-badge absolute -top-4 -right-4 glass-strong px-4 py-2 rounded-xl flex items-center gap-2 animate-float">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">Available for work</span>
                </div>

                <div className="floating-badge absolute top-1/4 -left-8 glass-strong px-4 py-2 rounded-xl flex items-center gap-2 animate-float-reverse">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    G
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Google</div>
                    <div className="text-sm font-medium text-white">Gemini Educator</div>
                  </div>
                </div>

                <div className="floating-badge absolute -bottom-4 left-1/4 glass-strong px-4 py-2 rounded-xl flex items-center gap-2 animate-float">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Founder</div>
                    <div className="text-sm font-medium text-white">Rubie Corp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  );
}
