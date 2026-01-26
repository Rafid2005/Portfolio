import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  Megaphone, 
  Search, 
  Palette, 
  Bot, 
  Code, 
  Smartphone, 
  TrendingUp,
  BarChart3
} from "lucide-react";

const skills = [
  { name: "Digital Marketing", level: 95, icon: Megaphone },
  { name: "Facebook Ads", level: 90, icon: Target },
  { name: "Google Ads", level: 85, icon: BarChart3 },
  { name: "SEO", level: 88, icon: Search },
  { name: "Branding", level: 85, icon: Palette },
  { name: "AI Automation", level: 92, icon: Bot },
  { name: "SaaS Development", level: 80, icon: Code },
  { name: "App Development", level: 78, icon: Smartphone },
  { name: "Growth Strategy", level: 90, icon: TrendingUp },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">My Skills</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            What I <span className="gradient-text">Excel At</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A comprehensive toolkit for driving digital growth and building intelligent solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold">{skill.name}</h3>
                </div>
                <span className="font-display font-bold text-primary">{skill.level}%</span>
              </div>
              
              <div className="skill-bar">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="skill-bar-fill"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
