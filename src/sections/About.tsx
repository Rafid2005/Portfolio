import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, GraduationCap, Building2, Rocket, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const currentRoles = [
  {
    icon: Building2,
    title: 'Head of Digital Marketing',
    company: 'Shohozbibaho.com',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Rocket,
    title: 'Digital Marketing & AI Intern',
    company: 'SR Dream IT',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'Founder',
    company: 'Rubie Corp',
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-heading',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.about-image',
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-image',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.about-content',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.role-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.roles-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="about-heading text-center mb-16">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-emerald-400 mb-4">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Passionate About{' '}
            <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Leveraging technology and data to drive meaningful business growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Column */}
          <div className="about-image relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-emerald-500/30 rounded-3xl" />
              <div className="absolute -inset-8 border border-gold-500/20 rounded-3xl" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/portrait.jpg"
                  alt="Afrain Kabir Rafid"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-strong px-6 py-3 rounded-full flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-white">Mymensingh, Bangladesh</span>
              </div>
            </div>

            {/* Education Card */}
            <div className="mt-12 glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-display font-semibold text-white">Education</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">SSC (Science)</p>
                    <p className="text-sm text-white/50">Government Laboratory High School</p>
                  </div>
                  <span className="text-emerald-400 text-sm">Mymensingh</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">HSC (Science)</p>
                    <p className="text-sm text-white/50">Royal Media College</p>
                  </div>
                  <span className="text-emerald-400 text-sm">Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content space-y-8">
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm <span className="text-emerald-400 font-semibold">Afrain Kabir Rafid</span>, a Digital Marketing Specialist and AI professional from Mymensingh, Bangladesh with{' '}
                <span className="text-gold-400 font-semibold">1+ year</span> of hands-on experience in the digital landscape.
              </p>

              <p className="text-white/60 leading-relaxed">
                I hold multiple certifications in AI and Digital Marketing from Google, and I'm currently pursuing dual internships at{' '}
                <span className="text-white font-medium">SR Dream IT</span> in Digital Marketing and Artificial Intelligence.
              </p>

              <p className="text-white/60 leading-relaxed">
                As a <span className="text-emerald-400 font-medium">Google Gemini AI Educator</span>, I'm passionate about sharing knowledge and helping others understand the power of AI. I founded{' '}
                <span className="text-gold-400 font-medium">Rubie Corp</span> in January 2026 – an AI service company focused on building innovative SaaS products.
              </p>

              <p className="text-white/60 leading-relaxed">
                Currently, I serve as <span className="text-white font-medium">Head of Digital Marketing & Brand Growth Adviser</span> at{' '}
                <span className="text-pink-400 font-medium">Shohozbibaho.com</span>, Bangladesh's leading wedding platform.
              </p>
            </div>

            {/* Current Roles */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                Current Roles
              </h4>
              <div className="roles-grid grid sm:grid-cols-3 gap-4">
                {currentRoles.map((role, index) => (
                  <div
                    key={index}
                    className="role-card glass-card p-4 rounded-xl group hover:border-emerald-500/40 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <role.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-medium text-white">{role.title}</p>
                    <p className="text-xs text-white/50">{role.company}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Freelance Note */}
            <div className="glass-card p-5 rounded-xl border-l-4 border-emerald-500">
              <p className="text-white/70 text-sm">
                Also available as a <span className="text-emerald-400 font-medium">Freelance Digital Marketer & AI Consultant</span> on Fiverr and other platforms, serving both international and local clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
