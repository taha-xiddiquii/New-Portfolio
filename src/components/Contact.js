'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setLoading(false);

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title animate-slideInUp mb-5">Get In Touch</h2>

        <div className="row g-4">
          <div className="col-lg-4 animated">
            <h5 className="text-accent mb-4">Contact Information</h5>
            <div className="mb-4">
              <h6 className="text-secondary mb-2">Email</h6>
              <a href="mailto:hafiz.taha.siddiqui@gmail.com" className="text-light">
                hafiz.taha.siddiqui@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <h6 className="text-secondary mb-2">Location</h6>
              <p className="text-light">
                Pakistan
              </p>
            </div>
            <div className="mb-4">
              <h6 className="text-secondary mb-3">Connect With Me</h6>
              <div className="d-flex gap-3 flex-wrap">
                <a href="https://github.com/TahaSiddiqui18" className="text-accent text-decoration-none hover-glow" title="GitHub">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/taha-xiddiqui-b36686301/" className="text-accent text-decoration-none hover-glow" title="LinkedIn">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/xiddiqui_hun_yawr/" className="text-accent text-decoration-none hover-glow" title="Instagram">
                  Instagram
                </a>
                <a href="https://www.facebook.com/taha.siddiqui.77985741" className="text-accent text-decoration-none hover-glow" title="Facebook">
                  Facebook
                </a>
                <a href="https://www.youtube.com/channel/UC5KWJBixm-rWIIuPy6YKxgw" className="text-accent text-decoration-none hover-glow" title="YouTube">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 animated">
            <div className="card border-0">
              <div className="card-body p-4">
                {submitted && (
                  <div className="alert alert-success alert-dismissible fade show animate-slideInUp" role="alert">
                    <strong>Success!</strong> Thank you for your message. I&apos;ll get back to you soon!
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setSubmitted(false)}
                    ></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label text-secondary">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label text-secondary">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label text-secondary">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Inquiry"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label text-secondary">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 hover-lift"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
