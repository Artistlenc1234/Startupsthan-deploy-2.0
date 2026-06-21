import { useState, useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BootcampPage from './pages/BootcampPage';
import StudentsPage from './pages/StudentsPage';
import CollegesPage from './pages/CollegesPage';
import MentorsPage from './pages/MentorsPage';
import IncubationPage from './pages/IncubationPage';
import ResourcesPage from './pages/ResourcesPage';
import EventsPage from './pages/EventsPage';
import StoriesPage from './pages/StoriesPage';
import ContactPage from './pages/ContactPage';
import PlatformPage from './pages/PlatformPage';

/* ============================================================
   REVEAL FLAGS — flip any to true to show that feature section
   ============================================================ */
const REVEAL = {
  platform: false,
  students: false,
  colleges: false,
  mentors: false,
  login: false,
};

/* Apply reveal classes to <html> element */
function applyRevealClasses(reveal) {
  const html = document.documentElement;
  Object.entries(reveal).forEach(([key, val]) => {
    if (val) html.classList.add(`reveal-${key}`);
    else html.classList.remove(`reveal-${key}`);
  });
}

/* ============================================================
   Logo — base64 data-URL injected via the same logic as original
   Using a text SVG placeholder matching original fallback.
   ============================================================ */
const LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='44' viewBox='0 0 220 44'><rect width='220' height='44' rx='8' fill='%236f297c'/><text x='12' y='29' font-family='Arial,sans-serif' font-size='17' font-weight='800' fill='white' letter-spacing='-0.5'>Startupsthan</text></svg>`;

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Apply reveal classes on mount
  useEffect(() => {
    applyRevealClasses(REVEAL);
  }, []);

  // Set logo src on mount and whenever footer logo changes
  useEffect(() => {
    const imgs = document.querySelectorAll('#logoImg, #footerLogoImg');
    imgs.forEach(img => { if (img) img.src = LOGO_SVG; });
  }, [currentPage]);

  const showPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':       return <HomePage showPage={showPage} reveal={REVEAL} />;
      case 'about':      return <AboutPage />;
      case 'bootcamp':   return <BootcampPage showPage={showPage} />;
      case 'students':   return <StudentsPage />;
      case 'colleges':   return <CollegesPage showPage={showPage} />;
      case 'mentors':    return <MentorsPage showPage={showPage} />;
      case 'incubation': return <IncubationPage showPage={showPage} />;
      case 'resources':  return <ResourcesPage showPage={showPage} />;
      case 'events':     return <EventsPage showPage={showPage} />;
      case 'stories':    return <StoriesPage />;
      case 'contact':    return <ContactPage />;
      case 'platform':   return <PlatformPage />;
      default:           return <HomePage showPage={showPage} reveal={REVEAL} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} showPage={showPage} reveal={REVEAL} />
      <main>
        {renderPage()}
      </main>
      <Footer showPage={showPage} />
    </>
  );
}
