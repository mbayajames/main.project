import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95, description: "Building scalable UI components" },
      { name: "TypeScript", level: 90, description: "Type-safe development" },
      { name: "Next.js", level: 85, description: "SSR & static site generation" },
      { name: "Tailwind CSS", level: 95, description: "Rapid UI development" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, description: "REST APIs & authentication" },
      { name: "Laravel", level: 85, description: "PHP enterprise applications" },
      { name: "Express.js", level: 88, description: "API development" },
      { name: "Python", level: 75, description: "Scripts & automation" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "Firebase", level: 92, description: "Auth & real-time data" },
      { name: "MongoDB", level: 85, description: "NoSQL databases" },
      { name: "PostgreSQL", level: 82, description: "Relational databases" },
      { name: "AWS", level: 78, description: "Cloud infrastructure" },
    ],
  },
  {
    title: "Tools & Mobile",
    skills: [
      { name: "React Native", level: 80, description: "Cross-platform mobile" },
      { name: "Git & GitHub", level: 95, description: "Version control" },
      { name: "Docker", level: 75, description: "Containerization" },
      { name: "Figma", level: 70, description: "UI/UX design" },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">Technical Skills</p>
          <h2 className="heading-lg mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications from concept to deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {skill.description}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(187 100% 50%) 0%, hsl(200 100% 60%) 100%)",
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
