import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const circularSkills = [
  { name: 'Digital Marketing', percentage: 95 },
  { name: 'SEO', percentage: 90 },
  { name: 'Facebook Ads', percentage: 92 },
  { name: 'Google Ads', percentage: 88 },
];

const tagSkills = [
  'AI Prompt Engineering',
  'SaaS Strategy',
  'Brand Growth',
  'Automation',
  'Analytics',
  'Content Strategy',
  'Conversion Optimization',
  'Email Marketing',
  'Social Media',
  'Copywriting',
  'Data Analysis',
  'Project Management',
];

function CircularProgress({ name, percentage }: { name: string; percentage: number }) {
  const circleRef = useRef<SVGCircleElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: circleRef.current,
      start: 'top 85%',
      onEnter: () => setIsAnimated(true),
      once: true,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
          />
          {/* Progress Circle */}
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isAnimated ? strokeDashoffset : circumference}
            className="transition-all duration-[1.5s] ease-out"
          />
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl sm:text-3xl font-bold text-white">
            {percentage}%
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-white/70 text-center">{name}</p>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-heading',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.skill-tag',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
          stagger: 0.03,
          scrollTrigger: {
            trigger: '.skills-tag-cloud',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="skills-heading text-center mb-16">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-gold-400 mb-4">
            Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Abilities</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Technical proficiency and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Circular Progress */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="font-display text-xl font-semibold text-white mb-8 text-center">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {circularSkills.map((skill, index) => (
                <CircularProgress
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Tag Cloud */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-8 text-center lg:text-left">
              Technical Proficiency
            </h3>
            <div className="skills-tag-cloud flex flex-wrap gap-3">
              {tagSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag px-4 py-2 glass rounded-full text-sm font-medium text-white/80 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300 cursor-default"
                  style={{
                    fontSize: `${13 + (index % 4)}px`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">AI</span>
                </div>
                <div>
                  <p className="text-white font-medium">Google Gemini AI Educator</p>
                  <p className="text-sm text-white/50">Certified AI Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
