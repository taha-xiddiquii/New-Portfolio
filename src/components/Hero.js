'use client';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(135deg, rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8))',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Shapes */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1), transparent)',
          animation: 'float 6s ease-in-out infinite',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1), transparent)',
          animation: 'float 8s ease-in-out infinite 1s',
        }}
      ></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="animate-slideInLeft">
              <h1 className="display-3 fw-bold mb-3">
                Hi, I&apos;m <span className="gradient-text">Hafiz Taha Siddiqui</span>
              </h1>
              <h2 className="h2 text-secondary mb-4">
                Web Developer & Creative Builder
              </h2>
              <p className="lead mb-4 text-secondary">
                As a passionate web developer, I specialize in creating responsive, user-friendly websites and applications. With a strong foundation in front-end and back-end technologies like HTML, CSS, JavaScript, Tailwind CSS, and Next.js.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a 
                  href="#projects" 
                  className="btn btn-primary btn-lg px-5 hover-lift"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-outline-light btn-lg px-5 hover-lift"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="animate-scaleUp">
              <div
                style={{
                  width: '300px',
                  height: '300px',
                  margin: '0 auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00d4ff, #2a5298)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px',
                  color: '#fff',
                  animation: 'float 3s ease-in-out infinite',
                  boxShadow: '0 20px 60px rgba(0, 212, 255, 0.2)',
                }}
              >
                💻
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x pb-4">
          <div className="animate-float">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-accent"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
