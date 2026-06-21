import ScrollReveal from '../components/ScrollReveal';

export default function IncubationPage({ showPage }) {
  return (
    <div className="page active" id="page-incubation">
      <div className="page-hero" style={{ background: "linear-gradient(135deg, rgba(13,13,13,0.86) 0%, rgba(77,26,87,0.76) 60%, rgba(13,13,13,0.86) 100%), url('https://picsum.photos/seed/stsn-incubation/1600/700') center/cover no-repeat", backgroundColor: '#0d0d0d' }}>
        <h1>Beyond Learning.<br /><span>Building Real Businesses.</span></h1>
        {/* <p>After bootcamp, promising ideas enter Startupsthan Incubation Support.</p> */}
      </div>

      <section>
        <div className="container">
          <ScrollReveal>
            <div className="section-tag">Incubation Support</div>
            <h2 className="section-title">End-to-End <span>Startup Support</span></h2>
            <p className="section-sub" style={{ marginBottom: '0' }}>Promising startups get comprehensive incubation support across four key areas.</p>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="incub-grid">
              <div className="incub-card">
                <h3><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V8l9-4v17" /><path d="M13 10l7 2v9" /><path d="M3 21h18" /><path d="M7 9v0M7 12v0M7 15v0" /></svg> Business Building</h3>
                <ul><li>Strategy development</li><li>Business model refinement</li><li>Operations planning</li></ul>
              </div>
              <div className="incub-card">
                <h3><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0 0 18c1 0 1.5-.8 1.5-1.6 0-1 .8-1.4 1.8-1.4H17a4 4 0 0 0 4-4c0-5-4-7-9-7Z" /><circle cx="8" cy="11.5" r="1.1" /><circle cx="12" cy="8.5" r="1.1" /><circle cx="16" cy="11.5" r="1.1" /></svg> Brand Building</h3>
                <ul><li>Brand identity creation</li><li>Marketing planning</li><li>Digital presence setup</li></ul>
              </div>
              <div className="incub-card">
                <h3><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17 9.5 10.5l4 4L21 7" /><path d="M15 7h6v6" /></svg> Growth Support</h3>
                <ul><li>Customer acquisition strategy</li><li>Networking opportunities</li><li>Partnership development</li></ul>
              </div>
              <div className="incub-card">
                <h3><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6.5" width="19" height="11" rx="2.5" /><circle cx="12" cy="12" r="2.4" /></svg> Funding Readiness</h3>
                <ul><li>Pitch deck creation</li><li>Investor preparation</li><li>Investor connects</li></ul>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ marginTop: '48px', background: 'linear-gradient(135deg,var(--purple),var(--purple-dark))', borderRadius: '20px', padding: '40px', color: 'white', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '12px' }}>Ready to take your idea further?</h3>
              {/* <p style={{ opacity: '0.8', marginBottom: '28px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6' }}>Complete the 8-week bootcamp and get considered for Startupsthan's incubation program.</p> */}
              <a onClick={() => showPage('bootcamp')} className="btn-primary" style={{ cursor: 'pointer' }}>Get in Touch →</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
