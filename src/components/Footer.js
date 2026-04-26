export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="text-accent mb-3">About Me</h5>
            <p className="text-secondary">
              A passionate web developer specializing in creating responsive, user-friendly websites and applications using modern technologies like HTML, CSS, JavaScript, and Next.js.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-accent mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-secondary text-decoration-none hover-glow">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-secondary text-decoration-none hover-glow">About</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-secondary text-decoration-none hover-glow">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-secondary text-decoration-none hover-glow">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-accent mb-3">Connect</h5>
            <div className="d-flex gap-3">
              <a href="https://github.com/taha-xiddiquii" className="text-secondary text-decoration-none hover-glow" aria-label="GitHub">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/taha-xiddiquii/" className="text-secondary text-decoration-none hover-glow" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/taha_xiddiquii/" className="text-secondary text-decoration-none hover-glow" aria-label="Instagram">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="mailto:tahaxiddiqui17@gmail.com" className="text-secondary text-decoration-none hover-glow" aria-label="Email">
                <i className="fas fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" style={{ borderColor: 'var(--border-color)' }} />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary mb-0">
              © {currentYear} All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-secondary mb-0">
              Designed & Built by <span className="text-accent">Hafiz Taha Siddiqui</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
