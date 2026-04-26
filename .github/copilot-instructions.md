# Portfolio Website - Copilot Instructions

This is a professional portfolio website built with Next.js 14 and Bootstrap 5.

## Project Overview

A complete portfolio website featuring:
- Modern dark theme with cyan accents
- Pure vanilla JavaScript animations
- Responsive Bootstrap 5 design
- No external dependencies except Bootstrap
- SEO optimized with Next.js 14

## Key Features

- **Sections**: Hero, About, Skills, Projects, Contact
- **Components**: Navbar, Footer, and section components
- **Animations**: Vanilla JS intersection observer for scroll animations
- **Responsive**: Mobile-first design with Bootstrap utilities
- **Performance**: Optimized Next.js setup with minimal dependencies

## File Structure

```
src/
├── app/
│   ├── layout.js (Root layout with Bootstrap)
│   ├── page.js (Home page)
│   └── globals.css (Global styles)
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
└── styles/
    └── animations.css
```

## Customization Guide

### Personal Information
1. Update name in [Hero.js](../src/components/Hero.js)
2. Add experience in [About.js](../src/components/About.js)
3. Modify skills in [Skills.js](../src/components/Skills.js)
4. Add projects in [Projects.js](../src/components/Projects.js)
5. Update contact details in [Contact.js](../src/components/Contact.js)

### Styling
- **Colors**: Edit CSS variables in [globals.css](../src/app/globals.css)
- **Animations**: Add/modify keyframes in [animations.css](../src/styles/animations.css)
- **Bootstrap**: Uses Bootstrap 5 utility classes

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deploy on Vercel, Netlify, or any hosting supporting Node.js applications.

---

**Last Updated**: April 25, 2026
