import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="page active" id="page-about">
      <div className="page-hero" style={{ background: "linear-gradient(135deg, rgba(13,13,13,0.86) 0%, rgba(77,26,87,0.76) 60%, rgba(13,13,13,0.86) 100%), url('https://picsum.photos/seed/stsn-about/1600/700') center/cover no-repeat", backgroundColor: '#0d0d0d' }}>
        <h1>Creating Tomorrow's<br /><span>Entrepreneurs</span> Today</h1>
        <p>Startupsthan is a platform created with a vision to build Bharat's next generation of entrepreneurs.</p>
      </div>

      <div className="about-grid">
        <ScrollReveal>
          <div className="about-text">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">We believe entrepreneurship is for <span>everyone</span></h2>
            <p>Startupsthan is a platform created with a vision to build Bharat's next generation of entrepreneurs. We believe entrepreneurship is not just about starting companies — it's about developing the ability to solve problems, create value, innovate, and build sustainable businesses.</p>
            <p>Through structured programs, expert mentorship, practical workshops, and startup ecosystem support, we guide founders at every stage of their journey — from raw idea to funded startup.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="vm-grid">
            <div className="vm-card" style={{ gridColumn: 'span 2' }}>
              <h3>
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8L12 3Z" /></svg>
                Our Vision
              </h3>
              <p>To create an ecosystem where every idea gets the right direction, mentorship, and opportunity to become a successful business.</p>
            </div>
            <div className="vm-card orange">
              <h3>
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.6" /></svg>
                Our Mission
              </h3>
              <p>To empower students and entrepreneurs with practical business knowledge, real-world exposure, and expert guidance.</p>
            </div>
            <div className="vm-card">
              <h3>
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 21.5h4" /><path d="M8.5 14.5A5.5 5.5 0 1 1 17 10a5.4 5.4 0 0 1-1.5 3.5c-.6.7-1 1.3-1 2.5h-5c0-1.2-.4-1.8-1-2.5Z" /></svg>
                What We Do
              </h3>
              <p>Practical programs, mentorship networks, incubation support, and resources to help ideas become businesses.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <section style={{ background: 'var(--gray)', padding: '60px 40px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-tag">Our Mission Pillars</div>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>We Empower With <span>5 Core Things</span></h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px' }}>
              {[
                { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4a1 1 0 0 1 1-1h3v17H6a1 1 0 0 1-1-1Z" /><path d="M9 3h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H9Z" /><path d="m14 5 4 .6-2.2 13.4-4-.6" /></svg>, label: 'Practical Business Knowledge' },
                { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" /></svg>, label: 'Real-World Exposure' },
                { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="18" height="11" rx="2" /><path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 14h18" /></svg>, label: 'Expert Guidance' },
                { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 7a4 4 0 0 0-5.2 5.2L4 18l2 2 5.8-5.8A4 4 0 0 0 17 9" /><path d="m14 10 3-3 .5-3.5L20 2l1 1-1.5 2.5L16 6Z" /></svg>, label: 'Startup Resources' },
                { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M9 13a14 14 0 0 1 8-9c2.5 0 4 1.5 4 4a14 14 0 0 1-9 8" /><path d="m9 13 2 2" /><circle cx="14.5" cy="9.5" r="1.4" /></svg>, label: 'Growth Opportunities' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '24px', border: '1px solid var(--gray2)', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '6px' }}>{item.label}</h4>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
