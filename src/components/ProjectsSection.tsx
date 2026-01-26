import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight, Bot, Target, ShoppingCart, Cpu } from "lucide-react";

const projects = [
  {
    title: "AI SaaS Platform",
    category: "SaaS Development",
    description: "Built a comprehensive AI-powered SaaS platform for business automation and analytics.",
    results: ["40% efficiency increase", "500+ active users", "98% uptime"],
    color: "from-primary to-accent",
    icon: Bot,
  },
  {
    title: "Lead Generation Funnel",
    category: "Digital Marketing",
    description: "Designed and implemented high-converting lead generation funnels for a real estate client.",
    results: ["3x lead conversion", "50% lower CPA", "2000+ leads/month"],
    color: "from-accent to-primary",
    icon: Target,
  },
  {
    title: "E-commerce Growth Campaign",
    category: "Facebook Ads",
    description: "Scaled an e-commerce brand through strategic Facebook advertising and retargeting.",
    results: ["400% ROAS", "৳50L+ revenue", "10x brand awareness"],
    color: "from-primary via-accent to-primary",
    icon: ShoppingCart,
  },
  {
    title: "Automation Dashboard",
    category: "AI Automation",
    description: "Created an intelligent automation dashboard for streamlining business operations.",
    results: ["80% time saved", "Real-time analytics", "Custom AI models"],
    color: "from-accent via-primary to-accent",
    icon: Cpu,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of successful projects and measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative glass-card rounded-3xl overflow-hidden hover-glow transition-all duration-500"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between`}>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full w-fit text-white">
                    {project.category}
                  </span>
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.results.map((result) => (
                    <span
                      key={result}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card gradient-border hover-glow transition-all duration-300"
          >
            <span>Want to work together?</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
