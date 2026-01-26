import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Google Gemini AI Certification",
    issuer: "Google",
    year: "2025",
  },
  {
    title: "Digital Marketing Professional",
    issuer: "Google Digital Garage",
    year: "2024",
  },
  {
    title: "Facebook Blueprint Certification",
    issuer: "Meta",
    year: "2024",
  },
  {
    title: "SEO Fundamentals",
    issuer: "SEMrush Academy",
    year: "2024",
  },
  {
    title: "AI for Business",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "Growth Marketing Certification",
    issuer: "HubSpot Academy",
    year: "2024",
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Credentials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-xs text-accent">
                    <CheckCircle className="w-3 h-3" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
