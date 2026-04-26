'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(savedTheme);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    document.body.classList.toggle('dark-theme', theme === 'dark');
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'light' ? '#ffffff' : '#1e3c72');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  };

  const navThemeClass = theme === 'dark' ? 'navbar-dark' : 'navbar-light';
  const themeButtonClass = theme === 'dark' ? 'btn btn-outline-light ms-3' : 'btn btn-outline-dark ms-3';
  const themeButtonLabel = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  const themeButtonIcon = theme === 'dark' ? '☀️' : '🌙';

  return (
    <nav
      className={`navbar navbar-expand-lg ${navThemeClass} sticky-top ${isScrolled ? 'shadow-lg' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'var(--navbar-bg-scrolled)' : 'var(--navbar-bg)',
      }}
    >
      <div className="container">
        <a className="navbar-brand animate-fadeIn" href="#home">
          {'<Hafiz Taha Siddiqui />'}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3 align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <button type="button" className={themeButtonClass} onClick={handleToggleTheme}>
                {themeButtonIcon} {themeButtonLabel}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
