const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="section-container text-center">
        <h1 className="heading-xl mb-4">
          Hi, I'm <span className="gradient-text">Developer</span>
        </h1>
        <p className="body-lg mb-8 max-w-2xl mx-auto">
          I build amazing web applications and love turning ideas into reality.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
