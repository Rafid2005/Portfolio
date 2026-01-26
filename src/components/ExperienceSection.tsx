import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Head of Digital Marketing & Brand Growth Adviser",
    company: "shohozbibaho.com",
    period: "2025 - Present",
    description: "Leading digital marketing strategies and brand growth initiatives for Bangladesh's growing matrimonial platform.",
    current: true,
  },
  {
    title: "Founder & CEO",
    company: "Rubie Corp",
    period: "January 2026 - Present",
    description: "Founded an AI service company focused on SaaS products and intelligent applications for businesses.",
    current: true,
  },
  {
    title: "Dual Intern - Digital Marketing + AI",
    company: "SR Dream IT",
    period: "2025 - Present",
    description: "Gaining hands-on experience in both digital marketing strategies and AI implementation.",
    current: true,
  },
  {
    title: "Google Gemini AI Educator",
    company: "Google",
    period: "2025 - Present",
    description: "Educating businesses and individuals on leveraging Google's Gemini AI for productivity and growth.",
    current: true,
  },
  {
    title: "Freelance Digital Marketer & AI Specialist",
    company: "Fiverr & Local Clients",
    period: "2024 - Present",
    description: "Providing digital marketing and AI automation services to global and local clients.",
    current: false,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Experience</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 glow-effect" />

              {/* Content */}
              <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300"
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">Current</span>
                    )}
                  </div>
                  
                  <h3 className="font-display text-xl font-bold mb-1">{exp.title}</h3>
                  
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4 text-accent" />
                    <span className="text-accent font-medium">{exp.company}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
