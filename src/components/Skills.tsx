import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  description: string;
  context: string[];
}

interface SkillCategory {
  title: string;
  subtitle: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces, dashboards, and high-performance web apps",
    skills: [
      {
        name: "React.js",
        description: "Building scalable UI components and dashboards",
        context: ["Production", "SaaS", "Team projects"],
      },
      {
        name: "TypeScript",
        description: "Type-safe development with complex interfaces",
        context: ["Production", "6+ projects"],
      },
      {
        name: "Next.js",
        description: "SSR, routing, API routes, and SEO-focused apps",
        context: ["Production", "3+ projects"],
      },
      {
        name: "Tailwind CSS",
        description: "Rapid UI development & consistent design systems",
        context: ["Production", "Daily use"],
      },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "APIs, authentication, server logic & services",
    skills: [
      {
        name: "Node.js",
        description: "REST & GraphQL APIs, auth, background jobs",
        context: ["Production", "SaaS"],
      },
      {
        name: "Express.js",
        description: "Middleware, routing, clean API architecture",
        context: ["Production", "5+ projects"],
      },
      {
        name: "Laravel",
        description: "PHP enterprise apps, APIs & complex business logic",
        context: ["Production", "Client projects"],
      },
      {
        name: "Python",
        description: "Automation scripts, data processing, tooling",
        context: ["Personal projects", "Learning"],
      },
    ],
  },
  {
    title: "Database & Cloud",
    subtitle: "Data modeling, persistence and infrastructure",
    skills: [
      {
        name: "Firebase",
        description: "Authentication, Firestore, real-time features",
        context: ["Production", "SaaS"],
      },
      {
        name: "MongoDB",
        description: "NoSQL schema design, aggregation pipelines",
        context: ["Production", "4+ projects"],
      },
      {
        name: "PostgreSQL",
        description: "Relational modeling, complex queries, optimization",
        context: ["Production", "Team projects"],
      },
      {
        name: "AWS",
        description: "Deployments, S3, EC2, basic scaling & CDN",
        context: ["Learning", "2+ projects"],
      },
    ],
  },
  {
    title: "Tools & Mobile",
    subtitle: "Development workflow, mobile & collaboration",
    skills: [
      {
        name: "React Native",
        description: "Cross-platform mobile apps with native performance",
        context: ["Production", "2+ apps"],
      },
      {
        name: "Git & GitHub",
        description: "Branching strategies, PRs, code reviews",
        context: ["Daily use", "Team collaboration"],
      },
      {
        name: "Docker",
        description: "Containerization, local dev environments",
        context: ["Personal projects", "Learning"],
      },
      {
        name: "Figma",
        description: "UI/UX exploration & developer handoff",
        context: ["Collaboration", "Design reviews"],
      },
    ],
  },
];

export const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">Technical Skills</p>
          <h2 className="heading-lg mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, production-ready applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-card p-8"
            >
              <div className="mb-7">
                <h3 className="font-display font-semibold text-xl mb-2 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.subtitle}</p>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="mb-1.5">
                      <span className="font-medium text-lg">{skill.name}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skill.context.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How I Use These Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="glass-card p-8 md:p-10 max-w-4xl mx-auto">
            <h3 className="font-display font-semibold text-xl mb-5">
              How I Use These Skills
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I focus on building production-grade applications with clean architecture, 
              strong typing, performance in mind, and maintainable code. I enjoy taking 
              projects from concept → design → implementation → deployment, while 
              collaborating closely with designers, product teams, and other developers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};