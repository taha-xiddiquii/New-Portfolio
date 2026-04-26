# Professional Portfolio Website

A complete, professional portfolio website built with **Next.js 14** and **Bootstrap 5**, featuring pure vanilla JavaScript animations and no external dependencies besides Bootstrap.

## 🎨 Features

- ✨ **Modern Design**: Beautiful dark theme with cyan accent colors
- 🎬 **Smooth Animations**: Pure vanilla JS animations (no animation libraries)
- 📱 **Fully Responsive**: Mobile-first responsive design with Bootstrap 5
- ⚡ **High Performance**: Optimized Next.js 14 with minimal dependencies
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessible**: WCAG compliant with proper ARIA labels
- 🎭 **Smooth Scrolling**: Smooth scroll behavior with Intersection Observer API
- 💻 **No External Dependencies**: Only Bootstrap 5 for styling (besides React & Next.js)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with Bootstrap import
│   │   ├── page.js            # Home page with all sections
│   │   ├── globals.css        # Global styles and theme variables
│   ├── components/
│   │   ├── Navbar.js          # Navigation bar with scroll detection
│   │   ├── Hero.js            # Hero section with animations
│   │   ├── About.js           # About section with stats
│   │   ├── Skills.js          # Skills with proficiency bars
│   │   ├── Projects.js        # Featured projects showcase
│   │   ├── Contact.js         # Contact form
│   │   └── Footer.js          # Footer with links
│   └── styles/
│       └── animations.css     # All animation keyframes
├── public/                    # Static assets
├── next.config.mjs            # Next.js configuration
├── jsconfig.json              # JavaScript configuration
├── package.json               # Dependencies
└── .gitignore                 # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Personal Information

Edit the following files with your information:

1. **[Hero.js](src/components/Hero.js)** - Change name and introduction
2. **[About.js](src/components/About.js)** - Update about section and experience
3. **[Skills.js](src/components/Skills.js)** - Modify skill categories and proficiency
4. **[Projects.js](src/components/Projects.js)** - Add your own projects
5. **[Contact.js](src/components/Contact.js)** - Update contact information
6. **[Footer.js](src/components/Footer.js)** - Update footer content
7. **[metadata](src/app/layout.js)** - Update page title and description

### Customize Colors

Modify CSS variables in [globals.css](src/app/globals.css):

```css
:root {
  --primary-color: #1e3c72;
  --secondary-color: #2a5298;
  --accent-color: #00d4ff;
  --dark-bg: #0a0e27;
  --card-bg: #1a1f3a;
  --border-color: #2d3748;
  --text-primary: #e2e8f0;
  --text-secondary: #a0aec0;
}
```

### Add Animation Classes

Available animation classes in [animations.css](src/styles/animations.css):
- `animate-fadeIn` - Fade in effect
- `animate-slideInLeft/Right/Up` - Slide animations
- `animate-bounceIn` - Bounce effect
- `animate-scaleUp` - Scale animation
- `animate-glow` - Glowing effect
- `animate-pulse` - Pulse animation
- `animate-float` - Floating effect
- `animate-stagger` - Staggered child animations

## 📦 Dependencies

- **next** (16.2.4) - React framework
- **react** (19.2.4) - UI library
- **react-dom** (19.2.4) - React DOM
- **bootstrap** (5.3.0) - CSS framework

Dev dependencies:
- **eslint** - Code linting
- **eslint-config-next** - Next.js ESLint config

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import the repository
4. Click Deploy

### Deploy on Other Platforms

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 💡 Features Breakdown

### Navbar
- Sticky navigation with scroll detection
- Smooth hover effects
- Mobile-responsive menu toggle
- Active link indicator

### Hero Section
- Large eye-catching heading with gradient text
- Call-to-action buttons
- Animated background shapes with floats
- Scroll indicator

### About Section
- Profile image placeholder
- Key skills with checkmarks
- Achievement statistics
- Smooth reveal animations

### Skills Section
- Skill categories with badges
- Animated proficiency bars
- Technical and soft skills
- Staggered animations on scroll

### Projects Section
- Project cards with icons
- Technology tags
- Project descriptions
- Hover lift effect
- Link to GitHub

### Contact Section
- Contact information display
- Full contact form with validation
- Success message animation
- Loading state for form submission
- Social media links

### Footer
- Quick navigation links
- Social media links
- Copyright information
- Responsive layout

## 🎯 Best Practices

- **Semantic HTML**: Proper heading hierarchy and structure
- **Accessibility**: ARIA labels, alt text, keyboard navigation
- **Performance**: Optimized images, lazy loading, efficient animations
- **Mobile First**: Responsive design works on all devices
- **Clean Code**: Well-organized, commented components
- **No External Dependencies**: Minimal external libraries for faster load times

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

---

Built with ❤️ using Next.js 14 and Bootstrap 5
