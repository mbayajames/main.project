import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, CheckCircle } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // WhatsApp phone number (replace with your actual WhatsApp number)
  const whatsappNumber = "254712555914"; // Remove the + sign and any spaces

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:*
${formData.message}
    
This message was sent from your portfolio website.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Show success state
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Clear form data
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Nairobi, Kenya" 
    },
    { 
      icon: Mail, 
      label: "Email", 
      value: "muthiorajames39@gmail.com" 
    },
    { 
      icon: Mail, 
      label: "Alternative Email", 
      value: "jmuthiora244@gmail.com" 
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+254 712 555 914",
      action: () => {
        // Optional: Make phone number clickable
        window.open(`tel:+254712555914`);
      }
    },
  ];

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">Get In Touch</p>
          <h2 className="heading-lg mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="font-display font-semibold text-xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className={`flex items-start gap-4 ${info.action ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}`}
                    onClick={info.action}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* WhatsApp Quick Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8"
              >
                <button
                  onClick={() => {
                    const defaultMessage = encodeURIComponent("Hello! I'm interested in discussing a project with you.");
                    window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, "_blank");
                  }}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.05-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.754-.721 2.002-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                    <path d="M20.52 3.449C18.24.986 15.054 0 11.986 0 5.462 0 .457 4.989.457 11.573c0 2.069.549 4.079 1.588 5.849L0 24l6.917-1.826c1.62.892 3.443 1.369 5.337 1.369 6.525 0 11.53-4.989 11.53-11.573 0-3.023-1.178-5.903-3.264-8.521zM11.986 21.38c-1.775 0-3.488-.523-4.973-1.478l-.361-.216-3.75.99.997-3.648-.235-.374c-.964-1.59-1.497-3.393-1.497-5.339 0-5.283 4.3-9.58 9.592-9.58 2.558 0 4.96.997 6.77 2.805 1.81 1.807 2.805 4.214 2.805 6.775 0 5.283-4.301 9.58-9.593 9.58z"/>
                  </svg>
                  Message on WhatsApp
                </button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Quick message without filling the form
                </p>
              </motion.div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/70 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="font-medium">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Currently accepting freelance work and collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn-accent w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Opening WhatsApp...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.05-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.754-.721 2.002-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                      <path d="M20.52 3.449C18.24.986 15.054 0 11.986 0 5.462 0 .457 4.989.457 11.573c0 2.069.549 4.079 1.588 5.849L0 24l6.917-1.826c1.62.892 3.443 1.369 5.337 1.369 6.525 0 11.53-4.989 11.53-11.573 0-3.023-1.178-5.903-3.264-8.521zM11.986 21.38c-1.775 0-3.488-.523-4.973-1.478l-.361-.216-3.75.99.997-3.648-.235-.374c-.964-1.59-1.497-3.393-1.497-5.339 0-5.283 4.3-9.58 9.592-9.58 2.558 0 4.96.997 6.77 2.805 1.81 1.807 2.805 4.214 2.805 6.775 0 5.283-4.301 9.58-9.593 9.58z"/>
                    </svg>
                    Send via WhatsApp
                  </span>
                )}
              </motion.button>
              
              <p className="text-xs text-muted-foreground text-center pt-2">
                After submitting, you'll be redirected to WhatsApp to send your message
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};