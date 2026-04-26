# Setup & Deployment Guide

Complete guide for setting up and deploying your professional portfolio.

## 🖥️ System Requirements

- **Node.js**: 18.17 or higher
- **npm**: 8.19 or higher (or yarn, pnpm, bun)
- **Git**: 2.0 or higher (for version control)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## ✅ Pre-Setup Checklist

- [ ] Node.js and npm installed (`node --version` and `npm --version`)
- [ ] Git installed (`git --version`)
- [ ] Code editor (VS Code recommended)
- [ ] GitHub account (for deployment)
- [ ] Domain name (optional, for custom domain)

## 📦 Installation Steps

### Step 1: Clone or Download the Project

```bash
# If cloning from GitHub
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Or navigate to the folder if already downloaded
cd path/to/portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages:
- Next.js 16.2.4
- React 19.2.4
- React DOM 19.2.4
- Bootstrap 5.3.0
- ESLint

### Step 3: Verify Installation

```bash
# Check Next.js version
npx next --version

# Run linter to check for issues
npm run lint
```

## 🚀 Development Workflow

### Start Development Server

```bash
npm run dev
```

The server starts at `http://localhost:3000`

**Features:**
- Hot Module Replacement (HMR) - changes reflect instantly
- Error overlay for debugging
- Automatic page reloads

### Edit and Preview

1. Open `src/components/` files in your editor
2. Make changes
3. See updates in browser immediately
4. Use browser DevTools (F12) to debug

### Build Optimization

```bash
npm run build
```

Creates optimized production build:
- Minified JavaScript and CSS
- Image optimization
- Static page generation
- Tree-shaking (unused code removal)

### Test Production Build Locally

```bash
npm run build
npm start
```

Server runs at `http://localhost:3000` in production mode

## 📱 Customization Workflow

### 1. Update Profile Information

**Step-by-step:**

1. **Hero Section** (`src/components/Hero.js`)
   ```javascript
   <h1 className="display-3 fw-bold mb-3">
     Hi, I'm <span className="gradient-text">YOUR NAME HERE</span>
   </h1>
   ```

2. **About Section** (`src/components/About.js`)
   ```javascript
   <p className="lead text-secondary mb-4">
     UPDATE YOUR BIO HERE
   </p>
   ```

3. **Skills** (`src/components/Skills.js`)
   ```javascript
   const skillCategories = [
     {
       title: 'Your Category',
       skills: ['Skill1', 'Skill2', 'Skill3'],
     },
     // Add more categories
   ];
   ```

4. **Projects** (`src/components/Projects.js`)
   ```javascript
   const projects = [
     {
       title: 'Your Project',
       description: 'Project description',
       tags: ['Tech1', 'Tech2'],
       link: '#',
       icon: '🎯',
     },
     // Add more projects
   ];
   ```

5. **Contact** (`src/components/Contact.js`)
   ```javascript
   <a href="mailto:your.email@example.com">
     your.email@example.com
   </a>
   ```

### 2. Customize Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary-color: #1e3c72;      /* Main color */
  --secondary-color: #2a5298;    /* Secondary color */
  --accent-color: #00d4ff;       /* Highlight color */
  --dark-bg: #0a0e27;           /* Background */
  --card-bg: #1a1f3a;           /* Card background */
  --text-primary: #e2e8f0;      /* Main text */
  --text-secondary: #a0aec0;    /* Secondary text */
}
```

### 3. Add Custom Animations

Edit `src/styles/animations.css`:

```css
@keyframes myAnimation {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-myAnimation {
  animation: myAnimation 0.6s ease-out;
}
```

Use in components:
```javascript
<div className="animate-myAnimation">Content</div>
```

## 🌐 Deployment Options

### Option 1: Deploy on Vercel (Recommended)

**Why Vercel?**
- Built by Next.js creators
- Automatic deployments
- Free tier available
- Custom domains
- Analytics included
- Environment variables support

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure (Optional)**
   - Add environment variables if needed
   - Set root directory (default: `./`)
   - Build command: `npm run build`
   - Output directory: `.next`

4. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys your site
   - Get a URL like `https://portfolio-xxx.vercel.app`

5. **Add Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings
   - Add custom domain
   - Update DNS records with your registrar

### Option 2: Deploy on Netlify

1. **Connect Repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your portfolio repository

2. **Configure Build**
   - Build command: `npm run build && npm install -g http-server`
   - Publish directory: `.next`

3. **Deploy**
   - Netlify auto-deploys on every push to main branch

### Option 3: Deploy on AWS Amplify

1. **Connect Repository**
   - Visit AWS Amplify Console
   - Click "New App"
   - Connect GitHub
   - Select repository and branch

2. **Build Settings**
   - Framework: Next.js
   - Build command: `npm run build`
   - Start command: `npm start`

3. **Deploy**
   - Amplify handles deployment automatically

### Option 4: Self-Hosted Deployment

**On Your Own Server (Linux/Unix):**

1. **Connect via SSH**
   ```bash
   ssh user@your-server.com
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   npm install
   npm run build
   ```

4. **Use PM2 for Process Management**
   ```bash
   sudo npm install -g pm2
   pm2 start "npm start" --name "portfolio"
   pm2 startup
   pm2 save
   ```

5. **Setup Nginx Reverse Proxy**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
     }
   }
   ```

6. **Enable HTTPS with Let's Encrypt**
   ```bash
   sudo apt-get install certbot
   sudo certbot certonly --nginx -d yourdomain.com
   ```

## 🔧 Environment Variables

Create `.env.local` for sensitive information:

```env
# Example (not needed for basic portfolio)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-id
CONTACT_EMAIL=your-email@example.com
```

Access in components:
```javascript
const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
```

## 📊 Performance Optimization

### Enable Analytics

Add Google Analytics to `src/app/layout.js`:

```javascript
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
  `
}} />
```

### Image Optimization

Use Next.js Image component:

```javascript
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Profile"
  width={300}
  height={300}
/>
```

### SEO Optimization

Edit metadata in `src/app/layout.js`:

```javascript
export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'Professional portfolio showcasing projects and skills',
  keywords: 'developer, portfolio, projects',
  openGraph: {
    title: 'Your Name',
    description: 'Portfolio Website',
    url: 'https://yourdomain.com',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Module not found | Delete `node_modules` and `package-lock.json`, run `npm install` |
| Build fails | Check for syntax errors, run `npm run lint` |
| Styling issues | Clear `.next` folder and rebuild |
| Animations lag | Reduce animation complexity, use `will-change` CSS |

### Debug Mode

```bash
# Run with debug output
DEBUG=* npm run dev

# Check build size
npm run build -- --debug
```

## 📝 Version Control

### Useful Git Commands

```bash
# Stage changes
git add .

# Commit
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main

# Create new branch for features
git checkout -b feature/new-section
git push -u origin feature/new-section
```

### .gitignore (Already Set)

The portfolio automatically ignores:
- `node_modules/`
- `.next/`
- `.env.local`
- Build artifacts

## 📞 Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Bootstrap Docs**: https://getbootstrap.com
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Help**: https://docs.github.com

## 🎉 You're All Set!

Your professional portfolio is ready to showcase your work to the world!

**Next Steps:**
1. ✅ Customize content
2. ✅ Test locally
3. ✅ Deploy online
4. ✅ Share with your network

Happy coding! 🚀
