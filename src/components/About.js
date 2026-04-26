'use client';

import { useEffect } from 'react';

export default function About() {
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
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title animate-slideInUp mb-5">About Me</h2>

        <div className="row g-4 align-items-center animate-stagger">
          <div className="col-lg-6">
            <div className="animated">
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(42, 82, 152, 0.3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '120px',
                  border: '2px solid var(--border-color)',
                }}
              >
                👨‍💻
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="animated">
              <p className="lead text-secondary mb-4">
                I&apos;m Hafiz Taha Siddiqui, a passionate web developer with a strong foundation in front-end technologies. I specialize in creating responsive, user-friendly websites and applications using modern technologies like HTML, CSS, JavaScript, Tailwind CSS, and Next.js. I love creating elegant solutions and building beautiful digital experiences.
              </p>

              <div className="mb-4">
                <h5 className="text-accent mb-3">What I Do</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="text-accent me-2">✓</span>
                    <span>Frontend Development with HTML, CSS & JavaScript</span>
                  </li>
                  <li className="mb-2">
                    <span className="text-accent me-2">✓</span>
                    <span>Responsive Web Design with Bootstrap & Tailwind CSS</span>
                  </li>
                  <li className="mb-2">
                    <span className="text-accent me-2">✓</span>
                    <span>Modern JavaScript & TypeScript Development</span>
                  </li>
                  <li className="mb-2">
                    <span className="text-accent me-2">✓</span>
                    <span>Next.js Framework & React.js</span>
                  </li>
                  <li className="mb-2">
                    <span className="text-accent me-2">✓</span>
                    <span>UI/UX Design & Web Design</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-accent mb-3">Stats</h5>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="card bg-transparent border-1">
                      <div className="card-body text-center">
                        <h3 className="text-accent mb-2">5+</h3>
                        <p className="text-secondary mb-0">Projects Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card bg-transparent border-1">
                      <div className="card-body text-center">
                        <h3 className="text-accent mb-2">3</h3>
                        <p className="text-secondary mb-0">Years Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
