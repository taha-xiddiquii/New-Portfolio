# Quick Start Guide

Get your portfolio up and running in minutes!

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio in action.

## 3️⃣ Customize Your Portfolio

### Update Your Name & Title
**File**: `src/components/Hero.js`
- Change "Your Name" to your actual name
- Update the subtitle from "Full Stack Developer & Creative Problem Solver"

### Add Your Projects
**File**: `src/components/Projects.js`
- Modify the `projects` array with your own projects
- Update project titles, descriptions, and technologies
- Change the GitHub link to your profile

### Update Your About Section
**File**: `src/components/About.js`
- Write your professional bio
- Update the stats (projects completed, years of experience)
- Modify the "What I Do" list

### Customize Your Skills
**File**: `src/components/Skills.js`
- Edit skill categories and individual skills
- Adjust proficiency percentages in the progress bars

### Update Contact Information
**File**: `src/components/Contact.js`
- Add your email address
- Add your phone number
- Update your location
- Add your social media links

## 4️⃣ Change Colors (Optional)

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary-color: #1e3c72;      /* Primary blue */
  --secondary-color: #2a5298;    /* Darker blue */
  --accent-color: #00d4ff;       /* Cyan accent */
  --dark-bg: #0a0e27;           /* Dark background */
  --card-bg: #1a1f3a;           /* Card background */
  --border-color: #2d3748;      /* Border color */
  --text-primary: #e2e8f0;      /* Primary text */
  --text-secondary: #a0aec0;    /* Secondary text */
}
```

## 5️⃣ Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy on Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click Deploy

### Deploy on Other Platforms
- **Netlify**: Push to GitHub, connect repo, it auto-deploys
- **AWS Amplify**: Similar to Netlify
- **Your own server**: Build with `npm run build` and run `npm start`

## 📁 Key Files to Customize

| File | Purpose |
|------|---------|
| `src/components/Hero.js` | Main introduction section |
| `src/components/About.js` | About section with bio |
| `src/components/Skills.js` | Skills and expertise |
| `src/components/Projects.js` | Project showcase |
| `src/components/Contact.js` | Contact form and info |
| `src/app/globals.css` | Colors and main styles |
| `src/styles/animations.css` | Animation keyframes |

## 🎨 Animation Classes

Add these classes to elements to apply animations:

- `animate-fadeIn` - Fade in effect
- `animate-slideInLeft` - Slide from left
- `animate-slideInRight` - Slide from right
- `animate-slideInUp` - Slide from bottom
- `animate-bounceIn` - Bounce effect
- `animate-scaleUp` - Scale up effect
- `animate-glow` - Glowing effect
- `animate-pulse` - Pulsing effect
- `animate-float` - Floating effect

## 💡 Tips

1. **Add favicon**: Place `favicon.ico` in the `public` folder
2. **Add profile image**: Create an avatar and update the About section
3. **Add social icons**: Font Awesome icons are referenced in Footer
4. **Update meta tags**: Edit metadata in `src/app/layout.js`
5. **Add Google Analytics**: Add tracking code to layout.js

## ❓ Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next
npm install
npm run build
```

### Animations not working
Check that `src/styles/animations.css` is imported in `src/app/layout.js`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

---

Happy Building! 🚀
