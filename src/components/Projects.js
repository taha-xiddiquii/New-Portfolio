'use client';

import { useEffect } from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'MegaShop Website',
      description: 'A full-featured e-commerce mega website built with modern web technologies. This is my personal masterpiece created with HTML, CSS, and responsive design principles.',
      tags: ['HTML5', 'CSS3', 'Responsive Design', 'E-Commerce'],
      link: 'https://mega-shop-get.netlify.app/',
      icon: '🛒',
    },
    {
      title: 'Resume Builder',
      description: 'A professional resume building application that allows users to create, customize, and download their resume in multiple formats.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      link: 'https://milestone-5-2.netlify.app/',
      icon: '📋',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, professional portfolio website built with Next.js 14 and Bootstrap 5, featuring smooth animations and responsive design.',
      tags: ['Next.js', 'React', 'Bootstrap 5', 'CSS3'],
      link: '#',
      icon: '💼',
    },
    {
      title: 'Responsive Web Design',
      description: 'Collection of responsive web design projects showcasing mobile-first approach and modern CSS techniques.',
      tags: ['HTML5', 'CSS3', 'Bootstrap', 'Mobile-First'],
      link: '#',
      icon: '📱',
    },
    {
      title: 'JavaScript Projects',
      description: 'Interactive JavaScript applications demonstrating DOM manipulation, event handling, and user interaction patterns.',
      tags: ['JavaScript', 'DOM API', 'Vanilla JS', 'Interactive'],
      link: '#',
      icon: '⚡',
    },
    {
      title: 'Frontend Components',
      description: 'Reusable frontend components and UI elements built with Bootstrap and custom CSS for modern web applications.',
      tags: ['Bootstrap', 'CSS3', 'Components', 'UI Design'],
      link: '#',
      icon: '🎨',
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animated');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="section-title animate-slideInUp mb-5">Featured Projects</h2>

        <div className="row g-4 animate-stagger">
          {projects.map((project, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="animated">
                <div
                  className="card h-100 hover-lift overflow-hidden"
                  style={{ cursor: 'pointer' }}
                >
                  <div
                    style={{
                      height: '150px',
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(42, 82, 152, 0.3))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '60px',
                    }}
                  >
                    {project.icon}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-light mb-3">{project.title}</h5>
                    <p className="card-text text-secondary mb-3">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="badge"
                          style={{
                            backgroundColor: 'var(--secondary-color)',
                            fontSize: '0.75rem',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="btn btn-sm btn-outline-light w-100"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12 text-center animated">
            <p className="lead text-secondary mb-4">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com"
              className="btn btn-primary btn-lg px-5 hover-lift"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
