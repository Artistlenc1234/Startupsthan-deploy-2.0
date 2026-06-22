import ScrollReveal from '../components/ScrollReveal';

export default function BootcampPage({ showPage }) {
  const weeks = [
    { num: 'Week 01', title: 'Entrepreneur Mindset', desc: 'Think, act, and prepare like a founder. Build the mental framework for success.', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 21.5h4" /><path d="M8.5 14.5A5.5 5.5 0 1 1 17 10a5.4 5.4 0 0 1-1.5 3.5c-.6.7-1 1.3-1 2.5h-5c0-1.2-.4-1.8-1-2.5Z" /></svg> },
    { num: 'Week 02', title: 'Problem to Startup Idea', desc: 'Identify opportunities around you. Turn everyday problems into business ideas.', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 21.5h4" /><path d="M8.5 14.5A5.5 5.5 0 1 1 17 10a5.4 5.4 0 0 1-1.5 3.5c-.6.7-1 1.3-1 2.5h-5c0-1.2-.4-1.8-1-2.5Z" /></svg> },
    { num: 'Week 03', title: 'Market Research', desc: 'Understand customers and competition. Validate your idea with real data.', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><rect x="5" y="11" width="3.2" height="7" rx="1" /><rect x="10.4" y="6" width="3.2" height="12" rx="1" /><rect x="15.8" y="9" width="3.2" height="9" rx="1" /></svg> },
    { num: 'Week 04', title: 'Business Planning', desc: 'Build your startup blueprint. Define your value proposition and business model.', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="16.5" rx="2.5" /><path d="M9 4.3V3.6h6v.7" /><path d="M9.5 10h5" /><path d="M9.5 13.5h5" /><path d="M9.5 17h3" /></svg> },
    { num: 'Week 05', title: 'Branding & Marketing', desc: 'Create a brand for the AI generation. Build your presence and attract customers.', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0 0 18c1 0 1.5-.8 1.5-1.6 0-1 .8-1.4 1.8-1.4H17a4 4 0 0 0 4-4c0-5-4-7-9-7Z" /><circle cx="8" cy="11.5" r="1.1" /><circle cx="12" cy="8.5" r="1.1" /><circle cx="16" cy="11.5" r="1.1" /></svg> },
    { num: 'Week 06', title: 'Finance & Fundraising', desc: 'Understand money, investors, and growth. Learn to manage and raise capital.', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6.5" width="19" height="11" rx="2.5" /><circle cx="12" cy="12" r="2.4" /></svg> },
    { num: 'Week 07', title: 'Pitch Preparation', desc: 'Learn how to tell your startup story powerfully.', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0" /><path d="M12 17v4" /><path d="M9 21h6" /></svg> },
    {
      num: 'Week 08', title: 'Startup Launch', desc: 'Learn how to launch your startup and make it successful.', icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0Z" /><path d="M7 6H4v1a3 3 0 0 0 3 3" /><path d="M17 6h3v1a3 3 0 0 1-3 3" /><path d="M10 14h4v3h-4z" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>,

    },
  ];

  return (
    <div className="page active" id="page-bootcamp">
      <div className="page-hero" style={{ background: "linear-gradient(135deg, rgba(13,13,13,0.86) 0%, rgba(77,26,87,0.76) 60%, rgba(13,13,13,0.86) 100%), url('/src/assets/bootcamp-bg.JPG') center 40%/cover no-repeat", backgroundColor: '#0d0d0d' }}>
        <h1>Become <span>Startup Ready</span></h1>
        <p>A practical entrepreneurship program designed to take you from business idea to startup pitch.</p>
      </div>

      <section>
        <div className="container">
          <ScrollReveal>
            {/* <div className="section-tag">Curriculum</div> */}
            <h2 className="section-title">What You Will <span>Learn</span></h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="weeks-grid">
              {weeks.map((w, i) => (
                <div key={i} className="week-card" style={w.special ? { borderColor: 'var(--orange)', background: 'rgba(241,90,44,0.03)' } : {}}>
                  {/* <div className="week-num">{w.num}</div> */}
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                  <div className="week-icon">{w.icon}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <a onClick={() => showPage('contact')} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem', cursor: 'pointer' }}>Get in Touch →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
