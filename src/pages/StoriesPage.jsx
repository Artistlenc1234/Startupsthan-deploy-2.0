import ScrollReveal from '../components/ScrollReveal';

export default function StoriesPage() {
  const stories = [
    { initial: 'A', quote: '"Startupsthan gave me the structure I needed. I had an idea for a year but didn\'t know how to start. After the 8-week bootcamp, I pitched to investors on Demo Day."', name: 'Arjun Sharma', role: 'EdTech Founder, Bootcamp Batch 2' },
    { initial: 'P', quote: '"The mentors at Startupsthan are incredible. Real founders who\'ve been through it all. Their feedback completely changed how I think about my business model."', name: 'Priya Mehta', role: 'D2C Brand Founder, Bootcamp Batch 3' },
    { initial: 'R', quote: '"As a college E-Cell, partnering with Startupsthan was the best decision. Our students got hands-on experience and we had 5 startups launch from campus!"', name: 'Rahul Gupta', role: 'E-Cell Head, Partner Institution' },
    { initial: 'S', quote: '"From a confused engineering student to a startup founder in 8 weeks. The curriculum, the community, and the support — Startupsthan is the real deal."', name: 'Sneha Patel', role: 'AgriTech Founder, Bootcamp Batch 1' },
  ];

  return (
    <div className="page active" id="page-stories">
      <div className="page-hero">
        <h1>Ideas That Became <span>Businesses</span></h1>
        <p>Real stories from students and founders who transformed their ideas through Startupsthan.</p>
      </div>
      <section>
        <div className="container">
          <ScrollReveal>
            <div className="section-tag">Success Stories</div>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>What Our <span>Founders</span> Say</h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="stories-grid">
              {stories.map((s, i) => (
                <div key={i} className="story-card">
                  <div className="story-avatar">{s.initial}</div>
                  <p>{s.quote}</p>
                  <div className="story-name">{s.name}</div>
                  <div className="story-role">{s.role}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
