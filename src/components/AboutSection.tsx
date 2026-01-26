import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import profileImage from "@/assets/afrain-profile.jpeg";

const highlights = [
  { icon: Briefcase, text: "Head of Digital Marketing at shohozbibaho.com" },
  { icon: Award, text: "Google Gemini AI Educator" },
  { icon: GraduationCap, text: "Multiple AI & Digital Marketing Certifications" },
  { icon: MapPin, text: "Mymensingh, Bangladesh" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Passionate About <span className="gradient-text">Digital Growth</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden gradient-border">
              <img
                src={profileImage}
                alt="Afrain Kabir Rafid"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl"
            >
              <div className="font-display text-4xl font-bold gradient-text">1+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Afrain Kabir Rafid</span>
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Digital Marketing Specialist with over a year of hands-on experience in AI and digital marketing. 
              I hold multiple certifications in AI and Digital Marketing and currently run dual internships at SR Dream IT 
              (Digital Marketing + AI).
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a Google Gemini AI Educator and Founder of Rubie Corp (est. January 2026), I focus on building AI-powered 
              SaaS products and intelligent applications. I currently serve as Head of Digital Marketing and Brand Growth 
              Advisor at shohozbibaho.com while freelancing globally.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-display font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">SSC - Science</div>
                  <div className="text-muted-foreground">Government Laboratory High School, Mymensingh</div>
                </div>
                <div>
                  <div className="font-medium">HSC - Science</div>
                  <div className="text-muted-foreground">Royal Media College, Mymensingh</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
