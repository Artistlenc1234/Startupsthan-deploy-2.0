import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

function useCountUp(target, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const numericTarget = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/[0-9]/g, '');
    const duration = 1800;
    const step = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start) + suffix);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return count || '0';
}

function StatCard({ num, label }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); observer.unobserve(el); } }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const display = useCountUp(num, active);
  return (
    <div className="hero-stat" ref={ref}>
      <div className="num">{display || num}</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function HomePage({ showPage, reveal }) {
  return (
    <div className="page active" id="page-home">
      {/* Hero */}
      <section className="hero" style={{ padding: '60px 40px' }}>
        <div className="hero-content">
          <div className="hero-text">
            {/* <div className="hero-badge">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M9 13a14 14 0 0 1 8-9c2.5 0 4 1.5 4 4a14 14 0 0 1-9 8" /><path d="m9 13 2 2" /><circle cx="14.5" cy="9.5" r="1.4" /></svg>
              Learn. Build. Launch. Scale.
            </div> */}
            <h1>Making <span>Bharat </span> the <span>startupsthan</span> of the world.</h1>
            <p className="hero-sub">Startupsthan is an entrepreneurship ecosystem that empowers students, aspiring entrepreneurs, and early-stage founders with mentorship, practical learning, and funding readiness.</p>
            <div className="hero-ctas">
              {reveal.login && <a href="startupsthan_app.html" className="btn-primary lock-login">Launch the Platform →</a>}
              {reveal.platform && <a onClick={() => showPage('platform')} className="btn-secondary lock-platform">Explore Features</a>}
              {!reveal.login && <a onClick={() => showPage('contact')} className="btn-primary teaser-only">Get in Touch →</a>}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-stat-row">
              <StatCard num="01" label="Learn Entrepreneurship Skills" />
              <StatCard num="02" label="Build Your Business Idea" />
              <StatCard num="03" label="Lounch Your Startup Journey" />
              <StatCard num="04" label="Scale With Expert Guidance" />
            </div>
            <div className="hero-tagline">
              <div className="hero-tagline-icon">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 21.5h4" /><path d="M8.5 14.5A5.5 5.5 0 1 1 17 10a5.4 5.4 0 0 1-1.5 3.5c-.6.7-1 1.3-1 2.5h-5c0-1.2-.4-1.8-1-2.5Z" /></svg>
              </div>
              <p>"Where Ideas Meet Guidance, Founders Meet Mentors, and Dreams Become Businesses."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Startupsthan */}
      <section className="why-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-tag">Why Startupsthan</div>
            <h2 className="section-title">Most people have ideas.<br /><span>Very few build businesses.</span></h2>
            <p className="section-sub">We bridge the gap between ideas and execution by giving you the tools, mentors, and community to go from thinker to founder.</p>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></div>
                <h3>Find Your Opportunity</h3>
                <p>Identify problems worth solving and business opportunities in your own environment.</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg></div>
                <h3>Validate Your Idea</h3>
                <p>Learn market research techniques and validate your concept before investing time and money.</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 21.5h4" /><path d="M8.5 14.5A5.5 5.5 0 1 1 17 10a5.4 5.4 0 0 1-1.5 3.5c-.6.7-1 1.3-1 2.5h-5c0-1.2-.4-1.8-1-2.5Z" /></svg></div>
                <h3>Build a Business Model</h3>
                <p>Create a structured and scalable business model that attracts customers and investors.</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.6" /></svg></div>
                <h3>Build Your Brand</h3>
                <p>Create a compelling brand identity and marketing strategy for the AI generation.</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" /><circle cx="9.5" cy="7" r="3" /><path d="M21 19v-1a4 4 0 0 0-3-3.8" /><path d="M15.5 4.2a4 4 0 0 1 0 7.6" /></svg></div>
                <h3>Connect with Mentors</h3>
                <p>Access real founders, investors, and industry experts who guide you at every step.</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17 9.5 10.5l4 4L21 7" /><path d="M15 7h6v6" /></svg></div>
                <h3>Scale Your Startup</h3>
                <p>Get incubation support, funding readiness coaching, and growth strategy to scale fast.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey */}
      <section>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <div className="section-tag">The Journey</div>
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Your Journey From <span>Thinker To Founder</span></h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="journey-steps">
              <div className="journey-step"><div className="step-num s1">01</div><h3>Discover</h3><p>Find problems worth solving around you</p></div>
              <div className="journey-step"><div className="step-num s2">02</div><h3>Build</h3><p>Convert ideas into real business models</p></div>
              <div className="journey-step"><div className="step-num s3">03</div><h3>Launch</h3><p>Create your market-ready startup</p></div>
              <div className="journey-step"><div className="step-num s4">04</div><h3>Scale</h3><p>Grow with mentors, investors &amp; experts</p></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Platform Showcase */}
      {reveal.platform && (
        <section className="why-section lock-platform">
          <div className="container">
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: '12px' }}><div className="section-tag">The Platform</div></div>
              <h2 className="section-title" style={{ textAlign: 'center' }}>One Platform. <span>Idea to Funded.</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 8px', textAlign: 'center' }}>Startupsthan isn't just a program — it's a full operating system for your startup, with everything you need in one login.</p>
            </ScrollReveal>
            <ScrollReveal stagger>
              <div className="why-grid">
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><rect x="5" y="11" width="3.2" height="7" rx="1" /><rect x="10.4" y="6" width="3.2" height="12" rx="1" /><rect x="15.8" y="9" width="3.2" height="9" rx="1" /></svg></div><h3>Founder Dashboard</h3><p>Track your stage, milestones, health score, and your whole founding team in one place.</p></div>
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" /><path d="M6 10.5V15c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" /><path d="M21 8.7V14" /></svg></div><h3>Smart Mentor Matching</h3><p>Get matched to the right mentor by sector and stage, with structured sessions and notes.</p></div>
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 8h11l1 11.5a1 1 0 0 1-1 1.1H6.5a1 1 0 0 1-1-1.1L6.5 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg></div><h3>Startup Studio</h3><p>A vetted marketplace for hiring, marketing, legal, finance, manufacturing, and tech — pay securely via escrow.</p></div>
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V10.5" /><path d="M19 21V10.5" /><path d="M9.5 21v-7" /><path d="M14.5 21v-7" /><path d="M3.5 10.5 12 4.5l8.5 6Z" /></svg></div><h3>Scheme Finder</h3><p>Discover government grants, loans, and schemes matched to your startup — and track every application.</p></div>
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 9.5h17" /><path d="M8 3.2v3.6" /><path d="M16 3.2v3.6" /></svg></div><h3>Seminars &amp; Cohorts</h3><p>Book seats at live sessions, move through the bootcamp with your cohort, and unlock resources by stage.</p></div>
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6.5" width="19" height="11" rx="2.5" /><circle cx="12" cy="12" r="2.4" /></svg></div><h3>Investor Connect</h3><p>Switch on Investor Mode to get discovered by verified investors — with warm, vetted introductions.</p></div>
              </div>
            </ScrollReveal>
            {reveal.login && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <a href="startupsthan_app.html" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>Launch the Platform →</a>
                <a onClick={() => showPage('platform')} style={{ marginLeft: '10px', color: 'var(--purple)', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem', cursor: 'pointer' }}>See everything it does</a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--purple), var(--purple-dark))', padding: '60px 40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '16px' }}>Ready to Start Your Founder Journey?</h2>
            {/* <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '32px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6' }}>Create your free account, register your startup, and get matched with a mentor today.</p> */}
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {reveal.login && <a href="startupsthan_app.html" className="btn-primary lock-login">Get Started Free</a>}
              <a onClick={() => showPage('contact')} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '14px 28px', borderRadius: '10px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}>Get in Touch</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
