const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Skills & Expertise</p>
          <h2 className="heading-lg mb-4">
            What I'm <span className="gradient-text">Good At</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Here are the technologies and tools I use to build amazing applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-6 text-center">
            <h3 className="heading-md mb-2">React</h3>
            <p className="text-muted-foreground">Building interactive UIs</p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="heading-md mb-2">TypeScript</h3>
            <p className="text-muted-foreground">Type-safe development</p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="heading-md mb-2">Node.js</h3>
            <p className="text-muted-foreground">Server-side development</p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="heading-md mb-2">CSS</h3>
            <p className="text-muted-foreground">Styling and animations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
