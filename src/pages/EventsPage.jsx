import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function EventsPage({ showPage }) {
  const [tab, setTab] = useState('upcoming');

  return (
    <div className="page active" id="page-events">
      <div className="page-hero">
        <h1>Startupsthan <span>Events</span></h1>
        <p>From bootcamps to demo days — join our events and be part of the founder community.</p>
      </div>

      <section>
        <div className="container">
          <div className="events-tabs">
            <button className={`events-tab${tab === 'upcoming' ? ' active' : ''}`} onClick={() => setTab('upcoming')}>Upcoming Events</button>
            <button className={`events-tab${tab === 'past' ? ' active' : ''}`} onClick={() => setTab('past')}>Past Events</button>
          </div>

          {tab === 'upcoming' && (
            <div id="events-upcoming">
              <ScrollReveal>
                <h2 className="section-title" style={{ marginBottom: '32px' }}>What's <span>Coming Up</span></h2>
              </ScrollReveal>
              <ScrollReveal stagger>
                <div className="event-types-grid">
                  {[
                    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8a5 5 0 0 1 10 0v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"/><path d="M9.5 8a2.5 2.5 0 0 1 5 0"/><path d="M7 13h10"/></svg>, title: '8-Week Bootcamp', desc: 'Next batch enrolling soon. Limited seats.' },
                    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v4"/><path d="M9 21h6"/></svg>, title: 'Founder Talks', desc: 'Live sessions with successful entrepreneurs.' },
                    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0Z"/><path d="M7 6H4v1a3 3 0 0 0 3 3"/><path d="M17 6h3v1a3 3 0 0 1-3 3"/><path d="M10 14h4v3h-4z"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>, title: 'Startup Challenges', desc: 'Compete and win with your startup idea.' },
                    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 13a14 14 0 0 1 8-9c2.5 0 4 1.5 4 4a14 14 0 0 1-9 8"/><path d="m9 13 2 2"/><circle cx="14.5" cy="9.5" r="1.4"/></svg>, title: 'Demo Days', desc: 'Pitch your startup to investors & experts.' },
                  ].map((e, i) => (
                    <div key={i} className="event-type-card">
                      <div className="e-icon">{e.icon}</div>
                      <h4>{e.title}</h4>
                      <p>{e.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <div style={{ marginTop: '36px', background: 'rgba(111,41,124,0.05)', border: '1px dashed var(--purple)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Stay updated on all upcoming events</p>
                <a onClick={() => showPage('contact')} className="btn-primary" style={{ cursor: 'pointer' }}>Get Notified →</a>
              </div>
            </div>
          )}

          {tab === 'past' && (
            <div id="events-past">
              <h2 className="section-title" style={{ marginBottom: '32px' }}>Past <span>Events</span></h2>
              <ScrollReveal stagger>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
                  {[
                    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="m8 7 1.5-2h5L16 7"/><circle cx="12" cy="13" r="3.4"/></svg>, title: 'Photos & Videos', desc: 'Relive moments from our bootcamps, demo days, and founder talks.' },
                    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8L12 3Z"/></svg>, title: 'Success Stories', desc: 'Meet founders who launched their startups from our programs.' },
                    { icon: <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="m6 6-1.5 4M11 6l-1.5 4M16 6l-1.5 4"/></svg>, title: 'Highlights Reels', desc: 'Short videos from our most impactful events and sessions.' },
                  ].map((e, i) => (
                    <div key={i} style={{ background: 'var(--gray)', borderRadius: '14px', padding: '24px', border: '1px solid var(--gray2)' }}>
                      <div style={{ fontSize: '32px', marginBottom: '12px' }}>{e.icon}</div>
                      <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>{e.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{e.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
