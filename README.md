# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme support, and a clean, professional design.

![Portfolio Preview](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop)

## ✨ Features

- **Responsive Design** — Looks great on desktop, tablet, and mobile
- **Dark/Light Theme** — Toggle between themes with system preference detection
- **Smooth Animations** — Powered by Framer Motion for delightful interactions
- **Filterable Projects** — Browse projects by category with animated transitions
- **Skills Showcase** — Categorized technical skills with animated progress bars
- **Contact Form** — Functional contact section with availability status
- **SEO Optimized** — Semantic HTML and proper meta tags

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Build Tool:** Vite
- **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd <project-name>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (shadcn)
│   ├── Navbar.tsx    # Navigation with theme toggle
│   ├── Hero.tsx      # Hero section with typewriter effect
│   ├── About.tsx     # About me section
│   ├── Skills.tsx    # Skills with progress bars
│   ├── Projects.tsx  # Filterable project showcase
│   ├── Services.tsx  # Services offered
│   ├── Contact.tsx   # Contact form
│   └── Footer.tsx    # Footer component
├── pages/
│   └── Index.tsx     # Main page layout
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── index.css         # Global styles & theme tokens
```

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/index.css` to customize the color palette:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 10%;
  --primary: 220 90% 56%;
  --accent: 280 85% 65%;
  /* ... more variables */
}
```

### Content

Update your personal information in the respective components:
- **Hero.tsx** — Name, role, tagline, social links
- **About.tsx** — Bio and story
- **Skills.tsx** — Technical skills and proficiency
- **Projects.tsx** — Project showcase data
- **Services.tsx** — Services you offer
- **Contact.tsx** — Contact information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **GitHub:** [github.com/yourusername](https://github.com)
- **LinkedIn:** [linkedin.com/in/yourusername](https://linkedin.com)
- **Email:** hello@example.com

---

