import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code2, FolderOpen, Briefcase, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection for active item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      setScrolled(window.scrollY > 10);

      for (const item of navItems) {
        if (item.href === "#") continue;

        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveItem(item.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActiveItem(label);
    setIsOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // ← adjust this if scroll stops too high/low
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg bg-background/80" : ""
      }`}
    >
      <div className="section-container">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-xl font-bold text-foreground"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("Home", "#");
            }}
          >
            <span className="gradient-text">Dev</span>Portfolio
          </motion.a>

          {/* Desktop Menu Bar */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-secondary/50 rounded-full p-1 border border-border/50">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeItem === item.label;
                return (
                  <motion.button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item.label, item.href)}
                    className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-accent rounded-full pointer-events-none"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <Icon className={`w-4 h-4 ${isActive ? "text-accent-foreground" : ""}`} />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Tablet Navigation (Icons Only) */}
          <div className="hidden md:flex lg:hidden items-center">
            <div className="flex items-center bg-secondary/50 rounded-full p-1 border border-border/50">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeItem === item.label;
                return (
                  <motion.button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item.label, item.href)}
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={item.label}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabMd"
                        className="absolute inset-0 bg-accent rounded-full pointer-events-none"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <Icon className={`w-5 h-5 ${isActive ? "text-accent-foreground" : ""}`} />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => handleNavClick("Contact", "#contact")}
              className="hidden md:flex btn-accent text-sm py-2 px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 h-full w-4/5 max-w-xs z-50 md:hidden bg-background/95 backdrop-blur-xl border-r border-border shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-5 pb-8">
                <div className="flex-1 flex flex-col gap-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.label;

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.label, item.href);
                        }}
                        className={`flex items-center gap-4 px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-accent text-accent-foreground shadow-sm"
                            : "text-foreground hover:bg-secondary active:bg-secondary/70"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-current" />
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("Contact", "#contact");
                  }}
                  className="mt-6 btn-accent text-center py-4 text-base font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};