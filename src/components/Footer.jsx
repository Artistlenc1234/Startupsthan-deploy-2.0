import logo from '../assets/Logo-img.svg';

export default function Footer({ showPage }) {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={"src/assets/Fotor-Logo-img.svg"} alt="Startupsthan" />
          <p>India's entrepreneurship ecosystem for students, early-stage founders, and the institutions that support them.</p>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a onClick={() => showPage('home')}>Home</a></li>
            <li><a onClick={() => showPage('about')}>About</a></li>
            <li><a onClick={() => showPage('bootcamp')}>Bootcamp</a></li>
            <li><a onClick={() => showPage('incubation')}>Incubation</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Community</h4>
          <ul>
            <li><a onClick={() => showPage('contact')}>Join Bootcamp</a></li>
            <li><a onClick={() => showPage('contact')}>Become a Mentor</a></li>
            <li><a onClick={() => showPage('contact')}>College Partner</a></li>
            <li><a onClick={() => showPage('contact')}>Get in Touch</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="mailto:contact@startupsthan.in">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>Email Us
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" stroke="none" />
                </svg>Instagram
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Startupsthan. All rights reserved.</span>
        <span className="footer-tagline">Where Ideas Meet Guidance</span>
      </div>
    </footer>
  );
}
