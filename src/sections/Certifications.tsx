import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ExternalLink, Calendar, CheckCircle2, Star, TrendingUp, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ALL 11 Certifications from the image
const certifications = [
  {
    id: 1,
    title: 'Google Gemini AI Educator',
    issuer: 'Google',
    date: '2025',
    featured: true,
    description: 'Certified educator for Google\'s Gemini AI platform with expertise in AI education and implementation.',
    icon: 'G',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Google Ads Search Certification',
    issuer: 'Google',
    date: 'January 25, 2026',
    description: 'Expert-level certification in Google Ads Search campaigns and optimization.',
    icon: 'S',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Google Ads Measurement Certification',
    issuer: 'Google',
    date: 'January 25, 2026',
    description: 'Advanced analytics and measurement strategies for Google Ads campaigns.',
    icon: 'M',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Google Ads Apps Certification',
    issuer: 'Google',
    date: 'January 25, 2026',
    description: 'Specialized certification for mobile app advertising campaigns.',
    icon: 'A',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'AI-Powered Shopping Ads Certification',
    issuer: 'Google',
    date: 'January 18, 2026',
    description: 'AI-driven shopping campaign optimization and product listing ads.',
    icon: 'SH',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 6,
    title: 'AI-Powered Performance Ads Certification',
    issuer: 'Google',
    date: 'January 18, 2026',
    description: 'Leveraging AI for maximum performance in digital advertising.',
    icon: 'P',
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 7,
    title: 'Google Ads Video Certification',
    issuer: 'Google',
    date: 'December 16, 2025',
    description: 'YouTube and video advertising campaign management expertise.',
    icon: 'V',
    color: 'from-red-600 to-red-500',
  },
  {
    id: 8,
    title: 'Google Ads Display Certification',
    issuer: 'Google',
    date: 'December 16, 2025',
    description: 'Display network advertising and visual campaign optimization.',
    icon: 'D',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 9,
    title: 'Grow Offline Sales Certification',
    issuer: 'Google',
    date: 'December 16, 2025',
    description: 'Driving foot traffic and offline conversions through digital marketing.',
    icon: 'O',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 10,
    title: 'Google Ads Creative Certification',
    issuer: 'Google',
    date: 'December 16, 2025',
    description: 'Creative excellence in ad design and copywriting for maximum impact.',
    icon: 'C',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 11,
    title: 'Gemini Certified University Student',
    issuer: 'Google for Education',
    date: 'October 23, 2025',
    description: 'Early adopter certification in Google Gemini AI technologies.',
    icon: 'U',
    color: 'from-blue-600 to-indigo-600',
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cert-heading',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.cert-featured',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cert-featured',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.cert-card',
        { opacity: 0, rotateY: 45 },
        {
          opacity: 1,
          rotateY: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.certs-grid',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.stats-row',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stats-row',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredCert = certifications.find((c) => c.featured);
  const otherCerts = certifications.filter((c) => !c.featured);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="cert-heading text-center mb-16">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-blue-400 mb-4">
            Achievements
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Professional certifications from Google and industry leaders
          </p>
        </div>

        {/* Stats Row */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-5 rounded-xl text-center">
            <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="font-display text-3xl font-bold text-white">11</div>
            <div className="text-sm text-white/50">Certifications</div>
          </div>
          <div className="glass-card p-5 rounded-xl text-center">
            <Award className="w-6 h-6 text-gold-400 mx-auto mb-2" />
            <div className="font-display text-3xl font-bold text-white">10</div>
            <div className="text-sm text-white/50">Google Certifications</div>
          </div>
          <div className="glass-card p-5 rounded-xl text-center">
            <Sparkles className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="font-display text-3xl font-bold text-white">2</div>
            <div className="text-sm text-white/50">AI Certifications</div>
          </div>
          <div className="glass-card p-5 rounded-xl text-center">
            <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="font-display text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-white/50">Verified</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Certification */}
          {featuredCert && (
            <div className="cert-featured lg:row-span-2">
              <div className="h-full relative overflow-hidden rounded-3xl">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
                
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }} />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full">
                      <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                      <span className="text-sm font-medium text-white">Featured</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold text-white">{featuredCert.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {featuredCert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 mb-6 flex-grow">{featuredCert.description}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-white">G</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{featuredCert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{featuredCert.date}</span>
                    </div>
                  </div>

                  {/* Verified */}
                  <div className="mt-4 flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Verified Credential</span>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl" />
              </div>
            </div>
          )}

          {/* Other Certifications */}
          <div className="lg:col-span-2 certs-grid grid sm:grid-cols-2 gap-4">
            {otherCerts.map((cert) => (
              <div
                key={cert.id}
                className="cert-card group glass-card p-5 rounded-xl cursor-pointer hover:border-emerald-500/40 transition-all duration-300"
                style={{ perspective: '1000px' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="text-lg font-bold text-white">{cert.icon}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h4 className="font-display font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {cert.title}
                </h4>

                <p className="text-xs text-white/40 mb-3 line-clamp-2">{cert.description}</p>

                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Credentials CTA */}
        <div className="text-center mt-12">
          <a
            href="https://skillshop.credential.net/profile/mdafraingulamkabirrafid287916/wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 transition-all duration-300 group"
          >
            <Award className="w-5 h-5 text-gold-400" />
            View All Credentials on Google Skillshop
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
