const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">My Work</p>
          <h2 className="heading-lg mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-6">
            <h3 className="heading-md mb-2">Project 1</h3>
            <p className="text-muted-foreground">Description of project 1.</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="heading-md mb-2">Project 2</h3>
            <p className="text-muted-foreground">Description of project 2.</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="heading-md mb-2">Project 3</h3>
            <p className="text-muted-foreground">Description of project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Projects };
