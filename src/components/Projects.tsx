import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "EduConnect Platform",
    description: "A comprehensive educational social network connecting students, mentors, and educators with real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    tech: ["React", "Firebase", "Node.js", "Tailwind"],
    category: "Web App",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "FinTrack Dashboard",
    description: "Personal finance management dashboard with AI-powered insights, expense tracking, and interactive data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    category: "Dashboard",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "E-Commerce Mobile App",
    description: "Cross-platform mobile shopping experience with real-time inventory, secure payments, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React Native", "Firebase", "Stripe", "Redux"],
    category: "Mobile App",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Task Management System",
    description: "Enterprise-grade project management tool with team collaboration, Kanban boards, and automated workflows.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
    category: "Web App",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "AI Content Generator",
    description: "Smart content creation platform leveraging GPT for blog posts, marketing copy, and social media content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    category: "AI/ML",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with virtual tours, mortgage calculators, and agent matching.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Maps API"],
    category: "Web App",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];

const categories = ["All", "Web App", "Mobile App", "Dashboard", "AI/ML"];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-medium mb-2">Portfolio</p>
          <h2 className="heading-lg mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills in building scalable, user-focused applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      aria-label="View GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            whileHover={{ x: 5 }}
          >
            View All Projects on GitHub
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
