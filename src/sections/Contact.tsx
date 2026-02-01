import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'afrainkabirrafid@gmail.com',
    href: 'mailto:afrainkabirrafid@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+880 1327-068809',
    href: 'https://wa.me/8801327068809 ',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mymensingh, Bangladesh',
    href: '#',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-heading',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.contact-info-card',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.contact-form',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-24 animate-wave opacity-10"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#waveGradient)"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="contact-heading text-center mb-16">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-emerald-400 mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="contact-info lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="contact-info-card group flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/50 mb-1">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}

            {/* Availability Card */}
            <div className="contact-info-card glass-card p-6 rounded-2xl border-l-4 border-emerald-500">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-white font-medium">Available for new projects</p>
                  <p className="text-sm text-white/50">Typical response time: 24 hours</p>
                </div>
              </div>
            </div>

            {/* Quick Chat */}
            <a
              href="https://wa.me/8801327068809 "
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card flex items-center gap-4 p-5 glass-card rounded-2xl hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Chat on WhatsApp</p>
                <p className="text-sm text-white/50">Quick response guaranteed</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form lg:col-span-3">
            <form
              action="https://formspree.io/f/mojlvpab"
              method="POST"
              className="glass-strong p-8 rounded-3xl"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="glass-input w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="glass-input w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="glass-input w-full resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
