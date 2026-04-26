'use client';

import { useEffect } from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Bootstrap'],
    },
    {
      title: 'Styling & Design',
      skills: ['Tailwind CSS', 'Bootstrap 5', 'Responsive Design', 'CSS Grid', 'Flexbox', 'UI Design'],
    },
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks & Tools',
      skills: ['Next.js', 'React', 'Git', 'VS Code', 'Netlify', 'Vercel'],
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
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="section-title animate-slideInUp mb-5">Skills & Expertise</h2>

        <div className="row g-4 animate-stagger">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="animated">
                <div className="card h-100 hover-lift">
                  <div className="card-body">
                    <h5 className="card-title text-accent mb-4">
                      <span className="me-2">{'>'}</span>
                      {category.title}
                    </h5>
                    <div className="d-flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="badge text-dark"
                          style={{
                            backgroundColor: 'var(--accent-color)',
                            animation: `slideInUp 0.6s ease-out ${0.1 * (skillIdx + 1)}s both`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="row mt-5 g-4">
          <div className="col-lg-6">
            <div className="animated">
              <h5 className="text-accent mb-4">Technical Proficiency</h5>
              {['HTML & CSS', 'JavaScript & TypeScript', 'React & Next.js', 'Bootstrap & Tailwind CSS'].map((skill, idx) => (
                <div key={idx} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">{skill}</span>
                    <span className="text-accent">
                      {[95, 90, 85, 92][idx]}%
                    </span>
                  </div>
                  <div
                    className="progress bg-dark"
                    role="progressbar"
                    style={{ height: '8px' }}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${[95, 90, 85, 92][idx]}%`,
                        backgroundColor: 'var(--accent-color)',
                        animation: `slideInLeft 1s ease-out ${0.2 * idx}s both`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="animated">
              <h5 className="text-accent mb-4">Core Skills</h5>
              {['Responsive Design', 'Web Development', 'Problem Solving', 'Attention to Detail'].map((skill, idx) => (
                <div key={idx} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">{skill}</span>
                    <span className="text-accent">
                      {[93, 90, 91, 92][idx]}%
                    </span>
                  </div>
                  <div
                    className="progress bg-dark"
                    role="progressbar"
                    style={{ height: '8px' }}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${[93, 90, 91, 92][idx]}%`,
                        backgroundColor: 'var(--accent-color)',
                        animation: `slideInLeft 1s ease-out ${0.2 * idx}s both`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
