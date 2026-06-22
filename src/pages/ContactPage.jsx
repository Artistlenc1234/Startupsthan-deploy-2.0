import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (fieldErrors[e.target.name]) {
      setFieldErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!form.phone || !phoneRegex.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!form.type) {
      newErrors.type = 'Please select how you are reaching out.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          // This relies on an environment variable setup in Vite (.env or .env.local)
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone,
          type: form.type || 'Not specified',
          message: form.message,
          subject: `New Inquiry from ${form.name} via Website`,
          from_name: 'Startupsthan Website',
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page active" id="page-contact">
      <div className="page-hero" style={{ background: "linear-gradient(135deg, rgba(13,13,13,0.74) 0%, rgba(77,26,87,0.60) 55%, rgba(13,13,13,0.78) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=70') center/cover no-repeat", backgroundColor: '#0d0d0d' }}>
        <h1>Start Your<br /><span>Startup Journey</span> Today</h1>
        <p>Reach out to us for enrollment, partnerships, mentoring, or any queries.</p>
      </div>

      <div className="contact-layout">
        <ScrollReveal>
          <div className="contact-info">
            <div className="section-tag">Get in Touch</div>
            <h2>Let's build something <span style={{ color: 'var(--orange)' }}>great together.</span></h2>
            <p>Whether you're a student ready to start, a college looking to partner, a professional who wants to mentor, or someone who just has a question — we'd love to hear from you.</p>

            <div className="contact-item">
              <div className="c-icon">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <div className="c-text">
                <strong>Email</strong>
                <span>contact@startupsthan.in</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.15h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6 6l.93-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15Z" /></svg>
              </div>
              <div className="c-text">
                <strong>Phone / WhatsApp</strong>
                <span>+91 93263 40215</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="c-text">
                <strong>Location</strong>
                <span>India (Serving pan-India)</span>
              </div>
            </div>

            {/* <div className="connect-for">
              {['Student Enrollment', 'College Partnership', 'Become a Mentor', 'Invest / Sponsor', 'General Inquiry'].map((t, i) => (
                <span key={i}>
                  <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M9 13a14 14 0 0 1 8-9c2.5 0 4 1.5 4 4a14 14 0 0 1-9 8" /><path d="m9 13 2 2" /><circle cx="14.5" cy="9.5" r="1.4" /></svg>
                  {t}
                </span>
              ))}
            </div> */}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>Message Sent!</h4>
                <p style={{ color: 'var(--text-muted)' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Arjun Sharma" required />
                  {fieldErrors.name && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{fieldErrors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="arjun@example.com" required />
                  {fieldErrors.email && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{fieldErrors.email}</span>}
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 xxxxx xxxxx" required />
                  {fieldErrors.phone && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{fieldErrors.phone}</span>}
                </div>
                <div className="form-group">
                  <label>I'm reaching out as a… *</label>
                  <select name="type" value={form.type} onChange={handleChange} required>
                    <option value="">Select one</option>
                    <option>Student / Aspiring Entrepreneur</option>
                    <option>College / Institution</option>
                    <option>Mentor / Industry Expert</option>
                    <option>Investor / Sponsor</option>
                    <option>Other</option>
                  </select>
                  {fieldErrors.type && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{fieldErrors.type}</span>}
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your idea, question, or how you'd like to collaborate..." required />
                  {fieldErrors.message && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{fieldErrors.message}</span>}
                </div>
                {error && <div style={{ color: '#ff4d4f', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
