import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLink {
    name: string;
    href: string;
    target?: string;
  }

  const navLinks: NavLink[] = [
    { name: 'Inicio', href: '/' },
    { name: 'Trayectoria', href: '/historia' },
    { name: 'Proyectos', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'Contacto', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo Icon */}
          <div className="relative flex items-center justify-center size-10 md:size-11 rounded-xl bg-slate-900 shadow-md group-hover:shadow-lg transition-all duration-300 overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg viewBox="0 0 40 40" className="w-6 h-6 md:w-7 md:h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Back 'M' - Gradient */}
              <path 
                d="M8 28 L 14 12 L 20 22 L 26 12 L 32 28" 
                stroke="url(#m-gradient)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transform translate-y-1 -translate-x-1 group-hover:translate-y-1.5 group-hover:-translate-x-1.5 transition-transform duration-300"
              />
              {/* Front 'M' - White */}
              <path 
                d="M8 28 L 14 12 L 20 22 L 26 12 L 32 28" 
                stroke="white" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transform -translate-y-0.5 translate-x-0.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
              />
              <defs>
                <linearGradient id="m-gradient" x1="8" y1="12" x2="32" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0d9488" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col text-left">
            <span className="text-base md:text-lg font-display font-bold text-slate-900 leading-none group-hover:text-brand-600 transition-colors tracking-tight">
              Mariem Miliani
            </span>
            <span className="text-[10px] md:text-[11.5px] font-medium text-slate-500 tracking-[0.05em] md:tracking-[0.1em] uppercase mt-1">
              Negocio · Operaciones · Análisis
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') || link.href.includes('#') || link.target ? (
              <a 
                key={link.name} 
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full"
        >
          {navLinks.map((link) => (
            link.href.startsWith('#') || link.href.includes('#') || link.target ? (
              <a 
                key={link.name} 
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
        </motion.nav>
      )}
    </header>
  );
}
