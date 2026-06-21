import { useEffect, useState } from 'react';
import logo from '../assets/Logo-img.svg';

export default function Navbar({ currentPage, showPage, reveal }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page) => {
    showPage(page);
    setNavOpen(false);
  };

  return (
    <nav id="mainNav" className={`${navOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <img src={logo} alt="Startupsthan" />
      </div>
      <ul className="nav-links" id="navLinks">
        <li><a onClick={() => handleNav('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
        <li><a onClick={() => handleNav('about')} className={currentPage === 'about' ? 'active' : ''}>About</a></li>
        {reveal.platform && <li className="lock-platform"><a onClick={() => handleNav('platform')} className={currentPage === 'platform' ? 'active' : ''}>Platform</a></li>}
        <li><a onClick={() => handleNav('bootcamp')} className={currentPage === 'bootcamp' ? 'active' : ''}>Bootcamp</a></li>
        {reveal.students && <li className="lock-students"><a onClick={() => handleNav('students')} className={currentPage === 'students' ? 'active' : ''}>Students</a></li>}
        {reveal.colleges && <li className="lock-colleges"><a onClick={() => handleNav('colleges')} className={currentPage === 'colleges' ? 'active' : ''}>Colleges</a></li>}
        {reveal.mentors && <li className="lock-mentors"><a onClick={() => handleNav('mentors')} className={currentPage === 'mentors' ? 'active' : ''}>Mentors</a></li>}
        <li><a onClick={() => handleNav('incubation')} className={currentPage === 'incubation' ? 'active' : ''}>Incubation</a></li>
        <li><a onClick={() => handleNav('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a></li>
        {reveal.login && (
          <li className="lock-login">
            <a href="startupsthan_app.html" className="nav-cta">Login / Sign Up</a>
          </li>
        )}
      </ul>
      <button className="hamburger" onClick={() => setNavOpen(!navOpen)} id="hamburger">
        <span /><span /><span />
      </button>
    </nav>
  );
}
