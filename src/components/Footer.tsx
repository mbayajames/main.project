import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/mbayajames", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/james-muthiora-89915a271/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Email click handler
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // You can customize which email opens by default
    // This opens the default email client with the first email address
    window.location.href = "mailto:muthiorajames39@gmail.com";
    
    // Alternative: Show a dropdown/popup to choose email
    // For a simple solution, we're using the first email as default
  };

  return (
    <footer className="py-16 border-t border-border bg-secondary/20">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <a href="#" className="font-display text-2xl font-bold mb-4 inline-block">
              <span className="gradient-text">Dev</span>Portfolio
            </a>
            <div className="text-muted-foreground mb-6 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+254712555914" 
                  className="hover:text-foreground transition-colors"
                >
                  +254 712 555 914
                </a>
              </div>
              <div className="space-y-1 pt-2">
                <a 
                  href="mailto:muthiorajames39@gmail.com" 
                  className="block hover:text-foreground transition-colors"
                >
                  muthiorajames39@gmail.com
                </a>
                <a 
                  href="mailto:jmuthiora244@gmail.com" 
                  className="block hover:text-foreground transition-colors"
                >
                  jmuthiora244@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  onClick={social.label === "Email" ? handleEmailClick : undefined}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter or Quote */}
          <div>
            <h4 className="font-display font-semibold mb-4">Let's Connect</h4>
            <p className="text-muted-foreground mb-4">
              Based in Nairobi, Kenya. Open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="#contact"
              className="btn-outline text-sm py-2 px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};