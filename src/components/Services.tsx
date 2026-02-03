import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Flame,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description: "End-to-end web applications with modern frameworks, responsive design, and optimized performance.",
    features: ["React/Next.js", "REST APIs", "Responsive Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that deliver native-like experiences on iOS and Android.",
    features: ["React Native", "Push Notifications", "App Store Deployment"],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Scalable server solutions with secure authentication, data management, and third-party integrations.",
    features: ["Node.js/Express", "Laravel/PHP", "GraphQL"],
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Efficient database design and optimization for both SQL and NoSQL solutions.",
    features: ["PostgreSQL", "MongoDB", "Data Modeling"],
  },
  {
    icon: Flame,
    title: "Firebase Integration",
    description: "Complete Firebase solutions including authentication, real-time databases, and cloud functions.",
    features: ["Auth", "Firestore", "Cloud Functions"],
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Training",
    description: "One-on-one coaching and team training to accelerate your development journey.",
    features: ["Code Reviews", "Career Guidance", "Best Practices"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">What I Offer</p>
          <h2 className="heading-lg mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Comprehensive development services tailored to bring your vision to life with quality and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card-hover p-6 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-accent font-medium group/link"
                whileHover={{ x: 5 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-block p-8 max-w-2xl">
            <h3 className="heading-md mb-4">Have a Custom Project in Mind?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your unique idea to life with a tailored solution.
            </p>
            <motion.a
              href="#contact"
              className="btn-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
