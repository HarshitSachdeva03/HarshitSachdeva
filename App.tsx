import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogPostPage from './components/BlogPostPage';
import BreakoutGame from './components/Game';
import { NAV_ITEMS, BLOG_POSTS } from './constants';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
  </>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <div className="flex flex-col min-h-screen bg-primary text-light-text">
        <Navbar navItems={NAV_ITEMS} />
        <main className="flex-grow" style={{paddingTop:50}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogList posts={BLOG_POSTS} />} />
            <Route path="/blog/:postId" element={<BlogPostPage posts={BLOG_POSTS} />} />
            <Route path="/game" element={<BreakoutGame />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;