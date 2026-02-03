// App.tsx or your main page component
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Hero } from "../components/Hero"; // Assuming you have other sections
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="#">
          <Hero />
        </section>
        
        {/* About Section - Make sure id matches your navbar href */}
        <section id="about">
          <About />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* Services Section */}
        <section id="services">
          <Services />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}