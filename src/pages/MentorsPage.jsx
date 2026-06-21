import ScrollReveal from '../components/ScrollReveal';

export default function MentorsPage({ showPage }) {
  const mentorTypes = [
    { label: 'Entrepreneurs', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 13a14 14 0 0 1 8-9c2.5 0 4 1.5 4 4a14 14 0 0 1-9 8"/><path d="m9 13 2 2"/><circle cx="14.5" cy="9.5" r="1.4"/></svg> },
    { label: 'Startup Founders', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg> },
    { label: 'CEOs', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 8 4 3 5-6 5 6 4-3-2 12H5Z"/><path d="M5 21h14"/></svg> },
    { label: 'Business Leaders', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/><path d="M3 21h18"/></svg> },
    { label: 'Investors', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6.5" width="19" height="11" rx="2.5"/><circle cx="12" cy="12" r="2.4"/></svg> },
    { label: 'Marketing Experts', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l8 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M18 9a3 3 0 0 1 0 6"/></svg> },
    { label: 'AI Experts', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M9 13v1M15 13v1"/><path d="M10 17h4"/><path d="M12 8V5"/><circle cx="12" cy="4" r="1.4"/><path d="M3 12v3M21 12v3"/></svg> },
    { label: 'Finance Pros', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><rect x="5" y="11" width="3.2" height="7" rx="1"/><rect x="10.4" y="6" width="3.2" height="12" rx="1"/><rect x="15.8" y="9" width="3.2" height="9" rx="1"/></svg> },
    { label: 'Legal Experts', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16"/><path d="M7 20h10"/><path d="M5 7h14"/><path d="M5 7 2.5 12a3 3 0 0 0 5 0L5 7Z"/><path d="M19 7l-2.5 5a3 3 0 0 0 5 0L19 7Z"/></svg> },
  ];

  return (
    <div className="page active lock-mentors" id="page-mentors">
      <div className="page-hero">
        <h1>Share Your Experience.<br /><span>Build Future Entrepreneurs.</span></h1>
        <p>Become a Startupsthan Mentor and shape India's next generation of founders.</p>
      </div>

      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <ScrollReveal>
              <div>
                <div className="section-tag">Who Can Mentor</div>
                <h2 className="section-title">Are You a <span>Leader?</span></h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.7' }}>We welcome professionals from all industries who have the knowledge, experience, and passion to guide young entrepreneurs.</p>
                <div className="mentor-who">
                  {mentorTypes.map((m, i) => (
                    <div key={i} className="mentor-type">{m.icon} {m.label}</div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <div className="section-tag">Your Contribution</div>
                <h2 className="section-title">How You <span>Help</span></h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.7' }}>As a Startupsthan mentor, you make a real difference. Here's how you contribute:</p>
                <ul className="mentor-contribute">
                  <li>Conduct live sessions and masterclasses</li>
                  <li>Review and give feedback on startup ideas</li>
                  <li>Guide early-stage founders with strategic advice</li>
                  <li>Support student founders during bootcamp</li>
                  <li>Judge startup pitch events and Demo Days</li>
                </ul>
                <div style={{ marginTop: '32px' }}>
                  <a onClick={() => showPage('contact')} className="btn-primary" style={{ cursor: 'pointer' }}>Become a Mentor →</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
