import ScrollReveal from '../components/ScrollReveal';

export default function PlatformPage() {
  const stages = ['✓ Registered','✓ Approved','Incubation','Idea Validated','Business Model','Brand Created','MVP Built','Market Tested','First Customer','Registered Business','Pitch Ready','Funded','Scaling','Established','Expansion'];

  return (
    <div className="page active lock-platform" id="page-platform">
      <div className="page-hero">
        <h1>The Startupsthan <span>Platform</span></h1>
        <p>Everything a founder needs — mentorship, learning, services, funding, and investor access — in one place.</p>
      </div>

      <section>
        <div className="container">
          <ScrollReveal>
            <div className="section-tag">For Founders</div>
            <h2 className="section-title">Run Your Startup From <span>One Dashboard</span></h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="incub-grid">
              <div className="incub-card"><h3>Dashboard &amp; Status</h3><ul><li>15-stage journey tracker (Registered → Expansion)</li><li>Startup health score with breakdown</li><li>Multi-founder support — your whole team in one account</li></ul></div>
              <div className="incub-card"><h3>Mentorship</h3><ul><li>Smart mentor matching by sector &amp; stage</li><li>1:1 messaging and structured session notes</li><li>Milestone roadmaps set by your mentor</li><li>Backed by Super Mentors who supervise quality and step in when needed</li></ul></div>
              <div className="incub-card"><h3>Seminars &amp; Learning</h3><ul><li>Book seats at live sessions &amp; masterclasses</li><li>Cohort-based bootcamp progress</li><li>Stage-gated resource library</li></ul></div>
              <div className="incub-card"><h3>Achievements</h3><ul><li>Earn badges as you hit milestones</li><li>Demo Day and funding recognition</li><li>Shareable founder profile</li></ul></div>
            </div>
          </ScrollReveal>

          <div style={{ marginTop: '56px' }}>
            <ScrollReveal>
              <div className="section-tag">The Journey</div>
              <h2 className="section-title">15 Stages, <span>One Clear Path</span></h2>
              <p className="section-sub">Your dashboard tracks exactly where you are — from the day you register to full expansion. (The 8-week bootcamp prepares you; the journey is what you build after.)</p>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                {stages.map((s, i) => (
                  <span key={i} className={`journey-pill${i < 2 ? ' done' : i === 2 ? ' current' : ''}`}>{s}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div style={{ marginTop: '64px' }}>
            <ScrollReveal>
              <div className="section-tag">Startup Studio</div>
              <h2 className="section-title">A Marketplace Built for <span>Early-Stage Startups</span></h2>
              <p className="section-sub">Vetted providers, fair pricing, and payments held in escrow until you approve delivery.</p>
            </ScrollReveal>
            <ScrollReveal stagger>
              <div className="partner-cards" style={{ marginTop: '32px' }}>
                {[
                  { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="18" height="11" rx="2"/><path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 14h18"/></svg>, label: 'Talent & Hiring', desc: 'Interns, freelancers, HR setup' },
                  { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l8 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M18 9a3 3 0 0 1 0 6"/></svg>, label: 'Marketing & Ads', desc: 'Branding, social, performance' },
                  { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16"/><path d="M7 20h10"/><path d="M5 7h14"/><path d="M5 7 2.5 12a3 3 0 0 0 5 0L5 7Z"/><path d="M19 7l-2.5 5a3 3 0 0 0 5 0L19 7Z"/></svg>, label: 'Legal & Compliance', desc: 'Registration, trademark, GST' },
                  { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6.5" width="19" height="11" rx="2.5"/><circle cx="12" cy="12" r="2.4"/></svg>, label: 'Finance & Funding', desc: 'CA, models, grant help' },
                  { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V11l6 4v-4l6 4V8l3 1v12Z"/><path d="M3 21h18"/></svg>, label: 'Manufacturing', desc: 'Sourcing, MOQ, packaging' },
                  { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 20h20"/></svg>, label: 'Tech & Product', desc: 'MVP, no-code, websites' },
                ].map((p, i) => (
                  <div key={i} className="partner-card">
                    <div className="p-icon">{p.icon}</div>
                    <h4>{p.label}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div style={{ marginTop: '64px' }}>
            <ScrollReveal>
              <div className="section-tag">Scheme Finder</div>
              <h2 className="section-title">Never Miss a <span>Government Scheme</span> Again</h2>
              <p className="section-sub">India's founders leave crores on the table. Startupsthan surfaces every grant, loan, and scheme matched to your startup — and helps you apply.</p>
            </ScrollReveal>
            <ScrollReveal stagger>
              <div className="why-grid" style={{ marginTop: '32px' }}>
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.6"/></svg></div><h3>Personalized Matching</h3><p>Schemes filtered to your sector, stage, and state — central, state, competitions, and international.</p></div>
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg></div><h3>Eligibility Checker</h3><p>Check if you qualify in 30 seconds before you spend time applying.</p></div>
                <div className="why-card"><div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="16.5" rx="2.5"/><path d="M9.5 4.3V3.6h5v.7"/><path d="M9.5 10h5"/><path d="M9.5 13.5h5"/><path d="M9.5 17h3"/></svg></div><h3>Application Tracker</h3><p>Track every application from Interested to Received, with document checklists.</p></div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div style={{ marginTop: '64px', background: 'linear-gradient(135deg,var(--purple),var(--purple-dark))', borderRadius: '20px', padding: '48px 40px', color: 'white', textAlign: 'center' }}>
              <div className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>Investor Connect</div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '14px 0' }}>Get Discovered by <span style={{ color: 'var(--orange-light)' }}>Investors</span></h2>
              <p style={{ opacity: '0.8', maxWidth: '520px', margin: '0 auto 28px', lineHeight: '1.7' }}>Switch on Investor Mode and an anonymized profile of your startup goes in front of our verified investor pool. Every introduction is vetted and warm — your details stay private until you're ready.</p>
              <a href="startupsthan_app.html" className="btn-primary">Launch the Platform →</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
