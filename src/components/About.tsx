import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Heart, Users, Lightbulb } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "100+", label: "Students Mentored" },
];

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every project is an opportunity to create something meaningful.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building and empowering the next generation of developers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and creative solutions.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">About Me</p>
          <h2 className="heading-lg mb-4">
            Passionate About <span className="gradient-text">Building</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            I'm a full-stack developer who loves turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image/Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-secondary/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="heading-md">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey into software development began with a curiosity about how things work. 
              What started as simple experiments with HTML and CSS evolved into a passion for building 
              complete, production-ready applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I specialize in full-stack development, working with modern technologies like 
              React, Node.js, and Firebase. But beyond code, I'm deeply committed to education and 
              community building—helping others discover the joy of creating with technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's crafting elegant user interfaces, architecting robust backends, or 
              mentoring aspiring developers, I approach every challenge with enthusiasm and a 
              commitment to excellence.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="glass-card-hover p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
