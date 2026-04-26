import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import '../styles/animations.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Hafiz Taha Siddiqui | Web Developer Portfolio',
  description: 'Professional portfolio of Hafiz Taha Siddiqui - Web Developer specializing in HTML, CSS, JavaScript, React, and Next.js. View projects and get in touch.',
  keywords: 'web developer, portfolio, HTML, CSS, JavaScript, React, Next.js, responsive design',
  authors: [{ name: 'Hafiz Taha Siddiqui' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1e3c72" />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
