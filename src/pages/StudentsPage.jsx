import ScrollReveal from '../components/ScrollReveal';

export default function StudentsPage() {
  return (
    <div className="page active lock-students" id="page-students">
      <div className="page-hero">
        <h1>Have an Idea?<br /><span>Let's Build It.</span></h1>
        <p>Startupsthan helps students discover entrepreneurship beyond classrooms.</p>
      </div>

      <div className="audience-grid">
        <ScrollReveal>
          <div>
            <div className="section-tag">Benefits</div>
            <h2 className="section-title">What You <span>Gain</span></h2>
            <ul className="benefit-list">
              {[
                'Learn business fundamentals from real entrepreneurs',
                'Work on real startup ideas with structured guidance',
                'Meet entrepreneurs and build your network',
                'Develop leadership and communication skills',
                'Learn AI-powered business tools and automation',
                'Build your personal brand online',
                'Pitch your startup to investors and experts',
              ].map((item, i) => (
                <li key={i}><div className="chk">✓</div>{item}</li>
              ))}
            </ul>
            <div style={{ marginTop: '32px' }}>
              <a href="startupsthan_app.html" className="btn-primary">Enroll Now →</a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div>
            <div className="section-tag">Who Can Join</div>
            <h2 className="section-title">Open to All <span>Ambitious</span> Students</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>Whether you're in your first year or final year, whether you have an idea or just curiosity — Startupsthan is for you.</p>
            <div className="who-tags">
              {[
                { label: 'Engineering Students', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z"/><path d="M6 10.5V15c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5"/><path d="M21 8.7V14"/></svg> },
                { label: 'BBA Students', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><rect x="5" y="11" width="3.2" height="7" rx="1"/><rect x="10.4" y="6" width="3.2" height="12" rx="1"/><rect x="15.8" y="9" width="3.2" height="9" rx="1"/></svg> },
                { label: 'B.Com Students', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg> },
                { label: 'B.Sc Students', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6"/><path d="M10 3v6l-4 8a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-8V3"/><path d="M7.5 14h9"/></svg> },
                { label: 'MBA Aspirants', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.6"/></svg> },
                { label: 'Future Entrepreneurs', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 21.5h4"/><path d="M8.5 14.5A5.5 5.5 0 1 1 17 10a5.4 5.4 0 0 1-1.5 3.5c-.6.7-1 1.3-1 2.5h-5c0-1.2-.4-1.8-1-2.5Z"/></svg> },
              ].map((t, i) => <span key={i} className="who-tag">{t.icon} {t.label}</span>)}
            </div>
            <div style={{ marginTop: '36px', background: 'var(--gray)', borderRadius: '16px', padding: '28px', border: '1px solid var(--gray2)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0Z"/><path d="M7 6H4v1a3 3 0 0 0 3 3"/><path d="M17 6h3v1a3 3 0 0 1-3 3"/><path d="M10 14h4v3h-4z"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
                What You Get
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Certificate of completion, demo day participation, mentor network access, startup resources toolkit, and lifelong community membership.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
