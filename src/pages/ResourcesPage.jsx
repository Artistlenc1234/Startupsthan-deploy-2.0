import ScrollReveal from '../components/ScrollReveal';

export default function ResourcesPage({ showPage }) {
  const resources = [
    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>, title: 'Business Idea Checklist', desc: 'Validate your idea before investing time and resources.' },
    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2Z"/><path d="M9 4v14M15 6v14"/></svg>, title: 'Startup Canvas', desc: 'Map out your entire business on a single page.' },
    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="16.5" rx="2.5"/><path d="M9 4.3V3.6h6v.7"/><path d="M9.5 10h5"/><path d="M9.5 13.5h5"/><path d="M9.5 17h3"/></svg>, title: 'Business Plan Template', desc: 'Comprehensive template to structure your business plan.' },
    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><rect x="5" y="11" width="3.2" height="7" rx="1"/><rect x="10.4" y="6" width="3.2" height="12" rx="1"/><rect x="15.8" y="9" width="3.2" height="9" rx="1"/></svg>, title: 'Pitch Deck Template', desc: 'Investor-ready presentation template used by top founders.' },
    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l8 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M18 9a3 3 0 0 1 0 6"/></svg>, title: 'Marketing Plan Template', desc: 'Plan your go-to-market strategy from day one.' },
    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6.5" width="19" height="11" rx="2.5"/><circle cx="12" cy="12" r="2.4"/></svg>, title: 'Funding Checklist', desc: 'Everything you need to get investor-ready.' },
    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M9 13v1M15 13v1"/><path d="M10 17h4"/><path d="M12 8V5"/><circle cx="12" cy="4" r="1.4"/><path d="M3 12v3M21 12v3"/></svg>, title: 'AI Tools for Entrepreneurs', desc: 'Curated list of AI tools to build faster and smarter.' },
  ];

  return (
    <div className="page active" id="page-resources">
      <div className="page-hero">
        <h1>Founder <span>Toolkit</span></h1>
        <p>Free resources to help you build, launch, and scale your startup.</p>
      </div>

      <section>
        <div className="container">
          <ScrollReveal>
            <div className="section-tag">Free Resources</div>
            <h2 className="section-title">Everything You Need to <span>Start</span></h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="resource-grid">
              {resources.map((r, i) => (
                <div key={i} className="resource-card">
                  <div className="resource-icon">{r.icon}</div>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                    <div className="free-badge">Free</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a onClick={() => showPage('contact')} className="btn-primary" style={{ cursor: 'pointer' }}>Get Access to All Resources →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
