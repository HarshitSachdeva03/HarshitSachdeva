import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { NavItem } from '../types';
import { PROFILE_NAME } from '../constants';
import { MenuIcon, CloseIcon } from './icons';

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate for programmatic navigation if needed

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (item: NavItem, event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setIsOpen(false); // Close mobile menu
    if (item.isPage) {
      // For page links, let React Router handle it (or use navigate if needed)
      // Link component already handles this
    } else {
      // For anchor links on the same page
      if (event) event.preventDefault();
      const targetId = item.path.substring(1); // Remove '#'
      
      // If not on the homepage, first navigate to homepage
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation and DOM update, then scroll
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Adjust timeout if necessary
      } else {
        // Already on homepage, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const NavLinkComponent: React.FC<{ item: NavItem }> = ({ item }) => {
    if (item.isPage) {
      return (
        <Link
          to={item.path}
          onClick={() => handleNavClick(item)} // handleNavClick will close menu
          className="block md:inline-block px-3 py-2 rounded-md text-sm font-medium text-muted-text hover:text-light-text hover:bg-secondary transition-colors"
        >
          {item.name}
        </Link>
      );
    }
    // For anchor links
    return (
      <a
        href={item.path}
        onClick={(e) => handleNavClick(item, e)}
        className="block md:inline-block px-3 py-2 rounded-md text-sm font-medium text-muted-text hover:text-light-text hover:bg-secondary transition-colors"
      >
        {item.name}
      </a>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={() => handleNavClick({name: "Home", path: "#home", isPage: false})} // Ensure home scrolls to top or #home
              className="flex-shrink-0 text-accent text-xl font-bold"
            >
              {PROFILE_NAME.split(' ')[0]}<span className="text-light-text">{PROFILE_NAME.split(' ').slice(1).join(' ')}</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1"> {/* Reduced space-x for tighter fit if needed */}
              {navItems.map((item) => (
                <NavLinkComponent key={item.name} item={item} />
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-text hover:text-light-text hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
               <NavLinkComponent key={item.name} item={item} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;