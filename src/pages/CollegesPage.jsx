import ScrollReveal from '../components/ScrollReveal';

export default function CollegesPage({ showPage }) {
  const provides = [
    { label: 'Structured Curriculum', desc: 'Entrepreneurship curriculum designed for students', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4a2 2 0 0 1 2-2h11v18H7a2 2 0 0 0-2 2Z"/><path d="M5 18a2 2 0 0 1 2-2h11"/></svg> },
    { label: 'Industry Mentors', desc: 'Real entrepreneurs guiding your students', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="18" height="11" rx="2"/><path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 14h18"/></svg> },
    { label: 'Startup Workshops', desc: 'Hands-on practical workshops and sessions', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 7a4 4 0 0 0-5.2 5.2L4 18l2 2 5.8-5.8A4 4 0 0 0 17 9"/><path d="m14 10 3-3 .5-3.5L20 2l1 1-1.5 2.5L16 6Z"/></svg> },
    { label: 'Innovation Challenges', desc: 'Campus-level startup competitions', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0Z"/><path d="M7 6H4v1a3 3 0 0 0 3 3"/><path d="M17 6h3v1a3 3 0 0 1-3 3"/><path d="M10 14h4v3h-4z"/><path d="M8 21h8"/><path d="M12 17v4"/></svg> },
    { label: 'Certificates', desc: 'Recognized completion certificates for students', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="12" height="13" rx="1"/><path d="M17 8h2v9a2 2 0 0 1-2 2H8"/><path d="M8.5 8h5M8.5 11h5"/></svg> },
    { label: 'Demo Day Support', desc: 'Full event execution and investor connects', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v4"/><path d="M9 21h6"/></svg> },
  ];

  const partners = [
    { label: '8 Week Bootcamp', desc: 'Full program execution on your campus', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8a5 5 0 0 1 10 0v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"/><path d="M9.5 8a2.5 2.5 0 0 1 5 0"/><path d="M7 13h10"/></svg> },
    { label: 'E-Cell Support', desc: 'Build and strengthen your entrepreneurship cell', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V10.5"/><path d="M19 21V10.5"/><path d="M9.5 21v-7"/><path d="M14.5 21v-7"/><path d="M3.5 10.5 12 4.5l8.5 6Z"/></svg> },
    { label: 'Innovation Programs', desc: 'Custom innovation challenges and hackathons', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></svg> },
    { label: 'Startup Competitions', desc: 'Inter-college and national level competitions', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13a4 4 0 0 1 4-4h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3Z"/><path d="M7 13V8a3 3 0 0 1 3-3h1a2 2 0 0 1 0 4h-1"/></svg> },
    { label: 'Founder Talks', desc: 'Inspiring sessions by successful entrepreneurs', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v4"/><path d="M9 21h6"/></svg> },
    { label: 'Campus Incubation', desc: 'Set up a student incubator on your campus', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V8l9-4v17"/><path d="M13 10l7 2v9"/><path d="M3 21h18"/></svg> },
  ];

  return (
    <div className="page active lock-colleges" id="page-colleges">
      <div className="page-hero">
        <h1>Build an Entrepreneurship<br /><span>Culture on Your Campus</span></h1>
        <p>Startupsthan partners with educational institutions to create startup-ready students.</p>
      </div>

      <section>
        <div className="container">
          <ScrollReveal>
            <div className="section-tag">What We Provide</div>
            <h2 className="section-title">Everything Your Institution <span>Needs</span></h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px', marginTop: '36px' }}>
              {provides.map((p, i) => (
                <div key={i} style={{ background: 'var(--gray)', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px', border: '1px solid var(--gray2)' }}>
                  <div style={{ fontSize: '22px', marginTop: '2px' }}>{p.icon}</div>
                  <div><h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '4px' }}>{p.label}</h4><p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{p.desc}</p></div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div style={{ marginTop: '64px' }}>
            <ScrollReveal>
              <div className="section-tag">Partnership Models</div>
              <h2 className="section-title" style={{ marginBottom: '32px' }}>Choose Your <span>Engagement</span></h2>
            </ScrollReveal>
            <ScrollReveal stagger>
              <div className="partner-cards">
                {partners.map((p, i) => (
                  <div key={i} className="partner-card">
                    <div className="p-icon">{p.icon}</div>
                    <h4>{p.label}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <a onClick={() => showPage('contact')} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem', cursor: 'pointer' }}>Partner With Startupsthan →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
