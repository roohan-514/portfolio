import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Writing', href: '#writing' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo">
          {'<RA />'}
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          transition: all 0.3s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.92);
          backdrop-filter: blur(12px);
          padding: 10px 0;
          border-bottom: 1px solid rgba(0, 212, 255, 0.1);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          font-size: 1.4rem;
          font-weight: 800;
          color: #00d4ff;
          letter-spacing: -1px;
        }
        .navbar-links {
          display: flex;
          gap: 32px;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: #94a3b8;
          transition: color 0.3s;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #00d4ff;
          transition: width 0.3s;
        }
        .nav-link:hover {
          color: #00d4ff;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .menu-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: #e2e8f0;
          transition: all 0.3s;
          border-radius: 2px;
        }
        .menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }
        .menu-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        .mobile-menu {
          background: rgba(10, 10, 15, 0.98);
          border-bottom: 1px solid rgba(0, 212, 255, 0.1);
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-link {
          font-size: 1rem;
          font-weight: 500;
          color: #94a3b8;
          padding: 8px 0;
          transition: color 0.3s;
        }
        .mobile-link:hover {
          color: #00d4ff;
        }
        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </motion.nav>
  )
}
