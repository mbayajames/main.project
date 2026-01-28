const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">What I Do</p>
          <h2 className="heading-lg mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            I offer a range of services to help bring your ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <h3 className="heading-md mb-2">Web Development</h3>
            <p className="text-muted-foreground">Building responsive and modern web applications.</p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="heading-md mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">Creating intuitive and beautiful user interfaces.</p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="heading-md mb-2">Consulting</h3>
            <p className="text-muted-foreground">Providing technical advice and guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };
