const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl">Portfolio</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
