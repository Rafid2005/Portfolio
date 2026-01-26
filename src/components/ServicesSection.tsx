import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Megaphone, 
  Target, 
  Search, 
  Share2, 
  Palette, 
  GitBranch, 
  Bot, 
  Code, 
  Smartphone, 
  TrendingUp 
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Full-stack digital marketing strategies to amplify your brand presence and drive measurable results.",
  },
  {
    icon: Target,
    title: "Facebook & Google Ads",
    description: "Data-driven paid advertising campaigns that maximize ROI and reach your target audience effectively.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Technical and content SEO to improve your search rankings and organic visibility.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media presence management to build engagement and community growth.",
  },
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Comprehensive brand identity development and positioning to stand out in your market.",
  },
  {
    icon: GitBranch,
    title: "Funnel Building",
    description: "High-converting sales funnels designed to nurture leads and maximize conversions.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation solutions to streamline operations and boost productivity.",
  },
  {
    icon: Code,
    title: "SaaS Development",
    description: "Custom AI-powered SaaS products tailored to solve your unique business challenges.",
  },
  {
    icon: Smartphone,
    title: "AI App Development",
    description: "Cutting-edge mobile and web applications powered by artificial intelligence.",
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    description: "Strategic business growth consulting to scale your operations and revenue.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Comprehensive digital solutions to help your business thrive in the modern landscape.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 rounded-2xl hover-glow transition-all duration-300"
            >
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
